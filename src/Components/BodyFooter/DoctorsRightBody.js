import { useContext } from "react";
import Button from "../BodyHeader/Bottons"
import { LanguageContext } from "../../Contexts/LanguageContext";

function DoctorsButtons(props) {
    const { doctorId} = props;
    const t = useContext(LanguageContext).t;
    return (
        <div className="Buttons-DIv">
            <Button text={t.bodyFooter.doctorsbutton1} className="firstButton"
                to="/doctor-profile/" doctorId={doctorId}/>
            <Button text={t.bodyFooter.doctorsbutton2} className="secondButton" />
        </div>
    )
}

export default DoctorsButtons;