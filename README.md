<div align="center">
  <h1>🎧 MAVVE - Frontend</h1>
  <p>EFUB 5기 SWS 3팀 "MAAVE" 프로젝트 프론트엔드 레포지토리입니다.</p>
  <img width="600" alt="mavve-preview" src="https://github.com/user-attachments/assets/65266682-ae49-447b-af9d-8c872395382a" />
</div>


## 🎸MAAVE는 어떤 프로젝트일까요?

> 음악을 통한 공유 경험, MAAVE!

`MAAVE`는 음악을 통해 감정을 실시간으로 공유하고,  
몰입감을 높이는 협업 환경을 제공하는 서비스입니다.  
음악 플레이리스트, 한줄 일기를 기반으로 다른 유저와 교감할 수 있어요.



## 🗓️ 개발 기간
- 2025.07.07 ~ 08.08



## 💡 주요 기능

 <div align="center">

<!-- 1행 -->
<img src="https://github.com/user-attachments/assets/bd30faa2-c905-4f42-a125-6ebc59ac4919" width="45%">
<img src="https://github.com/user-attachments/assets/ecd4c399-79b3-4f58-841e-4b00dab9ba28" width="45%">

<!-- 줄바꿈 -->
<br>

<!-- 2행 -->
<img src="https://github.com/user-attachments/assets/054ac552-1ec9-4028-a08e-f23be5e666b3" width="45%">
<img src="https://github.com/user-attachments/assets/3f8fa636-bc72-4228-bf8a-1d9be584923d" width="45%">
<br>
<img src="https://github.com/user-attachments/assets/bae639dc-a4f1-459f-a70f-998ec30b9897" width="90%">

</div>
  


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

## 🔧 기술 스택

### Environment  
![Git](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

### Language  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Development  
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Spotify Web SDK](https://img.shields.io/badge/Spotify%20Web%20SDK-1ED760?style=for-the-badge&logo=spotify&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white)

### Deploy  
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


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
├── hoc/
│ └── Auth.jsx
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
│ ├── useUserStore.js
│ └── useRoomStore.js
│
├── styles/
├── App.jsx
├── main.jsx
├── .env
└── .env.production      

```


