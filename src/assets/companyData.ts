// src/data/companyData.ts
import.meta.env;
import WheatFlour from "../assets/image/WheatFlour.jpg";
import MultigrainFlour from "../assets/image/MultigrainFlour.jpg";
import RiceFlour from "../assets/image/RiceFlour.jpg";
import MP_Shehore_Wheat from "../assets/image/MP_Shehore_Wheat.jpg";
import Lokwan_Wheat from "../assets/image/Lokwan_Wheat.jpg";
import Bajra from "../assets/image/Bajra.jpg";
import Chana_Besan from "../assets/image/Chana_Besan.jpg";
import Modak from "../assets/image/Modak.jpg";
import Ghavan from "../assets/image/Ghavan.jpg";
import Amboli from "../assets/image/Amboli.jpg";
import Dangri from "../assets/image/Dangri.jpg";
import Malvani_Vada from "../assets/image/Malvani_Vada.jpg";
import Thalipeeth_Bhajani from "../assets/image/Thalipeeth_Bhajani.jpg";
import Solapuri_Jwari from "../assets/image/Solapuri_Jwari.jpg";
import Tandul from "../assets/image/Tandul.jpg";
import Nachani from "../assets/image/Nachani.jpg";
import Upwas_Bhajani from "../assets/image/Upwas_Bhajani.jpg";
import Cookie_Flour from "../assets/image/Cookie_Flour.jpg";
import Khamang_Dhokla from "../assets/image/Khamang_Dhokla.jpg";
import Tokem from "../assets/image/Kokem.jpg";
import Fish_Masala from "../assets/image/Fish_Masala.jpg";
import Salem_Haldi from "../assets/image/Salem_Haldi.jpg";
import Malvani_Masala from "../assets/image/Malvani_Masala.jpg";
import Kolhapuri_Mirchi from "../assets/image/Kolhapuri_Mirchi.jpg";
import Satari_Masala from "../assets/image/Satari_Masala.jpg";
import Garam_Masala from "../assets/image/Garam_Masala.jpg";
import Dhana_Powder from "../assets/image/Dhana_Powder.jpg";
import Jeera_Powder from "../assets/image/Jeera_Powder.jpg";
import Sindhi from "../assets/image/Sindhi_Papad.jpg";
import NachaniP from "../assets/image/Nachani_Papad.jpg";





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



export const items =[
   { 
     "id": 0, "image": Lokwan_Wheat,
     "title": "Lokwan Wheat Flour", "hindiName": "लोकवन गेहू पीठ",
     "price": 50,
     "category": "Flour"
   },
   {
      "id": 1, "image":WheatFlour, "title": "Sharbati Wheat Flour", "hindiName": "शरबती गेहू पीठ", "price": 53, "category": "Flour"  },
   {
      "id": 2, "image": MP_Shehore_Wheat, "title": "M.P. Shehore Wheat Flour", "hindiName": "एम.पी. शिहोर फ्री. गेहू पीठ", "price": 55, "category": "Flour"  },
   {
      "id": 3, "image": Solapuri_Jwari, "title": "Solapuri Jowar Flour", "hindiName": "सोलापुरी ज्वारी पीठ", "price": 70, "category": "Flour"  },
   {
      "id": 4, "image": Bajra, "title": "Bajra Flour", "hindiName": "बाजरी पीठ", "price": 55, "category": "Flour"  },
   {
      "id": 5, "image": RiceFlour, "title": "Rice Flour", "hindiName": "तांदुळ पीठ", "price": 50, "category": "Flour"  },
   {
      "id": 6, "image": Nachani, "title": "Nachni Flour", "hindiName": "नाचणी पीठ", "price": 70, "category": "Flour"  },
   {
      "id": 7, "image": MultigrainFlour, "title": "Multi-Grain Flour", "hindiName": "मल्टी ग्रेन पीठ", "price": 80, "category": "Flour"  },
   {
      "id": 8, "image": Chana_Besan, "title": "Chana Besan", "hindiName": "चना बेसन पीठ", "price": 120, "category": "Flour"  },
   {
      "id": 9, "image": Modak, "title": "Modak Flour", "hindiName": "मोडक पीठ", "price": 70, "category": "Flour"  },
   {
      "id": 10, "image": Ghavan, "title": "Ghavan Flour", "hindiName": "घावन पीठ", "price": 120, "category": "Flour"  },
   {
      "id": 11, "image": Amboli, "title": "Amboli Flour", "hindiName": "आंबोळी पीठ", "price": 130, "category": "Flour"  },
   {
      "id": 12, "image": Dangri, "title": "Dangri Flour", "hindiName": "डांगरी पीठ", "price": 140, "category": "Flour"  },
   {
      "id": 13, "image":Malvani_Vada, "title": "Malvani Vada Flour", "hindiName": "मालवणी वडा पीठ", "price": 150, "category": "Flour"  },
   {
      "id": 14, "image":Thalipeeth_Bhajani, "title": "Thalipeeth Bhajani", "hindiName": "थाली पीठ भाजणी", "price": 120, "category": "Flour"  },
   {
      "id": 15, "image":Upwas_Bhajani, "title": "Upvas Bhajani", "hindiName": "उपास भाजणी", "price": 120, "category": "Flour"  },
   {
      "id": 16, "image":Cookie_Flour, "title": "Cookie Flour", "hindiName": "कूकीथ पीठ", "price": 120, "category": "Flour"  },
   {
      "id": 17, "image":Khamang_Dhokla, "title": "Khamang Dhokla Flour", "hindiName": "खमंग ढोकला पीठ", "price": 110, "category": "Flour"  },
   {
      "id": 18, "image":Tokem, "title": "Kokem Flour", "hindiName": "टोकेम", "price": 400, "category": "Flour"  },
   {
      "id": 19, "image":Fish_Masala, "title": "Fish Masala", "hindiName": "फिश मसाला", "price": 800, "category": "Spices"  },
   {
      "id": 20, "image":Salem_Haldi, "title": "Salem Haldi", "hindiName": "सेलेम हल्द", "price": 420, "category": "Spices"  },
   {
      "id": 21, "image":Malvani_Masala, "title": "Malvani Masala", "hindiName": "से. मालवणी मसाला", "price": 820, "category": "Spices"  },
   {
      "id": 22, "image":Satari_Masala, "title": "Satari Masala", "hindiName": "सातारी मसाला", "price": 500, "category": "Spices"  },
   {
      "id": 23, "image":Garam_Masala, "title": "Garam Masala", "hindiName": "से. गरम मसाला", "price": 850, "category": "Spices"  },
   {
      "id": 24, "image":Dhana_Powder, "title": "Dhana Powder", "hindiName": "धना पावडर", "price": 320, "category": "Spices"  },
   {
      "id": 25, "image":Jeera_Powder, "title": "Jeera Powder", "hindiName": "जीरा पावडर", "price": 600, "category": "Spices"  },
   {
      "id": 26, "image":Kolhapuri_Mirchi, "title": "Kolhapuri Chilli Powder", "hindiName": "कोल्हापुरी मिरची पावडर", "price": 850, "category": "Spices"  },
   {
      "id": 27, "image":Sindhi, "title": "Sindhi Papad", "hindiName": "सिंधी पापड", "price": 400, "category": "Other Products"  },
   {
      "id": 28, "image":NachaniP, "title": "Nachni Papad", "hindiName": "नाचणी पापड", "price": 500, "category": "Other Products"  },
   {
      "id": 29, "image":Tandul, "title": "Tandul Papad", "hindiName": "तांदुळ पापड", "price": 300, "category": "Other Products"  }
 ]
 



