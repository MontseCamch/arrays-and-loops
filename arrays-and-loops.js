//Sum of Resistors in Series
const sumResitance = [-1,5,6,3];
let sum = 0;

for(let i = 0; i <= sumResitance.length -1; i++) {
    let value = Math.abs(sumResitance[i]);
    sum = sum + value;
}
console.log(`Sum of Resistors: ${sum} ohms`);

//Number divided into halves
const halves = [];
let num = 10;
let half = num / 2;
console.log(halves.push(half, half));
console.log(halves)

//Secret Society
