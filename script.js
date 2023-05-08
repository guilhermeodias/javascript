let weekDay = "sábado";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido! UwU!");
}

let candidata = "reprovada";

switch (candidata) {

    case "aprovada":
        console.log("Parabéns, você está no grupo de pessoas aprovadas!");
    break;
    case "lista":
        console.log("Você está na nossa lista de espera");
    break;
    case "reprovada":
        console.log("Infelizmente, você reprovou.");
    break;
    default:
        console.log("Informação incorreta.");
}