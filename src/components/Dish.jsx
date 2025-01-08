import MenuList from "./Menu";
import styles from "./Dish.module.css";

const Dish = (props) => {
    return (
        <div className={styles.menuContainer}>
            <MenuList kategori={props.kategori} tittel={props.tittel} ingredienser={props.ingredienser} pris={props.pris}/>
        </div>
    )
}

export default Dish;