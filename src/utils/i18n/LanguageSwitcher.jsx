import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const lang = localStorage.getItem("language");

  useEffect(() => {
    if (!lang) {
      localStorage.setItem("language", "en");
    }
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    // localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="relative max-w-[120px] dark:text-white text-secondary">
      <select
        defaultValue={localStorage.getItem("language")}
        onChange={handleLanguageChange}
        className="bg-transparent text-black dark:text-white ml-4 h-[30px] font-mono">
        <option value="uz" className='text-black dark:bg-slate-900 dark:text-white font-mono'>UZ</option>
        <option value="ru" className='text-black dark:bg-slate-900 dark:text-white font-mono'>RU</option>
        <option value="en" className='text-black dark:bg-slate-900 dark:text-white font-mono'>EN</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
