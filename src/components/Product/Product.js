import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import ProductImage from '../ProductImage/ProductImage';



const Product = props => {
   const [currentColor, setCurrentColor] = useState(props.colors[0]);
   const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
   const [price, setPrice] = useState (props.basePrice);

  const getPrice = () => {
    const foundSize = props.sizes.find(
      (element) => element.name === currentSize
    );
    setPrice(props.basePrice + foundSize.additionalPrice)
    return (props.basePrice + foundSize.additionalPrice);
  };

  useMemo(() => {
    getPrice();
  }, [price, currentColor, currentSize]);

  const addToCart = (e) => {
    e.preventDefault();

    const product = {
      name: props.title,
      size: currentSize,
      basePrice: props.basePrice,
      color: currentColor,
      price: price,
    }
      console.log(product); 
  }

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} title={props.title} name={props.name} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>

         <form>
        <div className={styles.colors}>
    
            <OptionSize sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />

            <h3 className={styles.optionLabel}>Colors</h3>
            <OptionColor colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
        </div>
          <Button className={styles.button}
              type = 'submit'
              onClick={(event) => addToCart(event)}
          >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form> 
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.object),
  basePrice: PropTypes.number,
  currentColor: PropTypes.string,
}

export default Product;