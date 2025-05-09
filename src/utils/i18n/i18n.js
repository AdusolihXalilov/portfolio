import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Sample translation resources
const resources = {
  en: {
    translation: {
      herospan: "Hello, welcome",
      name: "My name is Abdusolih Xalilov",
      malumot: "Fullstack web developer",
      tel: "Connection",
      aboutme: "ABOUT",
      aboutme1: "ME",
      information: "PERSONAL INFORMATION",
      location: "I am a FRONTEND web developer in Tashkent have a strong desire to create quality web applications.",
      name1: "Name:",
      surname: "Surname:",
      birthday: "Birthday:",
      nation: "Nation:",
      number: "Phone number:",
      address: "Address:",
      language: "Language:",
      telegram: "Telegram:",
      til: "Uzbek",
      tashkent: "Tashkent",
      projects: "MY",
      projects1: "PROJECTS",
      communication: "COMMUN",
      communication1: "ICATION",
      write: "DON'T HESITATE, WRITE!",
      please: "Please fill out the form below and I will get back to you shortly.",
      poytaxt: "Uzbekistan, Tashkent",
      profiles: "Social profiles:",
      telegramname: "Your Telegram name:",
      massage: "Message:",
      send: "Sending",
      error: "Please fill in all required formats: Name, Phone and Telegram.",
    },
  },
  ru: {
    translation: {
      herospan: "Привет, добро пожаловать",
      name: "Меня зовут Абдусалих Халилов",
      malumot: "Fullstack веб-разработчик",
      tel: "Связь",
      aboutme: "ОБО",
      aboutme1: "МНЕ",
      information: "ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ",
      location: "Я ФРОНТЕНД веб-разработчик в Ташкенте.иметь сильное желание создавать качественные веб-приложения.",
      name1: "имя:",
      surname: "фамилия:",
      birthday: "рожденный:",
      nation: "Нация:",
      number: "Номер телефона:",
      address: "Адрес:",
      language: "Язык:",
      telegram: "Телеграм:",
      til: "Узбекский",
      tashkent: "Ташкент",
      projects: "МОИ",
      projects1: "ПРОЕКТЫ",
      communication: "КОММУН",
      communication1: "ИКАЦИЯ",
      write: "НЕ СТЕСНЯЙТЕСЬ, ПИШИТЕ!",
      please: "Пожалуйста, заполните форму ниже, и я свяжусь с вами в ближайшее время.",
      poytaxt: "Узбекистан, Ташкент",
      profiles: "Социальные профили:",
      telegramname: "Ваше имя в Телеграмме:",
      massage: "Сообщение:",
      send: "Отправка",
      error: "Пожалуйста, заполните все необходимые форматы: Имя, Телефон и Telegram.",
    },
  },
  uz: {
    translation: {
      herospan: "Salom, xush kelibsiz",
      name: "Men Abdusolih Xalilov man",
      malumot: "Fullstack web dasturchi",
      tel: "Bog'lanish",
      aboutme: "MEN",
      aboutme1: "HAQIMDA",
      information: "SHAXSIY MA'LUMOTLAR",
      location: "Men Toshkent shahrida FRONTEND web dasturchiman.Menda yuqori sifatli web ilovalarni yaratishga bo'lgan kuchli istak bor.",
      name1: "Ism:",
      surname: "Familiya:",
      birthday: "Tug'ilgan:",
      nation: "Millat:",
      number: "Telefon raqam:",
      address: "Manzil:",
      language: "Til:",
      telegram: "Telegram:",
      til: "O'zbek",
      tashkent: "Toshkent",
      projects: "MENING",
      projects1: "LOYIHALARIM",
      communication: "BOG'",
      communication1: "LANISH",
      write: "TORTINMANG, YOZAVERING!",
      please: "Iltimos, quyidagi formani to'ldiring va men sizga tez orada javob beraman.",
      poytaxt: "O'zbekiston,Toshkent",
      profiles: "Ijtimoiy profillar:",
      telegramname: "Telegram nomingiz:",
      massage: "Xabar:",
      send: "Yuborish",
      error: "Iltimos, barcha kerakli formatlarni to'ldiring: Ism, Telefon va Telegram.",
    },
  },
};

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;
