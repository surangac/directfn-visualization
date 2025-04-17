import React from 'react';
import { Server, Database, Code, Cpu, ArrowRight, ArrowRightLeft, LayoutPanelLeft, Lock, Users, Wallet, BarChart, ListOrdered, FileCheck, FilePlus2, FileEdit, FileX, Bell } from 'lucide-react';

/**
 * MTRView - Displays the MTR (Market Trading Router) architecture and components
 */
const MTRView = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-center mb-4">
        <Server size={24} className="text-blue-700 mr-2" />
        <h2 className="text-2xl font-bold text-blue-800">DirectFN MTR Architecture</h2>
      </div>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800">
          The MTR (Market Trading Router) is a micro service-based component which translates API requests from DirectFN Clients 
          to customizable third-party API requests. It enables DirectFN Front End products to integrate with third party trading systems.
        </p>
      </div
      
      {/* Component Description */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Component Description</h3>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-4">
            MTR is developed as a set of DirectFN ESB Plugins, where each plugin serves an independent set of functionalities.
            This architecture decouples the functional dependencies between mutually exclusive functionalities as micro services,
            enabling the overall system to function even if some services are not functioning.
          </p>
          <p className="text-gray-700">
            The architecture allows updating, upgrading, enabling, disabling and retiring of services at run time
            without any service disruption to other services.
          </p>
        </div>
      </div>
      
      {/* Technology Stack */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Technology / Framework Used</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-medium text-gray-700">Technology / Framework</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700">Version</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 text-gray-800 font-medium">Java (Open JDK)</td>
                <td className="py-3 px-4 text-gray-700">11</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-800 font-medium">Apache Camel</td>
                <td className="py-3 px-4 text-gray-700">3.12</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-800 font-medium">Spring Boot</td>
                <td className="py-3 px-4 text-gray-700">2.5.4</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-800 font-medium">Oracle</td>
                <td className="py-3 px-4 text-gray-700">19c</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Architecture diagram will be added next */}
      
    </div>
  );
};

export default MTRView; 