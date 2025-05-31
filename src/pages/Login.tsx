import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
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
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login, clearError } from '../redux/slices/authSlice';
// import { RootState } from '../redux/store';

// const LoginPage: React.FC = () => {
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
//     dispatch(login({ email, password }) as any);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
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
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           Don't have an account?{' '}
//           <a href="/register" className="text-blue-600 hover:underline">
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// =======================================

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login, clearError } from '../redux/slices/authSlice';
// import { RootState } from '../redux/store';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';

// const LoginPage: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
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
//     dispatch(login({ email, password }) as any);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">{t('login')}</h2>
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
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
//             {loading ? t('loading') : t('login')}
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           {t('dontHaveAccount')}{' '}
//           <a href="/register" className="text-blue-600 hover:underline">
//             {t('register')}
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;