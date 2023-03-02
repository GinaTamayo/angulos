let num1 = parseFloat(prompt("Ingrese el primer angulo"));
let num2 = parseFloat(prompt("Ingrese el segundo angulo"));
let num3 = parseFloat(prompt("Ingrese el tercer angulo"));
switch (num1 + num2 + num3 == 180) {
    case true:
        console.log("Los angulos corresponden a un triangulo")
        break;

    default:
        console.log("Los angulos no corresponden a un triangulo")
        break;
}