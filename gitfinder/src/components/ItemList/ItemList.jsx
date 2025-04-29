import React from 'react';
import './ItemListStyles.css';

export default function ItemList({ title, description }) {
  return (
    <div className='ItemList'>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}