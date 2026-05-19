const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('⚠️ خطأ: مفاتيح الربط بـ Supabase مش موجودة في ملف الـ .env');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
