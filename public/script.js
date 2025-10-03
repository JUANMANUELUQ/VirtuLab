// script.js
async function enviarAccion(accion) {
  try {
    const out = document.getElementById('out');
    out.textContent = 'Enviando...';

    const resp = await fetch('/api/guardar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accion })
    });

    const data = await resp.json();
    if (!resp.ok) {
      out.textContent = 'Error: ' + (data.error || JSON.stringify(data));
      return;
    }

    out.textContent = 'OK: ' + JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById('out').textContent = 'Error de red: ' + err.message;
  }
}

document.getElementById('btn1').addEventListener('click', () => enviarAccion('Acción1'));
document.getElementById('btn2').addEventListener('click', () => enviarAccion('Acción2'));
