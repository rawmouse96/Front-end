// 1. 인수와 반환값이 있는 함수
function sum(min, max){
	let result = 0;
	for (let i = min; i <= max; i++){
		result += i;
	}
	return result;
}
console.log(sum(1, 100));

// 2. 인수 없이 반환값만 있는 함수
function dice(){
	return parseInt(Math.ceil(Math.random()*6));
}
console.log(dice(), dice(), dice());

// 3. 인수는 있고 반환값이 없는 함수
function print(a){
	console.log(a);
}
print('No return value function');

// 4. 인수와 반환값이 모두 없는 함수
let globalVar = 0;
function increment(){
	globalVar ++;
}
increment();
console.log(globalVar);

// 매개변수를 입력하지않고 호출하는 경우
function printFruit(name, count){
	count = count ? count : 0;         // 매개변수가 입력되지 않았을 때 초기값을 주는 방법 / == if (typeof(count) == 'undefined') count = 0; /
	console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit('사과', 20);
printFruit('딸기');

function printFruit2(name, count = 0){
	console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit2('귤');