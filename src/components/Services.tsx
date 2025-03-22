import React from 'react';
import { Calculator, Ship, FileText } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tariff Calculator Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tariff Calculator</h3>
            <p className="text-gray-600">
              Calculate import/export duties and taxes accurately with our advanced tariff calculator.
              Get instant estimates for your international shipments.
            </p>
          </div>

          {/* Smart Shipment Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Ship className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Shipment</h3>
            <p className="text-gray-600">
              Optimize your shipping routes and costs with our intelligent shipment planning system.
              Track and manage your shipments efficiently.
            </p>
          </div>

          {/* Export Consultancy Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Export Consultancy</h3>
            <p className="text-gray-600">
              Get expert guidance on international trade regulations, documentation,
              and compliance requirements for smooth export operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;