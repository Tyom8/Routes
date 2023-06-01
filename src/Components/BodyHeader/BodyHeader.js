import "./BodyHeader.css";
import Picture from "./PictureBodyHeader";
import Texts from "./TextBodyHeader";

function BodyHeader() {
    return (
        <div className="BodyHeader">
            <div className="miniBody">
                <Texts/>
                <Picture/>
            </div>
        </div>
    )
}

export default BodyHeader;