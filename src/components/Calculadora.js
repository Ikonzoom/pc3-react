import { useState } from "react";
import Resultado from "./Resultado";

function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(Number(num1) + Number(num2));
  };

  const restar = () => {
    setResultado(Number(num1) - Number(num2));
  };

  const multiplicar = () => {
    setResultado(Number(num1) * Number(num2));
  };

  const dividir = () => {
    if (Number(num2) === 0) {
      setResultado("No se puede dividir entre 0");
    } else {
      setResultado(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Calculadora React</h2>

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Primer número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button
        className="btn btn-primary me-2"
        onClick={sumar}
      >
        Sumar
      </button>

      <button
        className="btn btn-danger me-2"
        onClick={restar}
      >
        Restar
      </button>

      <button
        className="btn btn-success me-2"
        onClick={multiplicar}
      >
        Multiplicar
      </button>

      <button
        className="btn btn-warning"
        onClick={dividir}
      >
        Dividir
      </button>

      <hr />

      <Resultado resultado={resultado} />
    </div>
  );
}

export default Calculadora;