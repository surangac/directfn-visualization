import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, LineChart, Server, Globe, Zap, Activity, Layers } from 'lucide-react';
import StageIndicator from '../common/StageIndicator';
import ExchangeIntegration from '../dataFlow/ExchangeIntegration';
import FeedParser from '../dataFlow/FeedParser';
import DataProcessing from '../dataFlow/DataProcessing';
import DataEnrichment from '../dataFlow/DataEnrichment';
import Distribution from '../dataFlow/Distribution';
import ClientProducts from '../dataFlow/ClientProducts';

/**
 * Data Flow View - Shows the flow of data through the DirectFN system
 */
const DataFlowView = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Handle animation of stages
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStage(prev => (prev === 7 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Define all stages in the data flow process
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

  // Render the appropriate stage content based on activeStage
  const renderStageContent = () => {
    switch(activeStage) {
      case 0:
        return <ExchangeIntegration />;
      case 1:
        return <FeedParser />;
      case 2:
        return <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-blue-800">Content Server</h3>
          <p>Central component for processing and distributing market data through SCM & Quote Server.</p>
        </div>;
      case 3:
        return <DataProcessing />;
      case 4:
        return (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-800">In-Memory Cache</h3>
            <p>High-speed data storage ensuring rapid access to market information.</p>
            <div className="mt-4 p-2 bg-yellow-100 rounded-lg text-yellow-700 text-sm border border-yellow-300">
              <strong>Critical Point:</strong> As the data storage layer, we ensure 99.99% uptime for all market operations
            </div>
          </div>
        );
      case 5:
        return <DataEnrichment />;
      case 6:
        return <Distribution />;
      case 7:
        return <ClientProducts />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-4">
        <button 
          onClick={() => setIsPlaying(!isPlaying)} 
          className={`px-4 py-2 rounded-md font-medium ${isPlaying ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
        >
          {isPlaying ? 'Pause Animation' : 'Start Animation'}
        </button>
        
        <div className="flex ml-4 items-center">
          {stages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setActiveStage(idx); setIsPlaying(false); }}
              className={`w-3 h-3 mx-1 rounded-full ${activeStage === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      
      <div className="relative w-full overflow-hidden bg-white rounded-lg p-6 shadow mb-6">
        {/* Stage Indicator Bar */}
        <StageIndicator stages={stages} activeStage={activeStage} />
        
        {/* Stage Content */}
        <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50 min-h-64 transition-all duration-500">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-blue-700">{stages[activeStage].name}</h3>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{stages[activeStage].count}</span>
          </div>
          <p className="text-blue-800 mb-4">{stages[activeStage].description}</p>

          {/* Dynamic content based on active stage */}
          {renderStageContent()}
        </div>
      </div>
      
      <div className="bg-blue-100 p-4 rounded-lg text-blue-800 text-center">
        <p className="font-bold">The Market Data Backend team serves as the central nervous system of DirectFN</p>
        <p>Processing over 1M+ data points per second and enabling all revenue-generating activities</p>
      </div>
    </div>
  );
};

export default DataFlowView;