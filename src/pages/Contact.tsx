import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5dc]/50 to-white">
      <br />
      <div className="container-custom py-16">
        <h1 className="font-serif text-5xl text-[black] font-bold text-center mb-4">
          {t("contact.title")}
        </h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="bg-white p-8 shadow-lg">
            <h2 className="font-serif text-2xl text-[#B8860B] mb-8">
              {t("contact.form.send")}
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                  placeholder={t("contact.form.name")}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                  placeholder={t("contact.form.email")}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                  placeholder={t("contact.form.message")}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#B8860B] text-white px-8 py-3 hover:bg-[#8B6508] transition-colors"
              >
                {t("contact.form.send")}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 shadow-lg">
              <h2 className="font-serif text-2xl text-[#B8860B] mb-6">
                {t("footer.contact")}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#B8860B] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("footer.phone")}</h3>
                    <p className="text-gray-600">+355694319637</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#B8860B] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("footer.email")}</h3>
                    <p className="text-gray-600">grandwhitecity@yahoo.it</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#B8860B] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t("footer.address")}
                    </h3>
                    <p className="text-gray-600">
                      Lagjja Kombinat, 5001, Rruga Antipatrea, Berat, Albania
                      2.5 km dal centro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[500px] shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6483904289594!2d19.943392199999998!3d40.7257562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135a98a8c2552057%3A0x9895de362b2d4397!2sHotel%20%26%20Restaurant%20Grand%20White%20City%20Berat%20Albania!5e0!3m2!1sen!2s!4v1739913769248!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="border-0"
            title="Grand White City Hotel Location"
          ></iframe>
          <div className="absolute bottom-4 left-4 bg-white p-4 shadow-lg max-w-sm">
            <h3 className="font-serif text-lg text-[#B8860B] mb-2">
              {t("footer.about")}
            </h3>
            <p className="text-gray-600 text-sm">{t("contact.map.subtitle")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
