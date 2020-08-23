import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NavBar = props => {
    return (
        <header>
            <div className="container">
                <div className="header-inner">
                   <FontAwesomeIcon icon={faHome} size='5x' className="logo" onClick={props.toHome}/>
                    <nav className="nav">
                        <ul className="nav-ul">
                            <li className='nav-item'><p onClick={props.toHome}>Home</p></li>
                            <li className='nav-item'><p onClick={props.toAboutUs}>About Me</p></li>
                            <li className='nav-item'><p onClick={props.toContacts}>Contacts</p></li>
                        </ul>
                    </nav>
                </div>

            </div>

        </header>
    );

};


export default NavBar;