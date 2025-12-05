import React, { useState } from 'react';
import formConfig from '../../content/rsvp-form.json'; // Import file JSON

function RSVPForm() {
  // Destructure config từ file JSON
  const {
    section,
    header,
    form,
    webAppUrl
  } = formConfig;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    year: '',
    scholarshipType: form.fields.scholarshipType.options[0].value,
    guestCount: form.fields.guestCount.options[0].value,
    message: '',
    honeypot: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: '❌ Email không hợp lệ' });
      return false;
    }

    const phoneClean = formData.phone.replace(/\s/g, '');
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phoneClean)) {
      setSubmitStatus({ type: 'error', message: '❌ Số điện thoại không hợp lệ (10-11 chữ số)' });
      return false;
    }

    if (formData.fullName.length < 3) {
      setSubmitStatus({ type: 'error', message: '❌ Họ tên quá ngắn (tối thiểu 3 ký tự)' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      if (!validateForm()) {
        setIsLoading(false);
        return;
      }

      // Sử dụng webAppUrl từ JSON
      await fetch(webAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          timestamp: new Date().toISOString(),
          ...formData
        })
      });

      // Sử dụng template string từ JSON
      const successMessage = form.successMessage.replace('{{name}}', formData.fullName);
      setSubmitStatus({
        type: 'success',
        message: successMessage
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        year: '',
        scholarshipType: form.fields.scholarshipType.options[0].value,
        guestCount: form.fields.guestCount.options[0].value,
        message: '',
        honeypot: ''
      });

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: form.errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Hàm render field theo type
  const renderField = (fieldName, fieldConfig) => {
    const commonClasses = "w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500";
    const isRequired = fieldConfig.required;

    switch (fieldConfig.type) {
      case 'select':
        return (
          <select
            name={fieldName}
            className={commonClasses}
            value={formData[fieldName]}
            onChange={handleChange}
            required={isRequired}
            disabled={isLoading}
          >
            {fieldConfig.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'textarea':
        return (
          <div>
            <textarea
              name={fieldName}
              className={`${commonClasses} pl-10`}
              value={formData[fieldName]}
              onChange={handleChange}
              placeholder={fieldConfig.placeholder || ''}
              required={isRequired}
              disabled={isLoading}
              rows={fieldConfig.rows || 4}
              maxLength="1000"
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData[fieldName].length}/1000 ký tự
            </p>
          </div>
        );

      default:
        return (
          <input
            type={fieldConfig.type}
            name={fieldName}
            className={commonClasses}
            value={formData[fieldName]}
            onChange={handleChange}
            placeholder={fieldConfig.placeholder || ''}
            required={isRequired}
            disabled={isLoading}
          />
        );
    }
  };

  // Hàm render icon cho field
  const renderIcon = (iconClass) => {
    return (
      <span className="absolute left-3 top-3.5 text-gray-400">
        <i className={iconClass}></i>
      </span>
    );
  };

  // Render form fields từ JSON
  const renderFormFields = () => {
    const fields = form.fields;
    const fieldGroups = [
      ['fullName', 'email'],
      ['phone', 'year'],
      ['scholarshipType', 'guestCount']
    ];

    return (
      <>
        {fieldGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {group.map((fieldName) => {
              const fieldConfig = fields[fieldName];
              if (!fieldConfig) return null;

              return (
                <div key={fieldName}>
                  <label className="block text-blue-900 font-medium mb-2">
                    {fieldConfig.label}
                    {fieldConfig.required && <span className="text-red-500"> *</span>}
                  </label>
                  <div className="relative">
                    {renderIcon(fieldConfig.icon)}
                    {renderField(fieldName, fieldConfig)}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Message field - full width */}
        <div className="mb-8">
          <label className="block text-blue-900 font-medium mb-2">
            {fields.message.label}
            {fields.message.required && <span className="text-red-500"> *</span>}
          </label>
          <div className="relative">
            {renderIcon(fields.message.icon)}
            {renderField('message', fields.message)}
          </div>
        </div>
      </>
    );
  };

  return (
    <section
      id={section.id}
      className={section.className}
      style={{ background: 'linear-gradient(to bottom, white, #f0f9ff)' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {header.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {header.description}
          </p>
          <div className={header.divider.className}></div>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Status Message */}
          {submitStatus.message && (
            <div className={`mb-6 p-4 rounded-lg border-2 ${submitStatus.type === 'success'
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-red-50 text-red-700 border-red-200'
              }`}>
              <div className="flex items-start">
                <span className="mr-2 text-xl">
                  {submitStatus.type === 'success' ? '✅' : '❌'}
                </span>
                <div className="flex-1">
                  <p className="font-medium">{submitStatus.message}</p>
                  {submitStatus.type === 'error' && (
                    <p className="text-sm mt-2">
                      Liên hệ: <a href="mailto:hocbong30nam@university.edu.vn" className="underline">
                        hocbong30nam@university.edu.vn
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            {renderFormFields()}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`${form.submitButton.className} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? '⟳ Đang xử lý...' : form.submitButton.text}
            </button>

            {/* Security Info (có thể move vào JSON nếu cần) */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <span className="mr-3 text-blue-500 text-lg">🔒</span>
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-2">Hệ thống bảo mật cao:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Mã hóa kết nối an toàn</li>
                    <li>• Email xác nhận tự động trong 2 phút</li>
                    <li>• Giới hạn 1 lần đăng ký/5 phút/email</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy Text */}
            <p className="mt-4 text-xs text-gray-500 text-center">
              {form.privacyText}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RSVPForm;