import styles from "./Sidebar.module.css";
import {
  FaHome,
  FaWallet,
  FaChartLine,
  FaComments,
  FaCog,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronRight,
  FaFileAlt,
} from "react-icons/fa";

import headerLogo from "../../assets/headerLogo.png";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={headerLogo} alt="Logo" />
        <h3>Partner Portal</h3>
      </div>

      <div className={styles.logoDivider}></div>

      <div className={styles.section}>
        <p className={styles.heading}>MAIN</p>

        <div className={styles.menu}>
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div className={styles.menu}>
          <FaWallet />
          <span>Wallet</span>
        </div>

        <div className={`${styles.menu} `}>
          <FaChartLine />
          <span>Marketplace</span>
          <FaChevronDown className={styles.arrow} />
        </div>

        <div className={styles.submenu}>
          <div
            className={`${styles.submenuItem} ${styles.activeSubmenu}`}
          >
            <div className={styles.submenuLeft}>
              <FaFileAlt />
              <span>Business Loan</span>
            </div>

            <FaChevronRight />
          </div>

          <div className={styles.submenuItem}>
            <div className={styles.submenuLeft}>
              <FaFileAlt />
              <span>Debt Relief</span>
            </div>

            <FaChevronRight />
          </div>
        </div>

        <div className={styles.menu}>
          <FaComments />
          <span>Chat</span>
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.heading}>OTHERS</p>

        <div className={styles.menu}>
          <FaCog />
          <span>Settings</span>
        </div>

        <div className={styles.menu}>
          <FaQuestionCircle />
          <span>Support</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;