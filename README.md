# KDT 코딩온 풀스택 웹개발 부트캠프 6기   
# 프론트엔드 프로젝트 'todays-account-book'   
---

## '힘내조'의 프론트엔드 프로젝트   
조장 : 강민혁    
조원 : 이효리, 정세희, 정지영   

## 사용 기술   
1. html   
2. css   
3. javascript   
4. node.js   
5. jQuery   
6. express
7. animate (애니메이션 라이브러리)   
8. sweetalert2 (모달 라이브러리)   
9. swiper (슬라이드 라이브러리)

## 개요   
주제 : 1인 생활 가구를 위한 가계부    
구성   
  1. 튜토리얼 : 사용자의 연령대와 소비패턴을 파악하고 맞춤형 정보 제공을 위해 태그를 부여     
  2. 가계부 : 해당 날별로 소득과 지출내역을 기록할 수 있게 함.    
  3. 맞춤형 생활 정보 제공 : 앞서 부여했던 태그를 바탕으로 생활에 도움이 되는 정보 제공   
  

  
 모든 페이지는 반응형으로 제작하였다. 

---
## 구성   

### 튜토리얼   
* 본 서비스를 이용한 적이 있는지 물어보고
  +있다면 바로 가계부를 작성하는 페이지로 이동하고 
  +없다면 사용자의 정보를 간단히 수집한다. 
  +사용자의 연령, 가장 많이 소비하는 분야, 한달 소비금액을 조사하고 설문 응답에 기반해서 소비 유형을 분류해서 태그를 부여한다.   
  +(향후 태그는 맞춤형 생활 정보를 제공하기 위해 활용된다.)


### 가계부   
* 헤더   
  + 직접 디자인한 귀여운 로고   
  + 토글버튼으로 주간모드와 아간모드 설정가능   
  + 토글버튼으로 가계부 부분과 맞춤형 생활 정보 부분을 편리하게 이동가능. 
  
* 가계부   
  + 달력, 매일에 대한 수익/지출 리스트, 수익/지출 입력창으로 구성된다.     
  + 달력의 날짜를 선택하고 수익/지출 정보를 입력하면 리스트에 정보가 표시된다.  
  + 입력 창은 입금/지출을 선택하고 해당하는 카테고리(ex)입금-월급, 지출-식비), 금액, 내역을 입력한다.   
 
 ### 맞춤형 생활 정보
 * 앞서 튜토리얼에서 산출된 태그를 바탕으로 그에 맞는 생활정보를 추천한다. 
 * swiper 라이브러리를 적용하여 편리하게 게시글을 둘러볼 수 있다. 

---
 
 ## 역할분담
+ 기능별로 역할을 분담 하였다. 
+ 강민혁 : 튜토리얼
+ 정지영 : 맞춤형 생활 정보
+ 이효리 : 캘린더와 리스트 부분
+ 정세희 : 지출/수입 정보 입력 부분
    

