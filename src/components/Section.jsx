import "./Main.css";
import GridCard from "./GridCard";
/** Returns a section tag
 * @param {{ data: { id: string } }} props
 */
const SectionJSX = ({ data }) => {
    return (
        <section id={data.id} className="bodysection" style={{ backgroundColor: data.bgcolor }}>
            <div className="pctitle">
                <h1 className="ptitle">{data.name}</h1>
            </div>
            <div className="pctext pctext-grid">
                {/* <p className="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                <div className="grid">
                    <GridCard data_index={"1"} />
                    <GridCard data_index={"2"} />
                    <GridCard data_index={"3"} />
                    <GridCard data_index={"4"} />
                    <GridCard data_index={"5"} />
                    <GridCard data_index={"6"} />
                </div>
            </div>
        </section>
    )
}

const Section = ({ data }) => {
    return SectionJSX({ data })
}


export default Section