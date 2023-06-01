import DoctorsHeaderComponents from "./Doctors-Header-Components";
import calendar from "./Photos/calendar-removebg-preview.png";
import clock from "./Photos/clock-removebg-preview.png";
import videocall from "./Photos/2-removebg-preview.png";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function DoctorsHeader() {
    const t = useContext(LanguageContext).t;
    return (
        <div className="DoctorsHeader">
            <DoctorsHeaderComponents text="03 Марта 2021" src={calendar} className="calendarDiv"/>
            <DoctorsHeaderComponents text="16:00" src={clock} className="clockDiv"/>
            <DoctorsHeaderComponents text="Видео связь" src={videocall} className="videoCall"/>
            <div className="state">
                <span>{t.bodyFooter.state}</span>
            </div>
        </div>
    )
}

export default DoctorsHeader;