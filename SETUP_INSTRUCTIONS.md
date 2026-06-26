# تعليمات إعداد وتشغيل موقع مكتب المحامي رياض فتيني

## 📋 ملخص سريع

تم إنشاء موقع احترافي جديد لمكتب المحاماة بـ:
- ✅ React 19 + TypeScript
- ✅ Tailwind CSS 4
- ✅ Vite (بناء سريع)
- ✅ SEO محسّن
- ✅ دعم اللغة العربية والإنجليزية
- ✅ جاهز للنشر على Vercel

---

## 🚀 الخطوة 1: التشغيل المحلي

### المتطلبات
- Node.js 18+ ([تحميل](https://nodejs.org))
- pnpm أو npm

### التشغيل

```bash
# الدخول للمشروع
cd riyadh-fatini-law-firm-v2

# تثبيت المكتبات (إذا لم تكن مثبتة)
pnpm install

# تشغيل خادم التطوير
pnpm dev

# سيفتح الموقع على: http://localhost:5173
```

---

## 📦 الخطوة 2: إنشاء مستودع GitHub

### 1. إنشاء حساب GitHub
- اذهب إلى [github.com](https://github.com)
- أنشئ حساب جديد أو استخدم الموجود

### 2. إنشاء مستودع جديد
- انقر على "+" في الزاوية العلوية اليمنى
- اختر "New repository"
- اسم المستودع: `riyadh-fatini-law-firm`
- اختر "Public" (للسماح بالفهرسة)
- انقر "Create repository"

### 3. دفع الكود

```bash
cd riyadh-fatini-law-firm-v2

# إضافة المستودع البعيد
git remote add origin https://github.com/YOUR_USERNAME/riyadh-fatini-law-firm.git

# تغيير اسم الفرع إلى main
git branch -M main

# دفع الكود
git push -u origin main
```

---

## 🌐 الخطوة 3: النشر على Vercel

### الطريقة الأولى: من خلال الواجهة الرسومية (الأسهل)

1. اذهب إلى [vercel.com](https://vercel.com)
2. انقر "Sign Up" وسجل دخولك بـ GitHub
3. انقر "New Project"
4. اختر المستودع `riyadh-fatini-law-firm`
5. اترك الإعدادات الافتراضية
6. انقر "Deploy"

**سيتم النشر تلقائياً!** ستحصل على URL مثل:
```
https://riyadh-fatini-law-firm.vercel.app
```

### الطريقة الثانية: من خلال CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel

# للنشر في الإنتاج
vercel --prod
```

---

## 🌍 الخطوة 4: ربط النطاق الخاص بك

### ربط lawyerriyadhfatini.com

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اختر المشروع
3. انقر على "Settings" → "Domains"
4. أضف النطاق: `lawyerriyadhfatini.com`
5. اتبع التعليمات لتحديث DNS

### تحديث DNS عند مسجل النطاق

في لوحة تحكم مسجل النطاق (GoDaddy, Namecheap, إلخ):

```
نوع السجل: CNAME
الاسم: www
القيمة: cname.vercel-dns.com

أو

نوع السجل: A
الاسم: @
القيمة: 76.76.19.21
```

**ملاحظة:** قد تستغرق التغييرات 24 ساعة للتطبيق.

---

## 🔍 الخطوة 5: تحسين محركات البحث

### إضافة الموقع إلى Google Search Console

1. اذهب إلى [search.google.com/search-console](https://search.google.com/search-console)
2. انقر "Add property"
3. أدخل URL الموقع: `https://www.lawyerriyadhfatini.com`
4. تحقق من الملكية (اتبع التعليمات)
5. اطلب فهرسة الصفحة الرئيسية

### إضافة Sitemap

```
https://www.lawyerriyadhfatini.com/sitemap.xml
```

---

## ✏️ تعديل المحتوى

### تعديل الصفحة الرئيسية

```bash
# افتح الملف
src/App.tsx

# عدّل المحتوى (العنوان، الوصف، الخدمات، إلخ)
# ثم احفظ الملف
```

### تحديث الموقع

```bash
# بعد التعديل
git add .
git commit -m "Update: [وصف التغيير]"
git push origin main

# سيتم النشر تلقائياً على Vercel
```

---

## 🛠️ الأوامر المهمة

```bash
# تشغيل الموقع محلياً
pnpm dev

# بناء الموقع للإنتاج
pnpm build

# معاينة البناء
pnpm preview

# فحص الأخطاء
pnpm lint
```

---

## 📊 مراقبة الأداء

### Vercel Analytics
- اذهب إلى Vercel Dashboard
- اختر المشروع
- انقر "Analytics" لرؤية الإحصائيات

### Google Search Console
- راقب ترتيب الموقع
- اطلع على الكلمات المفتاحية
- تحقق من الأخطاء

---

## 🆘 استكشاف الأخطاء

### الموقع لا يظهر

```bash
# تحقق من الأخطاء
vercel logs

# أعد البناء
pnpm build

# تأكد من وجود dist/
ls dist/
```

### الصفحات لا تفتح

- تحقق من DNS (قد تستغرق 24 ساعة)
- أعد تحميل الصفحة (Ctrl+Shift+R)
- امسح ذاكرة التخزين المؤقت

### الموقع بطيء

- تحقق من حجم الملفات
- استخدم Vercel Analytics
- قلل حجم الصور

---

## 📞 الدعم والمساعدة

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

## ✅ قائمة التحقق النهائية

- [ ] تم إنشاء مستودع GitHub
- [ ] تم النشر على Vercel
- [ ] تم ربط النطاق الخاص
- [ ] تم تحديث DNS
- [ ] تم إضافة الموقع إلى Google Search Console
- [ ] تم فهرسة الصفحة الرئيسية
- [ ] تم التحقق من ظهور الموقع في Google

---

**تم إنشاء الموقع بنجاح! 🎉**

إذا واجهت أي مشاكل، تواصل مع فريق الدعم.
