function aletorio(){
    let numMax = +document.getElementById('numMax').value;
    let numMin = +document.getElementById('numMin').value;

    let operacion = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    let salida = document.getElementById('salida');
    salida.textContent = `Resultado: ${operacion}`;
}