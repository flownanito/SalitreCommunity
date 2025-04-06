import React, { useState, useEffect } from "react";
import "./Profile.css";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import { ref, onValue, push, set, remove, update } from "firebase/database";
import database from "../../services/firebase.js";

const Profile = () => {
  const [form, setForm] = useState({
    carnada: "",
    caña: "",
    cedal: "",
    señuelo: "",
    peso: "",
    pez: "",
    clima: "",
    viento: "",
    oleaje: "",
    pescadero: "",
  });

  const [capturas, setCapturas] = useState([]);
  const [editingId, setEditingId] = useState(null); // ID de la captura en edición
  const [busqueda, setBusqueda] = useState(""); // <- AÑADIDO para buscar

  // Cargar datos desde Firebase en tiempo real
  useEffect(() => {
    const capturasRef = ref(database, "Capturas");
    onValue(capturasRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setCapturas(Object.entries(data).map(([id, values]) => ({ id, ...values })));
      } else {
        setCapturas([]);
      }
    });
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar formulario a Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      // Actualizar captura existente
      await update(ref(database, `Capturas/${editingId}`), form);
      setEditingId(null);
    } else {
      // Crear nueva captura
      const newCapturaRef = push(ref(database, "Capturas"));
      await set(newCapturaRef, form);
    }
    setForm({
      carnada: "",
      caña: "",
      cedal: "",
      señuelo: "",
      peso: "",
      pez: "",
      clima: "",
      viento: "",
      oleaje: "",
      pescadero: "",
    });
  };

  // Eliminar captura de Firebase
  const handleDelete = (id) => {
    remove(ref(database, `Capturas/${id}`));
  };

  // Editar captura
  const handleEdit = (captura) => {
    setForm(captura);
    setEditingId(captura.id);
  };

  return (
    <>
      <Header />
      <div>
        <h2>Registro de Capturas</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(form).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={form[key]}
              onChange={handleChange}
              required
            />
          ))}
          <button type="submit">{editingId ? "Actualizar Captura" : "Guardar Captura"}</button>
        </form>

        {/* Lista de Capturas */}
        <h3>Lista de Capturas</h3>

        {/* AÑADIDO: Input para buscar por pez */}
        <input
          type="text"
          placeholder="Buscar por pez..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />

        <table>
          <thead>
            <tr>
              <th>Pez</th>
              <th>Peso (kg)</th>
              <th>Clima</th>
              <th>Carnada</th>
              <th>Caña</th>
              <th>Cedal</th>
              <th>Señuelo</th>
              <th>Viento</th>
              <th>Oleaje</th>
              <th>Pescadero</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {capturas
              .filter((captura) =>
                captura.pez?.toLowerCase().includes(busqueda.toLowerCase())
              )
              .map((captura) => (
                <tr key={captura.id}>
                  <td>{captura.pez || "-"}</td>
                  <td>{captura.peso || "-"}</td>
                  <td>{captura.clima || "-"}</td>
                  <td>{captura.carnada || "-"}</td>
                  <td>{captura.caña || "-"}</td>
                  <td>{captura.cedal || "-"}</td>
                  <td>{captura.señuelo || "-"}</td>
                  <td>{captura.viento || "-"}</td>
                  <td>{captura.oleaje || "-"}</td>
                  <td>{captura.pescadero || "-"}</td>
                  <td>
                    <button onClick={() => handleEdit(captura)}>Editar</button>
                    <button onClick={() => handleDelete(captura.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
