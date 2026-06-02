import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const ListDiv = () => {
    const Checks = [
        "Guaranteed Quality",
        "Deliver in less than 5 working days",
        "Cheap & Nice",
        "High nutritional balance",
        "Preserved in safe environments",
        "100% natural, obtained from certified sources"
    ];
    return (
        <>
            <div className="list">
                <ul>
                    {Checks.map((e) => (
                        <li key={Checks[e]}><FontAwesomeIcon icon={faCheck} color='#10e03d' fontWeight={900} style={{marginRight: '5px'}}></FontAwesomeIcon> {e}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ListDiv;