import React, { useState } from "react";
import { items, companyDetails } from "../assets/companyData";
import { FaShoppingCart } from "react-icons/fa";


const ServicesAndProductsPage: React.FC = () => {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const filteredItems = selectedCategory
  ? items.filter((item) => item.category === selectedCategory)
  : items;


  // Add item to cart
  const addToCart = (id: number) => {
    console.log(id);
    
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id, quantity: 1 }];
    });
  };

  // Update cart item quantity
  const updateCartItem = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const product = items[item.id];
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  // Delivery charge logic
  const deliveryCharge = calculateTotal() >= 200 ? 0 : 30;

 

  // Send a WhatsApp message with order details
  const sendMessage = (paid: boolean) => {
    const message = `Hi! 👋\n\nThank you for choosing ${companyDetails.name}. Here are the details of your order:\n\n` +

    cart.map((item) => {
      const product = items.find((p) => p.id === item.id);
      return `*${product?.title}*\n - Quantity: ${item.quantity} Kg\n - Total: ₹${(product?.price || 0) * item.quantity}`;
    }).join("\n\n") +
    
    `\n\n*Grand Total: ₹${calculateTotal()}*\n\n` +
    
    `Payment Status: ${paid ? "Paid via UPI" : "Pending"}\n\n` +
    
    `Delivery Address: ${deliveryAddress}, ${pincode}\n\n` +
    
    `Looking forward to serving you! 😊`;
    
    const url = `https://wa.me/${companyDetails.phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // List of valid pincodes
  const validPincodes = ["400603", "400081"]; // Add all valid pincodes here

 
  // Handle "Pay Later" functionality
  const handlePayLater = () => {
    if (!deliveryAddress || !validPincodes.includes(pincode)) {
      setError(`Delivery is only available for pincodes: ${validPincodes.join(", ")}.`);
      return;
    }

    setError("");
    sendMessage(false); // Send a message with pending payment status
  };




  return (
    <div className="min-h-screen bg-gray-50 pt-20 relative">
      <button
        className="fixed bottom-6 right-6 bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:bg-yellow-700 flex items-center justify-center"
        onClick={() => setShowCart(true)}
      >
        <FaShoppingCart size={24} />
        <span className="ml-2 text-sm font-semibold">
          {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      </button>

      <header className="bg-yellow-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Products and Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover premium flour products for all your culinary and baking needs.
        </p>
        
      </header>


      <section className="py-12 px-4">
      <div className="container mx-auto">
        {/* Dropdown for Categories */}
        <div className="flex justify-end items-center mb-6">
  <div className="relative">
    <select
      className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-400 text-sm sm:text-base transition ease-in-out duration-200"
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="" className="text-gray-500">All Categories</option>
      <option value="Flour" className="text-gray-700">Flour</option>
      <option value="Spices" className="text-gray-700">Spices</option>
      <option value="Other Products" className="text-gray-700">Other Products</option>
    </select>
    {/* Custom Dropdown Icon */}
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
      <span className="inline-block w-3 h-3 bg-yellow-500 transform rotate-45 origin-center"></span>
    </div>
  </div>
</div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center text-center"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-20 sm:h-24 rounded-full mb-3"
              />

              {/* Product Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-tight">
                {item.title}
              </h3>

              {/* Hindi Name */}
              <p className="text-xs sm:text-sm text-gray-500 italic mb-2">
                <span className="font-semibold">({item.hindiName})</span>
              </p>

              {/* Product Category */}
              <p className="text-xs sm:text-sm text-yellow-700 font-medium mb-3">
                Category: <span className="uppercase">{item.category}</span>
              </p>

              {/* Product Price */}
              <div className="text-sm sm:text-base font-bold text-yellow-600 mb-3">
                ₹{item.price} / Kg
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() =>addToCart(item.id)}
                className="px-4 sm:px-5 py-1 sm:py-2 bg-yellow-600 text-white text-xs sm:text-sm font-medium rounded-md shadow-md hover:bg-yellow-700 hover:shadow-lg transition duration-200 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>




      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cart.length > 0 ? (
              <>
                <ul className="space-y-4 overflow-y-auto max-h-[35vh]">
                  {cart.map((item) => {
                    const product = items[item.id];
                    return (
                      <li
                        key={item.id}
                        className="flex justify-between items-center p-4 border-b border-gray-300"
                      >
                        <div className="flex flex-col w-1/2">
                          <h3 className="font-semibold text-lg text-gray-800">
                            {product?.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            ₹{product?.price} per Kg
                          </p>
                        </div>

                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => updateCartItem(item.id, item.quantity - 1)}
                            className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                          >
                            -
                          </button>
                          <span className="text-lg font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateCartItem(item.id, item.quantity + 1)}
                            className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                          >
                            +
                          </button>
                        </div>

                        <p className="text-right text-lg font-semibold text-gray-800 w-1/4">
                          ₹{(product?.price || 0) * item.quantity}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-semibold">Total: ₹{calculateTotal()}</span>
                  <span className="text-lg font-semibold">Delivery Charge: ₹{deliveryCharge}</span>
                </div>

                <div className="mt-6">
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter pincode"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
                <div className="mt-6 space-y-4 flex flex-col items-center">

                  {/* Pay Later Button */}
                  <button
                    onClick={handlePayLater}
                    className="relative w-full max-w-xs px-6 py-3 rounded-xl overflow-hidden group transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.15)' }}
                  >
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
                    <span className="relative text-lg font-medium text-white flex items-center justify-center space-x-2 z-10">
                      <span className="text-xl">🕒</span>
                      <span>Pay Later</span>
                    </span>
                    <div className="absolute top-0 right-0 h-full w-2 bg-yellow-400 transform skew-x-12 origin-top-right z-0 transition-all duration-300 group-hover:w-full group-hover:skew-x-0"></div>
                    <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-blue-900/70 rounded-tr-full backdrop-blur-sm"></div>
                    <div className="absolute top-0 left-0 h-1 w-1/4 bg-blue-900/50 rounded-bl-full backdrop-blur-sm"></div>

                    {/* Wave effect */}
                    <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
                      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%' }}>
                        <path d="M0,100 C150,150 350,0 500,100 L500,150 L0,150 Z" style={{ stroke: 'none', fill: 'rgba(0,0,0,.1)' }}></path> {/* Adjust fill color */}
                      </svg>
                    </div>
                  </button>
                </div>



              </>
            ) : (
              <p className="text-lg font-semibold text-center text-gray-600">Your cart is empty</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesAndProductsPage;
