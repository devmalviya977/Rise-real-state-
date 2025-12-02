interface ServiceCardProps {
  image: string;   // ⬅ image file path
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({
  image,
  title,
  description,
  link = "Read more",
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
      <div className="flex justify-left mb-4">
        <img
          src={image}
          alt={title}
          className="w-14 h-14 object-contain"
        />
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
