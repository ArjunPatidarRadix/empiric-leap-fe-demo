// Widget.tsx
interface WidgetProps {
  title: string;
  content: React.ReactNode; // Type for JSX elements passed as children
}

export const Widget: React.FC<WidgetProps> = ({ title, content }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {content}
    </div>
  );
};
