import "./DoctorProfile.css";
import { useCallback, useContext, useState } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";
import DoctorDiv from "./DoctorDiv";
import { useParams } from "react-router-dom";
import left from "./Photos/left-removebg-preview.png";
import right from "./Photos/right-removebg-preview.png";
import DoctorInfo from "./DoctorInfo";

function DoctorProfile() {
    const t = useContext(LanguageContext).t;
    const doctors = t.results;
    const { Id } = useParams();
    const [id, setId] = useState(Id);
    const fnLeft = useCallback(() => {
        if (id > 1) {
            setId((prev) => Number(prev) - 1)
        }
    }, [id]);
    const fnRight = useCallback(() => {
        if (id < 10) {
            setId((prev) => Number(prev) + 1)
        }
    }, [id]);

    const doctor = doctors.find((doc) => {
        return doc.id == id
    })
    if (!doctor) return null;

    return (
        <div className="allProfileDiv">
            <div key={doctor.id} className="profileDiv">
                <div className="allProfile">
                    <img className="left" src={left} alt="" onClick={fnLeft}></img>
                    <DoctorDiv first_name={doctor.first_name} last_name={doctor.last_name}
                        image={doctor.profile_image} profession={doctor.profession}
                        experience={doctor.excperience_start_year} price={doctor.price} />
                    <img className="left" src={right} alt="" onClick={fnRight}></img>
                </div>
            </div>
            <DoctorInfo full_description={doctor.full_description} description={doctor.description}/>
        </div>
    )
}

export default DoctorProfile;