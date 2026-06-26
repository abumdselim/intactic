import { useState } from 'react';
import TechPill from '../ui/TechPill';
import { techStackData } from '../../data/contentData';
import styles from './TechStackSection.module.css';

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('front-end');

  return (
    <section className={styles['tech-stack-section']} id="tech-stack">
      <div className="section-container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-pretitle">Technology Specialization</span>
        </div>
        <h2 className="section-title text-center">Engineered on Leading Tech Stacks</h2>
        <div className={styles['tech-tabs-nav']}>
          {[
            { key: 'front-end', label: 'Front-End' },
            { key: 'back-end', label: 'Back-End' },
            { key: 'cloud-devops', label: 'Cloud & DevOps' },
            { key: 'mobile-databases', label: 'Mobile & DB' },
            { key: 'platforms-qa', label: 'Platforms & QA' },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`${styles['tech-tab-btn']} ${activeTab === tab.key ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles['tech-tabs-content']}>
          <div className={styles['tech-pills-grid']}>
            {techStackData[activeTab]?.map((tech, i) => (
              <TechPill key={i} icon={tech.icon} label={tech.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
