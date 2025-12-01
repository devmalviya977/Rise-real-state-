import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  link = "Read more",
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4 text-slate-700">
        <div className="text-4xl">{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <a
        href="#"
        className="text-slate-600 hover:text-slate-800 font-medium text-sm hover:underline"
      >
        {link}
      </a>
    </div>
  );
}
