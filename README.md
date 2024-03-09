## ⏰ 코어 타임

휴일 제외 오후 3시 ~ 오후 6시

## 💬 코드 리뷰

팀 미팅 끝난 뒤 각자 최우선으로 실시

## ✍🏻 페이지 분배

- 강진호 / -> 각 페이지로 이동하는 버튼 추가
- 류지영 /list
- 심민보 /post/{id} && /post/{id}/edit
- 최희문 /post
- 황은애 /post/{id}/message

## 🎨 css 스타일

- module, scss
- Camel Case

## 💾 각 폴더 기능

1. apis : api
2. assets : image, css 파일
3. components : component
4. hooks : 커스텀 hook
5. pages : 각 page 별로 page 파일과 css파일
6. utils : 데이터처리 함수
7. contexts: context api와 관련된 전역 데이터 관리 함수

## 📢 공통사항

- 1rem = 10px
- 기본 폰트: Pretendard

## ✔ 커밋 메시지

### 💡 타입

- `feat` 새로운 기능에 대한 커밋
- `fix` 버그 수정에 대한 커밋
- `build` 빌드 관련 파일 수정 / 모듈 설치 또는 삭제에 대한 커밋
- `chore` 그 외 자잘한 수정에 대한 커밋
- `ci` ci 관련 설정 수정에 대한 커밋
- `docs` 문서 수정에 대한 커밋
- `style` 코드 스타일 혹은 포맷 등에 관한 커밋
- `refactor` 코드 리팩토링에 대한 커밋
- `test` 테스트 코드 수정에 대한 커밋
- `perf` 성능 개선에 대한 커밋

### ❗ 규칙

1. 제목과 본문을 빈 행으로 구분한다.
2. 제목은 50글자 이내로 제한한다.
3. 제목의 첫 글자는 대문자로 작성한다.
4. 제목 끝에는 마침표를 넣지 않는다.
5. 제목은 명령문으로 사용하며 과거형을 사용하지 않는다.
6. 본문의 각 행은 72글자 내로 제한한다.
7. 어떻게 보다는 무엇과 왜를 설명한다.

### 작성 예시

git commit -m "fix: Safari에서 모달을 띄웠을 때 스크롤 이슈 수정

모바일 사파리에서 Carousel 모달을 띄웠을 때,
모달 밖의 상하 스크롤이 움직이는 이슈 수정.

resolves: #1137

## 🏝 브랜치

### Flow

각 브랜치 -> feature -> develop -> master

### 브랜치 이름

- feature-(기능 이름)
- 기능 이름: 영어 / 첫 글자 대문자 ex) feature-Modal

### 브랜치 기능

master: Stable한 배포 가능 코드
develop: 개발 버전
feature: 개발중인 기능

## 🔥 코드 컨벤션

### 파일 확장자

- jsx 문법 쓰는 컴포넌트 확장자: ~.jsx
- jsx 문법 사용하지 않는 js 파일: ~.js
- 스타일시트: ~module.scss

### 각종 이름

- 컴포넌트O: Pascal Case
- 컴포넌트X: Camel Case
- 이벤트 Props: on(이벤트) ex) onHover
- 이벤트 제어 함수: handle(함수 이름) ex) handleButtonClick
- 변수 복수형: (단수 이름)List ex) (단수)card -> (복수)cardList

### 비동기 함수

- await async 사용
- 네트워크 요청 라이브러리: axios
- fetch 사용X

## 📸 이미지

### 확장자

- ~.svg 권장
- svg 안 될 경우 피그마에서 3배 크기로 export한 ~.png

### 파일 이름

- Camel Case
- (이름)(타입).(확장자) ex)closeIcon.svg

### Import 이름

- Pascal Case
- 파일 이름: closeIcon.svg -> import CloseIcon from 'assets/images/closeIcon.svg';

## 🚧 Issue/Project 관리

### Flow

1. 작업 시작 전 개발할 기능 Issue 작성 - 명세, 기능, 사용법 등
2. Project에 해당 이슈 추가

- Backlog: 할 일 목록
- In progress: 하고 있는 중
- In review: PR 코드 리뷰
- Done: 완성된 것

3. 작업 시작
4. 작업 단계마다 Project에서 Issue 이동

## 🌍 배포

- 배포 서비스: Vercel
- 개발 중일 때는 develop 배포
- 배포 가능 단계가 되면 master 배포

## PR 템플릿

## Issue 템플릿
