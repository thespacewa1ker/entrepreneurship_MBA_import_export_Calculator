import React from 'react';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="py-8">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;