import React, { Component } from 'react'
import Hero from "../components/Hero";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs, searchBlogs } from '../store/blogSlice';
class About extends Component {
    componentDidMount() {
        
        this.props.fetchBlogs();
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
          <Hero title="About"  />
          <section className="gym">
        <div className="container">
            <div className="row align-items-center flex-column-reverse flex-xl-row">
                <div className="col-xl-6 mt-4 mt-xl-0 ps-xl-5">
                    <div className="pq-section-title pq-style-1">
                        <h2 className="pq-section-main-title">THE BEST FITNESS GYM IN TOWN</h2>
                        <p className="pq-section-description">Our gym offers top-notch facilities, experienced trainers, and a welcoming environment for everyone. Whether you're a beginner or an advanced athlete, we provide the tools and support you need to reach your fitness goals.</p>
                    </div>
                    <div className="row pq-mb-30">
                        <div className="col-lg-6 col-md-6 pe-xl-0">
                            <div className="pq-icon-box pq-style-2">
                                <div className="pq-icon">
                                    <i className="flaticon-excersice"></i>
                                </div>
                                <div className="pq-icon-box-content">
                                    <h6 className="pq-icon-box-title">MODERN MACHINE</h6>
                                    <p className="pq-icon-box-description">Our state-of-the-art equipment is designed to maximize your workouts. With the latest in fitness technology, you can train efficiently and effectively, targeting every muscle group.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-4 mt-md-0 ps-xl-0">
                            <div className="pq-icon-box pq-style-2">
                                <div className="pq-icon">
                                    <i className="flaticon-woman"></i>
                                </div>
                                <div className="pq-icon-box-content">
                                    <h6 className="pq-icon-box-title">Training Plan</h6>
                                    <p className="pq-icon-box-description">Our personalized training plans are tailored to fit your needs. Whether you want to lose weight, build muscle, or improve endurance, our expert trainers will guide you every step of the way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="pq-list-check pq-mb-30">
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
                    
                </div>
                <div className="col-xl-6">
                    <img src="/images/gym/1.jpg" className="img-fluid w-100" alt=""/>
                </div>
            </div>
        </div>
    </section>
    

    
    <section className="video-popup pq-bg-grey">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">PROVIDE SERVICE FOR BUILD YOUR BODY</h2>
                        <p className="pq-section-description">Unlock your full potential with our expert training and state-of-the-art facilities. Whether you're looking to build muscle, increase endurance, or improve overall fitness, our personalized programs are designed to help you achieve your goals efficiently. Join us and transform your body with professional guidance and support.</p>
                    </div>
                </div>
                <div className="col-lg-12 p-0 pq-mb-450">
                    <div className="pq-video-popup-img-2">
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
    </section>
    

    
    <section className="classNamees pq-bg-dark pq-pt-450">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">SET HIGH FITNESS GYM GOALS</h2>
                        <p className="pq-section-description">Push your limits and achieve your fitness aspirations with our tailored programs.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="pq-icon-box pq-style-6">
                        <div className="pq-icon">
                            <i className=" flaticon-lunges"></i>
                        </div>
                        <div className="pq-icon-box-content">
                            <h5 className="pq-icon-box-title">MODERN EQUIPMENT</h5>
                            <p className="pq-icon-box-description">Train with the latest, state-of-the-art fitness equipment for optimal results.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-md-0">
                    <div className="pq-icon-box pq-style-6">
                        <div className="pq-icon">
                            <i className=" flaticon-dumbbell-1"></i>
                        </div>
                        <div className="pq-icon-box-content">
                            <h5 className="pq-icon-box-title">TRAINING PLAN</h5>
                            <p className="pq-icon-box-description">Receive a personalized workout plan designed to fit your unique fitness needs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-xl-0">
                    <div className="pq-icon-box pq-style-6">
                        <div className="pq-icon">
                            <i className=" flaticon-cardio"></i>
                        </div>
                        <div className="pq-icon-box-content">
                            <h5 className="pq-icon-box-title">HEALTHY DIET</h5>
                            <p className="pq-icon-box-description">Enhance your performance with expert dietary advice and nutritious meal plans.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mt-4 mt-xl-0">
                    <div className="pq-icon-box pq-style-6">
                        <div className="pq-icon">
                            <i className=" flaticon-lunges"></i>
                        </div>
                        <div className="pq-icon-box-content">
                            <h5 className="pq-icon-box-title">SUCCESS GUARANTED</h5>
                            <p className="pq-icon-box-description">Achieve your fitness goals with our proven strategies and dedicated support.</p>
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
    

    
    <section className="service">
        <div className="container">
            <div className="row pq-mb-30">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">WE PROVIDE BEST SERVICES</h2>
                        <p className="pq-section-description">With professional trainers and state-of-the-art equipment, we're here to help you achieve your fitness goals. </p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pq-service-box pq-style-4 text-center">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-4/grid/1.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-excersice" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">BODY BALANCE</h4>
                            <p className="pq-service-description">Enhance your overall well-being with our comprehensive body balance programs designed to improve flexibility, strength, and mental focus.</p>
                            <div className="pq-btn-container">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-md-0">
                    <div className="pq-service-box pq-style-4 text-center">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-4/grid/2.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-dumbbell" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">SELF DEFENSE</h4>
                            <p className="pq-service-description">Empower yourself with our self-defense classes, where you’ll learn essential techniques to protect yourself and gain confidence in any situation.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-xl-0">
                    <div className="pq-service-box pq-style-4 text-center">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-4/grid/3.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-gym" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">KARDIO WORK</h4>
                            <p className="pq-service-description">Boost your cardiovascular health and with our dynamic cardio workouts that are tailored to push your limits and achieve your fitness goals.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pq-service-box pq-style-4 text-center">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-4/grid/3.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-boxing-gloves" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">WEIGHT LOSS</h4>
                            <p className="pq-service-description">Transform your body with our weight loss solutions, combining expert guidance, personalized plans, and motivational support to help you reach your ideal weight."</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-md-0">
                    <div className="pq-service-box pq-style-4 text-center">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-4/grid/1.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-sport" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">BODY PROGRESs</h4>
                            <p className="pq-service-description">Track and celebrate your fitness journey with our body progress assessments, designed to help you monitor improvements and stay motivated towards your goals.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-xl-0">
                    <div className="pq-service-box pq-style-4 text-center">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-4/grid/2.jpg" alt="service-image"/>
                            <span className="pq-service-icon">
                                <i className="flaticon-weight-lifting" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="pq-service-info">
                            <h4 className="pq-service-title">SELF CrossFit</h4>
                            <p className="pq-service-description">Challenge yourself with our CrossFit sessions, which blend strength training, cardio, and functional movements to maximize your performance and achieve peak fitness.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    <section className="quote pq-bg-grey">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    <img src="/images/map.png" className="img-fluid w-100" alt=""/>
                </div>
                <div className="col-xl-6 mt-4 mt-xl-0 ps-xl-5">
                    <div className="pq-section-title pq-style-1">
                        <h2 className="pq-section-main-title">request a quote</h2>
                        <p className="pq-section-description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                    <form className="pq-quote-form">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Enter Name"/>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Enter Email"/>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Enter Subject"/>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Enter Number"/>
                            </div>
                            <div className="col-lg-12">
                                <textarea cols="40" rows="10" placeholder="Enter Your Message"></textarea>
                            </div>
                            <div className="col-lg-12">
                                <a href="#" className="pq-button">SEND MESSAGE</a>
                            </div>
                        </div>
                    </form>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(About);
