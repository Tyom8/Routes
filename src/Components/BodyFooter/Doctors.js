import DoctorsHeader from "./Doctors-Header";
import DoctorsBody from "./DoctorsBody";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function Doctors(props) {
    const t = useContext(LanguageContext).t;
    let doctors = t.results;
    const {bool, bool2} = props;
    if(bool2 === true) {
        doctors = doctors.sort((a, b) => a.date_of_birth.slice(0,4) < b.date_of_birth.slice(0,4) ? 1 : -1);
    }else if(bool === true) {
        doctors = doctors.sort((a, b) => a.excperience_start_year > b.excperience_start_year ? 1 : -1);
    }else if (bool2 === false && bool === false) {
        doctors = doctors.sort((a, b) => a.id > b.id ? 1 : -1);
    }

    return (
        doctors.map((doctor) => {
            return (
                <div key={doctor.id} className="Doctors">
                    <DoctorsHeader />
                    <DoctorsBody first_name={doctor.first_name} last_name={doctor.last_name}
                        image={doctor.profile_image} experience={doctor.excperience_start_year}
                        profession={doctor.profession} id={doctor.id} birth={doctor.date_of_birth}/>
                </div>
            )
        })
    )
}

export default Doctors;