import React, { useState } from 'react';
import OldArchitectureView from './views/OldArchitectureView';
import NewArchitectureView from './views/NewArchitectureView';
import NewArchitecture1View from './views/NewArchitecture1View';
import DataFlowView from './views/DataFlowView';
import CoverageView from './views/CoverageView';
import ClientsView from './views/ClientsView';
import TeamView from './views/TeamView';
import RevenueImpactView from './views/RevenueImpactView';
import BusinessContinuityView from './views/BusinessContinuityView';

/**
 * Main component that integrates all views for the DirectFN Market Data Backend visualization
 */
const MarketDataFlow = () => {
  const [viewMode, setViewMode] = useState('old'); // 'old', 'new', 'new1', 'flow', 'coverage', 'clients', 'team', 'revenue', 'continuity'

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">DirectFN Market Data Backend</h1>
      <p className="text-lg mb-6 text-center text-gray-600">The Heart of Financial Data Distribution since 2000</p>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 flex-wrap gap-2">
        <button 
          onClick={() => setViewMode('old')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'old' ? 'bg-gray-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Legacy Architecture
        </button>
        {/* <button 
          onClick={() => setViewMode('new')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'new' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Modern Architecture
        </button> */}
        <button 
          onClick={() => setViewMode('new1')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'new1' ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Modern Architecture
        </button>
        <button 
          onClick={() => setViewMode('flow')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'flow' ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Data Flow
        </button>
        <button 
          onClick={() => setViewMode('clients')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'clients' ? 'bg-yellow-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Products & Clients
        </button>
        <button 
          onClick={() => setViewMode('coverage')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'coverage' ? 'bg-green-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Coverage
        </button>        
        <button 
          onClick={() => setViewMode('revenue')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'revenue' ? 'bg-emerald-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Revenue Impact
        </button>
        <button 
          onClick={() => setViewMode('team')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'team' ? 'bg-purple-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Our Team
        </button>
        <button 
          onClick={() => setViewMode('continuity')} 
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'continuity' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300'}`}
        >
          Business Continuity
        </button>
      </div>
      
      {/* Render the appropriate view based on selected tab */}
      {viewMode === 'old' && <OldArchitectureView />}
      {viewMode === 'new' && <NewArchitectureView />}
      {viewMode === 'new1' && <NewArchitecture1View />}
      {viewMode === 'flow' && <DataFlowView />}
      {viewMode === 'coverage' && <CoverageView />}
      {viewMode === 'clients' && <ClientsView />}
      {viewMode === 'revenue' && <RevenueImpactView />}
      {viewMode === 'team' && <TeamView />}
      {viewMode === 'continuity' && <BusinessContinuityView />}
    </div>
  );
};

export default MarketDataFlow;