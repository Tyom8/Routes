import girl from "./Images/Girl.png"
import rectangle from "./Images/Rectangle 141.png"
import rectangle2 from "./Images/Rectangle 142.png"
import rectangle3 from "./Images/Rectangle 143.png"

function Picture() {
    return (
        <div className="Picture">
            <img src={girl} alt="" className="girl"></img>
            <img src={rectangle} alt="" className="rectangle1"></img>
            <img src={rectangle2} alt="" className="rectangle2"></img>
            <img src={rectangle3} alt="" className="rectangle3"></img>
        </div>
    )
}

export default Picture;