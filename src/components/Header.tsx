import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import img1 from "../Assets/Hero/facebook.svg";
import img2 from "../Assets/Hero/instagram.svg";
import img3 from "../Assets/Hero/linkedin.svg";
import img4 from "../Assets/Hero/bhance.svg";
import img5 from "../Assets/Hero/dribble.svg";
import logo from "../Assets/Hero/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "OUR AGENTS", href: "/agents" },
    { label: "PROPERTIES", href: "/properties" },
    { label: "GALLERY", href: "/gallery" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT US", href: "/contact" },
    { label: "SEARCH", href: "/search" },
  ];

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Apply gradient + blur */}
      <div className="backdrop-blur-md  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar */}
          <div className="border-b border-white/20 py-2 text-xs hidden sm:flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <a href="mailto:contact@realdeal.com" className="hover:opacity-80 transition-opacity">
                ✉ Email: contact@realdeal.com
              </a>
            </div>
            <div className="flex gap-3 items-center mt-1">
              {[img1, img2, img3, img4, img5].map((img, i) => (
                <a key={i} href="#" className="hover:opacity-80 transition-opacity">
                  <img src={img} alt="" className="h-5 w-5 object-contain" />
                </a>
              ))}
              <span className="ml-2">☎ 123-4567-890</span>
            </div>
          </div>

          {/* Main nav */}
          <nav className=" flex justify-between items-center text-white mt-1">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex gap-4 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium hover:bg-white/20 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Add Listing button & Mobile menu toggle */}
            <div className="flex gap-4 items-center">
              <Button className="hidden sm:inline-flex bg-white/20 text-white hover:bg-white/30 font-semibold">
                Add Listing
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-white/20 rounded transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-white/20 py-4 text-white">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium hover:bg-white/20 rounded transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
