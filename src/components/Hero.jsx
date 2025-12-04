import React from 'react';

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 54, 93, 0.85), rgba(26, 54, 93, 0.9)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80)'
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl   font-bold mb-6">
          Hành trình 30 năm học bổng - Vun đắp tương lai
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
          Cùng nhìn lại hành trình 30 năm trao tri thức, ươm mầm tài năng và lan tỏa giá trị nhân văn qua các chương trình học bổng của trường.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#dang-ky" className="inline-block px-8 py-3 bg-[#d4af37] text-[#1a365d] font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
            Đăng ký tham dự sự kiện
          </a>
          <a href="#lich-su" className="inline-block px-8 py-3 bg-[#1a365d] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#2d4a8a] hover:shadow-lg hover:-translate-y-1">
            Khám phá hành trình
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;