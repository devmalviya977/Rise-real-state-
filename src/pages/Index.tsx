import { useState } from "react";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";
import ServiceCard from "../components/ServiceCard";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";
import img1 from "../Assets/Area/image1.png";
import img2 from "../Assets/Area/image2.png";
import img3 from "../Assets/Area/image3.png";
import img4 from "../Assets/Area/image4.png";
import img5 from "../Assets/Area/image5.png";
import Hero from "../Assets/Hero/heroimg.png";

export default function Index() {
  const [searchType, setSearchType] = useState<"rent" | "buy">("rent");

  const properties = [
    { id: 1, location: "Washington", listings: 29, image: img1, featured: false },
    { id: 2, location: "Franklin", listings: 26, image: img2, featured: false },
    { id: 3, location: "Clinton", listings: 25, image: img3, featured: false },
    { id: 4, location: "Arlington", listings: 25, image: img4, featured: true },
    { id: 5, location: "Centerville", listings: 23, image: img5, featured: false },
  ];

  const services = [
    { title: "Sell your home", icon: "💰", description: "We do a free evaluation to be sure you want to start selling" },
    { title: "Rent your home", icon: "🔑", description: "We do a free evaluation to be sure you want to start renting" },
    { title: "Buy a home", icon: "🏘️", description: "We do a free evaluation to be sure you want to start buying" },
    { title: "Free marketing", icon: "📢", description: "We do a free evaluation to be sure you want to start marketing" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section
        className="relative h-screen max-h-[700px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Hero})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Header overlay */}
        <div className="absolute top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm">
          <Header />
        </div>

        {/* Hero content */}
        <div className="text-center max-w-2xl px-4 sm:px-6 lg:px-8 -mb-80 pb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
            Find Your Dream Home
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultricies nulla blandit volutpat.
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-xl p-6 text-gray-800 max-w-4xl mx-auto">
            {/* Toggle buttons */}
            <div className="flex gap-4 mb-6 justify-center">
              {["rent", "buy"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSearchType(type as "rent" | "buy")}
                  className={`px-6 py-2 font-semibold rounded transition-colors ${
                    searchType === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Search inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Locations", options: ["Select your city", "Washington", "Franklin", "Clinton", "Arlington", "Centerville"] },
                { label: "Property Type", options: ["Select property type", "Apartment", "House", "Condo", "Villa"] },
                { label: "Rent Range", options: ["Select rent range", "$0 - $1000", "$1000 - $2000", "$2000 - $5000", "$5000+"] },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{item.label}</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 appearance-none cursor-pointer">
                    {item.options.map((option, idx) => (
                      <option key={idx}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-8 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Search button */}
            <div className="mt-6 flex gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties by Area Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Properties by Area</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultricies nulla blandit volutpat.
          </p>
        </div>

        {/* Centered Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] justify-center justify-items-center">
          {properties.map((property) => (
            <div
              key={property.id}
              className={property.featured ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <PropertyCard
                location={property.location}
                listings={property.listings}
                image={property.image}
                featured={property.featured}
                variant={property.featured ? "large" : "small"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide a wide range of real estate services to help you buy, sell, or rent your home with ease.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[
              { title: "About REIS", links: ["About Us", "Careers", "Blog"] },
              { title: "Properties", links: ["Buy", "Rent", "Sell"] },
              { title: "Support", links: ["Help Center", "Contact Us", "FAQ"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookies"] },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 REIS - Your Deals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
