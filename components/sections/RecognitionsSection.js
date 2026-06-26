import styles from './RecognitionsSection.module.css';
import { recognitionsData } from '../../data/contentData';

export default function RecognitionsSection() {
  return (
    <section className={styles['recognition-section']}>
      <div className="section-container">
        <div className={styles['recognition-grid']}>
          {recognitionsData.map((rec, i) => (
            <div key={i} className={styles['recognition-card']}>
              <div className={styles['recog-icon']}>
                <i className={rec.icon}></i>
              </div>
              <strong>{rec.label}</strong>
              <span>{rec.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

