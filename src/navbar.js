import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"><h1>Mental Wellness</h1></Link>
            <div className="links">
                <Link to="/"> Home </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;