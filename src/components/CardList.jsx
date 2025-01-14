import styles from "./CardList.module.css";
import MenuCard from "./MenuCards";

const CardList = (props) => {
    return (
            <div className={styles.menuContainer}>
                <MenuCard kategori={props.kategori} tittel={props.tittel} ingredienser={props.ingredienser} pris={props.pris}/>
            </div>
    )
}

export default CardList;