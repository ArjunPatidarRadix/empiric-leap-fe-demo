// Header.tsx
export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <h1 className="text-white text-xl">
        Project X - Medical Office Building
      </h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded bg-gray-700 text-white"
        />
        <div className="mx-4 text-white">
          <i className="fas fa-bell"></i>
        </div>
        <div className="text-white flex items-center">
          <span>Olivia</span>
          <img
            src="https://via.placeholder.com/30"
            alt="Profile"
            className="rounded-full ml-2"
          />
        </div>
      </div>
    </div>
  );
};
