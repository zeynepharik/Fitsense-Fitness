import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
    handleMenuToggle = () => {
        console.log('Menu toggle clicked');
        const sidebar = document.querySelector('.pq-sidebar');
        sidebar.classList.toggle('open');
      };
  render() {
    return (
        <>
        <div className="pq-background-overlay"></div>
    
    <header id="pq-header" className="pq-header-style-1  pq-has-sticky">
        <div className="pq-header-diff-block">
            <div className="row g-0">
                <div className="col-lg-12">
                    <div className="pq-top-header top-style-1">
                        <div className="container-fluid p-0">
                            <div className="row flex-row-reverse">
                                <div className="col-md-6 text-right">
                                    <div className="pq-top-right text-right ">
                                        <div className="pq-header-social">
                                            <ul>
                                                <li>
                                                    Follow Us :
                                                </li>
                                                <li>
                                                    <a href="#">Facebook</a>
                                                </li>
                                                <li>
                                                    <a href="#">Instagram</a>
                                                </li>
                                                <li>
                                                    <a href="#">Twitter</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="pq-header-contact ">
                                        <ul>
                                            <li>
                                                <i className="fas fa-envelope"></i>
                                                <span>Themeforest, Envato HQ 24 Fifth st</span>
                                            </li>
                                            <li>
                                                <a href="tel:+1800001658">
                                                    <i className="fas fa-phone"></i>
                                                    <span> +1800-001-658</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pq-bottom-header">
                        <div className="row g-0">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand">
                                    <Link to="/">
                                        <img className="img-fluid logo" src="/images/logos/logo.png" alt="fitsense" />
                                    </Link>
                                </a>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div id="pq-menu-contain" className="pq-menu-contain">
                                            <ul id="pq-main-menu" className="navbar-nav ml-auto">
                                                <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children">
                                                <Link to="/">Home</Link>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                <Link to="/about">About</Link>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                </li>    
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="/">Services / Programs</a>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    <ul className="sub-menu">
                                                    <li className="menu-item">
                                                        <Link to="/reservation">Class Timetable</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                        <Link to="/workouts">Workouts</Link>
                                                        </li>
                                                        
                                                        <li className="menu-item">
                                                        <Link to="/trainers">Trainers</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                        <Link to="/gallery">Gallery</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                <Link to="/pricingplans">Pricing Plans</Link>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                <Link to="/blog">Blog</Link>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                <Link to="/faq">Faq</Link>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                    
                                                </li>
                                                <li className="menu-item">
                                                <Link to="/contact">Contact</Link>
                                                    <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
      
      </>
    )
  }
}
