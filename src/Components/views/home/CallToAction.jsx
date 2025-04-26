import React from 'react';

const CallToAction = () => {
  return (
    <section id="call-to-action-section" className="bg-yellow-400 text-black text-center py-16">
      <h2 className="text-3xl font-bold">Ready to Order?</h2>
      <p className="text-lg mt-4">Get your favorite pizza delivered to your doorstep now!</p>
      <a
        href="#menu-section"
        className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
      >
        Order Now
      </a>
    </section>
  );
};

export default CallToAction;