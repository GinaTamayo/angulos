let num1 = parseFloat(prompt("Ingrese el primer angulo"));
let num2 = parseFloat(prompt("Ingrese el segundo angulo"));
let num3 = parseFloat(prompt("Ingrese el tercer angulo"));
if (num1 + num2 + num3 == 180) {
    console.log("Los angulos corresponden a un triangulo")
} else {
    console.log("Los angulos no corresponden a u triangulo")
}