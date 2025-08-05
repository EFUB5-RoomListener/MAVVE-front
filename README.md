# MAVVE-front
<div align="center">
  <h1>🎧 MAVVE - Frontend</h1>
  <p>EFUB 5기 SWS 3팀 "Mavve" 프로젝트 프론트엔드 레포지토리입니다.</p>
  <img width="600" alt="mavve-preview" src="https://github.com/user-attachments/assets/65266682-ae49-447b-af9d-8c872395382a" />



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
<table>
  <tr>
    <td align="center"><img src="https://github.com/billy0904.png" width="100" /></td>
    <td align="center"><img src="https://github.com/hakyunghahm.png" width="100" /></td>
    <td align="center"><img src="https://github.com/wys0530.png" width="100" /></td>
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
    <td align="center">메인 및 플레이리스트 페이지<br/>페이지 진입 흐름, 플레이리스트 생성 기능</td>
    <td align="center">방 생성 및 내부 페이지<br/>실시간 음악 재생, 동기화, 채팅 기능</td>
    <td align="center">로그인 및 마이페이지<br/>사용자 인증, 정보 관리 기능</td>
  </tr>
</table>

## 📁 프로젝트 구조

```
MAVVE-FRONT/
│
├── .github/
│   └── ISSUE_TEMPLATE/
│       └── 기능_추가_이슈_템플릿.md        
│
├── mavve/                                 
│   ├── node_modules/                       # 의존성 모듈
│   ├── public/                             # 정적 파일
│   ├── src/                                # 프로젝트 소스 코드
│   │   ├── api/                            # API 요청 함수 모음
│   │   │   ├── auth.js
│   │   │   ├── axiosInstance.js
│   │   │   ├── chat.js
│   │   │   ├── client.js
│   │   │   ├── diary.js
│   │   │   ├── image.js
│   │   │   ├── playlist.js
│   │   │   ├── room.js
│   │   │   ├── song.js
│   │   │   ├── user.js
│   │   │   └── websocket-song.js
│   │   │
│   │   ├── assets/                         # 이미지, 아이콘 등 정적 리소스
│   │   │   ├── Common/
│   │   │   ├── LoginPage/
│   │   │   ├── MainPage/
│   │   │   ├── MyPage/
│   │   │   ├── PlaylistPage/
│   │   │   ├── RoomInsidePage/
│   │   │   └── RoomPage/
│   │   │
│   │   ├── components/                     # UI 컴포넌트
│   │   │   ├── Common/
│   │   │   ├── MainPage/
│   │   │   ├── MyPage/
│   │   │   ├── PlaylistPage/
│   │   │   ├── RoomInsidePage/
│   │   │   └── RoomPage/
│   │   │
│   │   ├── pages/                          # 라우팅 단위 페이지 컴포넌트
│   │   │   ├── LoginPage/
│   │   │   ├── MainPage/
│   │   │   ├── MyPage/
│   │   │   ├── PlaylistPage/
│   │   │   ├── RoomInsidePage/
│   │   │   └── RoomPage/
│   │   │
│   │   ├── store/                          # 전역 상태 관리 (Zustand)
│   │   ├── styles/                         # 전역 스타일 파일
│   │   ├── App.jsx                         # 루트 컴포넌트
│   │   └── main.jsx                        # 엔트리 포인트
│   │
│   ├── .env                                # 환경 변수 파일
│   ├── .gitignore                          # Git 무시 파일 목록
│   ├── eslint.config.js                    # ESLint 설정
│   ├── index.html                          # HTML 템플릿
│   ├── package.json                        # 프로젝트 메타 정보 및 의존성
│   ├── vite.config.js                      # Vite 설정
│   ├── yarn.lock                           # 패키지 버전 잠금
│   ├── pull_request_template.md            # PR 템플릿
│   └── README.md                           # 메인 리드미
```

---

## 💡 폴더 설명 요약

| 폴더/파일명 | 설명 |
|-------------|------|
| `src/api/` | 각 기능별 API 요청 함수 정의 |
| `src/assets/` | 페이지별 정적 리소스 (이미지 등) |
| `src/components/` | 공통 및 페이지별 UI 컴포넌트 |
| `src/pages/` | 라우터에 등록되는 페이지 컴포넌트 |
| `src/store/` | 상태 관리 파일 (Zustand) |
| `src/styles/` | 전역 스타일 파일 |
| `App.jsx` / `main.jsx` | 앱 루트 및 진입점 |
| `.env` | 환경 변수 설정 파일 |
| `vite.config.js` | 빌드 도구 Vite 설정 |
| `package.json` | 의존성 및 프로젝트 정보 |
