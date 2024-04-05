document.addEventListener("DOMContentLoaded", function() {
    // Verificar el estado de las vanguardias desbloqueadas
    const vanguardiasDesbloqueadas = localStorage.getItem("vanguardiasDesbloqueadas");
    const vanguardiasDesbloqueadasArray = vanguardiasDesbloqueadas ? JSON.parse(vanguardiasDesbloqueadas) : [];
    
    // Deshabilitar los botones correspondientes según las vanguardias desbloqueadas
    const cubismoBtn = document.getElementById("cubismoBtn");
    const expresionismoBtn = document.getElementById("expresionismoBtn");
    const impresionismoBtn = document.getElementById("impresionismoBtn");
    const surrealismoBtn = document.getElementById("surrealismoBtn");
    
    if (!vanguardiasDesbloqueadasArray.includes("cubismo")) {
        cubismoBtn.disabled = false;
    }
    if (!vanguardiasDesbloqueadasArray.includes("expresionismo")) {
        expresionismoBtn.disabled = false;
    }
    if (!vanguardiasDesbloqueadasArray.includes("impresionismo")) {
        impresionismoBtn.disabled = false;
    }
    if (!vanguardiasDesbloqueadasArray.includes("surrealismo")) {
        surrealismoBtn.disabled = false;
    }
    
    // Event listeners para redireccionar a las preguntas
    cubismoBtn.addEventListener("click", function() {
        window.location.href = "preguntas.html?vanguardia=cubismo";
    });
    expresionismoBtn.addEventListener("click", function() {
        window.location.href = "preguntas.html?vanguardia=expresionismo";
    });
    impresionismoBtn.addEventListener("click", function() {
        window.location.href = "preguntas.html?vanguardia=impresionismo";
    });
    surrealismoBtn.addEventListener("click", function() {
        window.location.href = "preguntas.html?vanguardia=surrealismo";
    });
});