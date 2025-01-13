import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <h3>Contact</h3>
        <div className={styles.footerInfo}>
            <p>Phone: 12 34 56 78</p>
            <p>Email: Reactio@gmail.com</p>
            <address>React Street 32, 4200 Framwork</address>    
        </div>
    </div>
  );
};

export default Footer;