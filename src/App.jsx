import { useState } from 'react';
import configData from './master-configuration.json';
import ModuleList from './components/ModuleList';
import ModuleCard from './components/ModuleCard';
import JsonConsole from './components/JsonConsole';

export default function App() {
  const [modules, setModules] = useState(configData.modules);
  const [selectedId, setSelectedId] = useState(configData.modules[0]?.id);

  const selectedModule = modules.find((m) => m.id === selectedId);

  const handleToggle = (id) => {
    setModules(modules.map(m => m.id === id ? { ...m, estado: !m.estado } : m));
  };

  const handleNameChange = (id, newName) => {
    setModules(modules.map(m => m.id === id ? { ...m, nombre: newName } : m));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F4F6F8] font-sans">
      <div className="w-full max-w-7xl bg-white border-t-[6px] border-[#FFCC00] shadow-lg flex flex-col md:flex-row h-[90vh]">
        
        <ModuleList 
          modules={modules} 
          selectedId={selectedId} 
          onSelect={setSelectedId} 
          onToggle={handleToggle} 
          onNameChange={handleNameChange} 
        />

        {/* Right Panel: Preview */}
        <div className="w-full md:w-7/12 p-8 flex flex-col bg-white relative overflow-y-auto">
          <div className="mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-3xl font-bold text-[#1A202C] mb-1">Live Preview</h2>
            <p className="text-gray-500 text-sm">Visualización en tiempo real de la tarjeta</p>
          </div>

          {selectedModule ? (
            <div className="flex-1 flex flex-col items-center justify-start space-y-8 w-full max-w-md mx-auto">
              <ModuleCard module={selectedModule} />
              <JsonConsole data={selectedModule} />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-500">
              Selecciona un módulo para visualizar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
