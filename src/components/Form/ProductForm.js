import styles from "./ProductForm.module.scss";
import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import PropTypes from 'prop-types';
import { useCallback } from "react";

const ProductForm = (props) => {
    
  const addActive = useCallback((e) => {
    if (e.target.localName === 'button'){
      const buttons = e.target.parentElement.parentElement.querySelectorAll('button');
      for (let button of buttons){
        if( button.classList.contains(styles.active)){
          button.classList.remove(styles.active)
        }
      }
      e.target.classList.add(styles.active)
    }
  })
  const addProduct = (e) => {
    e.preventDefault();
    const productSummary = {
      name: props.name,
      price: props.price,
      size: props.currentSize,
      Color: props.currentColor,
    }
    const productSummaryString =
    `
    Summary
    ===========
    name: ${props.name}
    price: ${props.price}
    size: ${props.currentSize}
    Color: ${props.currentColor}
    `
    console.log(productSummary);
    console.log(productSummaryString);
  }
  return (
    <form onSubmit={addProduct}>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
    </form>
  )
}

    ProductForm.propTypes = {
    setPriceFunc: PropTypes.func,
    setCurrentSize: PropTypes.func,
    setCurrentColor: PropTypes.func,
    sizes: PropTypes.array,
    currentSize: PropTypes.string,
    currentColor: PropTypes.string,
  }
  
  export default ProductForm;