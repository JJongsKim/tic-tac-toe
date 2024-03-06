# 🎮 Tic! Tac! Toe! 게임

원하는 로고와 원하는 색상을 선택하여 빙고 게임을 해봅시다!

## [프로젝트 실행방법]

```
npm install
⬇️
npm start
```

## [게임 바로 하러가기]
[Tic Tac Toe 보러오세요🎉](https://soojeong-tic-tac-toe.netlify.app/)

## [Commit Convention]
👻 GITMOJI
| 머릿말   | 설명                              |
| -------- | --------------------------------- |
| Setting  | 프로젝트 세팅 및 패키지 관련 처리 |
| Feat     | 기능 단위 구현                    |
| Style    | 프로젝트 UI 퍼블리싱              |
| Fix      | 프로젝트 수정 건에 대한 처리      |
| docs     | 주석 및 문서 작업                 |

## [Tech Stack]

- ✨ **개발 환경** : VSCode, Git, Github, Npm
- ✨ **주요 스택** : React, TypeScript
- ✨ **스타일링 도구** : Styled-Components
- ✨ **상태 관리** : Redux-Toolkit
- ✨ **기타** : ESLint, Prettier

## [폴더 구조]

```
├── 📂 public
│
├── 📂 src
│   ├── 📂 components
│   │    └── 📂 buttonBase
│   │    └── 📂 dropdown
│   │    └── 📂 gameBoard
│   │
│   ├── 📂 layout
│   │
│   ├── 📂 hook
│   │    └── 📝 useGetWinningLines.ts
│   ├── 📂 utils
│   │    └── 📝 getColorByMarkColor.ts
│   │    └── 📝 mock.ts
│   │
│   ├── 📂 store
│   │    └── 📂 reducers
│   │    └── 📝 index.ts
│   │
│   ├── 📂 pages
│   │    └── 📂 mainPage
│   │    └── 📂 optionPage
│   │    └── 📂 reviewPage
│   │    └── 📂 startPage
│   │
│   ├── 📂 types
│   ├── 📂 styles
│   ├── 📂 assets
│   └── 📝 App.tsx, index.tsx, ...
│
├── 🛠 eslint, prettier ...
│
└── 🛠 package.json, README.md, gitignore ...
```

## [프로젝트의 주요 기능]

**👻 보드판의 크기, 승리 조건, 선공, 플레이어별 마크와 색상을 선택 가능**  
선공의 순서는 따로 선택하지 않을 시 50% 확률로 변경된다.

**👻 셀 선택 시 해당 셀은 선택한 플레이어의 마크와 색상으로 변경된다.**

**👻 15초간 셀을 선택하지 않을 시 랜덤으로 선택되며, 다음 플레이어에게 공격권이 넘어간다.**

**👻 플레이어별 무르기는 3회씩 가지고 있으며, 게임의 첫 시작이나 무르기가 0회가 되었을 경우 사용되지 않는다.**

**👻 보드판의 크기별로 승리할 수 있는 조건을 계산하여, 조건을 충족하는 마크의 플레이어가 승리하게 된다.**

**👻 게임 종료 후, 홈 화면으로 돌아가기와 해당 게임의 기록을 저장하는 버튼이 나온다.**
- 홈 화면으로 돌아가기 클릭 : 가장 첫 번째로 만났던 화면으로 돌아가게 된다.
- 기록 저장하기 클릭 : 지금까지 플레이했던 기록들을 저장하게 된다.

**👻 홈 화면의 저장된 기록보기를 클릭하면 이전에 플레이했던 게임의 내역을 볼 수 있다.**
- 승자와 게임판의 내역, 그리고 해당 마크가 몇 번째에 눌렸는지 알 수 있다.
- 무르기로 삭제된 셀의 순서는 표시되지 않는다.

## [이미지로 빠르게 확인하기]

|첫 시작 페이지|
|:--:|
|<img width="1510" alt="스크린샷 2024-03-06 오후 1 33 57" src="https://github.com/JJongsKim/tic-tac-toe/assets/81777778/e682c32c-32cb-4b72-a36e-5c346ba86b56">|

|옵션 선택 페이지|옵션 선택 페이지|
|:--:|:--:|
|<img width="1510" alt="스크린샷 2024-03-06 오후 1 34 07" src="https://github.com/JJongsKim/tic-tac-toe/assets/81777778/5851f686-ad8f-456d-937a-7310419db767">|<img width="1510" alt="스크린샷 2024-03-06 오후 1 34 53" src="https://github.com/JJongsKim/tic-tac-toe/assets/81777778/86f56dbb-714e-4d5d-8219-9eb5a1bc8f4c">|

|게임 페이지|게임 페이지|
|:--:|:--:|
|<img width="1510" alt="스크린샷 2024-03-06 오후 1 35 00" src="https://github.com/JJongsKim/tic-tac-toe/assets/81777778/82295df5-80ff-4810-8811-91ff03e27ac9">|<img width="1510" alt="스크린샷 2024-03-06 오후 1 35 18" src="https://github.com/JJongsKim/tic-tac-toe/assets/81777778/e087b369-2fb9-4c3a-9c26-06439b310589">|

|기록된 게임 조회 페이지|기록된 게임 조회 페이지|
|:--:|:--:|
|<img width="1510" alt="스크린샷 2024-03-06 오후 1 37 24" src="https://github.com/JJongsKim/tic-tac-toe/assets/81777778/fb56784e-7b7c-49b9-876e-1f882a843216">|<img width="1510" alt="스크린샷 2024-03-06 오후 1 37 44" src="https://github.com/JJongsKim/tic-tac-toe/assets/81777778/614b1a2a-0236-46a8-8853-0035f7b1ec5b">|

|시작-옵션|
|:--:|
|![start-option](https://github.com/JJongsKim/tic-tac-toe/assets/81777778/960cbed4-88f1-4abe-9717-c6965a25fa2d)|

|게임플레이-기록|
|:--:|
|![game-review](https://github.com/JJongsKim/tic-tac-toe/assets/81777778/47a749cc-8614-49e4-abc1-5bdebd85d5de)|
