// utils/siteConfig.js
// Central configuration module for the entire site

// Site Metadata
const siteMetadata = {
  title: "JW Marriott Residences",
  description:
    "At the very core of Jumeirah Village Circle, lies JW Marriott Residences, a rare opportunity for investors, restaurateurs, and global brands to secure fully licensed, freehold F&B and retail spaces inside a world-renowned hospitality destination. Whether you're launching a flagship venue or expanding your brand presence, these commercial units combine high visibility, full ownership, and minimal operational barriers under a prestigious luxury banner.",
  keywords: [
    "JW Marriott Residences",
    "Jumeirah Village Circle",
    "5-star",
    "Dubai luxury apartments",
    "Dubai real estate",
    "Expo Living",
    "luxury residential",
    "Dubai property",
    "golf course view apartments",
    "Expo City",
  ],
  icons: {
    favicon:
      "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  },
  themeColor: "#1C6658",
  backgroundColor: "#ffffff",
};

// Header & Footer
const header = {
  companyName: "Subarashi",
  projectName: "JW Marriott Residences",
};

// Hero Section
const hero = {
  title: ["- Modern Living", "made to accommodate", "today, and tomorrow."],
  projectName: "JW Marriott Residences",
  projectTypes: "Premium F&B Spaces Within a Global 5-star Hospitality Destination",
  description:
    "At the very core of Jumeirah Village Circle, lies JW Marriott Residences, a rare opportunity for investors, restaurateurs, and global brands to secure fully licensed, freehold F&B and retail spaces inside a world-renowned hospitality destination. Whether you're launching a flagship venue or expanding your brand presence, these commercial units combine high visibility, full ownership, and minimal operational barriers under a prestigious luxury banner.",
  ctaText: "Register Your Interest",
  heroImage:
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581237/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-21_e1qpix.jpg",
};

// Location Section
const location = {
  title: "Location",
  subtitle: " A Prime Spot at the Center of EVERYTHING.",
  description:
    "JW Marriott Residences in JVC offers seamless access to Dubai’s key locations. Its central position makes it an ideal destination for residents, tourists, and professionals alike. From Dubai Marina to Downtown Dubai, everything is within 30 minutes or less.",
  proximities: [
    "10 minutes to Dubai Marina",
    "10 minutes to Mall of the Emirates",
    "18 minutes to Palm Jumeirah",
    "20 minutes to Downtown Dubai",
    "25 minutes to Jumeirah Beach",
    "30 minutes to Dubai International Airport",
    "30 minutes to Al Maktoum International Airport",
  ],
  additionalInfo:
    "Its strategic position near major transportation hubs makes commuting effortless while ensuring residents remain connected to Dubai’s key attractions.",
  startingPrice: "On request",
  masterPlan:
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744090334/Terra_Heights_page-0006_iakn7k.jpg",
  apartmentDetails: [
    { label: "Unit Types", value: "Fully licensed F&B retail units with title deeds" },
    { label: "Area Range", value: "From 3,134 sqft (interior) + 2,239 sqft (terrace)" },
    { label: "Handover Date", value: "TBA" },
    { label: "Payment Plan", value: "Flexible plans available (contact for details)" },
    /*{ label: "Deposit Required", value: "20%" },*/
  ],
};

// Gallery Section
const gallery = {
  title: "Gallery",
  subtitle: "See what five-star F&B ownership looks like.",
  images: [
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581238/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-23_yf7x6k.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581230/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-202_deif8w.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581237/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-18_vhu504.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581236/Toco_Brochure_-_MARRIOTT_JVC-1_m8r01m.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581236/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-43_dhodrn.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581230/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-201_shette.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581230/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-58_j4sd2d.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1745581230/MARRIOTT_JVC_-_PRESENTATION-Medium_NEW_2-22_prawd8.jpg",
  ],
};

// Floor Plan Section
const floorPlans = {
  title: "Floor Plans",
  subtitle:
    "Optimized Layouts Built for Specifically for Hospitality Success",
  additionalText:
    "Open spaces, natural light, and a seamless blend of indoor and outdoor living create a home that feels like a retreat.",
  images: [
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/1_Bed_peughe.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/2_Bed_eqnyp4.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/1_Bed_peughe.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/2_Bed_eqnyp4.jpg",
  ],
  bedroomTypes: [
    { id: "1bed", label: "1 Bedroom", imageIndex: 2 },
    { id: "2bed", label: "2 Bedrooms", imageIndex: 3 },
    /* { id: "3bed", label: "3 Bedrooms", imageIndex: 0 },
    { id: "4bed", label: "4 Bedrooms", imageIndex: 1 }, */
  ],
};

// Features/Amenities Section
const features = {
  title: "Features",
  subtitle: "Rarity in model, intentionality in design - but you can have both at JW Marriot",
  amenitiesTitle: "EXCLUSIVE FEATURES",
  amenities: [
    {
      iconName: "RestaurantMenu",
      title: "RESTAURANTS VILLAGE",
    },
    {
      iconName: "Deck",
      title: "OUTDOOR & ROOFTOP SEATING",
    },
    {
      iconName: "VerifiedUser",
      title: "TITLE-DEEDED OWNERSHIP",
    },
    {
      iconName: "Build",
      title: "TURNKEY SUPPORT FROM MOTION HOSPITALITY",
    },
    {
      iconName: "Flag",
      title: "FLAGSHIP LOCATION BRANDING",
    },
    {
      iconName: "Groups",
      title: "HIGH FOOTFALL VENUE",
    },
    {
      iconName: "Paid",
      title: "BACKED BY 100M+ AED IN INVESTMENT",
    },
  ]
  
};

// Contact Form
const contact = {
  title: "Register Your Interest",
  subtitle:
    "Fill in your details below and our property specialist will contact you soon",
  formFields: {
    name: "Full Name",
    email: "Email",
    phone: "Phone Number",
    unitPreference: "Unit Preference",
  },
  unitOptions: [
    { value: "4-bed", label: "Studio" },
    { value: "1-bed", label: "1 Bedroom" },
    { value: "2-bed", label: "2 Bedroom" },
    { value: "5-bed", label: "3 + Bedroom" },
  ],
  submitButtonText: "Submit",
  successMessage:
    "Thank you! Your information has been submitted successfully.",
  errorMessage:
    "There was an error submitting your information. Please try again.",
  formConfig: {
    defaultCollection: "leads",
    defaultStatus: "new",
    defaultSource: "website",
    projectName: "Sobha One Element",
  },
};

// Analytics and Tracking
const analytics = {
  googleAnalyticsId: "AW-16909263453",
  facebookPixelId: "1659058738047957",
  conversionEvents: {
    googleConversionId: "AW-16909263453/jTrDCNHE5qYaEN3E-_4-",
    facebookEventName: "Lead",
  },
};

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "subarashi-real-estate.firebaseapp.com",
  projectId: "subarashi-real-estate",
  storageBucket: "subarashi-real-estate.appspot.com",
  messagingSenderId: "284995572575",
  appId: "1:284995572575:web:4019d4060000a3a8c81cea",
  measurementId: "G-LMKH4GB7LP",
};

// Export all configuration sections
export {
  siteMetadata,
  header,
  hero,
  location,
  gallery,
  floorPlans,
  features,
  contact,
  analytics,
  firebaseConfig,
};

// Export default complete config
const siteConfig = {
  siteMetadata,
  header,
  hero,
  location,
  gallery,
  floorPlans,
  features,
  contact,
  analytics,
  firebaseConfig,
};

export default siteConfig;
