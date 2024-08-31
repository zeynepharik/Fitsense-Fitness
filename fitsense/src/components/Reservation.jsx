import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Reservation = () => {
    const [days, setDays] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [categories, setCategories] = useState([]);
    const [times, setTimes] = useState([]);
    const location = useLocation();
    const newReservation = location.state?.newReservation;

    useEffect(() => {
        fetch('/db.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);  
                setDays(data.days);
                setReservations(data.reservations);
                setCategories(data.categories);
                setTimes(data.times); 
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (newReservation) {
            console.log('New reservation:', newReservation);  
            setReservations(prevReservations => [...prevReservations, newReservation]);
        }
    }, [newReservation]);

    
    const uniqueTimes = times.map(time => time.id); 

    return (
        <div>
            <section className="timetable">
                
                <div className="container">
                    <div className="row">
                    <p>19-25 August 2024 Weekly Schedule</p>
                        <div className="col-lg-12">
                        
                            <div className="pq-navigation-tab">
                            
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    {days.map((day, index) => (
                                        <a
                                            key={index}
                                            className={`nav-item nav-link ${index === 0 ? 'active' : ''}`}
                                            id={`nav-home-${index}`}
                                            data-bs-toggle="tab"
                                            href={`#nav-${index}`}
                                            role="tab"
                                            aria-controls={`nav-home-${index}`}
                                            aria-selected={index === 0}
                                        >
                                            {day.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    {days.map((day, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className={`tab-pane fade ${dayIndex === 0 ? 'active show' : ''}`}
                                            id={`nav-${dayIndex}`}
                                            role="tabpanel"
                                            aria-labelledby={`nav-home-${dayIndex}`}
                                        >
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {uniqueTimes.map((timeId, timeIndex) => {
                                                        const time = times.find(t => t.id === timeId)?.time;
                                                        return (
                                                            <tr key={timeIndex}>
                                                                <td>{time}</td>
                                                                <td>
                                                                    {reservations
                                                                        .filter(r => r.timeId === timeId && r.dayId === day.id)
                                                                        .map((reservation, index) => {
                                                                            const category = categories.find(c => c.id === reservation.categoryId);
                                                                            return (
                                                                                <div key={index}>
                                                                                    <a
                                                                                        title={category ? category.categoryName : ''}
                                                                                        href="#"
                                                                                        className="event-title"
                                                                                    >
                                                                                        {category ? category.categoryName : 'Unknown Category'}
                                                                                    </a>
                                                                                    <p className="event-subtitle">
                                                                                        {reservation.name} {reservation.surname}  {reservation.trackingid}
                                                                                    </p>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reservation;
