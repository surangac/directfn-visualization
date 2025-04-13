import React from 'react';

/**
 * DataEnrichment - Component for the Data Enrichment stage
 */
const DataEnrichment = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-lg shadow border-l-4 border-indigo-400">
          <h4 className="font-bold">Financial Indicators</h4>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="p-2 bg-gray-50 rounded text-sm">
              <div className="font-medium">Moving Averages</div>
              <div className="text-xs text-gray-500">SMA, EMA, WMA</div>
            </div>
            <div className="p-2 bg-gray-50 rounded text-sm">
              <div className="font-medium">Oscillators</div>
              <div className="text-xs text-gray-500">RSI, MACD, Stochastic</div>
            </div>
            <div className="p-2 bg-gray-50 rounded text-sm">
              <div className="font-medium">Volatility</div>
              <div className="text-xs text-gray-500">Bollinger Bands, ATR</div>
            </div>
            <div className="p-2 bg-gray-50 rounded text-sm">
              <div className="font-medium">Volume</div>
              <div className="text-xs text-gray-500">OBV, Chaikin</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow border-l-4 border-yellow-400">
          <h4 className="font-bold">Custom Calculated Indexes</h4>
          <div className="mt-2">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm mb-2">
              <div>
                <div className="font-medium">Company Risk Index</div>
                <div className="text-xs text-gray-500">Proprietary algorithm</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{width: '65%'}}></div>
                </div>
                <span className="ml-2 text-xs font-medium">65%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
              <div>
                <div className="font-medium">Market Sentiment Score</div>
                <div className="text-xs text-gray-500">Real-time calculation</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{width: '78%'}}></div>
                </div>
                <span className="ml-2 text-xs font-medium">78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-indigo-50 p-3 rounded border border-indigo-200">
        <h4 className="font-bold text-indigo-800 mb-2">Data Enrichment Value</h4>
        <p className="text-sm text-indigo-700">
          Our proprietary enrichment algorithms add significant value to raw market data, 
          enabling advanced analytics and decision-making capabilities for our clients.
        </p>
      </div>
    </div>
  );
};

export default DataEnrichment;