import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import { slug } from '../helpers/slug.js';

const ProductImage = ({ name, image }) => (
  <div className='img'>
    <a href={'#/product/' + slug(name)}>
      <ProgressiveImage src={`./assets/img/${image}-min.jpg`}
        placeholder={image +'.jpg'}>
        {(src) => <img src={`./assets/img/${image}.jpg`} alt={name} />}
      </ProgressiveImage>
    </a>
  </div>
);

export default ProductImage;
