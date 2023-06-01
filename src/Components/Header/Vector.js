import myProfile from "./Photos/myprofile-removebg-preview.png"
import balance from "./Photos/balance-removebg-preview.png"
import faq from "./Photos/faq-removebg-preview.png"
import exit from "./Photos/exit-removebg-preview.png"
import { Link } from "react-router-dom";

function Vector(props) {
    const {mouseOut} = props;
    const {mouseOver} = props;
    window.onclick = ()=> {
        mouseOut()
    }
    return (
        <div className="vectorDiv" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    <div className="vectorDivs">
                        <img className="vectorImg" src={myProfile} alt=""></img>
                        <span className="vectorSpan">Мой профиль</span>
                    </div>
                    <div className="vectorDivs">
                        <img className="vectorImg2" src={balance} alt=""></img>
                        <span className="vectorSpan"><Link to="page-2">Попалнить баланс</Link></span>
                    </div>
                    <div className="vectorDivs">
                        <img className="vectorImg2" src={faq} alt=""></img>
                        <span className="vectorSpan">FAQ</span>
                    </div>
                    <div className="vectorDivs">
                        <img className="vectorImg" src={exit} alt=""></img>
                        <span className="vectorSpan">Выйти</span>
                    </div>
                </div>
    )
}

export default Vector;