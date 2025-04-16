import React from 'react';
import { Layers, Database, Globe, Cpu, Cloud, Lock, Zap, Boxes, Shield, Server, BarChart, PieChart, FileText, Activity } from 'lucide-react';

/**
 * NewArchitecture1View - Shows a comprehensive architecture diagram suitable for executive and technical presentations
 */
const NewArchitecture1View = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-center mb-4">
        <Layers size={24} className="text-blue-700 mr-2" />
        <h2 className="text-2xl font-bold text-blue-800">DirectFN Next-Gen Architecture</h2>
      </div>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 italic">
          Our cutting-edge microservices architecture demonstrates DirectFN's technical expertise in building scalable,
          resilient market data systems that deliver real-time financial information with unparalleled reliability.
        </p>
      </div>
      
      {/* Executive Summary for CEO */}
      <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <h3 className="text-lg font-bold text-indigo-800 mb-2">Executive Overview</h3>
        <p className="text-gray-700 mb-3">
          This architecture represents our strategic investment in next-generation technology, positioning DirectFN at the forefront of financial data delivery.
          The modular design allows for rapid innovation, cost efficiency, and competitive advantage through:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded shadow-sm border border-indigo-100">
            <div className="font-medium text-indigo-700 mb-1">Speed to Market</div>
            <div className="text-sm text-gray-600">Independent service deployment allows faster feature delivery</div>
          </div>
          <div className="bg-white p-3 rounded shadow-sm border border-indigo-100">
            <div className="font-medium text-indigo-700 mb-1">Cost Optimization</div>
            <div className="text-sm text-gray-600">Efficient resource utilization and targeted scaling</div>
          </div>
          <div className="bg-white p-3 rounded shadow-sm border border-indigo-100">
            <div className="font-medium text-indigo-700 mb-1">Competitive Edge</div>
            <div className="text-sm text-gray-600">Enhanced reliability and performance drive customer satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Architecture Diagram - Based on the attached image */}
      <div className="relative w-full h-[750px] bg-gradient-to-b from-blue-50 to-indigo-50 rounded-lg border border-blue-200 mb-6 overflow-hidden">
        <div className="absolute inset-0 p-4">
          {/* Title */}
          <div className="absolute top-[10px] left-0 right-0 flex justify-center">
            <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md shadow-md">
              <span className="font-bold text-white">Microservices Data Flow Architecture</span>
            </div>
          </div>
          
          {/* Input Layer - Exchange Feed and Analyzer */}
          <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-[120px] h-[50px] bg-green-600 rounded-md flex items-center justify-center shadow-md border border-green-700">
              <span className="font-medium text-white text-sm">Exchange Feed</span>
            </div>
            <div className="h-[30px] w-[1px] bg-gray-400"></div>
            <div className="w-[120px] h-[50px] bg-green-600 rounded-md flex items-center justify-center shadow-md border border-green-700">
              <span className="font-medium text-white text-sm">Analyzer</span>
            </div>
          </div>
          
          {/* Auth Components */}
          <div className="absolute top-[70px] right-[10%]">
            <div className="w-[90px] h-[100px] flex flex-col items-center">
              <div className="w-[80px] h-[60px] bg-red-400 rounded-md flex items-center justify-center shadow-md border border-red-500">
                <span className="font-medium text-white text-xs">NTP Auth</span>
              </div>
              <div className="h-[20px] w-[1px] bg-gray-400"></div>
              <div className="w-[60px] h-[60px] rounded-md border-4 border-red-400 flex items-center justify-center bg-white">
                <Database size={30} className="text-red-500" />
              </div>
              <span className="text-xs font-medium text-red-700 mt-1">Auth DB</span>
            </div>
          </div>
          
          {/* Core Processing Layer - DM & GS */}
          <div className="absolute top-[190px] left-1/2 transform -translate-x-1/2 flex space-x-20">
            <div className="w-[80px] h-[50px] bg-green-700 rounded-md flex items-center justify-center shadow-md border border-green-800">
              <span className="font-medium text-white text-sm">DM</span>
            </div>
            <div className="w-[80px] h-[50px] bg-green-700 rounded-md flex items-center justify-center shadow-md border border-green-800">
              <span className="font-medium text-white text-sm">GS</span>
            </div>
          </div>
          
          {/* PostgreSQL DB */}
          <div className="absolute top-[210px] left-[16%]">
            <div className="w-[70px] h-[85px] flex flex-col items-center">
              <div className="w-[70px] h-[70px] rounded-md border-4 border-purple-400 flex items-center justify-center bg-white">
                <Database size={40} className="text-purple-500" />
              </div>
              <span className="text-xs font-medium text-purple-700 mt-1">PostgreSQL DB</span>
            </div>
          </div>
          
          {/* Client Tools */}
          <div className="absolute top-[250px] left-[18%] flex flex-col items-start">
            <div className="font-medium text-gray-800 mb-2 text-sm">Client Tools</div>
            <div className="flex space-x-3">
              <div className="w-[80px] h-[50px] bg-teal-500 rounded-md flex items-center justify-center shadow-md border border-teal-600">
                <span className="font-medium text-white text-xs">Tabee</span>
              </div>
              <div className="w-[80px] h-[50px] bg-teal-500 rounded-md flex items-center justify-center shadow-md border border-teal-600">
                <span className="font-medium text-white text-xs">Quants</span>
              </div>
              <div className="w-[80px] h-[50px] bg-teal-500 rounded-md flex items-center justify-center shadow-md border border-teal-600">
                <span className="font-medium text-white text-xs">Market Monitor</span>
              </div>
            </div>
          </div>
          
          {/* Generators and Utils */}
          <div className="absolute top-[250px] left-[60%] flex flex-col items-start">
            <div className="font-medium text-gray-800 mb-2 text-sm">Market Data Processing</div>
            <div className="flex space-x-3">
              <div className="w-[90px] h-[50px] bg-teal-500 rounded-md flex items-center justify-center shadow-md border border-teal-600">
                <span className="font-medium text-white text-xs">Top Stock Generator</span>
              </div>
              <div className="w-[70px] h-[50px] bg-teal-500 rounded-md flex items-center justify-center shadow-md border border-teal-600">
                <span className="font-medium text-white text-xs">Chart Utils</span>
              </div>
              <div className="w-[70px] h-[50px] bg-teal-500 rounded-md flex items-center justify-center shadow-md border border-teal-600">
                <span className="font-medium text-white text-xs">Calculator</span>
              </div>
            </div>
          </div>
          
          {/* System Manager */}
          <div className="absolute top-[340px] left-[55%] flex flex-col items-center">
            <div className="w-[110px] h-[50px] bg-amber-600 rounded-md flex items-center justify-center shadow-md border border-amber-700">
              <span className="font-medium text-white text-sm">System Manager</span>
            </div>
          </div>
          
          {/* Service Cluster */}
          <div className="absolute top-[330px] right-[18%] flex flex-col items-start">
            <div className="font-medium text-gray-800 mb-2 text-sm">Service Cluster</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-[90px] h-[45px] bg-blue-600 rounded-md flex items-center justify-center shadow-md border border-blue-700">
                <span className="font-medium text-white text-xs">News Search</span>
              </div>
              <div className="w-[90px] h-[45px] bg-blue-600 rounded-md flex items-center justify-center shadow-md border border-blue-700">
                <span className="font-medium text-white text-xs">Announcements</span>
              </div>
              <div className="w-[90px] h-[45px] bg-blue-600 rounded-md flex items-center justify-center shadow-md border border-blue-700">
                <span className="font-medium text-white text-xs">Symbol Search</span>
              </div>
              <div className="w-[90px] h-[45px] bg-blue-600 rounded-md flex items-center justify-center shadow-md border border-blue-700">
                <span className="font-medium text-white text-xs">Tick Chart</span>
              </div>
              <div className="w-[90px] h-[45px] bg-blue-600 rounded-md flex items-center justify-center shadow-md border border-blue-700">
                <span className="font-medium text-white text-xs">Signal Chart</span>
              </div>
              <div className="w-[90px] h-[45px] bg-blue-600 rounded-md flex items-center justify-center shadow-md border border-blue-700">
                <span className="font-medium text-white text-xs">Chart Data</span>
              </div>
              <div className="w-[90px] h-[45px] bg-blue-600 rounded-md flex items-center justify-center shadow-md border border-blue-700">
                <span className="font-medium text-white text-xs">FD Service</span>
              </div>
              <div className="w-[90px] h-[45px] bg-blue-600 rounded-md flex items-center justify-center shadow-md border border-blue-700">
                <span className="font-medium text-white text-xs">DCMS</span>
              </div>
            </div>
          </div>
          
          {/* Price DB */}
          <div className="absolute top-[400px] left-[57%]">
            <div className="w-[60px] h-[75px] flex flex-col items-center">
              <div className="w-[60px] h-[60px] rounded-md border-4 border-red-400 flex items-center justify-center bg-white">
                <Database size={30} className="text-red-500" />
              </div>
              <span className="text-xs font-medium text-red-700 mt-1">Price DB</span>
            </div>
          </div>
          
          {/* Managers Layer */}
          <div className="absolute top-[370px] left-[18%] flex flex-col items-start">
            <div className="font-medium text-gray-800 mb-2 text-sm">Data Management</div>
            <div className="flex space-x-3">
              <div className="w-[80px] h-[45px] bg-purple-400 rounded-md flex items-center justify-center shadow-md border border-purple-500">
                <span className="font-medium text-white text-xs">Notification Manager</span>
              </div>
              <div className="w-[80px] h-[45px] bg-purple-400 rounded-md flex items-center justify-center shadow-md border border-purple-500">
                <span className="font-medium text-white text-xs">Chart Alerts</span>
              </div>
              <div className="w-[80px] h-[45px] bg-purple-400 rounded-md flex items-center justify-center shadow-md border border-purple-500">
                <span className="font-medium text-white text-xs">Indicator Alerts</span>
              </div>
              <div className="w-[80px] h-[45px] bg-purple-400 rounded-md flex items-center justify-center shadow-md border border-purple-500">
                <span className="font-medium text-white text-xs">Utility Manager</span>
              </div>
            </div>
          </div>
          
          {/* API Services */}
          <div className="absolute top-[470px] right-[12%] flex flex-col items-start">
            <div className="font-medium text-gray-800 mb-2 text-sm">API Services</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-[90px] h-[40px] bg-blue-800 rounded-md flex items-center justify-center shadow-md border border-blue-900">
                <span className="font-medium text-white text-xs">Profile Service</span>
              </div>
              <div className="w-[90px] h-[40px] bg-blue-800 rounded-md flex items-center justify-center shadow-md border border-blue-900">
                <span className="font-medium text-white text-xs">Search Service</span>
              </div>
              <div className="w-[90px] h-[40px] bg-blue-800 rounded-md flex items-center justify-center shadow-md border border-blue-900">
                <span className="font-medium text-white text-xs">MIX</span>
              </div>
              <div className="w-[90px] h-[40px] bg-blue-800 rounded-md flex items-center justify-center shadow-md border border-blue-900">
                <span className="font-medium text-white text-xs">Misc Service</span>
              </div>
              <div className="w-[90px] h-[40px] bg-blue-800 rounded-md flex items-center justify-center shadow-md border border-blue-900">
                <span className="font-medium text-white text-xs">Chart Service</span>
              </div>
              <div className="w-[90px] h-[40px] bg-blue-800 rounded-md flex items-center justify-center shadow-md border border-blue-900">
                <span className="font-medium text-white text-xs">Master Data</span>
              </div>
              <div className="w-[90px] h-[40px] bg-blue-800 rounded-md flex items-center justify-center shadow-md border border-blue-900">
                <span className="font-medium text-white text-xs">Router Service</span>
              </div>
              <div className="w-[90px] h-[40px] bg-blue-800 rounded-md flex items-center justify-center shadow-md border border-blue-900">
                <span className="font-medium text-white text-xs">DCMS File Repo</span>
              </div>
            </div>
          </div>
          
          {/* Kafka Message Queue */}
          <div className="absolute top-[470px] left-[22%] w-[250px] h-[60px] bg-yellow-100 rounded-md border border-yellow-300 flex items-center justify-center shadow-md">
            <div className="text-sm font-medium text-yellow-800">Kafka (MQ)</div>
          </div>
          
          {/* Client Applications */}
          <div className="absolute bottom-[50px] left-0 right-0 flex justify-center">
            <div className="w-[350px] h-[70px] bg-gray-200 rounded-lg border border-gray-400 flex items-center justify-center">
              <div className="flex space-x-10">
                <div className="flex flex-col items-center">
                  <Server size={24} className="text-gray-700" />
                  <span className="text-xs font-medium text-gray-700 mt-1">Pro 11</span>
                </div>
                <div className="flex flex-col items-center">
                  <Server size={24} className="text-gray-700" />
                  <span className="text-xs font-medium text-gray-700 mt-1">Pro 10</span>
                </div>
                <div className="flex flex-col items-center">
                  <Server size={24} className="text-gray-700" />
                  <span className="text-xs font-medium text-gray-700 mt-1">Pro 9</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connection Lines - Simplified */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
            {/* Main flow paths */}
            <path d="M 400 110 L 400 190" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 340 215 L 280 215" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 460 215 L 520 215" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 400 240 L 400 290" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 400 240 L 240 270" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 400 240 L 560 270" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 320 420 L 320 470" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 350 530 L 400 600" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 520 540 L 520 600" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 600 540 L 600 600" stroke="#333" strokeWidth="1.5" fill="none" />
            
            {/* Side connections */}
            <path d="M 340 215 L 340 290" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 240 320 L 240 370" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 520 330 L 520 420" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M 570 340 L 570 400" stroke="#333" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
      
      {/* Technical Highlights for Tech Staff */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Technical Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-medium text-blue-700 mb-2 flex items-center">
              <Zap size={18} className="text-yellow-500 mr-2" />
              Microservices Architecture
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Domain-driven service boundaries with clear responsibilities</li>
              <li>Independent deployment and scaling of individual components</li>
              <li>Technology stack optimization for each service's unique requirements</li>
              <li>Fault isolation preventing cascading failures</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-medium text-blue-700 mb-2 flex items-center">
              <Activity size={18} className="text-green-500 mr-2" />
              Real-time Data Processing
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Stream processing with Kafka for high-throughput message handling</li>
              <li>Redis caching for sub-millisecond data access</li>
              <li>Optimized algorithms for market data normalization and enrichment</li>
              <li>Advanced time-series database for historical analytics</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-medium text-blue-700 mb-2 flex items-center">
              <Shield size={18} className="text-orange-500 mr-2" />
              Security & Compliance
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>JWT-based authentication across all service boundaries</li>
              <li>Fine-grained authorization with role-based access control</li>
              <li>End-to-end encryption for sensitive financial data</li>
              <li>Comprehensive audit logging and compliance reporting</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-medium text-blue-700 mb-2 flex items-center">
              <Cloud size={18} className="text-blue-500 mr-2" />
              Cloud-Native Infrastructure
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Containerized deployments with Kubernetes orchestration</li>
              <li>Infrastructure-as-Code for repeatable, consistent environments</li>
              <li>Automated CI/CD pipelines for rapid, reliable deployments</li>
              <li>Multi-region deployment for geographical redundancy</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Key Performance Indicators</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">99.99%</div>
            <div className="text-sm text-blue-800">System Uptime</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg shadow-sm border border-green-200 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">&lt;10ms</div>
            <div className="text-sm text-green-800">Avg. Response Time</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg shadow-sm border border-purple-200 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">1M+</div>
            <div className="text-sm text-purple-800">Msgs/Second</div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg shadow-sm border border-amber-200 text-center">
            <div className="text-2xl font-bold text-amber-600 mb-1">200K+</div>
            <div className="text-sm text-amber-800">Concurrent Users</div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 text-center">
        <p className="text-indigo-800 font-medium">
          DirectFN's market data platform leverages cutting-edge technology to deliver exceptional performance, reliability, and scalability for mission-critical financial applications.
        </p>
      </div>
    </div>
  );
};

export default NewArchitecture1View; 