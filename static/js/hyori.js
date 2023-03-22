console.log("연결");

let btn = document.querySelectorAll(".btn");
console.log(btn);
let breakdown1 = document.querySelector(".breakdown1");

let credit = document.querySelector(".btn-pay1");
let expense = document.querySelector(".btn-pay2");

let enter = document.querySelectorAll(".enter");

let aa = () => {
  let breakdown1 = document.querySelector(".breakdown1");
  breakdown1.style.display = "flex";
  credit.style.display = "none";
  expense.style.display = "none";
};

let bb = () => {
  let breakdown2 = document.querySelector(".breakdown2");
  breakdown2.style.display = "flex";
  credit.style.display = "none";
  expense.style.display = "none";
};

// btn.addEventListener("click", (e) => {
//   e.preventDefault(); //브라우저의 기본동작을 막아줌
//   let li = document.createElement("li");
//   ul.append(li);

//   let id = document.querySelector("input").value;
//   let comment = document.querySelector("#input");

//   li.innerHTML = `${id}`;
// });

// function changeResult() {
//   let result = document.querySelector("input");
//   result.innerHTML = `₩ ${input}`;
// }

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
// });
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
  // console.log(thidsMonth);

  // 캘린더 렌더링
  renderCalender(thisMonth);

  function renderCalender(thisMonth) {
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
    let month = document.querySelector(".year-month");
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

    dateClick();
  }

  // 이전달로 이동
  let prev = document.querySelector(".go-prev");
  prev.addEventListener("click", function () {
    thisMonth = new Date(currentYear, currentMonth - 1, 1);
    renderCalender(thisMonth);
  });

  // 다음달로 이동
  let next = document.querySelector(".go-next");
  next.addEventListener("click", function () {
    thisMonth = new Date(currentYear, currentMonth + 1, 1);
    renderCalender(thisMonth);
  });

  console.log($(".current"));
}

// 클릭한 날의 색깔을 바꾸고 정보를 가져오기
function dateClick() {
  $(".current").click(function () {
    console.log(`${this.innerText}일을 선택하셨습니다.`);
    $(".clicked").css("background-color", "beige");
    $(".clicked").removeClass("clicked");
    // $(".current").css("background-color", "beige");
    this.style = "background-color: rgb(179, 219, 236);";
    this.classList.add("clicked");
    $(".btn").css("display", "block");
  });

  //세희 수정 --------------------------------------
  let cc = () => {
    let btn5 = document.querySelectorAll(".btn");
    btn5.style.display = "none";
  };

  // 선택한 날짜에 해당되는 지출/소득 리스트 render
  function renderList() {
    let tmp = document.querySelector(".year-month");
    tmp = tmp.innerText;
    let year,
      month = tmp.split(".");
    console.log(year, month);

    let date = this.innerText;

    let li = document.querySelector(".account-li");
    document.querySelector(".list").append(li.cloneNode(true));
  }

  renderList();
}

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
