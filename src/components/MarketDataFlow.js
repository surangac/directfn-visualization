import React, { useState } from 'react';
import DataFlowView from './views/DataFlowView';
import CoverageView from './views/CoverageView';
import ClientsView from './views/ClientsView';
import TeamView from './views/TeamView';

/**
 * Main component that integrates all views for the DirectFN Market Data Backend visualization
 */
const MarketDataFlow = () => {
  const [viewMode, setViewMode] = useState('flow'); // 'flow', 'coverage', 'clients', 'team'

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">DirectFN Market Data Backend</h1>
      <p className="text-lg mb-6 text-center text-gray-600">The Heart of Financial Data Distribution since 2000</p>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 flex-wrap gap-2">
        <button 
          onClick={() => setViewMode('flow')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'flow' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Data Flow
        </button>
        <button 
          onClick={() => setViewMode('coverage')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'coverage' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Coverage
        </button>
        <button 
          onClick={() => setViewMode('clients')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'clients' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Products & Clients
        </button>
        <button 
          onClick={() => setViewMode('team')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'team' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Our Team
        </button>
      </div>
      
      {/* Render the appropriate view based on selected tab */}
      {viewMode === 'flow' && <DataFlowView />}
      {viewMode === 'coverage' && <CoverageView />}
      {viewMode === 'clients' && <ClientsView />}
      {viewMode === 'team' && <TeamView />}
    </div>
  );
};

export default MarketDataFlow;