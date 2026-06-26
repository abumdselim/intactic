import Counter from '../ui/Counter';
import { statsData } from '../../data/contentData';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  return (
    <section className={styles['stats-section']}>
      <div className={`section-container ${styles['stats-grid-wrap']}`}>
        {statsData.map((stat, i) => (
          <div key={i} className={styles['stat-block']}>
            <div className={styles['stat-icon']}><i className={stat.icon}></i></div>
            <div className={styles['stat-num-wrap']}>
              <Counter target={stat.target} suffix={stat.suffix} />
            </div>
            <span className={styles['stat-label']}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
