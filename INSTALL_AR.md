# خطوات الدمج مع Theme Raed

## 1) أنشئ الثيم الرسمي
من Salla Partners / Salla CLI أنشئ Theme جديد مبني على Theme Raed.

## 2) انسخ الملفات
انسخ مجلد `src` من هذه الحزمة فوق مجلد `src` في مشروع الثيم.

## 3) CSS
في مشروع Raed، ضمّن `src/assets/styles/durar-custom.scss` داخل ملف التجميع الرئيسي للستايل.
إذا كان مشروعك يستخدم app.scss مثلًا، أضف:
`@import "./durar-custom";`

## 4) JavaScript
ضمّن `durar-custom.js` في ملف التجميع الرئيسي، أو أبقِ استدعاءه كما في `index.twig` بعد إعداد bundling لإنتاج asset بالاسم نفسه.

## 5) الصفحة الرئيسية
استخدم `src/views/pages/index.twig` الموجود في هذه الحزمة.

## 6) إعدادات الثيم
لا تستبدل `twilight.json` الرسمي.
افتح `twilight.durar.settings.json` وادمج الحقول المرغوبة في قسم `settings` من twilight.json.

## 7) المعاينة
نفّذ:
- `npm install`
- `salla theme preview`

## 8) الصور والروابط
الروابط `/categories` و`/offers` في هذه النسخة مؤقتة.
بعد ربط المتجر التجريبي نستبدلها بروابط التصنيفات الحقيقية في متجر درر.

## ملاحظة
ملف Hero يستخدم صورة خارجية مؤقتة للمعاينة فقط. عند التنفيذ النهائي نضع صور منتجات درر الحقيقية داخل assets.
