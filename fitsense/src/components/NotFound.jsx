import React, { Component } from 'react'
import Hero from "../components/Hero";
import { Link } from 'react-router-dom';
export default class NotFound extends Component {
  render() {
    return (
      <> 
         <Hero title="Not Found"/>
         <section className="page-not-found">
        <div className="container">
            <div className="row">
                <div className="pq-error-block">
                    <div className="pq-error-text">404</div>
                    <h2>404 Error</h2>
                    <p>Oops! This Page is Not Found.</p> 
                    <div className="pq-btn-block">
                    <div className="pq-btn-container">
                    <Link to="/" className="pq-button"> 
                        <div className="pq-button-block">
                        <span className="pq-button-text">Back to Home</span>
                        </div>
                    </Link>
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
