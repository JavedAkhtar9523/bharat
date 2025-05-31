// // frontend/src/pages/AdminUsers.tsx
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchUsers, updateUserRole } from '../redux/slices/userSlice';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';

// const AdminUsers: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector((state: RootState) => state.users);
//   const currentUser = useSelector((state: RootState) => state.auth.user);

//   useEffect(() => {
//     if (currentUser?.isSuperAdmin) {
//       dispatch(fetchUsers());
//     }
//   }, [dispatch, currentUser]);

//   const handleToggleAdmin = (userId: string, isAdmin: boolean) => {
//     dispatch(updateUserRole({ userId, isAdmin: !isAdmin }));
//   };

//   if (!currentUser?.isSuperAdmin) return <div>{t('accessDenied')}</div>;
//   if (loading) return <div>{t('loading')}</div>;
//   if (error) return <div>{t('error')}: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4">{t('manageUsers')}</h1>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">{t('email')}</th>
//             <th className="border p-2">{t('role')}</th>
//             <th className="border p-2">{t('action')}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id} className="border">
//               <td className="p-2">{user.email}</td>
//               <td className="p-2">{user.isAdmin ? 'Admin' : 'User'}</td>
//               <td className="p-2">
//                 <button
//                   onClick={() => handleToggleAdmin(user._id, user.isAdmin)}
//                   className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
//                 >
//                   {user.isAdmin ? t('revokeAdmin') : t('makeAdmin')}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsers;


// =====================

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchUsers, updateUserRole } from '../redux/slices/userSlice';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';
// import { Navigate } from 'react-router-dom';

// const AdminUsers: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector((state: RootState) => state.users);
//   const currentUser = useSelector((state: RootState) => state.auth.user);

//   useEffect(() => {
//     if (currentUser?.isSuperAdmin) {
//       dispatch(fetchUsers());
//     }
//   }, [dispatch, currentUser]);

//   const handleToggleAdmin = (userId: string, isAdmin: boolean) => {
//     dispatch(updateUserRole({ userId, isAdmin: !isAdmin }));
//   };

//   if (!currentUser?.isSuperAdmin) {
//     return <Navigate to="/" replace />;
//   }
//   if (loading) return <div>{t('loading')}</div>;
//   if (error) return <div>{t('error')}: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4">{t('manageUsers')}</h1>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">{t('email')}</th>
//             <th className="border p-2">{t('role')}</th>
//             <th className="border p-2">{t('action')}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id} className="border">
//               <td className="p-2">{user.email}</td>
//               <td className="p-2">{user.isAdmin ? t('admin') : t('user')}</td>
//               <td className="p-2">
//                 <button
//                   onClick={() => handleToggleAdmin(user._id, user.isAdmin)}
//                   className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
//                   disabled={user.isSuperAdmin} // Prevent modifying super-admins
//                 >
//                   {user.isAdmin ? t('revokeAdmin') : t('makeAdmin')}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUsers;



// ===================================================

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchUsers, updateUserRole } from '../redux/slices/userSlice';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { Navigate } from 'react-router-dom';

const AdminUsers: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);
  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (currentUser?.isSuperAdmin) {
      dispatch(fetchUsers());
    }
  }, [dispatch, currentUser]);

  const handleToggleAdmin = (userId: string, isAdmin: boolean) => {
    dispatch(updateUserRole({ userId, isAdmin: !isAdmin }));
  };

  if (!currentUser?.isSuperAdmin) {
    return <Navigate to="/" replace />;
  }
  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{t('manageUsers')}</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">{t('name')}</th>
            <th className="border p-2">{t('email')}</th>
            <th className="border p-2">{t('role')}</th>
            <th className="border p-2">{t('action')}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.isAdmin ? t('admin') : t('user')}</td>
              <td className="p-2">
                <button
                  onClick={() => handleToggleAdmin(user._id, user.isAdmin)}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  disabled={user.isSuperAdmin}
                >
                  {user.isAdmin ? t('revokeAdmin') : t('makeAdmin')}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;