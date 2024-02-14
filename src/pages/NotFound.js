import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound-conte">
        <h2>Erreur 404</h2>
        <NavLink to="/">
          <h3>
            Retour à l'accueil
            <br />
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </h3>
        </NavLink>
      </div>
    </div>
  );
}
