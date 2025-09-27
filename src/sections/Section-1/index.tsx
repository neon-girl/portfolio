import fireLine from "../../assets/section-1/fire_line.gif";
import fireWelcome from "../../assets/section-1/fire_welcome.gif";
import "./index.css";


const First = () => {
    return (
        <section className='first'>
            {Array.from({ length: 5 }).map((_, index) => (
                <img className='fire-welcome' key={index} src={fireWelcome} alt="fireWelcome" />
            ))}
            <img className='fire-line' src={fireLine} alt="fireLine" />
        </section>
    );
};

export default First;