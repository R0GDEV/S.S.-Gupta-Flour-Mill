// src/data/companyData.ts
import.meta.env;
import WheatFlour from "../assets/WheatFlour.jpg";
import Maida from "../assets/Maida.jpg";
import MultigrainFlour from "../assets/MultigrainFlour.jpg";
import RiceFlour from "../assets/RiceFlour.jpg";

export const companyDetails = {
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER || "Not available",
  email: import.meta.env.VITE_EMAIL || "Not Provided",
  address: import.meta.env.VITE_ADDRESS || "Not Provided",
  description: import.meta.env.VITE_DESCRIPTION || "Not Provided",
  upiVpa: import.meta.env.VITE_UPI_VPA || "Not Provided",
  name: import.meta.env.VITE_COMPANY_NAME || "Not Provided",
  tagline: import.meta.env.VITE_COMPANY_TAGLINE || "Not Provided",
  socialLinks: {
    facebook: import.meta.env.VITE_FACEBOOK || "#",
    twitter: import.meta.env.VITE_TWITTER || "#",
    linkedin: import.meta.env.VITE_LINKEDIN || "#",
    instagram: import.meta.env.VITE_INSTAGRAM || "#",
  },
};


export const items = [
  {
    id: 0,
    title: "Wheat Flour",
    image: WheatFlour,
    description: "Premium quality wheat flour for soft and fluffy chapatis.",
    type: "product",
    pricePerKg: 40,
  },
  {
    id: 1,
    title: "Maida",
    image: Maida,
    description: "Refined flour for baking delicious cakes and pastries.",
    type: "product",
    pricePerKg: 50,
  },
  {
    id: 2,
    title: "Multigrain Flour",
    image: MultigrainFlour,
    description: "A healthy mix of grains, perfect for a balanced diet.",
    type: "product",
    pricePerKg: 60,
  },
  {
    id: 3,
    title: "Rice Flour",
    image: RiceFlour,
    description: "Finely milled rice flour, perfect for South Indian dishes and gluten-free recipes.",
    type: "product",
    pricePerKg: 55,
  },
  {
    id: 4,
    title: "Bajra Flour",
    image: "src/assets/",
    description: "Pearl millet flour, a nutritious and gluten-free alternative.",
    type: "product",
    pricePerKg: 50,
  },
  {
    id: 5,
    title: "Jowar Flour",
    image: "src/assets/",
    description: "Sorghum flour for wholesome rotis and healthy recipes.",
    type: "product",
    pricePerKg: 50,
  },
  {
    id: 6,
    title: "Besan (Gram Flour)",
    image: "",
    description: "Fine gram flour for making pakoras, sweets, and more.",
    type: "product",
    pricePerKg: 70,
  },
];


