import styles from "./MenuCards.module.css";

const MenuCard = (props) => {
  return (
    <>
      {props.menu.map((menu) => {
        return (
          <div key={menu.id}>
            <div className={styles.menuCard}>
              <h2 className={styles.header}>{menu.tittel}</h2>
              <p>{menu.kategori}</p>
              <p><b>Ingredienser:</b> {menu.ingredienser}</p>
              <p>
                <u>{menu.pris}</u>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
