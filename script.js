let a = 15
let b = 38
let c = 50
let d = -5

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
    console.log(a + " maior que " + b);
} else {
    console.log(b + " maior que " + a);
}

if (a > b && a > c) {
    console.log(a + " maior valor");
} else if (b > a && b > c) {
    console.log(b + " maior valor");
}else {
    console.log(c + " maior valor");
}

if (d > 0) {
    console.log("positive");
} else if (d < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

let ang1 = 40
let ang2 = 30
let ang3 = 110

if (ang1 + ang2 + ang3 === 180) {
    console.log("true");
} else if (ang1 + ang2 + ang3 != 180) {
    console.log("negative");
} else if (ang1 + ang2 + ang3 < 0) {
    console.log("Inválido");
}

let chess = "queen";

switch (chess) {
    case "pawn":
        console.log("peão - anda somente uma casa à frente");
        break;
        
    case "rook":
        console.log("torre - anda somente na vertical e horizontal quantas casas quiser");
        break;

    case "knight":
        console.log("cavalo - anda 5 casas em L");
        break;
        
    case "queen":
        console.log("rainha - anda para todos os lados quantas casas desejar");
        break;    

    default: console.log("peça inválida");
}

let note = 165

if (note >= 90 && note < 100) {
    console.log("Nota A");
} else if (note >= 80 && note < 100) {
    console.log("Nota B");
} else  if (note >= 70 && note < 100) {
    console.log("Nota C");
} else  if (note >= 60 && note < 100) {
    console.log("Nota D");
}  else  if (note >= 50 && note < 100) {
    console.log("Nota E");
} else if (note < 50 && note < 100) {
    console.log("Nota F");
} else if (note < 0 || note > 100) {
    console.log("Erro de Nota");
}

let isEven = false;

if ((a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0)) {
    isEven = true;
}
console.log(isEven);


let isOdd = false;

if ((a % 2 !== 0) || (b % 2 !== 0) || (c % 2 !== 0)) {
    isOdd = true;
}
console.log(isOdd);


let aliquotINSS;
let aliquotIR;

let grossSalary = 7000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));