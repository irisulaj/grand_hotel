import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import { Calendar, Users, CreditCard, Check } from "lucide-react";
import ImageCarouselRooms from "../components/ImageCarouselRooms";
import { useLanguage } from "../context/LanguageContext";

const rooms = [
  {
    id: 1,
    name: "Double Room King Size Bed",
    price: 50,
    images: [
      "./images/rooms/IMG_0757.jpeg",
      "./images/rooms/IMG_0759.jpeg",
      "./images/rooms/IMG_0776.jpeg",
    ],
  },
  {
    id: 2,
    name: "Executive Room",
    price: 85,
    images: ["./images/rooms/IMG_0778.jpeg", "./images/rooms/IMG_0789.jpeg"],
  },
  {
    id: 3,
    name: "Single Room",
    price: 45,
    images: ["./images/rooms/IMG_0767.jpeg"],
  },
];
const BookingForm = () => {
  const { t } = useLanguage();
  const { roomId } = useParams();
  const room = rooms.find((r) => r.id === Number(roomId));

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [totalNights, setTotalNights] = useState(1);
  const [totalAmount, setTotalAmount] = useState(room?.price || 0);

  useEffect(() => {
    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const nights = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      setTotalNights(nights);
      setTotalAmount((room?.price || 0) * nights);
    }
  }, [formData.checkIn, formData.checkOut, room?.price]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!room) return <div>Room not found</div>;

  return (
    <div className="py-16 bg-gradient-to-b from-[#f5f5dc]/50 to-white">
      <br />
      <div className="container-custom max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">{room.name}</h1>
            <ImageCarouselRooms
              images={room.images}
              className="rounded-xl overflow-hidden shadow-lg mb-8"
            />

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                {t("booking.Summary")}
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{t("booking.Price")}</span>
                  <span>€{room.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("booking.Nights")}</span>
                  <span>{totalNights}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>{t("booking.Total")}</span>
                  <span>€{totalAmount}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              {t("booking.title")}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Calendar className="inline-block w-4 h-4 mr-2" />
                    {t("booking.checkIn")}
                  </label>
                  <input
                    placeholder={t("booking.checkIn")}
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4c4b0]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Calendar className="inline-block w-4 h-4 mr-2" />
                    {t("booking.checkOut")}
                  </label>
                  <input
                    placeholder={t("booking.checkOut")}
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4c4b0]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  <Users className="inline-block w-4 h-4 mr-2" />
                  {t("booking.guestNo")}
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4c4b0]"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num}{" "}
                      {num === 1 ? t("booking.guest") : t("booking.guests")}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t("booking.fullName")}
                  </label>
                  <input
                    placeholder={t("booking.fullName")}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4c4b0]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t("booking.Email")}
                  </label>
                  <input
                    placeholder={t("booking.Email")}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4c4b0]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  {t("booking.Phone")}
                </label>
                <input
                  placeholder={t("booking.Phone")}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4c4b0]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  {t("booking.specialRequests")}
                </label>
                <textarea
                  placeholder={t("booking.specialRequests")}
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4c4b0]"
                ></textarea>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-xl font-semibold mb-4">
                  <CreditCard className="inline-block w-5 h-5 mr-2" />
                  {t("booking.Payment")}
                </h3>
                <PayPalScriptProvider
                  options={{
                    clientId:
                      "Afmj4DrSs6NoDQAM24YYg-kreWOc_jxGQDadZ2pzna84_TjXtCMMUrmnyzVOQQxZlCFnCl98GsyfBxDN",
                    currency: "USD",
                    // disableFunding: "credit,card",
                  }}
                >
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    // fundingSource={FUNDING.PAYPAL}
                    createOrder={(data, actions) => {
                      console.log(data);
                      return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            description: "Hotel Room Booking",
                            amount: {
                              currency_code: "USD",
                              value: "2.00", //totalAmount.toString(),
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order!.capture().then((details) => {
                        console.log("Payment completed", details);
                        alert(
                          "Booking and Payment is successful" +
                            details.purchase_units?.toString()
                        );
                        // TO DO Handle Succesful Payment and post booking data to back end
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
