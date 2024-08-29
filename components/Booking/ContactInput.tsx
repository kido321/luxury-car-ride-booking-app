
// 'use client'
import { useContact } from '@/context/ContactContext';
import { useEffect, useState } from 'react';

export default function ContactInput() {
    const { fullName, phoneNumber, dateTime, setFullName, setPhoneNumber, setDateTime } = useContact();
    const [minDateTime, setMinDateTime] = useState('');

    useEffect(() => {
        // Set the minimum date-time to the current date and time
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        setMinDateTime(now.toISOString().slice(0, 16));
    }, []);
    return (
        <div className="space-y-4 max-w-md mx-auto shadow-lg rounded-lg ">
            <div>
                <label htmlFor="fullName" className="block text-gray-100 font-medium">
                    Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="bg-white p-2 border-2 w-full rounded-lg outline-none focus:border-yellow-400 text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                />
            </div>
            <div>
                <label htmlFor="phoneNumber" className="block text-gray-100 font-medium">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="bg-white p-2 border-2 w-full rounded-lg outline-none focus:border-yellow-400 text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                />
            </div>
            <div>
                <label htmlFor="dateTime" className="block text-gray-100 font-medium">
                    Schedule For
                </label>
                <input
                    type="datetime-local"
                    id="dateTime"
                    name="dateTime"
                    className="bg-white p-2 border-2 w-full rounded-lg outline-none focus:border-yellow-400 text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    min={minDateTime}
                />
            </div>
        </div>
    );
}

// import { useContact } from '@/context/ContactContext';

// export default function ContactInput() {
//     const { fullName, phoneNumber, dateTime, setFullName, setPhoneNumber, setDateTime } = useContact();

//     return (
//         <div className="space-y-4 max-w-md mx-auto shadow-lg rounded-lg p-6 bg-gray-800">
//             <div>
//                 <label htmlFor="fullName" className="block text-gray-200 font-medium mb-2">
//                     Name
//                 </label>
//                 <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     className="bg-gray-700 p-2 border-2 border-gray-600 w-full rounded-lg outline-none focus:border-yellow-400 text-white text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="Enter your full name"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="phoneNumber" className="block text-gray-200 font-medium mb-2">
//                     Phone Number
//                 </label>
//                 <input
//                     type="tel"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     className="bg-gray-700 p-2 border-2 border-gray-600 w-full rounded-lg outline-none focus:border-yellow-400 text-white text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     placeholder="Enter your phone number"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="dateTime" className="block text-gray-200 font-medium mb-2">
//                     Date and Time
//                 </label>
//                 <input
//                     type="datetime-local"
//                     id="dateTime"
//                     name="dateTime"
//                     className="bg-gray-700 p-2 border-2 border-gray-600 w-full rounded-lg outline-none focus:border-yellow-400 text-white text-sm transition ease-in-out duration-150 shadow-[0_0_10px_rgba(255,255,255,0.1)] date-time-input"
//                     value={dateTime}
//                     onChange={(e) => setDateTime(e.target.value)}
//                 />
//             </div>
//             <style jsx>{`
//                 .date-time-input::-webkit-calendar-picker-indicator {
//                     background-color: #9ca3af;
//                     padding: 5px;
//                     cursor: pointer;
//                     border-radius: 3px;
//                 }
//                 .date-time-input::-webkit-datetime-edit-fields-wrapper {
//                     padding: 5px;
//                 }
//             `}</style>
//         </div>
//     );
// }