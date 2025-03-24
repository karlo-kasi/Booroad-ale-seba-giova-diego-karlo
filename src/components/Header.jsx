import { NavLink } from "react-router-dom"
import Logo from "../assets/imgs/booRoad.png"

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="nav navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">
                        <img className="w-50" src={Logo} alt="Logo" />
                    </NavLink>
                    <NavLink className="nav-item nav-link" to='/'>
                        Home
                    </NavLink>
                    <NavLink className="nav-item nav-link" to='/rubrica'>
                        Rubrica
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}