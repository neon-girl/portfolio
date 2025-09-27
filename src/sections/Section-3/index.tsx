import ca7pak from "../../assets/section-3/ca7pak.png";
import cajero from "../../assets/section-3/cajero.png";
import canyounot from "../../assets/section-3/canyounot.png";
import comeguita from "../../assets/section-3/comeguita.png";
import locura from "../../assets/section-3/locura.png";
import pointingHand from "../../assets/section-3/pointing_hand.gif";
import severedHand from "../../assets/section-3/severed_hand.gif";


import "./index.css";

const Third = () => {
    return (
        <section className="third">
            <div className="first-row">
                <img className="canyounot" src={canyounot} alt="canyounot" />
                <img className="ca7pak" src={ca7pak} alt="ca7riel y paco" />
                <img className="comeguita" src={comeguita} alt="comeguita" />
            </div>
            <div className="second-row">
                <img className="cajero" src={cajero} alt="cajero" />
                <img className="locura" src={locura} alt="locura" />
                <img className="pointingHand" src={pointingHand} alt="pointingHand" />
                <img className="severedHand" src={severedHand} alt="severedHand" />
            </div>
        </section>
    )
}

export default Third;