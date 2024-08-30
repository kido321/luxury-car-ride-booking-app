"use client"
import { DestinationCordiContext } from '@/context/DestinationCordiContext'
import { SourceCordiContext } from '@/context/SourceCordiContext'
import React, { useContext, useEffect, useState } from 'react'
import { useContact } from '@/context/ContactContext';
const session_token='5ccce4a4-ab0a-4a7c-943d-580e55542363'
const MAPBOX_RETRIVE_URL='https://api.mapbox.com/search/searchbox/v1/retrieve/'
function AutocompleteAddress() {

    const [source,setSource]=useState<any>()
    const [sourceChange,setSourceChange]=useState<any>(false)
    const [destinationChange,setDestinationChange]=useState<any>(false)

    const {soruceCordinates,setSourceCordinates}=useContext(SourceCordiContext);
    const {destinationCordinates,setDestinationCordinates}
    =useContext(DestinationCordiContext);
    const {
        fullName, phoneNumber, dateTime, pickupAddress, dropoffAddress,
        setFullName, setPhoneNumber, setDateTime, setPickupAddress, setDropoffAddress
    } = useContact();
    const [addressList,setAddressList]=useState<any>([]);
    const [destination,setDistination]=useState<any>()

    useEffect(()=>{
        const delayDebounceFn=  setTimeout(()=>{
            getAddressList()
        },1000)
        return () => clearTimeout(delayDebounceFn)   
    },[source,destination]);


    const getAddressList=async()=>{
        setAddressList([]);
        const query=sourceChange?source:destination;
        const res=await fetch('/api/search-address?q='+query,{
            headers:{
                "Content-Type": "application/json",  
        }
        });

        const result=await res.json();
        setAddressList(result)
        
    }

    const onSourceAddressClick=async(item:any)=>{
        setSource(item.full_address);
        setAddressList([]);setSourceChange(false)
        const res=await fetch(MAPBOX_RETRIVE_URL+item.mapbox_id
            +"?session_token="+session_token
            +"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
        
        const result=await res.json();
        
        setSourceCordinates({
            lng:result.features[0].geometry.coordinates[0],
            lat:result.features[0].geometry.coordinates[1], 
        })
        console.log(result);
    }

    const onDestinationAddressClick=async(item:any)=>{
        console.log(item,'item')
        setDistination(item.full_address);
        console.log(destination, "DESTINATION")
        setAddressList([]);
        setDestinationChange(false)
        const res=await fetch(MAPBOX_RETRIVE_URL+item.mapbox_id
            +"?session_token="+session_token
            +"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
        
        const result=await res.json();
        
        setDestinationCordinates({
            lng:result.features[0].geometry.coordinates[0],
            lat:result.features[0].geometry.coordinates[1], 
        })
        console.log(result);
    }
    
  return (
  
<div className="space-y-4">
    {/* <div className="relative">
        <label className=" text-white text-md font-medium ">Where From?</label>
        <input 
            type="text"
            className="bg-white p-2 border-2 w-full rounded-lg outline-none focus:border-yellow-400 text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            value={source}
            placeholder="Pick off"
            onChange={(e) => {
                setSource(e.target.value);
                setSourceChange(true);
                setPickupAddress(e.target.value);
                
            }}
        />
        {addressList?.suggestions && sourceChange ? (
            <div className="shadow-lg p-2 rounded-lg absolute w-full bg-white z-20 mt-1">
                {addressList.suggestions.map((item: any, index: number) => (
                    <h2
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer rounded-md transition ease-in-out duration-150"
                        onClick={() =>{onSourceAddressClick(item)
                            setPickupAddress(item.full_address);
                        }}
                    >
                        {item.full_address}
                    </h2>
                ))}
            </div>
        ) : null} */}
       <div className="relative">
            <label className="text-gray-200 text-md font-medium pb-8">Where To?</label>
            <input
                type="text"
                className="bg-white p-2 border-2 w-full rounded-lg outline-none focus:border-yellow-400 text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                value={source}
                placeholder="Pick up"
                onChange={(e) => {
                    setSource(e.target.value);
                setSourceChange(true);
                setPickupAddress(e.target.value);
                }}
            />
            {addressList?.suggestions &&  sourceChange ? (
                <div className="shadow-lg rounded-lg absolute w-full bg-white z-20 mt-1 max-h-80 overflow-y-auto">
                    {addressList.suggestions.map((item:any, index:number) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer rounded-md transition ease-in-out duration-150"
                            onClick={() =>{ onSourceAddressClick(item)
                                setPickupAddress(item.full_address);
                            }}
                        >
                            <h2 className="font-semibold">{item.name}</h2>
                            <p className="text-sm text-gray-600">{item.full_address}</p>
                        </div>
                    ))}
                </div>
            ) : null}
    </div> 

   {/* <div className="relative">
        <label className="text-gray-200 text-md font-medium pb-8">Where To?</label>
        <input 
            type="text"
            className="bg-white p-2 border-2 w-full rounded-lg outline-none focus:border-yellow-400 text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            value={destination}
            placeholder="Drop off"
            onChange={(e) => {
                setDistination(e.target.value);
                setDestinationChange(true);
                setDropoffAddress(e.target.value);
            }}
        />
        {addressList?.suggestions && destinationChange ? (
            <div className="shadow-lg p-2 rounded-lg absolute w-full bg-white z-20 mt-1">
                {addressList.suggestions.map((item: any, index: number) => (
                    <h2
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer rounded-md transition ease-in-out duration-150"
                        onClick={() => {
                            onDestinationAddressClick(item)
                            setDropoffAddress(item.full_address);
                            console.log(dropoffAddress)
                        }}
                    >
                        {item.full_address}
                    </h2>
                ))}
            </div>
        ) : null} 
         */}
        
{/*    <div className="relative">
            <label className="text-gray-200 text-md font-medium pb-8">Where To?</label>
            <input
                type="text"
                className="bg-white p-2 border-2 w-full rounded-lg outline-none focus:border-yellow-400 text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                value={destination}
                placeholder="Pick up"
                onChange={(e) => {
                    setSource(e.target.value);
                setSourceChange(true);
                setPickupAddress(e.target.value);
                }}
            />
            {addressList?.suggestions &&  sourceChange ? (
                <div className="shadow-lg rounded-lg absolute w-full bg-white z-20 mt-1 max-h-80 overflow-y-auto">
                    {addressList.suggestions.map((item:any, index:number) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer rounded-md transition ease-in-out duration-150"
                            onClick={() =>{ onDestinationAddressClick(item)
                                setDropoffAddress(item.full_address);
                            }}
                        >
                            <h2 className="font-semibold">{item.name}</h2>
                            <p className="text-sm text-gray-600">{item.full_address}</p>
                        </div>
                    ))}
                </div>
            ) : null}     */}
        
        
        
         <div className="relative">
            <label className="text-gray-200 text-md font-medium pb-8">Where To?</label>
            <input
                type="text"
                className="bg-white p-2 border-2 w-full rounded-lg outline-none focus:border-yellow-400 text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                value={destination}
                placeholder="Drop off"
                onChange={(e) => {
                    setDistination(e.target.value);
                    setDestinationChange(true);
                    setDropoffAddress(e.target.value);
                }}
            />
            {addressList?.suggestions && destinationChange ? (
                <div className="shadow-lg rounded-lg absolute w-full bg-white z-20 mt-1 max-h-80 overflow-y-auto">
                    {addressList.suggestions.map((item:any, index:number) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer rounded-md transition ease-in-out duration-150"
                            onClick={() =>{ onDestinationAddressClick(item)
                                setDropoffAddress(item.full_address);
                            }}
                        >
                            <h2 className="font-semibold">{item.name}</h2>
                            <p className="text-sm text-gray-600">{item.full_address}</p>
                        </div>
                    ))}
                </div>
            ) : null}
    </div>
</div>


  )
}

export default AutocompleteAddress