// // frontend/src/pages/AdminAudit.tsx
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchAdminActions } from '../redux/slices/userSlice';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';

// const AdminAudit: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const dispatch = useDispatch();
//   const { actions, loading, error } = useSelector((state: RootState) => state.users);

//   useEffect(() => {
//     dispatch(fetchAdminActions());
//   }, [dispatch]);

//   if (loading) return <div>{t('loading')}</div>;
//   if (error) return <div>{t('error')}: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4">{t('auditLog')}</h1>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">{t('action')}</th>
//             <th className="border p-2">{t('targetUser')}</th>
//             <th className="border p-2">{t('performedBy')}</th>
//             <th className="border p-2">{t('timestamp')}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {actions.map((action) => (
//             <tr key={action._id} className="border">
//               <td className="p-2">{t(action.action)}</td>
//               <td className="p-2">{action.targetUser?.email}</td>
//               <td className="p-2">{action.performedBy?.email}</td>
//               <td className="p-2">{new Date(action.timestamp).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminAudit;


// ====================================

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchAdminActions } from '../redux/slices/userSlice';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { Navigate } from 'react-router-dom';

const AdminAudit: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  const dispatch = useDispatch();
  const { actions, loading, error } = useSelector((state: RootState) => state.users);
  const currentUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (currentUser?.isSuperAdmin) {
      dispatch(fetchAdminActions());
    }
  }, [dispatch, currentUser]);

  if (!currentUser?.isSuperAdmin) {
    return <Navigate to="/" replace />;
  }
  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{t('auditLog')}</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">{t('action')}</th>
            <th className="border p-2">{t('targetUser')}</th>
            <th className="border p-2">{t('performedBy')}</th>
            <th className="border p-2">{t('timestamp')}</th>
          </tr>
        </thead>
        <tbody>
          {actions.map((action) => (
            <tr key={action._id} className="border">
              <td className="p-2">{t(action.action)}</td>
              <td className="p-2">{action.targetUserId?.name} ({action.targetUserId?.email})</td>
              <td className="p-2">{action.performedBy?.name} ({action.performedBy?.email})</td>
              <td className="p-2">{new Date(action.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAudit;