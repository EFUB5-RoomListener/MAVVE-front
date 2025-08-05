# MAVVE-front

## 📁 프로젝트 구조

```
MAVVE-FRONT/
│
├── .github/
│   └── ISSUE_TEMPLATE/
│       └── 기능_추가_이슈_템플릿.md        # GitHub 이슈 템플릿
│
├── mavve/                                  # 실제 프로젝트 루트
│   ├── node_modules/                       # 의존성 모듈
│   ├── public/                             # 정적 파일 (index.html 등)
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
│   │   ├── store/                          # 전역 상태 관리 (Zustand 등)
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
| `src/store/` | 상태 관리 파일 (Zustand 등) |
| `src/styles/` | 전역 스타일 파일 |
| `App.jsx` / `main.jsx` | 앱 루트 및 진입점 |
| `.env` | 환경 변수 설정 파일 |
| `vite.config.js` | 빌드 도구 Vite 설정 |
| `package.json` | 의존성 및 프로젝트 정보 |
