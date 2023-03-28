console.log("연결");

let btn = document.querySelectorAll(".btn");
console.log(btn);
let breakdown1 = document.querySelector(".breakdown1");

let credit = document.querySelector(".btn-pay1");
let expense = document.querySelector(".btn-pay2");

let enter = document.querySelectorAll(".enter");

let aa = () => {
  //입금
  let breakdown1 = document.querySelector(".breakdown1");
  let btn = document.querySelector(".btn-pay1");
  let btn2 = document.querySelector(".btn-pay2");
  let credit = document.querySelector(".credit");
  let expense = document.querySelector(".expense");

  if ($(".credit").css("display") == "none") {
    credit.style.display = "block";
    expense.style.display = "none";
    btn.style.display = "none";
    btn2.style.display = "none";
    breakdown1.style.display = "flex";
  } else if ($(".credit").css("display") == "block") {
    credit.style.display = "none";
    expense.style.display = "none";
  }
};

let bb = () => {
  //지출
  let breakdown2 = document.querySelector(".breakdown2");
  let btn = document.querySelector(".btn-pay1");
  let btn2 = document.querySelector(".btn-pay2");
  let credit = document.querySelector(".credit");
  let expense = document.querySelector(".expense");
  if ($(".credit").css("display") == "none") {
    credit.style.display = "none";
    expense.style.display = "block";
    btn.style.display = "none";
    btn2.style.display = "none";
    breakdown2.style.display = "flex";
  } else if ($(".credit").css("display") == "block") {
    credit.style.display = "none";
    expense.style.display = "none";
  }
};

function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
}

console.log(
  "---------------------------------------------------------------------------------------------------------------------"
);

/*
      달력 렌더링 할 때 필요한 정보 목록 
  
      현재 월(초기값 : 현재 시간)
      금월 마지막일 날짜와 요일
      전월 마지막일 날짜와 요일
  */

calendarInit();

function calendarInit() {
  // 날짜 정보 가져오기
  let date = new Date(); // 현재 날짜(로컬 기준) 가져오기
  let utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000; // uct 표준시 도출
  let kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
  let today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)

  let thisMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  // 달력에서 표기하는 날짜 객체

  let currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
  let currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
  let currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

  // kst 기준 현재시간

  // 캘린더 렌더링
  renderCalender(thisMonth);

  function renderCalender(thisMonth, transition) {
    console.log(transition);

    let month = document.querySelector(".year-month");
    let wrap = document.querySelector(".cal_wrap");

    if (month.classList.contains("animate__backInRight")) {
      month.classList.remove("animate__backInRight");
    }
    if (month.classList.contains("animate__backInLeft")) {
      month.classList.remove("animate__backInLeft");
    }
    if (wrap.classList.contains("animate__backInRight")) {
      wrap.classList.remove("animate__backInRight");
    }
    if (wrap.classList.contains("animate__backInLeft")) {
      wrap.classList.remove("animate__backInLeft");
    }

    // 렌더링을 위한 데이터 정리
    currentYear = thisMonth.getFullYear();
    currentMonth = thisMonth.getMonth();
    currentDate = thisMonth.getDate();

    // 이전 달의 마지막 날 날짜와 요일 구하기
    // 월은 0~11로 나타냄.
    // 일은 1~31로 나타냄. 날짜를 0으로 적으면 전 달 마지막 날 의미.

    let startDay = new Date(currentYear, currentMonth, 0);
    let prevDate = startDay.getDate();
    let prevDay = startDay.getDay();

    // 이번 달의 마지막날 날짜와 요일 구하기
    let endDay = new Date(currentYear, currentMonth + 1, 0);
    let nextDate = endDay.getDate();
    let nextDay = endDay.getDay();

    // 현재 월 표기
    month.innerText = currentYear + "." + (currentMonth + 1);

    // 렌더링 html 요소 생성
    calendar = document.querySelector(".dates");
    calendar.innerHTML = "";

    // 지난달
    for (let i = prevDate - prevDay + 1; i <= prevDate; i++) {
      calendar.innerHTML =
        calendar.innerHTML + '<div class="day prev disable">' + i + "</div>";
    }
    // 이번달
    for (let i = 1; i <= nextDate; i++) {
      calendar.innerHTML =
        calendar.innerHTML + '<div class="day current">' + i + "</div>";
    }
    // 다음달
    for (let i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
      calendar.innerHTML =
        calendar.innerHTML + '<div class="day next disable">' + i + "</div>";
    }

    // 오늘 날짜 표기
    if (today.getMonth() == currentMonth) {
      todayDate = today.getDate();
      let currentMonthDate = document.querySelectorAll(".dates .current");
      currentMonthDate[todayDate - 1].classList.add("today");
    }

    let direction;
    if (transition === "right") {
      direction = "animate__backInLeft";
    } else if (transition === "left") {
      direction = "animate__backInRight";
    }

    month.classList.add(direction);
    wrap.classList.add(direction);

    dateClick();
  }

  // 이전달로 이동
  let prev = document.querySelector(".go-prev");
  prev.addEventListener("click", function () {
    thisMonth = new Date(currentYear, currentMonth - 1, 1);
    renderCalender(thisMonth, "right");
  });

  // 다음달로 이동
  let next = document.querySelector(".go-next");
  next.addEventListener("click", function () {
    thisMonth = new Date(currentYear, currentMonth + 1, 1);
    renderCalender(thisMonth, "left");
  });
}

let data = {};
let d;

// 클릭한 날의 색깔을 바꾸고 정보를 가져오기
function dateClick() {
  $(".current").click(function () {
    console.log(`${this.innerText}일을 선택하셨습니다.`);
    $(".clicked").removeClass("clicked");

    this.classList.add("clicked");

    $(".btn").css("display", "flex");

    $(".enter").css("display", "flex");

    $(".credit").css("display", "none");
    $(".expense").css("display", "none");

    //세희 수정 --------------------------------------
    let cc = () => {
      let btn5 = document.querySelectorAll(".btn");
      btn5.style.display = "none";
      let breakdown1 = $(".breakdown1");
      let breakdown2 = $(".breakdown2");
      breakdown1.css("display", "flex");
      breakdown2.css("display", "flex");
    };

    let img1 = document.querySelector(".backimg1");
    img1.addEventListener("click", () => {
      let expense3 = $(".expense");
      let credit3 = $(".credit");
      let btn10 = $(".btn");
      expense3.css("display", "none");
      credit3.css("display", "none");
      btn10.css("display", "block");
    });

    let img2 = document.querySelector(".backimg2");
    img2.addEventListener("click", () => {
      let expense3 = $(".expense");
      let credit3 = $(".credit");
      let btn10 = $(".btn");
      expense3.css("display", "none");
      credit3.css("display", "none");
      btn10.css("display", "block");
    });

    let tmp = document.querySelector(".year-month");
    tmp = tmp.innerText;
    tmp = tmp.split(".");
    let year_tmp = tmp[0].slice(2, 4);

    let month_tmp = tmp[1];
    if (month_tmp.length === 1) {
      month_tmp = "0" + month_tmp;
    }

    let date_tmp = this.innerText;

    if (date_tmp.length === 1) {
      date_tmp = "0" + date_tmp;
    }
    d = year_tmp + month_tmp + date_tmp;
    console.log(d);

    renderList(d, false);
  });
}
let kind_tmp, category_tmp;

$(".btn").click(function () {
  let tmp = $(this).text();
  tmp = tmp.trim();
  kind_tmp = tmp;
});

$(".cd").click(function () {
  category_tmp = $(this).text();
  let cds = document.querySelectorAll(".cd");
  for (let i of cds) {
    gi;
    if (i.classList.contains("clickedCategory")) {
      i.classList.remove("clickedCategory");
    }
  }
  this.classList.add("clickedCategory");
});

$(".ep").click(function () {
  category_tmp = $(this).text();

  let eps = document.querySelectorAll(".ep");
  for (let i of eps) {
    if (i.classList.contains("clickedCategory")) {
      i.classList.remove("clickedCategory");
    }
  }
  this.classList.add("clickedCategory");
});

$(".backimg").click(function () {
  name1 = document.querySelector("#name1");
  name2 = document.querySelector("#name2");

  let money1 = document.querySelector("#money1");
  let money2 = document.querySelector("#money2");

  name1.value = null;
  name2.value = null;
  money1.value = null;
  money2.value = null;
});

$(".enter").click(function () {
  name1 = document.querySelector("#name1");
  name2 = document.querySelector("#name2");

  let money1 = document.querySelector("#money1");
  let money2 = document.querySelector("#money2");
  let name_tmp, price_tmp;

  if (name1.value.length >= 1) {
    name_tmp = name1.value;
  } else {
    name_tmp = name2.value;
  }

  if (money1.value.length >= 1) {
    price_tmp = money1.value;
  } else {
    price_tmp = money2.value;
  }

  // 값이 모두 입력됐을때만 모달 창 뜨게 하기
  if (
    category_tmp === undefined ||
    name_tmp.length < 1 ||
    price_tmp.length < 1
  ) {
    // 아무 일도 안 일어남.
  } else {
    Swal.fire({
      title: `분류 : ${kind_tmp} <br/> 카테고리 : ${category_tmp} <br/> 이름 : ${name_tmp} <br> 가격: ${price_tmp}`,
      text: "입력하신 정보가 맞으신가요?",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6fb1b4",
      cancelButtonColor: "#999",
      confirmButtonText: "네!",
      cancelButtonText: "아니요",
    }).then((result) => {
      if (result.value === true) {
        let tmp = {
          kind: kind_tmp,
          category: category_tmp,
          name: name_tmp,
          price: price_tmp,
        };

        if (data[d] === undefined) {
          data[d] = [tmp];
        } else {
          data[d].push(tmp);
        }

        console.log(data);
        renderList(d, true);

        let expense = $(".expense");
        let credit = $(".credit");
        let btn7 = $(".btn");
        expense.css("display", "none");
        credit.css("display", "none");
        btn7.css("display", "block");

        name1.value = null;
        name2.value = null;
        money1.value = null;
        money2.value = null;

        let cds = document.querySelectorAll(".cd");
        for (let i of cds) {
          if (i.classList.contains("clickedCategory")) {
            i.classList.remove("clickedCategory");
          }
        }

        let eps = document.querySelectorAll(".ep");
        for (let i of eps) {
          if (i.classList.contains("clickedCategory")) {
            i.classList.remove("clickedCategory");
          }
        }
      }
    });
  }
});

let topBtn = document.querySelector(".position_shift");
console.log(topBtn);
topBtn.addEventListener("click", function () {
  $(window).scrollTop(0);
});

// 반응형
// 모바일 버전(576px 이하)으로 바뀌면 요일 표시가 더 짧은 월, 화, 수 로 바뀐다.
window.onresize = function () {
  if (window.innerWidth <= 576) {
    let days = document.querySelectorAll(".days>.day");
    days_li = ["월", "화", "수", "목", "금", "토", "일"];
    for (let i = 0; i < days.length; i++) {
      days[i].innerText = days_li[i];
    }
  } else if (window.innerWidth > 576) {
    let days = document.querySelectorAll(".days>.day");
    days_li = ["Mon", "Tue", "Wed", "Tur", "Fri", "Sat", "Son"];
    for (let i = 0; i < days.length; i++) {
      days[i].innerText = days_li[i];
    }
  }
};

// 선택한 날짜에 해당되는 지출/소득 리스트 render
function renderList(d, isNew) {
  let data_d = data[d];
  $(".date_inf").text(
    `20${d.slice(0, 2)}. ${d.slice(2, 4)}. ${d.slice(4, 6)}.`
  );
  let ul = $(".list");
  ul.html("");
  if (data_d != undefined) {
    let li = document.createElement("li");
    li.classList.add("account-li");
    li.innerHTML =
      '<div class="li-item category"></div><div class="li-item name"></div><div class="li-item price"></div>';

    for (let i = 0; i < data_d.length; i++) {
      let clone = li.cloneNode(true);
      clone.childNodes[0].innerText = data_d[i]["category"];
      clone.childNodes[1].innerText = data_d[i]["name"];

      price_tmp = data_d[i]["price"];
      if (data_d[i]["kind"] == "입금") {
        price_tmp = `+${price_tmp} 원`;
        clone.childNodes[2].classList.add("plus");
      } else {
        price_tmp = `-${price_tmp} 원`;
        clone.childNodes[2].classList.add("minus");
      }
      clone.childNodes[2].innerText = price_tmp;
      if (isNew && i == data_d.length - 1) {
        clone.classList.add("animate__backInRight");
      } else if (!isNew) {
        clone.classList.add("animate__backInRight");
      }
      ul.append(clone);
    }
  }
}

const darkModeToggle = document.getElementById("dn"); // 체크박스
console.log(darkModeToggle);

const Realbody = document.querySelector("body");
darkModeToggle.addEventListener("change", function (event) {
  //체크박스의 변화 감지 리스너
  if (!Realbody.classList.contains("darkmode")) {
    // 바디에 다크모드 클래스가 없으면
    Realbody.classList.add("darkmode"); // 다크모드 추가
  } else {
    // 바디에 다크모드 클래스가 있으면
    Realbody.classList.remove("darkmode"); // 다크모드 클래스를 제거
  }
});

let scrollCount = 0;
const scrollToggle = document.getElementById("dn_shift");
scrollToggle.addEventListener("change", function (event) {
  console.log("toggle");
  scrollCount += 1;
  if (scrollCount % 2 === 1) {
    window.scrollTo({ left: 0, top: 609, behavior: "smooth" });
  } else {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }
});
