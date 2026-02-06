import React from "react";
import BrandLogo from './../../assets/images/logo.png';
import facebook from './../../assets/images/facebook.svg';
import insta from './../../assets/images/insta.svg';
import twitter from './../../assets/images/twitter.svg';
import youtube from './../../assets/images/youtube.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import './header.scss';

function Header() {
    return (
        <>

            <header className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"> <img src={BrandLogo} alt="brand logo" /></Link>
                        <div className="d-flex align-items-center">
                            <div className="search-section d-lg-none">
                                <div className="search">
                                    <button className="search-button" type="button" class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                                </div>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>


                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                   <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about.html" className="nav-link">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Classes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Our Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Pages</Link>
                                    <div className="submenu">
                                        <ul class="dropdown">
                                            <li><a href="./about-us.html">About us</a></li>
                                            <li><a href="./class-timetable.html">Classes timetable</a></li>
                                            <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
                                            <li><a href="./team.html">Our team</a></li>
                                            <li><a href="./gallery.html">Gallery</a></li>
                                            <li><a href="./blog.html">Our blog</a></li>
                                            <li><a href="./404.html">404</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                     <Link to="/" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <div className="social-menu">
                                <div className="search-section d-none d-lg-block">
                                    <div className="search">
                                        <button className="search-button" type="button" class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </div>
                                <div className="social-media-icons">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={facebook} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={twitter} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={youtube} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={insta} alt="" />
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </nav>

            </header>
            <div class=" search-modal modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1> */}
                            <button type="button" class="btn-close m-auto" data-bs-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="search-input">
                                <input type="search" placeholder="Search Here......" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;