import { NavLink } from "react-router-dom";
import styles from "../header/styles.module.css";
const Nav = (props) => {
  return (
    <>
      <ul
        className={
          !props.activeNav
            ? `${styles.navbarHidden} ${styles.navbar}`
            : `${styles.navbar} ${styles.navbarBlock}`
        }
      >
        <li className={styles.navbar_child}>
          <NavLink to={`#`}>Apple</NavLink>
          <ul className={styles.sub_menu}>
            <li>
              <NavLink to={`#`}>iphone 13</NavLink>
            </li>
            <li>
              <NavLink to={`#`}>iphone 14</NavLink>
            </li>
            <li>
              <NavLink to={`#`}>iphone 11</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={`#`}>iphone</NavLink>
        </li>
        <li className={styles.navbar_child}>
          <NavLink to={`#`}>Sam sung</NavLink>
          <ul className={styles.sub_menu}>
            <li>
              <NavLink to={`#`}>Galaxy s23 ultra</NavLink>
            </li>
            <li>
              <NavLink to={`#`}>Galaxy s22 ultra</NavLink>
            </li>
            <li>
              <NavLink to={`#`}>Galaxy s20 ultra</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={`#`}>Macbook</NavLink>
        </li>
        <li>
          <NavLink to={`#`}>Phụ kiện</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
