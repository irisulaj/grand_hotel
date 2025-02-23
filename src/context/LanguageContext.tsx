import React, { createContext, useContext, useState } from "react";

type Language = "en" | "al";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.rooms": "Rooms",
    "nav.contact": "Contact",

    // Footer
    "footer.about": "About Grand White City",
    "footer.about.description":
      "A hotel not only distinguished for its architectural style, offering the most exclusive accommodation experience in the heart of the city.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.address": "Address",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.rights": "All rights reserved.",

    // Home
    "home.welcome": "Welcome to Grand White City",
    "home.subtitle":
      "A hotel not only distinguished for his architectural style, Hotel White City offers the most exclusive accomodation in Berat",
    "home.discover": "Discover Our Rooms",
    "home.experience": "Experience Luxury",
    "home.about": "About Grand White City",
    "home.location": "Premium Location",
    "home.location.subtitle":
      "Located in the heart of the city with breathtaking views",
    "home.dining": "Exquisite Dining",
    "home.dining.subtitle":
      "Two restaurants halls offering international cuisine",
    "home.conference": "Conference Facilities",
    "home.conference.subtitle": "Two Modern Meeting Rooms for up 50 people",
    "home.services": "Our Premium Services",
    "home.services.subtitle":
      "Indulge in our world-class amenities and services designed to provide you with an unforgettable stay",
    "home.services.accommodation": "Exclusive Accommodation",
    "home.services.accommodation.subtitle":
      "Offering the most exclusive accommodation experience in the heart of the city.",
    "home.services.dining": "Fine Dining",
    "home.services.dining.subtitle":
      "Experience culinary excellence with our world-class chefs and premium ingredients.",
    "home.services.playground": "Play Ground",
    "home.services.playground.subtitle": "Kids play ground jumbo style",
    "home.services.conference": "Conference Spaces",
    "home.services.conference.subtitle":
      "Perfect venues for conferences and special occasions.",
    "home.services.parking": "Free Parking",
    "home.services.parking.subtitle":
      "Complimentary free parking service for all our valued guests.",
    "home.services.wifi": "High-Speed WiFi",
    "home.services.wifi.subtitle":
      "Stay connected with complimentary high-speed internet throughout the hotel.",

    // About
    "about.title": "About Grand White City",
    "about.description":
      "Grand White City Hotel is located of Berat which brings together a combination of hotel, restaurant all in 4 stars quality. With a special attention to detail and a dedicated team to offer an amazing experience on every aspect of daily life. Open from morning till late we welcome you to enjoy a conjunction of modern looks and views with a culturally diverse cuisine on fine dining concept to not be missed. Grand White CITY hotel radiates the regal aura of a palace, designed with unmatched architectural details for an unforgettable stay.",
    "about.services": "Our Best Services",
    "about.services.subtitle":
      "From exotic culinary experiences to relaxing moments to memorable parties, our dedicated staff will anticipate your every need to build a lasting and trusted relationship alongside you.",
    "about.readMore": "Learn More",
    "about.services.res": "Restaurant & Bar",
    "about.services.res.1": "BAR-RESTAURANT WITH QUALITY SERVICE",
    "about.services.res.2": "ROOM 1. WITH CAPACITY - 100 PEOPLE",
    "about.services.res.3": "ROOM 2. WITH CAPACITY - 60 PEOPLE",
    "about.services.con": "Conference Facilities",
    "about.services.con.1": "2 CONFERENCE ROOMS",
    "about.services.con.2": "CAPACITY OF 50 PEOPLE",
    "about.services.con.3": "CINEMA TYPE SETUP",
    "about.services.add": "Additional Services",
    "about.services.add.1": "FREE PARKING",
    "about.services.add.2": "PLAYGROUND FOR CHILDREN",
    "about.services.add.3": "EXPLOSIVE AMBIENCE",
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "We're here to assist you with any inquiries or special requests you may have.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.map.subtitle":
      "Located in the heart of Berat, our hotel offers easy access to major attractions and business districts.",

    // Rooms
    "rooms.title": "Luxurious Accommodations",
    "rooms.subtitle":
      "Experience unparalleled comfort in our meticulously designed rooms and suites",
    "rooms.perNight": "per night",
    "rooms.bookNow": "Book Now",
    "rooms.book.subtitle.1":
      "Experience luxury in our spacious suite with breathtaking city views",
    "rooms.book.subtitle.2":
      "Perfect blend of comfort and functionality for business travelers",
    "rooms.book.subtitle.3":
      "The epitome of luxury with unparalleled amenities and service",

    // Booking Room
    "booking.title": "Complete Your Booking",
    "booking.checkIn": "Check-in Date",
    "booking.checkOut": "Check-out Date",
    "booking.guestNo": "Number of Guests",
    "booking.guest": "Guest",
    "booking.guests": "Guests",
    "booking.fullName": "Full Name",
    "booking.Email": "Email",
    "booking.Phone": "Phone Number",
    "booking.specialRequests": "Special Requests",
    "booking.Payment": "Payment",
    "booking.Summary": "Booking Summary",
    "booking.Price": "Price per night",
    "booking.Nights": "Number of nights",
    "booking.Total": "Total Amount",
  },
  al: {
    // Navigation
    "nav.home": "Kryefaqja",
    "nav.about": "Rreth Nesh",
    "nav.rooms": "Dhomat",
    "nav.contact": "Kontakt",

    // Footer
    "footer.about": "Rreth Grand White City",
    "footer.about.description":
      "Një hotel i dalluar jo vetëm për stilin e tij arkitektonik, duke ofruar përvojën më ekskluzive të akomodimit në zemër të qytetit.",
    "footer.quickLinks": "Lidhje të Shpejta",
    "footer.contact": "Na Kontaktoni",
    "footer.address": "Adresa",
    "footer.phone": "Telefoni",
    "footer.email": "Email",
    "footer.rights": "Të gjitha të drejtat e rezervuara.",

    // Home
    "home.welcome": "Mirë se vini në Grand White City",
    "home.subtitle":
      "Një hotel i dalluar jo vetëm për stilin e tij arkitektonik, duke ofruar përvojën më ekskluzive të akomodimit në Berat",
    "home.discover": "Zbuloni Dhomat Tona",
    "home.experience": "Përjetoni Luksin",
    "home.about": "Rreth Grand White City",
    "home.location": "Vendodhje Ekskluzive",
    "home.location.subtitle":
      "Ndodhur në zemër të qytetit me pamje mbreslënëse",
    "home.dining": "Të Ushqyerit me Finesë",
    "home.dining.subtitle":
      "Dy salla restoranti që ofrojnë kulinari ndërkombëtare",
    "home.conference": "Ambiente Konference",
    "home.conference.subtitle": "Dy salla mbledhjesh për deri në 50 persona",
    "home.services": "Shërbimet Tona Premium",
    "home.services.subtitle":
      "Shijoni shërbimet dhe paketat tona të klasit botëror, të krijuara për t'ju ofruar një qëndrim të paharrueshëm.",
    "home.services.accommodation": "Akomodim Ekskluziv",
    "home.services.accommodation.subtitle":
      "Duke ofruar eksperiencën më ekskluzive të akomodimit në zemër të qytetit.",
    "home.services.dining": "Të Ngrënurit Këndshëm",
    "home.services.dining.subtitle":
      "Përjetoni përsosmërinë kulinare me shefat tanë të klasit botëror dhe përbërësit premium.",
    "home.services.playground": "Kënd Lojrash",
    "home.services.playground.subtitle":
      "Kënd lojrash për fëmijët në stilin jumbo.",
    "home.services.conference": "Ambiente Konference",
    "home.services.conference.subtitle":
      "Ambiente perfekte për konferenca dhe raste të veçanta.",
    "home.services.parking": "Parkim Falas",
    "home.services.parking.subtitle":
      "Shërbim parkimi falas për të gjithë mysafirët tanë të vyer.",
    "home.services.wifi": "WiFi me Shpejtësi të Lartë",
    "home.services.wifi.subtitle":
      "Qëndroni të lidhur me internet me shpejtësi të lartë falas në të gjithë hotelin.",

    // About
    "about.title": "Rreth Grand White City",
    "about.description":
      "Grand White City Hotel ndodhet në zemër të Beratit, duke ofruar një përzierje të përkryer mes një hoteli elegant dhe një restoranti me cilësi të shkëlqyer, të gjitha në nivelin e katër yjeve. Me një vëmendje të veçantë ndaj detajeve dhe një ekip të përkushtuar, ne ju garantojmë një përvojë unike në çdo moment të qëndrimit tuaj. Të hapur nga mëngjesi deri në orët e vona, ju ftojmë të shijoni një kombinim magjepsës të arkitekturës moderne dhe pamjeve mahnitëse, të shoqëruara me një kuzhinë të pasur dhe të larmishme në një koncept elegant të ushqimit të rafinuar. Grand White City Hotel rrezaton madhështinë e një pallati, me një dizajn arkitekturor të veçantë që garanton një qëndrim të paharrueshëm.",
    "about.services": "Shërbimet Tona më të Mira",
    "about.services.subtitle":
      "Nga përvojat ekzotike kulinarike deri te momentet relaksuese dhe festat e paharrueshme, stafi ynë i përkushtuar do të parashikojë çdo nevojë tuajën për të ndërtuar një marrëdhënie të qëndrueshme dhe të besueshme me ju.",
    "about.readMore": "Mëso më Shumë",
    "about.services.res": "Bar & Restorant",
    "about.services.res.1": "BAR-RESTORANT ME SHËRBIM CILËSOR",
    "about.services.res.2": "SALLA 1. ME KAPACITET - 100 PERSONA",
    "about.services.res.3": "SALLA 2. ME KAPACITET - 60 PERSONA",
    "about.services.con": "Ambiente Konference",
    "about.services.con.1": "2 SALLA KONFERENCE",
    "about.services.con.2": "KAPACITET PREJ 50 PERSONASH",
    "about.services.con.3": "NË TIPOLOGJINË CINEMA",
    "about.services.add": "Shërbime Shtesë",
    "about.services.add.1": "PARKIM PA PAGESË",
    "about.services.add.2": "KËND LOJRASH PËR FËMIJËT",
    "about.services.add.3": "ATMOSFERË FESTIVE",

    // Contact
    "contact.title": "Na Kontaktoni",
    "contact.subtitle":
      "Jemi këtu për t'ju ndihmuar me çdo pyetje ose kërkesë të veçantë që mund të keni.",
    "contact.form.name": "Emri",
    "contact.form.email": "Email",
    "contact.form.message": "Mesazhi",
    "contact.form.send": "Dërgo",
    "contact.map.subtitle":
      "I ndodhur në zemrën e Beratit, hoteli ynë ofron qasje të lehtë në atraksionet kryesore dhe zonat e biznesit.",

    // Rooms
    "rooms.title": "Akomodime Luksoze",
    "rooms.subtitle":
      "Përjetoni komoditet të pakrahasueshëm në dhomat dhe suitat tona të dizajnuara me kujdes",
    "rooms.perNight": "për natë",
    "rooms.bookNow": "Rezervo Tani",
    "rooms.book.subtitle.1":
      "Përjetoni luksin në suitat tona të gjera me pamje mahnitëse nga qyteti",
    "rooms.book.subtitle.2":
      "Përzierje e përsosur e komoditetit dhe funksionalitetit për udhëtimet e biznesit",
    "rooms.book.subtitle.3":
      "Kulmi i luksit me pajisje dhe shërbim të pa krahasueshëm",

    // Booking Room
    "booking.title": "Përfundoni Rezervimin Tuaj",
    "booking.checkIn": "Data e Check-in",
    "booking.checkOut": "Data e Check-out",
    "booking.guestNo": "Numri i Mysafirëve",
    "booking.guest": "Mysafir",
    "booking.guests": "Mysafirë",
    "booking.fullName": "Emri i Plotë",
    "booking.Email": "Email",
    "booking.Phone": "Numri i Telefonit",
    "booking.specialRequests": "Kërkesa të veçanta",
    "booking.Payment": "Pagesa",
    "booking.Summary": "Përmbledhja e Rezervimit",
    "booking.Price": "Çmimi për natë",
    "booking.Nights": "Numri i netëve",
    "booking.Total": "Totali i Pagesës",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
