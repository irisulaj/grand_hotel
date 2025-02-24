import React from "react";
import { Utensils, Users, Coffee, Car } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5dc]/50 to-white">
      <br />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h1 className="font-serif text-5xl font-bold text-[#black] mb-8">
              {t("about.title")}
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t("about.description")}
            </p>
            <button
              className="bg-[#B8860B] text-white px-8 py-3 hover:bg-[#8B6508] transition-colors"
              onClick={handleScroll}
            >
              {t("about.readMore")}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/lounge/IMG_0126.jpeg"
              alt="Hotel Lobby"
              className="w-full h-64 object-cover self-start"
            />
            <img
              src="/images/lounge/IMG_0129.jpeg"
              alt="Hotel Lounge"
              className="w-full h-64 object-cover self-end"
            />
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-4xl text-[#B8860B] mb-12">
            {t("about.services")}
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl leading-relaxed">
            {t("about.services.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg">
              <div className="mb-6">
                <Utensils className="w-8 h-8 text-[#B8860B]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {t("about.services.res")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t("about.services.res.1")}</li>
                <li>• {t("about.services.res.2")}</li>
                <li>• {t("about.services.res.3")}</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="mb-6">
                <Users className="w-8 h-8 text-[#B8860B]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {t("about.services.con")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t("about.services.con.1")}</li>
                <li>• {t("about.services.con.2")}</li>
                <li>• {t("about.services.con.3")}</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-lg">
              <div className="mb-6">
                <Car className="w-8 h-8 text-[#B8860B]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {t("about.services.add")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t("about.services.add.1")}</li>
                <li>• {t("about.services.add.2")}</li>
                <li>• {t("about.services.add.3")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            src="/images/lounge/IMG_0788.jpeg"
            alt="Restaurant"
            className="w-full h-72 object-cover"
          />
          <img
            src="/images/lounge/IMG_0787.jpeg"
            alt="Food Service"
            className="w-full h-72 object-cover"
          />
          <img
            src="/images/lounge/IMG_0769.jpeg"
            alt="Conference Room"
            className="w-full h-72 object-cover"
          />
        </div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            src="/images/lounge/IMG_0771.jpeg"
            alt="Restaurant"
            className="w-full h-72 object-cover"
          />
          <img
            src="/images/lounge/IMG_0782.jpeg"
            alt="Food Service"
            className="w-full h-72 object-cover"
          />
          <img
            src="/images/lounge/IMG_0784.jpeg"
            alt="Conference Room"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const handleScroll = () => {
  window.scrollBy({ top: 400, behavior: "smooth" }); // Scrolls down 200px smoothly
};

export default About;
