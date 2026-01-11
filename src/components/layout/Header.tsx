import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, LayoutDashboard, GraduationCap } from "lucide-react";

const navbarLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Program", path: "#program" },
  { id: 3, name: "Methodology", path: "#methodology" },
  { id: 4, name: "Contact", path: "#forms" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  
  // Mock Auth - Replace with actual context in production
  // const { user, logout } = useContext(AuthContext);
  const user = null; 
  const logout = () => console.log("Logout");
  
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLElement>, path: string) => {
    e.preventDefault();
    
    if (path.startsWith("#")) {
      const elementId = path.substring(1);
      if (isHomePage) {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-2 px-[42px] py-[15px] fixed top-0 left-0 w-full h-[75px] z-50 bg-white shadow-md font-lexend">
      <div>
        <Link to="/" className="flex items-center gap-[9px] cursor-pointer">
          {/* Using GraduationCap as placeholder for logo */}
          <GraduationCap className="h-[35px] w-[40px] text-[#0C50E3]" />
          <div className="flex flex-col items-center gap-[6px]">
            <p className="text-[#0C50E3] w-[41.15px] text-[16px] font-bold leading-none">
              EMS
            </p>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2 xl:gap-4 space-x-6">
        <div className="flex items-center gap-8 xl:gap-12">
          {navbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (link.newTab) return;
                handleNavigation(e, link.path);
              }}
              className="text-black text-[14px] font-medium cursor-pointer hover:text-[#0C50E3] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <User 
                className="w-8 h-8 rounded-full cursor-pointer bg-gray-200 p-1 text-gray-500"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              
              {showDropdown && (
                <div className="absolute top-13 right-0 w-[200px] bg-white shadow-xl rounded-2xl p-4 z-50">
                  <div className="flex flex-col gap-3 text-gray-700">
                    <Link
                      to="/student/dashboard"
                      className="flex items-center gap-3 hover:text-blue-600"
                      onClick={() => setShowDropdown(false)}
                    >
                      <LayoutDashboard className="w-5 h-5" />
                      <span className="text-base font-medium">My Dashboard</span>
                    </Link>

                    <button
                      className="flex items-center gap-3 text-red-600 hover:text-red-700 mt-1"
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="text-base font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/sign-up"
              className="bg-[#1F55BC] text-white text-[14px] font-semibold px-6 py-2 rounded-full hover:bg-[#16449c] transition-colors"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-800 text-xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 w-48 bg-white shadow-md rounded-md py-2 z-20">
            <div className="flex flex-col gap-2 p-4">
              {user ? (
                <>
                  <div
                    className="flex items-center gap-2 mb-1 cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <User className="w-8 h-8 rounded-full bg-gray-200 p-1 text-gray-500" />
                  </div>

                  {showDropdown && (
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/student/dashboard"
                        className="text-gray-700 text-[14px] font-medium flex gap-2 items-center"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setShowDropdown(false);
                        }}
                      >
                        <LayoutDashboard className="w-5 h-5" />
                        <span>My Dashboard</span>
                      </Link>
                      <div
                        className="text-red-600 text-[14px] font-medium cursor-pointer flex gap-2 items-center"
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                          setShowDropdown(false);
                        }}
                      >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to="/sign-up"
                  className="bg-[#1F55BC] text-white text-[14px] font-semibold px-4 py-2 rounded-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              )}

              <div className={`flex flex-col gap-2 ${showDropdown ? "mt-2" : "mt-0"}`}>
                {navbarLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.path}
                    target={link.newTab ? "_blank" : undefined}
                    rel={link.newTab ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (link.newTab) {
                        setIsMobileMenuOpen(false);
                        return;
                      }
                      handleNavigation(e, link.path);
                    }}
                    className="text-black text-[14px] font-medium cursor-pointer flex gap-2 items-center justify-start"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;