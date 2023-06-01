import { useContext, useState } from "react";
import Doctors from "./Doctors";
import { LanguageContext } from "../../Contexts/LanguageContext";

function Footer(props) {
    const t = useContext(LanguageContext).t;
    const { boolean } = props;
    const [bool, setBool] = useState();
    const [bool2, setBool2] = useState();
    if (boolean) {
        return (
            <div className="AllDiv">
                <div className="Div">
                    <div>
                        <button className={bool ? "experienceFilter" : ""} onClick={() => {
                            setBool(true)
                            setBool2(false)
                        }}>{t.bodyFooter.sort1}</button>
                        <button className={bool2 ? "experienceFilter" : ""} onClick={() => {
                            setBool(false)
                            setBool2(true)
                        }}>{t.bodyFooter.sort2}</button>
                        <button onClick={() => {
                            setBool(false)
                            setBool2(false)
                        }}>{t.bodyFooter.sort3}</button>
                    </div>
                    <Doctors bool={bool} bool2={bool2} />
                </div>
            </div>
        )
    }
};

export default Footer;