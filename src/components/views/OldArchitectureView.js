import React from 'react';
import { Archive, Server, Database, Globe, Users } from 'lucide-react';

/**
 * Old Architecture View - Shows the previous architecture of DirectFN Market Data Backend
 */
const OldArchitectureView = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-center mb-4">
        <Archive size={24} className="text-gray-700 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Legacy Architecture</h2>
      </div>
      
      <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-amber-800 italic">
          This view represents DirectFN's original market data architecture that served as the foundation before our latest improvements.
        </p>
      </div>
      
      {/* Architecture Diagram */}
      <div className="relative w-full h-[500px] bg-gray-50 rounded-lg border border-gray-200 mb-6 overflow-hidden">
        <div className="absolute inset-0 p-6">
          {/* Exchanges Layer */}
          <div className="absolute top-[40px] left-0 right-0 flex justify-center">
            <div className="w-[200px] h-[60px] bg-blue-100 rounded-md border border-blue-300 flex items-center justify-center shadow-sm">
              <Globe size={20} className="text-blue-600 mr-2" />
              <span className="font-medium text-blue-800">Global Exchanges</span>
            </div>
          </div>
          
          {/* Arrows Down */}
          <div className="absolute top-[100px] left-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-blue-400 transform -translate-x-1/2"></div>
          
          {/* Feed Handler Layer */}
          <div className="absolute top-[130px] left-0 right-0 flex justify-center">
            <div className="w-[180px] h-[60px] bg-green-100 rounded-md border border-green-300 flex items-center justify-center shadow-sm">
              <span className="font-medium text-green-800">Feed Handlers</span>
            </div>
          </div>
          
          {/* Arrows Down */}
          <div className="absolute top-[190px] left-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-green-400 transform -translate-x-1/2"></div>
          
          {/* Monolithic Backend */}
          <div className="absolute top-[220px] left-0 right-0 flex justify-center">
            <div className="w-[350px] h-[100px] bg-gray-200 rounded-md border border-gray-400 flex flex-col items-center justify-center shadow-sm">
              <div className="flex items-center mb-2">
                <Server size={20} className="text-gray-700 mr-2" />
                <span className="font-bold text-gray-800">Monolithic Backend</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-gray-100 rounded p-1 text-center">Data Processing</div>
                <div className="bg-gray-100 rounded p-1 text-center">Normalization</div>
                <div className="bg-gray-100 rounded p-1 text-center">Distribution</div>
              </div>
            </div>
          </div>
          
          {/* Database */}
          <div className="absolute top-[270px] right-[100px] flex flex-col items-center">
            <div className="w-[80px] h-[80px] flex items-center justify-center">
              <Database size={40} className="text-purple-600" />
            </div>
            <span className="text-xs font-medium text-purple-800">Relational DB</span>
          </div>
          
          {/* Connection Line to DB */}
          <div className="absolute top-[270px] left-[60%] w-[60px] h-[1px] bg-purple-400"></div>
          
          {/* Arrows Down */}
          <div className="absolute top-[320px] left-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-gray-400 transform -translate-x-1/2"></div>
          
          {/* Multiple Front-end Applications */}
          <div className="absolute top-[350px] left-0 right-0 flex justify-center space-x-6">
            <div className="w-[150px] h-[70px] bg-red-100 rounded-md border border-red-300 flex flex-col items-center justify-center shadow-sm">
              <span className="font-medium text-red-800">Desktop Client</span>
              <span className="text-xs text-red-600">Single Codebase</span>
            </div>
            <div className="w-[150px] h-[70px] bg-amber-100 rounded-md border border-amber-300 flex flex-col items-center justify-center shadow-sm">
              <span className="font-medium text-amber-800">Web Interface</span>
              <span className="text-xs text-amber-600">Limited Features</span>
            </div>
          </div>
          
          {/* Users */}
          <div className="absolute bottom-[20px] left-0 right-0 flex justify-center">
            <div className="flex items-center">
              <Users size={24} className="text-gray-600 mr-2" />
              <span className="font-medium text-gray-800">End Users</span>
            </div>
          </div>
          
          {/* Arrows connecting to users */}
          <div className="absolute top-[420px] left-[35%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-red-300 transform -translate-x-1/2"></div>
          <div className="absolute top-[420px] left-[65%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-amber-300 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      {/* Challenges Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Legacy Architecture Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-medium text-red-800 mb-2">Scalability Issues</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Monolithic design limited horizontal scaling</li>
              <li>Performance bottlenecks during market volatility</li>
              <li>Difficult to scale specific components independently</li>
            </ul>
          </div>
          
          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-medium text-orange-800 mb-2">Maintainability Challenges</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Tightly coupled components</li>
              <li>Complex codebase with high technical debt</li>
              <li>Difficult to implement new features</li>
            </ul>
          </div>
          
          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">Limited Flexibility</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Fixed deployment model</li>
              <li>Challenging to adapt to new market data sources</li>
              <li>Rigid client integration options</li>
            </ul>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Technology Constraints</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Outdated technology stack</li>
              <li>Limited cloud compatibility</li>
              <li>High operational costs</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-300 text-center">
        <p className="text-gray-700">
          This legacy architecture served us well from 2000-2015 before we transitioned to our modern microservices-based architecture.
        </p>
      </div>
    </div>
  );
};

export default OldArchitectureView; 