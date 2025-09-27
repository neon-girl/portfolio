import fireBio from "../../assets/section-2/fire_bio.gif";
import turningBio from "../../assets/section-2/turning_bio.gif";
import bouncingBio from "../../assets/section-2/bouncing_bio.gif";

import "./index.css";

const Second = () => {
    return (
        <section className="second">
            <img className="fire-bio" src={fireBio} alt="fireBio" />
            <img className="turning-bio" src={turningBio} alt="turningBio" />
            <img className="bouncing-bio" src={bouncingBio} alt="bouncingBio" />
        </section>
    )
}

export default Second;