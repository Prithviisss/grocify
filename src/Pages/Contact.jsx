import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-10 py-10">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

      <p className="text-lg text-zinc-700 mb-6">
        Have questions or feedback? We'd love to hear from you.
      </p>

      <div className="space-y-3 text-lg">
        <p>📧 Email: support@grocify.com</p>
        <p>📞 Phone: +1 234 567 890</p>
        <p>📍 Address: Grocify HQ, New York</p>
      </div>
    </div>
  );
};

export default Contact;
