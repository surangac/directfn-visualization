import React from 'react';
import { Globe, Database, Server, Cpu, BarChart, LineChart, Building, Smartphone, Lock } from 'lucide-react';

/**
 * Clients View - Shows products and client information
 */
const ClientsView = () => {
  // Notable clients
  const clients = ["John Keells Stock Brokers", "SunGard", "EFG Hermes", "Fidessa", "GLOBAL"];
  
  // DirectFN products
  const products = ["MIX Web", "PRO10", "TWS", "Feed API"];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Products & Clients</h2>
      
      {/* Data Flow Section */}
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-bold text-blue-800 mb-4 text-center">Market Data Flow</h3>
        
        <div className="relative w-full h-[450px] overflow-hidden">
          {/* Global Exchanges Node */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-300">
              <Globe size={40} className="text-blue-600" />
            </div>
            <div className="mt-2 font-bold text-blue-800">Global Exchanges</div>
            <div className="text-xs text-blue-600 max-w-[150px] text-center">NYSE, NASDAQ, LSE, TDWL, KSE, DSE...</div>
          </div>
          
          {/* Connection Line from Exchanges to Backend */}
          <div className="absolute top-[100px] left-1/2 h-[60px] w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
          
          {/* Market Data Backend */}
          <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 z-20">
            <div className="relative">
              <div className="w-[280px] h-[80px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg border-2 border-indigo-400 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Server size={24} className="text-white absolute top-6 left-6" />
                  <Database size={24} className="text-white absolute top-[20px] left-[120px]" />
                  <Cpu size={24} className="text-white absolute top-6 right-6" />
                  <div className="w-full h-full bg-blue-500/20">
                    {/* Animated data particles */}
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `pulse 1.5s infinite ${Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <span className="font-bold text-white text-lg z-10 drop-shadow-md">Market Data Backend</span>
              </div>
              
              {/* Processing indicator */}
              <div className="absolute bottom-0 w-full">
                <div className="h-1 bg-blue-200 rounded overflow-hidden">
                  <div 
                    className="h-full bg-blue-500" 
                    style={{
                      width: '30%',
                      animation: 'progressAnimation 2s infinite'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Client Nodes */}
          {/* Banking & Brokerage Clients */}
          <div className="absolute top-[280px] left-[15%] flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center shadow border border-green-300">
              <Building size={30} className="text-green-600" />
            </div>
            <div className="mt-1 font-medium text-green-800 text-sm">Banks & Brokerages</div>
          </div>
          
          {/* Pro Clients */}
          <div className="absolute top-[280px] left-[38%] flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center shadow border border-yellow-300">
              <BarChart size={30} className="text-yellow-600" />
            </div>
            <div className="mt-1 font-medium text-yellow-800 text-sm">PRO 9-12 Clients</div>
          </div>
          
          {/* Feed Clients */}
          <div className="absolute top-[280px] left-[62%] flex flex-col items-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center shadow border border-indigo-300 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-indigo-200/50">
                  {/* Code pattern background */}
                  <div className="text-[8px] text-indigo-500/30 font-mono">
                    {Array(5).fill('}class Feed{').join('')}
                  </div>
                </div>
              </div>
              <Server size={30} className="text-indigo-600 z-10" />
            </div>
            <div className="mt-1 font-medium text-indigo-800 text-sm">Feed Clients</div>
          </div>
          
          {/* MRT Clients */}
          <div className="absolute top-[280px] left-[85%] flex flex-col items-center">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center shadow border border-red-300">
              <LineChart size={30} className="text-red-600" />
            </div>
            <div className="mt-1 font-medium text-red-800 text-sm">MRT Clients</div>
          </div>
          
          {/* Mobile Clients */}
          <div className="absolute top-[370px] left-[25%] flex flex-col items-center">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center shadow border border-purple-300">
              <Smartphone size={26} className="text-purple-600" />
            </div>
            <div className="mt-1 font-medium text-purple-800 text-sm">Mobile Clients</div>
          </div>
          
          {/* ML Clients */}
          <div className="absolute top-[370px] left-[50%] flex flex-col items-center">
            <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center shadow border border-teal-300">
              <Cpu size={26} className="text-teal-600" />
            </div>
            <div className="mt-1 font-medium text-teal-800 text-sm">ML Clients</div>
          </div>
          
          {/* AML Clients */}
          <div className="absolute top-[370px] left-[75%] flex flex-col items-center">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center shadow border border-orange-300">
              <Lock size={26} className="text-orange-600" />
            </div>
            <div className="mt-1 font-medium text-orange-800 text-sm">AML Clients</div>
          </div>
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
            {/* Exchange to Backend */}
            <line x1="50%" y1="100px" x2="50%" y2="160px" stroke="#6366f1" strokeWidth="3" />
            
            {/* Backend to Banking */}
            <path d="M 50% 200 L 50% 230 Q 50% 245, 30% 245 L 15% 245 L 15% 280" 
                  stroke="#4ade80" strokeWidth="2" fill="none" />
            
            {/* Backend to Pro */}
            <path d="M 50% 200 L 50% 230 Q 50% 245, 40% 245 L 38% 245 L 38% 280" 
                  stroke="#facc15" strokeWidth="2" fill="none" />
            
            {/* Backend to Feed */}
            <path d="M 50% 200 L 50% 230 Q 50% 245, 60% 245 L 62% 245 L 62% 280" 
                  stroke="#818cf8" strokeWidth="2" fill="none" />
            
            {/* Backend to MRT */}
            <path d="M 50% 200 L 50% 230 Q 50% 245, 70% 245 L 85% 245 L 85% 280" 
                  stroke="#f87171" strokeWidth="2" fill="none" />
            
            {/* Backend to Mobile */}
            <path d="M 50% 200 L 50% 250 Q 50% 310, 25% 310 L 25% 370" 
                  stroke="#c084fc" strokeWidth="2" fill="none" />
            
            {/* Backend to ML */}
            <path d="M 50% 200 L 50% 330 L 50% 370" 
                  stroke="#5eead4" strokeWidth="2" fill="none" />
            
            {/* Backend to AML */}
            <path d="M 50% 200 L 50% 250 Q 50% 310, 75% 310 L 75% 370" 
                  stroke="#fb923c" strokeWidth="2" fill="none" />
          </svg>
          
          {/* Animated Data Particles */}
          <div className="absolute inset-0">
            {/* Exchange to Backend */}
            <div className="absolute top-[100px] left-1/2 w-2 h-2 bg-white rounded-full shadow-md"
                 style={{ animation: 'moveDown 3s infinite', marginLeft: '-1px' }}>
            </div>
            <div className="absolute top-[100px] left-1/2 w-2 h-2 bg-white rounded-full shadow-md"
                 style={{ animation: 'moveDown 3s infinite 1s', marginLeft: '-1px' }}>
            </div>
            
            {/* Backend to Banking */}
            <div className="absolute top-[200px] left-1/2 w-2 h-2 bg-green-300 rounded-full shadow-md"
                 style={{ animation: 'moveToBanking 4s infinite', marginLeft: '-1px' }}>
            </div>
            
            {/* Backend to Pro */}
            <div className="absolute top-[200px] left-1/2 w-2 h-2 bg-yellow-300 rounded-full shadow-md"
                 style={{ animation: 'moveToPro 4s infinite 0.5s', marginLeft: '-1px' }}>
            </div>
            
            {/* Backend to Feed */}
            <div className="absolute top-[200px] left-1/2 w-2 h-2 bg-indigo-300 rounded-full shadow-md"
                 style={{ animation: 'moveToFeed 4s infinite 1s', marginLeft: '-1px' }}>
            </div>
            
            {/* Backend to MRT */}
            <div className="absolute top-[200px] left-1/2 w-2 h-2 bg-red-300 rounded-full shadow-md"
                 style={{ animation: 'moveToMRT 4s infinite 1.5s', marginLeft: '-1px' }}>
            </div>
            
            {/* Backend to Mobile */}
            <div className="absolute top-[200px] left-1/2 w-2 h-2 bg-purple-300 rounded-full shadow-md"
                 style={{ animation: 'moveToMobile 5s infinite 2s', marginLeft: '-1px' }}>
            </div>
            
            {/* Backend to ML */}
            <div className="absolute top-[200px] left-1/2 w-2 h-2 bg-teal-300 rounded-full shadow-md"
                 style={{ animation: 'moveToML 5s infinite 2.5s', marginLeft: '-1px' }}>
            </div>
            
            {/* Backend to AML */}
            <div className="absolute top-[200px] left-1/2 w-2 h-2 bg-orange-300 rounded-full shadow-md"
                 style={{ animation: 'moveToAML 5s infinite 3s', marginLeft: '-1px' }}>
            </div>
            
            {/* CSS Animations */}
            <style jsx>{`
              @keyframes pulse {
                0% { transform: scale(0.8); opacity: 0.3; }
                50% { transform: scale(1.5); opacity: 1; }
                100% { transform: scale(0.8); opacity: 0.3; }
              }
              
              @keyframes progressAnimation {
                0% { width: 0%; }
                100% { width: 100%; }
              }
              
              @keyframes moveDown {
                0% { transform: translateY(0); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateY(60px); opacity: 0; }
              }
              
              @keyframes moveToBanking {
                0% { 
                  top: 200px; 
                  left: 50%; 
                  opacity: 0;
                }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { 
                  top: 280px; 
                  left: 15%; 
                  opacity: 0;
                }
              }
              
              @keyframes moveToPro {
                0% { 
                  top: 200px; 
                  left: 50%; 
                  opacity: 0;
                }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { 
                  top: 280px; 
                  left: 38%; 
                  opacity: 0;
                }
              }
              
              @keyframes moveToFeed {
                0% { 
                  top: 200px; 
                  left: 50%; 
                  opacity: 0;
                }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { 
                  top: 280px; 
                  left: 62%; 
                  opacity: 0;
                }
              }
              
              @keyframes moveToMRT {
                0% { 
                  top: 200px; 
                  left: 50%; 
                  opacity: 0;
                }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { 
                  top: 280px; 
                  left: 85%; 
                  opacity: 0;
                }
              }
              
              @keyframes moveToMobile {
                0% { 
                  top: 200px; 
                  left: 50%; 
                  opacity: 0;
                }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { 
                  top: 370px; 
                  left: 25%; 
                  opacity: 0;
                }
              }
              
              @keyframes moveToML {
                0% { 
                  top: 200px; 
                  left: 50%; 
                  opacity: 0;
                }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { 
                  top: 370px; 
                  left: 50%; 
                  opacity: 0;
                }
              }
              
              @keyframes moveToAML {
                0% { 
                  top: 200px; 
                  left: 50%; 
                  opacity: 0;
                }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { 
                  top: 370px; 
                  left: 75%; 
                  opacity: 0;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-bold text-blue-800 mb-2 text-center">Entry Level</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Feed Parser</li>
            <li>PRO10, TWS</li>
            <li>KSE, ADSM/DFM</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-bold text-green-800 mb-2 text-center">Medium Scale</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Web (RIA)</li>
            <li>Streaming Tools (PRO10, TWS)</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="font-bold text-purple-800 mb-2 text-center">Enterprise Scale</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Web (RIA)</li>
            <li>PRO10, TWS</li>
            <li>Hosted Solutions</li>
          </ul>
        </div>
      </div>
      
      <h3 className="font-bold text-gray-800 mb-3">Notable Clients</h3>
      <div className="grid grid-cols-5 gap-3 mb-6">
        {clients.map((client, idx) => (
          <div key={idx} className="bg-gray-100 p-2 rounded text-center text-sm">
            {client}
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-bold text-blue-800 mb-2">DirectFN Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white p-2 rounded text-center">
              {product}
            </div>
          ))}
        </div>
      </div>
      
      {/* Client Testimonials */}
      <div className="mt-6">
        <h3 className="font-bold text-gray-800 mb-3">Client Success Stories</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <blockquote className="italic text-gray-700">
            "DirectFN Market Data Backend has been instrumental in our ability to deliver real-time market data to our clients across multiple platforms."
          </blockquote>
          <div className="mt-2 text-right text-sm font-medium">— Senior IT Director, Major Financial Institution</div>
        </div>
      </div>
    </div>
  );
};

export default ClientsView;