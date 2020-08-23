import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';

const Home = props => {
    const toAboutUs = () => {
        props.history.push({
            pathname: '/aboutUs',
        })
    }
    const toContacts = () => {
        props.history.push({
            pathname: '/contacts',
        })
    }
    return (
        <>
            <NavBar toAboutUs={toAboutUs} toContacts={toContacts} />
            <div className="container">
                <div className="home-inner main-block">
                    <h1 className="home-title">This Site About Me</h1>
                </div>
            </div>
        </>
    );

};


export default Home;