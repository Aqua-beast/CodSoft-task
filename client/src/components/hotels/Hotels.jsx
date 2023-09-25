import React, { useState } from 'react';
import axios from 'axios';
import './hotels.css';
import TransactionDetail from '../transaction/TransactionDetail';

const Hotels = () => {
    const [formData, setFormData] = useState({
        username: '',
        location: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        roomType: '',
    });

    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleHotel = async () => {
        try {
            const response = await axios.post('https://cod-soft-task-1c1el0kd8-aqua-beast.vercel.app/hotels', formData,
                {
                    headers: {
                        "x-access-token": localStorage.getItem("token"),
                    },
                }
            );
            if (response.status === 200) {
                setIsBookingConfirmed(true);
            } else {
                console.error('There was some problem while booking hotel');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleCancel = () => {
        setIsBookingConfirmed(false);
        setFormData({
            from: '',
            to: '',
            departureDate: '',
            returnDate: '',
            username: '', // Clear the username field
            adults: '',
            children: '',
            cabinClass: '',
        });
    };

    return (
        <div className="hotels-container">
            <h2>Hotel Booking</h2>
            {isBookingConfirmed ? (
                <TransactionDetail formData={formData} onCancel={handleCancel} transactionType="hotels" />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" className='form-items'
                        name="username"
                        placeholder="User Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text" className='form-items'
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="date" className='form-items'
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="date" className='form-items'
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number" className='form-items'
                        name="guests"
                        placeholder="Number of Guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                    />
                    <select
                        name="roomType" className='form-items'
                        value={formData.roomType}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Select Room Type</option>
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                        <option value="suite">Suite</option>
                    </select>
                    <button onClick={() => handleHotel()} type="submit">Book Now</button>
                </form>
            )}
        </div>
    );
};

export default Hotels;
