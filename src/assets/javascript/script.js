window.addEventListener('load', () => {

  document.body.style.height = "900px"; 

  const elemenOpa = [
    document.getElementById("back1"),
    document.getElementById("logoPlay"),
    document.getElementById("footer")
  ];

  const cajaEscalado = document.getElementById("escalado");

  elemenOpa.forEach(el => { 
    if (el) el.style.transition = "opacity 0.2s ease-out"; 
  });
  if (cajaEscalado) {
    cajaEscalado.style.transition = "transform 0.2s ease-out";
  }

  const distLimite = 400; 

  window.addEventListener('scroll', () => {
    const posActual = window.scrollY;

    let opacidad = 1 - (posActual / distLimite);
    if (opacidad < 0) opacidad = 0;

    elemenOpa.forEach(el => {
      if (el) el.style.opacity = opacidad.toString();
    });

    if (cajaEscalado) {
      const factorReduct = Math.min(0.25, (posActual / distLimite) * 0.25);
      const nuevaEscala = 1.25 - factorReduct;

      cajaEscalado.style.transform = `scale(${nuevaEscala})`;
    }
  });
});