import React from "react";
import { Link } from "react-router-dom";
import { Wifi, Coffee, Tv, Bath, Star } from "lucide-react";
import ImageCarouselRooms from "../components/ImageCarouselRooms";
import { useLanguage } from "../context/LanguageContext";

const rooms = [
  {
    id: 1,
    name: "Double Room King Size Bed",
    price: 50,
    images: [
      "/grand_hotel/images/rooms/IMG_0757.jpeg",
      "/grand_hotel/images/rooms/IMG_0759.jpeg",
      "/grand_hotel/images/rooms/IMG_0776.jpeg",
    ],
    amenities: ["King Size Bed", "City View", "Mini Bar", "Room Service"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Double Single Room",
    price: 85,
    images: [
      "/grand_hotel/images/rooms/IMG_0778.jpeg",
      "/grand_hotel/images/rooms/IMG_0789.jpeg",
    ],
    amenities: [
      "Queen Size Bed",
      "Work Desk",
      "Coffee Maker",
      "High-Speed WiFi",
    ],
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 3,
    name: "Single Room",
    price: 45,
    images: ["/grand_hotel/images/rooms/IMG_0767.jpeg"],
    amenities: [
      "Master Bedroom",
      "Living Room",
      "Private Balcony",
      "Butler Service",
    ],
    rating: 4.9,
    reviews: 76,
  },
];

const Rooms = () => {
  const { t } = useLanguage();
  return (
    <div className="py-16 bg-gradient-to-b from-[#f5f5dc]/50 to-white">
      <br />
      <div className="container-custom">
        <h1 className="text-5xl font-bold text-center mb-4">
          {t("rooms.title")}
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t("rooms.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <ImageCarouselRooms images={room.images} />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold">{room.name}</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">
                      {room.rating}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({room.reviews})
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {" "}
                  {t("rooms.book.subtitle." + room.id)}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {room.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#f5f5dc] text-gray-700 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-[#d4c4b0]">
                      €{room.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t("rooms.perNight")}
                    </p>
                  </div>
                  <Link
                    to={`/book/${room.id}`}
                    className="btn-primary transform hover:scale-105 transition-transform duration-300"
                  >
                    {t("rooms.bookNow")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
