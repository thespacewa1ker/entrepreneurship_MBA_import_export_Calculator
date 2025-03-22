import React from 'react';
import { X, Ship, Plane, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  filters: {
    origin: string;
    destination: string;
    mode: string;
  };
  onFilterChange: (name: string, value: string) => void;
  onClearFilters: () => void;
}

const Header: React.FC<HeaderProps> = ({ filters, onFilterChange, onClearFilters }) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto">
        {/* Title and Clear Filters Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-700">{t('dutyCalculation')}</h1>
          <button 
            onClick={onClearFilters}
            className="flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1 rounded-md hover:bg-red-100 transition-colors"
          >
            <X size={16} />
            <span>{t('clearFilters')}</span>
          </button>
        </div>

        {/* Language Switcher Dropdown */}
        <div className="flex justify-end mb-4">
          <select
            className="border px-3 py-1 rounded-md"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>
        </div>

        {/* Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Origin Filter */}
          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="font-medium mb-2">{t('origin')}</h3>
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="origin-india" 
                checked={filters.origin === 'India'} 
                onChange={() => onFilterChange('origin', 'India')}
                className="rounded text-blue-600"
              />
              <label htmlFor="origin-india">{t('india')}</label>
            </div>
          </div>

          {/* Destination Filter */}
          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="font-medium mb-2">{t('destination')}</h3>
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="destination-usa" 
                checked={filters.destination === 'USA'} 
                onChange={() => onFilterChange('destination', 'USA')}
                className="rounded text-blue-600"
              />
              <label htmlFor="destination-usa">{t('usa')}</label>
            </div>
          </div>

          {/* Transport Mode Filter */}
          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="font-medium mb-2">{t('transportMode')}</h3>
            <div className="flex flex-wrap gap-3">
              <button 
                className={`flex items-center gap-1 px-3 py-1 rounded-md ${filters.mode === 'Air' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => onFilterChange('mode', 'Air')}
              >
                <Plane size={16} />
                <span>{t('air')}</span>
              </button>
              <button 
                className={`flex items-center gap-1 px-3 py-1 rounded-md ${filters.mode === 'Sea' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => onFilterChange('mode', 'Sea')}
              >
                <Ship size={16} />
                <span>{t('sea')}</span>
              </button>
              <button 
                className={`flex items-center gap-1 px-3 py-1 rounded-md ${filters.mode === 'Road' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => onFilterChange('mode', 'Road')}
              >
                <Truck size={16} />
                <span>{t('road')}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-500 italic">
          <p>{t('portNote')}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
