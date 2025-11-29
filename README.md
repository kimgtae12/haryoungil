# 프로젝트 이름

블루세일 - 법인 영업

## 프로젝트 소개

이 프로젝트는 React와 TypeScript를 기반으로 개발되었으며, 내부 상태 관리를 위해 **Zustand**와 **React Query**를 사용합니다. 결제 기능은 **TossPayments SDK**를 통해 구현되었으며, 스타일링은 **Styled-Components**를 사용하였습니다

디자인 패턴은 **Atomic Design Pattern**을 채택하여 컴포넌트를 효율적으로 분리하고 관리합니다.

## 기술 스택

### 주요 기술

- **React**: 사용자 인터페이스 개발
- **TypeScript**: 정적 타입 체킹 및 유지 보수성 향상
- **Zustand**: 경량 상태 관리 라이브러리
- **React Query**: 서버 상태 관리 및 비동기 데이터 관리
- **TossPayments SDK**: 결제 모듈 적용
- **Styled-Components**: 컴포넌트 기반 스타일링

### 디자인 패턴

- **Atomic Design Pattern**: UI 컴포넌트를 원자적 단위로 분리하여 재사용성 및 확장성을 극대화

## 프로젝트 구조

```plaintext
src/
├── api/                 # API 호출 관련 로직
├── assets/              # 이미지, 폰트 등 정적 파일
├── components/          # 아토믹 디자인 기반 컴포넌트
│   ├── atoms/           # 가장 작은 단위의 컴포넌트
│   ├── molecules/       # 원자들을 조합한 컴포넌트
│   ├── organisms/       # 복합적인 UI 구성 요소
│   ├── templates/       # 페이지 레이아웃 템플릿
├── pages/               # 화면 단위 컴포넌트
├── hooks/               # 커스텀 훅 모음
├── router/              # 라우팅 관련 설정
├── store/               # Zustand 상태 관리 스토어
├── theme/               # 스타일링 테마 설정
├── utils/               # 유틸리티 함수
└── App.tsx              # 앱 진입점
```

## 설치 및 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/blue-kyoungtae/ichis-bluesales.git
cd ichis-bluesales
```

### 2. 패키지 설치

```bash
yarn install
```

### 3. 개발 서버 실행

```bash
yarn start
```

### 4. 빌드

```bash
#dev build
yarn dev-build
yarn awsbuild-dev

#product build
yarn prod-build
yarn awsbuild-prod
```

## 주요 기능

1. **상태 관리**: Zustand를 활용한 로컬 상태 관리 및 React Query로 서버 상태 관리
2. **결제 기능**: TossPayments SDK를 활용한 결제 모듈 구현
3. **디자인 시스템**: Atomic Design Pattern을 기반으로 한 컴포넌트 구조화
4. **스타일링**: Styled-Components를 이용한 모듈화된 스타일 관리

## 환경 변수 설정

프로젝트의 루트 경로에 `.env` 파일을 생성하고 아래와 같은 변수들을 설정합니다:

```plaintext
# .env.develop & .env.production
REACT_APP_API_BASE_URL=[백엔드 API 기본 URL]
REACT_APP_TOSS_PAYMENTS_KEY=[TossPayments 결제 키]

REACT_APP_BASE_URL=[API URI]
REACT_APP_CLIENT_ID=[not used]
REACT_APP_CLIENT_SECRETE=[not used]
REACT_APP_ENV=development

REACT_APP_BLUETAX_URI=[dev bluetax api 주소]
REACT_APP_FILE_SERVER=[aws s3 bucket 주소]
REACT_APP_BLUTBUTTON_CLIENTID=[블루버튼 클라이언트 id]
REACT_APP_BLUTBUTTON_SECRET=[블루버튼 시크릿키 id]

REACT_APP_KAKAO_APP_KEY=[카카오 앱키]
REACT_APP_KAKAO_REDIRECT_URL=[카카오 로그인 redirect uri (도메인만 작성)]
REACT_APP_NAVER_APP_KEY=[네이버 앱키 - 사용 x]

REACT_APP_NICE_CLIENT_ID=[나이스 api 클라이언트 id]
REACT_APP_NICE_CLIENT_SECRET=[나이스 api 시크릿키 id]

REACT_APP_TOSS_CLIENT_KEY=[토스 페이먼츠 빌링 클라이언트 key]
REACT_APP_TOSS_SECRET_KEY=[토스 페이먼츠 빌링 시크릿 key]

GENERATE_SOURCEMAP=[develop - true, production - false]

```

## 의존성 버전

- **React**: ^18.3.1
- **Zustand**: ^4.5.2
- **React Query**: ^5.48.0
- **Styled-Components**: ^5.1.34
- **TossPayments SDK**: 최신 버전

## 코드 컨벤션

- 코드 스타일은 **ESLint**와 **Prettier**를 사용하여 관리합니다.
- 커밋 메시지는 #을 접두사로 두고, jira 티켓 코드를 기입후, 수정사항을 입력합니다.

## 기여 방법

1. 레포지토리를 포크합니다.
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/새로운-기능`).
3. 변경 사항을 커밋합니다 (`git commit -m "feat: 새로운 기능 추가"`).
4. 브랜치를 푸시합니다 (`git push origin feature/새로운-기능`).
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.

---

프로젝트에 대한 질문이나 문의사항은 [이메일 또는 이슈 페이지]를 통해 연락해주세요.
