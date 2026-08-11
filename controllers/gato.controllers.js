import db from "../firebase.js";

export const registrarGato = async (req, res) => {
  try {
    const { nombre, edad, peso, raza, propietario } = req.body;

    if (!nombre || !edad || !peso || !raza || !propietario) {
      return res.status(400).json({
        mensaje:
          "Todos los campos son obligatorios: nombre, edad, peso, raza y propietario.",
      });
    }

    // Firestore crea automáticamente la colección "gatos" si no existe
    const docRef = await db.collection("gatos").add({
      nombre: nombre,
      edad: Number(edad),
      peso: Number(peso),
      raza: raza,
      propietario: String(propietario),
      fecha: new Date().toISOString(),
    });

    const mensaje = `¡Gato registrado con éxito en Firebase!
ID: ${docRef.id}
Nombre: ${nombre}
Edad: ${edad} años
Peso: ${peso} kg
Raza: ${raza}`;

    res.status(200).json({ mensaje });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      mensaje: "Error al guardar en Firebase: " + error.message,
    });
  }
};