import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContenedorDenegado = () => {
    return (
        <div className="contenedor-denegado">
            <p className="p-denegado">
                <FontAwesomeIcon icon={faTriangleExclamation} className="fw-icon-denegado"></FontAwesomeIcon>
                No has iniciado sesión!
            </p>
        </div>
    )
}

export default ContenedorDenegado;