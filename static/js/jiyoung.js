const Slider = new Swiper(".slider", {
  // 슬라이드 효과
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
 
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
  },
  /* pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});

// url 파라미터 갖고오기
const urlParams = new URLSearchParams(location.search);
let category = urlParams.get("category");

let data01 = {
  meals: [
    {
      link: "https://blog.hanabank.com/1347",
      img: "/static/img/meal1.png",
      text: "식비 절약 노하우",
    },
    {
      link: "https://blog.naver.com/pnpoongnyun/222292922725",
      img: "/static/img/meal2.png",
      text: "식비 줄이기 5가지",
    },
    {
      link: "https://blog.naver.com/xo_90/221763628641",
      img: "/static/img/meal3.png",
      text: "식비 절약!, 포인트 사용 ",
    },
    {
      tag: "#식비",
      tag_title: "1인 가구 식비 꿀팁",
    },
  ],
  travel: [
    {
      link: "https://blog.naver.com/luxury8805/221434054140",
      img: "/static/img/travel1.png",
      text: "해외여행 꿀팁 ",
    },
    {
      link: "https://m.post.naver.com/viewer/postView.nhn?volumeNo=10085978&memberNo=34437697&vType=VERTICAL",
      img: "/static/img/travel2.png",
      text: "제주도 여행 꿀팁 ",
    },
    {
      link: "https://blog.naver.com/kim453kr/222300735687",
      img: "/static/img/travel3.png",
      text: "캠핑여행 꿀팁",
    },
    {
      tag: "#여행",
      tag_title: "1인 가구 여행 꿀팁",
    },
  ],
  health: [
    {
      link: "https://mediahub.seoul.go.kr/archives/2004954",
      img: "/static/img/health1.png",
      text: "병원 안심 동행 서비스",
    },
    {
      link: "https://www.hankookilbo.com/News/Read/A2023020116010004701?did=NA",
      img: "/static/img/health2.png",
      text: "서울시 청년 마음 건강 지원",
    },
    {
      link: "https://mediahub.seoul.go.kr/archives/2005466",
      img: "/static/img/health3.png",
      text: "1인 가구 돌봄 시스템",
    },
    {
      tag: "#건강",
      tag_title: "1인 가구 건강 꿀팁",
    },
  ],
  traffic: [
    {
      link: "https://blog.naver.com/mellongi123/222987565076?isInf=true",
      img: "/static/img/traffic1.png",
      text: "청년 교통비 지원 폐지",
    },
    {
      link: "https://blog.naver.com/kecoprumy/223021723748",
      img: "/static/img/traffic2.png",
      text: "전기차 보조금 지원",
    },
    {
      link: "http://www.dailypop.kr/news/articleView.html?idxno=63823",
      img: "/static/img/traffic3.png",
      text: "1인 가구 교통비 해결",
    },
    {
      tag: "#교통",
      tag_title: "1인 가구 교통 꿀팁",
    },
  ],
  residence: [
    {
      link: "https://blog.naver.com/goldentreeconsulting/222654984999",
      img: "/static/img/residence1.png",
      text: "가성비 값 주거지",
    },
    {
      link: "https://blog.naver.com/homediscovery/222371131987",
      img: "/static/img/residence2.png",
      text: "여성 주거안전 및 보안",
    },
    {
      link: "http://www.sobilife.com/news/articleView.html?idxno=18895",
      img: "/static/img/residence3.png",
      text: "1인 가구 어플 추천",
    },
    {
      tag: "#주거",
      tag_title: "1인 가구 주거 꿀팁",
    },
  ],
  phone: [
    {
      link: "https://blog.ibk.co.kr/2775",
      img: "/static/img/phone1.png",
      text: "통신비 절약",
    },
    {
      link: "https://www.banksalad.com/articles/비싼-핸드폰-요금-줄여주는-통신비-할인카드-5종",
      img: "/static/img/phone2.png",
      text: "통신요금 할인 카드",
    },
    {
      link: "https://www.kakaobank.com/bank-story/206",
      img: "/static/img/phone3.png",
      text: "알뜰폰으로 절약!",
    },
    {
      tag: "#통신",
      tag_title: "1인 가구 통신 꿀팁",
    },
  ],
  cafe: [
    {
      link: "https://m.vingle.net/posts/950263",
      img: "/static/img/cafe1.png",
      text: "맛있는 커피집 찾기",
    },
    {
      link: "https://072container.tistory.com/2",
      img: "/static/img/cafe2.png",
      text: "카페 투어 다니는 법",
    },
    {
      link: "https://ohou.se/advices/2617",
      img: "/static/img/cafe3.png",
      text: "홈카페 스타일링",
    },
    {
      tag: "#카페",
      tag_title: "1인 가구 카페 꿀팁",
    },
  ],
  life: [
    {
      link: "https://www.thetip.kr/hacks4everyday/",
      img: "/static/img/life1.png",
      text: "일생 팁 8가지",
    },
    {
      link: "https://post.naver.com/viewer/postView.nhn?volumeNo=6760692&memberNo=29961208",
      img: "/static/img/life2.png",
      text: "자취생활 꿀팁",
    },
    {
      link: "https://happysat.tistory.com/187",
      img: "/static/img/life3.png",
      text: "혼자살 때 ",
    },
    {
      tag: "#생활",
      tag_title: "1인 가구 생활 꿀팁",
    },
  ],
  finance: [
    {
      link: "https://blog.naver.com/ubuntu55/220619327360",
      img: "/static/img/finance1.png",
      text: " 설, 명절 금융 꿀팁",
    },
    {
      link: "https://m.blog.naver.com/blogfsc/222662622023",
      img: "/static/img/finance2.png",
      text: "금융사이트 8선",
    },
    {
      link: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.blog.naver.com%2Fwmftkah%2F222009[…]e=images&cd=vfe&ved=0CBAQjRxqFwoTCKi36vCE7P0CFQAAAAAdAAAAABAE",
      img: "/static/img/finance3.png",
      text: "연말정산 절세 팁",
    },
    {
      tag: "#금융",
      tag_title: "1인 가구 금융 꿀팁",
    },
  ],
};

const site = document.querySelectorAll(".site");
const photo = document.querySelectorAll(".photo");
const text = document.querySelectorAll(".hover-text");

const tag = document.querySelector(".tag");
const tag_title = document.querySelector(".tag_title");

if (category == "교통") {
  tag_title.innerHTML = data01.traffic[3].tag_title;
  tag.innerHTML = data01.traffic[3].tag;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.traffic[i].link);
    photo[i].setAttribute("src", data01.traffic[i].img);
    text[i].innerHTML = data01.traffic[i].text;
  }
} else if (category == "식비") {
  tag.innerHTML = data01.meals[3].tag;
  tag_title.innerHTML = data01.meals[3].tag_title;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.meals[i].link);
    photo[i].setAttribute("src", data01.meals[i].img);
    text[i].innerHTML = data01.meals[i].text;
  }
} else if (category == "여행") {
  tag.innerHTML = data01.travel[3].tag;
  tag_title.innerHTML = data01.travel[3].tag_title;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.travel[i].link);
    photo[i].setAttribute("src", data01.travel[i].img);
    text[i].innerHTML = data01.travel[i].text;
  }
} else if (category == "건강") {
  tag.innerHTML = data01.health[3].tag;
  tag_title.innerHTML = data01.health[3].tag_title;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.health[i].link);
    photo[i].setAttribute("src", data01.health[i].img);
    text[i].innerHTML = data01.health[i].text;
  }
} else if (category == "주거") {
  tag.innerHTML = data01.residence[3].tag;
  tag_title.innerHTML = data01.residence[3].tag_title;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.residence[i].link);
    photo[i].setAttribute("src", data01.residence[i].img);
    text[i].innerHTML = data01.residence[i].text;
  }
} else if (category == "통신") {
  tag.innerHTML = data01.phone[3].tag;
  tag_title.innerHTML = data01.phone[3].tag_title;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.phone[i].link);
    photo[i].setAttribute("src", data01.phone[i].img);
    text[i].innerHTML = data01.phone[i].text;
  }
} else if (category == "카페") {
  tag.innerHTML = data01.cafe[3].tag;
  tag_title.innerHTML = data01.cafe[3].tag_title;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.cafe[i].link);
    photo[i].setAttribute("src", data01.cafe[i].img);
    text[i].innerHTML = data01.cafe[i].text;
  }
} else if (category == "생활") {
  tag.innerHTML = data01.life[3].tag;
  tag_title.innerHTML = data01.life[3].tag_title;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.life[i].link);
    photo[i].setAttribute("src", data01.life[i].img);
    text[i].innerHTML = data01.life[i].text;
  }
} else if (category == "금융") {
  tag.innerHTML = data01.finance[3].tag;
  tag_title.innerHTML = data01.finance[3].tag_title;
  for (let i = 0; i < 3; i++) {
    site[i].setAttribute("href", data01.finance[i].link);
    photo[i].setAttribute("src", data01.finance[i].img);
    text[i].innerHTML = data01.finance[i].text;
  }
}
