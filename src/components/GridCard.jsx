import "./Main.css";
import { images } from "../assets/assets";

const GridCardContent = ({ data, opts }) => {
    if (!data) {
        return (
            <p>
                Invalid card data provided: {data}: ({typeof data}), {opts}: ({typeof opts})
            </p>
        );
    }

    const DataContentP = () => {
        if (Array.isArray(data.content)) {
            return (
                <>
                    {data.content.map((element, index) => (
                        <p key={index}>{element}</p>
                    ))}
                </>
            );
        }

        return <p>{data.content}</p>;
    };

    switch (opts) {
        case 1:
            return <h1>{data.title}</h1>;
        case 2:
            return <DataContentP />;
        default:
            return (
                <>
                    <h1>{data.title}</h1>
                    <DataContentP />
                </>
            );
    }
};

const GridCard = ({ data, imageIndex }) => {
    /* eslint-disable-next-line no-unused-vars */
    const imageSrc = images[Number(imageIndex) - 1];

    return (
        <div className="card">
            <div className="card-inner" style={{ width: "100%" }}>
                <div className="card-face card-front">
                    {/* <img src={imageSrc} alt={data?.title || "card image"} /> */}
                    <GridCardContent data={data} opts={1} />
                </div>

                <div className="card-face card-back">
                    <div className="buttonContainer">
                        <GridCardContent data={data} opts={2} />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn-grid primary">Buy</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn-grid secondary">See More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridCard;
