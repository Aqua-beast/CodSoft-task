import React, { useState } from 'react';
import axios from 'axios';
import './transaction.css';

const TransactionDetail = ({ formData, onCancel, transactionType }) => {
  axios.defaults.withCredentials = true;
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsConfirmed(true);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  const handleCancel = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(transactionType);
          if (!token) {
            console.error("JWT token not found");
            return;
          }
      const response = await axios.delete(`https://cod-soft-task-1c1el0kd8-aqua-beast.vercel.app/${transactionType}`, formData,
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        onCancel(false);
        console.log(response);
      } else {
        console.error('Request to airlines failed');
      }
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  const isDepartureDateValid = new Date(formData.departure) >= new Date();
  const isReturnDateValid = new Date(formData.return) >= new Date();

  return (
    <div className="transaction-detail">
      <h2>Transaction Details</h2>
      <p><strong>Username:</strong> {formData.username}</p>
      {transactionType === "airlines" && (
      <>
      <p><strong>From:</strong> {formData.from}</p>
      <p><strong>To:</strong> {formData.to}</p>
      <p><strong>Departure Date:</strong> {formData.departure}</p>
      <p><strong>Return Date:</strong> {formData.return}</p>
      <p><strong>Adults:</strong> {formData.adults}</p>
      <p><strong>Children:</strong> {formData.children}</p>
      <p><strong>Cabin Class:</strong> {formData.cabinClass}</p>
      
      {!isDepartureDateValid && <p className="error-message">Departure date must be today or after.</p>}
      {!isReturnDateValid && <p className="error-message">Return date must be today or after.</p>}
      
      </>
      )}
      {transactionType === 'hotels' && (
        <>
        <p><strong>Location:</strong> {formData.location}</p>
        <p><strong>Check-In</strong> {formData.chechIn}</p>
        <p><strong>Check-Out</strong> {formData.checkOut}</p>
        <p><strong>Guests</strong> {formData.guests}</p>
        <p><strong>Room Type</strong> {formData.roomType}</p>
        </>
      )}
      {transactionType === 'carbookings' && (
        <>
        <p><strong>Pickup Location:</strong>{formData.pickupLocation}</p>
        <p><strong>Return Location:</strong>{formData.returnLocation}</p>
        <p><strong>Pickup Date:</strong>{formData.pickupDate}</p>
        <p><strong>Return Date:</strong>{formData.returnDate}</p>
        <p><strong>Passengers:</strong>{formData.passengers}</p>
        <p><strong>Car Type:</strong>{formData.carType}</p>
        </>
      )}

      <div className="buttons">
        {!isConfirmed ? (
          <>
            <button onClick={handleConfirm}>Confirm Booking</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <p className="confirmed-message">Booking confirmed! Have a safe trip!</p>
        )}
      </div>
    </div>
  );
};

export default TransactionDetail;
