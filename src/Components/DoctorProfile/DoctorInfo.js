import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";
import Entry from "./Entrys";
import calendar from "./Photos/calendar.png"
import student from "./Photos/student.png";
import vasklicatelni from "./Photos/Group 542.png"
import plus from "./Photos/plus.png"

function DoctorInfo(props) {
    const t = useContext(LanguageContext).t;
    const {full_description,description} = props;
    return (
        <div className="DoctorInfo">
            <div className="leftInfo">
                <Entry text={t.doctorProfile.calen} src={calendar} bigText={t.doctorProfile.entry}/>
                <Entry text={t.doctorProfile.study} src={student} bigText={t.doctorProfile.education}/>
                <Entry text={description} src={vasklicatelni} bigText={t.doctorProfile.special}/>
                <Entry text={full_description} src={plus} bigText={t.doctorProfile.add}/>
            </div >
        </div>
    )
};

export default DoctorInfo;