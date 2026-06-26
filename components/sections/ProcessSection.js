import { processStepsData } from '../../data/contentData';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  return (
    <section className={styles['process-section']} id="process">
      <div className="section-container">
        <span className="section-pretitle">Delivery Workflow</span>
        <h2 className="section-title">How We Guarantee Delivery</h2>
        <div className={styles['process-steps']}>
          {processStepsData.map((step, i) => (
            <div key={i} className={styles['process-step-card']}>
              <div className={styles['step-number']}>{step.num}</div>
              <div className={styles['step-body']}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className={styles['step-tag']}>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
