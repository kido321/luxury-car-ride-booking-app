'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 bg-opacity-80 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-amber-500 text-xl font-bold">LuxeRide</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/fleet">Our Fleet</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <Button asChild variant="outline" className="text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white">
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6 text-amber-500" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/fleet">Our Fleet</MobileNavLink>
            <MobileNavLink href="/about">About Us</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <Button asChild variant="outline" className="w-full text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white mt-2">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </Link>
);

export default Navbar;