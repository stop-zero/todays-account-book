const urlParams = new URLSearchParams(location.search);
console.log(urlParams.get('age'));
console.log(urlParams.get('category'));
console.log(urlParams.get('inputWon'));

let getAge = urlParams.get('age');
let getWon = parseInt(urlParams.get('inputWon'))
let result = document.querySelector('.result');
// 나이대 별 한달 평균 생활비
let teen = 328000;
let twenty = 950000;
let thirty = 2460000;
let fourty = 2860000;
let fifty = 2440000;

console.log(result);

if (getAge == 10) {
    result.innerHTML = `당신은 10대 평균인 ${teen}원에 비해 약 ${(teen / getWon * 100).toFixed(1)}% 정도의 소비습관을 가지고 있습니다.`
} else if (getAge == 20) {
    result.innerHTML = `당신은 20대 평균인 ${twenty}원에 비해 약 ${(twenty / getWon * 100).toFixed(1)}% 정도의 소비습관을 가지고 있습니다.`
} else if (getAge == 30) {
    result.innerHTML = `당신은 30대 평균인 ${thirty}원에 비해 약 ${(thirty / getWon * 100).toFixed(1)}% 정도의 소비습관을 가지고 있습니다.`
} else if (getAge == 40) {
    result.innerHTML = `당신은 40대 평균인 ${fourty}원에 비해 약 ${(fourty / getWon * 100).toFixed(1)}% 정도의 소비습관을 가지고 있습니다.`
} else if (getAge == 50) {
    result.innerHTML = `당신은 50대 평균인 ${fifty}원에 비해 약 ${(fifty / getWon * 100).toFixed(1)}% 정도의 소비습관을 가지고 있습니다.`
}
