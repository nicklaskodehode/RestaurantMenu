import styles from "./MenuCards.module.css";

const MenuCard = (props) => {

  const CategoryColor = (category) => {
    switch (category) {
      case "Forrett":
        return { color: "green"};
      case "Hovedrett":
        return { color: "blue" };
      case "Dessert":
        return { color: "purple" };
    }
  };
  
  return (
    <>
      {props.menu.map((menu) => {
        return (
          <div key={menu.id}>
            <div className={styles.menuCard}>
              <h2 className={styles.header}>{menu.tittel}</h2>
              <p style={CategoryColor(menu.kategori)}>{menu.kategori}</p>
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
