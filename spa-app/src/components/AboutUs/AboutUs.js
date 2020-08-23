import React from 'react';
import './AboutUs.css';
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const AboutUs = props => {
    const toHome = () => {
        props.history.replace('/');
    }
    const toContacts = () => {
        props.history.push({
            pathname: '/contacts',
        })
    }
    return (
        <>
            <NavBar toHome={toHome} toContacts={toContacts} />
            <div className="container">
                <h1 className="hobby-title">My Hobbies : </h1>
                <div className="about-us-div main-block">
                    <div className="hobby-box">
                        <FontAwesomeIcon icon={faGamepad} size='8x' className="hobby-icon" />
                        <p className="hobby">
                            Gaming
                        </p>
                    </div>
                    <div className="hobby-box">
                        <FontAwesomeIcon icon={faFilm} size='8x' className="hobby-icon" />
                        <p className="hobby">
                            Movies
                        </p>
                    </div>
                    <div className="hobby-box">
                        <FontAwesomeIcon icon={faLaptopCode} size='8x' className="hobby-icon" />
                        <p className="hobby">
                            Programming
                        </p>
                    </div>
                    <div className="hobby-box">
                        <FontAwesomeIcon icon={faFutbol} size='8x' className="hobby-icon" />
                        <p className="hobby">
                            Sport
                        </p>
                    </div>
                </div>

            </div>
        </>
    );

};


export default AboutUs;