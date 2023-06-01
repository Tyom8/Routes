import { useState } from "react";
import vector from "./Photos/Vector.png";
import Vector from "./Vector";


function User(props) {
    const [click, setClick] = useState(false);
    const { name } = props;
    const mouseOut = () => setClick(false);
    const mouseOver = () => setClick(true);
    return (
        <div className="userDiv">
            <div className="userBall"><span className="nameWord">{name[0]}</span></div>
            <h3 className="userName">{name}</h3>
            <div><img className="Vector" src={vector} onMouseOver={() => setClick(true)}  alt=""/></div>
            {
                click && <Vector mouseOut={mouseOut} mouseOver={mouseOver}/>
            }
        </div>

    )
};

export default User;