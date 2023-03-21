const urlParams = new URLSearchParams(location.search);
console.log(urlParams.get('age'));
console.log(urlParams.get('category'));
console.log(urlParams.get('inputWon'));

let getAge = urlParams.get('age');
let getWon = parseInt(urlParams.get('inputWon'));
let getCategory = urlParams.get('category');
let result = document.querySelector('.result-percent');
let result2 = document.querySelector('.result-percent2');
let mainHref = document.querySelector('.href-main');
let tagIcon1 = document.getElementById('tag-icon1');
let tagIcon2 = document.getElementById('tag-icon2');
let tagName1 = document.getElementById('tag-name1');
let tagName2 = document.getElementById('tag-name2');

mainHref.setAttribute('href', `/main?category=${getCategory}`)
const formatter = new Intl.NumberFormat('ko', { notation: 'compact' });
// 나이대 별 한달 평균 생활비
let teen = 328000;
let twenty = 950000;
let thirty = 2460000;
let fourty = 2860000;
let fifty = 2440000;
const resultArr = ['과소비', '적정', '저소비'];

if (getCategory == '식비') {
    tagIcon1.innerHTML = '🍈';
    tagName1.innerHTML = '#과일_박사';
    tagIcon2.innerHTML = '🍕';
    tagName2.innerHTML = '#프로_배달러';
} else if (getCategory == '여행') {
    tagIcon1.innerHTML = '🌍    ';
    tagName1.innerHTML = '#세계_일주';
    tagIcon2.innerHTML = '🚐';
    tagName2.innerHTML = '#프로_여행러';
} else if (getCategory == '건강') {
    tagIcon1.innerHTML = '🤷‍♂️';
    tagName1.innerHTML = '#100세_인생';
    tagIcon2.innerHTML = '🦸‍♂️';
    tagName2.innerHTML = '#건강왕';
} else if (getCategory == '교통') {
    tagIcon1.innerHTML = '🚃';
    tagName1.innerHTML = '#대중교통_마스터';
    tagIcon2.innerHTML = '🙃';
    tagName2.innerHTML = '#걷기_싫어요';
} else if (getCategory == '주거') {
    tagIcon1.innerHTML = '🛖';
    tagName1.innerHTML = '#집돌이_집순이';
    tagIcon2.innerHTML = '🏠';
    tagName2.innerHTML = '#현모양처';
} else if (getCategory == '통신') {
    tagIcon1.innerHTML = '📱';
    tagName1.innerHTML = '#현질왕';
    tagIcon2.innerHTML = '📞';
    tagName2.innerHTML = '#통화만_3시간';
} else if (getCategory == '카페') {
    tagIcon1.innerHTML = '🍞';
    tagName1.innerHTML = '#빵순이_빵돌이';
    tagIcon2.innerHTML = '☕';
    tagName2.innerHTML = '#바리스타';
} else if (getCategory == '생활') {
    tagIcon1.innerHTML = '🧘‍♀️';
    tagName1.innerHTML = '#생활의_달인';
    tagIcon2.innerHTML = '👨‍👩‍👧‍👦';
    tagName2.innerHTML = '#아껴쓰기';
} else if (getCategory == '금융') {
    tagIcon1.innerHTML = '🤖';
    tagName1.innerHTML = '#저축왕';
    tagIcon2.innerHTML = '🐖';
    tagName2.innerHTML = '#인간_저금통';
}

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

