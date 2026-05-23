import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useGoToTop } from "../hooks/GoToTop";

const Gotop = () => {
    const { visible, scrollToTop } = useGoToTop();
    return (
        <button
            id="gotop"
            title="Go top"
            type="button"
            className={visible ? "show" : ""}
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon></button>
    );
}

export default Gotop;