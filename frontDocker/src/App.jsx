import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/login", {  // Cambia a la URL donde esté tu API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Maneja la respuesta de la API
        console.log("Respuesta de la API:", data);
        alert('El registro fue exitoso');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    
  };

  return (
    <>
      <section>
        <h1
          style={{ fontSize: "49px", color: "#365b77", fontFamily: "fantasy" }}
        >
          Inicia Sesion
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              alignContent: "center",
              margin: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ borderRadius: "5px", margin: "10px", height: "30px" }}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "5px", margin: "10px", height: "30px" }}
            />
            <button
              type="submit"
              style={{
                margin: "10px",
                height: "40px",
                backgroundColor: "#365b77",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor:"pointer"
              }}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
        <p>made by cesar y chanonita</p>
      </section>
    </>
  );
}

export default App;
