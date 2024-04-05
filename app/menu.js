let audioContext; // Definir la variable del contexto de audio fuera de la función
let isMuted = false; // Variable de estado para rastrear si el sonido está silenciado

function initAudioContext() {
    // Crear un contexto de audio
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

function playBackgroundMusic() {
    fetch('assets/audio/727607__collectionofmemories__underwater-melody.wav')
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            let source = audioContext.createBufferSource(); // Definir la variable source localmente
            source.buffer = audioBuffer;
            source.connect(audioContext.destination);
            source.loop = true;
            source.start();
        })
        .catch(error => {
            console.error('Error al cargar la música de fondo:', error);
        });
}

function stopBackgroundMusic() {
    // Detener la reproducción de la música si hay un contexto de audio y está reproduciendo
    if (audioContext && audioContext.state === 'running') {
        audioContext.suspend();
    }
}

function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    playBackgroundMusic(); // Iniciar la música de fondo al mostrar el popup
}

function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    stopBackgroundMusic(); // Detener la música de fondo al cerrar el popup
}

// Función para silenciar o reanudar la reproducción de la música
function toggleMute() {
    // Revisar si hay un contexto de audio
    if (audioContext) {
        if (isMuted) {
            // Si está silenciado, reanudar la reproducción y actualizar el estado
            audioContext.resume();
            isMuted = false;
        } else {
            // Si no está silenciado, pausar la reproducción y actualizar el estado
            audioContext.suspend();
            isMuted = true;
        }
    }
}

// Inicializar el contexto de audio cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
    initAudioContext();
    // Iniciar la música de fondo cuando se carga la página
    playBackgroundMusic();

    // Asignar el evento onclick al botón de instrucciones si existe en la página
    let instruccionesBtn = document.getElementById('instrucciones');
    if (instruccionesBtn) {
        instruccionesBtn.onclick = showPopup;
    }
});
