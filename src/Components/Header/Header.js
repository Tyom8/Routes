import { useContext } from "react";
import Href from "./HeaderHref";
import Logo from "./HeaderLogo";
import Notification from "./Notification";
import User from "./User";
import "./style.css";
import { LanguageContext } from "../../Contexts/LanguageContext";
import enFlag from "./Photos/United-Kingdom-flag-icon-removebg-preview.png";
import ruFlag from "./Photos/russia-flag-icon-removebg-preview.png";

function Header() {
    const value = useContext(LanguageContext);
    const setLocal = value.setLocal;
    const t = value.t;
    return (
        <div className="Header">
            <div className="LanguageKiks"></div>
            <div className="divHeader">
            <Logo/>
            <div className="Kiks-Component"></div>
            <Href name={t.header.href1}/>
            <Href name={t.header.href2}/>
            <Href name={t.header.href3}/>
            <Notification/>
            <User name={t.header.username}/>
            </div>
            <div className="Language">
                <img className="en" src={enFlag} alt="" onClick={()=> {
                    setLocal("en")
                }}></img>
                <img className="ru" src={ruFlag} alt="" onClick={()=> {
                    setLocal("ru")
                }}></img>
            </div>
        </div>
    )
};

export default Header;