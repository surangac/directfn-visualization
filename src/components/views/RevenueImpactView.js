import React from 'react';
import { TrendingUp, Users, ShoppingCart, BarChart, DollarSign, Package, Building, Activity } from 'lucide-react';

/**
 * RevenueImpactView - Shows revenue streams and business impact
 */
const RevenueImpactView = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-center mb-6">
        <TrendingUp size={28} className="text-emerald-700 mr-2" />
        <h2 className="text-2xl font-bold text-emerald-800">Revenue Impact</h2>
      </div>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-lg text-center shadow-sm">
          <div className="text-2xl font-bold text-emerald-700">1.3M+</div>
          <div className="text-sm text-emerald-900 font-medium">Retail Revenue (Riyals)</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-700">1.5M+</div>
          <div className="text-sm text-blue-900 font-medium">Expansion Potential (Riyals)</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center shadow-sm">
          <div className="text-2xl font-bold text-purple-700">0.9M</div>
          <div className="text-sm text-purple-900 font-medium">Feed Revenue (Riyals)</div>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg text-center shadow-sm">
          <div className="text-2xl font-bold text-amber-700">0.6M</div>
          <div className="text-sm text-amber-900 font-medium">MTR Revenue (Riyals)</div>
        </div>
      </div>
      
      {/* Revenue Breakdown */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Revenue Streams Breakdown</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* P11 & P12 Retail */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-5 border border-emerald-100">
            <div className="flex items-center mb-3">
              <Users size={24} className="text-emerald-600 mr-2" />
              <h4 className="text-xl font-bold text-emerald-800">P11 & P12 Retail User Revenue</h4>
            </div>
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Users</span>
                <span className="font-medium">1,000</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Cost per account/year</span>
                <span className="font-medium">1,300 Riyals</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-2">
                <span className="text-emerald-700">Total Revenue</span>
                <span className="text-emerald-700">1.3M Riyals</span>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-bold text-emerald-700 mb-2">Custom Column Business Expansion</h5>
              <p className="text-gray-700 mb-2">2,000 - 3,000 new customers → 2.6M - 3.9M riyals potential revenue.</p>
              <div className="bg-white px-3 py-2 rounded-md border border-emerald-200">
                <p className="font-medium text-emerald-800">Even at 50% realization, an additional 1.5M riyals, doubling current revenue.</p>
              </div>
            </div>
          </div>
          
          {/* OMS Revenue */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100">
            <div className="flex items-center mb-3">
              <ShoppingCart size={24} className="text-blue-600 mr-2" />
              <h4 className="text-xl font-bold text-blue-800">OMS Revenue Streams</h4>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Price feeds & components now have separate revenue recognition.</p>
            </div>
            <div className="bg-white px-4 py-3 rounded-md border border-blue-200 mb-4">
              <div className="flex items-center mb-2">
                <Package size={18} className="text-blue-600 mr-2" />
                <h5 className="font-bold text-blue-700">Feed Client Business Growth</h5>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Clients in Dev/UAT</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Revenue per client/year</span>
                <span className="font-medium">60,000 USD (~225K Riyals)</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-3">
                <span className="text-blue-700">Total Revenue</span>
                <span className="text-blue-700">0.9M Riyals</span>
              </div>
              <p className="text-blue-700 font-medium mt-2">Huge expansion potential</p>
            </div>
          </div>
          
          {/* MTR Clients */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-100">
            <div className="flex items-center mb-3">
              <Building size={24} className="text-amber-600 mr-2" />
              <h4 className="text-xl font-bold text-amber-800">MTR Corporate Clients</h4>
            </div>
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Number of clients</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Revenue per client</span>
                <span className="font-medium">0.1M Riyals</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-2">
                <span className="text-amber-700">Total Revenue</span>
                <span className="text-amber-700">0.6M Riyals/year</span>
              </div>
            </div>
          </div>
          
          {/* Revenue Growth Visualization */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-100">
            <div className="flex items-center mb-3">
              <BarChart size={24} className="text-purple-600 mr-2" />
              <h4 className="text-xl font-bold text-purple-800">Projected Revenue Growth</h4>
            </div>
            <div className="h-[160px] w-full relative mt-4">
              {/* Base Bar */}
              <div className="absolute bottom-0 left-0 w-1/3 h-[60px] bg-purple-200 rounded-t-md flex items-end justify-center overflow-hidden">
                <div className="w-full px-2 pb-1 text-center">
                  <div className="font-bold text-purple-800 text-xs">Current</div>
                  <div className="font-bold text-purple-700">2.8M</div>
                </div>
              </div>
              
              {/* Custom Columns Bar */}
              <div className="absolute bottom-0 left-[calc(33%+8px)] w-1/3 h-[100px] bg-blue-200 rounded-t-md flex items-end justify-center overflow-hidden">
                <div className="w-full px-2 pb-1 text-center">
                  <div className="font-bold text-blue-800 text-xs">+Custom</div>
                  <div className="font-bold text-blue-700">4.3M</div>
                </div>
              </div>
              
              {/* Full Potential Bar */}
              <div className="absolute bottom-0 right-0 w-1/3 h-[160px] bg-emerald-200 rounded-t-md flex items-end justify-center overflow-hidden">
                <div className="w-full px-2 pb-1 text-center">
                  <div className="font-bold text-emerald-800 text-xs">Potential</div>
                  <div className="font-bold text-emerald-700">6.7M</div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center text-sm text-gray-600">
              Revenue in Riyals
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Points */}
      <div className="bg-gray-50 p-5 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Key Takeaways</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <DollarSign size={18} className="text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-gray-700">Retail user base provides stable revenue of 1.3M Riyals annually.</p>
          </div>
          <div className="flex items-start">
            <TrendingUp size={18} className="text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-gray-700">Custom Column expansion has potential to double current retail revenue.</p>
          </div>
          <div className="flex items-start">
            <Activity size={18} className="text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-gray-700">Feed client and MTR business segments show strong growth potential.</p>
          </div>
          <div className="flex items-start">
            <Package size={18} className="text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-gray-700">Separate revenue recognition for price feeds and components offers clearer business insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueImpactView; 