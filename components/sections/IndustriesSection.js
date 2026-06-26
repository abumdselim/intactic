import { industriesData } from '../../data/contentData';

export default function IndustriesSection() {
  return (
    <section className="industries-section" id="industries">
      <div className="section-container">
        <div className="industries-header">
          <span className="section-pretitle">Industries We Power</span>
          <h2 className="section-title text-center">With Innovation</h2>
        </div>
        <div className="industries-grid">
          {industriesData.map((ind, i) => (
            <a href="#contact" key={i} className="industry-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="industry-icon"><i className={ind.icon}></i></div>
              <h3>{ind.label}</h3>
              <p>{ind.desc}</p>
              <span className="industry-link">Learn More <i className="fa-solid fa-arrow-right"></i></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
