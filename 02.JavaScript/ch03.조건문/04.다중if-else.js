// if - else if - else
let score = 93;
let grade;

if (score >= 90)
	grade = 'A';
	else if (score >=80)
	grade = 'B'
	else if (score >=70)
	grade = 'C'
	else if (score >=60)
	grade = 'D'
	else
	grade = 'F'

console.log(`score: ${score}, 학점: ${grade}`);
console.log();