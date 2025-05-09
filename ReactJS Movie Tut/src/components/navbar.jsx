import { Link } from "react-router-dom";
import '../css/Navbar.css'

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to={'/'}>Top 5 Football League Search</Link>
        </div>
        <div className="navbar-links">
            <Link to={'/'} className="nav-link">Premiere League</Link>
            <Link to={'/laliga'} className="nav-link">La Liga</Link>
            <Link to={'/seriea'} className="nav-link">Serie A</Link>
            <Link to={'/bundesliga'} className="nav-link">Bundesliga</Link>
            <Link to={'/ligue1'} className="nav-link">Ligue 1</Link>
            <Link to={'/favorites'} className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default Navbar