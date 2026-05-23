import "./Main.css"
/** Returns a section tag
 * @param {{ data: { id: string } }} props
 */
const SectionJSX = ({ data }) => {
    return (
        <section id={data.id} className="bodysection" style={{ backgroundColor: data.bgcolor }}>
            <div className="pctitle">
                <h1 className="ptitle">{data.name}</h1>
            </div>
        </section>
    )
}

const Section = ({ data }) => {
    return SectionJSX({ data })
}


export default Section