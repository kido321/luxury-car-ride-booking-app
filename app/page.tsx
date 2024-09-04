

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Shield, Clock, Car, ThumbsUp, User, DollarSign, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden animate-fade-in">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/limo-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-shadow animate-fade-in-up">
              Welcome to LuxeRide Limo Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow animate-fade-in-up animation-delay-300">
              Experience luxury transportation at competitive per-mile rates.
            </p>
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full text-xl transition duration-300 animate-bounce-up animation-delay-600">
              <Link href="/booking">Book Your Luxury Ride</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black-100 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Car className="w-12 h-12 text-amber-400" />}
              title="Luxurious Fleet"
              description="Choose from our wide range of high-end vehicles for any occasion."
            />
            <FeatureCard
              icon={<User className="w-12 h-12 text-amber-400" />}
              title="Professional Drivers"
              description="Our experienced chauffeurs ensure a safe and comfortable journey."
            />
            <FeatureCard
              icon={<DollarSign className="w-12 h-12 text-amber-400" />}
              title="Transparent Pricing"
              description="Pay only for the miles you travel with our competitive rates."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-black-900 bg-opacity-90 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-400 animate-fade-in-up">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            <Step number={1} description="Choose your pickup and drop-off locations" />
            <Step number={2} description="Select your preferred vehicle type" />
            <Step number={3} description="Get an instant quote based on the distance" />
            <Step number={4} description="Confirm and pay securely through our platform" />
            <Step number={5} description="Enjoy your luxurious ride!" />
          </div>
        </div>
      </section>

      {/* Why Choose LuxeRide Section */}
      <section className="py-32 bg-black-100 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-400 animate-fade-in-up">Why Choose LuxeRide?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Reason icon={<Clock className="w-6 h-6 text-amber-400" />} description="24/7 customer support" />
            <Reason icon={<Shield className="w-6 h-6 text-amber-400" />} description="Fully insured and licensed service" />
            <Reason icon={<Calendar className="w-6 h-6 text-amber-400" />} description="Flexible booking options" />
            <Reason icon={<Sparkles className="w-6 h-6 text-amber-400" />} description="Clean and well-maintained vehicles" />
            <Reason icon={<ThumbsUp className="w-6 h-6 text-amber-400" />} description="Satisfaction guaranteed" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p>&copy; 2024 LuxeRide Limo Service. All rights reserved.</p>
            </div>
            <div className="w-full md:w-auto space-x-4">
              <Link href="/terms" className="hover:text-amber-400 transition duration-300">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-amber-400 transition duration-300">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-amber-400 transition duration-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Component for feature cards
const FeatureCard = ({ icon, title, description }:any) => (
  <Card className="bg-gray-600 bg-opacity-90 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-slide-up">
    <CardHeader>
      <div className="flex justify-center mb-4 animate-pulse text-amber-600">{icon}</div>
      <CardTitle className="text-2xl font-semibold text-center text-amber-500">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-center text-white">{description}</p>
    </CardContent>
  </Card>
);

// Component for how it works steps
const Step = ({ number, description }:any) => (
  <div className="flex flex-col items-center text-center animate-slide-up">
    <div className="bg-amber-500 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">
      {number}
    </div>
    <p className="mt-2 text-amber-100">{description}</p>
  </div>
);

// Component for reasons to choose LuxeRide
const Reason = ({ icon, description }:any) => (
  <Card className="bg-gray-700 bg-opacity-90 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-slide-up">
    <CardContent className="flex items-center p-4">
      <div className="mr-4 animate-pulse">{icon}</div>
      <p className="text-white">{description}</p>
    </CardContent>
  </Card>
);
