import styles from "./LeadModal.module.css";
import {
  FaTimes,
  FaUser,
  FaCheck,
  FaBriefcase,
  FaShoppingCart,
} from "react-icons/fa";
import GaugeComponent from "react-gauge-component";

const LeadModal = ({ lead, onClose, onPurchase }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h2>{lead.id}</h2>
            <p>Lead ID</p>
          </div>

          <FaTimes className={styles.close} onClick={onClose} />
        </div>

        <div className={styles.scoreSection}>
          <div className={styles.gaugeWrapper}>
              <GaugeComponent
                type="semicircle"
                value={83}
                arc={{
                  colorArray: ["#ef4444", "#f59e0b", "#facc15", "#10b981"],
                  padding: 0.02,
                  subArcs: [
                    { limit: 25 },
                    { limit: 50 },
                    { limit: 75 },
                    { limit: 100 },
                  ],
                }}
                pointer={{
                  color: "#f59e0b",
                  length: 0.6,
                  width: 10,
                }}
                labels={{
                  valueLabel: {
                    hide: true,
                  },
                }}
              />
    
          </div>
          <div className={styles.scoreContent}>
            <h1>83%</h1>
            <h3>Eligibility Score</h3>
            <p>Mar 2026</p>

            <span className={styles.badge}>Fair</span>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.iconPurple}>
            <FaUser />
          </div>

          <div>
            <h2>$698</h2>
            <p>Lead Price</p>
          </div>
        </div>

        <div className={styles.bottomCards}>
          <div className={styles.smallCard}>
            <div className={styles.iconBlue}>
              <FaBriefcase />
            </div>

            <div>
              <p>Applied Amount</p>
              <h2>${lead.amount}</h2>
            </div>
          </div>

          <div className={styles.smallCard}>
            <div className={styles.iconGreen}>
              <FaCheck />
            </div>

            <div>
              <span className={styles.readyBadge}>● Yes</span>

              <p>Readiness</p>
            </div>
          </div>
        </div>

        <button className={styles.purchaseBtn} onClick={onPurchase}>
          Purchase Lead
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default LeadModal;
