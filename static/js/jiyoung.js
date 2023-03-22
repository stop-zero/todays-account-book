const Slider = new Swiper(".slider", {
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let data =
{
  '식비': [
    {
      link: 'https://blog.hanabank.com/1347',
      img: '/static/img/meal1.png',
    },
    {
      link: 'https://blog.naver.com/pnpoongnyun/222292922725',
      img: '/static/img/meal2.png',
    },
    {
      link: 'https://blog.naver.com/xo_90/221763628641',
      img: '/static/img/meal3.png',
    }
  ],
  '여행': [
    {
      link: 'https://blog.naver.com/luxury8805/221434054140',
      img: '/static/img/travel1.png',
    },
    {
      link: 'https://m.post.naver.com/viewer/postView.nhn?volumeNo=10085978&memberNo=34437697&vType=VERTICAL',
      img: '/static/img/travel2.png',
    },
    {
      link: 'https://blog.naver.com/kim453kr/222300735687',
      img: '/static/img/travel3.png',
    }
  ],
  '건강': [
    {
      link: 'https://mediahub.seoul.go.kr/archives/2004954',
      img: '/static/img/health1.png',
    },
    {
      link: 'https://www.hankookilbo.com/News/Read/A2023020116010004701?did=NA',
      img: '/static/img/health2.png',
    },
    {
      link: 'https://mediahub.seoul.go.kr/archives/2005466',
      img: '/static/img/health3.png',
    }
  ],
  '교통': [
    {
      link: 'https://blog.naver.com/mellongi123/222987565076?isInf=true',
      img: '/static/img/traffic1.png',
    },
    {
      link: 'https://blog.naver.com/kecoprumy/223021723748',
      img: '/static/img/traffic2.png',
    },
    {
      link: 'http://www.dailypop.kr/news/articleView.html?idxno=63823',
      img: '/static/img/traffic3.png',
    }
  ],
  '주거': [
    {
      link: 'https://blog.naver.com/goldentreeconsulting/222654984999',
      img: '/static/img/residence1.png',
    },
    {
      link: 'https://blog.naver.com/homediscovery/222371131987',
      img: '/static/img/residence2.png',
    },
    {
      link: 'http://www.sobilife.com/news/articleView.html?idxno=18895',
      img: '/static/img/residence3.png',
    }
  ],
  '통신': [
    {
      link: 'https://blog.ibk.co.kr/2775',
      img: '/static/img/phone1.png',
    },
    {
      link: 'https://www.banksalad.com/articles/비싼-핸드폰-요금-줄여주는-통신비-할인카드-5종',
      img: '/static/img/phone2.png',
    },
    {
      link: 'https://www.kakaobank.com/bank-story/206',
      img: '/static/img/phone3.png',
    }
  ],
  '카페': [
    {
      link: 'https://m.vingle.net/posts/950263',
      img: '/static/img/cafe1.png',
    },
    {
      link: 'https://072container.tistory.com/2',
      img: '/static/img/cafe2.png',
    },
    {
      link: 'https://ohou.se/advices/2617',
      img: '/static/img/cafe3.png',
    }
  ],
  '생활': [
    {
      link: 'https://www.thetip.kr/hacks4everyday/',
      img: '/static/img/life1.png',
    },
    {
      link: 'https://post.naver.com/viewer/postView.nhn?volumeNo=6760692&memberNo=29961208',
      img: '/static/img/life2.png',
    },
    {
      link: 'https://happysat.tistory.com/187',
      img: '/static/img/life3.png',
    }
  ],
  '금융': [
    {
      link: 'https://blog.naver.com/ubuntu55/220619327360',
      img: '/static/img/finance1.png',
    },
    {
      link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.blog.naver.com%2Fk_happyfund%2F2[…]e=images&cd=vfe&ved=0CBAQjRxqFwoTCLDvxN-E7P0CFQAAAAAdAAAAABAI',
      img: '/static/img/finance2.png',
    },
    {
      link: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.blog.naver.com%2Fwmftkah%2F222009[…]e=images&cd=vfe&ved=0CBAQjRxqFwoTCKi36vCE7P0CFQAAAAAdAAAAABAE',
      img: '/static/img/finance3.png',
    }
  ],
}