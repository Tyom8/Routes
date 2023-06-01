import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function DoctorsLeftBody(props) {
    const t = useContext(LanguageContext).t;
    const year = new Date().getFullYear();
    const {first_name,last_name,image,experience,profession,birth} = props;
    return (

        <div className="Left-Body">
            <div className="Doctors-Icon-Div">
                <img className="Doctors-Img" src={image} alt=""></img>
            </div>
            <div className="Text-Body">
                <h5 className="h5">{first_name + " " + last_name}</h5>
                <span className="profession">{profession}</span>
                <span>{t.bodyFooter.experience} {year - experience} {t.bodyFooter.year}</span>
                <span>{birth.slice(0,4) + t.doctorProfile.birthYear}</span>
            </div>
        </div>
    )
}

export default DoctorsLeftBody;