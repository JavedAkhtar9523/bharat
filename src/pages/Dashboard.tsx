



import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
import { fetchChannels, Channel } from '../redux/slices/channelsSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { news, loading: newsLoading } = useSelector((state: RootState) => state.news);
  const { channels, loading: channelsLoading } = useSelector((state: RootState) => state.channels);
  const [formData, setFormData] = useState<Partial<NewsItem>>({});
  const [channelFormData, setChannelFormData] = useState<Partial<Channel>>({ schedule: [] });
  const [isEditing, setIsEditing] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [summary, setSummary] = useState({ totalNews: 0, totalChannels: 0, recentNews: [], recentChannels: [] });

  useEffect(() => {
    if (!token) navigate('/login');
    dispatch(fetchNews());
    dispatch(fetchChannels());
    fetchSummary();
  }, [dispatch, token, navigate]);

  const fetchSummary = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dashboard/summary', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSummary(response.data.summary);
    } catch (err) {
      console.error('Error fetching dashboard summary:', err);
    }
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
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
    } catch (err) {
      console.error('Error saving news:', err);
    }
  };

  const handleChannelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
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
    } catch (err) {
      console.error('Error saving channel:', err);
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
      await axios.delete(`http://localhost:5000/api/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(fetchNews());
      fetchSummary();
    } catch (err) {
      console.error('Error deleting news:', err);
    }
  };

  const handleDeleteChannel = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/channels/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(fetchChannels());
      fetchSummary();
    } catch (err) {
      console.error('Error deleting channel:', err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Summary</h2>
          <p>Total News Articles: {summary.totalNews}</p>
          <p>Total Channels: {summary.totalChannels}</p>
          <h3 className="font-bold mt-4">Recent News</h3>
          <ul>
            {summary.recentNews.map((item: any) => (
              <li key={item._id}>{item.titleEn} ({item.category})</li>
            ))}
          </ul>
          <h3 className="font-bold mt-4">Recent Channels</h3>
          <ul>
            {summary.recentChannels.map((item: any) => (
              <li key={item._id}>{item.nameEn}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Manage News</h2>
          <form onSubmit={handleNewsSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title (English)"
              value={formData.titleEn || ''}
              onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Title (Hindi)"
              value={formData.titleHi || ''}
              onChange={(e) => setFormData({ ...formData, titleHi: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Content (English)"
              value={formData.contentEn || ''}
              onChange={(e) => setFormData({ ...formData, contentEn: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Content (Hindi)"
              value={formData.contentHi || ''}
              onChange={(e) => setFormData({ ...formData, contentHi: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={formData.image || ''}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category || ''}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <label>
              <input
                type="checkbox"
                checked={formData.featured || false}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              />
              Featured
            </label>
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
              {isEditing ? 'Update News' : 'Add News'}
            </button>
          </form>
          <div className="mt-6">
            {news.map((item: NewsItem) => (
              <div key={item._id} className="flex justify-between items-center p-2 border-b">
                <span>{item.titleEn}</span>
                <div>
                  <button onClick={() => handleEditNews(item)} className="text-blue-600 mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteNews(item._id)} className="text-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Manage Channels</h2>
          <form onSubmit={handleChannelSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name (English)"
              value={channelFormData.nameEn || ''}
              onChange={(e) => setChannelFormData({ ...channelFormData, nameEn: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Name (Hindi)"
              value={channelFormData.nameHi || ''}
              onChange={(e) => setChannelFormData({ ...channelFormData, nameHi: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Logo"
              value={channelFormData.logo || ''}
              onChange={(e) => setChannelFormData({ ...channelFormData, logo: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Color"
              value={channelFormData.color || ''}
              onChange={(e) => setChannelFormData({ ...channelFormData, color: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Stream URL"
              value={channelFormData.streamUrl || ''}
              onChange={(e) => setChannelFormData({ ...channelFormData, streamUrl: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
              {isEditing ? 'Update Channel' : 'Add Channel'}
            </button>
          </form>
          <div className="mt-6">
            {channels.map((channel: Channel) => (
              <div key={channel._id} className="flex justify-between items-center p-2 border-b">
                <span>{channel.nameEn}</span>
                <div>
                  <button onClick={() => handleEditChannel(channel)} className="text-blue-600 mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteChannel(channel._id)} className="text-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

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