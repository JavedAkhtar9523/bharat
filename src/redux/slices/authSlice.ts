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

// jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj66666666666666666
// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface User {
//   _id: string;
//   username: string;
//   mobile: string;
//   role: 'user' | 'admin';
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   role: 'user' | 'admin' | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem('token') || null,
//   role: null,
//   loading: false,
//   error: null,
// };

// // Async thunk for logging in
// export const login = createAsyncThunk<
//   { user: User; token: string; role: string },
//   { username: string; password: string },
//   { rejectValue: string }
// >('auth/login', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
//     localStorage.setItem('token', response.data.token);
//     return { user: response.data.user, token: response.data.token, role: response.data.role };
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || 'Login failed');
//   }
// });

// // Async thunk for registering
// export const register = createAsyncThunk<
//   { user: User; token: string; role: string },
//   { username: string; password: string; mobile: string },
//   { rejectValue: string }
// >('auth/register', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/register', credentials);
//     localStorage.setItem('token', response.data.token);
//     return { user: response.data.user, token: response.data.token, role: 'user' };
//   } catch (error: any) {
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
//     localStorage.removeItem('token');
//     return rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
//   }
// });

// // Async thunk for promoting a user to admin
// export const promoteToAdmin = createAsyncThunk<
//   void,
//   { userId: string },
//   { rejectValue: string }
// >('auth/promoteToAdmin', async ({ userId }, { getState, rejectWithValue }) => {
//   try {
//     const state = getState() as { auth: AuthState };
//     await axios.post(
//       'http://localhost:5000/api/auth/promote',
//       { userId },
//       { headers: { Authorization: `Bearer ${state.auth.token}` } }
//     );
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || 'Failed to promote user');
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.role = null;
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
//     builder.addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string; role: string }>) => {
//       state.loading = false;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.role = action.payload.role as 'user' | 'admin';
//       localStorage.setItem('token', action.payload.token); // Ensure this line exists

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
//     builder.addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string; role: string }>) => {
//       state.loading = false;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.role = action.payload.role as 'user' | 'admin';
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
//       state.role = action.payload.role;
//     });
//     builder.addCase(fetchUser.rejected, (state, action: PayloadAction<string | undefined>) => {
//       state.loading = false;
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       state.error = action.payload || 'Failed to fetch user';
//       localStorage.removeItem('token');
//     });

//     // Promote to Admin
//     builder.addCase(promoteToAdmin.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(promoteToAdmin.fulfilled, (state) => {
//       state.loading = false;
//     });
//     builder.addCase(promoteToAdmin.rejected, (state, action: PayloadAction<string | undefined>) => {
//       state.loading = false;
//       state.error = action.payload || 'Failed to promote user';
//     });
//   },
// });

// export const { logout, clearError } = authSlice.actions;
// export default authSlice.reducer;

// ==================---------------------==================

// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface User {
//   _id: string;
//   username: string;
//   mobile: string;
//   role: 'user' | 'admin';
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   role: 'user' | 'admin' | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem('token') || null,
//   role: null,
//   loading: false,
//   error: null,
// };

// // Async thunk for logging in
// export const login = createAsyncThunk<
//   { user: User; token: string; role: string },
//   { username: string; password: string },
//   { rejectValue: string }
// >('auth/login', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
//     const { token, role, user } = response.data;
//     localStorage.setItem('token', token);
//     return { user, token, role };
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || 'Login failed');
//   }
// });

// // Async thunk for registering
// export const register = createAsyncThunk<
//   { user: User; token: string; role: string },
//   { username: string; password: string; mobile: string },
//   { rejectValue: string }
// >('auth/register', async (credentials, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/register', credentials);
//     const { token, user } = response.data;
//     localStorage.setItem('token', token);
//     return { user, token, role: 'user' };
//   } catch (error: any) {
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
//     localStorage.removeItem('token');
//     return rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
//   }
// });

// // Async thunk for promoting a user to admin
// export const promoteToAdmin = createAsyncThunk<
//   void,
//   { userId: string },
//   { rejectValue: string }
// >('auth/promoteToAdmin', async ({ userId }, { getState, rejectWithValue }) => {
//   try {
//     const state = getState() as { auth: AuthState };
//     await axios.post(
//       'http://localhost:5000/api/auth/promote',
//       { userId },
//       { headers: { Authorization: `Bearer ${state.auth.token}` } }
//     );
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || 'Failed to promote user');
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.role = null;
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
//     builder.addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string; role: string }>) => {
//       state.loading = false;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.role = action.payload.role as 'user' | 'admin';
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
//     builder.addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string; role: string }>) => {
//       state.loading = false;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.role = action.payload.role as 'user' | 'admin';
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
//       state.role = action.payload.role;
//     });
//     builder.addCase(fetchUser.rejected, (state, action: PayloadAction<string | undefined>) => {
//       state.loading = false;
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       state.error = action.payload || 'Failed to fetch user';
//       localStorage.removeItem('token');
//     });

//     // Promote to Admin
//     builder.addCase(promoteToAdmin.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(promoteToAdmin.fulfilled, (state) => {
//       state.loading = false;
//     });
//     builder.addCase(promoteToAdmin.rejected, (state, action: PayloadAction<string | undefined>) => {
//       state.loading = false;
//       state.error = action.payload || 'Failed to promote user';
//     });
//   },
// });

// export const { logout, clearError } = authSlice.actions;
// export default authSlice.reducer;

// ==================jjjjjjjjjjjjj==================
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  _id: string;
  username: string;
  mobile: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  token: string | null;
  role: 'user' | 'admin' | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token') || null,
  role: null,
  loading: false,
  error: null,
};

// Async thunk for logging in
export const login = createAsyncThunk<
  { user: User; token: string; role: string },
  { username: string; password: string },
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
    const { token, role, user } = response.data;
    localStorage.setItem('token', token);
    return { user, token, role };
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Async thunk for registering
export const register = createAsyncThunk<
  { user: User; token: string; role: string },
  { username: string; password: string; mobile: string },
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', credentials);
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    return { user, token, role: 'user' };
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

// Async thunk for promoting a user to admin
export const promoteToAdmin = createAsyncThunk<
  void,
  { userId: string },
  { rejectValue: string }
>('auth/promoteToAdmin', async ({ userId }, { getState, rejectWithValue }) => {
  try {
    const state = getState() as { auth: AuthState };
    await axios.post(
      'http://localhost:5000/api/auth/promote',
      { userId },
      { headers: { Authorization: `Bearer ${state.auth.token}` } }
    );
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to promote user');
  }
});

// Async thunk for demoting a user to user
export const demoteToUser = createAsyncThunk<
  void,
  { userId: string },
  { rejectValue: string }
>('auth/demoteToUser', async ({ userId }, { getState, rejectWithValue }) => {
  try {
    const state = getState() as { auth: AuthState };
    await axios.post(
      'http://localhost:5000/api/auth/demote',
      { userId },
      { headers: { Authorization: `Bearer ${state.auth.token}` } }
    );
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to demote user');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
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
    builder.addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string; role: string }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role as 'user' | 'admin';
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
    builder.addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string; role: string }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role as 'user' | 'admin';
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
      state.role = action.payload.role;
    });
    builder.addCase(fetchUser.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.role = null;
      state.error = action.payload || 'Failed to fetch user';
      localStorage.removeItem('token');
    });

    // Promote to Admin
    builder.addCase(promoteToAdmin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(promoteToAdmin.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(promoteToAdmin.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.error = action.payload || 'Failed to promote user';
    });

    // Demote to User
    builder.addCase(demoteToUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(demoteToUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(demoteToUser.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.error = action.payload || 'Failed to demote user';
    });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;

// jjjjjjjjjjjjjjjjjjjjjj66666666J


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