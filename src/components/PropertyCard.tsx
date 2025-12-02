export default function PropertyCard({
  location,
  listings,
  image,
  featured = false,
  variant = "small",
}: PropertyCardProps) {
  const isLarge = variant === "large" || featured;

  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group ${
        isLarge ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <img
        src={image}
        alt={location}
        className={`${isLarge ? " w-[900px]" : " w-full"} h-[250px] object-cover group-hover:scale-105 transition-transform duration-300`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-between p-4">
        <div />

        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-white font-bold text-lg">{location}</h3>
            <p className="text-gray-200 text-sm">{listings} listings</p>
          </div>
          <button className="bg-white/20 hover:bg-white/40 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
