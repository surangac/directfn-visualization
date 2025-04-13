import React from 'react';

/**
 * DataProcessing - Component for the Data Processing stage
 */
const DataProcessing = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded-lg shadow text-center border-t-4 border-blue-400">
          <h4 className="font-bold mb-2">OHLC Data</h4>
          <div className="w-full h-24 bg-gray-100 rounded flex items-center justify-center">
            <div className="grid grid-cols-5 gap-1 w-full px-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-1 bg-black h-8 relative">
                    <div className="absolute top-1 w-4 h-0.5 bg-black right-1"></div>
                    <div className="absolute bottom-1 w-4 h-0.5 bg-black right-1"></div>
                  </div>
                  <div className="text-xs mt-1">{`D-${5-i}`}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow text-center border-t-4 border-green-400">
          <h4 className="font-bold mb-2">Real-time</h4>
          <div className="w-full h-24 bg-gray-100 rounded flex items-center justify-center">
            <div className="w-full px-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">AAPL</span>
                <span className="text-xs text-green-500">+1.2%</span>
              </div>
              <div className="h-10 w-full bg-gray-200 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 flex items-center">
                  <div className="h-8 w-full bg-gradient-to-r from-transparent via-green-100 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow text-center border-t-4 border-purple-400">
          <h4 className="font-bold mb-2">Historical</h4>
          <div className="w-full h-24 bg-gray-100 rounded flex items-center justify-center">
            <div className="w-full px-2">
              <div className="h-14 w-full relative flex items-end">
                {[35, 42, 38, 45, 55, 48, 52, 58, 50, 57, 62, 59].map((value, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-purple-500 mx-0.5 rounded-t" 
                    style={{height: `${value}%`}}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs">Jan</span>
                <span className="text-xs">Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessing;