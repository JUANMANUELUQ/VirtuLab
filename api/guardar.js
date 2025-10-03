// api/guardar.js
// Serverless Function para Vercel - CommonJS
const { MongoClient } = require('mongodb');
const crypto = require('crypto');

const uri = process.env.MONGODB_URI; // set en Vercel env vars
if (!uri) {
  console.error('MONGODB_URI no configurada');
}

// Reusar la conexión entre invocaciones (patrón crucial para serverless + M0)
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, {
    // opciones si quieres: serverSelectionTimeoutMS: 5000
  });
  global._mongoClientPromise = client.connect();
}
const clientPromise = global._mongoClientPromise;

/** Construye un ISO-like con offset -05:00 y también string legible en es-CO */
function colombiaTimestamps() {
  const now = new Date();
  // ISO con offset -05:00 (approx — representado como string). Construimos con Intl parts:
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'America/Bogota',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  }).formatToParts(now);

  const map = {};
  for (const p of parts) {
    if (p.type !== 'literal') map[p.type] = p.value;
  }
  const isoLocal = `${map.year}-${map.month}-${map.day}T${map.hour}:${map.minute}:${map.second}-05:00`;
  const pretty = new Intl.DateTimeFormat('es-CO', {
    timeZone: 'America/Bogota',
    dateStyle: 'medium',
    timeStyle: 'medium'
  }).format(now);
  return { isoLocal, pretty, serverDate: now }; // serverDate es Date UTC (BSON Date)
}

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'Method not allowed. Use POST' });
    }

    // Si Vercel no parsea JSON automáticamente, asegúrate de enviar Content-Type: application/json
    const body = req.body || {};
    const accion = body.accion;

    if (!accion || typeof accion !== 'string') {
      return res.status(400).json({ error: 'campo "accion" (string) es requerido' });
    }

    // Generar ID aquí (server-side)
    const id = (crypto.randomUUID && crypto.randomUUID()) || crypto.randomBytes(16).toString('hex');

    // Fechas en hora Colombia
    const { isoLocal, pretty, serverDate } = colombiaTimestamps();

    const doc = {
      id,
      accion: String(accion),
      fechaHoraLocalISO: isoLocal,   // ejemplo: "2025-09-30T14:30:00-05:00"
      fechaHoraLocalReadable: pretty, // formato legible en es-CO
      serverDate // BSON Date (momento exacto, UTC internally)
    };

    const client = await clientPromise;
    const db = client.db('logsDB');        // Ajusta si quieres otro nombre
    const coll = db.collection('acciones'); // Ajusta si quieres otro nombre

    const result = await coll.insertOne(doc);

    return res.status(201).json({
      ok: true,
      insertedId: result.insertedId,
      docId: id,
      stored: doc
    });
  } catch (err) {
    console.error('Error en /api/guardar:', err);
    return res.status(500).json({ error: 'internal_server_error', details: err.message });
  }
};
