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

let grade = 176;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}