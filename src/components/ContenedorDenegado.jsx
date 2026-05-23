import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContenedorDenegado = () => {
    return (
        <div className={styles.contenedorDenegado}>
            <p className={styles.pDenegado}>
                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.fwIconDenegado} />
                No has iniciado sesión!
            </p>
        </div>
    )
}

export default ContenedorDenegado;