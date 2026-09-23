// ==========================================
// 1. FECHA DE LA BODA
// ==========================================
// 10 de Octubre de 2026 a las 13:00 hrs
const weddingDate = new Date(2026, 9, 10, 13, 0, 0).getTime();

// ==========================================
// 2. LÓGICA DEL CONTADOR REGRESIVO
// ==========================================
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "<h3 style='font-family: var(--font-serif-title); color: var(--gold-primary);'>¡Hoy es el gran día!</h3>";
  }
}, 1000);

// ==========================================
// 3. LÓGICA DEL BOTÓN DE WHATSAPP
// ==========================================
document.getElementById("btnWhatsapp").addEventListener("click", () => {
  // RECUERDA: Cambia los ceros por tu número de teléfono (ejemplo: 527711234567)
  const phoneNumber = "7711594040"; 
  const message = "Hola, confirmo mi asistencia para la boda de Francisco y Dora el 10 de octubre.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
});

// ==========================================
// 4. LÓGICA DEL REPRODUCTOR DE MÚSICA
// ==========================================
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

if (musicBtn && music) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.innerHTML = "⏸ Pausar Música";
    } else {
      music.pause();
      musicBtn.innerHTML = "🎵 Reproducir Música";
    }
  });
}