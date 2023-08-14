import React, { useState } from 'react';
import { FaPlane, FaHotel, FaCar } from 'react-icons/fa';
import './combined.css';

// Import your airline, hotel, and car booking components
import Airlines from '../airlines/Airlines';
import Hotels from '../hotels/Hotels';
import Carbooking from '../carbooking/Carbooking';

const Combined = () => {
  const [selectedBooking, setSelectedBooking] = useState('airlines');

  const handleIconClick = (bookingType) => {
    setSelectedBooking(bookingType);
  };

  return (
    <div className="combined-booking-container">
      <div className="booking-icons">
        <div
          className={`booking-icon ${selectedBooking === 'airlines' ? 'selected' : ''}`}
          onClick={() => handleIconClick('airlines')}
        >
          <FaPlane size={48} />
        </div>
        <div
          className={`booking-icon ${selectedBooking === 'hotels' ? 'selected' : ''}`}
          onClick={() => handleIconClick('hotels')}
        >
          <FaHotel size={48} />
        </div>
        <div
          className={`booking-icon ${selectedBooking === 'car' ? 'selected' : ''}`}
          onClick={() => handleIconClick('car')}
        >
          <FaCar size={48} />
        </div>
      </div>
      <div className="booking-form">
        {selectedBooking === 'airlines' && <Airlines />}
        {selectedBooking === 'hotels' && <Hotels />}
        {selectedBooking === 'car' && <Carbooking />}
      </div>
    </div>
  );
};

export default Combined;
