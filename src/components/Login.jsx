import "./Login.css";
import { useSearchParams } from "react-router-dom";
import ContenedorDenegado from "./ContenedorDenegado";

const JSX = (
    <div className="loginBar">
        <div className="title">
            <h1 className="text title-text-2">Login</h1>
            <hr />
        </div>
        <div className="container"></div>
    </div>
)

const LoginDiv = () => {
    const [searchParams] = useSearchParams();
    const isError = searchParams.get("isError"); // string or null

    return (
        <>
            {isError === "true" && <ContenedorDenegado></ContenedorDenegado>}
            {JSX}
        </>
    );
}

export default LoginDiv;