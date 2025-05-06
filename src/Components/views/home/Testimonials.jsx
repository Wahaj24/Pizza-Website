import React from 'react';
import SectionContainer from '../../layouts/SectionContainer';
import CardLayout from '../../layouts/CardLayout';
import TestimonialBox from './TestimonialBox';

const Testimonials = () => {
  const testimonials = [
    { id: 1, customerName: 'John Doe', feedback: 'Best pizza I ever had!' },
    { id: 2, customerName: 'Jane Smith', feedback: 'Amazing taste and fast delivery!' },
    { id: 3, customerName: 'Michael Brown', feedback: 'Highly recommend their BBQ Chicken pizza!' },
  ];

  return (
    <SectionContainer>
      <h2 className="text-3xl font-bold text-center text-red-600 mb-12">What Our Customers Say</h2>
      <CardLayout>
        {testimonials.map((testimonial) => (
          <TestimonialBox
            key={testimonial.id}
            id={testimonial.id}
            customerName={testimonial.customerName}
            feedback={testimonial.feedback}
          />
        ))}
      </CardLayout>
    </SectionContainer>
  );
};

export default Testimonials;
