const urlParams = new URLSearchParams(location.search);
console.log(urlParams.get('age'));
console.log(urlParams.get('category'));
console.log(urlParams.get('inputWon'));

let getAge = urlParams.get('age');
let getWon = parseInt(urlParams.get('inputWon'))
let result = document.querySelector('.result-percent');
let result2 = document.querySelector('.result-percent2');
const formatter = new Intl.NumberFormat('ko', { notation: 'compact' });
// 나이대 별 한달 평균 생활비
let teen = 328000;
let twenty = 950000;
let thirty = 2460000;
let fourty = 2860000;
let fifty = 2440000;
const resultArr = ['과소비', '적정', '저소비'];

console.log(result);

if (getAge == 10) {
    result.innerHTML = `당신은 10대 평균인 ${formatter.format(teen)}원에 비해 약 ${parseInt(getWon / teen * 100)}% 정도의 소비습관을 가지고 있습니다.`
    if (parseInt(getWon / teen * 100) > 100) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[0]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else if (parseInt(getWon / teen * 100) < 100 && parseInt(getWon / teen * 100) > 60) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[1]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[2]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    }
} else if (getAge == 20) {
    result.innerHTML = `당신은 20대 평균인 ${formatter.format(twenty)}원에 비해 약 ${parseInt(getWon / twenty * 100)}% 정도의 소비습관을 가지고 있습니다.`
    if (parseInt(getWon / twenty * 100) > 100) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[0]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else if (parseInt(getWon / twenty * 100) < 100 && parseInt(getWon / twenty * 100) > 60) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[1]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[2]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    }
} else if (getAge == 30) {
    result.innerHTML = `당신은 30대 평균인 ${formatter.format(thirty)}원에 비해 약 ${parseInt(getWon / thirty * 100)}% 정도의 소비습관을 가지고 있습니다.`
    if (parseInt(getWon / thirty * 100) > 100) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[0]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else if (parseInt(getWon / thirty * 100) < 100 && parseInt(getWon / thirty * 100) > 60) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[1]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[2]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    }
} else if (getAge == 40) {
    result.innerHTML = `당신은 40대 평균인 ${formatter.format(fourty)}원에 비해 약 ${parseInt(getWon / fourty * 100)}% 정도의 소비습관을 가지고 있습니다.`
    if (parseInt(getWon / fourty * 100) > 100) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[0]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else if (parseInt(getWon / fourty * 100) < 100 && parseInt(getWon / fourty * 100) > 60) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[1]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[2]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    }
} else if (getAge == 50) {
    result.innerHTML = `당신은 50대 평균인 ${formatter.format(fifty)}원에 비해 약 ${parseInt(getWon / fifty * 100)}% 정도의 소비습관을 가지고 있습니다.`
    if (parseInt(getWon / fifty * 100) > 100) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[0]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else if (parseInt(getWon / fifty * 100) < 100 && parseInt(getWon / fifty * 100) > 60) {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[1]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    } else {
        result2.innerHTML = `전체 가구 중 40%를 차지하는 1인가구 ! 고객님은 그 중에서 ${resultArr[2]}
        유형이시군요 ! <br/>오늘의 가계부와 함께 1인가구에 맞는 현명한 소비를
        계획하실 준비 되셨나요?`
    }
}

