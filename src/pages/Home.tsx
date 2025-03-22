import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import MainContent from '../components/MainContent';
import RightSidebar from '../components/RightSidebar';
import WorldMap from '../components/WorldMap';
import DealersList from '../components/DealersList';
import Footer from '../components/Footer';
import { Filters, DutyCalculation, PRODUCTS, Country, Dealer } from '../types';
import '../i18n/i18n';
import i18n from 'i18next';

function Home() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<Filters>({
    origin: 'India',
    destination: '',
    mode: 'Sea',
    productName: '',
    exportingCountry: 'India',
    importingCountry: '',
    port: 'Mumbai Port',
    productValue: 10000,
    quantity: 10,
    startDate: '2025-04-03',
    endDate: '2025-11-03'
  });

  const [dutyCalculation, setDutyCalculation] = useState<DutyCalculation | null>(null);
  const [selectedDealer, setSelectedDealer] = useState<number | null>(null);
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on('languageChanged', (lng) => setLanguage(lng));
  }, []);

  const dealers: Dealer[] = [
    { id: 1, name: t('ecoTransports'), rating: 4.5, price: 400, mode: "alternative", deliveryTime: "10 Days", experience: "6+ Years", destination: "USA" },
    { id: 2, name: t('eliteFreight'), rating: 4.9, price: 650, mode: "direct", deliveryTime: "2 Days", experience: "15+ Years", destination: "USA" },
    { id: 3, name: t('skyCargo'), rating: 4.8, price: 580, mode: "direct", deliveryTime: "3 Days", experience: "11+ Years", destination: "USA" },
    { id: 4, name: t('primeShipping'), rating: 4.7, price: 530, mode: "medium", deliveryTime: "5 Days", experience: "8+ Years", destination: "USA" },
    { id: 5, name: t('budgetHaulers'), rating: 4.2, price: 350, mode: "alternative", deliveryTime: "12 Days", experience: "4+ Years", destination: "China" },
    { id: 6, name: t('reliableMovers'), rating: 4.3, price: 370, mode: "medium", deliveryTime: "9 Days", experience: "5+ Years", destination: "China" },
    { id: 7, name: t('speedyLogistics'), rating: 4.6, price: 600, mode: "direct", deliveryTime: "4 Days", experience: "9+ Years", destination: "China" },
    { id: 8, name: t('quickShip'), rating: 4.9, price: 630, mode: "direct", deliveryTime: "3 Days", experience: "12+ Years", destination: "China" }
  ];

  const handleFilterChange = (name: string, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'importingCountry' ? { productName: '', destination: value as string } : {})
    }));
  };

  const calculateDuty = () => {
    const country = filters.importingCountry as Country;
    const product = PRODUCTS[country]?.find(p => p.name === filters.productName);
    if (!product) return;

    const preDutyTotalCost = filters.productValue * filters.quantity;
    const basicDuty = preDutyTotalCost * (product.basicDuty / 100);
    const additionalDuty = preDutyTotalCost * (product.additionalDuty / 100);
    const totalDuty = basicDuty + additionalDuty;
    const totalCost = preDutyTotalCost + totalDuty;

    setDutyCalculation({ preDutyTotalCost, basicDuty, additionalDuty, totalDuty, totalCost });
  };

  return (
    <div className="flex-1">
      <Header filters={filters} onFilterChange={handleFilterChange} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <LeftSidebar filters={filters} onFilterChange={handleFilterChange} onCalculate={calculateDuty} />
          
          <div className="flex-1 space-y-8">
            <MainContent key={language} dutyCalculation={dutyCalculation} />
            <WorldMap origin={filters.origin} destination={filters.destination} mode={filters.mode} />
            <DealersList dealers={dealers} selectedDealer={selectedDealer} onDealerSelect={setSelectedDealer} mode={filters.mode} />
          </div>
          
          <RightSidebar startDate={filters.startDate} endDate={filters.endDate} onDateChange={handleFilterChange} selectedDealer={dealers.find(d => d.id === selectedDealer)} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;