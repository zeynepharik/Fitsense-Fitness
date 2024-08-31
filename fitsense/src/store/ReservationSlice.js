import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [], 
  },
  reducers: {
    addReservation: (state, action) => {
      
      state.reservations.push(action.payload);
    },
    removeReservation: (state, action) => {
      
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload
      );
    },
    clearReservations: (state) => {
      
      state.reservations = [];
    },
  },
});

export const { addReservation, removeReservation, clearReservations } = reservationSlice.actions;
export default reservationSlice.reducer;
