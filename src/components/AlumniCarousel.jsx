import React, { useState, useEffect } from 'react';

function AlumniCarousel() {
  const alumni = [
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      name: 'Nguyễn Thị Minh Anh',
      major: 'Cựu sinh viên Khoa Kinh tế (2008)',
      description: 'Nhận học bổng toàn phần 4 năm, hiện là Giám đốc Tài chính tại tập đoàn đa quốc gia.',
      quote: '"Học bổng không chỉ là hỗ trợ tài chính mà còn là động lực để tôi vươn xa hơn."',
      company: 'Tập đoàn Đa Quốc gia XYZ'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      name: 'Trần Văn Hùng',
      major: 'Cựu sinh viên Khoa Công nghệ (2012)',
      description: 'Nhận học bổng nghiên cứu, hiện là Founder startup công nghệ giáo dục thành công.',
      quote: '"Học bổng nghiên cứu đã mở ra cánh cửa đến với thế giới công nghệ cho tôi."',
      company: 'EduTech Startup'
    },
    {
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80',
      name: 'Lê Thị Hương Giang',
      major: 'Sinh viên năm 4 Khoa Y (hiện tại)',
      description: 'Nhận học bổng toàn phần 4 năm liên tiếp, có nghiên cứu đăng trên tạp chí quốc tế.',
      quote: '"Học bổng giúp tôi toàn tâm toàn ý cho việc học và nghiên cứu y khoa."',
      company: 'Bệnh viện Đại học Y'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === alumni.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [alumni.length]);

  return (
    <section id="guong-mat-tieu-bieu" className="py-16 md:py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl   font-bold text-[#1a365d] mb-4">
            Gương mặt tiêu biểu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Những cựu sinh viên và sinh viên nhận học bổng đã tỏa sáng trên con đường sự nghiệp
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-5 rounded"></div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex overflow-hidden">
            {alumni.map((person, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-0 md:w-1/3 px-4 transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${person.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/70 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                      <i className="fas fa-award text-white"></i>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a365d] mb-2">{person.name}</h3>
                    <div className="flex items-center text-[#d4af37] mb-2">
                      <i className="fas fa-graduation-cap mr-2"></i>
                      <span className="font-medium">{person.major}</span>
                    </div>
                    <div className="flex items-center text-[#2d4a8a] mb-4">
                      <i className="fas fa-building mr-2"></i>
                      <span>{person.company}</span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{person.description}</p>
                    <div className="bg-[#f4e9c9] rounded-lg p-4 border-l-4 border-[#d4af37]">
                      <p className="italic text-gray-700 text-sm">{person.quote}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#1a365d] hover:bg-gray-50"
            onClick={() => setCurrentIndex(prev => prev === 0 ? alumni.length - 1 : prev - 1)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#1a365d] hover:bg-gray-50"
            onClick={() => setCurrentIndex(prev => prev === alumni.length - 1 ? 0 : prev + 1)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {alumni.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#d4af37]' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlumniCarousel;