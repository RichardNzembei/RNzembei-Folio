import { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-apple ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/70 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between h-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[13px] font-medium text-black tracking-wide hover:text-gray-600 transition-colors duration-300"
            >
              RN
            </button>

            <div className="flex items-center gap-8">
              {["services", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-[13px] font-light text-gray-500 hover:text-black transition-colors duration-300 capitalize tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
