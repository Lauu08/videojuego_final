// Función para reproducir música
function playMusic() {
    // Crear un nuevo objeto de Audio
    let audio = new Audio();

    // Establecer la fuente de audio
    audio.src = 'assets/audio/727607__collectionofmemories__underwater-melody.wav'; // Cambia 'your_music_file.mp3' por la ruta de tu archivo de música

    // Establecer la opción de bucle para que la música se repita continuamente
    audio.loop = true;

    // Iniciar la reproducción de la música
    audio.play()
    .then(() => {
        console.log('Reproducción de música iniciada correctamente.');
    })
    .catch(error => {
        console.error('Error al iniciar la reproducción de música:', error);
    });
}

// Iniciar la reproducción de la música cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    playMusic();
});