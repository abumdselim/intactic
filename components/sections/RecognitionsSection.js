import { recognitionsData } from '../../data/contentData';

export default function RecognitionsSection() {
  return (
    <section className="recognitions-section">
      <div className="section-container">
        <div className="recognitions-grid">
          {recognitionsData.map((rec, i) => (
            <div key={i} className="recognition-item">
              <i className={rec.icon}></i>
              <div className="rec-text">
                <span className="rec-label">{rec.label}</span>
                <span className="rec-sub">{rec.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
