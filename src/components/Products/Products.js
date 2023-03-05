import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';


const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {/* <Product {...products[0]} />
      <Product {...products[1]} /> */}
       {products.map((products) => (
        <Product key={products.name}{...products}/>
       ))}
      </section>
      );
    };

    Product.propTypes = {
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      basePrice: PropTypes.number,
    }

export default Products;