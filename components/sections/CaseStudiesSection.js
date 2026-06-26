import { useState } from 'react';
import Image from 'next/image';
import { caseStudiesData } from '../../data/contentData';

export default function CaseStudiesSection() {
  const [activeCaseTab, setActiveCaseTab] = useState(0);

  return (
    <section className="case-studies-section" id="case-studies">
      <div className="section-container">
        <span className="section-pretitle text-center" style={{ display: 'block', textAlign: 'center' }}>Success Stories</span>
        <h2 className="section-title text-center">Delivering High Impact Globally</h2>
        
        <div className="case-tabs-nav">
          {caseStudiesData.map((c, idx) => (
            <button
              key={idx}
              className={`case-tab-btn ${activeCaseTab === idx ? 'active' : ''}`}
              onClick={() => setActiveCaseTab(idx)}
              style={{ '--case-color': c.color }}
            >
              <span className="case-tab-badge">{c.badge}</span>
              <span className="case-tab-title">{c.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        <div className="case-tab-content">
          {caseStudiesData.map((c, idx) => (
            idx === activeCaseTab && (
              <div key={idx} className="case-details-layout" style={{ '--case-color': c.color }}>
                <div className="case-text-side">
                  <span className="case-badge-v2">{c.badge}</span>
                  <h3>{c.title}</h3>
                  <p className="case-desc-text">{c.desc}</p>
                  
                  <div className="case-stats-row-v2">
                    {c.stats.map((s, j) => (
                      <div key={j} className="case-stat-v2">
                        <span className="case-stat-num">{s.num}</span>
                        <span className="case-stat-lbl">{s.lbl}</span>
                      </div>
                    ))}
                  </div>
                  <a href={c.link} className="case-read-btn-v2" style={{ backgroundColor: c.color }}>
                    View Case Study <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
                <div className="case-visual-side">
                  <div className="case-img-frame">
                    <Image
                      src={c.img}
                      alt={c.title}
                      width={600}
                      height={400}
                      style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '12px' }}
                      unoptimized
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
