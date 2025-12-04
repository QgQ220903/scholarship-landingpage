import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <i className="fas fa-graduation-cap text-2xl text-[#d4af37]"></i>
            <span className="  font-bold text-xl text-[#1a365d]">Học bổng 30 năm</span>
          </a>

          <button
            className="md:hidden text-[#1a365d] text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <nav className={`md:flex md:space-x-8 ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none p-6 md:p-0`}>
            {['Lịch sử', 'Học bổng', 'Gương mặt tiêu biểu', 'Sự kiện', 'Đăng ký', 'FAQ'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block md:inline-block text-[#1a365d] font-medium hover:text-[#d4af37] transition-colors duration-300 py-2 md:py-0"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;