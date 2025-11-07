import { Menu, X } from "lucide-react";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Главная", href: "#hero" },
    { title: "Философия", href: "#philosophy" },
    { title: "Формат", href: "#schedule" },
    { title: "Цены", href: "#schedule" },
    { title: "FAQ", href: "#faq" },
    { title: "Контакты", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Кнопка меню */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-[hsl(var(--color-pink))] text-white border-4 border-black rounded-full shadow-[4px_4px_0_hsl(0_0%_0%)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_hsl(0_0%_0%)] transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Само меню */}
      <nav
        className={`fixed inset-0 z-40 bg-white border-8 border-black transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full flex items-center justify-center p-8">
          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className="block text-4xl md:text-6xl font-black uppercase hover:text-[hsl(var(--color-pink))] transition-colors relative group"
                >
                  {item.title}
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[hsl(var(--color-yellow))] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Декоративные элементы */}
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[hsl(var(--color-blue))] rounded-full opacity-50 animate-float" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-[hsl(var(--color-pink))] opacity-50 animate-wiggle" />
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-[hsl(var(--color-yellow))] rounded-full" />
          <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-[hsl(var(--color-cyan))] rounded-full" />
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;

