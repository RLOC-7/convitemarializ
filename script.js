const contadorEl = document.getElementById("contador");
const dataEvento = new Date("2025-08-09T15:30:00");

function atualizarContador() {
    const agora = new Date();
    const diferenca = dataEvento - agora;

    if (diferenca <= 0) {
        contadorEl.textContent = "🎉 É hoje! A aventura começa agora! 🎉";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    contadorEl.textContent = `${dias}d ${String(horas).padStart(
        2,
        "0"
    )}h ${String(minutos).padStart(2, "0")}m ${String(segundos).padStart(
        2,
        "0"
    )}s`;
}

atualizarContador(); // Inicializa ao carregar
const intervalo = setInterval(atualizarContador, 1000);