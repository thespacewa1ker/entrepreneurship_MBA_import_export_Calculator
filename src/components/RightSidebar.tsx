import React from 'react';
import { useTranslation } from 'react-i18next';

interface Dealer {
  id: number;
  name: string;
  rating: number;
  price: number;
  mode: string;
  deliveryTime: string;
  experience: string;
}

interface RightSidebarProps {
  startDate: string;
  endDate: string;
  onDateChange: (name: string, value: string) => void;
  selectedDealer: Dealer | undefined;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ 
  startDate, 
  endDate, 
  onDateChange,
  selectedDealer 
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{t('expectedExportDateRange')}</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
            {t('startDate')}
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => onDateChange('startDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
            {t('endDate')}
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => onDateChange('endDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="mt-6 p-3 bg-blue-50 rounded-md">
        <h3 className="text-sm font-medium mb-2 text-blue-700">{t('shippingInformation')}</h3>
        {selectedDealer ? (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">{t('selectedDealer')}:</span>
              <span className="font-medium">{selectedDealer.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('deliveryTime')}:</span>
              <span className="font-medium">{selectedDealer.deliveryTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('serviceCharge')}:</span>
              <span className="font-medium text-green-600">${selectedDealer.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('mode')}:</span>
              <span className="font-medium">{selectedDealer.mode}</span>
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-500 italic">
            {t('selectDealerToViewDetails')}
          </div>
        )}
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <h3 className="text-sm font-medium mb-2 text-gray-700">{t('requiredDocuments')}</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>{t('commercialInvoice')}</li>
          <li>{t('packingList')}</li>
          <li>{t('billOfLading')}</li>
          <li>{t('certificateOfOrigin')}</li>
          <li>{t('importLicense')}</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;