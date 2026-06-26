import { aiFeaturesData, aiCardsData } from '../../data/contentData';
import styles from './AiExcellenceSection.module.css';

export default function AiExcellenceSection() {
  return (
    <section className={styles['ai-section']} id="ai-section">
      <div className={styles['ai-bg-pattern']} aria-hidden="true"></div>
      <div className="section-container">
        <div className={styles['ai-layout']}>
          <div className={styles['ai-text']}>
            <span className="section-pretitle text-light">AI-Powered Development</span>
            <h2 className="section-title text-light">AI-Driven Development<br />Excellence</h2>
            <p className="section-desc text-light">We harness the power of Generative AI, LLMs, and advanced machine learning to build intelligent solutions that transform how businesses operate, decide, and grow.</p>
            <div className={styles['ai-feature-list']}>
              {aiFeaturesData.map((f, i) => (
                <div key={i} className={styles['ai-feat-item']}>
                  <div className={styles['ai-feat-icon']}><i className={f.icon}></i></div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-hero-primary">Explore AI Capabilities <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className={styles['ai-visual']}>
            <div className={styles['ai-card-grid']}>
              {aiCardsData.map((card, i) => (
                <div key={i} className={styles['ai-tech-card']}>
                  <i className={card.icon}></i>
                  <span className={styles['ai-card-label']}>{card.label}</span>
                  <span className={styles['ai-card-sub']}>{card.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
