import React from 'react';

function HallOfFame() {
  const alumni = [
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      name: 'Nguyễn Thị Minh Anh',
      major: 'Cựu sinh viên Khoa Kinh tế (2008)',
      description: 'Nhận học bổng toàn phần 4 năm, hiện là Giám đốc Tài chính tại tập đoàn đa quốc gia.',
      quote: '"Học bổng không chỉ là hỗ trợ tài chính mà còn là động lực để tôi vươn xa hơn."'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
      name: 'Trần Văn Hùng',
      major: 'Cựu sinh viên Khoa Công nghệ (2012)',
      description: 'Nhận học bổng nghiên cứu, hiện là Founder startup công nghệ giáo dục thành công.',
      quote: '"Học bổng nghiên cứu đã mở ra cánh cửa đến với thế giới công nghệ cho tôi."'
    },
    {
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80',
      name: 'Lê Thị Hương Giang',
      major: 'Sinh viên năm 4 Khoa Y (hiện tại)',
      description: 'Nhận học bổng toàn phần 4 năm liên tiếp, có nghiên cứu đăng trên tạp chí quốc tế.',
      quote: '"Học bổng giúp tôi toàn tâm toàn ý cho việc học và nghiên cứu y khoa."'
    }
  ];

  return (
    <section id="hall-of-fame" className="section hall-of-fame">
      <div className="container">
        <div className="section-title">
          <h2>Gương mặt tiêu biểu</h2>
          <p>Những cựu sinh viên và sinh viên nhận học bổng đã tỏa sáng trên con đường sự nghiệp</p>
        </div>

        <div className="alumni-grid">
          {alumni.map((person, index) => (
            <div key={index} className="alumni-card">
              <div className="alumni-img" style={{ backgroundImage: `url(${person.image})` }}></div>
              <div className="alumni-info">
                <h3>{person.name}</h3>
                <span className="alumni-major">{person.major}</span>
                <p>{person.description}</p>
                <div className="alumni-quote">{person.quote}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HallOfFame;