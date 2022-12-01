import { Link } from "react-router-dom";

export default function Promotion() {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <h1>Pagina de promoção</h1>
        </div>

        <div className="btn-container">
          <Link to="/inscription">
            <button>Quero participar</button>
          </Link>
        </div>
      </div>
    </>
  );
}
