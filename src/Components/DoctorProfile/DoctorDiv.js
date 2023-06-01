import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";
import Hrefs from "./Hrefs";

function DoctorDiv(props) {
    const { image, first_name, last_name, profession, experience,price } = props;
    const t = useContext(LanguageContext).t;
    const year = new Date().getFullYear();
    return (
        <div className="allDoctor-Div">
            <Hrefs/>
            <div className="Doctor-Div2">
                <div className="leftDiv">
                    <div className="logo-Div">
                        <img src={image} className="Doctors-Img2"></img>
                    </div>
                    <div className="text-Div">
                        <h2 className="white-Text">{first_name + " " + last_name}</h2>
                        <h3 className="white-Text">{profession}</h3>
                        <span className="white-Text">{t.bodyFooter.experience + " "} 
                        {year - experience} {t.bodyFooter.year}</span>
                    </div>
                </div>
                <div className="rightDiv">
                    <h4>{price + " ₽ / "} {t.doctorProfile.consultation + " 30" + t.doctorProfile.minute}</h4>
                </div>
            </div>
        </div>
    )
};

export default DoctorDiv;