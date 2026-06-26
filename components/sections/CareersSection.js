import styles from './CareersSection.module.css';

export default function CareersSection() {
  return (
    <section className={styles['careers-callout']} id="careers">
      <div className={styles['careers-inner']}>
        <h2>Join a Team of Innovators</h2>
        <p>We're looking for passionate developers, engineers, and digital architects. Elevate your career by building platforms for global enterprises.</p>
        <div className={styles['careers-perks']}>
          <span><i className="fa-solid fa-check"></i> Hybrid Work</span>
          <span><i className="fa-solid fa-check"></i> Tech Allowances</span>
          <span><i className="fa-solid fa-check"></i> Global Projects</span>
          <span><i className="fa-solid fa-check"></i> ISO Certified Workplace</span>
        </div>
        <a href="#contact" className="btn-hero-primary">
          View Open Positions <i className="fa-solid fa-briefcase"></i>
        </a>
      </div>
    </section>
  );
}

