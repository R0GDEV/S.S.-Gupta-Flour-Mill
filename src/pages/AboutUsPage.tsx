
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <header className="bg-yellow-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">About S.S. Gupta Flour Mill</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Supplying the finest and freshest flour for all your cooking and baking needs. Quality you can trust, delivered with care.
        </p>
      </header>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="src/assets/Mission.jpeg" /* Replace with an image of a flour mill or sacks of flour */
            alt="Our Mission"
            className="w-full rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At S.S. Gupta Flour Mill, our mission is to produce premium quality flour that meets the needs of families and businesses alike. We are committed to sustainability, purity, and excellent customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wheat Flour",
                image: "src/assets/WheatFlour.jpg",
                description: "High-quality whole wheat flour, perfect for chapatis and parathas.",
              },
              {
                title: "Maida",
                image: "src/assets/Maida.jpg",
                description: "Refined flour for baking cakes, cookies, and other confectioneries.",
              },
              {
                title: "Rice Flour",
                image: "src/assets/RiceFlour.jpg",
                description: "Finely milled rice flour, perfect for South Indian dishes and gluten-free recipes.",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              At S.S. Gupta Flour Mill, we take pride in our:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✅ High-quality and fresh flour products.</li>
              <li>✅ Hygienic and sustainable milling processes.</li>
              <li>✅ Customer-centric approach and reliability.</li>
            </ul>
          </div>
          <img
            src="src/assets/Value.jpeg" /* Replace with a value-representative image */
            alt="Why Choose Us"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Quality?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Get in touch with us today for premium flour products tailored to your needs.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-yellow-700 font-bold rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUsPage;
