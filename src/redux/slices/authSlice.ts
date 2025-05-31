import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
};

// Async thunk for logging in
export const login = createAsyncThunk<
  { user: User; token: string },
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Async thunk for registering
export const register = createAsyncThunk<
  { user: User; token: string },
  { name: string; email: string; password: string },
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Registration failed');
  }
});

// Async thunk for fetching user profile
export const fetchUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>('auth/fetchUser', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState() as { auth: AuthState };
    const response = await axios.get('http://localhost:5000/api/auth/me', {
      headers: { Authorization: `Bearer ${state.auth.token}` },
    });
    return response.data;
  } catch (error: any) {
    localStorage.removeItem('token');
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.error = action.payload || 'Login failed';
    });

    // Register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(register.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.error = action.payload || 'Registration failed';
    });

    // Fetch User
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = action.payload || 'Failed to fetch user';
      localStorage.removeItem('token');
    });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;


// -------------------

// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   isAdmin: boolean;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem('token') || null,
//   loading: false,
//   error: null,
// };

// // Async thunk for logging in
// export const login = createAsyncThunk<
//   { user: User; token: string },
//   { email: string; password: string },
//   { rejectValue: string }
// >('auth/login', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   } catch (error: any) {
//     console.error('Login error:', error.response?.data);
//     return rejectWithValue(error.response?.data?.message || 'Login failed');
//   }
// });

// // Async thunk for registering
// export const register = createAsyncThunk<
//   { user: User; token: string },
//   { name: string; email: string; password: string },
//   { rejectValue: string }
// >('auth/register', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/register', credentials);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   } catch (error: any) {
//     console.error('Register error:', error.response?.data);
//     return rejectWithValue(error.response?.data?.message || 'Registration failed');
//   }
// });

// // Async thunk for fetching user profile
// export const fetchUser = createAsyncThunk<
//   User,
//   void,
//   { rejectValue: string }
// >('auth/fetchUser', async (_, { getState, rejectWithValue }) => {
//   try {
//     const state = getState() as { auth: AuthState };
//     const response = await axios.get('http://localhost:5000/api/auth/me', {
//       headers: { Authorization: `Bearer ${state.auth.token}` },
//     });
//     return response.data;
//   } catch (error: any) {
//     console.error('Fetch user error:', error.response?.data);
//     localStorage.removeItem('token');
//     return rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.error = null;
//       localStorage.removeItem('token');
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Login
//     builder.addCase(login.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
//       state.loading = false;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     });
//     builder.addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
//       state.loading = false;
//       state.error = action.payload || 'Login failed';
//     });

//     // Register
//     builder.addCase(register.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
//       state.loading = false;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     });
//     builder.addCase(register.rejected, (state, action: PayloadAction<string | undefined>) => {
//       state.loading = false;
//       state.error = action.payload || 'Registration failed';
//     });

//     // Fetch User
//     builder.addCase(fetchUser.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
//       state.loading = false;
//       state.user = action.payload;
//     });
//     builder.addCase(fetchUser.rejected, (state, action: PayloadAction<string | undefined>) => {
//       state.loading = false;
//       state.user = null;
//       state.token = null;
//       state.error = action.payload || 'Failed to fetch user';
//       localStorage.removeItem('token');
//     });
//   },
// });

// export const { logout, clearError } = authSlice.actions;
// export default authSlice.reducer;



// =====================

// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   isAdmin: boolean;
//   isSuperAdmin: boolean;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem('token') || null,
//   loading: false,
//   error: null,
// };

// // Async thunk for logging in
// export const login = createAsyncThunk<
//   { user: User; token: string },
//   { email: string; password: string },
//   { rejectValue: string }
// >('auth/login', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   } catch (error: any) {
//     console.error('Login error:', error.response?.data);
//     return rejectWithValue(error.response?.data?.message || 'Login failed');
//   }
// });

// // Async thunk for registering
// export const register = createAsyncThunk<
//   { user: User; token: string },
//   { name: string; email: string; password: string },
//   { rejectValue: string }
// >('auth/register', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/register', credentials);
//     localStorage.setItem('token', response.data.token);
//     return response.data;
//   } catch (error: any) {
//     console.error('Register error:', error.response?.data);
//     return rejectWithValue(error.response?.data?.message || 'Registration failed');
//   }
// });

// // Async thunk for fetching user profile
// export const fetchUser = createAsyncThunk<User, void, { rejectValue: string }>(
//   'auth/fetchUser',
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const state = getState() as { auth: AuthState };
//       const response = await axios.get('http://localhost:5000/api/auth/me', {
//         headers: { Authorization: `Bearer ${state.auth.token}` },
//       });
//       return response.data;
//     } catch (error: any) {
//       console.error('Fetch user error:', error.response?.data);
//       localStorage.removeItem('token');
//       return rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.error = null;
//       localStorage.removeItem('token');
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
//         state.loading = false;
//         state.error = action.payload || 'Login failed';
//       })
//       .addCase(register.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(register.rejected, (state, action: PayloadAction<string | undefined>) => {
//         state.loading = false;
//         state.error = action.payload || 'Registration failed';
//       })
//       .addCase(fetchUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(fetchUser.rejected, (state, action: PayloadAction<string | undefined>) => {
//         state.loading = false;
//         state.user = null;
//         state.token = null;
//         state.error = action.payload || 'Failed to fetch user';
//         localStorage.removeItem('token');
//       });
//   },
// });

// export const { logout, clearError } = authSlice.actions;
// export default authSlice.reducer;