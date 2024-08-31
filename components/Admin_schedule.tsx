'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Car, DollarSign } from 'lucide-react';

interface Booking {
  id: string;
  full_name: string;
  phone_number: string;
  date: string;
  time: string;
  pickup_address: string;
  dropoff_address: string;
  car_type: string;
  amount: number;
  payment_status: string;
}

interface AdminDashboardClientProps {
  bookings: Booking[];
}

const AdminDashboardClient: React.FC<AdminDashboardClientProps> = ({ bookings }) => {
  return (
    <div className=" pt-[80px] min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <Card className="bg-gray-800 bg-opacity-80 shadow-xl border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-amber-400 text-center">Scheduled Trips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-600 text-amber-400">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Date & Time</th>
                  <th className="px-4 py-3 text-left">Pickup</th>
                  <th className="px-4 py-3 text-left">Dropoff</th>
                  <th className="px-4 py-3 text-left">Car Type</th>
                  <th className="px-4 py-3 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking.id} className={index % 2 === 0 ? 'bg-gray-400 bg-opacity-50' : 'bg-gray-500 bg-opacity-50'}>
                    <td className="px-4 py-3 border-b border-gray-600">{booking.full_name}</td>
                    <td className="px-4 py-3 border-b border-gray-600">{booking.phone_number}</td>
                    <td className="px-4 py-3 border-b border-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-amber-400" />
                        {booking.date}
                        <Clock className="w-4 h-4 ml-4 mr-2 text-amber-400" />
                        {booking.time}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                        {booking.pickup_address}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                        {booking.dropoff_address}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-600">
                      <div className="flex items-center">
                        <Car className="w-4 h-4 mr-2 text-amber-400" />
                        {booking.car_type}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2 text-amber-400" />
                        {booking.amount.toFixed(2)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardClient;