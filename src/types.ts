export interface Filters {
  productName: string;
  exportingCountry: string;
  importingCountry: string;
  port: string;
  productValue: number;
  quantity: number;
  origin: string;
  destination: string;
  mode: string;
  startDate: string;
  endDate: string;
}
export interface DutyCalculation {
  preDutyTotalCost: number; 
  basicDuty: number;
  additionalDuty: number;
  totalDuty: number;
  totalCost: number;
}


export interface Dealer {
  id: number;
  name: string;
  rating: number;
  price: number;
  mode: string;
  deliveryTime: string;
  experience: string;
}

export interface Product {
  name: string;
  hsCode: string;
  country: string;
  basicDuty: number;
  additionalDuty: number;
  totalDuty: number;
}

export const COUNTRIES = [
  'USA',
  'Netherlands',
  'China',
  'Singapore',
  'Australia',
  'UAE'
] as const;
export type Country = typeof COUNTRIES[number];

export const PRODUCTS: Record<Country, Product[]> = {
  'USA': [
    { name: 'Rice', hsCode: '842155', country: 'USA', basicDuty: 3, additionalDuty: 1, totalDuty: 4 },
    { name: 'Cotton', hsCode: '787303', country: 'USA', basicDuty: 0, additionalDuty: 1, totalDuty: 1 },
    { name: 'Motor Cars', hsCode: '870323', country: 'USA', basicDuty: 5, additionalDuty: 5, totalDuty: 10 },
    
    { name: 'Sugar', hsCode: '264199', country: 'USA', basicDuty: 3, additionalDuty: 0.5, totalDuty: 3.5 },
    { name: 'Tea', hsCode: '922240', country: 'USA', basicDuty: 6, additionalDuty: 0, totalDuty: 6 }
  ],
  'Netherlands': [
    { name: 'Motor cars, petrol, >1500cc but <=3000cc', hsCode: '870323', country: 'NH', basicDuty: 5, additionalDuty: 5, totalDuty: 10 },
    { name: 'Motor cars, petrol, >3000cc', hsCode: '870324', country: 'NH', basicDuty: 5, additionalDuty: 5, totalDuty: 10 },
    { name: 'Gear boxes and parts thereof', hsCode: '870840', country: 'NH', basicDuty: 2.5, additionalDuty: 1, totalDuty: 3.5 },
    { name: "Women's dresses of cotton, knitted", hsCode: '610442', country: 'NH', basicDuty: 0, additionalDuty: 0, totalDuty: 0 },
    { name: "Men's shirts of cotton, knitted", hsCode: '610510', country: 'NH', basicDuty: 10, additionalDuty: 2, totalDuty: 12 }
  ],
  'China': [
    { name: "Processors and Controllers", hsCode: "854231", country: "China", basicDuty: 0, additionalDuty: 13, totalDuty: 13 },
    { name: "Memories", hsCode: "854232", country: "China", basicDuty: 0, additionalDuty: 13, totalDuty: 13 },
    { name: "Amplifiers", hsCode: "854233", country: "China", basicDuty: 0, additionalDuty: 13, totalDuty: 13 },
    { name: "Other Electronic Integrated Circuits", hsCode: "854239", country: "China", basicDuty: 0, additionalDuty: 13, totalDuty: 13 },
    
    { name: "Static Converters (e.g., Rectifiers)", hsCode: "850440", country: "China", basicDuty: 0, additionalDuty: 21, totalDuty: 21 },
    { name: "Inductors", hsCode: "850450", country: "Singapore", basicDuty: 0, additionalDuty: 9, totalDuty: 9 },

    { name: "Other Primary Cells and Batteries", hsCode: "850680", country: "China", basicDuty: 0, additionalDuty: 23, totalDuty: 23 },
    { name: "Parts of Primary Cells and Batteries", hsCode: "850690", country: "China", basicDuty: 0, additionalDuty: 23, totalDuty: 23 },

    { name: "Other Lead-Acid Accumulators", hsCode: "850720", country: "China", basicDuty: 0, additionalDuty: 23, totalDuty: 23 },
  ],
  'Singapore': [
    { name: 'Motor Cars', hsCode: '870323', country: 'Singapore', basicDuty: 4, additionalDuty: 6, totalDuty: 10 },
    { name: 'Memories', hsCode: '854232', country: 'Singapore', basicDuty: 0, additionalDuty: 9, totalDuty: 9 },
    { name: 'Inductors', hsCode: '850450', country: 'Singapore', basicDuty: 0, additionalDuty: 9, totalDuty: 9 }
  ],
  'Australia': [
    { name: 'Motor Cars', hsCode: '870323', country: 'Australia', basicDuty: 5, additionalDuty: 5, totalDuty: 10 },
     { name: "Dried glands, extracts, heparin", hsCode: "3001", country: "Australia", basicDuty: 0, additionalDuty: 10, totalDuty: 10 },
    { name: "Acyclic alcohols and their derivatives", hsCode: "2905", country: "Australia", basicDuty: 0, additionalDuty: 10, totalDuty: 15 },
    { name: "Raw silk (not thrown)", hsCode: "5002", country: "Australia", basicDuty: 0, additionalDuty: 10, totalDuty: 10 }
  ],
  'UAE': [
    { name: 'Motor Cars', hsCode: '870323', country: 'UAE', basicDuty: 3, additionalDuty: 7, totalDuty: 10 },
    { name: 'Diesel Fuel', hsCode: '271019', country: 'UAE', basicDuty: 5, additionalDuty: 5, totalDuty: 10 },
    { name: 'Natural Gas, Liquefied', hsCode: '271111', country: 'UAE', basicDuty: 5, additionalDuty: 5, totalDuty: 10 }
  ]
};
