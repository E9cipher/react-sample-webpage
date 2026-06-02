import "./Main.css";
import GridCard from "./GridCard";
import ListDiv from "./ListDiv";

const gridCardData1 = [
    {
        title: "About Us",
        content: `Banana Companies LTD is a global leader in banana innovation, delivering premium
        yellow solutions since 1998. We believe in sustainability, quality and potassium.`
    },
    {
        title: "Our Mission",
        content: `To make the world a better place, one banana at a time. We aim to revolutionize
        fruit logistics while also investing in AI industries.`
    },
    {
        title: "Products",
        content: [
            `SmartBanana: AI-powered ripeness detection`,
            `BananaCloud: Storage solutions`,
            `Banana+: Premium subscription bananas`
        ]
    },
    {
        title: "Stats",
        content: [
            `12M bananas shipped daily`,
            `More than 42 countries`,
            `99.99% customer satisfaction`
        ]
    },
    {
        title: "Our Team",
        content: [
            `CEO: John Doe`,
            `CTO: Marie Doe`,
            `CSO: Charlie McGwyn`
        ]
    },
    {
        title: "Contacts",
        content: [
            `support@bananacompanies.ltd`,
            `Banana Street 42`,
            `Join us and eat bananas!`
        ]
    }
];

const gridCardData2 = [
    {
        title: "SmartBanana",
        content: "AI-powered chatbots and neural networks"
    }
];

/** Returns a section tag
 * @param {{ data: { id: string } }} props
 */
const Section = ({ sectId, data }) => {
    const GridDiv = ({ data_type }) => {
        const cards = data_type === 1 ? gridCardData1 : gridCardData2;

        return (
            <div className="grid">
                {cards.map((cardData, index) => (
                    <GridCard key={index} imageIndex={index + 1} data={cardData} />
                ))}
            </div>
        );
    };

    const Footer = () => (<></>);

    return (
        <section id={data.id} className="bodysection" style={{ backgroundColor: data.bgcolor }}>
            <div className="pctitle">
                <h1 className="ptitle">{data.name}</h1>
            </div>
            <div className={"pctext " + ((sectId === 1 || sectId === 3) ? "pctext-grid" : "")}>
                {/* <p className="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                {sectId === 1 && <GridDiv data_type={1} />}
                {sectId === 2 && <ListDiv />}
                {sectId === 3 && <GridDiv data_type={2} />}
                {sectId === 4 && <Footer />}
            </div>
        </section>
    );
};

export default Section;

