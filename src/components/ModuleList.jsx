export default function ModuleList({ modules, selectedId, onSelect, onToggle, onNameChange }) {
  return (
    <div className="w-full md:w-5/12 border-r border-gray-200 flex flex-col bg-[#FAFAFA]">
      <div className="p-8 border-b border-gray-200 bg-white">
        <h1 className="text-3xl font-extrabold text-[#1A202C]">
          Panel de Control
        </h1>
        <p className="text-gray-500 text-sm mt-2">Gestión y configuración de módulos</p>
      </div>
      
      <div className="p-6 flex-1 overflow-y-auto space-y-4">
        {modules.map((mod) => (
          <div 
            key={mod.id}
            onClick={() => onSelect(mod.id)}
            className={`p-5 cursor-pointer transition-all border-l-4 ${
              selectedId === mod.id 
                ? 'border-[#FFCC00] bg-white shadow-sm' 
                : 'border-transparent bg-transparent hover:bg-white border border-gray-100'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 ${mod.estado ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Estado</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onToggle(mod.id); }}
                className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${
                  mod.estado ? 'bg-[#1A202C]' : 'bg-gray-300'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  mod.estado ? 'translate-x-6' : 'translate-x-0'
                }`} />
              </button>
            </div>
            
            <div onClick={(e) => e.stopPropagation()}>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Nombre del Módulo</label>
              <input 
                type="text"
                value={mod.nombre}
                onChange={(e) => onNameChange(mod.id, e.target.value)}
                className="w-full bg-white border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-colors rounded-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
