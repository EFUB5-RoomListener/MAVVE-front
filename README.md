<div align="center">
  <h1>🎧 MAVVE - Frontend</h1>
  <p>EFUB 5기 SWS 3팀 "Mavve" 프로젝트 프론트엔드 레포지토리입니다.</p>
  <img width="600" alt="mavve-preview" src="https://github.com/user-attachments/assets/65266682-ae49-447b-af9d-8c872395382a" />
</div>


## 🎸Mavve는 어떤 프로젝트일까요?

> 음악을 통한 공유 경험, Mavve!

`Mavve`는 음악을 통해 감정을 실시간으로 공유하고,  
몰입감을 높이는 협업 환경을 제공하는 서비스입니다.  
음악 플레이리스트, 한줄 일기를 기반으로 다른 유저와 교감할 수 있어요.



## 🗓️ 개발 기간
- 2025.07.07 ~



## 💡 주요 기능

## 🔨 기술 스택


## 👩‍💻 팀원

<table style="table-layout: fixed; width: 100%;">
  <tr>
    <td align="center" width="33%"><img src="https://github.com/billy0904.png" width="100" /></td>
    <td align="center" width="33%"><img src="https://github.com/hakyunghahm.png" width="100" /></td>
    <td align="center" width="33%"><img src="https://github.com/wys0530.png" width="100" /></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/billy0904"><strong>@billy0904</strong></a></td>
    <td align="center"><a href="https://github.com/hakyunghahm"><strong>@hakyunghahm</strong></a></td>
    <td align="center"><a href="https://github.com/wys0530"><strong>@wys0530</strong></a></td>
  </tr>
  <tr>
    <td align="center">이가빈</td>
    <td align="center">함하경</td>
    <td align="center">우윤수</td>
  </tr>
  <tr>
    <td align="center">메인 및 플레이리스트 페이지<br/>페이지 진입, 플레이리스트 생성 기능</td>
    <td align="center">방 생성 및 내부 페이지<br/>실시간 음악 재생 및 동기화, 채팅 기능</td>
    <td align="center">로그인 및 마이페이지<br/>사용자 인증, 정보 관리 기능</td>
  </tr>
</table>


## 📁 프로젝트 구조

```
MAVVE-FRONT/
├── .github/
│ └── ISSUE_TEMPLATE/
│
└── mavve/
├── node_modules/
├── public/
└── src/
├── api/
│ ├── auth.js
│ ├── axiosInstance.js
│ ├── chat.js
│ ├── client.js
│ ├── diary.js
│ ├── image.js
│ ├── playlist.js
│ ├── room.js
│ ├── song.js
│ ├── user.js
│ └── websocket-song.js
│
├── assets/
│ ├── Common/
│ ├── LoginPage/
│ ├── MainPage/
│ ├── MyPage/
│ ├── PlaylistPage/
│ ├── RoomInsidePage/
│ └── RoomPage/
│
├── components/
│ ├── Common/
│ ├── MainPage/
│ ├── MyPage/
│ ├── PlaylistPage/
│ ├── RoomInsidePage/
│ └── RoomPage/
│
├── pages/
│ ├── LoginPage/
│ ├── MainPage/
│ ├── MyPage/
│ ├── PlaylistPage/
│ ├── RoomInsidePage/
│ └── RoomPage/
│
├── store/
├── styles/
├── App.jsx
└── main.jsx       

```


