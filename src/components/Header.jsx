import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
        <i>Welcome to</i>
        <h1>Restaurant Reactio</h1>
    </div>
  );
};

export default Header;