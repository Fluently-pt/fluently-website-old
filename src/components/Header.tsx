import React, { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("join");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Update active section based on scroll position
      const sections = ["join", "about", "features", "pricing"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    ["Join Beta", "#join"],
    ["About", "#about"],
    ["Features", "#features"],
    ["Pricing", "#pricing"],
  ];

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "py-4" : "py-5"
      }`}
    >
      <div
        className={`container mx-auto px-4 relative flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg rounded-2xl px-8 py-4 mx-8 backdrop-blur-sm"
            : "px-8 mx-8"
        }`}
      >
        <Logo className="h-8 w-auto" color="text-brand-500" />

        <nav className="navmenu mx-auto hidden lg:flex space-x-8">
          {navItems.map(([title, url]) => (
            <a
              key={title}
              href={url}
              className={`relative font-semibold transition-colors duration-300
                before:content-[''] before:absolute before:bottom-[-6px] before:left-0 
                before:h-0.5 before:bg-brand-400 before:transition-all before:duration-300
                ${
                  isActive(url)
                    ? "text-brand-600 before:w-6"
                    : "text-brand-500 hover:text-brand-600 before:w-0 hover:before:w-6"
                }`}
            >
              {title}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          className="lg:hidden text-brand-500 hover:text-brand-600 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>

        <a
          href="#"
          className="hidden lg:flex items-center space-x-2 text-brand-500 hover:text-brand-600 font-semibold transition-colors duration-300"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <span>Login</span>
        </a>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transform origin-top-right transition-all duration-200"
          >
            <nav className="py-2">
              {[...navItems, ["Login", "#"]].map(([title, url]) => (
                <a
                  key={title}
                  href={url}
                  className={`flex items-center px-4 py-3 text-sm font-semibold transition-colors duration-200
                    ${title === "Login" ? "border-t border-gray-100" : ""}
                    ${
                      isActive(url)
                        ? "text-brand-600 bg-brand-50"
                        : "text-brand-500 hover:text-brand-600 hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {title === "Login" && (
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                  )}
                  {title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
