import React from 'react';

/**
 * Distribution - Component for the Distribution Services stage
 */
const Distribution = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded-lg shadow text-center border-t-4 border-blue-400">
          <h4 className="font-bold mb-2">WebSocket</h4>
          <div className="text-sm mb-2">Real-time bidirectional</div>
          <div className="h-16 w-full bg-gray-100 rounded relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">For Pro9-12 & Dealer Terminal</div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow text-center border-t-4 border-green-400">
          <h4 className="font-bold mb-2">TCP Socket</h4>
          <div className="text-sm mb-2">Direct data streaming</div>
          <div className="h-16 w-full bg-gray-100 rounded relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-4 bg-green-500 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">For high-frequency clients</div>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow text-center border-t-4 border-red-400">
          <h4 className="font-bold mb-2">REST/HTTP</h4>
          <div className="text-sm mb-2">Request/response API</div>
          <div className="h-16 w-full bg-gray-100 rounded relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-red-400 text-xs font-mono">GET /api/v1/market/data</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">For B2B integrations</div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-bold text-blue-800 mb-1">Distribution Network Stats</h4>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="bg-white p-2 rounded">
            <div className="text-sm text-gray-500">Daily Messages</div>
            <div className="font-bold text-blue-600">150+ billion</div>
          </div>
          <div className="bg-white p-2 rounded">
            <div className="text-sm text-gray-500">Peak Throughput</div>
            <div className="font-bold text-blue-600">2.5M msgs/sec</div>
          </div>
          <div className="bg-white p-2 rounded">
            <div className="text-sm text-gray-500">Latency</div>
            <div className="font-bold text-blue-600">&lt; 10ms</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;