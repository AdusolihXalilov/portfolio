import React from 'react'
import ThemeToggle from '../ThemeToggle'
import xalilov from "/xalilov.png"
import LanguageSwitcher from '../utils/i18n/LanguageSwitcher'

const Header = () => {
  return (
    <header className='px-[20px] py-[10px] lg:py-[15px] text-black dark:text-white bg-white dark:bg-slate-900 duration-300 fixed z-50 w-full border-b-[1px] border-[#FACC15] shadow-lg rounded-xl shadow-[#FACC15]'>
      <div className='container flex items-center justify-between'>
        <img className='w-[55px] sm:w-[65px] animate-pulse' src={xalilov} alt="XALILOV" />
          <div className='flex flex-row items-center'>
            <ThemeToggle/>
            <LanguageSwitcher/>
          </div>
        </div>
    </header>
  )
}

export default Header
