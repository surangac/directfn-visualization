import React from 'react';
import EnhancedGlobalDataCenters from './EnhancedGlobalDataCenters';

/**
 * Coverage View - Shows the global coverage and market data statistics
 */
const CoverageView = () => {
  // Asset classes data
  const assetClasses = ["Equity", "Bonds", "ETFs", "Funds", "Futures", "Options", "Forex", "Commodities"];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">DirectFN Market Coverage</h2>
      
      {/* Enhanced Global Data Centers Network */}
      <EnhancedGlobalDataCenters />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Market Data Stats</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-2 rounded border border-blue-100">
              <div className="text-sm text-gray-600">Symbols</div>
              <div className="font-bold text-blue-600">1.2 million</div>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100">
              <div className="text-sm text-gray-600">Markets</div>
              <div className="font-bold text-blue-600">35</div>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100">
              <div className="text-sm text-gray-600">Countries</div>
              <div className="font-bold text-blue-600">23</div>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100">
              <div className="text-sm text-gray-600">Indices</div>
              <div className="font-bold text-blue-600">11,000+</div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-bold text-green-800 mb-3">Asset Classes</h3>
          <div className="grid grid-cols-4 gap-2">
            {assetClasses.map((asset, idx) => (
              <div key={idx} className="bg-white p-2 rounded text-center text-sm">
                {asset}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
        <h3 className="text-lg font-bold text-yellow-800 mb-3">Content Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Market Data</h4>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-white p-1 rounded text-sm">Quotes</div>
              <div className="bg-white p-1 rounded text-sm">Fixed Income</div>
              <div className="bg-white p-1 rounded text-sm">Derivatives</div>
              <div className="bg-white p-1 rounded text-sm">Charts</div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Company Data</h4>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-white p-1 rounded text-sm">Profiles</div>
              <div className="bg-white p-1 rounded text-sm">Financials</div>
              <div className="bg-white p-1 rounded text-sm">Ownership</div>
              <div className="bg-white p-1 rounded text-sm">Management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageView;