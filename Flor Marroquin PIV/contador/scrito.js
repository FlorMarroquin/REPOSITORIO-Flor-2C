function contador(){
    let segundos = +document.querySelector('#segundos').value;
    setTimeout(finalizar, (1000 * segundos));
}
function finalizar() {
    let mostrar = document.querySelector('#salida');
    let alarma = document.querySelector('#alarma');
    alarma.play(); // Reproducir la alarma
    mostrar.textContent = '¡Tiempo terminado!'; 
    mostrar.style.color = 'red';
    mostrar.style.fontSize = '48px'; 
}
function reiniciar(){
    location.reload();
    }
