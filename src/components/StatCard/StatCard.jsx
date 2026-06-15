import styles from "./StatCard.module.css";

const StatCard = ({
  icon,
  count,
  title,
  variant,
}) => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles.iconWrapper} ${
          styles[variant]
        }`}
      >
        {icon}
      </div>

      <h2>{count}</h2>

      <p>{title}</p>
    </div>
  );
};

export default StatCard;