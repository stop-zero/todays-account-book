console.log("연결");

let btn = document.querySelectorAll(".btn");
console.log(btn);
let breakdown1 = document.querySelector(".breakdown1");

let credit = document.querySelector(".btn-pay1");
let expense = document.querySelector(".btn-pay2");

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
