import React from 'react';
import { AlertTriangle, ShieldAlert, DollarSign, Users, BarChart2, Globe, Clock, Award, Headphones, Server, Zap, TrendingUp, HeartPulse } from 'lucide-react';

/**
 * BusinessContinuityView - Shows business risks without the MBE team and necessary investments
 */
const BusinessContinuityView = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-center mb-6">
        <ShieldAlert size={28} className="text-blue-700 mr-2" />
        <h2 className="text-2xl font-bold text-blue-800">Business Continuity & Strategic Value</h2>
      </div>
      
      {/* Alert Banner - Refactored */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <div className="flex items-start">
          <HeartPulse size={24} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-blue-800">The Market Data Foundation</h3>
            <p className="text-blue-700">The Market Backend (MBE) team provides the essential data infrastructure that powers our entire trading ecosystem and delivers real-time financial information to all our clients.</p>
          </div>
        </div>
      </div>
      
      {/* Main Risk Section - Refactored */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Globe size={22} className="text-blue-600 mr-2" />
          <h3 className="text-xl font-bold text-blue-800">Strategic Business Importance</h3>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200 mb-6">
          <div className="text-lg font-bold text-blue-800 mb-3">Our MBE infrastructure serves as:</div>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-start">
                <Server size={20} className="text-blue-600 mr-2 mt-1" />
                <div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>The central nervous system for <strong>20+ Saudi Arabian brokerage partners</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>A critical data provider across <strong>MENA, Asia, and Africa financial institutions</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                      <span>The core data engine behind <strong>Boursa Kuwait Exchange's digital presence</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <ShieldAlert size={22} className="text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-blue-800">Value Assurance & Continuity Planning</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-start">
                <Clock size={20} className="text-blue-600 mr-2 mt-1" />
                <div>
                  <p className="text-gray-700 mb-3">To ensure uninterrupted service delivery, our team maintains:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <div className="font-bold text-blue-800 flex items-center">
                        <Server size={16} className="text-blue-600 mr-1" />
                        Redundant Systems
                      </div>
                      <div className="text-sm text-gray-700">99.99% uptime guarantees</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <div className="font-bold text-blue-800 flex items-center">
                        <Zap size={16} className="text-blue-600 mr-1" />
                        Proactive Monitoring
                      </div>
                      <div className="text-sm text-gray-700">Address issues before they affect clients</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <div className="font-bold text-blue-800 flex items-center">
                        <Clock size={16} className="text-blue-600 mr-1" />
                        Disaster Recovery
                      </div>
                      <div className="text-sm text-gray-700">Rapid restoration capabilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <TrendingUp size={22} className="text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-blue-800">Ongoing Investment Benefits</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-start">
                <DollarSign size={20} className="text-blue-600 mr-2 mt-1" />
                <div>
                  <p className="text-gray-700 mb-3">Continued strategic investment in MBE infrastructure yields:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <div className="font-bold text-blue-800">Enhanced Revenue Streams</div>
                      <div className="text-sm text-gray-700">Through reliable service delivery</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <div className="font-bold text-blue-800">Strengthened Market Position</div>
                      <div className="text-sm text-gray-700">As the trusted data provider of choice</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <div className="font-bold text-blue-800">Competitive Differentiation</div>
                      <div className="text-sm text-gray-700">Through superior performance metrics</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <div className="font-bold text-blue-800">Client Retention</div>
                      <div className="text-sm text-gray-700">Built on consistent service excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Investment Section - Refactored */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <DollarSign size={22} className="text-blue-600 mr-2" />
          <h3 className="text-xl font-bold text-blue-800">Securing Market Leadership through Strategic Investment</h3>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200 mb-6">
          <div className="text-lg font-bold text-blue-800 mb-3">Strengthen the Market Backend Foundation</div>
          <p className="text-gray-700 mb-4">
            The Market Backend team provides the essential data infrastructure that drives our competitive edge and sustains our market-leading position.
          </p>
          
          <div className="font-bold text-blue-800 mb-3">Strategic Investment Areas</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-3">
                <Users size={20} className="text-blue-600 mr-2" />
                <h4 className="font-bold text-blue-800">Team Development</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Retain valuable expertise through competitive compensation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Enhance capabilities with strategic talent acquisition</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Create clear professional growth pathways</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Build sustainable knowledge continuity</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-3">
                <BarChart2 size={20} className="text-purple-600 mr-2" />
                <h4 className="font-bold text-purple-800">Technology Advancement</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Implement ongoing infrastructure modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Enhance system resilience with redundancy protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Deploy advanced monitoring solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Optimize performance with cutting-edge technology</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-3">
                <Headphones size={20} className="text-amber-600 mr-2" />
                <h4 className="font-bold text-amber-800">Operational Excellence</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Recognize weekend/holiday support with fair compensation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Implement tiered rewards for on-call availability</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Value active incident response with premium rates</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Establish structured rotation to maintain team well-being</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-3">
                <Award size={20} className="text-green-600 mr-2" />
                <h4 className="font-bold text-green-800">Market Leadership</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Solidify our market leadership position</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Accelerate innovation in market data delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Pursue strategic expansion to emerging markets</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></span>
                  <span className="text-gray-700">Maintain competitive differentiation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Message - Refactored */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">Supporting MBE: The Foundation of DirectFN's Success</h3>
        <p className="text-blue-700 mb-4 text-center">The Market Backend team forms the cornerstone of our service excellence and distinctive market advantage.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="font-bold text-blue-700">People</div>
            <div className="text-sm text-gray-700">Invest in talent retention & development</div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="font-bold text-blue-700">Technology</div>
            <div className="text-sm text-gray-700">Ensure continuous reliability & innovation</div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="font-bold text-blue-700">Leadership</div>
            <div className="text-sm text-gray-700">Preserve and extend market leadership</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessContinuityView; 