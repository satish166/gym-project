import React from "react";
import bannerImage from './../../assets/images/hero-1.jpg';
import './home.scss';
function HomePage() {
    return(
        <>
            <section className="banner-section">
                <div className="banner-image">
                    <img src={bannerImage} alt="" />
                </div>
                <div className="banner-content">
                    <h6>Shape Your Body</h6>
                    <h1>Be <strong>Strong</strong>  traning hard</h1>
                    <a href="" className="button button-primary">Get info</a>
                </div>
            </section>
        </>
    );
}
export default HomePage;