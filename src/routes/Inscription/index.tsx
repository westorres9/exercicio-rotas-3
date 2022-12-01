import { Link } from "react-router-dom";

export default function Inscription() {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <h1>Pagina de inscrição</h1>
        </div>
          <div className="btn-container">
            <Link to="/promotion">
              <button>Ver Promoção</button>
            </Link>
          </div>

      </div>
    </>
  );
}
