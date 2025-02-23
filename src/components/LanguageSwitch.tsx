import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setLanguage("en")}
        className={`language-button ${
          language === "en"
            ? "ring-2 ring-[#B8860B] ring-offset-2"
            : "opacity-70 hover:opacity-100"
        }`}
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="English"
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => setLanguage("al")}
        className={`language-button ${
          language === "al"
            ? "ring-2 ring-[#B8860B] ring-offset-2"
            : "opacity-70 hover:opacity-100"
        }`}
      >
        <img
          src="https://flagcdn.com/w40/al.png"
          alt="Albanian"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default LanguageSwitch;
