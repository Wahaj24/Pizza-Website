import React from 'react';

const CallToAction = () => {
  return (
    <section
      id="call-to-action-section"
      className="bg-yellow-400 text-black text-center py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-lg mb-6">
          Get your favorite pizza delivered to your doorstep now!
        </p>
        <a
          href="#menu-section"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Order Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;