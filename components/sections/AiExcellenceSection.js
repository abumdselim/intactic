import { aiFeaturesData, aiCardsData } from '../../data/contentData';

export default function AiExcellenceSection() {
  return (
    <section className="ai-section" id="ai-section">
      <div className="ai-bg-pattern" aria-hidden="true"></div>
      <div className="section-container">
        <div className="ai-layout">
          <div className="ai-text">
            <span className="section-pretitle text-light">AI-Powered Development</span>
            <h2 className="section-title text-light">AI-Driven Development<br />Excellence</h2>
            <p className="section-desc text-light">We harness the power of Generative AI, LLMs, and advanced machine learning to build intelligent solutions that transform how businesses operate, decide, and grow.</p>
            <div className="ai-feature-list">
              {aiFeaturesData.map((f, i) => (
                <div key={i} className="ai-feat-item">
                  <div className="ai-feat-icon"><i className={f.icon}></i></div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-hero-primary">Explore AI Capabilities <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="ai-visual">
            <div className="ai-card-grid">
              {aiCardsData.map((card, i) => (
                <div key={i} className="ai-tech-card">
                  <i className={card.icon}></i>
                  <span className="ai-card-label">{card.label}</span>
                  <span className="ai-card-sub">{card.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
