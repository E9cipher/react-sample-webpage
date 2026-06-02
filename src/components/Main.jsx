import { faChevronDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
// Components
import Section from './Section';
import Gotop from "./Gotop";
// Utils
import { clearHash } from "../utils/clearHash";

const Header = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#top" onClick={clearHash(200)}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a></li>
                <li><a href="#top" onClick={clearHash(200)}>Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#whyus">Why choose us?</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
            </ul>
        </nav>
    )
}

const MyNameSection = ({ data }) => {
    // data is an obj passed by App
    return (
        <section className="myname">
            <div className="text">
                <h1 className="title">{data.name}</h1>
                <h2 className="subtitle">{data.slogan}</h2>
                <button className="btn godown">
                    <a href="#products">
                        <FontAwesomeIcon icon={faChevronDown} beatFade></FontAwesomeIcon>
                    </a>
                </button>
            </div>

        </section>
    )
}

const MainContent = ({ data, data_myname, sectData }) => {
    const JSX = (
        <>
            <header>
                <Header data={data}></Header>
            </header>
            <main>
                <div id="top"></div>
                <Gotop />
                <MyNameSection data={data_myname}></MyNameSection>
                <Section data={sectData[0]} sectId={1}></Section>
                <Section data={sectData[1]} sectId={2}></Section>
                <Section data={sectData[2]} sectId={3}></Section>
            </main>
        </>
    );
    return JSX;
}

export default MainContent;
