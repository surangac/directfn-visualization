import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, LineChart, Server, Globe, PieChart, Zap, Activity, Layers, Clock, Building, Users, BarChart } from 'lucide-react';

const MarketDataFlow = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSource, setSelectedSource] = useState('nyse');
  const [viewMode, setViewMode] = useState('flow'); // 'flow', 'coverage', 'clients'
  
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStage(prev => (prev === 7 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const dataSources = {
    nyse: { name: "NYSE", description: "New York Stock Exchange - US equities and ETFs", color: "#4299E1" },
    nasdaq: { name: "NASDAQ", description: "US technology and growth stocks", color: "#9F7AEA" },
    amex: { name: "AMEX", description: "American Stock Exchange", color: "#F687B3" },
    opra: { name: "OPRA", description: "Options Price Reporting Authority", color: "#A3E635" },
    tdwl: { name: "Tadawul", description: "Saudi Arabian market - Key regional exchange", color: "#68D391" },
    adx: { name: "ADX", description: "Abu Dhabi Securities Exchange - UAE", color: "#F6AD55" },
    dfm: { name: "DFM", description: "Dubai Financial Market - UAE", color: "#60A5FA" },
    kse: { name: "KSE", description: "Kuwait Stock Exchange", color: "#FC8181" }
  };
  
  const stages = [
    { name: "Exchange Integration", icon: <Globe size={32} />, description: "Direct connectivity to 35+ markets across 23 countries", count: "1.2M+ symbols" },
    { name: "Feed Parser", icon: <Layers size={32} />, description: "Converting diverse exchange formats to standardized DirectFN formats", count: "11,000+ indices" },
    { name: "Content Server", icon: <Zap size={32} />, description: "Processing raw data into usable market information via SCM & Quote Server", count: "Multiple asset classes" },
    { name: "Data Processing", icon: <LineChart size={32} />, description: "Generating OHLC data, charts, historical data, and company profiles", count: "5,000+ company profiles" },
    { name: "In-Memory Cache", icon: <Database size={32} />, description: "High-performance data persistence ensuring low-latency delivery", count: "99.99% uptime" },
    { name: "Data Enrichment", icon: <Activity size={32} />, description: "Financial indicators, ownership data, management info, corporate actions", count: "Comprehensive data" },
    { name: "Subscription Services", icon: <Server size={32} />, description: "WebSocket, TCP Socket, REST over HTTP with authentication", count: "Secure delivery" },
    { name: "Client Products", icon: <ArrowRight size={32} />, description: "MIX Web, PRO10, TWS and third-party integrations", count: "Global reach" }
  ];

  // Render the Coverage view with global data centers map
  const renderCoverageView = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">DirectFN Market Coverage</h2>
      
      {/* Global Data Centers Map - Added at the top as requested */}
      <div className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Global Data Centers Network</h3>
        
        <div className="relative w-full h-64 bg-gray-100 rounded-lg mb-3 overflow-hidden">
          {/* World map background */}
          <div className="absolute inset-0 bg-blue-50">
            {/* Simple world map outline - stylized representation */}
            <svg viewBox="0 0 1000 500" className="w-full h-full opacity-30">
              <path d="M250,100 Q400,50 650,100 Q800,130 850,200 Q900,300 750,350 Q600,400 400,380 Q200,360 150,250 Q100,150 250,100" fill="#3B82F6" />
              <path d="M300,280 Q350,260 400,280 Q450,300 480,280 Q520,250 580,280 Q650,320 600,350 Q550,380 450,350 Q350,320 300,280" fill="#3B82F6" />
            </svg>
          </div>
          
          {/* Data Centers */}
          {/* London Data Center (LDC) */}
          <div className="absolute top-24 left-72 w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute top-20 left-72 text-xs font-bold bg-white px-1 rounded shadow">London DC</div>
          
          {/* Johannesburg Data Center */}
          <div className="absolute top-56 left-96 w-4 h-4 bg-green-500 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute top-60 left-96 text-xs font-bold bg-white px-1 rounded shadow">Johannesburg DC</div>
          
          {/* Dubai Data Center */}
          <div className="absolute top-36 left-124 w-6 h-6 bg-yellow-500 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute top-32 left-124 text-xs font-bold bg-white px-1 rounded shadow">Dubai DC</div>
          
          {/* Saudi Data Center */}
          <div className="absolute top-40 left-108 w-4 h-4 bg-purple-500 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute top-36 left-108 text-xs font-bold bg-white px-1 rounded shadow">KSA DC</div>
          
          {/* Exchanges */}
          {/* US/UK Exchanges */}
          <div className="absolute top-20 left-56 text-xs bg-white/80 px-1 rounded">NYSE, NASDAQ</div>
          <div className="absolute top-16 left-76 text-xs bg-white/80 px-1 rounded">LSE</div>
          
          {/* African Exchanges */}
          <div className="absolute top-48 left-80 text-xs bg-white/80 px-1 rounded">Morocco</div>
          <div className="absolute top-44 left-92 text-xs bg-white/80 px-1 rounded">Egypt</div>
          <div className="absolute top-56 left-104 text-xs bg-white/80 px-1 rounded">Kenya</div>
          <div className="absolute top-60 left-92 text-xs bg-white/80 px-1 rounded">Ghana</div>
          
          {/* GCC Exchanges */}
          <div className="absolute top-36 left-120 text-xs bg-white/80 px-1 rounded">DSE, ADSM</div>
          <div className="absolute top-32 left-116 text-xs bg-white/80 px-1 rounded">KSE, Muscat</div>
          <div className="absolute top-44 left-140 text-xs bg-white/80 px-1 rounded">Colombo</div>
          
          {/* Saudi Exchange */}
          <div className="absolute top-40 left-104 text-xs bg-white/80 px-1 rounded">TDWL</div>
          
          {/* Asian Exchanges */}
          <div className="absolute top-36 left-160 text-xs bg-white/80 px-1 rounded">Dhaka</div>
          <div className="absolute top-48 left-172 text-xs bg-white/80 px-1 rounded">Indonesia</div>
          
          {/* Connection lines */}
          {/* Connect US/UK to London */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            {/* US/UK to London */}
            <line x1="64" y1="20" x2="72" y2="24" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2" />
            <line x1="76" y1="16" x2="72" y2="24" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2" />
            
            {/* African exchanges to Johannesburg */}
            <line x1="82" y1="48" x2="96" y2="56" stroke="#10B981" strokeWidth="1" strokeDasharray="2" />
            <line x1="92" y1="44" x2="96" y2="56" stroke="#10B981" strokeWidth="1" strokeDasharray="2" />
            <line x1="104" y1="56" x2="96" y2="56" stroke="#10B981" strokeWidth="1" strokeDasharray="2" />
            <line x1="92" y1="60" x2="96" y2="56" stroke="#10B981" strokeWidth="1" strokeDasharray="2" />
            
            {/* GCC to Dubai */}
            <line x1="120" y1="36" x2="124" y2="36" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2" />
            <line x1="116" y1="32" x2="124" y2="36" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2" />
            <line x1="140" y1="44" x2="124" y2="36" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2" />
            
            {/* Saudi to KSA DC */}
            <line x1="104" y1="40" x2="108" y2="40" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="2" />
            
            {/* London & Johannesburg to Dubai */}
            <line x1="72" y1="24" x2="124" y2="36" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2" />
            <line x1="96" y1="56" x2="124" y2="36" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2" />
            
            {/* Dubai to KSA */}
            <line x1="124" y1="36" x2="108" y2="40" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="2" />
            
            {/* Asian exchanges to Dubai */}
            <line x1="160" y1="36" x2="124" y2="36" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2" />
            <line x1="172" y1="48" x2="124" y2="36" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2" />
            
            {/* Animated data flow points */}
            <circle cx="96" cy="36" r="2" fill="white">
              <animate attributeName="cx" from="72" to="124" dur="3s" repeatCount="indefinite" />
              <animate attributeName="cy" from="24" to="36" dur="3s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="110" cy="46" r="2" fill="white">
              <animate attributeName="cx" from="96" to="124" dur="4s" repeatCount="indefinite" />
              <animate attributeName="cy" from="56" to="36" dur="4s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="116" cy="38" r="2" fill="white">
              <animate attributeName="cx" from="108" to="124" dur="2s" repeatCount="indefinite" />
              <animate attributeName="cy" from="40" to="36" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-sm">London Data Center</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm">Johannesburg Data Center</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <span className="text-sm">Dubai Data Center</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-sm">KSA Data Center</span>
          </div>
        </div>
        
        <div className="mt-3 text-sm text-blue-700">
          <p>Data centers in UK, KSA, UAE, Egypt, Kuwait, Oman, Morocco, USA, Europe, Sri Lanka, Turkey</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Market Data Stats</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-2 rounded border border-blue-100">
              <div className="text-sm text-gray-600">Symbols</div>
              <div className="font-bold text-blue-600">1.2 million</div>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100">
              <div className="text-sm text-gray-600">Markets</div>
              <div className="font-bold text-blue-600">35</div>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100">
              <div className="text-sm text-gray-600">Countries</div>
              <div className="font-bold text-blue-600">23</div>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100">
              <div className="text-sm text-gray-600">Indices</div>
              <div className="font-bold text-blue-600">11,000+</div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-bold text-green-800 mb-3">Asset Classes</h3>
          <div className="grid grid-cols-4 gap-2">
            {["Equity", "Bonds", "ETFs", "Funds", "Futures", "Options", "Forex", "Commodities"].map((asset, idx) => (
              <div key={idx} className="bg-white p-2 rounded text-center text-sm">
                {asset}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
        <h3 className="text-lg font-bold text-yellow-800 mb-3">Content Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Market Data</h4>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-white p-1 rounded text-sm">Quotes</div>
              <div className="bg-white p-1 rounded text-sm">Fixed Income</div>
              <div className="bg-white p-1 rounded text-sm">Derivatives</div>
              <div className="bg-white p-1 rounded text-sm">Charts</div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Company Data</h4>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-white p-1 rounded text-sm">Profiles</div>
              <div className="bg-white p-1 rounded text-sm">Financials</div>
              <div className="bg-white p-1 rounded text-sm">Ownership</div>
              <div className="bg-white p-1 rounded text-sm">Management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the Products & Clients view
  const renderClientsView = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Products & Clients</h2>
      
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
        {["John Keells Stock Brokers", "SunGard", "EFG Hermes", "Fidessa", "GLOBAL"].map((client, idx) => (
          <div key={idx} className="bg-gray-100 p-2 rounded text-center text-sm">
            {client}
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-bold text-blue-800 mb-2">DirectFN Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-2 rounded text-center">MIX Web</div>
          <div className="bg-white p-2 rounded text-center">PRO10</div>
          <div className="bg-white p-2 rounded text-center">TWS</div>
          <div className="bg-white p-2 rounded text-center">Feed API</div>
        </div>
      </div>
    </div>
  );

  // Data Flow visualization for Stage 0 (Exchange Integration)
  const renderExchangeIntegration = () => (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(dataSources).map(key => (
          <button
            key={key}
            onClick={() => setSelectedSource(key)}
            className={`px-3 py-1 rounded-full text-sm ${selectedSource === key ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300'}`}
            style={{borderColor: selectedSource === key ? 'transparent' : dataSources[key].color}}
          >
            {dataSources[key].name}
          </button>
        ))}
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4" style={{borderColor: dataSources[selectedSource].color}}>
        <h4 className="font-bold text-gray-800">{dataSources[selectedSource].name}</h4>
        <p className="text-gray-600">{dataSources[selectedSource].description}</p>
        <div className="mt-2 flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-xs text-green-600">Connected - Receiving Data</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-gray-500">Latency:</span> 
            <span className="ml-1 font-medium">86ms</span>
          </div>
          <div>
            <span className="text-gray-500">Data Points/sec:</span> 
            <span className="ml-1 font-medium">12,845</span>
          </div>
          <div>
            <span className="text-gray-500">Integration Type:</span> 
            <span className="ml-1 font-medium">Direct API</span>
          </div>
          <div>
            <span className="text-gray-500">Status:</span> 
            <span className="ml-1 font-medium text-green-600">Healthy</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-blue-50 p-3 rounded-md border border-blue-200 flex items-start">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <Globe size={20} className="text-blue-600" />
        </div>
        <div>
          <span className="font-medium text-blue-800">Global Data Centers:</span>
          <span className="text-blue-700 ml-2">UK, KSA, UAE, Egypt, Kuwait, Oman, Morocco, USA, Europe, Sri Lanka, Turkey</span>
        </div>
      </div>
    </div>
  );

  // Data Flow visualization for Stage 1 (Feed Parser)
  const renderFeedParser = () => (
    <div className="mt-4">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-red-100 flex items-center justify-center rounded-lg">
          <span className="text-2xl font-bold text-red-500">XML</span>
        </div>
        <div className="flex-1 mx-4 h-1 bg-blue-200 relative">
          <div className="absolute top-0 left-0 h-1 bg-blue-500 animate-pulse" style={{width: '100%'}}></div>
        </div>
        <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-lg">
          <span className="text-xl font-bold text-green-500">JSON</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-lg shadow border-l-4 border-red-400">
          <h4 className="font-bold">Exchange Format</h4>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto mt-2 h-28">
{`<QUOTE>
  <SYMBOL>AAPL</SYMBOL>
  <PRICE>189.43</PRICE>
  <CHANGE>+2.18</CHANGE>
  <EXCHANGE>NASDAQ</EXCHANGE>
  <LAST_UPDATE>20250412T13:45:21</LAST_UPDATE>
  <CURRENCY>USD</CURRENCY>
</QUOTE>`}
          </pre>
        </div>
        
        <div className="bg-white p-3 rounded-lg shadow border-l-4 border-green-400">
          <h4 className="font-bold">DirectFN Standardized Format</h4>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto mt-2 h-28">
{`{
  "symbol": "AAPL",
  "price": 189.43,
  "change": 2.18,
  "changePercent": 1.16,
  "source": "NASDAQ",
  "timestamp": 1745423121000,
  "currency": "USD",
  "type": "QUOTE",
  "status": "ACTIVE"
}`}
          </pre>
        </div>
      </div>
      
      <div className="mt-4 bg-yellow-50 p-2 rounded text-sm border border-yellow-200">
        <span className="font-medium text-yellow-800">Feed Parser:</span>
        <span className="text-yellow-700 ml-2">Converts diverse formats from 35 markets across 23 countries into unified structure</span>
      </div>
    </div>
  );

  // Data Flow visualization for Stage 3 (Data Processing)
  const renderDataProcessing = () => (
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
                  <div className="h-8 w-full" style={{background: 'linear-gradient(90deg, transparent 0%, #d1fae5 50%, transparent 100%)'}}></div>
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

  // Main render method
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">DirectFN Market Data Backend</h1>
        <p className="text-center text-gray-600 mb-6">The Heart of Financial Data Distribution since 2000</p>
        
        <div className="flex space-x-2 justify-center mb-8">
          <button 
            onClick={() => setViewMode('flow')}
            className={`px-4 py-2 rounded-md ${viewMode === 'flow' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Data Flow
          </button>
          <button 
            onClick={() => setViewMode('coverage')}
            className={`px-4 py-2 rounded-md ${viewMode === 'coverage' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Coverage
          </button>
          <button 
            onClick={() => setViewMode('clients')}
            className={`px-4 py-2 rounded-md ${viewMode === 'clients' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Products & Clients
          </button>
        </div>
      </div>

      {viewMode === 'flow' && (
        <div>
          <div className="relative mb-8 overflow-hidden bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-4 py-2 rounded-full ${isPlaying ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
              >
                {isPlaying ? 'Stop Animation' : 'Start Animation'}
              </button>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="hidden md:flex items-center">
                {stages.map((stage, index) => (
                  <React.Fragment key={index}>
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${index === activeStage ? 'bg-blue-500 text-white scale-125' : 'bg-gray-200 text-gray-600'}`}
                    >
                      {stage.icon}
                    </div>
                    {index < stages.length - 1 && (
                      <div className="w-12 h-1 bg-gray-300"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="block md:hidden">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-500 text-white"
                >
                  {stages[activeStage].icon}
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-800">{stages[activeStage].name}</h3>
              <p className="text-gray-600 mb-2">{stages[activeStage].description}</p>
              <div className="text-blue-600 font-medium">{stages[activeStage].count}</div>
            </div>
            
            <div className="mt-6">
              {activeStage === 0 && renderExchangeIntegration()}
              {activeStage === 1 && renderFeedParser()}
              {activeStage === 3 && renderDataProcessing()}
            </div>
            
            <div className="flex items-center mt-6 justify-center">
              <div className="inline-flex space-x-1">
                {stages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveStage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === activeStage ? 'bg-blue-500' : 'bg-gray-300'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {viewMode === 'coverage' && renderCoverageView()}
      {viewMode === 'clients' && renderClientsView()}
    </div>
  );
};

export default MarketDataFlow;