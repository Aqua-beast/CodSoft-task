import React, { useState } from 'react';
import axios from 'axios';
import './carbooking.css';
import TransactionDetail from '../transaction/TransactionDetail';

const Carbooking = () => {
    axios.defaults.withCredentials = true;
    const [formData, setFormData] = useState({
        username: '',
        pickupLocation: '',
        returnLocation: '',
        pickupDate: '',
        returnDate: '',
        passengers: '',
        carType: '',
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
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("JWT token not found");
                return;
            }
            const response = await axios.post('https://cod-soft-task.vercel.app/carbookings', formData, 
            {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            });
            if (response.status === 200) {
                setIsBookingConfirmed(true);
            } else {
                console.error('There was some problem while booking car');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
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
        <div className="car-booking-container">
            <h2>Car Booking</h2>
            {isBookingConfirmed ? (
                <TransactionDetail formData={formData} onCancel={handleCancel} transactionType="carbookings" />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" className='form-items'
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text" className='form-items'
                        name="pickupLocation"
                        placeholder="Pickup Location"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text" className='form-items'
                        name="returnLocation"
                        placeholder="Return Location"
                        value={formData.returnLocation}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="date" className='form-items'
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="date" className='form-items'
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number" className='form-items'
                        name="passengers"
                        placeholder="Number of Passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        required
                    />
                    <select
                        name="carType" className='form-items'
                        value={formData.carType}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Select Car Type</option>
                        <option value="compact">Compact</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                    </select>
                    <button type="submit">Book Now</button>
                </form>
            )}
        </div>
    );
};

export default Carbooking;
