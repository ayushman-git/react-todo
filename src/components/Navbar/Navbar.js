import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div>
        <h1>TODO</h1>
      </div>
    </nav>
  );
};

export default Navbar;
