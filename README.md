# 🔬🏠💸🐁
<p align="center"><img src="https://i.imgur.com/g5lYddB.png"></p>

안녕하세요. 옵슬라 연구실 홈페이지 리포지토리입니다.

어딘가 구려보이는 부분이 있다거나, 이렇게 개선하면 더 좋겠다 하는 부분이 있으시면

언제든지 [✋ 이슈 ✋](https://github.com/Gumball12/oopsla-static-webpage/issues) 남겨주세요. 감사합니다.

* [이전 홈페이지 링크](http://oopsla.sch.ac.kr/main.jsp)
* [새 홈페이지 프로토타입 링크](https://tinyurl.com/vzry57t)

## 메뉴 구성
### 이전 메뉴 구성 및 문제점
![https://i.imgur.com/F55pZpo.png](https://i.imgur.com/F55pZpo.png)

* 접근 불가능한 페이지 다수 존재
* Dynamic Web Page 기반으로 동작하기에, 항상 해킹 유의해야 함 + 서버 관리 필요
* PC 중심으로 디자인되어, 모바일과 같은 기기에서는 적절하지 못하게 화면이 나타남
* 구린 디자인

### 새로운 메뉴 구성 및 개선방안
![https://i.imgur.com/2nADcQJ.png](https://i.imgur.com/2nADcQJ.png)

* 최대한 간결하게 메뉴 구성
* Static Web Page 기반으로 동작하기에, 웹 자체는 해킹으로부터 안전함 + 서버 관리 불필요
    * 강의자료, 공지사항과 같은 게시물은  환경설정 파일을 통해
    * 최소한의 범위에 대해서만 조작이 가능하도록 구현
    * 관리 불필요하여 제로데이 취약점 등에 대해 _그나마 안전_
* 모든 해상도 대응 (TV + PC + 태블릿 + 모바일)
* 교수님이 만족하고, 학생이 만족할 수 있는 _구리지 않은 + 인터렉티브한_ UI 디자인

### 교수님 요구 기능
* 연구실 소개 edit
  * 교수님 및 연구원
  * 연구분야

* 공지사항 게시 / 수정
  * 다수의 아이템 존재

* 연구실 뉴스 게시 / 수정
  * 다수의 아이템 존재

* 강의자료 게시 / 수정
  * 다수의 아이템 존재
  * =&gt; 내용 자체는 기존에 교수님이 이용하시는 html 파일 그대로 이용해도 되지 않겠는가?
  * 아니면 뭐 이것도 인터페이스 정해서 동적으로 뽑아지도록 해도 될 것이고

* 기존의 웹과는 큰 차이가 없도록

### 궁금한 것
* 교수님은 이전에 어떻게 html 파일에 접근하여 업데이트하였는가?
  * 아무래도 ftp 통해 직접 밀어넣는 것 같은데
  * 이러한 경우 그냥 ftp 이용해서 직접 conf 수정하도록 하면 되겠다
  * 따로 인터페이스 만들 필요 없이말이지

* 로고는 어떻게? 들고가는지 아니면 그냥 deprecate 하는지?

## 참고 컨셉 디자인 목록 ([behance](https://www.behance.net/))
* [JoongAng Group brand website](https://www.behance.net/gallery/86662029/JoongAng-Group-brand-website)
* [curated by.](https://www.behance.net/gallery/86011477/curated-by)
* [crowdfunding.de](https://www.behance.net/gallery/88413127/crowdfundingde)
