# Intactic Innovations - TODO List

এই ফাইলটিতে আমাদের পরবর্তী করণীয় কাজগুলো ধাপে ধাপে টু-ডু লিস্ট আকারে দেওয়া হলো। কাজগুলো সম্পূর্ণ হওয়ার পর চেক-বক্সগুলো পূরণ করতে পারেন।

---

## 📋 প্রথম ধাপ: রিব্র্যান্ডিং ও কন্টেন্ট আপডেট (সর্বোচ্চ অগ্রাধিকার - High Priority)

### ১.১ টেক্সট ও কন্টেন্ট সংশোধন
- [x] `pages/index.js` ফাইলের `caseStudiesData`-তে থাকা কেস স্টাডিগুলোর বর্ণনা থেকে "Brain Station 23" নাম পরিবর্তন করে "Intactic Innovations" বা প্রাসঙ্গিক ব্র্যান্ড নাম যুক্ত করা।
  - [x] IIITK কেস স্টাডি বিবরণ সংশোধন ([index.js#L143](./pages/index.js#L143))
  - [x] AEM Solutions কেস স্টাডি বিবরণ সংশোধন ([index.js#L156](./pages/index.js#L156))
  - [x] E-Commerce (Shwapno) কেস স্টাডি বিবরণ সংশোধন ([index.js#L168](./pages/index.js#L168))

### ১.২ এক্সটার্নাল লিংক ও বুকিং লিংক আপডেট
- [x] `Header.js` এবং `Footer.js` ফাইলে থাকা বুকিং লিংকগুলো (Calendly) নতুন লিংকে পরিবর্তন করা:
  - [x] `Header.js` বুকিং লিংক ([Header.js#L199](./components/Header.js#L199) এবং [Header.js#L338](./components/Header.js#L338))
- [x] `Footer.js` এবং `index.js`-এ থাকা ক্যারিয়ার বা জব পোর্টালের লিংক সংশোধন করা (বর্তমানে `easy.jobs` পুরোনো পোর্টালে রিডাইরেক্ট করে):
  - [x] `index.js` ক্যারিয়ার লিংক ([index.js#L683](./pages/index.js#L683))
  - [x] `Footer.js` ক্যারিয়ার লিংক ([Footer.js#L56](./components/Footer.js#L56))
- [x] সোশ্যাল মিডিয়া প্রোফাইলের লিংকগুলো নতুন ব্র্যান্ডের সোশ্যাল হ্যান্ডেলে আপডেট করা:
  - [x] `Footer.js` সোশ্যাল লিংক ([Footer.js#L19-L22](./components/Footer.js#L19-L22))
  - [x] `index.js` সোশ্যাল লিংক ([index.js#L705-L708](./pages/index.js#L705-L708))

### ১.৩ ইমেজ ও অ্যাসেট সোর্স আপডেট
- [x] কেস স্টাডিতে ব্যবহার করা ছবিগুলো যেগুলো সরাসরি `brainstation-23.com` থেকে আসছে, সেগুলো Unsplash থেকে প্রাসঙ্গিক ছবি দিয়ে রিপ্লেস করা হয়েছে।
- [x] `next.config.js` থেকে `brainstation-23.com` ডোমেইন পারমিশন বাদ দেওয়া হয়েছে এবং `images.unsplash.com` যোগ করা হয়েছে।
- [x] কেস স্টাডির "View Case Study" বাটন লিংক থেকে `brainstation-23.com` prefix সরিয়ে `#contact`-এ পয়েন্ট করা হয়েছে।
- [x] Footer Products কলাম থেকে পুরোনো fintech প্রোডাক্ট (Wallet23, Remity, PocketEdge) সরিয়ে বর্তমান প্রোডাক্টলিস্ট আপডেট করা হয়েছে।

### ১.৪ সিএসএস কমেন্ট সংশোধন
- [x] `globals.css` ফাইলের হেডার কমেন্ট এবং অন্যান্য কমেন্ট সংশোধন করা হয়েছে — পুরোনো ব্র্যান্ডের কোনো উল্লেখ আর নেই।

---

## 🛠️ দ্বিতীয় ধাপ: কোড রিফ্যাক্টরিং ও আর্কিটেকচার উন্নত করা (মাঝারি অগ্রাধিকার - Medium Priority)

### ২.১ মনোলিথিক পেজ রিফ্যাক্টরিং
- [x] `pages/index.js` ফাইলকে মডিউলার করতে প্রতিটি সেকশনকে আলাদা কম্পোনেন্টে ভাগ করা হয়েছে:
  - [x] `components/sections/HeroSection.js`
  - [x] `components/sections/CapabilitiesSection.js`
  - [x] `components/sections/CaseStudiesSection.js`
  - [x] `components/sections/ContactSection.js`
  - [x] এবং অন্যান্য সকল সেকশন (Industries, Stats, AI, TechStack, Process, Recognitions, Careers)।

### ২.২ ডাটা ও কনফিগারেশন আলাদা করা
- [x] প্রজেক্টের সমস্ত স্ট্যাটিক ডাটা (স্লাইড কন্টেন্ট, কেস স্টাডি লিস্ট, টেক স্ট্যাক লিস্ট ইত্যাদি) পেজ থেকে সরিয়ে আলাদা একটি ডাটা ফাইলে নিয়ে যাওয়া হয়েছে (`data/contentData.js`)।

### ২.৩ সিএসএস ফাইল মডুলারাইজ করা
- [x] `styles/globals.css` ফাইলের সাইজ কমাতে এটিকে প্রতিটি কম্পোনেন্টের জন্য আলাদা সিএসএস মডিউলে (CSS Modules) রূপান্তর করা।


---

## 🧪 তৃতীয় ধাপ: ভ্যালিডেশন ও টেস্টিং (পরবর্তী ধাপ - Testing & Verification)

- [x] পরিবর্তনগুলো করার পর প্রোডাকশন বিল্ড চেক করতে `npm run build` রান করে নিশ্চিত করা হয়েছে যে কোনো লিংক ভাঙা বা কোড এরর নেই।
