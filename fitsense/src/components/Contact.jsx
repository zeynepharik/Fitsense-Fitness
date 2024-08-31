import React, { Component } from 'react'
import Hero from "../components/Hero";
export default class Contact extends Component {
  render() {
    return (
        <>
        <Hero title="Contact Us" />
        <section className="contact-us pq-bg-grey">
       <div className="container">
           <div className="row">
               <div className="col-xl-4 col-lg-6 col-md-6">
                   <div className="pq-contact-box">
                       <div className="pq-contact-box-icon">
                           <i className="ion ion-ios-location"></i>
                       </div>
                       <div className="pq-contact-box-content">
                           <h4 className="pq-contact-box-title">Our Location</h4>
                           <p className="pq-contact-box-description">The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom</p>
                       </div>
                   </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6 mt-4 mt-md-0">
                   <div className="pq-contact-box">
                       <div className="pq-contact-box-icon">
                           <i className="ion ion-android-call"></i>
                       </div>
                       <div className="pq-contact-box-content">
                           <h4 className="pq-contact-box-title">Our Contact</h4>
                           <p className="pq-contact-box-description">+(1235)-1234-567-8900<br/>+(1235)-1234-567-8900</p>
                       </div>
                   </div>
               </div>
               <div className="col-xl-4 col-lg-12 col-md-12 mt-4 mt-xl-0">
                   <div className="pq-contact-box">
                       <div className="pq-contact-box-icon">
                           <i className="ion ion-ios-email"></i>
                       </div>
                       <div className="pq-contact-box-content">
                           <h4 className="pq-contact-box-title">Mail Us</h4>
                           <p className="pq-contact-box-description">info@peacefulthemes.com<br/>info2@peacefulthemes.com</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   

   
   <div className="map">
       <div className="pq-map">
           <iframe src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=5&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
       </div>
   </div>
   

   
   <section className="contact py-0 pq-mt-120">
       <div className="container">
           <div className="row flex-column-reverse flex-xl-row">
               <div className="col-xl-6 pe-xl-0">
                   <div className="pq-form-div pq-bg-grey">
                       <div className="pq-section-title pq-style-1">
                           <h2 className="pq-section-main-title">REQUEST A QUOTE</h2>
                           <p className="pq-section-description">Lorem Ipsum iLorem Ipsum is simply dummy text of the printing and typesetting industry.s simply dummy text of the and typesetting industry.</p>
                       </div>
                       <form className="pq-contact-form">
                           <div className="row">
                               <div className="col-lg-6 col-md-6">
                                   <input type="text" placeholder="Enter Name"/>
                               </div>
                               <div className="col-lg-6 col-md-6">
                                   <input type="email" placeholder="Enter Email"/>
                               </div>
                               <div className="col-lg-6 col-md-6">
                                   <input type="text" placeholder="Enter Subject"/>
                               </div>
                               <div className="col-lg-6 col-md-6">
                                   <input type="text" placeholder="Enter Number"/>
                               </div>
                               <div className="col-lg-12">
                                   <textarea id="message" cols="40" rows="10"></textarea>
                               </div>
                               <div className="col-lg-12">
                                   <a href="#" className="pq-button">SEND MESSAGE</a>
                               </div>
                           </div>
                       </form>
                   </div>
               </div>
               <div className="col-xl-6 ps-xl-0">
                   <img src="/images/contact-form/1.jpg" className="img-fluid w-100" alt=""/>
               </div>
           </div>
       </div>
   </section>
     
     </>
    )
  }
}

