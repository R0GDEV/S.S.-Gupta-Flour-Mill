import React, { useState } from "react";
import { companyDetails } from "../assets/companyData"; // Import company data

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const textMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0A%0A${message}`;
    const whatsappURL = `https://wa.me/${companyDetails.phoneNumber}?text=${textMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20">
      {/* Header Section */}
      <header className="bg-yellow-700 text-white py-12 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4">Contact S.S. Gupta Flour Mill</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have a question about our products or services? Reach out to us!
        </p>
      </header>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-medium text-gray-800">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-800">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-gray-800">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 rounded-lg font-bold shadow-md hover:bg-yellow-700 transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <ul className="space-y-6 text-lg">
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${companyDetails.phoneNumber}`}
                  className="underline text-yellow-700 hover:text-yellow-800 transition"
                >
                  {companyDetails.phoneNumber}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="underline text-yellow-700 hover:text-yellow-800 transition"
                >
                  {companyDetails.email}
                </a>
              </li>
              <li>
                <strong>Address:</strong>
                <p>{companyDetails.address}</p>
              </li>
            </ul>
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href={companyDetails.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-800 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={companyDetails.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-800 transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href={companyDetails.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-800 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
