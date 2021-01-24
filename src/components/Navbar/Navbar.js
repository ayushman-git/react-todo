import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div>
        <h1>TODO</h1>
      </div>
      <ul className={styles.navbarWrapper}>
        <li>Stats</li>
        <li>Completed</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
