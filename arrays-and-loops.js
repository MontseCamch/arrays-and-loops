//Sum of Resistors in Series
const sumResitance = [-1, 5, 6, 3];
let sum = 0;

for (let i = 0; i <= sumResitance.length - 1; i++) {
    let value = Math.abs(sumResitance[i]);
    sum = sum + value;
}
console.log(`Sum of Resistors: ${sum} ohms`);
//--------------------

//Number divided into halves
const halves = [];
let num = 10;
let half = num / 2;
console.log(halves.push(half, half));
console.log(halves);
//--------------------

//Secret Society
const secretName = ['Harry', 'Ron', 'Hermione'];
let name;
let secret = [];

for (let i = 0; i <= secretName.length - 1; i++) {
    name = secretName[i];
    character = JSON.stringify(name);
    let letter = character.charAt(1);
    console.log(secret.push(letter));
    secret.sort();

}
console.log(secret);
//--------------------

//Online status
const onlineStatus = ['mockIng99', 'J0eyPunch', 'glassedFer', 'tutti20'];

if (onlineStatus.length > 2) {
    console.log(`${onlineStatus.slice(0, 2)} and ${onlineStatus.length - 2} more online`);
}
//--------------------

//Array of Multiples
const number = 17;
const lim = 6;
let accum = 0;
const multiples = [];
for (let i = 1; i <= lim; i++) {
    accum = accum + number;
    multiples.push(accum);
}
console.log(multiples);
//--------------------

//Positive dominance in Array
const positiveDom = [-1, -3, -5, 4, 6767];

function negativeNumbers(callback) {
    let negatives = 0;
    positiveDom.forEach(num => {
        if (num < 0) negatives++;
    });
    callback(negatives);
}

function check(value) {
    let arrayHalf = positiveDom.length / 2;
    if (value >= arrayHalf) {
        console.log(`Positive dominance in Array: ${false}`);
    } else {
        console.log(`Positive dominance in Array: ${true}`);
    }
}

negativeNumbers(check);
//--------------------

//Antipodal Average
const serie = [1, 2, 3, 5, 22, 6, 7];
let middle = Math.floor(serie.length / 2);

function operation() {
    let inicio = serie.slice(0, middle);
    let final = serie.slice(middle);
    if (inicio.length === final.length) {
        let reversed = final.reverse();
        let newSerie = [];
        for (let i = 0; i <= inicio.length - 1; i++) {
            let halfNumber = 0;
            sumNumbers = inicio[i] + reversed[i];
            halfNumber = sumNumbers / 2;
            newSerie.push(halfNumber);
        }
        console.log(newSerie);

    } else {
        final.shift();
        let reversed = final.reverse();
        let newSerie = [];
        for (let i = 0; i <= inicio.length - 1; i++) {
            let halfNumber = 0;
            let sumNumbers = inicio[i] + reversed[i];
            halfNumber = sumNumbers / 2;
            newSerie.push(halfNumber);
        }
        console.log(newSerie);
    }
}

console.log(operation());



