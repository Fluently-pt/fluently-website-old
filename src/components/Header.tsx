import React, { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { Menu, X, LogIn } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("join");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 100; // Account for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "features", "stats", "waitlist"];
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
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
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    ["About", "hero"],
    ["Features", "features"],
    ["Stats", "stats"],
    ["Join Beta", "waitlist"],
  ];

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all py-4`}>
      <div
        className={`container mx-auto px-4 relative flex items-center justify-between transition-all duration-300 bg-white/95 shadow-soft rounded-2xl px-8 py-4 mx-8 backdrop-blur-sm`}
      >
        <Logo className="h-8 w-auto" color="text-brand-500" />

        <nav className="navmenu mx-auto hidden lg:flex space-x-12">
          {navItems.map(([title, sectionId]) => (
            <a
              key={title}
              href={`#${sectionId}`}
              onClick={e => scrollToSection(e, sectionId)}
              className={`relative font-semibold transition-all duration-300
                before:content-[''] before:absolute before:bottom-[-6px] before:left-1/2 
                before:h-0.5 before:bg-brand-300 before:transition-all before:duration-300
                ${
                  isActive(sectionId)
                    ? "text-brand-500 before:w-full before:-translate-x-1/2"
                    : "text-brand-800 hover:text-brand-500 before:w-0 hover:before:w-full hover:before:-translate-x-1/2"
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
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>

        <a
          href="#"
          className="hidden lg:flex items-center space-x-2 text-white bg-brand-300 hover:bg-brand-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
        >
          <LogIn className="h-5 w-5" />
          <span>Login</span>
        </a>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transform origin-top-right transition-all duration-200"
          >
            <nav className="py-2">
              {[...navItems, ["Login", ""]].map(([title, sectionId]) => (
                <a
                  key={title}
                  href={sectionId ? `#${sectionId}` : "#"}
                  onClick={e => sectionId && scrollToSection(e, sectionId)}
                  className={`flex items-center px-4 py-3 text-sm font-semibold transition-colors duration-200
                    ${title === "Login" ? "border-t border-gray-100" : ""}
                    ${
                      isActive(sectionId)
                        ? "text-brand-600 bg-brand-50"
                        : "text-brand-500 hover:text-brand-600 hover:bg-gray-50"
                    }`}
                >
                  {title === "Login" && <LogIn className="h-5 w-5 mr-2" />}
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
