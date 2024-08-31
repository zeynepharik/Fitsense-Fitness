import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <>
          <footer id="pq-footer">
        <div className="pq-footer-style-1">
            <div className="pq-footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="widget">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img src="/images/logos/footer-logo.png" className="pq-footer-logo" alt="fitsense-footer-logo"/>
                                        <p>Achieve your fitness goals with our expert guidance and personalized plans.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="widget">
                                <h4 className="footer-title">Useful Links</h4>
                                <div className="menu-footer-links-container">
                                <ul id="menu-footer-links" className="menu">
                                    <li className="menu-item">
                                    <Link to="/faq">FAQ</Link>
                                    </li>
                                    <li className="menu-item">
                                    <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        <div className="col-xl-3  col-md-6">
                            <div className="widget widget-port-1">
                                <h4 className="footer-title">Location</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <ul className="pq-contact">
                                            <li className="pq-footer-address">
                                                <i className="fa fa-map-marker"></i>
                                                <span>Themeforest, Envato HQ 24 Fifth st</span>
                                            </li>
                                            <li className="pq-footer-email">
                                                <i className="fa fa-phone"></i>
                                                <a href="mailto:Info@Peacefulthemes.Com">
                                                    <span>Info@Peacefulthemes.Com</span>
                                                </a>
                                            </li>
                                            <li className="pq-footer-phone">
                                                <i className="fa fa-envelope"></i>
                                                <a href="tel:+1800001658">
                                                    <span> +1800-001-658</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3  col-md-6">
                            <div className="widget">
                                <div className="pq-subscribe">
                                    <h4 className="footer-title">Subscribe</h4>
                                    <div className="pq-subscribe-from">
                                        <form className="pq-sign-up-form">
                                            <input type="email" name="EMAIL" placeholder="Your email address" className="form-control"/>
                                            <input className="submit" type="submit" value="Sign up"/>
                                            <i className="ion-ios-paperplane"></i>
                                        </form>
                                    </div>
                                    <p className="pq-subscribe-description">It is a long established fact that a reader will be distracted by the readable</p>
                                </div>
                                <div className="pq-footer-social">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-skype"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pq-copyright-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center">
                            <span className="pq-copyright">Copyright 2023 fitsense All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    

    
    <div id="back-to-top">
		<a className="top" id="top" href="#top">
            <i className="ion-ios-arrow-up"></i>
        </a>
	</div>
      </>
    )
  }
}
