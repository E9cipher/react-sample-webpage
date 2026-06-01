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
        aboutUs: `Banana Companies LTD is a global leader in banana innovation, delivering premium
        yellow solutions since 1998. We believe in sustainability, quality and potassium.`,
        ourMission: `To make the world a better place, one banana at a time. We aim to revolutionize
        fruit logistics while keeping things a-peeling`,
        products: [`SmartBanana: AI-powered ripeness detection`, `BananaCloud: Storage solutions`,
            `Banana+: Premium subscription bananas`],
        stats: [`12M bananas shipped daily`, `More than 42 countries`, `99.99% peel satisfaction rate`, `0 monkey complaints (2023)`],
        team: [`CEO: John Doe`, `CTO: Marie Doe`, `CSO: Unknown - change`],
        contact: [`support@bananacompanies.ltd`, `Banana Street 42`, `Join us and eat bananas!`]

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
                    <img src={images[data_index - 1]} alt="" />

                    {/* <div className="buttonContainer">
                        <GridCardContent data_content={Number(data_index)} />
                    </div> */}
                </div>

                <div className="card-face card-back">                        
                    <div className="buttonContainer">
                        <GridCardContent data_content={Number(data_index)} />

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
