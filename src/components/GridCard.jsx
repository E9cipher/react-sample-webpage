import "./Main.css";
import { images } from "../assets/assets";

// eslint-disable-next-line no-unused-vars
const OriginalCard = () => {
    <div className="card">
        <img src={images[0]} alt="" />
        <div className="buttonContainer">
            <button className="grid-btn primary">Buy</button>
            <button className="grid-btn secondary">See More</button>
        </div>
    </div>
}

const GridCardContent = ({ data_content }) => {
    const GridCardContentTextDict = {
        aboutUs: `Som el Yakisoba FC`,
        ourMission: `La nostra missió és aconseguir un reconeixement al nostre club`,
        products: [`El nostre objectiu`],
        stats: [`Lorem ipsum`],
        team: [`Mister: (nom)`, `Inversors: (noms)`, `Integrants: (noms)`],
        contact: [`support@yakosobafc.com`, `Adreça`, `Uneix-te als nostres inversors!`]

    }
    const GridCardContentText = {
        1: {
            title: "About Us",
            content: GridCardContentTextDict.aboutUs
        },

        2: {
            title: "Our Mission",
            content: GridCardContentTextDict.ourMission
        },

        3: {
            title: "Products",
            content: GridCardContentTextDict.products
        },

        4: {
            title: "Stats",
            content: GridCardContentTextDict.stats
        },

        5: {
            title: "Our Team",
            content: GridCardContentTextDict.team
        },

        6: {
            title: "Contacts",
            content: GridCardContentTextDict.contacts
        }
    };

    const data = GridCardContentText[data_content];

    if (!data) {
        return (
            <p>
                Invalid data_content provided:
                {typeof data_content}, {data_content}
            </p>
        );
    }

    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </>
    );
}


const GridCard = ({ data_index }) => {
    return (
        <div className="card">
            <div className="card-inner" style={{ width: "100%" }}>

                <div className="card-face card-front">
                    {/* <img src={images[data_index - 1]} alt="" /> */}

                    <div className="buttonContainer">
                        <GridCardContent data_content={Number(data_index)} />
                    </div>
                </div>

                <div className="card-face card-back">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    <div className="buttonContainer">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn-grid primary">Buy</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn-grid secondary">See More</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GridCard;
