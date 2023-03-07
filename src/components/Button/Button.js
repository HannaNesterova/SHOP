import styles from './Button.module.scss';
import clsx from 'clsx';



const Button = (props) => {

    const addToCart = (e) => {
        e.preventDefault();
        //const foundSize = props.sizes.find(element => element.name === props.currentSize);
          const product = {
            name: props.title,
            size: props.currentSize,
            //price: getPrice(),
            color: props.currentColor,
            //price: props.basePrice + foundSize.additionalPrice
         }
          console.log(product);
        
      }

    const handleClick = (event) => {
        addToCart(event);
    };

    return (
        <button
            type={props.type}
            className={clsx(styles.button, props.className)}
            onClick={handleClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
