import React from 'react';

/**
 * ClientProducts - Component for the Client Products stage
 */
const ClientProducts = () => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="bg-white p-3 rounded-lg shadow text-center">
        <h4 className="font-bold text-lg mb-2">Internal Products</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-blue-50 rounded text-sm">
            <div className="font-medium">Dealer Terminal</div>
            <div className="text-xs text-gray-500">Trading platform</div>
          </div>
          <div className="p-2 bg-blue-50 rounded text-sm">
            <div className="font-medium">Admin Terminal</div>
            <div className="text-xs text-gray-500">Management console</div>
          </div>
          <div className="p-2 bg-blue-50 rounded text-sm">
            <div className="font-medium">Pro9</div>
            <div className="text-xs text-gray-500">Legacy system</div>
          </div>
          <div className="p-2 bg-blue-50 rounded text-sm">
            <div className="font-medium">Pro10-12</div>
            <div className="text-xs text-gray-500">Modern platforms</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-3 rounded-lg shadow text-center">
        <h4 className="font-bold text-lg mb-2">B2B Integration</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-green-50 rounded text-sm">
            <div className="font-medium">Feed Clients</div>
            <div className="text-xs text-gray-500">Data consumption</div>
          </div>
          <div className="p-2 bg-green-50 rounded text-sm">
            <div className="font-medium">API Partners</div>
            <div className="text-xs text-gray-500">Third-party systems</div>
          </div>
          <div className="p-2 bg-green-50 rounded text-sm">
            <div className="font-medium">Enterprise</div>
            <div className="text-xs text-gray-500">Custom solutions</div>
          </div>
          <div className="p-2 bg-green-50 rounded text-sm">
            <div className="font-medium">Market Data</div>
            <div className="text-xs text-gray-500">EOD & Realtime</div>
          </div>
        </div>
      </div>
      
      <div className="col-span-2 bg-blue-50 p-3 rounded-lg border border-blue-200">
        <h4 className="font-bold text-blue-800 mb-2">Key Client Benefits</h4>
        <ul className="grid grid-cols-2 gap-2">
          <li className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm">Low-latency data delivery</span>
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm">Comprehensive market coverage</span>
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm">Normalized data formats</span>
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm">Flexible delivery mechanisms</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientProducts;