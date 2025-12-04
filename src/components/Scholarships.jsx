import React from 'react';

function Scholarships() {
  const scholarships = [
    { icon: 'fas fa-hand-holding-heart', title: 'Học bổng khuyến học', description: 'Dành cho sinh viên có hoàn cảnh khó khăn, thể hiện ý chí vươn lên trong học tập và cuộc sống.' },
    { icon: 'fas fa-award', title: 'Học bổng tài năng', description: 'Trao tặng cho sinh viên có thành tích học tập xuất sắc, nghiên cứu khoa học và tài năng đặc biệt.' },
    { icon: 'fas fa-globe-americas', title: 'Học bổng quốc tế', description: 'Hỗ trợ sinh viên trao đổi tại nước ngoài và sinh viên quốc tế đến học tập tại trường.' }
  ];

  return (
    <section id="hoc-bong" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl   font-bold text-[#1a365d] mb-4">
            Danh mục học bổng
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Các chương trình học bổng đa dạng đang được triển khai tại trường
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-5 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#1a365d] text-white p-8 text-center">
                <i className={`${scholarship.icon} text-4xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl   font-semibold text-[#1a365d] mb-4">{scholarship.title}</h3>
                <p className="text-gray-600 mb-6">{scholarship.description}</p>
                <a href="#" className="inline-block px-6 py-2 bg-[#d4af37] text-[#1a365d] font-semibold rounded-lg hover:bg-[#2d4a8a] hover:text-white transition-colors">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Scholarships;