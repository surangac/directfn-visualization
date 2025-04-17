import React from 'react';
import { Users, Code, CheckCircle, BarChart4 } from 'lucide-react';

/**
 * TeamView - Shows the team members and their specializations
 */
const TeamView = () => {
  // Team members data
  const engineeringTeam = [
    { 
      id: 1, 
      name: 'Suranga Caldera', 
      designation: 'Software Architect', 
      specialization: 'System Architecture, Cloud Infrastructure, DevOps, Kubernetes, Kafka, Java' 
    },
    { 
      id: 2, 
      name: 'Yasiru Pathirana', 
      designation: 'Lead Backend Engineer', 
      specialization: 'Real-time Data Processing, WebSockets, Java, C++' 
    },
    { 
      id: 3, 
      name: 'Geeth Tharanga', 
      designation: 'Lead Backend Engineer', 
      specialization: 'Real-time Data Processing, WebSockets, C++' 
    },
    { 
      id: 4, 
      name: 'Lahiru Bandara', 
      designation: 'Lead Backend Engineer', 
      specialization: 'MTR, Java' 
    },
    { 
      id: 5, 
      name: 'Sachith Kaushalya', 
      designation: 'Lead Backend Engineer', 
      specialization: 'Real-time Data Processing, WebSockets, Java' 
    },
    { 
      id: 6, 
      name: 'Emindu Perera', 
      designation: 'Senior Backend Engineer', 
      specialization: 'Real-time Data Processing, WebSockets, Java' 
    },
    { 
      id: 7, 
      name: 'Ravindu Chinthaka', 
      designation: 'Senior Backend Engineer', 
      specialization: 'Real-time Data Processing, WebSockets, Java' 
    },
    { 
      id: 8, 
      name: 'Shakya Wanniarachchi', 
      designation: 'Backend Engineer', 
      specialization: 'Real-time Data Processing, WebSockets, Java' 
    }
  ];
  
  const productManagementTeam = [
    {
      id: 9,
      name: 'Imesh Fernando',
      designation: 'Product Manager',
      specialization: 'Market Data Products, Financial Analysis, Agile Methodologies'
    }
  ];
  
  const qaTeam = [
    {
      id: 10,
      name: 'Ishara Jayasinghe',
      designation: 'QA Lead',
      specialization: 'Test Automation, Performance Testing, Security Testing'
    }
  ];

  // Statistics
  const stats = [
    { label: 'Technical Staff', value: engineeringTeam.length + qaTeam.length },
    { label: 'Exchanges Handled', value: 9 },
    { label: 'Countries Served', value: 10 },
    { label: 'Projects Delivered', value: 32 }
  ];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-center mb-6">
        <Users size={28} className="text-blue-700 mr-2" />
        <h2 className="text-2xl font-bold text-blue-800">Our Team</h2>
      </div>
      
      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-700">{stat.value}</div>
            <div className="text-sm text-blue-900 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* Team Image Section */}
      <div className="mb-8">
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
          {/* Team image */}
          <img 
            src={`${process.env.PUBLIC_URL}/team.png`}
            alt="DirectFN Market Data Team" 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay with quote */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/70 to-transparent p-4">
            <p className="text-white italic text-sm md:text-base">"Our team combines deep financial expertise with cutting-edge technology to deliver the most reliable market data solutions."</p>
          </div>
        </div>
      </div>
      
      {/* Software Engineering Team */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Code size={20} className="text-blue-700 mr-2" />
          <h3 className="text-lg font-bold text-blue-800">Software Engineering Team</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-medium text-blue-700 border-b">Name</th>
                <th className="py-3 px-4 text-left font-medium text-blue-700 border-b">Designation</th>
                <th className="py-3 px-4 text-left font-medium text-blue-700 border-b">Technical Specialization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {engineeringTeam.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium">{member.name}</td>
                  <td className="py-3 px-4 text-gray-700">{member.designation}</td>
                  <td className="py-3 px-4 text-gray-700">{member.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Product Management Team */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <BarChart4 size={20} className="text-green-700 mr-2" />
          <h3 className="text-lg font-bold text-green-800">Product Management Team</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-green-50">
              <tr>
                <th className="py-3 px-4 text-left font-medium text-green-700 border-b">Name</th>
                <th className="py-3 px-4 text-left font-medium text-green-700 border-b">Designation</th>
                <th className="py-3 px-4 text-left font-medium text-green-700 border-b">Specialization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {productManagementTeam.map((member) => (
                <tr key={member.id} className="hover:bg-green-50 transition-colors">
                  <td className="py-3 px-4 font-medium">{member.name}</td>
                  <td className="py-3 px-4 text-gray-700">{member.designation}</td>
                  <td className="py-3 px-4 text-gray-700">{member.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* QA Team */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <CheckCircle size={20} className="text-purple-700 mr-2" />
          <h3 className="text-lg font-bold text-purple-800">Quality Assurance Team</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-purple-50">
              <tr>
                <th className="py-3 px-4 text-left font-medium text-purple-700 border-b">Name</th>
                <th className="py-3 px-4 text-left font-medium text-purple-700 border-b">Designation</th>
                <th className="py-3 px-4 text-left font-medium text-purple-700 border-b">Specialization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {qaTeam.map((member) => (
                <tr key={member.id} className="hover:bg-purple-50 transition-colors">
                  <td className="py-3 px-4 font-medium">{member.name}</td>
                  <td className="py-3 px-4 text-gray-700">{member.designation}</td>
                  <td className="py-3 px-4 text-gray-700">{member.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Additional Team Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-gray-50 p-4 rounded-lg">
        <div className="bg-white p-3 rounded-lg text-center shadow-sm">
          <div className="text-xl font-bold text-blue-600">6+</div>
          <div className="text-sm text-blue-700">Years Experience</div>
        </div>
        <div className="bg-white p-3 rounded-lg text-center shadow-sm">
          <div className="text-xl font-bold text-blue-600">24/7</div>
          <div className="text-sm text-blue-700">Support</div>
        </div>
        <div className="bg-white p-3 rounded-lg text-center shadow-sm">
          <div className="text-xl font-bold text-blue-600">99.9%</div>
          <div className="text-sm text-blue-700">Uptime</div>
        </div>
        <div className="bg-white p-3 rounded-lg text-center shadow-sm">
          <div className="text-xl font-bold text-blue-600">3</div>
          <div className="text-sm text-blue-700">Data Centers</div>
        </div>
      </div>
    </div>
  );
};

export default TeamView; 