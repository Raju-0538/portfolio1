import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar() {
    return(
        <div className = 'main'>
        <li className='nav'>
            <ul><Link to = {"/"} className='cont'>Home</Link></ul>
            <ul><Link to={"/skill"} className='cont'>Skills</Link></ul>
            <ul><Link to={"/certifications"} className='cont'>Certificates</Link></ul>
            <ul><Link to={"/about"} className='cont'>About Me</Link></ul>
        </li>
    </div>
    )
}

export default Navbar;