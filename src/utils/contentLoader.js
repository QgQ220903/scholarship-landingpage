// src/utils/contentLoader.js
export const loadContent = async (contentName) => {
  try {
    // Cách 1: Fetch từ public folder (không cần rebuild)
    const response = await fetch(`/content/${contentName}.json`);
    if (!response.ok) throw new Error("Content not found");
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${contentName}:`, error);

    // Cách 2: Fallback - import trực tiếp (cần rebuild)
    try {
      const content = await import(`../../content/${contentName}.json`);
      return content.default || content;
    } catch (e) {
      console.error("Fallback also failed:", e);
      return null;
    }
  }
};

// Hoặc đơn giản hơn: Import trực tiếp nếu bạn dùng create-react-app
export const getContent = (contentName) => {
  // Chỉ dùng cách này nếu bạn thêm script build content
  const allContent = require("../content/index");
  return allContent[contentName];
};
