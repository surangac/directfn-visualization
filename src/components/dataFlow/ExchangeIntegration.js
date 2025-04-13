import React, { useState } from 'react';
import { Globe } from 'lucide-react';

/**
 * ExchangeIntegration - Component for the Exchange Integration stage
 */
const ExchangeIntegration = () => {
  const [selectedSource, setSelectedSource] = useState('nyse');
  
  // Exchange data sources
  const dataSources = {
    nyse: { name: "NYSE", description: "New York Stock Exchange - US equities and ETFs", color: "#4299E1" },
    nasdaq: { name: "NASDAQ", description: "US technology and growth stocks", color: "#9F7AEA" },
    tdwl: { name: "TDWL", description: "Tadawul Exchange - Saudi Arabian market", color: "#68D391" },
    adx: { name: "ADX", description: "Abu Dhabi Securities Exchange", color: "#F6AD55" },
    kse: { name: "KSE", description: "Kuwait Stock Exchange", color: "#FC8181" }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(dataSources).map(key => (
          <button
            key={key}
            onClick={() => setSelectedSource(key)}
            className={`px-3 py-1 rounded-full text-sm ${selectedSource === key ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300'}`}
            style={{borderColor: selectedSource === key ? 'transparent' : dataSources[key].color}}
          >
            {dataSources[key].name}
          </button>
        ))}
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4" style={{borderColor: dataSources[selectedSource].color}}>
        <h4 className="font-bold text-gray-800">{dataSources[selectedSource].name}</h4>
        <p className="text-gray-600">{dataSources[selectedSource].description}</p>
        <div className="mt-2 flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-xs text-green-600">Connected - Receiving Data</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-gray-500">Latency:</span> 
            <span className="ml-1 font-medium">86ms</span>
          </div>
          <div>
            <span className="text-gray-500">Data Points/sec:</span> 
            <span className="ml-1 font-medium">12,845</span>
          </div>
          <div>
            <span className="text-gray-500">Integration Type:</span> 
            <span className="ml-1 font-medium">Direct API</span>
          </div>
          <div>
            <span className="text-gray-500">Status:</span> 
            <span className="ml-1 font-medium text-green-600">Healthy</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-blue-50 p-3 rounded-md border border-blue-200 flex items-start">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <Globe size={20} className="text-blue-600" />
        </div>
        <div>
          <span className="font-medium text-blue-800">Global Data Centers:</span>
          <span className="text-blue-700 ml-2">UK, KSA, UAE, Egypt, Kuwait, Oman, Morocco, USA, Europe, Sri Lanka, Turkey</span>
        </div>
      </div>
    </div>
  );
};

export default ExchangeIntegration;