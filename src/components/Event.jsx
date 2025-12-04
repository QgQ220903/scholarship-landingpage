import React from 'react';

function Event() {
  const eventDetails = [
    { icon: 'far fa-calendar-alt', title: 'Thời gian', details: '18:00, Thứ Bảy, ngày 15 tháng 12 năm 2024' },
    { icon: 'fas fa-map-marker-alt', title: 'Địa điểm', details: 'Hội trường lớn - Trường Đại học, 123 Đường ABC, Thành phố' },
    { icon: 'fas fa-users', title: 'Khách mời', details: 'Cựu sinh viên, sinh viên hiện tại, nhà tài trợ, đối tác, báo chí' }
  ];

  return (
    <section id="su-kien" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl   font-bold text-[#1a365d] mb-4">
            Sự kiện kỷ niệm 30 năm
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tham gia sự kiện đặc biệt kỷ niệm 30 năm hành trình học bổng của trường
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-5 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl   font-bold text-[#1a365d] mb-6">
              Gala kỷ niệm 30 năm học bổng
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Một sự kiện đặc biệt quy tụ các thế cựu sinh viên, sinh viên hiện tại, nhà tài trợ và đối tác cùng nhìn lại hành trình ý nghĩa 30 năm qua.
            </p>

            <div className="space-y-6 mb-8">
              {eventDetails.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#f4e9c9] text-[#1a365d] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`${detail.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d] mb-1">{detail.title}</h4>
                    <p className="text-gray-600">{detail.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#dang-ky" className="inline-block px-8 py-3 bg-[#d4af37] text-[#1a365d] font-semibold rounded-lg hover:bg-[#2d4a8a] hover:text-white transition-colors">
              Đăng ký tham dự ngay
            </a>
          </div>

          <div className="bg-[#f4e9c9] rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <i className="fas fa-calendar-check text-6xl text-[#d4af37] mb-4"></i>
            </div>
            <h3 className="text-2xl   font-bold text-[#1a365d] mb-4">Gala 30 năm học bổng</h3>
            <p className="text-gray-600">Một đêm tri ân và kết nối đặc biệt</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;