import { MenuTypesProps } from "./menu.types";
import cx from "classnames";
import styles from "./menu.module.css";


const  Menu = ({className,title, onChange}:MenuTypesProps) =>{

    return (
        <div className={cx(styles.container,className)}>
         
                  <p>{title}</p>
        </div>
    );
}


export default Menu