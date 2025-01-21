import React from "react";
import PremiumQualityFlour from "../assets/PremiumQualityFlour.jpg";
import CustomGrainMilling from "../assets/CustomGrainMilling.jpg";
import WholesaleSupply from "../assets/WholesaleSupply.jpg";

const FeaturesSection: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Premium Quality Flour",
          description:
            "Our flour is milled from the finest grains to ensure high quality and freshness for all your baking and cooking needs.",
            image: PremiumQualityFlour , // Replace with actual image of flour bags or products
        },
        {
          title: "Custom Grain Milling",
          description:
            "We offer custom grain milling services to meet your specific requirements, ensuring consistent results every time.",
            image: CustomGrainMilling , // Replace with image representing milling services
        },
        {
          title: "Wholesale Supply",
          description:
            "Reliable bulk supply of flour for bakeries, restaurants, and distributors, tailored to your business needs.",
            image: WholesaleSupply , // Replace with a relevant image for wholesale supply
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="text-center shadow-lg p-6 rounded-lg hover:scale-105 transform transition bg-gray-100"
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="w-auto h-24 mx-auto mb-4 rounded-full shadow-md"
          />
          <h3 className="text-xl font-bold mb-2 text-yellow-700">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
