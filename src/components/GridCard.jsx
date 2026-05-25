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


const GridCard = ({ data_index }) => {
    return (
        <div className="card">
            <div className="card-inner" style={{ width: "100%" }}>

                <div className="card-face card-front">
                    <img src={images[data_index - 1]} alt="" />

                    <div className="buttonContainer">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn-grid primary">Buy</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn-grid secondary">See More</a>
                    </div>
                </div>

                <div className="card-face card-back">
                    <div className="buttonContainer">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn-grid primary">Buy</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" className="btn-grid secondary">See More</a>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

            </div>
        </div>
    )
}

export default GridCard;