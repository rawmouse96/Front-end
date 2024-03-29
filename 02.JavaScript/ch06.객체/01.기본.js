// 객체(object)

// 배열(array)
let fruits = ['딸기', '사과', '수박', '참외'];
console.log(typeof fruits);

let fruitObj = {0: '딸기', 1: '사과', 2: '수박', 3: '참외'} // 키(인덱스) : 밸류
console.log(fruits[0], fruitObj[1]);

// 객체(Object, Python dictionary, Java Map)
let personArray = ['제임스', 28, '남자', 175, '프로그래머', 30.0];
let personInfo = {             // key가 string인 경우 따옴표 생략 가능
	name : '제임스',
	age : 28,
	gender : '남자',
	height: 175,
	job: '프로그래머',
	bmi: 30.0
}
console.log(personArray);
console.log(personInfo);

// 객체에 대한 접근
console.log(personInfo['name']);
console.log(personInfo.name); // 같은결과지만 주로 2번째를 사용 
let key = 'age';
console.log(personInfo[key]); // 1번째 쓰는경우