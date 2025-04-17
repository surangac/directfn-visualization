import React from 'react';
import { AlertTriangle, ShieldAlert, DollarSign, Users, BarChart2, Globe, Clock, Award, Headphones } from 'lucide-react';

/**
 * BusinessContinuityView - Shows business risks without the MBE team and necessary investments
 */
const BusinessContinuityView = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-center mb-6">
        <ShieldAlert size={28} className="text-red-700 mr-2" />
        <h2 className="text-2xl font-bold text-red-800">Business Continuity & Risk Assessment</h2>
      </div>
      
      {/* Alert Banner */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <div className="flex items-start">
          <AlertTriangle size={24} className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-red-800">Critical Business Dependency</h3>
            <p className="text-red-700">The Market Backend (MBE) team is a critical asset that directly impacts business continuity and customer satisfaction.</p>
          </div>
        </div>
      </div>
      
      {/* Main Risk Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <AlertTriangle size={22} className="text-red-600 mr-2" />
          <h3 className="text-xl font-bold text-red-800">Competitive Risk Without MBE</h3>
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-lg border border-red-200 mb-6">
          <div className="text-lg font-bold text-red-800 mb-3">Without MBE, there is no price feed.</div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-start">
                <Globe size={20} className="text-red-600 mr-2 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Business Impact</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-2"></span>
                      <span><strong>20 brokerages in Saudi Arabia</strong> will be unable to trade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-2"></span>
                      <span><strong>Multiple MENA, Asia, and Africa brokerages</strong> disrupted</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-2"></span>
                      <span><strong>Boursa Kuwait Exchange website</strong> dependency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-start">
                <Clock size={20} className="text-red-600 mr-2 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Downtime Impact</h4>
                  <p className="text-gray-700">A single-day or even session blackout would result in:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-red-50 p-3 rounded-md">
                      <div className="font-bold text-red-800">Financial Losses</div>
                      <div className="text-sm text-gray-700">Revenue impact, contract penalties, compensation claims</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-md">
                      <div className="font-bold text-red-800">Goodwill Losses</div>
                      <div className="text-sm text-gray-700">Reputation damage, customer trust erosion, competitive disadvantage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Investment Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <DollarSign size={22} className="text-blue-600 mr-2" />
          <h3 className="text-xl font-bold text-blue-800">Invest in the Market Backend Team</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100">
            <div className="flex justify-center mb-4">
              <Users size={28} className="text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-blue-800 text-center mb-3">Team Development</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Protect team from attrition</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Grow team with strategic hires</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Implement competitive compensation</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Create career advancement paths</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-lg border border-purple-100">
            <div className="flex justify-center mb-4">
              <BarChart2 size={28} className="text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-purple-800 text-center mb-3">Technology Investment</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Continuous infrastructure upgrades</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Redundancy & disaster recovery</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Modern monitoring tools</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Performance optimization tech</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-lg border border-amber-100">
            <div className="flex justify-center mb-4">
              <Headphones size={28} className="text-amber-600" />
            </div>
            <h4 className="text-lg font-bold text-amber-800 text-center mb-3">Production Support</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Fair compensation for weekend/holiday support</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Tiered reward system for on-call availability</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Premium hourly rates for active incident response</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Structured rotation to prevent burnout</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-5 rounded-lg border border-green-100">
            <div className="flex justify-center mb-4">
              <Award size={28} className="text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-green-800 text-center mb-3">Long-term Leadership</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Maintain market leadership position</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Drive innovation in market data</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Expand to new markets & regions</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></span>
                <span className="text-gray-700">Stay ahead of competitor offerings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Key Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-blue-800 mb-3">Supporting MBE Ensures DirectFN's Success</h3>
        <p className="text-blue-700 mb-4">The Market Backend team is the foundation of our service offering and competitive advantage.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="font-bold text-blue-700">People</div>
            <div className="text-sm text-gray-700">Invest in talent retention & growth</div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="font-bold text-blue-700">Technology</div>
            <div className="text-sm text-gray-700">Continuous stability improvements</div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="font-bold text-blue-700">Leadership</div>
            <div className="text-sm text-gray-700">Maintain market dominance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessContinuityView; 