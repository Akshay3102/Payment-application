import styles from "./PurchaseSuccessModal.module.css";
import { FaTimes, FaCheck, FaWallet, FaCommentDots } from "react-icons/fa";

const PurchaseSuccessModal = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <FaTimes className={styles.close} onClick={onClose} />

        <div className={styles.success}>
          <div className={styles.icon}>
            <FaCheck />
          </div>

          <h2>Lead Purchased Successfully</h2>

          <p>You now have access to Lead #123.</p>
        </div>

        <div className={styles.receipt}>
          <h4>Transaction Receipt</h4>

          <div className={styles.row}>
            <span>Transaction ID</span>
            <strong>TXN-2026-0042</strong>
          </div>

          <div className={styles.row}>
            <span>Lead ID</span>
            <strong>LEAD-006</strong>
          </div>

          <div className={styles.row}>
            <span>Lead Type</span>
            <strong>Flat</strong>
          </div>

          <div className={styles.row}>
            <span>Payment Method</span>
            <strong>Autopay</strong>
          </div>

          <div className={styles.row}>
            <span>Amount Charged</span>

            <strong className={styles.red}>-$75.00</strong>
          </div>
        </div>

        <div className={styles.balanceSection}>
          <div className={styles.balanceCard}>
            <FaWallet />
            <div>
              <p>Current Balance</p>
              <h3>$4,250.00</h3>
            </div>
          </div>

          <div className={styles.balanceCard}>
            <FaWallet />
            <div>
              <p>New Balance</p>
              <h3>$4,172.00</h3>
            </div>
          </div>
        </div>

        <div className={styles.chatBox}>
          <FaCommentDots />

          <div>
            <strong>James John is ready to chat!</strong>

            <p>Start a conversation now to move this lead forward.</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.secondaryBtn}>Go to Lead Details</button>

          <button className={styles.primaryBtn}>
            Start Chat with James John
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccessModal;
