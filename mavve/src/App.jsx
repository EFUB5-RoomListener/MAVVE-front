import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import RoomPage from '../src/pages/RoomPage/RoomPage';
import RoomInsidePage from './pages/RoomInsidePage/RoomInsidePage';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';
import PlaylistDetailPage from './pages/PlaylistPage/PlaylistDetailPage';
import NewPlaylistPage from './pages/PlaylistPage/NewPlaylistPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route 
          path='/'
          element={<MainPage />}
        />
        <Route 
          path='/room'
          element={<RoomPage />}
        />
        <Route 
          path='/roominside'
          element={<RoomInsidePage />}
        />
        <Route 
          path='/playlist'
          element={<PlaylistPage />}
        />
        <Route 
          path='/playlist/new' 
          element={<NewPlaylistPage />} 
        />
        <Route 
          path='/playlist/:id' 
          element={<PlaylistDetailPage />} 
        />
      </Routes>
    </Router>
  )
}

export default App
