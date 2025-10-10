function verificarPrimeraVisita() {
      
  let visitado = localStorage.getItem("visitado");

  if (visitado === null) {
    enviarAccion('Visita',null,null,null);
    localStorage.setItem("visitado", "true");
  } 
  //Anteriormente aqui estaba el else, pero no es necesario hacer nada si ya ha visitado
}

function verificarEntradaFormulario() {
      
  let formulario = localStorage.getItem("formulario");

  if (formulario === null) {
    enviarAccion('Formulario',null,null,null);
    localStorage.setItem("formulario", "true");
  } 
}

function verificarEntradaTerminosCondiciones() {
      
  let terminosCondiciones = localStorage.getItem("terminosCondiciones");

  if (terminosCondiciones === null) {
    enviarAccion('TerminosCondiciones',null,null,null);
    localStorage.setItem("terminosCondiciones", "true");
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
    console.log("1");
    const resp = await fetch('/api/guardar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accion,nombre,email,ip })
    });
    console.log("2");

    const data = await resp.json();
    console.log("3");
    if (!resp.ok) {
      return;
    }
    console.log("4");
    out.textContent = 'OK: ' + JSON.stringify(data, null, 2);
    console.log("5");
  } catch (err) {
    document.getElementById('out').textContent = 'Error de red: ' + err.message;
  }
}
