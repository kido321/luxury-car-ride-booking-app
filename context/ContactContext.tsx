'use client'

import { createContext, useContext, useState } from 'react';

const ContactContext = createContext({
    fullName: '',
    phoneNumber: '',
    dateTime: '',
    pickupAddress: '',
    dropoffAddress: '',
    setFullName: (name: string) => {},
    setPhoneNumber: (number: string) => {},
    setDateTime: (dateTime: string) => {},
    setPickupAddress: (address: string) => {},
    setDropoffAddress: (address: string) => {}
});

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [pickupAddress, setPickupAddress] = useState('');
    const [dropoffAddress, setDropoffAddress] = useState('');

    return (
        <ContactContext.Provider value={{
            fullName, phoneNumber, dateTime, pickupAddress, dropoffAddress,
            setFullName, setPhoneNumber, setDateTime, setPickupAddress, setDropoffAddress
        }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => useContext(ContactContext);