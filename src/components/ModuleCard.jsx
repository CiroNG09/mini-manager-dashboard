import { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

// Helper to ensure strict camelCase for ID (handles spaces, dashes, underscores)
const toCamelCase = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, (chr) => chr.toLowerCase());
};

export default function ModuleCard({ module }) {
  const [imgError, setImgError] = useState(false);

  // Reset error state when module changes
  useEffect(() => {
    setImgError(false);
  }, [module?.id]);

  if (!module) return null;

  return (
    <div className="w-full bg-white border border-gray-200 shadow-sm relative group rounded-none flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 relative min-h-[200px] bg-gray-100 flex items-center justify-center border-r border-gray-200">
        {!imgError ? (
          <img 
            src={module.img_url} 
            alt={module.nombre}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Simulada</span>
          </div>
        )}
      </div>
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
        <div className="mb-2">
          <span className="inline-block bg-[#FFCC00] text-[#1A202C] text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4">
            #{toCamelCase(module.id)}
          </span>
        </div>
        <h3 className="text-3xl font-extrabold text-[#1A202C] mb-4 leading-tight">{module.nombre}</h3>
        
        <div className="mt-auto flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${module.estado ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            {module.estado ? 'Módulo Activo' : 'Módulo Inactivo'}
          </span>
        </div>
      </div>
    </div>
  );
}
