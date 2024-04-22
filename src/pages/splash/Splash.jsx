import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/slides");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <div className="Portada">
        <div className="Portada-arriba">
          <h1>Applergic</h1>
          <span>Mi guía alimentaria</span>
        </div>
        <div className="Portada-abajo">
          <img
            className="Portada-img"
            src="public/IMG/logoApplergicFigurasGiro.png"
            alt="app-photo"
          />
        </div>
      </div>
    </div>
  );
}
