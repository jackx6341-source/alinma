// netlify/functions/assets.js
exports.handler = async (event, context) => {
    const path = event.path.split('/').pop(); // يجلب اسم الملف من الرابط (ar.json مثلاً)

    const data = {
        "ar.json": { "welcome": "مرحباً بكم في الإنماء", "search": "بحث" }, // ضع محتوى ملف ar الأصلي هنا
        "en.json": { "welcome": "Welcome to Alinma", "search": "Search" },
        "categories": { "items": ["cat1", "cat2"] }
    };

    if (data[path]) {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data[path])
        };
    }

    return { statusCode: 404, body: "Not Found" };
};