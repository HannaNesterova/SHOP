import styles from './Button.module.scss';
import clsx from 'clsx';
import OptionSize from '../OptionSize/OptionSize';



const Button = (props) => {

    const addToCart = (e) => {
        e.preventDefault();
        const price = props.basePrice + OptionSize;
        const product = {
          name: props.title,
          size: props.currentSize,
          basePrice: props.basePrice,
          color: props.currentColor,
          price: price,
        }
          console.log(product);
        
      }

    const handleClick = (event) => {
        addToCart(event);
    };

    return (
        <button
            type={props.type}
            className={clsx(styles.button, props.className)} onClick={handleClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
