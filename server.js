const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./config/supabase');

const app = express();
const PORT = process.env.PORT || 10000;

// تشغيل ميزات قراءة البيانات والأمان
app.use(cors());
app.use(express.json());

// رسالة ترحيبية للتأكد أن السيرفر شغال بنجاح
app.get('/', (req, res) => {
  res.send('🚀 منصة RAVA تعمل بنجاح وبأعلى كفاءة!');
});

// اختبار الربط بـ Supabase
app.get('/test-db', async (req, res) => {
  try {
    const { data, error } = await supabase.from('rava_users').select('count', { count: 'exact', head: true });
    if (error) throw error;
    res.json({ success: true, message: '✅ الربط مع قاعدة البيانات Supabase حديد ومستقر!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`📡 السيرفر شغال دلوقتي على منفذ: ${PORT}`);
});
