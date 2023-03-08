import clsx from 'clsx';
import PropTypes  from 'prop-types';

import styles from './Button.module.scss';





const Button = (props) => {

    return (
        <button
            type={props.type}
            className={clsx(styles.button, props.className)} 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

Button.propTypes ={
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default Button;
