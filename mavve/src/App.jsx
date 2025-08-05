import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import RoomPage from "../src/pages/RoomPage/RoomPage";
import RoomInsidePage from "./pages/RoomInsidePage/RoomInsidePage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import PlaylistDetailPage from "./pages/PlaylistPage/PlaylistDetailPage";
import NewPlaylistPage from "./pages/PlaylistPage/NewPlaylistPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyPage from "./pages/MyPage/MyPage";
import LikedRoomPage from "./pages/MyPage/LikedRoomPage";
import MyRoomPage from "./pages/MyPage/MyRoomPage";
import LoginLoadPage from "./pages/LoginPage/LoginLoadPage";
import Auth from "./hoc/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth Page={MainPage} option="login" />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/playlist/new" element={<NewPlaylistPage />} />
        <Route path="/playlist/:playlistId" element={<PlaylistDetailPage />} />
        <Route path="/rooms/" element={<RoomPage />} />
        <Route path="/rooms/:roomCode" element={<RoomPage />} />
        <Route path="/rooms/:roomCode/inside" element={<RoomInsidePage />} />
        <Route
          path="/login"
          element={<Auth Page={LoginPage} option="logout" />}
        />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/likedroom" element={<LikedRoomPage />} />
        <Route path="/mypage/myroom" element={<MyRoomPage />} />
        <Route path="/login/load" element={<LoginLoadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
