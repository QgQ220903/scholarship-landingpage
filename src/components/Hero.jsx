import React from 'react';
export default function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">

      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-700/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-50 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="text-white order-2 lg:order-1">
            {/* Minimalist Tagline */}
            <p className="text-amber-400 font-light tracking-widest mb-4">30 NĂM • 1994 - 2024</p>

            {/* Bold Headline with Impact */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6">
              <span className="block">MỘT HÀNH TRÌNH.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 mt-2">
                VÔ VÀN TƯƠNG LAI.
              </span>
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Ba thập kỷ kiên định với sứ mệnh trao cơ hội. Chúng tôi tự hào nhìn lại hành trình đã chắp cánh cho những ước mơ, và trân trọng mời bạn cùng viết nên chương mới.
            </p>

            {/* Strong Single CTA */}
            <div>
              <a
                href="#rsvp"
                className="inline-flex items-center justify-center group px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-extrabold text-lg rounded-xl shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-[1.02]"
              >
                THAM GIA LỄ KỶ NIỆM
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
              </a>
              <p className="text-gray-400 text-sm mt-4">Đăng ký trước ngày 10/12 để nhận ưu đãi đặc biệt.</p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Image with Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                  alt="Cựu sinh viên thành đạt trong môi trường chuyên nghiệp, biểu tượng cho thành quả của học bổng"
                  className="w-full h-auto"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200 max-w-xs">
                <div className="text-4xl font-black text-blue-900 mb-2">5000+</div>
                <p className="text-gray-700 font-semibold">Sinh viên đã được trao cơ hội</p>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}