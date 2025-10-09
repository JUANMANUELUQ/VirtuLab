verificarPrimeraVisita();

function verificarPrimeraVisita() {
      
  let visitado = localStorage.getItem("visitado");

  if (visitado === null) {
    enviarAccion('Visita',null,null,null);
    localStorage.setItem("visitado", "true");
  } else {
    // previously showed an alert here; removed to avoid annoying popups
  }
}

async function getUserIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip; // aquí tienes la IP como string
  } catch (error) {
    console.error("No se pudo obtener la IP:", error);
    return null;
  }
}

// Ejemplo de uso
getUserIP().then(ip => {
  console.log("La IP pública del usuario es:", ip);
});

// script.js
async function enviarAccion(accion,nombre,email,ip) {
  try {
    const out = document.getElementById('out');
    out.textContent = 'Enviando...';

    const resp = await fetch('/api/guardar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accion,nombre,email,ip })
    });

    const data = await resp.json();
    if (!resp.ok) {
      out.textContent = 'Error: ' + (data.error || JSON.stringify(data));
      return;
    }

    out.textContent = 'OK: ' + JSON.stringify(data, null, 2);
    // If this was a form submission ('Envio'), navigate back to the main page after a short delay
    if (accion === 'Envio') {
      setTimeout(() => { window.location.href = 'paginaPrincipal.html'; }, 700);
    }
  } catch (err) {
    document.getElementById('out').textContent = 'Error de red: ' + err.message;
  }
}

document.getElementById('envio').addEventListener('click', () => {
  const nombres = document.getElementById('nombres').value;
  const apellidos = document.getElementById('apellidos').value;
  const nombreCompleto=nombres.trim()+" "+apellidos.trim();
  const email = document.getElementById('email').value;
  getUserIP().then(ip => {
       enviarAccion('Envio',nombreCompleto,email,ip)
  })
});
