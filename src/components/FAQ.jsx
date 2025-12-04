import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Sự kiện Gala 30 năm học bổng có phí tham dự không?',
      answer: 'Sự kiện hoàn toàn miễn phí tham dự cho tất cả cựu sinh viên, sinh viên hiện tại và các nhà tài trợ. Chi phí tổ chức được tài trợ bởi nhà trường và các đối tác.'
    },
    {
      question: 'Tôi có thể đưa người thân cùng tham dự không?',
      answer: 'Có, bạn có thể đăng ký thêm tối đa 2 khách mời đi cùng. Vui lòng điền thông tin số lượng khách trong phần đăng ký để ban tổ chức chuẩn bị đầy đủ.'
    },
    {
      question: 'Tôi chưa từng nhận học bổng có được tham dự không?',
      answer: 'Có, sự kiện mở rộng cho tất cả cựu sinh viên và sinh viên hiện tại của trường, không phân biệt đã từng nhận học bổng hay chưa.'
    },
    {
      question: 'Làm thế nào để đăng ký học bổng của trường?',
      answer: 'Thông tin về các chương trình học bổng và cách đăng ký được công bố trên website chính thức của trường. Bạn cũng có thể liên hệ Phòng Công tác Sinh viên để được tư vấn chi tiết.'
    },
    {
      question: 'Tôi có thể tài trợ cho chương trình học bổng không?',
      answer: 'Có, nhà trường luôn hoan nghênh sự đóng góp của các cá nhân và tổ chức. Vui lòng liên hệ Văn phòng Cựu sinh viên hoặc Phòng Quan hệ Doanh nghiệp để biết thêm chi tiết.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl   font-bold text-[#1a365d] mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Giải đáp những thắc mắc về sự kiện và chương trình học bổng
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mt-5 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#1a365d]">{faq.question}</span>
                <i className={`fas fa-plus text-[#d4af37] ${activeIndex === index ? 'rotate-45' : ''}`}></i>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;