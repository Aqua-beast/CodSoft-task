import React, { useState } from 'react';
import axios from 'axios';
import './airlines.css';
import TransactionDetail from '../transaction/TransactionDetail';

const Airlines = () => {
    axios.defaults.withCredentials = true;

    const [formData, setFormData] = useState({
        from: '',
        to: '',
        departure: '',
        return: '',
        username: '', // New field for username
        adults: '',
        children: '',
        cabinClass: '',
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

    const isReturnDateValid = () => {
        return formData.return >= formData.departure;
    };

    const isDepartureDateValid = new Date(formData.departure) >= new Date();

    const handleAirline = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("JWT token not found");
            return;
          }
          const response = await axios.post(
            'http://localhost:3001/airlines', formData,
            {
              headers: {
                "x-access-token": localStorage.getItem("token"),
              },
            }
          );
    
          if (response.status === 200) {
            setIsBookingConfirmed(true);
            console.log(response);
          } else {
            console.error('Request to airlines failed');
          }
        } catch (error) {
          console.error('Error during airlines:', error);
        }
      }

    return (
        <div className="airlines-container">
            <h2>Flight Booking</h2>
            {isBookingConfirmed ? (
                <TransactionDetail formData={formData} onCancel={handleCancel} transactionType="airlines" />
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
                        name="from"
                        placeholder="From"
                        value={formData.from}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text" className='form-items'
                        name="to"
                        placeholder="To"
                        value={formData.to}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="date" className='form-items'
                        name="departure"
                        value={formData.departure}
                        onChange={handleInputChange}
                        required
                    />
                    {!isDepartureDateValid && <p className="error-message">Departure date must be after today</p>}
                    <input
                        type="date" className='form-items'
                        name="return"
                        value={formData.return}
                        onChange={handleInputChange}
                        required
                    />
                    {!isReturnDateValid() && <p className="error-message">Return date must be after departure date</p>}
                    <input
                        type="number" className='form-items'
                        name="adults"
                        placeholder="Adults"
                        value={formData.adults}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number" className='form-items'
                        name="children"
                        placeholder="Children"
                        value={formData.children}
                        onChange={handleInputChange}
                        required
                    />
                    <select
                        name="cabinClass" className='form-items'
                        value={formData.cabinClass}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Select Cabin Class</option>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                    </select>
                    <button onClick={()=>handleAirline()} type="submit">Book Now</button>
                </form>
            )}
        </div>
    );
};

export default Airlines;
