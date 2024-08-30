import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const BookingConfirmationDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  bookingDetails 
}:any) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Your Booking</DialogTitle>
          <DialogDescription>
            Please review the details of your booking below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Date:</span>
            <span className="col-span-3">{bookingDetails.date}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Time:</span>
            <span className="col-span-3">{bookingDetails.time}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">From:</span>
            <span className="col-span-3">{bookingDetails.pickupAddress}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">To:</span>
            <span className="col-span-3">{bookingDetails.dropoffAddress}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Car:</span>
            <span className="col-span-3">{bookingDetails.carType}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Car:</span>
            <span className="col-span-3">{bookingDetails.price}$</span>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>Confirm Booking</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};