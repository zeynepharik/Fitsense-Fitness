import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "../components/Hero";

const ReservationForm = ({ updateReservations }) => {
    const [formData, setFormData] = useState({
        timeId: '',
        dayId: '',
        categoryId: '',
        name: '',
        surname: ''
    });

    const [categories, setCategories] = useState([]);
    const [days, setDays] = useState([]);
    const [times, setTimes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        
        window.scrollTo(0, 0);

        fetch('/db.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);  
                setDays(data.days);
                setCategories(data.categories);
                setTimes(data.times);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Reservation submitted:', data);  
            navigate('/reservation', { state: { newReservation: data } });
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <>
          <Hero title="Reservation Form"/>
          <div className="reservation-form-container">
            <form className="reservation-form" onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>Surname:
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>Category:
                    <select
                        name="categoryId"
                        value={formData.categoryId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a Category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.categoryName}
                            </option>
                        ))}
                    </select>
                </label>
                <label>Day:
                    <select
                        name="dayId"
                        value={formData.dayId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a Day</option>
                        {days.map(day => (
                            <option key={day.id} value={day.id}>
                                {day.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>Time:
                    <select
                        name="timeId"
                        value={formData.timeId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a Time</option>
                        {times.map(time => (
                            <option key={time.id} value={time.id}>
                                {time.time}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Create Reservation</button>
            </form>
        </div>
        </>
    );
};

export default ReservationForm;
