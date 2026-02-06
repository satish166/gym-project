import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import aboutImage from './../../assets/images/breadcrumb-bg.jpg';

import './about-us.scss';
function AboutUs() {
    return (
        <>
           <section>
            <img src={aboutImage} alt="About Image" />
            <h1>About US</h1>
           </section>
        </>
    );
}
export default AboutUs;