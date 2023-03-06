import clsx from 'clsx';
import styles from "./OptionColor.module.scss";
import PropTypes from 'prop-types';

const OptionColor = (props) => {

    return(
        <ul className={styles.choices} onClick={props.addActive}>
        {props.colors.map(color =>
          <li key={color}>
            <button type="button"
              onClick={()=>{props.setCurrentColor(color)}}
              className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)}>
            </button>
          </li>)
        }
      </ul>
    )
}

export default OptionColor;