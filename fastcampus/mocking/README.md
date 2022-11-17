## ✏️모킹(Mocking)이란?
모의 데이터(Mock)을 만들어서 활용하는 방식이다.

## 🤔모킹을 해야하는 이유
- 프론트엔드 개발을 할 때 백엔드 개발에 의존하게 되면 비효율적인 개발 과정을 거치게 된다.
- 예를 들어 API가 개발되기 전까지 프론트엔드 개발을 진행하지 못하는 경우가 발생할 수 있다.

## 🔔모킹 라이브러리 - MSW.js
> MSW(Mock Service Worker)
> API Mocking 라이브러리로 서버의 네트워크 요청을 가로채서 모의 응답을 보내준다.
- MSW는 Service Worker API로 HTTP 요청을 가로채서 응답을 보내준다.
- Service Worker란 웹 응용 프로그램, 브라우저, 그리고 네트워크 사이의 프록시 서버 역할을 한다.
- 푸시 알림과 백그라운드 동기화에 주로 사용된다.
- REST API와 GrapQL을 지원한다.

## ⚙️ MSW 동작 원리
![image](https://user-images.githubusercontent.com/51310674/202366658-1b66e659-5f2d-4d26-9d4e-0d662e0e6d60.png)
- 브라우저에서 요청을 보내면 Service Worker가 이를 가로챈다.
- Service Worker에서는 해당하는 요청을 복제해서 MSW에 전달하고, MSW는 요청과 일치하는 응답을 생성하여 모의 응답을 Service Worker에 전달한다.
- Service Worker는 모의 응답을 브라우저에게 전달한다.

## 🔗 Reference
- [Mocking이란](https://tech.kakao.com/2021/09/29/mocking-fe/)
- [Service Worker API](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API)
