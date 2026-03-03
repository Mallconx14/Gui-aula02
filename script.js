function somar() {
    let num;
    let num1;
    num = parseInt(document.getElementById('1').value);
    num1 = parseInt(document.getElementById('2').value);
    document.getElementById('resultado').innerText = num + num1;
    console.log(num + num1);
}

function subtrair() {
    let num;
    let num1;
    num = parseInt(document.getElementById('3').value);
    num1 = parseInt(document.getElementById('4').value);
    document.getElementById('resultado1').innerText = num - num1;
    console.log(num - num1);
}

function multiplicar() {
    let num;
    let num1;
    num = parseInt(document.getElementById('5').value);
    num1 = parseInt(document.getElementById('6').value);
    document.getElementById('resultado2').innerText = num * num1;
    console.log(num * num1);
}

function triangulo() {
    let num;
    let num1;
    num = parseInt(document.getElementById('7').value);
    num1 = parseInt(document.getElementById('8').value);
    document.getElementById('resultado3').innerText = (num * num1) / 2;
    console.log((num * num1) / 2);
}

function quadrado() {
    let num;
    num = parseInt(document.getElementById('9').value);
    document.getElementById('resultado4').innerText = (num ** 2);
    console.log((num ** 2));
}








// quadrado
// retangulo
// trapezio
// losango
// circulo
// setor circular
// coroa circular
// elipse
// paralelogramo
// pligono regular
