import { processStepsData } from '../../data/contentData';

export default function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="section-container">
        <span className="section-pretitle">Delivery Workflow</span>
        <h2 className="section-title">How We Guarantee Delivery</h2>
        <div className="process-steps">
          {processStepsData.map((step, i) => (
            <div key={i} className="process-step-card">
              <div className="step-number">{step.num}</div>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className="step-tag">{step.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
