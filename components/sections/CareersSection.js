export default function CareersSection() {
  return (
    <section className="careers-section" id="careers">
      <div className="section-container">
        <div className="careers-layout">
          <div className="careers-text">
            <h2>Join the Intactic Innovations Team</h2>
            <p>Work with top-tier global talent on cutting-edge projects. We foster an environment of continuous learning, innovation, and growth. Whether you are an engineer, designer, or product manager, there's a place for you to thrive.</p>
            <ul className="perks-list">
              <li><i className="fa-solid fa-check"></i> Competitive Compensation</li>
              <li><i className="fa-solid fa-check"></i> Remote/Hybrid Flexibility</li>
              <li><i className="fa-solid fa-check"></i> Global Exposure</li>
              <li><i className="fa-solid fa-check"></i> Health & Wellness Benefits</li>
            </ul>
            <a href="#contact" className="btn-hero-primary" style={{ marginTop: '20px' }}>Explore Open Roles <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="careers-visual">
            <div className="careers-image-placeholder">
              <i className="fa-solid fa-users"></i>
              <span>Life at Intactic Innovations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
