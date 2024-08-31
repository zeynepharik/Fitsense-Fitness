import React, { Component } from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import BlogListCard from "./components/BlogListCard";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Workouts from "./components/Workouts";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import PricingPlans from "./components/PricingPlans";
import Reservation from "./components/Reservation";
import ReservationForm from "./components/ReservationForm";
import NotFound from './components/NotFound';


export default class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000); 
  }
  render() {
    const { isLoading } = this.state;
    return (
      <> 
       
         <Header />
         {isLoading && (
          <div id="pq-loading">
            <div id="pq-loading-center">
              <img src="/images/logos/logo.png" alt="loading" />
            </div>
          </div>
        )}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:link" element={<BlogDetails />} />
        <Route path="/bloglistcard" element={<BlogListCard />} />  
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricingplans" element={<PricingPlans />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservationform" element={<ReservationForm />} />
        <Route path="*" element={<NotFound />} /> 
    </Routes>
      <Footer />  
    </>
      
      
    )
  }
}
