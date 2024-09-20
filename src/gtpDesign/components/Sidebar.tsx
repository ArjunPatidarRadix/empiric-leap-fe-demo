// Sidebar.tsx
export const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-900 w-20 min-h-screen flex flex-col items-center py-6">
      <div className="text-orange-500 p-2">
        <i className="fas fa-chart-bar"></i>
      </div>
      <div className="text-orange-500 p-2">
        <i className="fas fa-tasks"></i>
      </div>
      <div className="text-orange-500 p-2">
        <i className="fas fa-cogs"></i>
      </div>
    </div>
  );
};
