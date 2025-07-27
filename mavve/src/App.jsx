import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import RoomPage from "../src/pages/RoomPage/RoomPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyPage from "./pages/MyPage/MyPage";
import LikedRoomPage from "./pages/MyPage/LikedRoomPage";
import MyRoomPage from "./pages/MyPage/MyRoomPage";
import LoginLoadPage from "./pages/LoginPage/LoginLoadPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/rooms/:roomCode" element={<RoomPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/likedroom" element={<LikedRoomPage />} />
        <Route path="/mypage/myroom" element={<MyRoomPage />} />
        <Route path="/login/load" element={<LoginLoadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
