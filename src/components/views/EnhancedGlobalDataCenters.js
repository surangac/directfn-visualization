import React, { useState } from 'react';
import { Globe, Zap } from 'lucide-react';

const EnhancedGlobalDataCenters = () => {
  const [hoveredCenter, setHoveredCenter] = useState(null);
  
  const dataCenters = [
    { id: 'london', name: 'London DC', position: { top: 72, left: 410 }, color: 'red', size: 4 },
    { id: 'jburg', name: 'Johannesburg DC', position: { top: 208, left: 480 }, color: 'green', size: 4 },
    { id: 'dubai', name: 'Dubai DC', position: { top: 132, left: 540 }, color: 'yellow', size: 6 },
    { id: 'ksa', name: 'KSA DC', position: { top: 140, left: 520 }, color: 'purple', size: 4 },
  ];
  
  const exchanges = [
    { id: 'nyse', name: 'NYSE, NASDAQ', position: { top: 100, left: 270 } },
    { id: 'lse', name: 'LSE', position: { top: 72, left: 420 } },
    { id: 'morocco', name: 'Morocco', position: { top: 130, left: 390 } },
    { id: 'egypt', name: 'Egypt', position: { top: 140, left: 480 } },
    { id: 'kenya', name: 'Kenya', position: { top: 180, left: 510 } },
    { id: 'ghana', name: 'Ghana', position: { top: 160, left: 400 } },
    { id: 'dse', name: 'DSE, ADSM', position: { top: 132, left: 550 } },
    { id: 'kse', name: 'KSE, Muscat', position: { top: 132, left: 535 } },
    { id: 'tdwl', name: 'TDWL', position: { top: 140, left: 515 } },
    { id: 'colombo', name: 'Colombo', position: { top: 165, left: 575 } },
    { id: 'dhaka', name: 'Dhaka', position: { top: 140, left: 610 } },
    { id: 'indonesia', name: 'Indonesia', position: { top: 190, left: 650 } },
  ];
  
  const connections = [
    { from: 'nyse', to: 'london', color: 'blue' },
    { from: 'lse', to: 'london', color: 'blue' },
    { from: 'morocco', to: 'jburg', color: 'green' },
    { from: 'egypt', to: 'jburg', color: 'green' },
    { from: 'kenya', to: 'jburg', color: 'green' },
    { from: 'ghana', to: 'jburg', color: 'green' },
    { from: 'dse', to: 'dubai', color: 'yellow' },
    { from: 'kse', to: 'dubai', color: 'yellow' },
    { from: 'tdwl', to: 'ksa', color: 'purple' },
    { from: 'colombo', to: 'dubai', color: 'yellow' },
    { from: 'dhaka', to: 'dubai', color: 'yellow' },
    { from: 'indonesia', to: 'dubai', color: 'yellow' },
    { from: 'london', to: 'dubai', color: 'blue' },
    { from: 'jburg', to: 'dubai', color: 'green' },
    { from: 'dubai', to: 'ksa', color: 'yellow' },
  ];

  const DataPoint = ({ from, to, index, color }) => {
    const fromCenter = dataCenters.find(dc => dc.id === from) || 
                        exchanges.find(ex => ex.id === from);
    const toCenter = dataCenters.find(dc => dc.id === to) || 
                      exchanges.find(ex => ex.id === to);
                      
    if (!fromCenter || !toCenter) return null;
    
    const animationDelay = `${index * 0.5}s`;
    
    return (
      <div 
        className="absolute w-2 h-2 rounded-full bg-white shadow-md z-20"
        style={{
          animation: `moveAlongPath-${from}-${to} 3s infinite ${animationDelay}`,
          opacity: 0.8,
        }}
      >
        <style jsx>{`
          @keyframes moveAlongPath-${from}-${to} {
            0% {
              top: ${fromCenter.position.top}px;
              left: ${fromCenter.position.left}px;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              top: ${toCenter.position.top}px;
              left: ${toCenter.position.left}px;
              opacity: 0;
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
      <div className="flex items-center mb-4">
        <Globe size={24} className="text-blue-700 mr-2" />
        <h3 className="text-lg font-bold text-blue-800">Global Data Centers Network</h3>
      </div>
      
      <div className="relative w-full h-80 bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg mb-4 overflow-hidden">
        {/* World map background */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            {/* North America */}
            <path d="M150,80 C180,60 220,70 250,90 C270,105 270,130 260,150 C250,170 220,190 200,200 C180,210 150,205 130,190 C110,175 100,150 110,130 C120,110 140,90 150,80Z" 
                  fill="#D1D5DB" opacity="0.3" />
            
            {/* South America */}
            <path d="M220,200 C240,190 260,200 270,220 C280,240 280,270 270,290 C260,310 240,320 220,310 C200,300 190,280 200,260 C210,240 220,200 220,200Z" 
                  fill="#D1D5DB" opacity="0.3" />
            
            {/* Europe */}
            <path d="M380,80 C410,70 440,80 460,100 C470,115 470,135 460,150 C450,165 430,170 410,165 C390,160 375,145 370,130 C365,115 370,90 380,80Z" 
                  fill="#D1D5DB" opacity="0.3" />
            
            {/* Africa */}
            <path d="M400,150 C430,140 460,150 480,170 C500,190 510,220 500,250 C490,280 470,300 440,300 C410,300 390,280 380,260 C370,240 370,210 380,190 C390,170 400,150 400,150Z" 
                  fill="#D1D5DB" opacity="0.3" />
            
            {/* Asia */}
            <path d="M500,80 C530,70 560,70 590,90 C620,110 640,140 650,170 C660,200 660,230 640,260 C620,290 590,310 560,310 C530,310 500,300 480,280 C460,260 450,230 450,200 C450,170 460,140 480,120 C490,100 500,80 500,80Z" 
                  fill="#D1D5DB" opacity="0.3" />
            
            {/* Australia */}
            <path d="M650,250 C670,240 690,250 700,270 C710,290 710,310 700,330 C690,350 670,360 650,350 C630,340 620,320 630,300 C640,280 650,250 650,250Z" 
                  fill="#D1D5DB" opacity="0.3" />
            
            {/* Grid lines */}
            <line x1="0" y1="200" x2="800" y2="200" stroke="#A1A1AA" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.5" />
            <line x1="400" y1="0" x2="400" y2="400" stroke="#A1A1AA" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.5" />
            
            {/* Equator label */}
            <text x="10" y="198" fill="#6B7280" fontSize="8" opacity="0.7">Equator</text>
            
            {/* Prime Meridian label */}
            <text x="405" y="15" fill="#6B7280" fontSize="8" opacity="0.7">Prime Meridian</text>
          </svg>
        </div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {connections.map((conn, idx) => {
            const fromCenter = dataCenters.find(dc => dc.id === conn.from) || 
                              exchanges.find(ex => ex.id === conn.from);
            const toCenter = dataCenters.find(dc => dc.id === conn.to) || 
                            exchanges.find(ex => ex.id === conn.to);
            
            if (!fromCenter || !toCenter) return null;
            
            const dashArray = conn.from.startsWith('exchange') ? "2,2" : "";
            const colorMap = {
              'red': '#EF4444',
              'blue': '#3B82F6',
              'green': '#10B981',
              'yellow': '#F59E0B',
              'purple': '#8B5CF6'
            };
            
            return (
              <line 
                key={idx}
                x1={fromCenter.position.left} 
                y1={fromCenter.position.top} 
                x2={toCenter.position.left} 
                y2={toCenter.position.top} 
                stroke={colorMap[conn.color] || '#6B7280'} 
                strokeWidth="1" 
                strokeDasharray={dashArray}
                opacity="0.6"
              />
            );
          })}
        </svg>
        
        {/* Data centers */}
        {dataCenters.map((center) => {
          const colorMap = {
            'red': 'bg-red-500',
            'blue': 'bg-blue-500',
            'green': 'bg-green-500',
            'yellow': 'bg-yellow-500',
            'purple': 'bg-purple-500'
          };
          
          return (
            <div 
              key={center.id}
              className={`absolute ${colorMap[center.color]} rounded-full shadow-lg cursor-pointer z-30`}
              style={{ 
                top: center.position.top, 
                left: center.position.left,
                width: `${center.size * 2}px`,
                height: `${center.size * 2}px`,
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.3s ease',
                boxShadow: hoveredCenter === center.id ? `0 0 0 3px ${center.color === 'yellow' ? '#FCD34D' : ''}` : ''
              }}
              onMouseEnter={() => setHoveredCenter(center.id)}
              onMouseLeave={() => setHoveredCenter(null)}
            >
              <div className={`absolute inset-0 rounded-full ${colorMap[center.color]} animate-ping opacity-75`}></div>
            </div>
          );
        })}
        
        {/* Exchange locations */}
        {exchanges.map((exchange) => (
          <div 
            key={exchange.id}
            className="absolute bg-gray-600 w-2 h-2 rounded-full z-20"
            style={{ 
              top: exchange.position.top, 
              left: exchange.position.left,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="absolute top-0 left-0 transform -translate-y-5 -translate-x-1/2 bg-white/80 px-1 rounded text-xs whitespace-nowrap">
              {exchange.name}
            </div>
          </div>
        ))}
        
        {/* Animated data flow points */}
        {connections.map((conn, idx) => (
          <DataPoint key={idx} from={conn.from} to={conn.to} index={idx} color={conn.color} />
        ))}
        
        {/* Data flow pulses */}
        <div className="absolute top-6 right-6 bg-white/90 px-2 py-1 rounded-md shadow-md flex items-center z-40">
          <Zap size={16} className="text-yellow-500 mr-1" />
          <span className="text-xs font-medium">Live Data Flow</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {dataCenters.map((center) => {
          const colorMap = {
            'red': 'bg-red-500',
            'blue': 'bg-blue-500',
            'green': 'bg-green-500',
            'yellow': 'bg-yellow-500',
            'purple': 'bg-purple-500'
          };
          
          return (
            <div key={center.id} className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${colorMap[center.color]} mr-2`}></div>
              <span className="text-sm">{center.name}</span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-3 text-sm text-blue-700">
        <p>Data centers in UK, KSA, UAE, Egypt, Kuwait, Oman, Morocco, USA, Europe, Sri Lanka, Turkey</p>
      </div>
    </div>
  );
};

export default EnhancedGlobalDataCenters; 