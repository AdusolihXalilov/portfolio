import React, { useState } from "react";
import axios from "axios";
import car from "/Car.png";
import telegram from "/telegram.png";
import tel from "/phone.png";
import instagram from "/instagram.png";
import telegram2 from "/telegram2.png";
import github from "/github.png";
import youtube from "/youtube.png";
import faceme from "/faceme.png"
import learnifyjs from "/learnifyjs.png"
import JET from "/JET.png"
import digital from "/digital_projects.png"
import me from "/me_pixar_picture.jpg"
import { useTranslation } from "react-i18next";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [phone, setPhone] = useState({
    number: "",
  });

  const [error, setError] = useState("");

  const BOT_TOKEN = "7243172471:AAGTMxsCD5AP7YXMtkMOIV2wdB_MkXVfoQ0";
  const MY_ID = "1973097576";

  const sendMessageBot = () => {
    // Validation
    if (!formData.name || !phone.number || !formData.email) {
      setError(t("error"));
      return;
    }

    // Clear previous error
    setError("");

    // Construct the message
    let messageText = `Ism: ${formData.name}\nTelefon raqam: ${phone.number}\nEmail: ${formData.email}`;
    if (formData.message) {
      messageText += `\nXabar: ${formData.message}`;
    }

    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: MY_ID,
        text: messageText,
      })
      .then((response) => {
        console.log("Message sent:", response.data);
        // Optionally, clear the form data here if desired
        setFormData({ name: "", email: "", message: "" });
        setPhone({ number: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setPhone({
      ...phone,
      number: e.target.value,
    });
  };

  const { t } = useTranslation();

  return (
    <main className="py-[20px] text-black dark:text-white bg-white dark:bg-slate-900 duration-300">
      <section className="container px-[30px] sm:px-[0px] pt-[110px] pb-[50px]">
        <div className="hero">
          <div className="bg-slate-50 py-[45px] px-[80px] dark:bg-slate-800 duration-300 rounded-xl flex flex-col lg:flex-row justify-between items-center sm:px-[130px]">
            <div className="w-[250px] flex flex-col text-center items-center lg:w-[470px] lg:text-start lg:items-start">
              <span className="text-[#FACC15] text-[14px] lg:text-[17px] font-mono">
                {t("herospan")}
              </span>
              <h1 className="text-[30px] lg:text-[50px] font-mono">
                {t("name")}
              </h1>
              <h1 className="text-[#6B7280] lg:text-[20px] mb-[20px] font-mono">
                {t("malumot")}
              </h1>
              <a href="tel:+998996445947">
                <button className="bg-[#FACC15] text-white py-[4px] px-[10px] lg:py-[5px] lg:px-[15px] rounded-md hover:bg-[#facc15ad] duration-300 hover:scale-95 font-mono flex flex-row items-center gap-[10px]">
                  {t("tel")} <img className="w-[20px] animate-swing-small" src={tel} alt="" />
                </button>
              </a>
            </div>
            <img
              className="w-[200px] mt-[30px] bg-slate-100 lg:bg-slate-100 rounded-2xl lg:w-[260px] dark:bg-slate-900 duration-300"
              src={me}
            />
          </div>
        </div>
      </section>
      <section className="container px-[30px] sm:px-[0px]">
        <div className="flex flex-row items-center justify-center mb-[50px]">
          <h1 className="font-mono text-[20px] lg:text-[30px] border-b-[2px] border-[#FACC15]">
            {t("aboutme")}{" "}
            <span className="text-[#FACC15]">{t("aboutme1")}</span>
          </h1>
        </div>
        <section className="bg-slate-50 py-[40px] px-[30px] lg:px-[80px] dark:bg-slate-800 duration-300 rounded-xl">
          <div>
            <h1 className="font-mono text-[15px] lg:text-[20px]">
              {t("information")}
            </h1>
            <p className="font-mono text-[15px] lg:text-[20px]  mt-[10px]">
              {t("location")}
            </p>
            <div className="flex flex-col gap-[20px] lg:flex-row items-center lg:gap-[150px] mt-[40px]">
              <div className="flex flex-row  gap-[50px] lg:items-center lg:gap-[30px] font-mono">
                <div className="font-bold text-[13px] lg:text-[20px]">
                  <h1>{t("name1")}</h1>
                  <h1>{t("surname")}</h1>
                  <h1>{t("birthday")}</h1>
                  <h1>{t("nation")}</h1>
                </div>
                <div className="text-[#6B7280] font-medium text-[13px] lg:text-[20px]">
                  <h1>Abdusolih</h1>
                  <h1>Xalilov</h1>
                  <h1>07.02.2011</h1>
                  <h1>{t("til")}</h1>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[15px] lg:items-center lg:gap-[30px] font-mono">
                <div className="font-bold text-[13px] lg:text-[20px]">
                  <h1>{t("number")}</h1>
                  <h1>{t("address")}</h1>
                  <h1>{t("language")}</h1>
                  <h1>{t("telegram")}</h1>
                </div>
                <div className="text-[#6B7280] font-medium text-[13px] lg:text-[20px]">
                  <a href="tel:996445947">
                    <h1>99 644 59 47</h1>
                  </a>
                  <h1>{t("tashkent")}</h1>
                  <h1>{t("til")}</h1>
                  <a href="https://t.me/A4110">
                    <h1>@A4110</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="container">
        <div className="flex flex-row items-center justify-center mt-[50px] mb-[50px]">
          <h1 className="font-mono text-[20px] lg:text-[30px] border-b-[2px] border-[#FACC15]">
            {t("projects")}{" "}
            <span className="text-[#FACC15]">{t("projects1")}</span>
          </h1>
        </div>
        <section className="flex flex-col items-center lg:items-center justify-center sm:flex-col gap-[30px]">
        <div className="flex flex-col items-center xl:flex-row lg:items-center justify-center lg:flex-col sm:flex-row gap-[30px]">
            <a href="https://polche-car.vercel.app/login.html">
              <div className="bg-slate-50 pt-[10px] px-[10px] w-[200px] lg:w-[400px] rounded-xl dark:bg-slate-800 duration-300 hover:scale-105 cursor-pointer">
                <img
                  className="w-[400px] rounded-xl border-b-2 border-t-2 border-[#FACC15]"
                  src={car}
                />
                <h1 className="font-mono text-[20px] flex justify-center">
                  Rent Cars
                </h1>
              </div>
            </a>
            <a href="https://digital-project-git-main-abdusolihs-projects.vercel.app/">
              <div className="bg-slate-50 pt-[10px] px-[10px] w-[200px] lg:w-[400px] rounded-xl dark:bg-slate-800 duration-300 hover:scale-105 cursor-pointer">
                <img
                  className="w-[400px] rounded-xl border-b-2 border-t-2 border-[#FACC15]"
                  src={digital}
                />
                <h1 className="font-mono text-[20px] flex justify-center">
                  DIGITAL PROJECTS
                </h1>
              </div>
            </a>
            <a href="https://jet-app-git-main-abdusolihs-projects.vercel.app/">
                <div className="bg-slate-50 pt-[10px] px-[10px] w-[200px] lg:w-[400px] rounded-xl dark:bg-slate-800 duration-300 hover:scale-105 cursor-pointer">
                  <img
                    className="w-[400px] rounded-xl border-b-2 border-t-2 border-[#FACC15]"
                    src={JET}
                  />
                  <h1 className="font-mono text-[20px] flex justify-center">
                    JET
                  </h1>
                </div>
              </a>
          </div>
          <div className="flex flex-col items-center xl:flex-row lg:items-center justify-center lg:flex-col sm:flex-row gap-[30px]">
            <a href="https://www.learnifyjs.uz/">
                <div className="bg-slate-50 pt-[10px] px-[10px] w-[200px] lg:w-[400px] rounded-xl dark:bg-slate-800 duration-300 hover:scale-105 cursor-pointer">
                  <img
                    className="w-[400px] rounded-xl border-b-2 border-t-2 border-[#FACC15]"
                    src={learnifyjs}
                  />
                  <h1 className="font-mono text-[20px] flex justify-center">
                    Learn Ify
                  </h1>
                </div>
              </a>
          </div>
        </section>
      </section>
      <section className="font-mono container w-[300px] sm:w-[1000px]">
        <div className="flex flex-row items-center justify-center mt-[50px] mb-[20px]">
          <h1 className="font-mono text-[20px] lg:text-[30px] border-b-[2px] border-[#FACC15]">
            {t("communication")}
            <span className="text-[#FACC15]">{t("communication1")}</span>
          </h1>
        </div>
        <section className="text-black dark:text-white bg-slate-50 dark:bg-slate-800 px-[10px] sm:px-[80px] py-[20px] sm:py-[40px] rounded-xl duration-300 flex flex-col justify-center items-center">
          <h1 className="text-[15px] text-center sm:text-[25px]">{t("write")}</h1>
          <p className="text-[#9CA3AF] font-semibold mb-[70px] text-center text-[12px] mt-[10px] sm:text-[17px]">
            {t("please")}
          </p>
          <section className="container flex flex-col lg:flex-row justify-between items-center">
            <div className="text-white bg-slate-100 duration-300 dark:bg-slate-700 rounded-xl w-[250px] items-center text-center sm:w-[300px] py-[40px] px-[20px] sm:text-start flex flex-col gap-5">
              <ul>
                <li className="text-[#EAB308] text-[15px] sm:text-[20px] font-semibold flex flex-col">
                  {t("address")}
                  <span className="text-black mt-[10px] sm:mt-[0px] dark:text-white">
                    {t("poytaxt")}
                  </span>
                </li>
                <a href="tel:996445947">
                  <li className="text-[#EAB308] font-semibold text-[15px] sm:text-[20px] mt-[10px] flex flex-col">
                    {t("number")}{" "}
                    <span className="text-black mt-[10px] sm:mt-[0px] dark:text-white">
                      +998 99-644-59-47
                    </span>
                  </li>
                </a>
                <a href="https://t.me/A4110">
                  <li className="text-[#EAB308] font-semibold text-[15px] sm:text-[20px] mt-[10px] flex flex-col">
                    Telegram:{" "}
                    <span className="text-black mt-[10px] sm:mt-[0px] dark:text-white">
                      @A4110
                    </span>
                  </li>
                </a>
                <li className="text-[#EAB308] text-[15px] mt-[10px] sm:text-[20px] font-semibold flex flex-col">
                  {t("profiles")}
                </li>
                <div className="flex flex-row justify-center sm:items-center mt-[10px] sm:justify-start items-center  gap-[10px] sm:mt-[5px]">
                  <a href="https://www.instagram.com/abdusolih_xalilov/">
                    <img
                      className="w-[35px] hover:animate-pulse"
                      src={instagram}
                      alt="instagram"
                    />
                  </a>
                  <a href="https://t.me/A4110">
                    <img
                      className="w-[35px] hover:animate-pulse"
                      src={telegram2}
                      alt="telegram"
                    />
                  </a>
                  <a href="https://github.com/Abdusolih">
                    <img
                      className="w-[35px] hover:animate-pulse"
                      src={github}
                      alt="github"
                    />
                  </a>
                  <a href="https://youtube.com/@abdusolihxalilov?si=8YIW4Nub_ebfontG">
                    <img
                      className="w-[35px] hover:animate-pulse"
                      src={youtube}
                      alt="github"
                    />
                  </a>
                </div>
              </ul>
            </div>
            <form
              className="w-[300px]"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessageBot();
              }}
            >
              <div className="flex flex-col text-center items-center mt-[50px] sm:text-start lg:mt-[0px]">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                  <label className="text-black dark:text-white flex flex-col justify-start gap-2">
                    {t("name1")}
                    <input
                      className="text-[#EAB308] p-1 border-2 rounded-lg bg-transparent border-[#EAB308] sm:w-[100%] outline-none"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("name1")}
                    />
                  </label>
                  <label className="text-black dark:text-white flex flex-col justify-start gap-2">
                    {t("number")}
                    <input
                      className="text-[#EAB308] p-1 border-2 rounded-lg bg-transparent border-[#EAB308] sm:w-[100%] outline-none"
                      type="tel"
                      value={phone.number}
                      onChange={handlePhoneChange}
                      placeholder=" 99 644 59 47"
                    />
                  </label>
                </div>
                <div className="flex flex-col justify-start items-center sm:items-start gap-5 w-[200px] sm:w-full mt-5">
                  <label className="text-black dark:text-white flex flex-col justify-start gap-2 w-full">
                    {t("telegramname")}
                    <input
                      className="text-[#EAB308] p-1 border-2 rounded-lg bg-transparent border-[#FACC15] sm:w-full  outline-none"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="@A4110"
                    />
                  </label>
                  <label className="text-black dark:text-white flex flex-col justify-start gap-2 sm:w-full">
                    {t("massage")}
                    <input
                      className="text-[#FACC15] p-1 border-2 rounded-lg bg-transparent border-[#FACC15] sm:w-full pb-[50px]  outline-none"
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=""
                    />
                  </label>
                  <button
                    type="submit"
                    className="bg-[#FACC15] hover:bg-yellow-500 duration-300 w-[103x`px] p-2 rounded text-white flex flex-row items-center gap-[10px]"
                  >
                    {t("send")}{" "}
                    <img className="w-[15px]" src={telegram} alt="" />
                  </button>
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
              </div>
            </form>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Home;
