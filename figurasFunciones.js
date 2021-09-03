// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const ladoA = document.getElementById("ladoA").value;
  const ladoB = document.getElementById("ladoB").value;
  const ladoBase = document.getElementById("ladoBase").value;

  let lado1 = parseInt(ladoA)
  let lado2 = parseInt(ladoB)
  let lado3 = parseInt(ladoBase)

  const perimetro = perimetroTriangulo(lado1, lado2, lado3);
  alert(perimetro);
  console.log(perimetro)
}

function calcularAreaTriangulo(){
  const ladoA = document.getElementById("ladoA").value;
  const ladoB = document.getElementById("ladoB").value;

  const area = areaTriangulo(ladoA, ladoB);
  console.log(areaTriangulo)
  alert(area);
  console.log(area)
}

function calcularAlturaTrianguloIsoceles(){
  const ladoA = document.getElementById("ladoA").value;
  const ladoB = document.getElementById("ladoB").value;
  const ladoBase = document.getElementById("ladoBase").value;
  if(ladoA == ladoB && ladoB != ladoBase){
      const lados = Math.pow(ladoA, 2);
      console.log(lados);

      const base = Math.pow(ladoBase, 2) / 4;
      console.log(base);
      
      const resultadoLadosBase =  lados - base;
      const h = Math.sqrt(resultadoLadosBase);  
      alert(h)    
  }
}