import React from 'react';
import PizzaCard from './PizzaCard';
import SectionContainer from '../../layouts/SectionContainer';
import CardLayout from '../../layouts/CardLayout';

const MenuSection = () => {
  const pizzas = [
    {
      id: 1,
      name: 'Margherita',
      image: 'https://static.tossdown.com/images/01526d5b-6a7d-4754-bd02-8bebfdffbf62.webp',
      price: 1200,
      description: 'Classic cheese and tomato pizza.',
    },
    {
      id: 2,
      name: 'Pepperoni',
      image: 'https://www.atelierdeschefs.fr/_next/image/?url=https%3A%2F%2Fadc-dev-images-recipes.s3.eu-west-1.amazonaws.com%2Fpizza_pepperoni.jpg&w=3840&q=75',
      price: 1400,
      description: 'Loaded with pepperoni slices.',
    },
    {
      id: 3,
      name: 'BBQ Chicken',
      image: 'https://www.dominos.com.pk/images/74898d70-9cda-11ef-9e96-4d8261812ce4-ChickenTikka_variant_0-2024-11-07073234.jpg',
      price: 1500,
      description: 'Topped with BBQ chicken and onions.',
    },
    {
      id: 4,
      name: 'Veggie Delight',
      image: 'https://www.dominos.com.pk/images/b2009180-9cda-11ef-bf94-4552bcb9a3dd-Veggie-HandTossedTopcopy_variant_0-2024-11-07073417.jpg',
      price: 1100,
      description: 'Fresh veggies on a tomato base.',
    },
  ];

  return (
    <SectionContainer id="menu-section">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Our Menu</h2>
      <CardLayout>
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            name={pizza.name}
            image={pizza.image}
            price={pizza.price}
            description={pizza.description}
          />
        ))}
      </CardLayout>
      </SectionContainer>
    
  );
};

export default MenuSection;