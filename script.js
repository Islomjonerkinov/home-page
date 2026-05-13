const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-services": "Services",
    "nav-skills": "Skills",
    "nav-contact": "Contact Us",
    "nav-subscribe": "Subscribe",
    "hero-hello": "Hello, my name is",
    "hero-name": "Islom <span>Erkinov</span>",
    "hero-title": "I'am a Web Developer.",
    "hero-email-placeholder": "Enter Your Email",
    "hero-start": "Let's Start",
    "about-title": "About Me",
    "about-subtitle": "Developer <span>& Designer</span>",
    "about-text": "I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. I can provide clean code and pixel perfect design.",
    "about-btn": "Let's Talk",
    "services-title": "My Project",
    "hire-title": "Let Me Get You A Beautiful Website.",
    "hire-btn": "Hire Me",
    "footer-name": "Islomjon Erkinov",
    "footer-text": "For more HTML, CSS, and coding tutorial - please click on the link below to subscribe to my channel.",
    "footer-copy": "Copyright By Islomjon Erkinov"
  },
  uz: {
    "nav-home": "Asosiy",
    "nav-about": "Biz haqimizda",
    "nav-services": "Xizmatlar",
    "nav-skills": "Ko'nikmalar",
    "nav-contact": "Bog'lanish",
    "nav-subscribe": "Obuna bo'lish",
    "hero-hello": "Salom, mening ismim",
    "hero-name": "Islom <span>Erkinov</span>",
    "hero-title": "Men Veb Dasturchiman.",
    "hero-email-placeholder": "Emailingizni kiriting",
    "hero-start": "Boshladik",
    "about-title": "Men haqimda",
    "about-subtitle": "Dasturchi <span>va Dizayner</span>",
    "about-text": "Men front-end veb-dasturchiman. Men toza kod va mukammal dizaynni taqdim eta olaman. Shuningdek, men veb-animatsiyalar bilan veb-saytni yanada qiziqarli qilaman. Men toza kod va mukammal dizaynni taqdim eta olaman.",
    "about-btn": "Gaplashamiz",
    "services-title": "Mening loyihalarim",
    "hire-title": "Sizga chiroyli veb-sayt yaratishga yordam beraman.",
    "hire-btn": "Meni yollang",
    "footer-name": "Islomjon Erkinov",
    "footer-text": "Ko'proq HTML, CSS va kodlash bo'yicha darsliklar uchun - kanalimga obuna bo'lish uchun quyidagi havolani bosing.",
    "footer-copy": "Mualliflik huquqi Islomjon Erkinov tomonidan himoyalangan"
  },
  ru: {
    "nav-home": "Главная",
    "nav-about": "О нас",
    "nav-services": "Услуги",
    "nav-skills": "Навыки",
    "nav-contact": "Контакты",
    "nav-subscribe": "Подписаться",
    "hero-hello": "Привет, меня зовут",
    "hero-name": "Ислом <span>Эркинов</span>",
    "hero-title": "Я Веб-разработчик.",
    "hero-email-placeholder": "Введите ваш Email",
    "hero-start": "Начать",
    "about-title": "Обо мне",
    "about-subtitle": "Разработчик <span>и Дизайнер</span>",
    "about-text": "Я фронтенд-разработчик. Я могу предоставить чистый код и идеальный дизайн. Я также делаю сайт более интерактивным с помощью веб-анимации. Я могу предоставить чистый код и идеальный дизайн.",
    "about-btn": "Поговорим",
    "services-title": "Мои проекты",
    "hire-title": "Позвольте мне создать для вас красивый сайт.",
    "hire-btn": "Нанять меня",
    "footer-name": "Исломжон Эркинов",
    "footer-text": "Для получения дополнительных руководств по HTML, CSS и кодированию - нажмите на ссылку ниже, чтобы подписаться на мой канал.",
    "footer-copy": "Авторские права защищены Исломжоном Эркиновым"
  }
};

const languageSelect = document.getElementById("language-select");

const setLanguage = (lang) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  localStorage.setItem("selectedLanguage", lang);
};

languageSelect.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// Load saved language
const savedLang = localStorage.getItem("selectedLanguage") || "en";
languageSelect.value = savedLang;
setLanguage(savedLang);