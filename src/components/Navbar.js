import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/autorzy">Autorzy</NavLink>
                </li>
                <li>
                    <NavLink to="/wydawnictwa">Wydawnictwa</NavLink>
                </li>
                <li>
                    <NavLink to="/ksiazki">Książki</NavLink>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;