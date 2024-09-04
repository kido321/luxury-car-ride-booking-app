

'use client'
import Booking from '@/components/Booking/Booking'
import MapboxMap from '@/components/Map/MapBoxMap'
import { DestinationCordiContext } from '@/context/DestinationCordiContext';
import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SourceCordiContext } from '@/context/SourceCordiContext';
import { UserLocationContext } from '@/context/UserLocationContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmount';
import { ContactProvider } from '@/context/ContactContext';
import  {BookingConfirmationDialog}  from '@/components/Booking/BookingConfirmationDialog';
import { SelectedCarContext } from '@/context/SelectedCarContext';

import React, { useState,useEffect } from 'react';

const BookingForm: React.FC = () => {
  const [userLocation,setUserLocation]=useState<any>();
  const [soruceCordinates,setSourceCordinates]=useState<any>([]);
  const [destinationCordinates,setDestinationCordinates]=useState<any>([]);
  const [directionData,setDirectionData]=useState<any>([]);
  const[selectedCarAmount , setSelectedCarAmount] = useState<any>();
  const[selectedCar , setSelectedCar] = useState<any>();

  useEffect(()=>{
    getUserLocation();
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }


 
  return (
    <div className='bg-gradient-to-b from-gray-900 to-white to-gray-900'>
       <SelectedCarContext.Provider value={{selectedCar,setSelectedCar}}>
      <ContactProvider>
       
      <SelectedCarAmountContext.Provider value={{selectedCarAmount,setSelectedCarAmount}}>
            <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <SourceCordiContext.Provider value={{soruceCordinates,setSourceCordinates}}>
      <DestinationCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
      <DirectionDataContext.Provider value={{directionData,setDirectionData}}>
   

<div className="container mx-auto px-4 py-8  ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div className="lg:col-span-1">
          <div className="sticky top-32 ">
            <Booking />
          </div>
        </div>
        <div className="lg:col-span-2 sticky top-32 rounded-lg">
          <div className="overflow-hidden rounded-lg ">
            <MapboxMap />
          </div>
        </div>
      </div>
    </div>
  
   
      </DirectionDataContext.Provider>
      
     </DestinationCordiContext.Provider>
     </SourceCordiContext.Provider>
     </UserLocationContext.Provider>
     </SelectedCarAmountContext.Provider>
     </ContactProvider>
     </SelectedCarContext.Provider>
     </div>
    
  );
};

export default BookingForm;