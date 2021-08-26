let ladoCuadrado = parseInt(prompt('Ingresa la medida del lado del cuadrado'))
const perimetroCuadrado = ladoCuadrado * 4 
const areaCuadrado =  ladoCuadrado * ladoCuadrado

console.group("Cuadrado");
console.log('eL cuadrado con la medida ' + 
ladoCuadrado + ' cm tiene un perimetro de ' + 
perimetroCuadrado + ' cm' +
' y una area de ' + areaCuadrado + ' cm ^2')
console.groupEnd();

let base = parseInt(prompt('Ingresa la base del triangulo'))
let altura1 = parseInt(prompt('Ingresa altura 1'))
let altura2 = parseInt(prompt('Ingresa altura 2'))

const perimetroTriangulo = base + altura1 + altura2
const areaTriangulo =  (base * altura1) / 2

console.group("Triangulo");
console.log('El triangulo con la medida base ' + 
base + ' cm ' + 'altura ' + altura1 + " cm " +
altura2 + ' cm ' +
perimetroTriangulo + ' cm' +
' y una area de ' + areaTriangulo + ' cm ^2')
console.groupEnd();

let radio = parseInt(prompt('Ingresa el radio del circulo'))
const diametro = radio * 2
const PI = Math.PI;
const perimetroCirculo = diametro * PI
const areaCirculo =  (radio * radio) * PI 

console.group("Circulo");
console.log('El circulo con radio ' + 
radio + ' cm tiene un diametro de ' + 
diametro + ' cm ' + ' y un perimetro de ' + perimetroCirculo + 
' cm y un area de ' + areaCirculo + ' cm ^2 ') 
console.groupEnd();