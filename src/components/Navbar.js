import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
    list-style-type: none;
    background-color: #900C3F;
`

const NavListItem = styled.li`
    padding: 5px;
    text-transform: uppercase;
    
    @media screen and (max-width: 585px) {
        margin-bottom: 10px;
    }
`

const Navbar = () => {
    return ( 
        <nav>
            <NavList>
                <NavListItem>
                    <NavLink to="/" className="nav-links">Strona Główna</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to="/autorzy" className="nav-links">Autorzy</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to="/wydawnictwa" className="nav-links">Wydawnictwa</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to="/ksiazki" className="nav-links">Książki</NavLink>
                </NavListItem>
            </NavList>
        </nav>
    );
}
 
export default Navbar;