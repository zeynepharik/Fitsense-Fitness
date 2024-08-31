import React, { Component } from 'react'
import Hero from "../components/Hero";
export default class Trainers extends Component {
    componentDidMount() {
        
        if (window.$) {
          
          window.$('.owl-carousel').owlCarousel();
        }
      }
  render() {
    return (
        <>
             <Hero title="Trainers"/>
             <section className="team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">TEAM OF EXPERT COACHES</h2>
                        <p className="pq-section-description">Join our dedicated team of expert coaches committed to helping you reach your fitness goals. </p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="pq-team-box-slider pq-team-style-1">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="false" data-desk_num="3" data-lap_num="2" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                            <div className="item">
                                <div className="pq-team-box pq-style-1">
                                    <div className="pq-team-img">
                                        <img decoding="async" src="/images/team/slider/1.jpg" alt="team-image"/>
                                    </div>
                                    <div className="pq-team-info">
                                        <h5 className="pq-member-name">klison Fletcher</h5>
                                        <span className="pq-team-designation">crossfit expert</span>
                                        <div className="pq-team-social">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-team-box pq-style-1">
                                    <div className="pq-team-img">
                                        <img decoding="async" src="/images/team/slider/2.jpg" alt="team-image"/>
                                    </div>
                                    <div className="pq-team-info">
                                        <h5 className="pq-member-name">SYLVIA HOLT</h5>
                                        <span className="pq-team-designation">Gym Trainer</span>
                                        <div className="pq-team-social">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-team-box pq-style-1">
                                    <div className="pq-team-img">
                                        <img decoding="async" src="/images/team/slider/3.jpg" alt="team-image"/>
                                    </div>
                                    <div className="pq-team-info">
                                        <h5 className="pq-member-name">CARRIE SMITH</h5>
                                        <span className="pq-team-designation">Weights Trainer</span>
                                        <div className="pq-team-social">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-team-box pq-style-1">
                                    <div className="pq-team-img">
                                        <img decoding="async" src="/images/team/slider/4.jpg" alt="team-image"/>
                                    </div>
                                    <div className="pq-team-info">
                                        <h5 className="pq-member-name">CARRIE SMITH</h5>
                                        <span className="pq-team-designation">Weights Trainer</span>
                                        <div className="pq-team-social">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    <div className="marquee">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className="pq-marquee-main">
                        <div className="pq-marquee">
                            <ul className="marquee-content-items">
                                <li>fitness and gym</li>
                                <li>yoga service gym</li>
                                <li>health and gym</li>
                                <li>PURE GYM SPACE</li>
                                <li>CARDIO MAN</li>
                                <li>PURE GYM</li>
                            </ul>
                            <ul className="marquee-content-items">
                                <li>fitness and gym</li>
                                <li>yoga service gym</li>
                                <li>health and gym</li>
                                <li>PURE GYM SPACE</li>
                                <li>CARDIO MAN</li>
                                <li>PURE GYM</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        </>
    )
  }
}
