import React, { useState } from 'react';

function RSVPForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    year: '',
    scholarshipType: '',
    guestCount: '1',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn ${formData.fullName} đã đăng ký! (Chức năng gửi thật sẽ được tích hợp sau)`);
    setFormData({
      fullName: '', email: '', phone: '', year: '',
      scholarshipType: '', guestCount: '1', message: ''
    });
  };

  return (
    <section id="dang-ky" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl   font-bold text-[#1a365d] mb-4">
            Đăng ký tham dự sự kiện
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Vui lòng điền thông tin để đăng ký tham dự Gala kỷ niệm 30 năm học bổng
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-5 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#1a365d] font-medium mb-2">Họ và tên *</label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-[#1a365d] font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#1a365d] font-medium mb-2">Số điện thoại *</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-[#1a365d] font-medium mb-2">Khóa tốt nghiệp / Năm học</label>
                <input
                  type="text"
                  name="year"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="Ví dụ: K2008, SV năm 3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#1a365d] font-medium mb-2">Loại học bổng đã nhận (nếu có)</label>
                <select
                  name="scholarshipType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  value={formData.scholarshipType}
                  onChange={handleChange}
                >
                  <option value="">Chọn loại học bổng</option>
                  <option value="khuyenhoc">Học bổng khuyến học</option>
                  <option value="tainang">Học bổng tài năng</option>
                  <option value="quocte">Học bổng quốc tế</option>
                  <option value="khac">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1a365d] font-medium mb-2">Số lượng khách tham dự *</label>
                <select
                  name="guestCount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 người (chỉ bản thân)</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người</option>
                  <option value="4">4 người</option>
                  <option value="5">5 người trở lên</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[#1a365d] font-medium mb-2">Lời nhắn (nếu có)</label>
              <textarea
                name="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] h-32"
                value={formData.message}
                onChange={handleChange}
                placeholder="Lời nhắn đến ban tổ chức..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-8 bg-[#d4af37] text-[#1a365d] font-semibold rounded-lg hover:bg-[#2d4a8a] hover:text-white transition-colors text-lg"
            >
              Gửi đăng ký tham dự
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RSVPForm;