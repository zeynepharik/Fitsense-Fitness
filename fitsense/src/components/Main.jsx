import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs, searchBlogs } from '../store/blogSlice';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider'; 

class Main extends Component {
    
    componentDidMount() {
    
        this.props.fetchBlogs(); 
    
        if (window.$) {
          window.$('.owl-carousel').owlCarousel();
        }
      }
    
      componentDidUpdate(prevProps) {
        
        if (prevProps.filteredBlogs !== this.props.filteredBlogs && window.$) {
          window.$('.owl-carousel').owlCarousel();
        }
      }
      

  handleSearch = (searchKey) => {
    this.props.searchBlogs(searchKey);
  };

  render() {
    const { filteredBlogs, status, error } = this.props;

    if (status === 'loading') {
      return <p>Yükleniyor...</p>;
    }

    if (status === 'failed') {
      return <p>Hata: {error}</p>;
    }
    return (
      <> 
        <Slider />
        <div className="maquee">
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
    

    
    <section className="services pb-0 overflow-hidden">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">WE PROVIDE BEST SERVICES</h2>
                        <p className="pq-section-description">With professional trainers and state-of-the-art equipment, we're here to help you achieve your fitness goals. </p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="pq-service-box pq-style-1-slider pq-me-33 pq-pb-130">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="4" data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false" data-loop="true" data-margin="30">
                            <div className="item">
                                <div className="pq-service-box pq-style-1">
                                    <div className="pq-service-img">
                                        <img decoding="async" src="/images/service/service-box-1/slider/1.jpg" alt="service-image"/>
                                        <span className="pq-service-number">01 </span>
                                    </div>
                                    <div className="pq-service-info">
                                        <h5 className="pq-service-title">enthusiastic coach</h5>
                                        <p className="pq-service-description">Passionate about guiding you every step of the way to reach your fitness potential.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-service-box pq-style-1">
                                    <div className="pq-service-img">
                                        <img decoding="async" src="/images/service/service-box-1/slider/2.jpg" alt="service-image"/>
                                        <span className="pq-service-number">02</span>
                                    </div>
                                    <div className="pq-service-info">
                                        <h5 className="pq-service-title">GROUP FITNESS coach</h5>
                                        <p className="pq-service-description">Creating energy-filled classes that inspire and motivate everyone to push their limits together.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-service-box pq-style-1">
                                    <div className="pq-service-img">
                                        <img decoding="async" src="/images/service/service-box-1/slider/3.jpg" alt="service-image"/>
                                        <span className="pq-service-number">03</span>
                                    </div>
                                    <div className="pq-service-info">
                                        <h5 className="pq-service-title">WEIGHTS AND CARDIO </h5>
                                        <p className="pq-service-description">Combining strength and endurance training to build a balanced and powerful physique.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-service-box pq-style-1">
                                    <div className="pq-service-img">
                                        <img decoding="async" src="/images/service/service-box-1/slider/4.jpg" alt="service-image"/>
                                        <span className="pq-service-number">04</span>
                                    </div>
                                    <div className="pq-service-info">
                                        <h5 className="pq-service-title">WORKOUT and POWER 6</h5>
                                        <p className="pq-service-description">Maximize your potential with high-intensity sessions designed to build strength and endurance.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-service-box pq-style-1">
                                    <div className="pq-service-img">
                                        <img decoding="async" src="/images/service/service-box-1/slider/5.jpg" alt="service-image"/>
                                        <span className="pq-service-number">05</span>
                                    </div>
                                    <div className="pq-service-info">
                                        <h5 className="pq-service-title">ZUMBA Coach AEROBICS </h5>
                                        <p className="pq-service-description">Leading dynamic, dance-inspired workouts that make fitness fun and effective.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-service-box pq-style-1">
                                    <div className="pq-service-img">
                                        <img decoding="async" src="/images/service/service-box-1/slider/6.jpg" alt="service-image"/>
                                        <span className="pq-service-number">06</span>
                                    </div>
                                    <div className="pq-service-info">
                                        <h5 className="pq-service-title">WORKOUT and SPORTS</h5>
                                        <p className="pq-service-description">Elevate your game with tailored workouts that enhance performance and boost overall fitness.</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-service-box pq-style-1">
                                    <div className="pq-service-img">
                                        <img decoding="async" src="/images/service/service-box-1/slider/7.jpg" alt="service-image"/>
                                        <span className="pq-service-number">07</span>
                                    </div>
                                    <div className="pq-service-info">
                                        <h5 className="pq-service-title">PERSONAList AEROBICS</h5>
                                        <p className="pq-service-description">Customizing each session to fit your unique fitness needs and goals with personalized aerobic routines.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="pq-client-box-slider pq-client-style-1 pq-py-60">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="5" data-lap_num="4" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false" data-loop="false" data-margin="30">
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/workouts">
                                        <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/workouts">
                                        <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/workouts">
                                        <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/workouts">
                                        <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/workouts">
                                        <img decoding="async" src="/images/client/slider/3.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/3.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    <section className="strength pq-bg-dark">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    <img src="/images/strength/1.jpg" className="img-fluid w-100" alt=""/>
                </div>
                <div className="col-xl-6 mt-4 mt-xl-0 pq-ps-40">
                    <div className="pq-section-title pq-style-1">
                        <h2 className="pq-section-main-title">bodies of stemina strengh</h2>
                        <p className="pq-section-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its page when at its layout</p>
                    </div>
                    <p className="pq-text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                    <ul className="pq-list-check pq-mb-45">
                        <li>
                            <i className="fas fa-check"></i>
                            <span>HELP REDUCE STRESS, STRESS BODY BALANCE</span>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <span>IMPROVE MOOD EFECTIVILY SELF DEFENSE</span>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <span>FLEXIBILITY OF THE BODY PSYCHO</span>
                        </li>
                    </ul>
                    <Link className="pq-button pq-button-flat" to="/workouts">
                        <span className="pq-button-text">read more</span>
                    </Link>

                </div>
            </div>
        </div>
    </section>
    

    
    <div className="marquee">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className="pq-marquee-main ">
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
    

    
    <section className="why-us">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">WHY CHOOSE US</h2>
                        <p className="pq-section-description">Experience top-tier fitness solutions that are tailored to your needs. Our dedicated team ensures you receive the best personalized care and support to achieve your goals.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pq-service-box pq-style-2 text-center">
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">BODY BALANCE</h4>
                            <p className="pq-service-description">Achieve a harmonious blend of strength, flexibility, and posture with our expertly designed body balance programs. Perfect for enhancing overall wellness and core stability.</p>
                        </div>
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-2/grid/1.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-excersice" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-md-0">
                    <div className="pq-service-box pq-style-2 text-center">
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">SELF DEFENSE</h4>
                            <p className="pq-service-description">Gain confidence and practical skills with our self-defense classes. Our expert instructors teach effective techniques to protect yourself and improve your personal safety.</p>
                        </div>
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-2/grid/2.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-gym" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-xl-0">
                    <div className="pq-service-box pq-style-2 text-center">
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">Kardio Work</h4>
                            <p className="pq-service-description">Boost your cardiovascular health and endurance with our high-energy cardio workouts. Designed to challenge and motivate, these sessions help you stay fit and active.</p>
                        </div>
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-2/grid/3.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-stationary-bike" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    <section className="portfolio pq-bg-grey">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1  text-center">
                        <h2 className="pq-section-main-title">VIEW OUR GALLERY</h2>
                        <p className="pq-section-description">Explore a snapshot of our dynamic fitness environment and see our state-of-the-art equipment, engaging classes, and enthusiastic community in action.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 p-xl-0">
                    <div className="pq-portfoliobox pq-portfoliobox-style-1 center-owl-carousel">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="2" data-lap_num="2" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="false" data-loop="true" data-margin="30">
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                    
                                            <img decoding="async" src="/images/portfolio/slider/1.jpg" alt="portfolio-slider"/>
                                        
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                    
                                        <img decoding="async" src="/images/portfolio/slider/2.jpg" alt="portfolio-slider"/>
                                    
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                   
                                            <img decoding="async" src="/images/portfolio/slider/3.jpg" alt="portfolio-slider"/>

                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                    
                                            <img decoding="async" src="/images/portfolio/slider/4.jpg" alt="portfolio-slider"/>
                                        
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                    
                                            <img decoding="async" src="/images/portfolio/slider/5.jpg" alt="portfolio-slider"/>
                                        
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                    
                                            <img decoding="async" src="/images/portfolio/slider/6.jpg" alt="portfolio-slider"/>
                                        
                                    
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                    
    <img decoding="async" src="/images/portfolio/slider/7.jpg" alt="portfolio-slider"/>
  
                                    
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                    
    <img decoding="async" src="/images/portfolio/slider/8.jpg" alt="portfolio-slider"/>
  
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                    
    <img decoding="async" src="/images/portfolio/slider/9.jpg" alt="portfolio-slider"/>
  
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-portfoliobox-1 pq-hover-slide">
                                   
    <img decoding="async" src="/images/portfolio/slider/2.jpg" alt="portfolio-slider"/>
  
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
    

    
    
    

    
    <div className="video-popup">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className="pq-video-popup-img-1">
                        <div className="pq-popup-video-block pq-popup-style-2">
                            <div className="pq-video-icon">
                                <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" className="pq-video default popup-youtube">
                                    <i aria-hidden="true" className="ion ion-play"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
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
    

    
    
    

    
    <section className="pricing-plan pq-bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">CHOOSE YOUR PRICING PLAN</h2>
                        <p className="pq-section-description">Explore our diverse fitness packages and find the perfect plan to achieve your goals. </p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="pq-advance-tab">
                        <div className="nav nav-tabs nav-fill" id="advance-nav-tab" role="tablist">
                            <a className="pq-tabs nav-item nav-link active" id="advance-nav-home-0" data-bs-toggle="tab" href="#advance-nav-0" role="tab" aria-controls="advance-nav-home-0" aria-selected="true">Monthly</a>
                            <a className="pq-tabs nav-item nav-link" id="advance-nav-home-1" data-bs-toggle="tab" href="#advance-nav-1" role="tab" aria-controls="advance-nav-home-1" aria-selected="false">Yearly</a>
                        </div>
                        <div className="tab-content" id="advance-nav-tabContent">
                            <div className="pq-advance-tab-content tab-pane fade active show" id="advance-nav-0" role="tabpanel" aria-labelledby="advance-nav-home-0">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pq-pricing-plan pq-style-1">
                                            <div className="pq-pricing-head">
                                                <h5 className="pq-pricing-title">Basic Plan </h5>
                                                <span className="pq-pricing-subtitle"> For Small Teams Just Getting Started</span>
                                                <div className="pq-price">
                                                    <span className="pq-amount">$59</span>
                                                    <span className="price-month">/ Monthly</span>
                                                </div>
                                            </div>
                                            <ul className="pq-pricing-list">
                                                <li className="">
                                                    <span> Unlimited access to the gym</span>
                                                </li>
                                                <li className="">
                                                    <span> FREE drinking package</span>
                                                </li>
                                                <li className="active">
                                                    <span> Six Month memberships</span>
                                                </li>
                                                <li className="">
                                                    <span> 3 Month Free personal training</span>
                                                </li>
                                                <li className="">
                                                    <span> Exclusive Member Discounts</span>
                                                </li>
                                                <li className="">
                                                    <span> 20 Sessions Free Massage</span>
                                                </li>
                                            </ul>
                                            <div className="pq-btn-container">
                                                <div className="pq-button-block">
                                                <Link className="pq-button pq-button-flat" to="/reservationform">
                                  <span className="pq-button-text">Purchase Plan</span>
                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-md-0">
                                        <div className="pq-pricing-plan pq-style-1">
                                            <div className="pq-pricing-head">
                                                <h5 className="pq-pricing-title">STANDARD Plan </h5>
                                                <span className="pq-pricing-subtitle">For Growing Teams Ready to Scale</span>
                                                <div className="pq-price">
                                                    <span className="pq-amount">$39</span>
                                                    <span className="price-month">/ Monthly</span>
                                                </div>
                                            </div>
                                            <ul className="pq-pricing-list">
                                                <li className="">
                                                    <span> Unlimited access to the gym</span>
                                                </li>
                                                <li className="">
                                                    <span> FREE drinking package</span>
                                                </li>
                                                <li className="">
                                                    <span> Exclusive Member Discounts</span>
                                                </li>
                                                <li className="">
                                                    <span> 3 Month Free personal training</span>
                                                </li>
                                                <li className="">
                                                    <span> Six Month memberships</span>
                                                </li>
                                                <li className="active">
                                                    <span> 20 Sessions Free Massage</span>
                                                </li>
                                            </ul>
                                            <div className="pq-btn-container">
                                                <div className="pq-button-block">
                                                <Link className="pq-button pq-button-flat" to="/reservationform">
                                  <span className="pq-button-text">Purchase Plan</span>
                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-xl-0">
                                        <div className="pq-pricing-plan pq-style-1">
                                            <div className="pq-pricing-head">
                                                <h5 className="pq-pricing-title">BUSINESS Plan </h5>
                                                <span className="pq-pricing-subtitle"> For Established Teams with  Needs</span>
                                                <div className="pq-price">
                                                    <span className="pq-amount">$49</span>
                                                    <span className="price-month">/ Monthly</span>
                                                </div>
                                            </div>
                                            <ul className="pq-pricing-list">
                                                <li className="">
                                                    <span> Unlimited access to the gym</span>
                                                </li>
                                                <li className="active">
                                                    <span> FREE drinking package</span>
                                                </li>
                                                <li className="">
                                                    <span> Six Month memberships</span>
                                                </li>
                                                <li className="">
                                                    <span> 3 Month Free personal training</span>
                                                </li>
                                                <li className="">
                                                    <span> Exclusive Member Discounts</span>
                                                </li>
                                                <li className="">
                                                    <span> Free Group Fitness Classes</span>
                                                </li>
                                            </ul>
                                            <div className="pq-btn-container">
                                                <div className="pq-button-block">
                                                <Link className="pq-button pq-button-flat" to="/reservationform">
                                  <span className="pq-button-text">Purchase Plan</span>
                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pq-advance-tab-content tab-pane fade" id="advance-nav-1" role="tabpanel" aria-labelledby="advance-nav-home-1">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pq-pricing-plan pq-style-1">
                                            <div className="pq-pricing-head">
                                                <h5 className="pq-pricing-title">Basic Plan </h5>
                                                <span className="pq-pricing-subtitle"> For Small Teams Just Getting Started</span>
                                                <div className="pq-price">
                                                    <span className="pq-amount">$99</span>
                                                    <span className="price-month">/ Yearly</span>
                                                </div>
                                            </div>
                                            <ul className="pq-pricing-list">
                                                <li className="">
                                                    <span> Unlimited access to the gym</span>
                                                </li>
                                                <li className="">
                                                    <span> FREE drinking package</span>
                                                </li>
                                                <li className="active">
                                                    <span> Six Month memberships</span>
                                                </li>
                                                <li className="">
                                                    <span> 3 Month Free personal training</span>
                                                </li>
                                                <li className="">
                                                    <span> Exclusive Member Discounts</span>
                                                </li>
                                                <li className="">
                                                    <span> 20 Sessions Free Massage</span>
                                                </li>
                                            </ul>
                                            <div className="pq-btn-container">
                                                <div className="pq-button-block">
                                                <Link className="pq-button pq-button-flat" to="/reservationform">
                                  <span className="pq-button-text">Purchase Plan</span>
                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-md-0">
                                        <div className="pq-pricing-plan pq-style-1">
                                            <div className="pq-pricing-head">
                                                <h5 className="pq-pricing-title">STANDARD Plan </h5>
                                                <span className="pq-pricing-subtitle"> For Growing Teams Ready to Scale</span>
                                                <div className="pq-price">
                                                    <span className="pq-amount">$79</span>
                                                    <span className="price-month">/ Yearly</span>
                                                </div>
                                            </div>
                                            <ul className="pq-pricing-list">
                                                <li className="">
                                                    <span> Unlimited access to the gym</span>
                                                </li>
                                                <li className="">
                                                    <span> FREE drinking package</span>
                                                </li>
                                                <li className="">
                                                    <span> Six Month memberships</span>
                                                </li>
                                                <li className="">
                                                    <span> 3 Month Free personal training</span>
                                                </li>
                                                <li className="">
                                                    <span> Exclusive Member Discounts</span>
                                                </li>
                                                <li className="active">
                                                    <span> 20 Sessions Free Massage</span>
                                                </li>
                                            </ul>
                                            <div className="pq-btn-container">
                                                <div className="pq-button-block">
                                                <Link className="pq-button pq-button-flat" to="/reservationform">
                                  <span className="pq-button-text">Purchase Plan</span>
                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-xl-0">
                                        <div className="pq-pricing-plan pq-style-1">
                                            <div className="pq-pricing-head">
                                                <h5 className="pq-pricing-title">BUSINESS Plan </h5>
                                                <span className="pq-pricing-subtitle"> For Established Teams with  Needs</span>
                                                <div className="pq-price">
                                                    <span className="pq-amount">$89</span>
                                                    <span className="price-month">/ Yearly</span>
                                                </div>
                                            </div>
                                            <ul className="pq-pricing-list">
                                                <li className="">
                                                    <span> Unlimited access to the gym</span>
                                                </li>
                                                <li className="active">
                                                    <span> FREE drinking package</span>
                                                </li>
                                                <li className="">
                                                    <span> Six Month memberships</span>
                                                </li>
                                                <li className="">
                                                    <span> 3 Month Free personal training</span>
                                                </li>
                                                <li className="">
                                                    <span> Six Month memberships</span>
                                                </li>
                                                <li className="">
                                                    <span> Free Group Fitness Classes</span>
                                                </li>
                                            </ul>
                                            <div className="pq-btn-container">
                                                <div className="pq-button-block">
                                                <Link className="pq-button pq-button-flat" to="/reservationform">
                                  <span className="pq-button-text">Purchase Plan</span>
                                </Link>
                                                </div>
                                            </div>
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
    

    
    <section className="testimonial">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">OUR CLIENT SAY</h2>
                        <p className="pq-section-description">Our client requests that the section about fitness be detailed. </p>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="pq-testimonial-box-slider pq-style-1">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="1" data-lap_num="1" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="false" data-loop="true" data-margin="30">
                            <div className="item">
                                <div className="pq-testimonial-box pq-style-1 text-center">
                                    <div className="pq-testimonial-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="pq-testimonial-info">
                                        <div className="pq-testimonial-content">
                                            <p className="pq-testimonial-description">To achieve long-term fitness success, it’s crucial to understand that exercise is only one component of a healthy lifestyle. Nutrition plays a significant role in supporting physical activity and recovery. Consuming a balanced diet rich in vitamins, minerals, and protein can enhance workout performance and aid in muscle repair. Hydration is equally important as it helps in maintaining energy levels and preventing dehydration during intense workouts. Combining proper nutrition with regular exercise will help you reach your fitness goals more effectively and sustainably.</p>
                                        </div>
                                    </div>
                                    <div className="pq-testimonial-meta">
                                        <h5 className="pq-testmonial-title">James Lives</h5>
                                        <span className="pq-testimonial-desc">Personal Tranier</span>
                                    </div>
                                    <div className="pq-testimonial-media">
                                        <div className="pq-testimonial-img">
                                            <img decoding="async" src="/images/testimonial/slider/1.jpg" alt="testimonial-image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-testimonial-box pq-style-1 text-center">
                                    <div className="pq-testimonial-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="pq-testimonial-info">
                                        <div className="pq-testimonial-content">
                                            <p className="pq-testimonial-description">Fitness is not just about lifting weights or running miles; it’s about cultivating a lifestyle that supports your physical and mental health. Incorporating diverse types of exercise, such as yoga, pilates, and high-intensity interval training (HIIT), can address different aspects of fitness, from flexibility to cardiovascular endurance. Each type of workout offers unique benefits and helps in targeting specific fitness goals. A well-rounded approach ensures that you do not only improve strength and stamina but also prevent injuries by promoting balanced muscle development and joint stability.</p>
                                        </div>
                                    </div>
                                    <div className="pq-testimonial-meta">
                                        <h5 className="pq-testmonial-title">Alex Snax</h5>
                                        <span className="pq-testimonial-desc">Fitness Tranier</span>
                                    </div>
                                    <div className="pq-testimonial-media">
                                        <div className="pq-testimonial-img">
                                            <img decoding="async"
                                                src="/images/testimonial/slider/2.jpg" alt="testimonial-image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-testimonial-box pq-style-1 text-center">
                                    <div className="pq-testimonial-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="pq-testimonial-info">
                                        <div className="pq-testimonial-content">
                                            <p className="pq-testimonial-description">A commitment to fitness incredible involves more than just hitting the gym regularly; it requires a holistic approach to health and wellness. This means paying attention to rest and recovery as well, which are vital for allowing the body to repair and strengthen. Proper sleep, stress management, and self-care practices are essential in supporting your fitness journey. Embracing a lifestyle that values rest, recovery, and mental health alongside physical training will not only enhance your performance but also lead to a more balanced and fulfilling life effectively and sustainably.</p>
                                        </div>
                                    </div>
                                    <div className="pq-testimonial-meta">
                                        <h5 className="pq-testmonial-title">Stive Alex</h5>
                                        <span className="pq-testimonial-desc">Yoga Mentor</span>
                                    </div>
                                    <div className="pq-testimonial-media">
                                        <div className="pq-testimonial-img">
                                            <img decoding="async" src="/images/testimonial/slider/3.jpg" alt="testimonial-image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-testimonial-box pq-style-1 text-center">
                                    <div className="pq-testimonial-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <div className="pq-testimonial-info">
                                        <div className="pq-testimonial-content">
                                            <p className="pq-testimonial-description">To achieve long-term fitness success, it’s crucial to understand that exercise is only one component of a healthy lifestyle. Nutrition plays a significant role in supporting physical activity and recovery. Consuming a balanced diet rich in vitamins, minerals, and protein can enhance workout performance and aid in muscle repair. Hydration is equally important as it helps in maintaining energy levels and preventing dehydration during intense workouts. Combining proper nutrition with regular exercise will help you reach your fitness goals more effectively and sustainably.</p>
                                        </div>
                                    </div>
                                    <div className="pq-testimonial-meta">
                                        <h5 className="pq-testmonial-title">James Lives</h5>
                                        <span className="pq-testimonial-desc">Ceo</span>
                                    </div>
                                    <div className="pq-testimonial-media">
                                        <div className="pq-testimonial-img">
                                            <img decoding="async" src="/images/testimonial/slider/4.jpg" alt="testimonial-image"/>
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
    

    
    <section className="blog pq-bg-grey">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="pq-section-title pq-style-1 text-center">
                    <h2 className="pq-section-main-title">OUR LATEST BLOG</h2>
                    <p className="pq-section-description">
                        Stay updated with our latest fitness tips, workouts, and wellness insights in our blog.
                    </p>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="pq-blog">
                    <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="3" data-lap_num="2"
                      data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false" data-loop="true" data-margin="30">
                        {filteredBlogs.map(blog => (
                            <div className="item" key={blog.id}>
                                <div className="pq-blog-post">
                                    <div className="pq-post-media">
                                        <img decoding="async" src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className="pq-blog-contain">
                                        <div className="pq-post-category">
                                            <Link to={`/blog/${blog.link}`}>
                                                {blog.category}
                                            </Link>
                                        </div>
                                        <h5 className="pq-blog-title">
                                            <Link to={`/blog/${blog.link}`}>
                                                {blog.title}
                                            </Link>
                                        </h5>
                                        <div className="pq-post-meta">
                                            <ul>
                                                <li className="pq-post-meta">
                                                    <Link to={`/blog/${blog.link}`}>
                                                        {blog.date}
                                                    </Link>
                                                </li>
                                                <li className="pq-post-comment">
                                                    <Link to={`/blog/${blog.link}`}>
                                                        {blog.comments}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    
      
      </>
    )
  }
}
const mapStateToProps = (state) => ({
    filteredBlogs: state.blogs.filteredBlogs,
    status: state.blogs.status,
    error: state.blogs.error,
  });
  
  const mapDispatchToProps = {
    fetchBlogs,
    searchBlogs,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);
