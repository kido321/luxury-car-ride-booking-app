// 'use client'
// import AutocompleteAddress from './AutocompleteAddress'
// import Cars from './Cars';
// import Cards from './Cards';
// import DistanceTime from './DistanceTime';
// import ContactInput from './ContactInput';
// import  {BookingConfirmationDialog}  from './BookingConfirmationDialog';
// import React, { useState } from 'react';
// function Booking() {
//     // const screenHight=window.innerHeight*0.72;
//     const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [dateTime, setDateTime] = useState('');
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [dropoffLocation, setDropoffLocation] = useState('');
//   const [carType, setCarType] = useState('');
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleBookNow = () => {
//     setIsDialogOpen(true);
//   };

//   const handleConfirmBooking = () => {
//     // Here you would typically send the booking data to your backend
//     console.log('Booking confirmed!');
//     setIsDialogOpen(false);
//     // Optionally, reset form or show a success message
//   };


//   return (
 
//     <div className=" overflow-hidden ">
//     <div className="">
//       <div className="space-y-6  mt-4 p-8 rounded-lg ">

        
//         <ContactInput/>
//         <AutocompleteAddress />
//         <Cars />
//         <Cards />
        
//         <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
//           Book Now
//         </button>
        
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Booking





'use client'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars';
import Cards from './Cards';
import DistanceTime from './DistanceTime';
import ContactInput from './ContactInput';
import { BookingConfirmationDialog } from './BookingConfirmationDialog';
import React, { useState , useContext } from 'react';
import { useContact } from '@/context/ContactContext';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"
import { SelectedCarAmountContext } from '@/context/SelectedCarAmount';

function Booking() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('');
  const {
    fullName,
    phoneNumber,
    dateTime,
    pickupAddress,
    dropoffAddress
  } = useContact();
  const { toast } = useToast()
  const [alertMessage, setAlertMessage] = useState('');
  

    const {selectedCarAmount,setSelectedCarAmount} = useContext(SelectedCarAmountContext);
  const validateForm = () => {
    if (!fullName) return "Please enter your full name.";
    if (!phoneNumber) return "Please enter your phone number.";
    if (!dateTime) return "Please select a date and time.";
    if (!pickupAddress) return "Please enter a pickup address.";
    if (!dropoffAddress) return "Please enter a dropoff address.";
    // if (!selectedCar) return "Please select a car type.";
    return null;
  };
  const handleBookNow = () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      toast({
        variant: "destructive",
        title: "Booking Error",
        description: errorMessage,
      })
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleConfirmBooking = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking confirmed!');
    setIsDialogOpen(false);
    toast({
      title: "Booking Confirmed",
      description: "Your ride has been booked successfully!",
    })
    // Optionally, reset form or show a success message
  };

  return (
    <div className="overflow-hidden">
      <div className="">
        <div className="space-y-6 mt-4 p-8 rounded-lg">
        {alertMessage && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}
          <ContactInput />
          <AutocompleteAddress />
          <Cars  />
          <Cards />
          
          <button 
  className={`w-full ${
    selectedCarAmount === null
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-yellow-400 hover:bg-yellow-500 hover:shadow-md hover:-translate-y-1'
  } text-gray-800 font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform`}
  onClick={handleBookNow}
  disabled={selectedCarAmount === null}
>
  Book Now
</button>
        </div>
      </div>
      
      <BookingConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirmBooking}
        bookingDetails={{
          name: fullName,
          phoneNumber,
          date: dateTime ? dateTime.split('T')[0] : '',
          time: dateTime ? dateTime.split('T')[1] : '',
          pickupAddress,
          dropoffAddress,
          carType: selectedCar
        }}
      />
    </div>
  )
}

export default Booking