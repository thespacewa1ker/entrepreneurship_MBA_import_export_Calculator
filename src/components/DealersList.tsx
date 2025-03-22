import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Clock, Award } from 'lucide-react';

interface Dealer {
  id: number;
  name: string;
  rating: number;
  price: number;
  mode: string;
  deliveryTime: string;
  experience: string;
}

interface DealersListProps {
  dealers: Dealer[];
  selectedDealer: number | null;
  onDealerSelect: (id: number) => void;
  mode: string;
}

const DealersList: React.FC<DealersListProps> = ({ 
  dealers, 
  selectedDealer, 
  onDealerSelect,
  mode 
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('availableDealers')}</h2>
      
      {dealers.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {t('noDealers')}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dealers.map((dealer) => (
            <div
              key={dealer.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedDealer === dealer.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => onDealerSelect(dealer.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800">{dealer.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{dealer.rating}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t('serviceCharge')}:</span>
                  <span className="font-semibold text-green-600">${dealer.price}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{dealer.deliveryTime}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>{dealer.experience}</span>
                </div>
              </div>
              
              {selectedDealer === dealer.id && (
                <div className="mt-3 text-sm text-blue-600 font-medium">
                  ✓ {t('selectedForShipping')}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DealersList;
