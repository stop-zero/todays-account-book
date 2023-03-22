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

// 숫자 3자리마다 콤마 찍기
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
