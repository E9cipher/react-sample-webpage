import styles from "./Login.module.css";
import { useSearchParams } from "react-router-dom";
import ContenedorDenegado from "./ContenedorDenegado";

const JSX = (
    <div className={styles.loginBar}>
        <div className={styles.title}>
            <h1 className={`${styles.text} ${styles.titleText2}`}>Login</h1>
            <hr />
        </div>
        <div className={styles.container}></div>
    </div>
)

const LoginDiv = () => {
    const [searchParams] = useSearchParams();
    const isError = searchParams.get("isError"); // string or null

    return (
        <div className={styles.loginPage}>
            {isError === "true" && <ContenedorDenegado />}
            {JSX}
        </div>
    );
}

export default LoginDiv;