// components/InfoSection.tsx
interface InfoSectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  bgColor?: string;
}

export default function InfoSection({ 
  icon, 
  title, 
  children, 
  bgColor = "bg-white" 
}: InfoSectionProps) {
  return (
    <section className={`${bgColor} p-6 rounded-xl shadow-md`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="text-3xl mr-3">{icon}</span>
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </section>
  );
}