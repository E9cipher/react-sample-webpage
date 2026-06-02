import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const ListDiv = () => {
    const Checks = [
        "Guaranteed Premium Quality",
        "Delivery within 5 working days. Worldwide shipping",
        "Cheap & Nice (customer reviews)",
        "High nutritional balance",
        "Preserved in safe environments",
        "100% natural, obtained from certified sources",
        "Sustainable and environmentally friendly practices",
        "Excellent customer service and support",
        "Innovative products with cutting-edge technology"
    ];
    return (
        <>
            <div className="list">
                <ul>
                    {Checks.map((e) => (
                        <li key={e}><FontAwesomeIcon icon={faCheck} color='#10e03d' fontWeight={900} style={{marginRight: '5px'}}></FontAwesomeIcon> {e}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ListDiv;