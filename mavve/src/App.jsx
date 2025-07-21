import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import RoomPage from '../src/pages/RoomPage/RoomPage';
import RoomInsidePage from './pages/RoomInsidePage/RoomInsidePage';

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
      </Routes>
    </Router>
  )
}

export default App
