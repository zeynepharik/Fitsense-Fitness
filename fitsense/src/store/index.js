import { configureStore } from "@reduxjs/toolkit";

import reservationReducer from "./ReservationSlice";
import blogReducer from "./blogSlice";
import faqReducer from "./faqSlice";
import galleryReducer from './gallerySlice';

export const store = configureStore({
  reducer: {
    
    
    reservations: reservationReducer,
    blogs: blogReducer,
    faq: faqReducer,
    gallery: galleryReducer

  },
});
