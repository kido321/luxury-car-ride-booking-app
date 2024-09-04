'use client'
import React from 'react';


const BookingSuccessPage: React.FC = () => {

  return (
    <div className=" mx-auto p-6 bg-gray-300 rounded-lg shadow-md height-vh">
      <h1 className="text-3xl font-bold mb-6 mt-[100px]">Booking Successful!</h1>
      <p className="mb-4">Thank you for your booking. Your payment has been processed successfully.</p>
      {/* <p className="mb-4">Your booking reference number is</p> */}
      {/* <p>We'll send you a confirmation email with all the details of your booking shortly.</p> */}
    </div>
  );
};

export default BookingSuccessPage;