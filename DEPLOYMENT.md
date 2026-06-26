# تعليمات نشر موقع مكتب المحامي رياض فتيني

## المتطلبات
- حساب على [Vercel](https://vercel.com)
- حساب على [GitHub](https://github.com)

## خطوات النشر

### 1. إنشاء مستودع GitHub

```bash
# تهيئة المستودع
git init
git add .
git commit -m "Initial commit: Law firm website"

# إنشاء مستودع جديد على GitHub وإضافته
git remote add origin https://github.com/YOUR_USERNAME/riyadh-fatini-law-firm.git
git branch -M main
git push -u origin main
```

### 2. نشر على Vercel

#### الطريقة الأولى: من خلال الواجهة الرسومية

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. انقر على "New Project"
3. اختر المستودع من GitHub
4. اختر `riyadh-fatini-law-firm`
5. انقر "Deploy"

#### الطريقة الثانية: من خلال CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel
```

### 3. إعادة توجيه النطاق

بعد النشر على Vercel، ستحصل على URL مؤقت (مثل: `riyadh-fatini-law-firm-v2.vercel.app`)

لربط النطاق الخاص بك:

1. اذهب إلى إعدادات Vercel للمشروع
2. انقر على "Domains"
3. أضف نطاقك الخاص (`lawyerriyadhfatini.com`)
4. اتبع التعليمات لتحديث DNS عند مسجل النطاق

### 4. تحديث DNS

في لوحة تحكم مسجل النطاق الخاص بك:

```
CNAME: www → cname.vercel-dns.com
A: @ → 76.76.19.21
AAAA: @ → 2610:7d7:3001::1
```

### 5. التحقق من الفهرسة

بعد النشر:

1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. أضف موقعك الجديد
3. تحقق من الملكية
4. اطلب فهرسة الصفحة الرئيسية

## الصيانة والتحديثات

### تحديث الموقع محلياً

```bash
# تعديل الملفات
# ...

# الحفظ والدفع
git add .
git commit -m "Update: [وصف التحديث]"
git push origin main
```

سيتم نشر التحديثات تلقائياً على Vercel.

## استكشاف الأخطاء

### الموقع لا يظهر بشكل صحيح

1. تحقق من الأخطاء في Vercel Dashboard
2. افحص السجلات: `vercel logs`
3. تأكد من تحديث DNS

### الصفحات لا تفتح

1. تأكد من أن `dist/` تم بناؤها بنجاح
2. تحقق من ملف `vercel.json`
3. أعد النشر: `vercel --prod`

## الدعم

للمساعدة:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
