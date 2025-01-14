import styles from "./CardList.module.css";
import MenuCard from "./MenuCards";

const CardList = (props) => {
    return (
            <div className={styles.menuContainer}>
                <MenuCard menu ={props.menu}/>
            </div>
    )
}

export default CardList;