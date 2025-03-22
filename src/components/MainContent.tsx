import React, { useEffect, useState } from 'react';
import { DutyCalculation } from '../types';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

interface MainContentProps {
  dutyCalculation: DutyCalculation | null;
}

const MainContent: React.FC<MainContentProps> = ({ dutyCalculation }) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.on('languageChanged', (lng) => setLanguage(lng));
  }, []);

  if (!dutyCalculation) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('dutyCalculation')}</h2>
        <p className="text-gray-500 text-center py-8">{t('enterDetails')}</p>
      </div>
    );
  }

  const { preDutyTotalCost, basicDuty, additionalDuty, totalDuty, totalCost } = dutyCalculation;
  
  const totalForPercentage = basicDuty + additionalDuty;
  const basicDutyPercentage = totalForPercentage ? (basicDuty / totalForPercentage) * 100 : 0;
  const additionalDutyPercentage = totalForPercentage ? (additionalDuty / totalForPercentage) * 100 : 0;
  
  return (
    <div key={language} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">{t('dutyCalculation')}</h2>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">{t('totalDuty')}:</span>
          <span className="text-2xl font-bold text-blue-700">${totalDuty.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{t('basicDuty')}</span>
            <span className="text-sm font-medium text-gray-700">${basicDuty.toFixed(2)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full" 
              style={{ width: `${basicDutyPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{t('additionalDuty')}</span>
            <span className="text-sm font-medium text-gray-700">${additionalDuty.toFixed(2)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-teal-500 h-4 rounded-full" 
              style={{ width: `${additionalDutyPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          {/* Basic Duty */}
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm text-gray-500">{t('basicDuty')}</div>
            <div className="text-lg font-semibold">${basicDuty.toFixed(2)}</div>
            <div className="text-xs text-gray-400">{basicDutyPercentage.toFixed(1)}% {t('ofDuties')}</div>
          </div>
          
          {/* Additional Duty */}
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm text-gray-500">{t('additionalDuty')}</div>
            <div className="text-lg font-semibold">${additionalDuty.toFixed(2)}</div>
            <div className="text-xs text-gray-400">{additionalDutyPercentage.toFixed(1)}% {t('ofDuties')}</div>
          </div>
          
          {/* Pre-duty Total Cost */}
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm text-gray-600">{t('totalCostBeforeTariffs')}</div>
            <div className="text-lg font-semibold text-gray-800">${preDutyTotalCost.toFixed(2)}</div>
            <div className="text-xs text-gray-400">{t('beforeDuties')}</div>
          </div>
          
          {/* Total Duty */}
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-sm text-gray-600">{t('totalDuty')}</div>
            <div className="text-lg font-semibold text-blue-700">${totalDuty.toFixed(2)}</div>
            <div className="text-xs text-gray-400">{t('afterDuties')}</div>
          </div>
          
          {/* Total Cost after Tariffs */}
          <div className="bg-blue-50 p-3 rounded-md col-span-2">
            <div className="text-sm text-blue-600">{t('totalCost')}</div>
            <div className="text-lg font-semibold text-blue-700">${totalCost.toFixed(2)}</div>
            <div className="text-xs text-blue-400">{t('includingDuties')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;