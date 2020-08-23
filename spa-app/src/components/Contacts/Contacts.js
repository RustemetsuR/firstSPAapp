import React from 'react';
import './Contacts.css';
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';


const Contacts = props => {
    const toHome = () => {
        props.history.replace('/');
    }
    const toAboutUs = () => {
        props.history.push({
            pathname: '/aboutUs',
        })
    }
    return (
        <>
            <NavBar toHome={toHome} toAboutUs={toAboutUs} />
            <div className="container">
                <div className="contacts-div main-block">
                    <h1 className="contacts-title">
                        My contacts :
                    </h1>
                    <p className="info">Address : <i>Kyrgyzstan, Bishkek, 6th microdistrict</i></p>
                    <p className="info">Phone Number : <i>+996-558-948-248</i></p>
                    <p className="info">Email : <i>ibraimov.rustem2003@gmail.com</i></p>
                    <h2>
                        My social networks :
                    </h2>
                    <div className="social-webs-div">
                   <a className="links" href="https://steamcommunity.com/id/k1ngg4ever/" target="_blank" rel="noopener">
                       <FontAwesomeIcon icon={faSteam} size='4x' className="sw-icon"/>
                    </a> 
                    <a className="links" href="https://github.com/RustemetsuR" target="_blank" rel="noopener">
                       <FontAwesomeIcon icon={faGithub} size='4x' className="sw-icon" />
                    </a> 
                    <a className="links" href="https://vk.com/rstm2003" target="_blank" rel="noopener">
                       <FontAwesomeIcon icon={faVk} size='4x' className="sw-icon"/>
                    </a> 
                    </div>
                </div>

            </div>
        </>
    );

};


export default Contacts;