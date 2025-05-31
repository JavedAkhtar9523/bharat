import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default to admin for dashboard
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
        role,
      });
      setSuccess('Registration successful! Redirecting to login...');
      setError('');
      setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Admin Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { register, clearError } from '../redux/slices/authSlice';
// import { RootState } from '../redux/store';

// const RegisterPage: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, loading, error } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     if (user) {
//       navigate('/dashboard');
//     }
//     return () => {
//       dispatch(clearError());
//     };
//   }, [user, navigate, dispatch]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(register({ name, email, password }) as any);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-600 hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

// --------------------

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { register, clearError } from '../redux/slices/authSlice';
// import { RootState } from '../redux/store';

// const RegisterPage: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, loading, error } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     if (user) {
//       navigate('/dashboard');
//     }
//     return () => {
//       dispatch(clearError());
//     };
//   }, [user, navigate, dispatch]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Client-side validation
//     if (!name.trim()) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Name is required' });
//       return;
//     }
//     if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Valid email is required' });
//       return;
//     }
//     if (!password.trim() || password.length < 6) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Password must be at least 6 characters' });
//       return;
//     }
//     dispatch(register({ name, email, password }) as any);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-600 hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


// ===================================

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { register, clearError } from '../redux/slices/authSlice';
// import { RootState } from '../redux/store';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';

// const RegisterPage: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, loading, error } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     if (user) {
//       navigate('/');
//     }
//     return () => {
//       dispatch(clearError());
//     };
//   }, [user, navigate, dispatch]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name.trim()) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Name is required' });
//       return;
//     }
//     if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Valid email is required' });
//       return;
//     }
//     if (!password.trim() || password.length < 6) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Password must be at least 6 characters' });
//       return;
//     }
//     dispatch(register({ name, email, password }) as any);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">{t('register')}</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">{t('name')}</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">{t('email')}</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">{t('password')}</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//             disabled={loading}
//           >
//             {loading ? t('loading') : t('register')}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           {t('alreadyHaveAccount')}{' '}
//           <a href="/login" className="text-blue-600 hover:underline">
//             {t('login')}
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

// ==========================================

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { register, clearError } from '../redux/slices/authSlice';
// import { RootState } from '../redux/store';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';

// const RegisterPage: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, loading, error } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     if (user) {
//       navigate('/');
//     }
//     return () => {
//       dispatch(clearError());
//     };
//   }, [user, navigate, dispatch]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name.trim()) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Name is required' });
//       return;
//     }
//     if (!username.trim() || username.length < 3) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Username must be at least 3 characters' });
//       return;
//     }
//     if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Valid email is required' });
//       return;
//     }
//     if (!password.trim() || password.length < 6) {
//       dispatch({ type: 'auth/register/rejected', payload: 'Password must be at least 6 characters' });
//       return;
//     }
//     dispatch(register({ name, username, email, password }) as any);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">{t('register')}</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">{t('name')}</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">{t('username')}</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">{t('email')}</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">{t('password')}</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
//             disabled={loading}
//           >
//             {loading ? t('loading') : t('register')}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           {t('alreadyHaveAccount')}{' '}
//           <a href="/login" className="text-blue-600 hover:underline">
//             {t('login')}
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;