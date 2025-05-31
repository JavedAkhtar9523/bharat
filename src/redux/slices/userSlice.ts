import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  _id: string;
  email: string;
  isAdmin: boolean;
  isSuperAdmin: boolean;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// Fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/users', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch users');
  }
});

// Update user role
export const updateUserRole = createAsyncThunk(
  'users/updateUserRole',
  async ({ userId, isAdmin }: { userId: string; isAdmin: boolean }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        '/api/users/role',
        { userId, isAdmin },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      return response.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update user role');
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUserRole.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        );
      });
  },
});

export default userSlice.reducer;


// =======================

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   isAdmin: boolean;
//   isSuperAdmin: boolean;
// }

// interface AdminAction {
//   _id: string;
//   action: string;
//   targetUserId: { name: string; email: string };
//   performedBy: { name: string; email: string };
//   timestamp: string;
// }

// interface UserState {
//   users: User[];
//   actions: AdminAction[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UserState = {
//   users: [],
//   actions: [],
//   loading: false,
//   error: null,
// };

// // Fetch all users
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
//   try {
//     const response = await axios.get('http://localhost:5000/api/users', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     return response.data;
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || 'Failed to fetch users');
//   }
// });

// // Update user role
// export const updateUserRole = createAsyncThunk(
//   'users/updateUserRole',
//   async ({ userId, isAdmin }: { userId: string; isAdmin: boolean }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         'http://localhost:5000/api/users/role',
//         { userId, isAdmin },
//         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
//       );
//       return response.data.user;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to update user role');
//     }
//   }
// );

// // Fetch admin actions
// export const fetchAdminActions = createAsyncThunk('users/fetchAdminActions', async (_, { rejectWithValue }) => {
//   try {
//     const response = await axios.get('http://localhost:5000/api/users/actions', {
//       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     });
//     return response.data;
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || 'Failed to fetch admin actions');
//   }
// });

// const userSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(updateUserRole.fulfilled, (state, action) => {
//         const updatedUser = action.payload;
//         state.users = state.users.map((user) =>
//           user._id === updatedUser._id ? updatedUser : user
//         );
//       })
//       .addCase(fetchAdminActions.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAdminActions.fulfilled, (state, action) => {
//         state.loading = false;
//         state.actions = action.payload;
//       })
//       .addCase(fetchAdminActions.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default userSlice.reducer;