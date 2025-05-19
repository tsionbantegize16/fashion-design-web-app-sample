import React from "react";

const ContactSection = () => (
  <div className="flex flex-col items-center justify-center p-10 min-h-screen">
    <h2 className="font-serif text-4xl font-bold mb-6">Let's Connect</h2>
    <form className="w-full max-w-md space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md" />
      <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md" />
      <textarea placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded-md" />
      <button type="submit" className="bg-black text-white px-6 py-2 rounded-md">Send Message</button>
    </form>
    <div className="mt-6 text-gray-600">
      Or email me at <a href="mailto:hello@amandabraga.com" className="underline">hello@amandabraga.com</a>
    </div>
  </div>
);

export default ContactSection;
