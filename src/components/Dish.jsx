import styles from "./Dish.module.css";
import MenuList from "./menu";

const Dish = (props) => {
    return (
        <div className={styles.menuContainer}>
            <MenuList kategori={props.kategori} tittel={props.tittel} ingredienser={props.ingredienser} pris={props.pris}/>
        </div>
    )
}

export default Dish;