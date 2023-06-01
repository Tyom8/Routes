import "./BodyBody.css"
import Doctor from "./PhotoBodyBody";
import TextBodyBody from "./TextBodyBody";

function BodyBody() {
    return (
        <div className="Body-Body">
            <div className="mini-Body-Body">
                <Doctor/>
                <TextBodyBody></TextBodyBody>
            </div>
        </div>
    )
}

export default BodyBody;