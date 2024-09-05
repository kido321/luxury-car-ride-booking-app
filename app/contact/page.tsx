'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f1216] text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-16 text-center text-[#ffc107]">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-[#1c2028] shadow-xl border-none">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-[#ffc107] mb-6">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-center">
                <Phone className="w-8 h-8 text-[#ffc107] mr-6 flex-shrink-0" />
                <span className="text-xl  text-gray-100">+1 (952) 657-4313</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-[#ffc107] mr-6 flex-shrink-0" />
                <span className="text-xl  text-gray-100">mihertabadamu1@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-8 h-8 text-[#ffc107] mr-6 flex-shrink-0 mt-1" />
                <span className="text-xl  text-gray-100">Las Vegas</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-[#ffc107] mr-6 flex-shrink-0" />
                <span className="text-xl  text-gray-100">Available 24/7 for your luxury transportation needs</span>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="bg-[#1c2028] shadow-xl border-none">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-[#ffc107] mb-6">Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-xl">
                <tbody>
                  <tr>
                    <td className="py-3 pr-6 font-medium text-[#ffc107]">Monday - Sunday:</td>
                    <td className="py-3  text-gray-100">24/7</td>
                  </tr>
                  {/* <tr>
                    <td className="py-3 pr-6 font-medium text-[#ffc107]">Saturday:</td>
                    <td className="py-3  text-gray-100">10:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 font-medium text-[#ffc107]">Sunday:</td>
                    <td className="py-3  text-gray-100">Closed</td>
                  </tr> */}
                </tbody>
              </table>
              {/* <p className="mt-8 text-lg text-gray-100">
                Note: Our vehicle service is available 24/7. Office hours are for in-person inquiries and support.
              </p> */}
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Card className="mt-16 bg-[#1c2028] shadow-xl border-none">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-[#ffc107] mb-6">Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25682.51489385569!2d-115.17741651290859!3d36.11497253863503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c4383428d4eb%3A0x43e2195d0c26834c!2sLas%20Vegas%20Strip%2C%20NV%2C%20USA!5e0!3m2!1sen!2sus!4v1636338872183!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );


}