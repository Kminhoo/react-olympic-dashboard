# 🏅 Olympic Medal DashBoard Project

올림픽 메달 집계 및 관리 대시보드. 국가별 메달 현황을 확인하고 수정 및 업데이트할 수 있는 React 애플리케이션입니다.

## 📑 프로젝트 소개

Olympic Medal DashBoard Project는 국가별 올림픽 메달 현황을 관리할 수 있는 웹 애플리케이션입니다. 사용자는 국가별 금, 은, 동메달의 개수를 입력하고 수정 및 삭제할 수 있으며, 여러 방법에 따라 정렬할 수 있습니다.

## 📌 기능

- 국가별 메달 개수 입력 및 관리

  - create : 추가할 국가의 메달 개수 등록
  - read : 등록된 국가들의 메달 개수 확인
  - update : 기존 국가의 메달 개수 수정
  - delete : 등록된 국가들의 정보 삭제

- 정렬

  - 금메달 순 기준으로 정렬
  - 총 메달 수 기준으로 정렬

- 데이터 유효성 검사

  - 중복되는 국가 등록 방지
  - 등록되지 않은 국가 수정 시 알림
  - 국가 명, 메달 개수 입력 제한

- 로컬 스토리지를 활용한 데이터 저장

  - 페이지 새로고침이 있어도 데이터 유지

## 컴포넌트 구조

```
src/
├── App.jsx               # 메인 애플리케이션 컴포넌트
├── components/
│   ├── MedalForm.jsx     # 메달 정보 입력 폼
│   ├── Table.jsx         # 메달 현황 테이블 컴포넌트
│   ├── Button.jsx        # 추가, 수정, 삭제 버튼 컴포넌트
│   ├── InputField.jsx    # 정보 입력 인풋 컴포넌트
│   └── TableRow.jsx      # 개별 국가 메달 정보 컴포넌트
└── styles/
    └── App.css           # 스타일시트
```

## 🔨 기술 스택

- React + vite
- JavaScript
- Css

## 설치 및 실행

```
# 프로젝트 클론
git clone https://github.com/Kminhoo/react-olympic-dashboard.git

# 의존성 설치
yarn, yarn install

# 개발 서버 실행
yarn dev
```
