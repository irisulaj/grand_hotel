import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-[#f5f5dc]/50 to-white  text-gray-800 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-serif text-[#B8860B] mb-6">
              {t("footer.about")}
            </h3>
            <p className="text-[#B8860B] leading-relaxed">
              {t("footer.about.description")}
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="social-icon group">
                <Instagram className="h-5 w-5 text-[#B8860B] group-hover:text-[#B8860B] transition-colors" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-icon group">
                <Facebook className="h-5 w-5 text-[#B8860B] group-hover:text-[#B8860B] transition-colors" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-icon group">
                <Twitter className="h-5 w-5 text-[#B8860B] group-hover:text-[#B8860B] transition-colors" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-serif text-[#B8860B] mb-6">
              {t("footer.quickLinks")}
            </h3>
            <div className="space-y-4">
              <a
                href="/"
                className="block text-[#B8860B] hover:text-[#8B6508] transition-colors hover-lift"
              >
                {t("nav.home")}
              </a>
              <a
                href="/about"
                className="block text-[#B8860B] hover:text-[#8B6508] transition-colors hover-lift"
              >
                {t("nav.about")}
              </a>
              <a
                href="/rooms"
                className="block text-[#B8860B] hover:text-[#8B6508] transition-colors hover-lift"
              >
                {t("nav.rooms")}
              </a>
              <a
                href="/contact"
                className="block text-[#B8860B] hover:text-[#8B6508] transition-colors hover-lift"
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-serif text-[#B8860B] mb-6">
              {t("footer.contact")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[#B8860B] group hover-lift">
                <div className="social-icon">
                  <MapPin className="h-5 w-5 group-hover:text-[#B8860B] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[#B8860B]">
                    {t("footer.address")}:
                  </p>
                  <p className="group-hover:text-[#8B6508] transition-colors">
                    Rruga Antipatrea, Berat, Albania
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#B8860B] group hover-lift">
                <div className="social-icon">
                  <Phone className="h-5 w-5 group-hover:text-[#B8860B] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[#B8860B]">
                    {t("footer.phone")}:
                  </p>
                  <p className="group-hover:text-[#8B6508] transition-colors">
                    +355694319637
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#B8860B] group hover-lift">
                <div className="social-icon">
                  <Mail className="h-5 w-5 group-hover:text-[#B8860B] transition-colors" />
                </div>
                <div>
                  <p className="font-medium text-[#B8860B]">
                    {t("footer.email")}:
                  </p>
                  <p className="group-hover:text-[#8B6508] transition-colors">
                    grandwhitecity@yahoo.it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#B8860B]/20">
          <p className="text-center text-[#B8860B] text-sm">
            © {new Date().getFullYear()} Grand White City Hotel.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
