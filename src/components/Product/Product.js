import styles from './Product.module.scss';
//import clsx from 'clsx';
import Button from '../Button/Button';
import { useState, useMemo } from 'react';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';



const Product = props => {

   const [currentColor, setCurrentColor] = useState(props.colors[0]);
   const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  //const [price, setPrice] = useState (props.basePrice);

  const getPrice = useMemo(() => {
    const foundSize = props.sizes.find(element => element.name === currentSize);
    return (props.basePrice + foundSize.additionalPrice);
  }, [props.basePrice, props.sizes, currentSize]);

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} title={props.title} name={props.name} />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>

         <form>
        <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
            <OptionSize sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
            <OptionColor colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
        </div>
          <Button className={styles.button}
            title={props.title}
            currentSize={currentSize}
            currentColor={currentColor}
            basePrice={props.basePrice}
            prise={getPrice}
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