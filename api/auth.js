export default function handler(req, res) {
  // إعدادات الـ CORS للسماح بالاتصال
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // الرد الذي ينتظره سورس البنك لظهور المربع
  res.status(200).json({
    success: true,
    data: { token: "vrc_123" }
  });
}