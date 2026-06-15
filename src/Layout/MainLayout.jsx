import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>
        <Header />

        <div className={styles.page}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
