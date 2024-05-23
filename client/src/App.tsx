import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import Channels from './pages/Channels';
import Profiles from './pages/Profiles';
import Insights from './pages/Insights';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Roles from './pages/Roles';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='inbox' element={<Inbox />} />
          <Route path='channels' element={<Channels />} />
          <Route path='profiles' element={<Profiles />} />
          <Route path='insights' element={<Insights />} />
          <Route path='users' element={<Users />} />
          <Route path='settings' element={<Settings />} />
          <Route path='roles' element={<Roles />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
