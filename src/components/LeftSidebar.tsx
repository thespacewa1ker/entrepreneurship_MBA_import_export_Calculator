import React from 'react';
import { Filters, COUNTRIES, PRODUCTS, Country } from '../types';
import { useTranslation } from 'react-i18next'; // Import translation hook

interface LeftSidebarProps {
  filters: Filters;
  onFilterChange: (name: string, value: string | number) => void;
  onCalculate: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ filters, onFilterChange, onCalculate }) => {
  const { t } = useTranslation(); // Initialize translation hook
  const availableProducts = filters.importingCountry ? PRODUCTS[filters.importingCountry as Country] : [];

  return (
    <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{t('filters')}</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="exportingCountry" className="block text-sm font-medium text-gray-700 mb-1">
            {t('exportingCountry')}
          </label>
          <input
            type="text"
            id="exportingCountry"
            value="India"
            disabled
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
          />
        </div>
        
        <div>
          <label htmlFor="importingCountry" className="block text-sm font-medium text-gray-700 mb-1">
            {t('importingCountry')}
          </label>
          <select
            id="importingCountry"
            value={filters.importingCountry}
            onChange={(e) => onFilterChange('importingCountry', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">{t('selectCountry')}</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
            {t('product')}
          </label>
          <select
            id="productName"
            value={filters.productName}
            onChange={(e) => onFilterChange('productName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!filters.importingCountry}
          >
            <option value="">{t('selectProduct')}</option>
            {availableProducts.map((product) => (
              <option key={product.hsCode} value={product.name}>
                {product.name} (HS: {product.hsCode})
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="port" className="block text-sm font-medium text-gray-700 mb-1">
            {t('port')}
          </label>
          <input
            type="text"
            id="port"
            value={filters.port}
            onChange={(e) => onFilterChange('port', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('portPlaceholder')}
          />
        </div>
        
        <div>
          <label htmlFor="productValue" className="block text-sm font-medium text-gray-700 mb-1">
            {t('productValue')}
          </label>
          <input
            type="number"
            id="productValue"
            value={filters.productValue}
            onChange={(e) => onFilterChange('productValue', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('productValuePlaceholder')}
          />
        </div>
        
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
            {t('quantity')}
          </label>
          <input
            type="number"
            id="quantity"
            value={filters.quantity}
            onChange={(e) => onFilterChange('quantity', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('quantityPlaceholder')}
          />
        </div>
        
        <button
          onClick={onCalculate}
          disabled={!filters.importingCountry || !filters.productName}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {t('calculate')}
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
