import DoctorsLeftBody from "./DoctorsLeftBody";
import DoctorsButtons from "./DoctorsRightBody";

function DoctorsBody(props) {
    const {first_name,last_name,image,experience,profession,id,birth} = props;
    return (
        <div className="Doctors-Div">
            <DoctorsLeftBody first_name={first_name} last_name={last_name} image={image} experience={experience}
            profession={profession} birth={birth}/>
            <DoctorsButtons doctorId={id}/>
        </div>
    )
}

export default DoctorsBody;