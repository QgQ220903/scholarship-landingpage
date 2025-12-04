import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <i className="fas fa-graduation-cap text-3xl text-[#d4af37]"></i>
              <span className="  font-bold text-2xl">Học bổng 30 năm</span>
            </div>
            <p className="text-gray-300 mb-6">
              Hành trình 30 năm trao tri thức, ươm mầm tài năng và lan tỏa giá trị nhân văn qua các chương trình học bổng của trường.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37]">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37]">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37]">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {['Lịch sử học bổng', 'Danh mục học bổng', 'Gương mặt tiêu biểu', 'Sự kiện 30 năm', 'Câu hỏi thường gặp'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-[#d4af37] hover:pl-2 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Liên hệ</h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#d4af37] mt-1 mr-3"></i>
                <div>
                  <p>123 Đường ABC, Quận XYZ</p>
                  <p className="text-gray-300">Thành phố Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone text-[#d4af37] mt-1 mr-3"></i>
                <p>(+84) 28 1234 5678</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-[#d4af37] mt-1 mr-3"></i>
                <p>hocbong30nam@university.edu.vn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Trường Đại học. Tất cả các quyền được bảo lưu.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-[#d4af37] mr-4">Chính sách bảo mật</a> |
            <a href="#" className="hover:text-[#d4af37] ml-4"> Điều khoản sử dụng</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;