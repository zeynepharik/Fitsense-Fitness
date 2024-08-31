import React, { Component } from 'react'
import Hero from "../components/Hero";
import { connect } from 'react-redux';
import { fetchBlogs, searchBlogs } from '../store/blogSlice';
import { Link } from 'react-router-dom';
class Main extends Component {
    
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
          <Hero title="Workouts"/>
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
    

    
    <section className="training pq-bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pq-section-title pq-style-1 text-center">
                        <h2 className="pq-section-main-title">SPECIAL TRAINING PROGMAM</h2>
                        <p className="pq-section-description">Elevate your fitness journey with our specialized training programs designed to meet your unique goals and needs. </p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="pq-service-box pq-style-3 text-center">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-3/grid/1.jpg" alt="service-image"/>
                            <div className="pq-service-info">
                                <span className="pq-service-icon">
                                    <i className="flaticon-excersice" aria-hidden="true"></i>
                                </span>
                                <h5 className="pq-service-title">BODY BALANCE</h5>
                                <p className="pq-service-description">Achieve harmony and strength with our body balance training.</p>
                                <div className="pq-btn-container">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-md-0">
                    <div className="pq-service-box pq-style-3 text-center active">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-3/grid/2.jpg" alt="service-image"/>
                            <div className="pq-service-info">
                                <span className="pq-service-icon">
                                    <i className="flaticon-gym" aria-hidden="true"></i>
                                </span>
                                <h5 className="pq-service-title">SELF DEFENSE</h5>
                                <p className="pq-service-description">Master essential self-defense skills with our expert-led training sessions.</p>
                                <div className="pq-btn-container">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-xl-0">
                    <div className="pq-service-box pq-style-3 text-center">
                        <div className="pq-service-img">
                            <img decoding="async" src="/images/service/service-box-3/grid/3.jpg" alt="service-image"/>
                            <div className="pq-service-info">
                                <span className="pq-service-icon">
                                    <i className="flaticon-exercise-2" aria-hidden="true"></i>
                                </span>
                                <h5 className="pq-service-title">PSYCHO</h5>
                                <p className="pq-service-description">Boost your mental strength with our targeted psycho training sessions.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    
    

    
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
    

    
    <div className="client pq-py-60 pq-bg-grey">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                    <div className="pq-client-box-slider pq-client-style-1 pq-py-60">
                        <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="5" data-lap_num="4" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false" data-loop="false" data-margin="30">
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/gallery">
                                        <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/gallery">
                                        <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/gallery">
                                        <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/1.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/gallery">
                                        <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img" className="pq-client-img"/>
                                        <img decoding="async" src="/images/client/slider/2.png" alt="pq-client-img" className="pq-client-hover-img"/>
                                        </Link>
                                </div>
                            </div>
                            <div className="item">
                                <div className="pq-client-box pq-client-style-1">
                                <Link to="/gallery">
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);
