import React from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Star,
  Users,
  Wifi,
  Space as Spa,
  Utensils,
  Baby,
  BedDoubleIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ImageCarousel from "../components/ImageCarousel";
import About from "../pages/About";

const Home = () => {
  const { t } = useLanguage();

  const carouselImages = [
    ".grand_hotel/src/assets/images/IMG_0124.jpeg",
    ".grand_hotel/src/assets/images/IMG_0125.jpeg",
    ".grand_hotel/src/assets/images/IMG_0132.jpeg",
    ".grand_hotel/src/assets/images/IMG_0133.jpeg",
  ];

  const services = [
    {
      icon: <BedDoubleIcon className="w-8 h-8" />,
      image: "../src/assets/images/services/IMG_0778.jpeg",
      title: t("home.services.accommodation"),
      description: t("home.services.accommodation.subtitle"),
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      image: "../src/assets/images/services/IMG_0771.jpeg",
      title: t("home.services.dining"),
      description: t("home.services.dining.subtitle"),
    },
    {
      icon: <Baby className="w-8 h-8" />,
      image: "../src/assets/images/services/jumbo.png",
      title: t("home.services.playground"),
      description: t("home.services.playground.subtitle"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      image: "../src/assets/images/services/conference.png",
      title: t("home.services.conference"),
      description: t("home.services.conference.subtitle"),
    },
    {
      icon: <Car className="w-8 h-8" />,
      image: "../src/assets/images/services/parking.png",
      title: t("home.services.parking"),
      description: t("home.services.parking.subtitle"),
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      image: "../src/assets/images/services/IMG_0788.jpeg",
      title: t("home.services.wifi"),
      description: t("home.services.wifi.subtitle"),
    },
  ];
  return (
    <div>
      <div>
        <ImageCarousel
          images={carouselImages}
          className="h-full [&>div]:h-full [&_img]:h-full"
          autoplay={true}
          delayMs={6000}
        />
      </div>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#B8860B] mb-4">
              {t("home.experience")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("footer.about.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: t("home.location"),
                description: t("home.location.subtitle"),
              },
              {
                title: t("home.dining"),
                description: t("home.dining.subtitle"),
              },
              {
                title: t("home.conference"),
                description: t("home.conference.subtitle"),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <Star className="mx-auto h-12 w-12 text-[#B8860B] mb-6" />
                <h3 className="text-xl font-serif text-[#B8860B] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#B8860B] mb-4">
              {t("home.services")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-[#B8860B]">{service.icon}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#B8860B] mb-3 group-hover:text-[#8B6508] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
