import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import bannerImage from './../../assets/images/hero-1.jpg';
import appointmentBanner from './../../assets/images/banner-bg.jpg';
import gymMachine from './../../assets/images/gym-machine.svg';
import healthFood from './../../assets/images/health-food.svg';
import heartrate from './../../assets/images/heartrate.svg';
import dumble from './../../assets/images/dumble.svg';
import class1 from './../../assets/images/class-1.jpg';
import class2 from './../../assets/images/class-2.jpg';
import class3 from './../../assets/images/class-3.jpg';
import class4 from './../../assets/images/class-4.jpg';
import class5 from './../../assets/images/class-5.jpg';
import team1 from './../../assets/images/team-1.jpg';
import team2 from './../../assets/images/team-2.jpg';
import team3 from './../../assets/images/team-3.jpg';
import phoneImage from './../../assets/images/phone-image.svg';
import location from './../../assets/images/location.svg';
import mailIcon from './../../assets/images/mail-icon.svg';
import './home.scss';
function HomePage() {
    return (
        <>
            <section className="banner-section" data-aos="fade-up">
                <div className="banner-image">
                    <img src={bannerImage} alt="banner image" />
                </div>
                <div className="banner-content">
                    <h6>Shape Your Body</h6>
                    <h1>Be <strong>Strong</strong>  traning hard</h1>
                    <a href="" className="button button-primary">Get info</a>
                </div>
            </section>
            <section className="why-choose-us">
                <div className="container">
                    <h6 className="primary-heading">Why choose us?</h6>
                    <h2 className="primary-subheading">PUSH YOUR LIMITS FORWARD</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="choose-card" data-aos="fade-up">
                                <div className="image">
                                    <img src={gymMachine} alt="Gym Machine" />
                                </div>
                                <div className="card-content">
                                    <h4>Modern equipment</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="choose-card" data-aos="fade-up">
                                <div className="image">
                                    <img src={healthFood} alt="Health Food" />
                                </div>
                                <div className="card-content">
                                    <h4>Healthy nutrition plan</h4>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="choose-card" data-aos="fade-up">
                                <div className="image">
                                    <img src={dumble} alt="dumble" />
                                </div>
                                <div className="card-content">
                                    <h4>Proffesponal training plan</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="choose-card" data-aos="fade-up">
                                <div className="image">
                                    <img src={heartrate} alt="heartrate" />
                                </div>
                                <div className="card-content">
                                    <h4>Unique to your needs</h4>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="our-classes">
                <div className="container">
                    <h6 className="primary-heading"  data-aos="fade-up" data-aos-delay="300">Our Classes</h6>
                    <h2 className="primary-subheading" data-aos="fade-up" data-aos-delay="600">PUSH YOUR LIMITS FORWARD</h2>
                    <div className="row" data-aos="fade-up" data-aos-delay="800">
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="classes-card">
                                <div className="image">
                                    <img src={class1} alt="Gym Machine" />
                                </div>
                                <div className="card-content">
                                    <div className="left-content">
                                        <h6>STRENGTH</h6>
                                        <h3>Weightlifting</h3>
                                    </div>
                                    <div className="card-action">
                                        <div className="action-button">
                                            <a href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="classes-card">
                                <div className="image">
                                    <img src={class2} alt="Gym Machine" />
                                </div>
                                <div className="card-content">
                                    <div className="left-content">
                                        <h6>Cardio</h6>
                                        <h3>Indoor cycling</h3>
                                    </div>
                                    <div className="card-action">
                                        <div className="action-button">
                                            <a href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="classes-card">
                                <div className="image">
                                    <img src={class3} alt="Gym Machine" />
                                </div>
                                <div className="card-content">
                                    <div className="left-content">
                                        <h6>STRENGTH</h6>
                                        <h3>Kettlebell power</h3>
                                    </div>
                                    <div className="card-action">
                                        <div className="action-button">
                                            <a href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="classes-card" data-aos="fade-up" data-aos-delay="700">
                                <div className="image">
                                    <img src={class4} alt="Gym Machine" />
                                </div>
                                <div className="card-content">
                                    <div className="left-content">
                                        <h6>Cardio</h6>
                                        <h3>Indoor cycling</h3>
                                    </div>
                                    <div className="card-action">
                                        <div className="action-button">
                                            <a href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="classes-card" data-aos="fade-up" data-aos-delay="700">
                                <div className="image">
                                    <img src={class5} alt="Gym Machine" />
                                </div>
                                <div className="card-content">
                                    <div className="left-content">
                                        <h6>Training</h6>
                                        <h3>Boxing</h3>
                                    </div>
                                    <div className="card-action">
                                        <div className="action-button">
                                            <a href="#"><FontAwesomeIcon icon={faAngleRight} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="appointment" data-aos="fade-up" data-aos-delay="300">
                <div className="appointment-image">
                    <img src={appointmentBanner} alt="banner image" />
                </div>
                <div className="appointment-content">
                    <h2 data-aos="fade-up" data-aos-delay="300">registration now to get more deals</h2>
                    <h4 data-aos="fade-up" data-aos-delay="400">Where health, beauty and fitness meet.</h4>
                    <a href="#" className="button button-outline-primary" data-aos="fade-up" data-aos-delay="500">appointment</a>
                </div>
            </section>
            <section className="our-team">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-start  flex-wrap">
                        <div className="headings">
                            <h6 className="primary-heading" data-aos="fade-right" data-aos-delay="300">Our Team</h6>
                            <h2 className="primary-subheading" data-aos="fade-right" data-aos-delay="300">TRAIN WITH EXPERTS</h2>
                        </div>
                        <div className="action" data-aos="fade-left" data-aos-delay="300">
                            <a href="#" className="button button-outline-primary">Appointment</a>
                        </div>
                    </div>
                    <div className="our-team-details">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="classes-card" data-aos="fade-right" data-aos-delay="300">
                                    <div className="image">
                                        <img src={team1} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card" data-aos="fade-up" data-aos-delay="300">
                                    <div className="image">
                                        <img src={team2} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="classes-card" data-aos="fade-left" data-aos-delay="300">
                                    <div className="image">
                                        <img src={team3} alt="Gym Machine" />
                                    </div>
                                    <div className="card-content">
                                        <div className="left-content">
                                            <h6>Cardio</h6>
                                            <h3>Indoor cycling</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="contact-location" data-aos="fade-up" data-aos-delay="300">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-section">
                                <div className="image">
                                    <img src={location} alt="Gym Machine" />
                                </div>
                                <div className="content">
                                    <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-section">
                                <div className="image">
                                    <img src={phoneImage} alt="Gym Machine" />
                                </div>
                                <div className="content">
                                    <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-section">
                                <div className="image">
                                    <img src={mailIcon} alt="Gym Machine" />
                                </div>
                                <div className="content">
                                    <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default HomePage;