// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { RootState } from '../redux/store';

// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { user } = useSelector((state: RootState) => state.auth);
//   return user ? <>{children}</> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
// jjjjjjjjjjjjjjjjjjjjjjj66666666666666666

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
// import { RootState } from '../redux/store';

// const ProtectedRoute: React.FC = () => {
//   const { user, role } = useSelector((state: RootState) => state.auth);

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (role !== 'admin') {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;


// jjjjjjjjjjjjjjjjjj666666666666J

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
// import { RootState } from '../redux/store';

// const ProtectedRoute: React.FC = () => {
//   const { user, role } = useSelector((state: RootState) => state.auth);
//   const token = localStorage.getItem('token');

//   if (!token || !user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (role !== 'admin') {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;
// ====================-----------=================
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../redux/store';

const ProtectedRoute: React.FC = () => {
  const { user, role } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role !== 'admin') {
    return <Navigate to="/\" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
// ====================

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { RootState } from '../redux/store';

// interface ProtectedRouteProps {
//   children: React.ReactNode;
//   requireAdmin?: boolean;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAdmin = false }) => {
//   const { user } = useSelector((state: RootState) => state.auth);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (requireAdmin && !user.isAdmin) {
//     return <Navigate to="/" />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;