import React from 'react';

/**
 * FeedParser - Component for the Feed Parser stage
 */
const FeedParser = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-red-100 flex items-center justify-center rounded-lg">
          <span className="text-2xl font-bold text-red-500">XML</span>
        </div>
        <div className="flex-1 mx-4 h-1 bg-blue-200 relative">
          <div className="absolute top-0 left-0 h-1 bg-blue-500 animate-pulse" style={{width: '100%'}}></div>
        </div>
        <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-lg">
          <span className="text-xl font-bold text-green-500">JSON</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-lg shadow border-l-4 border-red-400">
          <h4 className="font-bold">Exchange Format</h4>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto mt-2 h-28">
{`<QUOTE>
  <SYMBOL>AAPL</SYMBOL>
  <PRICE>189.43</PRICE>
  <CHANGE>+2.18</CHANGE>
  <EXCHANGE>NASDAQ</EXCHANGE>
  <LAST_UPDATE>20250412T13:45:21</LAST_UPDATE>
  <CURRENCY>USD</CURRENCY>
</QUOTE>`}
          </pre>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow border-l-4 border-green-400">
          <h4 className="font-bold">DirectFN Standardized Format</h4>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto mt-2 h-28">
{`{
  "symbol": "AAPL",
  "price": 189.43,
  "change": 2.18,
  "changePercent": 1.16,
  "source": "NASDAQ",
  "timestamp": 1745423121000,
  "currency": "USD",
  "type": "QUOTE",
  "status": "ACTIVE"
}`}
          </pre>
        </div>
      </div>
      
      <div className="mt-4 bg-yellow-50 p-2 rounded text-sm border border-yellow-200">
        <span className="font-medium text-yellow-800">Feed Parser:</span>
        <span className="text-yellow-700 ml-2">Converts diverse formats from 35 markets across 23 countries into unified structure</span>
      </div>
    </div>
  );
};

export default FeedParser;