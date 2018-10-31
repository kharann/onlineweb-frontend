import React from 'react';

const Person = ({ color = '#ffffff' }: { color: string }) => (
  <svg width="100%" height="100%" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="10" r="10" fill={color} />
    <path d="M0.600098 32C0.600098 26.4772 5.07725 22 10.6001 22H19.4001C24.9229 22 29.4001 26.4772 29.4001 32V41H0.600098V32Z" fill={color} />
  </svg>
);

export default Person;
