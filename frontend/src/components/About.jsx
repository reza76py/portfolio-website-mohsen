import React from "react";
import "../styles/styles.css"; // Reuse existing styles

const About = () => {
    return (
        <div className="container">
            <h1 className="h1">About Us</h1>
            <p className="about-text">
                Welcome to the Music App! Our goal is to bring you an interactive platform 
                to enjoy and explore a variety of audio tracks. This app is built using 
                React for the frontend and Django for the backend.
            </p>
            <p className="about-text">
                We aim to provide users with an easy-to-use interface and seamless playback experience. 
                Explore our growing collection of music and enjoy the simplicity!
            </p>
            <p className="about-text">
                <strong>Technologies Used:</strong>
                <ul style={{ textAlign: "left" }}>
                    <li>React.js - Frontend</li>
                    <li>Django REST Framework - Backend API</li>
                    <li>CSS - Styling</li>
                </ul>
            </p>
        </div>
    );
};

export default About;
