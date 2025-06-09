


// jjjjjjjjjjjjjjjjjjjjjj6666666666666666666666

// =======jjjjjjjj=======

// const sidebarItems = [
//     { id: 'overview', name: 'Overview', icon: Home },
//     { id: 'news', name: 'News Management', icon: Newspaper },
//     { id: 'channels', name: 'Channel Management', icon: Tv },
//     { id: 'users', name: 'User Management', icon: Users },
//   ];import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
// import { fetchChannels, Channel } from '../redux/slices/channelsSlice';
// import { promoteToAdmin, demoteToUser } from '../redux/slices/authSlice';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Home, 
//   Newspaper, 
//   Tv, 
//   Users, 
//   Bell,
//   Search,
//   Menu,
//   X,
//   Plus,
//   Edit,
//   Trash,
//   Shield,
//   User,
//   BarChart3,
//   TrendingUp,
//   Eye,
//   Calendar
// } from 'lucide-react';

// interface User {
//   _id: string;
//   username: string;
//   mobile: string;
//   role: 'user' | 'admin';
//   createdAt?: string;
// }

// const Dashboard: React.FC = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { news, loading: newsLoading } = useSelector((state: RootState) => state.news);
//   const { channels, loading: channelsLoading } = useSelector((state: RootState) => state.channels);
  
//   const [activeTab, setActiveTab] = useState('overview');
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [formData, setFormData] = useState<Partial<NewsItem>>({});
//   const [channelFormData, setChannelFormData] = useState<Partial<Channel>>({ schedule: [] });
//   const [isEditing, setIsEditing] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [summary, setSummary] = useState({ totalNews: 0, totalChannels: 0, recentNews: [], recentChannels: [] });
//   const [users, setUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const sidebarItems = [
//     { id: 'overview', name: 'Overview', icon: Home },
//     { id: 'news', name: 'News Management', icon: Newspaper },
//     { id: 'channels', name: 'Channel Management', icon: Tv },
//     { id: 'users', name: 'User Management', icon: Users },
//   ];

//   useEffect(() => {
//     if (!token) navigate('/login');
//     dispatch(fetchNews());
//     dispatch(fetchChannels());
//     fetchSummary();
//     if (activeTab === 'users') {
//       fetchUsers();
//     }
//   }, [dispatch, token, navigate, activeTab]);

//   const fetchSummary = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/dashboard/summary', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setSummary(response.data.summary);
//     } catch (err) {
//       console.error('Error fetching dashboard summary:', err);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/auth/users', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUsers(response.data.users || []);
//     } catch (err) {
//       console.error('Error fetching users:', err);
//     }
//   };

//   const handlePromoteUser = async (userId: string) => {
//     try {
//       await dispatch(promoteToAdmin({ userId }));
//       fetchUsers();
//     } catch (err) {
//       console.error('Error promoting user:', err);
//     }
//   };

//   const handleDemoteUser = async (userId: string) => {
//     try {
//       await dispatch(demoteToUser({ userId }));
//       fetchUsers();
//     } catch (err) {
//       console.error('Error demoting user:', err);
//     }
//   };

//   const handleNewsSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`http://localhost:5000/api/news/${formData._id}`, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post('http://localhost:5000/api/news', formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       dispatch(fetchNews());
//       setFormData({});
//       setIsEditing(false);
//       fetchSummary();
//     } catch (err) {
//       console.error('Error saving news:', err);
//     }
//   };

//   const handleChannelSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await axios.put(`http://localhost:5000/api/channels/${channelFormData._id}`, channelFormData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post('http://localhost:5000/api/channels', channelFormData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       dispatch(fetchChannels());
//       setChannelFormData({ schedule: [] });
//       setIsEditing(false);
//       fetchSummary();
//     } catch (err) {
//       console.error('Error saving channel:', err);
//     }
//   };

//   const handleEditNews = (news: NewsItem) => {
//     setFormData(news);
//     setIsEditing(true);
//   };

//   const handleEditChannel = (channel: Channel) => {
//     setChannelFormData(channel);
//     setIsEditing(true);
//   };

//   const handleDeleteNews = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/news/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       dispatch(fetchNews());
//       fetchSummary();
//     } catch (err) {
//       console.error('Error deleting news:', err);
//     }
//   };

//   const handleDeleteChannel = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/channels/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       dispatch(fetchChannels());
//       fetchSummary();
//     } catch (err) {
//       console.error('Error deleting channel:', err);
//     }
//   };

//   const filteredUsers = users.filter(user => 
//     user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.mobile.includes(searchTerm)
//   );

//   const renderOverview = () => (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-blue-100">Total News</p>
//               <p className="text-3xl font-bold">{summary.totalNews}</p>
//             </div>
//             <Newspaper size={40} className="text-blue-200" />
//           </div>
//         </div>
//         <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-purple-100">Total Channels</p>
//               <p className="text-3xl font-bold">{summary.totalChannels}</p>
//             </div>
//             <Tv size={40} className="text-purple-200" />
//           </div>
//         </div>
//         <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-green-100">Total Users</p>
//               <p className="text-3xl font-bold">{users.length}</p>
//             </div>
//             <Users size={40} className="text-green-200" />
//           </div>
//         </div>
//         <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-orange-100">Active Now</p>
//               <p className="text-3xl font-bold">24</p>
//             </div>
//             <TrendingUp size={40} className="text-orange-200" />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl shadow-sm border p-6">
//           <h3 className="text-lg font-semibold mb-4 flex items-center">
//             <Newspaper size={20} className="mr-2 text-blue-500" />
//             Recent News
//           </h3>
//           <div className="space-y-3">
//             {summary.recentNews.slice(0, 5).map((item: any) => (
//               <div key={item._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                 <div>
//                   <p className="font-medium text-sm">{item.titleEn}</p>
//                   <p className="text-xs text-gray-500">{item.category}</p>
//                 </div>
//                 <Eye size={16} className="text-gray-400" />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm border p-6">
//           <h3 className="text-lg font-semibold mb-4 flex items-center">
//             <Tv size={20} className="mr-2 text-purple-500" />
//             Recent Channels
//           </h3>
//           <div className="space-y-3">
//             {summary.recentChannels.slice(0, 5).map((item: any) => (
//               <div key={item._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                 <div>
//                   <p className="font-medium text-sm">{item.nameEn}</p>
//                   <p className="text-xs text-gray-500">Channel</p>
//                 </div>
//                 <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderNewsManagement = () => (
//     <div className="space-y-6">
//       <div className="bg-white rounded-xl shadow-sm border p-6">
//         <h3 className="text-lg font-semibold mb-4">Add/Edit News</h3>
//         <div onSubmit={handleNewsSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Title (English)"
//             value={formData.titleEn || ''}
//             onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//           <input
//             type="text"
//             placeholder="Title (Hindi)"
//             value={formData.titleHi || ''}
//             onChange={(e) => setFormData({ ...formData, titleHi: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//           <textarea
//             placeholder="Content (English)"
//             value={formData.contentEn || ''}
//             onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
//             rows={3}
//           />
//           <textarea
//             placeholder="Content (Hindi)"
//             value={formData.contentHi || ''}
//             onChange={(e) => setFormData({ ...formData, contentHi: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
//             rows={3}
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={formData.image || ''}
//             onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//           <input
//             type="text"
//             placeholder="Category"
//             value={formData.category || ''}
//             onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//           <div className="flex items-center space-x-4 md:col-span-2">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={formData.featured || false}
//                 onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
//                 className="mr-2 rounded"
//               />
//               Featured
//             </label>
//             <button 
//               type="submit" 
//               onClick={handleNewsSubmit}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all flex items-center"
//             >
//               <Plus size={16} className="mr-2" />
//               {isEditing ? 'Update News' : 'Add News'}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border">
//         <div className="p-6 border-b">
//           <h3 className="text-lg font-semibold">News Articles</h3>
//         </div>
//         <div className="divide-y">
//           {news.map((item: NewsItem) => (
//             <div key={item._id} className="p-4 hover:bg-gray-50 transition-colors">
//               <div className="flex items-center justify-between">
//                 <div className="flex-1">
//                   <h4 className="font-medium">{item.titleEn}</h4>
//                   <p className="text-sm text-gray-500 mt-1">{item.category}</p>
//                   {item.featured && (
//                     <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-2">
//                       Featured
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex space-x-2">
//                   <button 
//                     onClick={() => handleEditNews(item)} 
//                     className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                   >
//                     <Edit size={16} />
//                   </button>
//                   <button 
//                     onClick={() => handleDeleteNews(item._id)} 
//                     className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                   >
//                     <Trash size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderChannelManagement = () => (
//     <div className="space-y-6">
//       <div className="bg-white rounded-xl shadow-sm border p-6">
//         <h3 className="text-lg font-semibold mb-4">Add/Edit Channel</h3>
//         <div onSubmit={handleChannelSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Name (English)"
//             value={channelFormData.nameEn || ''}
//             onChange={(e) => setChannelFormData({ ...channelFormData, nameEn: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           />
//           <input
//             type="text"
//             placeholder="Name (Hindi)"
//             value={channelFormData.nameHi || ''}
//             onChange={(e) => setChannelFormData({ ...channelFormData, nameHi: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           />
//           <input
//             type="text"
//             placeholder="Logo URL"
//             value={channelFormData.logo || ''}
//             onChange={(e) => setChannelFormData({ ...channelFormData, logo: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           />
//           <input
//             type="text"
//             placeholder="Brand Color"
//             value={channelFormData.color || ''}
//             onChange={(e) => setChannelFormData({ ...channelFormData, color: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           />
//           <input
//             type="text"
//             placeholder="Stream URL"
//             value={channelFormData.streamUrl || ''}
//             onChange={(e) => setChannelFormData({ ...channelFormData, streamUrl: e.target.value })}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent md:col-span-2"
//           />
//           <button 
//             type="submit" 
//             onClick={handleChannelSubmit}
//             className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all flex items-center md:col-span-2"
//           >
//             <Plus size={16} className="mr-2" />
//             {isEditing ? 'Update Channel' : 'Add Channel'}
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border">
//         <div className="p-6 border-b">
//           <h3 className="text-lg font-semibold">Channels</h3>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
//           {channels.map((channel: Channel) => (
//             <div key={channel._id} className="border rounded-xl p-4 hover:shadow-md transition-all">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Tv size={20} className="text-white" />
//                 </div>
//                 <div className="flex space-x-2">
//                   <button 
//                     onClick={() => handleEditChannel(channel)} 
//                     className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                   >
//                     <Edit size={16} />
//                   </button>
//                   <button 
//                     onClick={() => handleDeleteChannel(channel._id)} 
//                     className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                   >
//                     <Trash size={16} />
//                   </button>
//                 </div>
//               </div>
//               <h4 className="font-medium">{channel.nameEn}</h4>
//               <p className="text-sm text-gray-500">{channel.nameHi}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderUserManagement = () => (
//     <div className="space-y-6">
//       <div className="bg-white rounded-xl shadow-sm border p-6">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
//           <h3 className="text-lg font-semibold">User Management</h3>
//           <div className="relative">
//             <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search users..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             />
//           </div>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Mobile</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Role</th>
//                 <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y">
//               {filteredUsers.map((user) => (
//                 <tr key={user._id} className="hover:bg-gray-50 transition-colors">
//                   <td className="py-4 px-4">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium">
//                         {user.username.charAt(0).toUpperCase()}
//                       </div>
//                       <div className="ml-3">
//                         <p className="font-medium">{user.username}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 text-gray-600">{user.mobile}</td>
//                   <td className="py-4 px-4">
//                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                       user.role === 'admin' 
//                         ? 'bg-purple-100 text-purple-800' 
//                         : 'bg-gray-100 text-gray-800'
//                     }`}>
//                       {user.role === 'admin' ? (
//                         <Shield size={12} className="mr-1" />
//                       ) : (
//                         <User size={12} className="mr-1" />
//                       )}
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="py-4 px-4">
//                     {user.role === 'user' ? (
//                       <button
//                         onClick={() => handlePromoteUser(user._id)}
//                         className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm hover:bg-green-200 transition-colors"
//                       >
//                         Promote to Admin
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => handleDemoteUser(user._id)}
//                         className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg text-sm hover:bg-orange-200 transition-colors"
//                       >
//                         Demote to User
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'overview':
//         return renderOverview();
//       case 'news':
//         return renderNewsManagement();
//       case 'channels':
//         return renderChannelManagement();
//       case 'users':
//         return renderUserManagement();
//       default:
//         return renderOverview();
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
//         <div className="flex items-center justify-center h-16 px-4 border-b bg-gradient-to-r from-blue-600 to-purple-600">
//           <h1 className="text-xl font-bold text-white">Admin Panel</h1>
//         </div>
        
//         <nav className="mt-8">
//           {sidebarItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   setActiveTab(item.id);
//                   setSidebarOpen(false);
//                 }}
//                 className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
//                   activeTab === item.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
//                 }`}
//               >
//                 <Icon size={20} className="mr-3" />
//                 {item.name}
//               </button>
//             );
//           })}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
//         {/* Header */}
//         <header className="bg-white shadow-sm border-b px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden"
//               >
//                 {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//               <h2 className="ml-4 text-2xl font-semibold text-gray-800 capitalize">
//                 {activeTab === 'overview' ? 'Dashboard Overview' : activeTab.replace(/([A-Z])/g, ' $1')}
//               </h2>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg">
//                 <Bell size={20} />
//               </button>
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
//             </div>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 overflow-y-auto p-6">
//           {renderContent()}
//         </main>
//       </div>

//       {/* Sidebar Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// 878472847812785782194

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
import { fetchChannels, Channel } from '../redux/slices/channelsSlice';
import { promoteToAdmin, demoteToUser } from '../redux/slices/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  Newspaper, 
  Tv, 
  Users, 
  Bell,
  Search,
  Menu,
  X,
  Plus,
  Edit,
  Trash,
  Shield,
  User,
  BarChart3,
  TrendingUp,
  Eye,
  Calendar
} from 'lucide-react';

interface User {
  _id: string;
  username: string;
  mobile: string;
  role: 'user' | 'admin';
  createdAt?: string;
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { news, loading: newsLoading } = useSelector((state: RootState) => state.news);
  const { channels, loading: channelsLoading } = useSelector((state: RootState) => state.channels);
  const { user, role } = useSelector((state: RootState) => state.auth);
  
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<NewsItem>>({});
  const [channelFormData, setChannelFormData] = useState<Partial<Channel>>({ schedule: [] });
  const [isEditing, setIsEditing] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [summary, setSummary] = useState({ totalNews: 0, totalChannels: 0, recentNews: [], recentChannels: [] });
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'news', name: 'News Management', icon: Newspaper },
    { id: 'channels', name: 'Channel Management', icon: Tv },
    { id: 'users', name: 'User Management', icon: Users },
  ];

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    
    // Fetch initial data
    dispatch(fetchNews());
    dispatch(fetchChannels());
    fetchSummary();
  }, [dispatch, token, navigate]);

  // Fetch users when users tab is active
  useEffect(() => {
    if (activeTab === 'users' && token) {
      fetchUsers();
    }
  }, [activeTab, token]);

  const fetchSummary = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/dashboard/summary', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSummary(response.data.summary);
    } catch (err: any) {
      console.error('Error fetching dashboard summary:', err);
      setError('Failed to fetch dashboard summary');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError('');
      console.log('Fetching users...'); // Debug log
      
      const response = await axios.get('http://localhost:5000/api/auth/users', {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
      
      console.log('Users response:', response.data); // Debug log
      
      // Handle different response structures
      if (response.data.users) {
        setUsers(response.data.users);
      } else if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.error('Unexpected response format:', response.data);
        setError('Unexpected response format from server');
      }
    } catch (err: any) {
      console.error('Error fetching users:', err);
      if (err.response?.status === 403) {
        setError('Access denied. Admin privileges required.');
      } else if (err.response?.status === 401) {
        setError('Unauthorized. Please login again.');
        navigate('/login');
      } else {
        setError(err.response?.data?.message || 'Failed to fetch users');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePromoteUser = async (userId: string) => {
    try {
      setLoading(true);
      await dispatch(promoteToAdmin({ userId })).unwrap();
      // Refresh users list
      await fetchUsers();
    } catch (err: any) {
      console.error('Error promoting user:', err);
      setError('Failed to promote user');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoteUser = async (userId: string) => {
    try {
      setLoading(true);
      await dispatch(demoteToUser({ userId })).unwrap();
      // Refresh users list
      await fetchUsers();
    } catch (err: any) {
      console.error('Error demoting user:', err);
      setError('Failed to demote user');
    } finally {
      setLoading(false);
    }
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/news/${formData._id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post('http://localhost:5000/api/news', formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      dispatch(fetchNews());
      setFormData({});
      setIsEditing(false);
      fetchSummary();
    } catch (err: any) {
      console.error('Error saving news:', err);
      setError('Failed to save news');
    } finally {
      setLoading(false);
    }
  };

  const handleChannelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/channels/${channelFormData._id}`, channelFormData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post('http://localhost:5000/api/channels', channelFormData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      dispatch(fetchChannels());
      setChannelFormData({ schedule: [] });
      setIsEditing(false);
      fetchSummary();
    } catch (err: any) {
      console.error('Error saving channel:', err);
      setError('Failed to save channel');
    } finally {
      setLoading(false);
    }
  };

  const handleEditNews = (news: NewsItem) => {
    setFormData(news);
    setIsEditing(true);
  };

  const handleEditChannel = (channel: Channel) => {
    setChannelFormData(channel);
    setIsEditing(true);
  };

  const handleDeleteNews = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/api/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(fetchNews());
      fetchSummary();
    } catch (err: any) {
      console.error('Error deleting news:', err);
      setError('Failed to delete news');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteChannel = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/api/channels/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(fetchChannels());
      fetchSummary();
    } catch (err: any) {
      console.error('Error deleting channel:', err);
      setError('Failed to delete channel');
    } finally {
      setLoading(false);
    }
  };

  // const filteredUsers = users.filter(user => 
  //   user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   user.mobile.includes(searchTerm)
  // );
const filteredUsers = users.filter(user => 
  (user.username ? user.username.toLowerCase().includes(searchTerm.toLowerCase()) : false) ||
  (user.mobile ? user.mobile.includes(searchTerm) : false)
);
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total News</p>
              <p className="text-3xl font-bold">{summary.totalNews}</p>
            </div>
            <Newspaper size={40} className="text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Total Channels</p>
              <p className="text-3xl font-bold">{summary.totalChannels}</p>
            </div>
            <Tv size={40} className="text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Total Users</p>
              <p className="text-3xl font-bold">{users.length}</p>
            </div>
            <Users size={40} className="text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Active Now</p>
              <p className="text-3xl font-bold">24</p>
            </div>
            <TrendingUp size={40} className="text-orange-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Newspaper size={20} className="mr-2 text-blue-500" />
            Recent News
          </h3>
          <div className="space-y-3">
            {summary.recentNews.slice(0, 5).map((item: any) => (
              <div key={item._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{item.titleEn}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
                <Eye size={16} className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Tv size={20} className="mr-2 text-purple-500" />
            Recent Channels
          </h3>
          <div className="space-y-3">
            {summary.recentChannels.slice(0, 5).map((item: any) => (
              <div key={item._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{item.nameEn}</p>
                  <p className="text-xs text-gray-500">Channel</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNewsManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4">Add/Edit News</h3>
        <div onSubmit={handleNewsSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title (English)"
            value={formData.titleEn || ''}
            onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Title (Hindi)"
            value={formData.titleHi || ''}
            onChange={(e) => setFormData({ ...formData, titleHi: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            placeholder="Content (English)"
            value={formData.contentEn || ''}
            onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
            rows={3}
          />
          <textarea
            placeholder="Content (Hindi)"
            value={formData.contentHi || ''}
            onChange={(e) => setFormData({ ...formData, contentHi: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
            rows={3}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image || ''}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category || ''}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex items-center space-x-4 md:col-span-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.featured || false}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="mr-2 rounded"
              />
              Featured
            </label>
            <button 
              type="submit" 
              onClick={handleNewsSubmit}
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all flex items-center disabled:opacity-50"
            >
              <Plus size={16} className="mr-2" />
              {isEditing ? 'Update News' : 'Add News'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">News Articles</h3>
        </div>
        <div className="divide-y">
          {news.map((item: NewsItem) => (
            <div key={item._id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium">{item.titleEn}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                  {item.featured && (
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mt-2">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEditNews(item)} 
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => handleDeleteNews(item._id)} 
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderChannelManagement = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4">Add/Edit Channel</h3>
        <div onSubmit={handleChannelSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name (English)"
            value={channelFormData.nameEn || ''}
            onChange={(e) => setChannelFormData({ ...channelFormData, nameEn: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Name (Hindi)"
            value={channelFormData.nameHi || ''}
            onChange={(e) => setChannelFormData({ ...channelFormData, nameHi: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Logo URL"
            value={channelFormData.logo || ''}
            onChange={(e) => setChannelFormData({ ...channelFormData, logo: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Brand Color"
            value={channelFormData.color || ''}
            onChange={(e) => setChannelFormData({ ...channelFormData, color: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Stream URL"
            value={channelFormData.streamUrl || ''}
            onChange={(e) => setChannelFormData({ ...channelFormData, streamUrl: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent md:col-span-2"
          />
          <button 
            type="submit" 
            onClick={handleChannelSubmit}
            disabled={loading}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all flex items-center md:col-span-2 disabled:opacity-50"
          >
            <Plus size={16} className="mr-2" />
            {isEditing ? 'Update Channel' : 'Add Channel'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Channels</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {channels.map((channel: Channel) => (
            <div key={channel._id} className="border rounded-xl p-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Tv size={20} className="text-white" />
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEditChannel(channel)} 
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => handleDeleteChannel(channel._id)} 
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
              <h4 className="font-medium">{channel.nameEn}</h4>
              <p className="text-sm text-gray-500">{channel.nameHi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
      
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
          <h3 className="text-lg font-semibold">User Management</h3>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={fetchUsers}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading users...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No users found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Mobile</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Role</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{user.username}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{user.mobile}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === 'admin' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.role === 'admin' ? (
                          <Shield size={12} className="mr-1" />
                        ) : (
                          <User size={12} className="mr-1" />
                        )}
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {user.role === 'user' ? (
                        <button
                          onClick={() => handlePromoteUser(user._id)}
                          disabled={loading}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm hover:bg-green-200 transition-colors disabled:opacity-50"
                        >
                          Promote to Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDemoteUser(user._id)}
                          disabled={loading}
                          className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg text-sm hover:bg-orange-200 transition-colors disabled:opacity-50"
                        >
                          Demote to User
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'news':
        return renderNewsManagement();
      case 'channels':
        return renderChannelManagement();
      case 'users':
        return renderUserManagement();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 px-4 border-b bg-gradient-to-r from-blue-600 to-purple-600">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
        </div>
        
        <nav className="mt-8">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                  setError(''); // Clear any previous errors
                }}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === item.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
                }`}
              >
                <Icon size={20} className="mr-3" />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h2 className="ml-4 text-2xl font-semibold text-gray-800 capitalize">
                {activeTab === 'overview' ? 'Dashboard Overview' : activeTab.replace(/([A-Z])/g, ' $1')}
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};
export default Dashboard;

// =======jjjjjjjj=======



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// // import { promoteToAdmin, fetchUser } from '../store/authSlice';
// import { promoteToAdmin, fetchUser } from '../redux/slices/authSlice';
// import axios from 'axios';

// const Dashboard: React.FC = () => {
//   const dispatch = useDispatch();
//   const { user, role, error, loading } = useSelector((state: RootState) => state.auth);
//   const [users, setUsers] = useState<any[]>([]);
//   const [promoteError, setPromoteError] = useState('');

// //   useEffect(() => {
// //     // Fetch all users (only admins can do this)
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/auth/users', {
// //           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
// //         });
// //         setUsers(response.data);
// //       } catch (err: any) {
// //         setPromoteError(err.response?.data?.message || 'Failed to fetch users');
// //       }
// //     };

// //     if (role === 'admin') {
// //       fetchUsers();
// //     }
// //   }, [role]);

// // In Dashboard.tsx
// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/auth/users', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUsers(response.data);
//     } catch (err: any) {
//       setPromoteError(err.response?.data?.message || 'Failed to fetch users');
//     }
//   };

//   if (role === 'admin') {
//     fetchUsers();
//   }
// }, [role]);

//   const handlePromote = async (userId: string) => {
//     try {
//       await dispatch(promoteToAdmin({ userId })).unwrap();
//       setUsers(users.map(u => u._id === userId ? { ...u, role: 'admin' } : u));
//     } catch (err: any) {
//       setPromoteError(err || 'Failed to promote user');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
//         {error && (
//           <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
//             <p className="text-sm text-red-700">{error}</p>
//           </div>
//         )}
//         {promoteError && (
//           <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
//             <p className="text-sm text-red-700">{promoteError}</p>
//           </div>
//         )}
//         <div className="bg-white rounded-2xl shadow-xl p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">User Management</h2>
//           <div className="space-y-4">
//             {users.map((u) => (
//               <div key={u._id} className="flex items-center justify-between p-4 border-b border-gray-200">
//                 <div>
//                   <p className="text-gray-900 font-medium">{u.username}</p>
//                   <p className="text-sm text-gray-600">Role: {u.role}</p>
//                 </div>
//                 {u.role !== 'admin' && (
//                   <button
//                     onClick={() => handlePromote(u._id)}
//                     disabled={loading}
//                     className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Promote to Admin
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ye upper wala dummy dashboard hai 
// =====================

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import axios from 'axios';
// import { Edit, Trash2, Plus, Eye, TrendingUp, Users, FileText, Tv } from 'lucide-react';
// import { logout } from '../redux/slices/authSlice';
// import { useNavigate } from 'react-router-dom';

// interface NewsItem {
//   _id: string;
//   titleEn: string;
//   titleHi: string;
//   contentEn: string;
//   contentHi: string;
//   image: string;
//   category: string;
//   featured: boolean;
//   createdAt: string;
// }

// interface Channel {
//   _id: string;
//   nameEn: string;
//   nameHi: string;
//   logo: string;
//   color: string;
//   streamUrl: string;
//   schedule: any[];
// }

// interface DashboardSummary {
//   totalNews: number;
//   totalChannels: number;
//   recentNews: NewsItem[];
//   recentChannels: Channel[];
// }

// const Dashboard: React.FC = () => {
//   const { user, token } = useSelector((state: RootState) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [channels, setChannels] = useState<Channel[]>([]);
//   const [summary, setSummary] = useState<DashboardSummary>({
//     totalNews: 0,
//     totalChannels: 0,
//     recentNews: [],
//     recentChannels: [],
//   });
//   const [newsFormData, setNewsFormData] = useState<Partial<NewsItem>>({});
//   const [channelFormData, setChannelFormData] = useState<Partial<Channel>>({ schedule: [] });
//   const [isEditingNews, setIsEditingNews] = useState(false);
//   const [isEditingChannel, setIsEditingChannel] = useState(false);
//   const [activeTab, setActiveTab] = useState< 'overview' | 'news' | 'channels'>('overview');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Redirect to login if not authenticated
//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);

//   // Fetch news and channels from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // Fetch news
//         const newsResponse = await axios.get('http://localhost:5000/api/news', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const newsData = newsResponse.data;
//         // Fetch channels
//         const channelsResponse = await axios.get('http://localhost:5000/api/channels', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const channelsData = channelsResponse.data;

//         setNews(newsData);
//         setChannels(channelsData);
//         setSummary({
//           totalNews: newsData.length,
//           totalChannels: channelsData.length,
//           recentNews: newsData.slice(0, 5),
//           recentChannels: channelsData.slice(0, 5),
//         });
//       } catch (err) {
//         setError('Failed to fetch data');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const handleNewsSubmit = async () => {
//     setLoading(true);
//     try {
//       const newsPayload = {
//         titleEn: newsFormData.titleEn || '',
//         titleHi: newsFormData.titleHi || '',
//         contentEn: newsFormData.contentEn || '',
//         contentHi: newsFormData.contentHi || '',
//         image: newsFormData.image || '',
//         category: newsFormData.category || '',
//         featured: newsFormData.featured || false,
//       };

//       if (isEditingNews && newsFormData._id) {
//         // Update existing news
//         await axios.put(`http://localhost:5000/api/news/${newsFormData._id}`, newsPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         // Create new news news
//         await axios.post('http://localhost:5000/api/news', newsPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       // Refresh news data
//       const response = await axios.get('http://localhost:5000/api/news', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNews(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalNews: response.data.length,
//         recentNews: response.data.slice(0, 5),
//       }));
//       setNewsFormData({});
//       setIsEditingNews(false);
//     } catch (err) {
//       setError('Failed to save news');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChannelSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const channelPayload = {
//         nameEn: channelFormData.nameEn || '',
//         nameHi: channelFormData.nameHi || '',
//         logo: channelFormData.logo || '',
//         color: channelFormData.color || '#000000',
//         streamUrl: channelFormData.streamUrl || '',
//         schedule: channelFormData.schedule || [],
//       };

//       if (isEditingChannel && channelFormData._id) {
//         // Update existing channel
//         await axios.put(`http://localhost:5000/api/channels/${channelFormData._id}`, channelPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         // Create new channel
//         await axios.post('http://localhost:5000/api/channels', channelPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       // Refresh channels data
//       const response = await axios.get('http://localhost:5000/api/channels', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setChannels(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalChannels: response.data.length,
//         recentChannels: response.data.slice(0, 5),
//       }));
//       setChannelFormData({ schedule: [] });
//       setIsEditingChannel(false);
//     } catch (err) {
//       setError('Failed to save channel');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditNews = (item: NewsItem) => {
//     setNewsFormData(item);
//     setIsEditingNews(true);
//   };

//   const handleEditChannel = (item: Channel) => {
//     setChannelFormData(item);
//     setIsEditingChannel(true);
//   };

//   const handleDeleteNews = async (id: string) => {
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:5000/api/news/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const response = await axios.get('http://localhost:5000/api/news', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNews(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalNews: response.data.length,
//         recentNews: response.data.slice(0, 5),
//       }));
//     } catch (err) {
//       setError('Failed to delete news');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteChannel = async (id: string) => {
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:5000/api/channels/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const response = await axios.get('http://localhost:5000/api/channels', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setChannels(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalChannels: response.data.length,
//         recentChannels: response.data.slice(0, 5),
//       }));
//     } catch (err) {
//       setError('Failed to delete channel');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetNewsForm = () => {
//     setNewsFormData({});
//     setIsEditingNews(false);
//   };

//   const resetChannelForm = () => {
//     setChannelFormData({ schedule: [] });
//     setIsEditingChannel(false);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     try {
//       localStorage.removeItem('token');
//     } catch (error) {
//       console.error('Error clearing localStorage:', error);
//     }
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//             <p className="text-gray-600 mt-1">Manage your news articles and TV channels</p>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="container mx-auto px-6 py-4">
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//             {error}
//           </div>
//         </div>
//       )}

//       {/* Navigation Tabs */}
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
//           {[
//             { key: 'overview', label: 'Overview', icon: TrendingUp },
//             { key: 'news', label: 'News', icon: FileText },
//             { key: 'channels', label: 'Channels', icon: Tv },
//           ].map(({ key, label, icon: Icon }) => (
//             <button
//               key={key}
//               onClick={() => setActiveTab(key as any)}
//               className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all ${
//                 activeTab === key
//                   ? 'bg-white text-blue-600 shadow-sm'
//                   : 'text-gray-600 hover:text-gray-800'
//               }`}
//             >
//               <Icon size={18} />
//               <span>{label}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="container mx-auto px-6 pb-8">
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : (
//           <>
//             {/* Overview Tab */}
//             {activeTab === 'overview' && (
//               <div>
//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//                   <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">Total News</p>
//                         <p className="text-2xl font-bold text-gray-900">{summary.totalNews}</p>
//                       </div>
//                       <FileText className="text-blue-500" size={24} />
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">Total Channels</p>
//                         <p className="text-2xl font-bold text-gray-900">{summary.totalChannels}</p>
//                       </div>
//                       <Tv className="text-green-500" size={24} />
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">Featured News</p>
//                         <p className="text-2xl font-bold text-gray-900">{news.filter(n => n.featured).length}</p>
//                       </div>
//                       <Eye className="text-purple-500" size={24} />
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">Categories</p>
//                         <p className="text-2xl font-bold text-gray-900">{new Set(news.map(n => n.category)).size}</p>
//                       </div>
//                       <Users className="text-orange-500" size={24} />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Recent Items */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <h3 className="text-lg font-semibold mb-4">Recent News</h3>
//                     <div className="space-y-3">
//                       {summary.recentNews.map(item => (
//                         <div key={item._id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                             <FileText className="text-blue-600" size={20} />
//                           </div>
//                           <div className="flex-1">
//                             <p className="font-medium text-gray-900">{item.titleEn}</p>
//                             <p className="text-sm text-gray-600">{item.category}</p>
//                           </div>
//                           {item.featured && (
//                             <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
//                               Featured
//                             </span>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <h3 className="text-lg font-semibold mb-4">Recent Channels</h3>
//                     <div className="space-y-3">
//                       {summary.recentChannels.map(channel => (
//                         <div key={channel._id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                           <div
//                             className="w-12 h-12 rounded-lg flex items-center justify-center"
//                             style={{ backgroundColor: channel.color + '20' }}
//                           >
//                             <Tv style={{ color: channel.color }} size={20} />
//                           </div>
//                           <div className="flex-1">
//                             <p className="font-medium text-gray-900">{channel.nameEn}</p>
//                             <p className="text-sm text-gray-600">{channel.nameHi}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* News Management Tab */}
//             {activeTab === 'news' && (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* News Form */}
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                   <div className="flex items-center justify-between mb-4">
//                     <h2 className="text-xl font-semibold">
//                       {isEditingNews ? 'Edit News' : 'Add News'}
//                     </h2>
//                     {isEditingNews && (
//                       <button
//                         onClick={resetNewsForm}
//                         className="text-gray-500 hover:text-gray-700"
//                       >
//                         Cancel
//                       </button>
//                     )}
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Title (English)
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={newsFormData.titleEn || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, titleEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Title (Hindi)
//                       </label>
//                       <input
//                         type="text"
//                         value={newsFormData.titleHi || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, titleHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Content (English)
//                       </label>
//                       <textarea
//                         rows={3}
//                         value={newsFormData.contentEn || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, contentEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Content (Hindi)
//                       </label>
//                       <textarea
//                         rows={3}
//                         value={newsFormData.contentHi || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, contentHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Image URL
//                       </label>
//                       <input
//                         type="url"
//                         value={newsFormData.image || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, image: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Category
//                       </label>
//                       <input
//                         type="text"
//                         value={newsFormData.category || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, category: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="featured"
//                         checked={newsFormData.featured || false}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, featured: e.target.checked })}
//                         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//                       />
//                       <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
//                         Featured Article
//                       </label>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={handleNewsSubmit}
//                       className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                       disabled={loading}
//                     >
//                       {isEditingNews ? 'Update News' : 'Add News'}
//                     </button>
//                   </div>
//                 </div>

//                 {/* News List */}
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                   <h2 className="text-xl font-semibold mb-4">News Articles ({news.length})</h2>
//                   <div className="space-y-3 max-h-96 overflow-y-auto">
//                     {news.map(item => (
//                       <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                         <div className="flex-1">
//                           <h3 className="font-medium text-gray-900">{item.titleEn}</h3>
//                           <p className="text-sm text-gray-600">{item.category}</p>
//                           {item.featured && (
//                             <span className="inline-block mt-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
//                               Featured
//                             </span>
//                           )}
//                         </div>
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEditNews(item)}
//                             className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
//                             disabled={loading}
//                           >
//                             <Edit size={16} />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteNews(item._id)}
//                             className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
//                             disabled={loading}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Channels Management Tab */}
//             {activeTab === 'channels' && (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Channel Form */}
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                   <div className="flex items-center justify-between mb-4">
//                     <h2 className="text-xl font-semibold">
//                       {isEditingChannel ? 'Edit Channel' : 'Add Channel'}
//                     </h2>
//                     {isEditingChannel && (
//                       <button
//                         onClick={resetChannelForm}
//                         className="text-gray-500 hover:text-gray-700"
//                         disabled={loading}
//                       >
//                         Cancel
//                       </button>
//                     )}
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Name (English)
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={channelFormData.nameEn || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, nameEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Name (Hindi)
//                       </label>
//                       <input
//                         type="text"
//                         value={channelFormData.nameHi || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, nameHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Logo URL
//                       </label>
//                       <input
//                         type="url"
//                         value={channelFormData.logo || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, logo: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Brand Color
//                       </label>
//                       <input
//                         type="color"
//                         value={channelFormData.color || '#000000'}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, color: e.target.value })}
//                         className="w-full h-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Stream URL
//                       </label>
//                       <input
//                         type="url"
//                         value={channelFormData.streamUrl || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, streamUrl: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <button
//                       type="button"
//                       onClick={handleChannelSubmit}
//                       className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
//                       disabled={loading}
//                     >
//                       {isEditingChannel ? 'Update Channel' : 'Add Channel'}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Channels List */}
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                   <h2 className="text-xl font-semibold mb-4">TV Channels ({channels.length})</h2>
//                   <div className="space-y-3 max-h-96 overflow-y-auto">
//                     {channels.map(channel => (
//                       <div key={channel._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                         <div className="flex items-center space-x-3 flex-1">
//                           <div
//                             className="w-10 h-10 rounded-lg flex items-center justify-center"
//                             style={{ backgroundColor: channel.color + '20' }}
//                           >
//                             <Tv style={{ color: channel.color }} size={20} />
//                           </div>
//                           <div>
//                             <h3 className="font-medium text-gray-900">{channel.nameEn}</h3>
//                             <p className="text-sm text-gray-600">{channel.nameHi}</p>
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEditChannel(channel)}
//                             className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
//                             disabled={loading}
//                           >
//                             <Edit size={16} />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteChannel(channel._id)}
//                             className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
//                             disabled={loading}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// -------------

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import axios from 'axios';
// import { Edit, Trash2, Plus, Eye, TrendingUp, Users, FileText, Tv, LogOut } from 'lucide-react';
// import { logout } from '../redux/slices/authSlice';
// import { useNavigate } from 'react-router-dom';

// interface NewsItem {
//   _id: string;
//   titleEn: string;
//   titleHi: string;
//   contentEn: string;
//   contentHi: string;
//   image: string;
//   category: string;
//   featured: boolean;
//   createdAt: string;
// }

// interface Channel {
//   _id: string;
//   nameEn: string;
//   nameHi: string;
//   logo: string;
//   color: string;
//   streamUrl: string;
//   schedule: any[];
// }

// interface DashboardSummary {
//   totalNews: number;
//   totalChannels: number;
//   recentNews: NewsItem[];
//   recentChannels: Channel[];
// }

// const Dashboard: React.FC = () => {
//   const { user, token } = useSelector((state: RootState) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [channels, setChannels] = useState<Channel[]>([]);
//   const [summary, setSummary] = useState<DashboardSummary>({
//     totalNews: 0,
//     totalChannels: 0,
//     recentNews: [],
//     recentChannels: [],
//   });
//   const [newsFormData, setNewsFormData] = useState<Partial<NewsItem>>({});
//   const [channelFormData, setChannelFormData] = useState<Partial<Channel>>({ schedule: [] });
//   const [isEditingNews, setIsEditingNews] = useState(false);
//   const [isEditingChannel, setIsEditingChannel] = useState(false);
//   const [activeTab, setActiveTab] = useState<'overview' | 'news' | 'channels'>('overview');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Redirect to login if not authenticated
//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);

//   // Fetch news and channels from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // Fetch news
//         const newsResponse = await axios.get('http://localhost:5000/api/news', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const newsData = newsResponse.data;
//         // Fetch channels
//         const channelsResponse = await axios.get('http://localhost:5000/api/channels', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const channelsData = channelsResponse.data;

//         setNews(newsData);
//         setChannels(channelsData);
//         setSummary({
//           totalNews: newsData.length,
//           totalChannels: channelsData.length,
//           recentNews: newsData.slice(0, 5),
//           recentChannels: channelsData.slice(0, 5),
//         });
//       } catch (err) {
//         setError('Failed to fetch data');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (token) {
//       fetchData();
//     }
//   }, [token]);

//   const handleNewsSubmit = async () => {
//     setLoading(true);
//     try {
//       const newsPayload = {
//         titleEn: newsFormData.titleEn || '',
//         titleHi: newsFormData.titleHi || '',
//         contentEn: newsFormData.contentEn || '',
//         contentHi: newsFormData.contentHi || '',
//         image: newsFormData.image || '',
//         category: newsFormData.category || '',
//         featured: newsFormData.featured || false,
//       };

//       if (isEditingNews && newsFormData._id) {
//         // Update existing news
//         await axios.put(`http://localhost:5000/api/news/${newsFormData._id}`, newsPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         // Create new news news
//         await axios.post('http://localhost:5000/api/news', newsPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       // Refresh news data
//       const response = await axios.get('http://localhost:5000/api/news', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNews(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalNews: response.data.length,
//         recentNews: response.data.slice(0, 5),
//       }));
//       setNewsFormData({});
//       setIsEditingNews(false);
//     } catch (err) {
//       setError('Failed to save news');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChannelSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const channelPayload = {
//         nameEn: channelFormData.nameEn || '',
//         nameHi: channelFormData.nameHi || '',
//         logo: channelFormData.logo || '',
//         color: channelFormData.color || '#000000',
//         streamUrl: channelFormData.streamUrl || '',
//         schedule: channelFormData.schedule || [],
//       };

//       if (isEditingChannel && channelFormData._id) {
//         // Update existing channel
//         await axios.put(`http://localhost:5000/api/channels/${channelFormData._id}`, channelPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         // Create new channel
//         await axios.post('http://localhost:5000/api/channels', channelPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       // Refresh channels data
//       const response = await axios.get('http://localhost:5000/api/channels', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setChannels(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalChannels: response.data.length,
//         recentChannels: response.data.slice(0, 5),
//       }));
//       setChannelFormData({ schedule: [] });
//       setIsEditingChannel(false);
//     } catch (err) {
//       setError('Failed to save channel');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditNews = (item: NewsItem) => {
//     setNewsFormData(item);
//     setIsEditingNews(true);
//   };

//   const handleEditChannel = (item: Channel) => {
//     setChannelFormData(item);
//     setIsEditingChannel(true);
//   };

//   const handleDeleteNews = async (id: string) => {
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:5000/api/news/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const response = await axios.get('http://localhost:5000/api/news', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNews(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalNews: response.data.length,
//         recentNews: response.data.slice(0, 5),
//       }));
//     } catch (err) {
//       setError('Failed to delete news');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteChannel = async (id: string) => {
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:5000/api/channels/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const response = await axios.get('http://localhost:5000/api/channels', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setChannels(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalChannels: response.data.length,
//         recentChannels: response.data.slice(0, 5),
//       }));
//     } catch (err) {
//       setError('Failed to delete channel');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetNewsForm = () => {
//     setNewsFormData({});
//     setIsEditingNews(false);
//   };

//   const resetChannelForm = () => {
//     setChannelFormData({ schedule: [] });
//     setIsEditingChannel(false);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     try {
//       localStorage.removeItem('token');
//     } catch (error) {
//       console.error('Error clearing localStorage:', error);
//     }
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <div className="bg-indigo-600 text-white p-2 rounded-lg">
//               <Tv size={24} />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">Media Dashboard</h1>
//               <p className="text-gray-600 mt-1 text-sm">Welcome back, {user?.name}</p>
//             </div>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors"
//           >
//             <LogOut size={18} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="container mx-auto px-6 pt-6">
//           <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
//             <div className="flex items-center">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span className="font-medium">{error}</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Navigation Tabs */}
//       <div className="container mx-auto px-6 py-6">
//         <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm w-fit border border-gray-200">
//           {[
//             { key: 'overview', label: 'Overview', icon: TrendingUp },
//             { key: 'news', label: 'News', icon: FileText },
//             { key: 'channels', label: 'Channels', icon: Tv },
//           ].map(({ key, label, icon: Icon }) => (
//             <button
//               key={key}
//               onClick={() => setActiveTab(key as any)}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${
//                 activeTab === key
//                   ? 'bg-indigo-50 text-indigo-600'
//                   : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
//               }`}
//             >
//               <Icon size={18} />
//               <span>{label}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="container mx-auto px-6 pb-12">
//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//           </div>
//         ) : (
//           <>
//             {/* Overview Tab */}
//             {activeTab === 'overview' && (
//               <div className="space-y-8">
//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-500">Total News</p>
//                         <p className="text-3xl font-bold text-gray-900 mt-1">{summary.totalNews}</p>
//                         <p className="text-xs text-gray-500 mt-2">+5% from last month</p>
//                       </div>
//                       <div className="bg-blue-100 p-3 rounded-lg">
//                         <FileText className="text-blue-600" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-500">Total Channels</p>
//                         <p className="text-3xl font-bold text-gray-900 mt-1">{summary.totalChannels}</p>
//                         <p className="text-xs text-gray-500 mt-2">+2 new this month</p>
//                       </div>
//                       <div className="bg-green-100 p-3 rounded-lg">
//                         <Tv className="text-green-600" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-500">Featured News</p>
//                         <p className="text-3xl font-bold text-gray-900 mt-1">{news.filter(n => n.featured).length}</p>
//                         <p className="text-xs text-gray-500 mt-2">Highlighted content</p>
//                       </div>
//                       <div className="bg-purple-100 p-3 rounded-lg">
//                         <Eye className="text-purple-600" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-500">Categories</p>
//                         <p className="text-3xl font-bold text-gray-900 mt-1">{new Set(news.map(n => n.category)).size}</p>
//                         <p className="text-xs text-gray-500 mt-2">Diverse topics</p>
//                       </div>
//                       <div className="bg-orange-100 p-3 rounded-lg">
//                         <Users className="text-orange-600" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Recent Items */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                     <div className="flex items-center justify-between mb-6">
//                       <h3 className="text-lg font-semibold text-gray-900">Recent News</h3>
//                       <button 
//                         onClick={() => setActiveTab('news')}
//                         className="text-sm text-indigo-600 hover:text-indigo-800"
//                       >
//                         View all
//                       </button>
//                     </div>
//                     <div className="space-y-4">
//                       {summary.recentNews.map(item => (
//                         <div key={item._id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                           <div className="flex-shrink-0">
//                             {item.image ? (
//                               <img src={item.image} alt={item.titleEn} className="w-12 h-12 rounded-lg object-cover" />
//                             ) : (
//                               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                                 <FileText className="text-blue-600" size={20} />
//                               </div>
//                             )}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-gray-900 truncate">{item.titleEn}</p>
//                             <div className="flex items-center mt-1 space-x-2">
//                               <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
//                                 {item.category}
//                               </span>
//                               {item.featured && (
//                                 <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
//                                   Featured
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                           <div className="text-xs text-gray-500">
//                             {new Date(item.createdAt).toLocaleDateString()}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                     <div className="flex items-center justify-between mb-6">
//                       <h3 className="text-lg font-semibold text-gray-900">Recent Channels</h3>
//                       <button 
//                         onClick={() => setActiveTab('channels')}
//                         className="text-sm text-indigo-600 hover:text-indigo-800"
//                       >
//                         View all
//                       </button>
//                     </div>
//                     <div className="space-y-4">
//                       {summary.recentChannels.map(channel => (
//                         <div key={channel._id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                           <div className="flex-shrink-0">
//                             {channel.logo ? (
//                               <img src={channel.logo} alt={channel.nameEn} className="w-12 h-12 rounded-lg object-cover" />
//                             ) : (
//                               <div
//                                 className="w-12 h-12 rounded-lg flex items-center justify-center"
//                                 style={{ backgroundColor: channel.color + '20' }}
//                               >
//                                 <Tv style={{ color: channel.color }} size={20} />
//                               </div>
//                             )}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-gray-900 truncate">{channel.nameEn}</p>
//                             <p className="text-sm text-gray-600 truncate">{channel.nameHi}</p>
//                           </div>
//                           <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }}></div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* News Management Tab */}
//             {activeTab === 'news' && (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* News Form */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">
//                       {isEditingNews ? 'Edit News Article' : 'Create New Article'}
//                     </h2>
//                     {isEditingNews && (
//                       <button
//                         onClick={resetNewsForm}
//                         className="text-gray-500 hover:text-gray-700 text-sm"
//                       >
//                         Cancel
//                       </button>
//                     )}
//                   </div>
//                   <div className="space-y-5">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Title (English) *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={newsFormData.titleEn || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, titleEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="Enter English title"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Title (Hindi)
//                       </label>
//                       <input
//                         type="text"
//                         value={newsFormData.titleHi || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, titleHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="Enter Hindi title"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Content (English) *
//                       </label>
//                       <textarea
//                         rows={4}
//                         value={newsFormData.contentEn || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, contentEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="Enter English content"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Content (Hindi)
//                       </label>
//                       <textarea
//                         rows={4}
//                         value={newsFormData.contentHi || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, contentHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="Enter Hindi content"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Image URL
//                       </label>
//                       <input
//                         type="url"
//                         value={newsFormData.image || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, image: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://example.com/image.jpg"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Category *
//                         </label>
//                         <input
//                           type="text"
//                           value={newsFormData.category || ''}
//                           onChange={(e) => setNewsFormData({ ...newsFormData, category: e.target.value })}
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                           placeholder="e.g., Politics, Sports"
//                         />
//                       </div>
//                       <div className="flex items-end">
//                         <div className="flex items-center h-10">
//                           <input
//                             type="checkbox"
//                             id="featured"
//                             checked={newsFormData.featured || false}
//                             onChange={(e) => setNewsFormData({ ...newsFormData, featured: e.target.checked })}
//                             className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
//                           />
//                           <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
//                             Featured Article
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="pt-2">
//                       <button
//                         type="button"
//                         onClick={handleNewsSubmit}
//                         className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center"
//                         disabled={loading}
//                       >
//                         {loading ? (
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                         ) : isEditingNews ? (
//                           'Update Article'
//                         ) : (
//                           'Create Article'
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* News List */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">News Articles ({news.length})</h2>
//                     <button
//                       onClick={() => {
//                         resetNewsForm();
//                         window.scrollTo({ top: 0, behavior: 'smooth' });
//                       }}
//                       className="flex items-center space-x-1 text-sm bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
//                     >
//                       <Plus size={16} />
//                       <span>Add New</span>
//                     </button>
//                   </div>
//                   <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
//                     {news.map(item => (
//                       <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-sm transition-all">
//                         <div className="flex items-center space-x-4 flex-1 min-w-0">
//                           {item.image ? (
//                             <img src={item.image} alt={item.titleEn} className="w-12 h-12 rounded-lg object-cover" />
//                           ) : (
//                             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                               <FileText className="text-blue-600" size={20} />
//                             </div>
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-medium text-gray-900 truncate">{item.titleEn}</h3>
//                             <div className="flex items-center mt-1 space-x-2">
//                               <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
//                                 {item.category}
//                               </span>
//                               {item.featured && (
//                                 <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
//                                   Featured
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEditNews(item)}
//                             className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
//                             disabled={loading}
//                             title="Edit"
//                           >
//                             <Edit size={16} />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteNews(item._id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                             disabled={loading}
//                             title="Delete"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Channels Management Tab */}
//             {activeTab === 'channels' && (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Channel Form */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">
//                       {isEditingChannel ? 'Edit TV Channel' : 'Add New Channel'}
//                     </h2>
//                     {isEditingChannel && (
//                       <button
//                         onClick={resetChannelForm}
//                         className="text-gray-500 hover:text-gray-700 text-sm"
//                         disabled={loading}
//                       >
//                         Cancel
//                       </button>
//                     )}
//                   </div>
//                   <form onSubmit={handleChannelSubmit} className="space-y-5">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Name (English) *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={channelFormData.nameEn || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, nameEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="Channel name in English"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Name (Hindi)
//                       </label>
//                       <input
//                         type="text"
//                         value={channelFormData.nameHi || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, nameHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="Channel name in Hindi"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Logo URL
//                       </label>
//                       <input
//                         type="url"
//                         value={channelFormData.logo || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, logo: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://example.com/logo.png"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Brand Color *
//                       </label>
//                       <div className="flex items-center space-x-4">
//                         <input
//                           type="color"
//                           value={channelFormData.color || '#3b82f6'}
//                           onChange={(e) => setChannelFormData({ ...channelFormData, color: e.target.value })}
//                           className="w-16 h-12 border border-gray-300 rounded-lg cursor-pointer"
//                         />
//                         <span className="text-sm font-mono">{channelFormData.color || '#3b82f6'}</span>
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Stream URL *
//                       </label>
//                       <input
//                         type="url"
//                         required
//                         value={channelFormData.streamUrl || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, streamUrl: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://example.com/stream.m3u8"
//                       />
//                     </div>
//                     <div className="pt-2">
//                       <button
//                         type="submit"
//                         className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center"
//                         disabled={loading}
//                       >
//                         {loading ? (
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                         ) : isEditingChannel ? (
//                           'Update Channel'
//                         ) : (
//                           'Add Channel'
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 </div>

//                 {/* Channels List */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">TV Channels ({channels.length})</h2>
//                     <button
//                       onClick={() => {
//                         resetChannelForm();
//                         window.scrollTo({ top: 0, behavior: 'smooth' });
//                       }}
//                       className="flex items-center space-x-1 text-sm bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
//                     >
//                       <Plus size={16} />
//                       <span>Add New</span>
//                     </button>
//                   </div>
//                   <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
//                     {channels.map(channel => (
//                       <div key={channel._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-sm transition-all">
//                         <div className="flex items-center space-x-4 flex-1 min-w-0">
//                           {channel.logo ? (
//                             <img src={channel.logo} alt={channel.nameEn} className="w-12 h-12 rounded-lg object-cover" />
//                           ) : (
//                             <div
//                               className="w-12 h-12 rounded-lg flex items-center justify-center"
//                               style={{ backgroundColor: channel.color + '20' }}
//                             >
//                               <Tv style={{ color: channel.color }} size={20} />
//                             </div>
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-medium text-gray-900 truncate">{channel.nameEn}</h3>
//                             <p className="text-sm text-gray-600 truncate">{channel.nameHi}</p>
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEditChannel(channel)}
//                             className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
//                             disabled={loading}
//                             title="Edit"
//                           >
//                             <Edit size={16} />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteChannel(channel._id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                             disabled={loading}
//                             title="Delete"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// javed akhtar
// ======================================================


// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import axios from 'axios';
// import { Edit, Trash2, Plus, Eye, TrendingUp, Users, FileText, Tv, LogOut } from 'lucide-react';
// import { logout } from '../redux/slices/authSlice';
// import { useNavigate, Link } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';

// interface NewsItem {
//   _id: string;
//   titleEn: string;
//   titleHi: string;
//   contentEn: string;
//   contentHi: string;
//   image: string;
//   category: string;
//   featured: boolean;
//   createdAt: string;
// }

// interface Channel {
//   _id: string;
//   nameEn: string;
//   nameHi: string;
//   logo: string;
//   color: string;
//   streamUrl: string;
//   schedule: any[];
// }

// interface DashboardSummary {
//   totalNews: number;
//   totalChannels: number;
//   recentNews: NewsItem[];
//   recentChannels: Channel[];
// }

// const Dashboard: React.FC = () => {
//   const { user, token } = useSelector((state: RootState) => state.auth);
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [channels, setChannels] = useState<Channel[]>([]);
//   const [summary, setSummary] = useState<DashboardSummary>({
//     totalNews: 0,
//     totalChannels: 0,
//     recentNews: [],
//     recentChannels: [],
//   });
//   const [newsFormData, setNewsFormData] = useState<Partial<NewsItem>>({});
//   const [channelFormData, setChannelFormData] = useState<Partial<Channel>>({ schedule: [] });
//   const [isEditingNews, setIsEditingNews] = useState(false);
//   const [isEditingChannel, setIsEditingChannel] = useState(false);
//   const [activeTab, setActiveTab] = useState<'overview' | 'news' | 'channels'>('overview');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Redirect to login if not authenticated or not admin
//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     } else if (!user.isAdmin) {
//       navigate('/', { replace: true });
//     }
//   }, [user, navigate]);

//   // Fetch news and channels from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // Fetch news
//         const newsResponse = await axios.get('http://localhost:5000/api/news', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const newsData = newsResponse.data;
//         // Fetch channels
//         const channelsResponse = await axios.get('http://localhost:5000/api/channels', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const channelsData = channelsResponse.data;

//         setNews(newsData);
//         setChannels(channelsData);
//         setSummary({
//           totalNews: newsData.length,
//           totalChannels: channelsData.length,
//           recentNews: newsData.slice(0, 5),
//           recentChannels: channelsData.slice(0, 5),
//         });
//       } catch (err: any) {
//         setError(t('errorFetchingData'));
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (token && user?.isAdmin) {
//       fetchData();
//     }
//   }, [token, user, t]);

//   const handleNewsSubmit = async () => {
//     setLoading(true);
//     try {
//       const newsPayload = {
//         titleEn: newsFormData.titleEn || '',
//         titleHi: newsFormData.titleHi || '',
//         contentEn: newsFormData.contentEn || '',
//         contentHi: newsFormData.contentHi || '',
//         image: newsFormData.image || '',
//         category: newsFormData.category || '',
//         featured: newsFormData.featured || false,
//       };

//       if (isEditingNews && newsFormData._id) {
//         await axios.put(`http://localhost:5000/api/news/${newsFormData._id}`, newsPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post('http://localhost:5000/api/news', newsPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       const response = await axios.get('http://localhost:5000/api/news', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNews(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalNews: response.data.length,
//         recentNews: response.data.slice(0, 5),
//       }));
//       setNewsFormData({});
//       setIsEditingNews(false);
//     } catch (err: any) {
//       setError(t('errorSavingNews'));
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChannelSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const channelPayload = {
//         nameEn: channelFormData.nameEn || '',
//         nameHi: channelFormData.nameHi || '',
//         logo: channelFormData.logo || '',
//         color: channelFormData.color || '#000000',
//         streamUrl: channelFormData.streamUrl || '',
//         schedule: channelFormData.schedule || [],
//       };

//       if (isEditingChannel && channelFormData._id) {
//         await axios.put(`http://localhost:5000/api/channels/${channelFormData._id}`, channelPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post('http://localhost:5000/api/channels', channelPayload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }

//       const response = await axios.get('http://localhost:5000/api/channels', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setChannels(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalChannels: response.data.length,
//         recentChannels: response.data.slice(0, 5),
//       }));
//       setChannelFormData({ schedule: [] });
//       setIsEditingChannel(false);
//     } catch (err: any) {
//       setError(t('errorSavingChannel'));
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditNews = (item: NewsItem) => {
//     setNewsFormData(item);
//     setIsEditingNews(true);
//   };

//   const handleEditChannel = (item: Channel) => {
//     setChannelFormData(item);
//     setIsEditingChannel(true);
//   };

//   const handleDeleteNews = async (id: string) => {
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:5000/api/news/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const response = await axios.get('http://localhost:5000/api/news', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNews(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalNews: response.data.length,
//         recentNews: response.data.slice(0, 5),
//       }));
//     } catch (err: any) {
//       setError(t('errorDeletingNews'));
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteChannel = async (id: string) => {
//     setLoading(true);
//     try {
//       await axios.delete(`http://localhost:5000/api/channels/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const response = await axios.get('http://localhost:5000/api/channels', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setChannels(response.data);
//       setSummary((prev) => ({
//         ...prev,
//         totalChannels: response.data.length,
//         recentChannels: response.data.slice(0, 5),
//       }));
//     } catch (err: any) {
//       setError(t('errorDeletingChannel'));
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetNewsForm = () => {
//     setNewsFormData({});
//     setIsEditingNews(false);
//   };

//   const resetChannelForm = () => {
//     setChannelFormData({ schedule: [] });
//     setIsEditingChannel(false);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     try {
//       localStorage.removeItem('token');
//     } catch (error) {
//       console.error('Error clearing localStorage:', error);
//     }
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <div className="bg-indigo-600 text-white p-2 rounded-lg">
//               <Tv size={24} />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">{t('mediaDashboard')}</h1>
//               <p className="text-gray-600 mt-1 text-sm">{t('welcome')}, {user?.name}</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             {user?.isSuperAdmin && (
//               <div className="flex space-x-2">
//                 <Link
//                   to="/admin/users"
//                   className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   {t('manageUsers')}
//                 </Link>
//                 <Link
//                   to="/admin/audit"
//                   className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   {t('auditLog')}
//                 </Link>
//               </div>
//             )}
//             <button
//               onClick={handleLogout}
//               className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors"
//             >
//               <LogOut size={18} />
//               <span>{t('logout')}</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="container mx-auto px-6 pt-6">
//           <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
//             <div className="flex items-center">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span className="font-medium">{error}</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Navigation Tabs */}
//       <div className="container mx-auto px-6 py-6">
//         <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm w-fit border border-gray-200">
//           {[
//             { key: 'overview', label: t('overview'), icon: TrendingUp },
//             { key: 'news', label: t('news'), icon: FileText },
//             { key: 'channels', label: t('channels'), icon: Tv },
//           ].map(({ key, label, icon: Icon }) => (
//             <button
//               key={key}
//               onClick={() => setActiveTab(key as any)}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${
//                 activeTab === key
//                   ? 'bg-indigo-50 text-indigo-600'
//                   : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
//               }`}
//             >
//               <Icon size={18} />
//               <span>{label}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="container mx-auto px-6 pb-12">
//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//           </div>
//         ) : (
//           <>
//             {/* Overview Tab */}
//             {activeTab === 'overview' && (
//               <div className="space-y-8">
//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-500">{t('totalNews')}</p>
//                         <p className="text-3xl font-bold text-gray-900 mt-1">{summary.totalNews}</p>
//                         <p className="text-xs text-gray-500 mt-2">{t('newsGrowth')}</p>
//                       </div>
//                       <div className="bg-blue-100 p-3 rounded-lg">
//                         <FileText className="text-blue-600" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-500">{t('totalChannels')}</p>
//                         <p className="text-3xl font-bold text-gray-900 mt-1">{summary.totalChannels}</p>
//                         <p className="text-xs text-gray-500 mt-2">{t('channelGrowth')}</p>
//                       </div>
//                       <div className="bg-green-100 p-3 rounded-lg">
//                         <Tv className="text-green-600" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-500">{t('featuredNews')}</p>
//                         <p className="text-3xl font-bold text-gray-900 mt-1">{news.filter(n => n.featured).length}</p>
//                         <p className="text-xs text-gray-500 mt-2">{t('highlightedContent')}</p>
//                       </div>
//                       <div className="bg-purple-100 p-3 rounded-lg">
//                         <Eye className="text-purple-600" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-500">{t('categories')}</p>
//                         <p className="text-3xl font-bold text-gray-900 mt-1">{new Set(news.map(n => n.category)).size}</p>
//                         <p className="text-xs text-gray-500 mt-2">{t('diverseTopics')}</p>
//                       </div>
//                       <div className="bg-orange-100 p-3 rounded-lg">
//                         <Users className="text-orange-600" size={24} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Recent Items */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                     <div className="flex items-center justify-between mb-6">
//                       <h3 className="text-lg font-semibold text-gray-900">{t('recentNews')}</h3>
//                       <button 
//                         onClick={() => setActiveTab('news')}
//                         className="text-sm text-indigo-600 hover:text-indigo-800"
//                       >
//                         {t('viewAll')}
//                       </button>
//                     </div>
//                     <div className="space-y-4">
//                       {summary.recentNews.map(item => (
//                         <div key={item._id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                           <div className="flex-shrink-0">
//                             {item.image ? (
//                               <img src={item.image} alt={item.titleEn} className="w-12 h-12 rounded-lg object-cover" />
//                             ) : (
//                               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                                 <FileText className="text-blue-600" size={20} />
//                               </div>
//                             )}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-gray-900 truncate">{item.titleEn}</p>
//                             <div className="flex items-center mt-1 space-x-2">
//                               <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
//                                 {item.category}
//                               </span>
//                               {item.featured && (
//                                 <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
//                                   {t('featured')}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                           <div className="text-xs text-gray-500">
//                             {new Date(item.createdAt).toLocaleDateString()}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                     <div className="flex items-center justify-between mb-6">
//                       <h3 className="text-lg font-semibold text-gray-900">{t('recentChannels')}</h3>
//                       <button 
//                         onClick={() => setActiveTab('channels')}
//                         className="text-sm text-indigo-600 hover:text-indigo-800"
//                       >
//                         {t('viewAll')}
//                       </button>
//                     </div>
//                     <div className="space-y-4">
//                       {summary.recentChannels.map(channel => (
//                         <div key={channel._id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                           <div className="flex-shrink-0">
//                             {channel.logo ? (
//                               <img src={channel.logo} alt={channel.nameEn} className="w-12 h-12 rounded-lg object-cover" />
//                             ) : (
//                               <div
//                                 className="w-12 h-12 rounded-lg flex items-center justify-center"
//                                 style={{ backgroundColor: channel.color + '20' }}
//                               >
//                                 <Tv style={{ color: channel.color }} size={20} />
//                               </div>
//                             )}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-gray-900 truncate">{channel.nameEn}</p>
//                             <p className="text-sm text-gray-600 truncate">{channel.nameHi}</p>
//                           </div>
//                           <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }}></div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* News Management Tab */}
//             {activeTab === 'news' && (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* News Form */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">
//                       {isEditingNews ? t('editNews') : t('createNews')}
//                     </h2>
//                     {isEditingNews && (
//                       <button
//                         onClick={resetNewsForm}
//                         className="text-gray-500 hover:text-gray-700 text-sm"
//                       >
//                         {t('cancel')}
//                       </button>
//                     )}
//                   </div>
//                   <div className="space-y-5">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('titleEn')} *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={newsFormData.titleEn || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, titleEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder={t('enterTitleEn')}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('titleHi')}
//                       </label>
//                       <input
//                         type="text"
//                         value={newsFormData.titleHi || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, titleHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder={t('enterTitleHi')}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('contentEn')} *
//                       </label>
//                       <textarea
//                         rows={4}
//                         value={newsFormData.contentEn || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, contentEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder={t('enterContentEn')}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('contentHi')}
//                       </label>
//                       <textarea
//                         rows={4}
//                         value={newsFormData.contentHi || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, contentHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder={t('enterContentHi')}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('imageUrl')}
//                       </label>
//                       <input
//                         type="url"
//                         value={newsFormData.image || ''}
//                         onChange={(e) => setNewsFormData({ ...newsFormData, image: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://example.com/image.jpg"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           {t('category')} *
//                         </label>
//                         <input
//                           type="text"
//                           value={newsFormData.category || ''}
//                           onChange={(e) => setNewsFormData({ ...newsFormData, category: e.target.value })}
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                           placeholder={t('enterCategory')}
//                         />
//                       </div>
//                       <div className="flex items-end">
//                         <div className="flex items-center h-10">
//                           <input
//                             type="checkbox"
//                             id="featured"
//                             checked={newsFormData.featured || false}
//                             onChange={(e) => setNewsFormData({ ...newsFormData, featured: e.target.checked })}
//                             className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
//                           />
//                           <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
//                             {t('featuredArticle')}
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="pt-2">
//                       <button
//                         type="button"
//                         onClick={handleNewsSubmit}
//                         className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center"
//                         disabled={loading}
//                       >
//                         {loading ? (
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                         ) : isEditingNews ? (
//                           t('updateArticle')
//                         ) : (
//                           t('createArticle')
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* News List */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">{t('newsArticles')} ({news.length})</h2>
//                     <button
//                       onClick={() => {
//                         resetNewsForm();
//                         window.scrollTo({ top: 0, behavior: 'smooth' });
//                       }}
//                       className="flex items-center space-x-1 text-sm bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
//                     >
//                       <Plus size={16} />
//                       <span>{t('addNew')}</span>
//                     </button>
//                   </div>
//                   <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
//                     {news.map(item => (
//                       <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-sm transition-all">
//                         <div className="flex items-center space-x-4 flex-1 min-w-0">
//                           {item.image ? (
//                             <img src={item.image} alt={item.titleEn} className="w-12 h-12 rounded-lg object-cover" />
//                           ) : (
//                             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                               <FileText className="text-blue-600" size={20} />
//                             </div>
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-medium text-gray-900 truncate">{item.titleEn}</h3>
//                             <div className="flex items-center mt-1 space-x-2">
//                               <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
//                                 {item.category}
//                               </span>
//                               {item.featured && (
//                                 <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
//                                   {t('featured')}
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEditNews(item)}
//                             className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
//                             disabled={loading}
//                             title={t('edit')}
//                           >
//                             <Edit size={16} />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteNews(item._id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                             disabled={loading}
//                             title={t('delete')}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Channels Management Tab */}
//             {activeTab === 'channels' && (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Channel Form */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">
//                       {isEditingChannel ? t('editChannel') : t('addChannel')}
//                     </h2>
//                     {isEditingChannel && (
//                       <button
//                         onClick={resetChannelForm}
//                         className="text-gray-500 hover:text-gray-700 text-sm"
//                         disabled={loading}
//                       >
//                         {t('cancel')}
//                       </button>
//                     )}
//                   </div>
//                   <form onSubmit={handleChannelSubmit} className="space-y-5">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('nameEn')} *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={channelFormData.nameEn || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, nameEn: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder={t('channelNameEn')}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('nameHi')}
//                       </label>
//                       <input
//                         type="text"
//                         value={channelFormData.nameHi || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, nameHi: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder={t('channelNameHi')}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('logoUrl')}
//                       </label>
//                       <input
//                         type="url"
//                         value={channelFormData.logo || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, logo: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://example.com/logo.png"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('brandColor')} *
//                       </label>
//                       <div className="flex items-center space-x-4">
//                         <input
//                           type="color"
//                           value={channelFormData.color || '#3b82f6'}
//                           onChange={(e) => setChannelFormData({ ...channelFormData, color: e.target.value })}
//                           className="w-16 h-12 border border-gray-300 rounded-lg cursor-pointer"
//                         />
//                         <span className="text-sm font-mono">{channelFormData.color || '#3b82f6'}</span>
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         {t('streamUrl')} *
//                       </label>
//                       <input
//                         type="url"
//                         required
//                         value={channelFormData.streamUrl || ''}
//                         onChange={(e) => setChannelFormData({ ...channelFormData, streamUrl: e.target.value })}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                         placeholder="https://example.com/stream.m3u8"
//                       />
//                     </div>
//                     <div className="pt-2">
//                       <button
//                         type="submit"
//                         className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center"
//                         disabled={loading}
//                       >
//                         {loading ? (
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                         ) : isEditingChannel ? (
//                           t('updateChannel')
//                         ) : (
//                           t('addChannel')
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 </div>

//                 {/* Channels List */}
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center justify-between mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">{t('tvChannels')} ({channels.length})</h2>
//                     <button
//                       onClick={() => {
//                         resetChannelForm();
//                         window.scrollTo({ top: 0, behavior: 'smooth' });
//                       }}
//                       className="flex items-center space-x-1 text-sm bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
//                     >
//                       <Plus size={16} />
//                       <span>{t('addNew')}</span>
//                     </button>
//                   </div>
//                   <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
//                     {channels.map(channel => (
//                       <div key={channel._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-sm transition-all">
//                         <div className="flex items-center space-x-4 flex-1 min-w-0">
//                           {channel.logo ? (
//                             <img src={channel.logo} alt={channel.nameEn} className="w-12 h-12 rounded-lg object-cover" />
//                           ) : (
//                             <div
//                               className="w-12 h-12 rounded-lg flex items-center justify-center"
//                               style={{ backgroundColor: channel.color + '20' }}
//                             >
//                               <Tv style={{ color: channel.color }} size={20} />
//                             </div>
//                           )}
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-medium text-gray-900 truncate">{channel.nameEn}</h3>
//                             <p className="text-sm text-gray-600 truncate">{channel.nameHi}</p>
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEditChannel(channel)}
//                             className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
//                             disabled={loading}
//                             title={t('edit')}
//                           >
//                             <Edit size={16} />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteChannel(channel._id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                             disabled={loading}
//                             title={t('delete')}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;