import { useState } from 'react';
import PropTypes from 'prop-types';

import productsData from '../../data/products';
import Product from '../Product/Product';



const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ),
};

export default Products;
