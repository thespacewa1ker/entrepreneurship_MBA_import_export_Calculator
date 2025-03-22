import React from 'react';
import { Box, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Box className="h-6 w-6" />
              <span className="text-lg font-bold">Ex-Tario</span>
            </div>
            <p className="text-blue-100">
              Your trusted partner in international trade and customs duty calculation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#calculator" className="text-blue-100 hover:text-white">Calculator</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-blue-100">Tariff Calculator</li>
              <li className="text-blue-100">Smart Shipment</li>
              <li className="text-blue-100">Export Consultancy</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-blue-100">contact@extario.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-blue-100">+91 6362621169</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-blue-100">IIT Jodhpur, NH 65, Nagaur Road, Karwar, Rajasthan 342037</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Ex-Tario. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer