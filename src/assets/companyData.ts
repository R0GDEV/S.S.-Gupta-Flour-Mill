// src/data/companyData.ts
import WheatFlour from "../assets/WheatFlour.jpg";
import Maida from "../assets/Maida.jpg";
import MultigrainFlour from "../assets/MultigrainFlour.jpg";
import RiceFlour from "../assets/RiceFlour.jpg";

export const companyDetails = {
  phoneNumber: "+919867953622",
  email: ".",
  address: "Kopri, Thane, Anand Nagar Rd, Anand Nagar, Mulund East, Mumbai, Maharashtra 400080",
  description: "Supplying the finest and freshest flour for all your cooking needs.",
  upiVpa: "vipulbhai7sssking-2@okhdfcbank",
  name: "S.S. Gupta Flour Mill",
  tagline: "Quality you can trust",
  socialLinks: {
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/",
  },
};



export const items = [
  {
    id: 0,
    title: "Wheat Flour",
    image: WheatFlour ,
    description: "Premium quality wheat flour for soft and fluffy chapatis.",
    type: "product",
    pricePerKg: 40,
  },
  {
    id: 1,
    title: "Maida",
    image: Maida ,
    description: "Refined flour for baking delicious cakes and pastries.",
    type: "product",
    pricePerKg: 50,
  },
  {
    id: 2,
    title: "Multigrain Flour",
    image: MultigrainFlour ,
    description: "A healthy mix of grains, perfect for a balanced diet.",
    type: "product",
    pricePerKg: 60,
  },
  {
    id: 3,
    title: "Rice Flour",
    image: RiceFlour ,
    description: "Finely milled rice flour, perfect for South Indian dishes and gluten-free recipes.",
    type: "product",
    pricePerKg: 55,
  },
  {
    id: 4,
    title: "Bajra Flour",
    image: "src/assets/" ,
    description: "Pearl millet flour, a nutritious and gluten-free alternative.",
    type: "product",
    pricePerKg: 50,
  },
  {
    id: 5,
    title: "Jowar Flour",
    image: "src/assets/" ,
    description: "Sorghum flour for wholesome rotis and healthy recipes.",
    type: "product",
    pricePerKg: 50,
  },
  {
    id: 6,
    title: "Besan (Gram Flour)",
    image: "" ,
    description: "Fine gram flour for making pakoras, sweets, and more.",
    type: "product",
    pricePerKg: 70,
  },
];


