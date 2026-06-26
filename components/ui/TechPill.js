import styles from '../sections/TechStackSection.module.css';

export default function TechPill({ icon, label }) {
  return (
    <div className={styles['tech-pill']}>
      <i className={icon}></i>
      <span>{label}</span>
    </div>
  );
}

