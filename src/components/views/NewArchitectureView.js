import React from 'react';
import { Layers, Database, Globe, Cpu, Cloud, Lock, Zap, Boxes } from 'lucide-react';

/**
 * New Architecture View - Shows the modern microservices architecture of DirectFN Market Data Backend
 */
const NewArchitectureView = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-center mb-4">
        <Layers size={24} className="text-blue-700 mr-2" />
        <h2 className="text-2xl font-bold text-blue-800">Modern Architecture</h2>
      </div>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 italic">
          Our current state-of-the-art microservices architecture delivers high scalability, resilience, and flexibility for market data distribution.
        </p>
      </div>
      
      {/* Architecture Diagram */}
      <div className="relative w-full h-[570px] bg-gradient-to-b from-blue-50 to-indigo-50 rounded-lg border border-blue-200 mb-6 overflow-hidden">
        <div className="absolute inset-0 p-6">
          {/* Exchanges Layer */}
          <div className="absolute top-[30px] left-0 right-0 flex justify-center">
            <div className="w-[250px] h-[60px] bg-blue-100 rounded-md border border-blue-300 flex items-center justify-center shadow-sm">
              <Globe size={20} className="text-blue-600 mr-2" />
              <span className="font-medium text-blue-800">Global Exchanges Network</span>
            </div>
          </div>
          
          {/* Arrows Down */}
          <div className="absolute top-[90px] left-[25%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-blue-400"></div>
          <div className="absolute top-[90px] left-[50%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-blue-400"></div>
          <div className="absolute top-[90px] left-[75%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-blue-400"></div>
          
          {/* Microservices Feed Handler Layer */}
          <div className="absolute top-[110px] left-0 right-0 flex justify-center space-x-4">
            <div className="w-[120px] h-[60px] bg-green-100 rounded-md border border-green-300 flex flex-col items-center justify-center shadow-sm">
              <span className="font-medium text-green-800">Equity</span>
              <span className="text-xs text-green-600">Feed Handler</span>
            </div>
            <div className="w-[120px] h-[60px] bg-green-100 rounded-md border border-green-300 flex flex-col items-center justify-center shadow-sm">
              <span className="font-medium text-green-800">Fixed Income</span>
              <span className="text-xs text-green-600">Feed Handler</span>
            </div>
            <div className="w-[120px] h-[60px] bg-green-100 rounded-md border border-green-300 flex flex-col items-center justify-center shadow-sm">
              <span className="font-medium text-green-800">Derivatives</span>
              <span className="text-xs text-green-600">Feed Handler</span>
            </div>
          </div>
          
          {/* Message Queue */}
          <div className="absolute top-[190px] left-0 right-0 flex justify-center">
            <div className="w-[400px] h-[50px] bg-purple-100 rounded-md border border-purple-300 flex items-center justify-center shadow-sm">
              <Zap size={18} className="text-purple-600 mr-2" />
              <span className="font-medium text-purple-800">Message Queue (Kafka)</span>
            </div>
          </div>
          
          {/* Microservices Backend */}
          <div className="absolute top-[260px] left-0 right-0 flex justify-center">
            <div className="w-[500px] px-2 py-3 bg-indigo-50 rounded-md border border-indigo-200 flex flex-col items-center shadow-sm">
              <div className="flex items-center mb-3">
                <Boxes size={20} className="text-indigo-700 mr-2" />
                <span className="font-bold text-indigo-800">Microservices Backend</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 w-full mb-2">
                <div className="bg-indigo-100 p-2 rounded border border-indigo-200 text-center">
                  <div className="text-xs font-medium text-indigo-800">Normalization(DM)</div>
                  <div className="text-[10px] text-indigo-600">Service</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded border border-indigo-200 text-center">
                  <div className="text-xs font-medium text-indigo-800">Enrichment(Index Calculation)</div>
                  <div className="text-[10px] text-indigo-600">Service</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded border border-indigo-200 text-center">
                  <div className="text-xs font-medium text-indigo-800">Historical(Charts)</div>
                  <div className="text-[10px] text-indigo-600">Service</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded border border-indigo-200 text-center">
                  <div className="text-xs font-medium text-indigo-800">Analytics(Technical Indicators)</div>
                  <div className="text-[10px] text-indigo-600">Service</div>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 w-full">
                <div className="bg-indigo-100 p-2 rounded border border-indigo-200 text-center">
                  <div className="text-xs font-medium text-indigo-800">Streaming</div>
                  <div className="text-[10px] text-indigo-600">Service</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded border border-indigo-200 text-center">
                  <div className="text-xs font-medium text-indigo-800">REST API</div>
                  <div className="text-[10px] text-indigo-600">Gateway</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded border border-indigo-200 text-center">
                  <div className="text-xs font-medium text-indigo-800">WebSocket</div>
                  <div className="text-[10px] text-indigo-600">Service</div>
                </div>
                <div className="bg-indigo-100 p-2 rounded border border-indigo-200 text-center">
                  <div className="text-xs font-medium text-indigo-800">Monitoring</div>
                  <div className="text-[10px] text-indigo-600">Service</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Databases */}
          <div className="absolute top-[270px] right-[50px] flex flex-col items-center">
            <div className="mb-2">
              <Database size={30} className="text-purple-600" />
              <span className="text-xs font-medium text-purple-800 block text-center">Time Series</span>
              <span className="text-xs text-purple-600 block text-center">Database</span>
            </div>
            <div>
              <Database size={30} className="text-blue-600" />
              <span className="text-xs font-medium text-blue-800 block text-center">Document</span>
              <span className="text-xs text-blue-600 block text-center">Database</span>
            </div>
          </div>
          
          {/* Connection Lines to DBs */}
          <div className="absolute top-[280px] left-[75%] w-[60px] h-[1px] bg-purple-400"></div>
          <div className="absolute top-[340px] left-[75%] w-[60px] h-[1px] bg-blue-400"></div>
          
          {/* Cache Layer */}
          <div className="absolute top-[360px] left-0 right-0 flex justify-center">
            <div className="w-[500px] h-[40px] bg-red-50 rounded-md border border-red-200 flex items-center justify-center shadow-sm">
              <Cpu size={18} className="text-red-600 mr-2" />
              <span className="font-medium text-red-800">Distributed Cache Layer (Redis)</span>
            </div>
          </div>
          
          {/* Arrows Down */}
          <div className="absolute top-[420px] left-[30%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-red-300"></div>
          <div className="absolute top-[420px] left-[50%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-red-300"></div>
          <div className="absolute top-[420px] left-[70%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-red-300"></div>
          
          {/* Client Layer */}
          <div className="absolute top-[440px] left-0 right-0 flex justify-center space-x-4">
            <div className="w-[130px] h-[70px] bg-blue-100 rounded-md border border-blue-300 flex flex-col items-center justify-center shadow-sm">
              <span className="font-medium text-blue-800">Web Apps</span>
              <span className="text-xs text-blue-600">React, Angular</span>
            </div>
            <div className="w-[130px] h-[70px] bg-green-100 rounded-md border border-green-300 flex flex-col items-center justify-center shadow-sm">
              <span className="font-medium text-green-800">Mobile Apps</span>
              <span className="text-xs text-green-600">iOS, Android</span>
            </div>
            <div className="w-[130px] h-[70px] bg-yellow-100 rounded-md border border-yellow-300 flex flex-col items-center justify-center shadow-sm">
              <span className="font-medium text-yellow-800">API Clients</span>
              <span className="text-xs text-yellow-600">Third-party</span>
            </div>
          </div>
          
          {/* Cloud Infrastructure Label */}
          <div className="absolute bottom-[10px] right-[10px] flex items-center">
            <Cloud size={18} className="text-blue-400 mr-1" />
            <span className="text-xs font-medium text-blue-600">Cloud-Native Infrastructure</span>
          </div>
          
          {/* Security Layer */}
          <div className="absolute bottom-[10px] left-[10px] flex items-center">
            <Lock size={18} className="text-purple-400 mr-1" />
            <span className="text-xs font-medium text-purple-600">End-to-End Security</span>
          </div>
        </div>
      </div>
      
      {/* Key Benefits Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Scalability</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Horizontal scaling of individual services</li>
              <li>Auto-scaling based on demand</li>
              <li>Efficient resource utilization</li>
            </ul>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Resilience</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Fault isolation between services</li>
              <li>Self-healing capabilities</li>
              <li>99.99% uptime SLA</li>
            </ul>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">Agility</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Independent deployment of services</li>
              <li>Rapid feature delivery</li>
              <li>Simplified maintenance</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Technology Stack */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Modern Technology Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <h4 className="font-medium text-gray-800 mb-1">Backend</h4>
            <p className="text-xs text-gray-600">Java, Node.js, Go</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <h4 className="font-medium text-gray-800 mb-1">Frontend</h4>
            <p className="text-xs text-gray-600">React, TypeScript, Tailwind</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <h4 className="font-medium text-gray-800 mb-1">Data</h4>
            <p className="text-xs text-gray-600">Kafka, Redis, MongoDB, TimescaleDB</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <h4 className="font-medium text-gray-800 mb-1">Infrastructure</h4>
            <p className="text-xs text-gray-600">Kubernetes, Docker, Terraform</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200 text-center">
        <p className="text-indigo-800">
          Our modern architecture is designed to scale with market demands and deliver real-time financial data with exceptional reliability.
        </p>
      </div>
    </div>
  );
};

export default NewArchitectureView; 