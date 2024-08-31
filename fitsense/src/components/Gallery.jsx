import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolios } from '../store/gallerySlice';
import Hero from "../components/Hero";
import { Link } from 'react-router-dom';

class Gallery extends Component {
  componentDidMount() {
    const { fetchPortfolios } = this.props;
    fetchPortfolios();

    
    if (window.$) {
      window.$('.owl-carousel').owlCarousel();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.portfolios !== this.props.portfolios && window.$) {
      window.$('.owl-carousel').owlCarousel();
    }
  }

  render() {
    const { portfolios, status, error } = this.props;

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
      <>
        <Hero title="Gallery" />
        <section className="three-column-slider">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="pq-portfoliobox pq-portfoliobox-style-1">
                  <div className="owl-carousel owl-loaded owl-drag">
                    {portfolios.map(portfolio => (
                      <div className="item" key={portfolio.id}>
                        <div className="pq-portfoliobox-1 pq-hover-slide">
                          <div className="pq-portfolio-block">
                            <div className="pq-portfolio-img">
                              
                                <img decoding="async" src={portfolio.image} alt={portfolio.title} />
                              
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
    );
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.gallery.portfolios,
  status: state.gallery.status,
  error: state.gallery.error,
});

const mapDispatchToProps = {
  fetchPortfolios,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
