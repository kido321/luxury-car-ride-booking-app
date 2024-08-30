// 'use client'
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { DatePickerWithRange } from "@/components/Date-range-picker";


// const formSchema = z.object({
//   pickupLocation: z.string().min(1, { message: "Pickup location is required" }),
//   dropoffLocation: z.string().min(1, { message: "Drop-off location is required" }),
//   dateRange: z.object({
//     from: z.date(),
//     to: z.date(),
//   }),
//   vehicleType: z.string().min(1, { message: "Please select a vehicle type" }),
//   passengers: z.number().min(1).max(20),
// });

// export default function BookingPage() {
//   const [dateRange, setDateRange] = useState({ from: new Date(), to: new Date() });

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       pickupLocation: "",
//       dropoffLocation: "",
//       dateRange: { from: new Date(), to: new Date() },
//       vehicleType: "",
//       passengers: 1,
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//     // Here you would typically send this data to your backend
//     alert("Booking submitted! Check console for details.");
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
//       <div className="container mx-auto px-4 py-8">
//         <Card className="w-full max-w-4xl mx-auto bg-gray-800">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold text-center">Book Your Luxury Ride</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <FormField
//                   control={form.control}
//                   name="pickupLocation"
//                   render={({ field }:any) => (
//                     <FormItem>
//                       <FormLabel>Pickup Location</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Enter pickup address" {...field} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="dropoffLocation"
//                   render={({ field }:any) => (
//                     <FormItem>
//                       <FormLabel>Drop-off Location</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Enter drop-off address" {...field} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="dateRange"
//                   render={({ field }:any) => (
//                     <FormItem className="flex flex-col">
//                       <FormLabel>Date Range</FormLabel>
//                       <DatePickerWithRange date={dateRange} setDate={(newDateRange: any) => {
//                         setDateRange(newDateRange);
//                         field.onChange(newDateRange);
//                       }} className="bg-gray-700 text-white" />
//                       <FormDescription>Select your trip dates</FormDescription>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="vehicleType"
//                   render={({ field }:any) => (
//                     <FormItem>
//                       <FormLabel>Vehicle Type</FormLabel>
//                       <Select onValueChange={field.onChange} defaultValue={field.value}>
//                         <FormControl>
//                           <SelectTrigger className="bg-gray-700 text-white">
//                             <SelectValue placeholder="Select a vehicle type" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent className="bg-gray-700 text-white">
//                           <SelectItem value="sedan">Luxury Sedan</SelectItem>
//                           <SelectItem value="suv">SUV</SelectItem>
//                           <SelectItem value="limo">Stretch Limousine</SelectItem>
//                           <SelectItem value="van">Executive Van</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="passengers"
//                   render={({ field }:any) => (
//                     <FormItem>
//                       <FormLabel>Number of Passengers</FormLabel>
//                       <FormControl>
//                         <Input type="number" {...field} onChange={(e:any) => field.onChange(parseInt(e.target.value))} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
//                   Book Now
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// const formSchema = z.object({
//   pickupLocation: z.string().min(1, { message: "Pickup location is required" }),
//   dropoffLocation: z.string().min(1, { message: "Drop-off location is required" }),
//   startDate: z.string().min(1, { message: "Start date is required" }),
//   endDate: z.string().min(1, { message: "End date is required" }),
//   vehicleType: z.string().min(1, { message: "Please select a vehicle type" }),
//   passengers: z.number().min(1).max(20),
// });

// export default function BookingPage() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       pickupLocation: "",
//       dropoffLocation: "",
//       startDate: "",
//       endDate: "",
//       vehicleType: "",
//       passengers: 1,
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//     // Here you would typically send this data to your backend
//     alert("Booking submitted! Check console for details.");
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
  
//       <div className="container mx-auto px-4 py-8">
//         <Card className="w-full max-w-4xl mx-auto bg-gray-800">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold text-center">Book Your Luxury Ride</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <FormField
//                   control={form.control}
//                   name="pickupLocation"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Pickup Location</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Enter pickup address" {...field} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="dropoffLocation"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Drop-off Location</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Enter drop-off address" {...field} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="startDate"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Start Date</FormLabel>
//                         <FormControl>
//                           <Input type="date" {...field} className="bg-gray-700 text-white" />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="endDate"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>End Date</FormLabel>
//                         <FormControl>
//                           <Input type="date" {...field} className="bg-gray-700 text-white" />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <FormField
//                   control={form.control}
//                   name="vehicleType"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Vehicle Type</FormLabel>
//                       <Select onValueChange={field.onChange} defaultValue={field.value}>
//                         <FormControl>
//                           <SelectTrigger className="bg-gray-700 text-white">
//                             <SelectValue placeholder="Select a vehicle type" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent className="bg-gray-700 text-white">
//                           <SelectItem value="sedan">Luxury Sedan</SelectItem>
//                           <SelectItem value="suv">SUV</SelectItem>
//                           <SelectItem value="limo">Stretch Limousine</SelectItem>
//                           <SelectItem value="van">Executive Van</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="passengers"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Number of Passengers</FormLabel>
//                       <FormControl>
//                         <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
//                   Book Now
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// // }
// 'use client';

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// const formSchema = z.object({
//   pickupLocation: z.string().min(1, { message: "Pickup location is required" }),
//   dropoffLocation: z.string().min(1, { message: "Drop-off location is required" }),
//   pickupDate: z.string().min(1, { message: "Pickup date is required" }),
//   pickupHour: z.string().min(1, { message: "Pickup hour is required" }),
//   pickupMinute: z.string().min(1, { message: "Pickup minute is required" }),
//   vehicleType: z.string().min(1, { message: "Please select a vehicle type" }),
//   passengers: z.number().min(1).max(20),
// });

// export default function BookingPage() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       pickupLocation: "",
//       dropoffLocation: "",
//       pickupDate: "",
//       pickupHour: "",
//       pickupMinute: "",
//       vehicleType: "",
//       passengers: 1,
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//     // Here you would typically send this data to your backend
//     alert("Booking submitted! Check console for details.");
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
//       <div className="container mx-auto px-4 py-8">
//         <Card className="w-full max-w-4xl mx-auto bg-gray-800">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold text-center">Book Your Luxury Ride</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <FormField
//                   control={form.control}
//                   name="pickupLocation"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Pickup Location</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Enter pickup address" {...field} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="dropoffLocation"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Drop-off Location</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Enter drop-off address" {...field} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="pickupDate"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Pickup Date</FormLabel>
//                         <FormControl>
//                           <Input type="date" {...field} className="bg-gray-700 text-white" />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="pickupHour"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Hour</FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl>
//                             <SelectTrigger className="bg-gray-700 text-white">
//                               <SelectValue placeholder="Hour" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent className="bg-gray-700 text-white">
//                             {[...Array(24)].map((_, i) => (
//                               <SelectItem key={i} value={i.toString().padStart(2, '0')}>
//                                 {i.toString().padStart(2, '0')}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="pickupMinute"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Minute</FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl>
//                             <SelectTrigger className="bg-gray-700 text-white">
//                               <SelectValue placeholder="Minute" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent className="bg-gray-700 text-white">
//                             {['00', '15', '30', '45'].map((minute) => (
//                               <SelectItem key={minute} value={minute}>
//                                 {minute}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <FormField
//                   control={form.control}
//                   name="vehicleType"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Vehicle Type</FormLabel>
//                       <Select onValueChange={field.onChange} defaultValue={field.value}>
//                         <FormControl>
//                           <SelectTrigger className="bg-gray-700 text-white">
//                             <SelectValue placeholder="Select a vehicle type" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent className="bg-gray-700 text-white">
//                           <SelectItem value="sedan">Luxury Sedan</SelectItem>
//                           <SelectItem value="suv">SUV</SelectItem>
//                           <SelectItem value="limo">Stretch Limousine</SelectItem>
//                           <SelectItem value="van">Executive Van</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="passengers"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Number of Passengers</FormLabel>
//                       <FormControl>
//                         <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
//                   Book Now
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// // Replace with your actual Mapbox access token


// const formSchema = z.object({
//   pickupLocation: z.string().min(1, { message: "Pickup location is required" }),
//   dropoffLocation: z.string().min(1, { message: "Drop-off location is required" }),
//   pickupDate: z.string().min(1, { message: "Pickup date is required" }),
//   pickupHour: z.string().min(1, { message: "Pickup hour is required" }),
//   pickupMinute: z.string().min(1, { message: "Pickup minute is required" }),
//   vehicleType: z.string().min(1, { message: "Please select a vehicle type" }),
//   passengers: z.number().min(1).max(20),
// });

// export default function BookingPage() {
//   const mapContainer = useRef<HTMLDivElement | null>(null);
//   const map = useRef<mapboxgl.Map | null>(null);
//   const [lng, setLng] = useState(-74.006);
//   const [lat, setLat] = useState(40.7128);
//   const [zoom, setZoom] = useState(12);

//   const [pickupMarker, setPickupMarker] = useState<mapboxgl.Marker | null>(null);
//   const [dropoffMarker, setDropoffMarker] = useState<mapboxgl.Marker | null>(null);
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       pickupLocation: "",
//       dropoffLocation: "",
//       pickupDate: "",
//       pickupHour: "",
//       pickupMinute: "",
//       vehicleType: "",
//       passengers: 1,
//     },
//   });

  
//   useEffect(() => {
//     if (map.current || !mapContainer.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });

//     map.current.on('click', (e) => {
//       const { lng, lat } = e.lngLat;
//       if (!pickupMarker) {
//         const marker = new mapboxgl.Marker({ color: "#3FB1CE" })
//           .setLngLat([lng, lat])
//           .addTo(map.current!);
//         setPickupMarker(marker);
//         form.setValue('pickupLocation', `${lng.toFixed(6)}, ${lat.toFixed(6)}`);
//       } else if (!dropoffMarker) {
//         const marker = new mapboxgl.Marker({ color: "#F7455D" })
//           .setLngLat([lng, lat])
//           .addTo(map.current!);
//         setDropoffMarker(marker);
//         form.setValue('dropoffLocation', `${lng.toFixed(6)}, ${lat.toFixed(6)}`);
//       }
//     });
//   }, []);

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//     alert("Booking submitted! Check console for details.");
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
//       <div className="container mx-auto px-4 py-8">
//         <Card className="w-full max-w-4xl mx-auto bg-gray-800">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold text-center">Book Your Luxury Ride</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div ref={mapContainer} className="w-full h-64 mb-6" />
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                 <FormField
//                   control={form.control}
//                   name="pickupLocation"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Pickup Location</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Click on the map to set pickup" {...field} className="bg-gray-700 text-white" readOnly />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="dropoffLocation"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Drop-off Location</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Click on the map to set drop-off" {...field} className="bg-gray-700 text-white" readOnly />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="pickupDate"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Pickup Date</FormLabel>
//                         <FormControl>
//                           <Input type="date" {...field} className="bg-gray-700 text-white" />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="pickupHour"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Hour</FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl>
//                             <SelectTrigger className="bg-gray-700 text-white">
//                               <SelectValue placeholder="Hour" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent className="bg-gray-700 text-white">
//                             {[...Array(24)].map((_, i) => (
//                               <SelectItem key={i} value={i.toString().padStart(2, '0')}>
//                                 {i.toString().padStart(2, '0')}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="pickupMinute"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Minute</FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl>
//                             <SelectTrigger className="bg-gray-700 text-white">
//                               <SelectValue placeholder="Minute" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent className="bg-gray-700 text-white">
//                             {['00', '15', '30', '45'].map((minute) => (
//                               <SelectItem key={minute} value={minute}>
//                                 {minute}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//                 <FormField
//                   control={form.control}
//                   name="vehicleType"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Vehicle Type</FormLabel>
//                       <Select onValueChange={field.onChange} defaultValue={field.value}>
//                         <FormControl>
//                           <SelectTrigger className="bg-gray-700 text-white">
//                             <SelectValue placeholder="Select a vehicle type" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent className="bg-gray-700 text-white">
//                           <SelectItem value="sedan">Luxury Sedan</SelectItem>
//                           <SelectItem value="suv">SUV</SelectItem>
//                           <SelectItem value="limo">Stretch Limousine</SelectItem>
//                           <SelectItem value="van">Executive Van</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="passengers"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Number of Passengers</FormLabel>
//                       <FormControl>
//                         <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} className="bg-gray-700 text-white" />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
//                   Book Now
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }



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


  useEffect(()=>{

    console.log(userLocation , 'user_location')
    console.log(soruceCordinates, 'sores')
    console.log(directionData,  'dir')

  },
  
  [userLocation , soruceCordinates, directionData])
  return (
    <div className='bg-gradient-to-b from-gray-900 to-white to-gray-900'>
       <SelectedCarContext.Provider value={{selectedCar,setSelectedCar}}>
      <ContactProvider>
       
      <SelectedCarAmountContext.Provider value={{selectedCarAmount,setSelectedCarAmount}}>
            <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <SourceCordiContext.Provider value={{soruceCordinates,setSourceCordinates}}>
      <DestinationCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
      <DirectionDataContext.Provider value={{directionData,setDirectionData}}>
      {/* <div className='flex grid grid-cols-1 
     md:grid-cols-3 '>
        <div className=''>
          <Booking/>
        </div>
        <div className='col-span-2
        '>
          <MapboxMap/>
        </div>
     </div> */}

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