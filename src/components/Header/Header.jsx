import styles from "./Header.module.css";

import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.right}>
        <FaSearch />

        <FaRegBell />

        <div className={styles.profile}>
          <img src="https://i.pravatar.cc/40" alt="" />

          <span>Akshay</span>

          <FaCaretDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
