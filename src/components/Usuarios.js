import { useState, useEffect } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <div className="container mt-5">

      <div className="alert alert-danger text-center">
        <h2>Lista de Usuarios - API REST</h2>
      </div>

      <div className="row">
        {usuarios.map((usuario) => (
          <div className="col-md-4 mb-4" key={usuario.id}>

            <div className="card border-primary shadow-lg">

              <div className="card-header bg-primary text-white text-center">
                <h5>{usuario.name}</h5>
              </div>

              <div className="card-body">

                <p className="text-success">
                  <strong>Usuario:</strong> {usuario.username}
                </p>

                <p className="text-info">
                  <strong>Email:</strong> {usuario.email}
                </p>

                <p className="text-warning">
                  <strong>Teléfono:</strong> {usuario.phone}
                </p>

                <p className="text-secondary">
                  <strong>Ciudad:</strong> {usuario.address.city}
                </p>

              </div>

              <div className="card-footer text-center">
                <button className="btn btn-primary">
                  Ver Perfil
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Usuarios;