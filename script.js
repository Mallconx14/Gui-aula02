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

function retangulo() {
    let num;
    let num1;
    num = parseInt(document.getElementById('10').value);
    num1 = parseInt(document.getElementById('11').value);
    document.getElementById('resultado5').innerText = num * num1;
    console.log(num * num1);
}

function trapezio() {
    let num;
    let num1;
    let num2;
    num = parseInt(document.getElementById('12').value);
    num1 = parseInt(document.getElementById('13').value);
    num2 = parseInt(document.getElementById('14').value);
    document.getElementById('resultado6').innerText = (num + num1) * num2;
    console.log((num + num1) * num2);
}

function losango() {
    let num;
    let num1;
    num = parseInt(document.getElementById('15').value);
    num1 = parseInt(document.getElementById('16').value);
    document.getElementById('resultado7').innerText = (num ** 2) * num1;
    console.log((num ** 2) * num1);
}

function circulo() {
    let num;
    num = parseInt(document.getElementById('17').value);
    document.getElementById('resultado8').innerText = (num ** 2) * 3.14;
    console.log((num ** 2) * 3.14);
}

function coroa() {
    let num;
    let num1;
    num = parseInt(document.getElementById('18').value);
    num1 = parseInt(document.getElementById('19').value);
    document.getElementById('resultado9').innerText = 3.14 * (num * num1);
    console.log(3.14 * (num * num1));
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
