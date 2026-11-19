import { useState, useEffect } from "react";

function CuentaRegresiva() {
  const fechaObjetivo = new Date("2026-12-31T23:59:59");

  const calcularTiempo = () => {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
      };
    }

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diferencia / (1000 * 60)) % 60),
      segundos: Math.floor((diferencia / 1000) % 60)
    };
  };

  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Cuenta Regresiva</h1>

      <h3>Días: {tiempo.dias}</h3>
      <h3>Horas: {tiempo.horas}</h3>
      <h3>Minutos: {tiempo.minutos}</h3>
      <h3>Segundos: {tiempo.segundos}</h3>
    </div>
  );
}

export default CuentaRegresiva;







