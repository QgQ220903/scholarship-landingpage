import React from 'react';

function Timeline() {
  const timelineItems = [
    { year: '1994 - 2000', title: 'Khởi đầu với học bổng khuyến học', description: 'Ra đời những học bổng đầu tiên dành cho sinh viên có hoàn cảnh khó khăn vượt khó, với sự tài trợ từ các cựu sinh viên thành đạt.' },
    { year: '2001 - 2005', title: 'Mở rộng đối tác tài trợ', description: 'Thiết lập quan hệ hợp tác với các doanh nghiệp địa phương, tăng số lượng và giá trị học bổng lên gấp 3 lần.' },
    { year: '2006 - 2010', title: 'Phát triển học bổng tài năng', description: 'Bắt đầu trao học bổng tài năng cho sinh viên có thành tích học tập xuất sắc và nghiên cứu khoa học.' },
    { year: '2011 - 2015', title: 'Học bổng quốc tế hóa', description: 'Thiết lập các học bổng trao đổi sinh viên quốc tế và học bổng cho sinh viên nước ngoài.' },
    { year: '2016 - 2020', title: 'Đa dạng hóa loại hình học bổng', description: 'Phát triển thêm học bổng nghiên cứu, học bổng khởi nghiệp và học bổng phát triển kỹ năng mềm.' },
    { year: '2021 - 2024', title: 'Học bổng chuyển đổi số', description: 'Ra mắt các học bổng công nghệ, AI, và học bổng trực tuyến, thích ứng với xu thế mới.' }
  ];

  return (
    <section id="lich-su" className="py-16 md:py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl   font-bold text-[#1a365d] mb-4">
            Hành trình 30 năm học bổng
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nhìn lại chặng đường phát triển của các chương trình học bổng qua từng giai đoạn
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-5 rounded"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#d4af37] -translate-x-1/2"></div>

          {timelineItems.map((item, index) => (
            <div key={index} className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:justify-start md:pr-1/2 md:pl-8' : 'md:justify-end md:pl-1/2 md:pr-8'}`}>
              <div className="bg-white p-6 rounded-xl shadow-lg md:max-w-md">
                <div className="text-[#d4af37] font-bold text-lg mb-2">{item.year}</div>
                <h3 className="text-xl   font-semibold text-[#1a365d] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-[#d4af37] rounded-full border-4 border-white -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;