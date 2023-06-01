import { Link } from "react-router-dom";
import logo from "./Photos/logo.png"

function Logo() {
    return <Link to="/"><img src={logo} alt=""></img></Link>
}

export default Logo;
