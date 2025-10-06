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


function getColombiaDate() {
  const now = new Date();

  // offset Colombia = -5 horas
  const offsetMillis = -5 * 60 * 60 * 1000;

  // Creamos un nuevo Date ajustado a Bogotá
  const fechaUTC=now;
  const fechaColombia=new Date(now.getTime() + offsetMillis)
  return {fechaUTC,fechaColombia}
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
    const {fechaUTC,fechaColombia}  = getColombiaDate();
    const doc = {
      id,
      accion: String(accion),
      fechaUTC: fechaUTC,
      fechaColombia: fechaColombia
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
