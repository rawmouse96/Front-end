//switch - multi select
let score = 84;
let scoreDigit = parseInt(score / 10); // 10으로 나눈 몫, 정수값
let grade; // grade = 'F' -> default 생략가능

switch(scoreDigit){
	case 10:
	case 9:
		grade = 'A';
		break;
	case 8:
		grade = 'B';
		break;
	case 7:
		grade = 'C';
		break;
	case 6:
		grade = 'D';
		break;
	default:
		grade = 'F';
		break;
}
console.log(`score: ${score}, 학점: ${grade}`);