import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Página não encontrada!
      </h3>
      <p className="not-found__text">Opa! Não há nada aqui... Desculpe. 🥺</p>

      <button type="button" onClick={() => navigate("/")}>
        Volte a Pagina inicial
      </button>
    </div>
  );
}

export default PageNotFound;
