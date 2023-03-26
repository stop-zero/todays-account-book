# 포스코X코딩온 풀스택 웹개발 부트캠프 6기
HTML & CSS & JS + node.js expree 서버 사용까지 수업 후 일주일간 개발한 프로젝트


## 🪙todays-account-book 프로젝트 소개
1인 가구를 위한 가계부  
 
 
## ⏰ 개발 기간
2023/03/18 ~ 2023/03/24


## 🧑‍🤝‍🧑멤버 구성
+ 팀장 : 강민혁 - Express Server, Survey-Page, 반응형 페이지, Main-Footer
+ 팀원 : 이효리 - Main-Page(calendar, list, Dark&Light Mode)
+ 팀원 : 정세희 - Main-Page(입출금 입력), Icon 디자인
+ 팀원 : 정지영 - Start-Page, Main-Page(태그 꿀팁 슬라이드, 사용 설명서), 디자인


## ⚙️ 개발 환경
+ Express - Web Server
+ Animate.css - animation Library
+ Swiper - JS Library (Slide 구현)
+ SweetAlert2 - JS Library (정보 확인창 & 사용 설명서)
+ jQuery - JS Library



# 📌 기능 기술
 - ### **강민혁**
   - 튜토리얼
   - queryString : url로 설문조사에서 받은 정보 다음 페이지에서도 사용
   -  설문조사 평균값 구글 정보

 - ### **이효리**
   - 캘린더와 리스트 부분
   - 세부적 디자인(다크모드) 전 데이터
   - jquery (click, html(): innerHTML

 - ### **정세희**
   - 지출/수입 정보 입력 부분
   - if문으로 display: none에서 날짜를 클릭하면 입금과 지출이 display flex로 나타나짐.
  
 - ### **정지영**
   - start page 
      - animate.style 
      - transform: rotate(), skew() 사용
   - main 사용 설명서 
      - sweetalert2, 
      - 사용자의 여러 가지 경우 생각 -> then if문 반복
   - 맞춤형 생활 정보 
      - 슬라이드 안에 들어갈 tag 에 맞는 정보(사이트, 이미지, 텍스트) = data01
      - queryString 으로 받아온 값 == tag chategory > data01의 값을 setAtrribute & innerHTML 으로 슬라이드 안으로 값을 넣음
       
      
   

