import React from 'react';

/**
 * StageIndicator - Reusable component for displaying stages in the data flow process
 * @param {Object[]} stages - Array of stage objects with name and icon properties
 * @param {number} activeStage - Index of the currently active stage
 */
const StageIndicator = ({ stages, activeStage }) => {
  return (
    <div className="flex justify-between items-center mb-12 relative">
      {stages.map((stage, idx) => (
        <div 
          key={idx} 
          className={`flex flex-col items-center relative z-10 transition-all duration-300 ${
            activeStage === idx ? 'scale-125' : 'opacity-60'
          }`}
        >
          <div className={`p-3 rounded-full mb-2 ${
            activeStage === idx ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
          }`}>
            {stage.icon}
          </div>
          <span className="text-xs font-medium text-center">{stage.name}</span>
        </div>
      ))}
      
      {/* Connecting lines */}
      <div className="absolute h-1 bg-gray-200 top-8 left-12 right-12 z-0" />
      
      {/* Active path */}
      <div 
        className="absolute h-1 bg-blue-500 top-8 left-12 z-5 transition-all duration-500"
        style={{ width: `${activeStage * (100 / (stages.length - 1))}%` }}
      />
    </div>
  );
};

export default StageIndicator;