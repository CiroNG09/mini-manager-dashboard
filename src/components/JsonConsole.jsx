export default function JsonConsole({ data }) {
  return (
    <div className="w-full mt-6 border-t border-gray-200 pt-6">
      <div className="flex items-center mb-3">
        <span className="text-xs font-extrabold text-[#1A202C] uppercase tracking-widest">State Output (Real-time)</span>
      </div>
      <div className="bg-[#F8F9FA] p-5 border-l-4 border-[#FFCC00] overflow-x-auto">
        <pre className="text-xs font-mono text-gray-800 leading-relaxed">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
