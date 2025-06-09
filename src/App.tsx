// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { LanguageProvider } from './context/LanguageContext';
// import Layout from './components/layout/Layout';
// import HomePage from './pages/HomePage';
// import CategoryPage from './pages/CategoryPage';
// import ArticlePage from './pages/ArticlePage';
// import LiveTVPage from './pages/LiveTVPage';
// import './App.css';

// function App() {
//   return (
//     <LanguageProvider>
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/category/:categoryId" element={<CategoryPage />} />
//             <Route path="/article/:articleId" element={<ArticlePage />} />
//             <Route path="/live" element={<LiveTVPage />} />
//           </Routes>
//         </Layout>
//       </Router>
//     </LanguageProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { LanguageProvider } from './context/LanguageContext';
// import Layout from './components/Layout';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import LiveTVPage from './pages/LiveTVPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/category/:categoryId" element={<Layout><CategoryPage /></Layout>} />
            <Route path="/article/:articleId" element={<Layout><ArticlePage /></Layout>} />
            <Route path="/live" element={<Layout><LiveTVPage /></Layout>} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            </Route>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>

      </LanguageProvider>
    </Provider>
  );
};

export default App;

// ---------------------------

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import { LanguageProvider } from './context/LanguageContext';
// import Layout from './components/layout/Layout';
// import HomePage from './pages/HomePage';
// import CategoryPage from './pages/CategoryPage';
// import ArticlePage from './pages/ArticlePage';
// import LiveTVPage from './pages/LiveTVPage';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import ProtectedRoute from './components/ProtectedRoute';

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <LanguageProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Layout><HomePage /></Layout>} />
//             <Route path="/category/:categoryId" element={<Layout><CategoryPage /></Layout>} />
//             <Route path="/article/:articleId" element={<Layout><ArticlePage /></Layout>} />
//             <Route path="/live" element={<Layout><LiveTVPage /></Layout>} />
//             <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </Router>
//       </LanguageProvider>
//     </Provider>
//   );
// };

// export default App;

// =========================================

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import { LanguageProvider } from './context/LanguageContext';
// import Layout from './components/layout/Layout';
// import HomePage from './pages/HomePage';
// import CategoryPage from './pages/CategoryPage';
// import ArticlePage from './pages/ArticlePage';
// import LiveTVPage from './pages/LiveTVPage';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import AdminUsers from './pages/AdminUsers';
// import AdminAudit from './pages/AdminAudit';
// import ProtectedRoute from './components/ProtectedRoute';

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <LanguageProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Layout><HomePage /></Layout>} />
//             <Route path="/category/:categoryId" element={<Layout><CategoryPage /></Layout>} />
//             <Route path="/article/:articleId" element={<Layout><ArticlePage /></Layout>} />
//             <Route path="/live" element={<Layout><LiveTVPage /></Layout>} />
//             <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRoute requireAdmin>
//                   <Layout>
//                     <Dashboard />
//                   </Layout>
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/users"
//               element={
//                 <ProtectedRoute>
//                   <Layout>
//                     <AdminUsers />
//                   </Layout>
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin/audit"
//               element={
//                 <ProtectedRoute>
//                   <Layout>
//                     <AdminAudit />
//                   </Layout>
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </Router>
//       </LanguageProvider>
//     </Provider>
//   );
// };

// export default App;