import styles from "./LeadCard.module.css";
import { FaArrowRight } from "react-icons/fa";

const LeadCard = ({ lead, onView, }) => {
  return (
    <div className={styles.card}>
      <h3>{lead.id}</h3>

      <hr />

      <div className={styles.infoRow}>
        <span className={styles.label}>Applied Amount</span>

        <span className={styles.amount}>${lead.amount}</span>
      </div>

      <div className={styles.infoRow}>
        <span className={styles.label}>Status</span>

        <div className={`${styles.status} ${styles[lead.statusClass]}`}>
          <span className={styles.dot}></span>
          {lead.status}
        </div>
      </div>

      <button className={styles.viewBtn} onClick={onView}>
        View Lead
        <FaArrowRight />
      </button>
    </div>
  );
};

export default LeadCard;
