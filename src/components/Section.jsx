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
            `SmartBanana: Banana-powered AI chatbots`,
            `BananaCloud: Storage solutions`,
            `Banana+: Premium quality bananas`
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
        content: "Banana-powered AI chatbots and neural networks"
    },
    {
        title: "BananaCloud",
        content: "Cloud storage solutions with up to 1TB+ for $49.99/year"
    },
    {
        title: "Banana+",
        content: "Premium, max quality bananas (doesn't mean standard ones aren't good)"
    }
];

/** Returns a section tag
 * @param {{ data: { id: string } }} props
 */
const Section = ({ sectId, data }) => {
    const cards = sectId === 1 ? gridCardData1 : sectId === 3 ? gridCardData2 : [];

    const Footer = () => (<></>);

    return (
        <section id={data.id} className="bodysection" style={{ backgroundColor: data.bgcolor }}>
            <div className="pctitle">
                <h1 className="ptitle">{data.name}</h1>
            </div>
            <div className={"pctext " + ((sectId === 1 || sectId === 3) ? "pctext-grid" : "")}>
                {/* <p className="ptext">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                {sectId === 1 && (
                    <div className="grid">
                        {cards.map((cardData, index) => (
                            <GridCard key={index} imageIndex={index + 1} data={cardData} />
                        ))}
                    </div>
                )}
                {sectId === 2 && <ListDiv />}
                {sectId === 3 && (
                    <div className="grid">
                        {cards.map((cardData, index) => (
                            <GridCard key={index} imageIndex={index + 1} data={cardData} />
                        ))}
                    </div>
                )}
                {sectId === 4 && <Footer />}
            </div>
        </section>
    );
};

export default Section;
