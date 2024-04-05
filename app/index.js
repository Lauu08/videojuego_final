setTimeout(function(){
    window.location.href = "menu.html";
}, 7000); 


    let audioContext = new (window.AudioContext || window.webkitAudioContext)(); // Crear un contexto de audio
    let source; // Variable para almacenar el origen de la música de fondo

    function playBackgroundMusic() {
        fetch('assets/audio/727607__collectionofmemories__underwater-melody.wav') 
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                source = audioContext.createBufferSource();
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
        if (source) {
            source.stop(); // Detener la reproducción de la música
        }
    }

    function toggleMute() {
        if (audioContext.state === 'running') {
            audioContext.suspend(); // Pausar la reproducción
        } else if (audioContext.state === 'suspended') {
            audioContext.resume(); // Reanudar la reproducción
        }
    }

    // Iniciar la música de fondo cuando se carga la página
    playBackgroundMusic();

    window.addEventListener("orientationchange", function() {
        var orientation = window.orientation;
    
        if (orientation === 90 || orientation === -90) {
            document.getElementById("rotateWarning").style.display = "none";
        } else {
            document.getElementById("rotateWarning").style.display = "block";
        }
    });