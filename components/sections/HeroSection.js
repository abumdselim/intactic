import { useState, useEffect } from 'react';
import Image from 'next/image';
import { heroSlides } from '../../data/contentData';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = heroSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 6000);
    return () => clearInterval(interval);
  }, [slidesCount]);

  const handlePrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  const handleNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesCount);

  return (
    <section className="hero-section" id="hero">
      {/* Background mesh gradients */}
      <div className="hero-bg-glow-1" aria-hidden="true" />
      <div className="hero-bg-glow-2" aria-hidden="true" />

      <div className="hero-slides-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {heroSlides.map((slide, idx) => (
          <div key={idx} className={`hero-slide-full ${currentSlide === idx ? 'active' : ''}`}>
            <div className="hero-slide-inner">
              <div className="hero-text-col">
                <span className="hero-badge">
                  <i className={slide.badge.icon}></i> {slide.badge.text}
                </span>
                <p className="hero-sub">{slide.tag}</p>
                <h1 className="hero-h1">
                  Build <span className="gradient-text">{slide.titleHighlight}</span> {slide.title.replace(slide.titleHighlight, '')}
                </h1>
                <p className="hero-desc">{slide.desc}</p>
                <div className="hero-cta-row">
                  <a href={slide.cta1.href} className="btn-hero-primary">{slide.cta1.label} <i className="fa-solid fa-arrow-right-long"></i></a>
                  <a href="#services" className="btn-hero-secondary">Explore Services <i className="fa-solid fa-angle-down"></i></a>
                </div>
              </div>
              
              <div className="hero-img-col">
                <div className="hero-visual-grid">
                  {/* Overlapping 3D Image Card 1 */}
                  <div className="hero-card-stacked hero-card-img-1">
                    <Image
                      src={slide.img1}
                      alt={slide.badge.text}
                      width={300}
                      height={220}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      priority={idx === 0}
                      unoptimized
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  
                  {/* Overlapping 3D Image Card 2 */}
                  <div className="hero-card-stacked hero-card-img-2">
                    <Image
                      src={slide.img2}
                      alt={slide.badge.text}
                      width={260}
                      height={180}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      unoptimized
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>

                  {/* Stat Card 1 (Glassmorphic) */}
                  <div className="hero-card-stacked hero-card-stat-1">
                    <span className="hero-grid-stat-num">{slide.stats[0].num}</span>
                    <span className="hero-grid-stat-lbl">{slide.stats[0].label}</span>
                  </div>
                  
                  {/* Stat Card 2 (Dark/Brand Glow) */}
                  <div className="hero-card-stacked hero-card-stat-2">
                    <span className="hero-grid-stat-num">{slide.stats[1].num}</span>
                    <span className="hero-grid-stat-lbl">{slide.stats[1].label}</span>
                  </div>

                  {/* Decorative Floating Tech Badges */}
                  <div className="hero-floating-badge badge-float-1">
                    <i className="fa-solid fa-brain"></i> AI & ML
                  </div>
                  <div className="hero-floating-badge badge-float-2">
                    <i className="fa-brands fa-aws"></i> Cloud Native
                  </div>
                  <div className="hero-floating-badge badge-float-3">
                    <i className="fa-solid fa-shield-halved"></i> ISO 27001
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="hero-arrow hero-arrow-left" onClick={handlePrevSlide} aria-label="Previous">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={handleNextSlide} aria-label="Next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {heroSlides.map((_, idx) => (
          <button key={idx} className={`hero-dot ${currentSlide === idx ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)} aria-label={`Slide ${idx + 1}`}></button>
        ))}
      </div>

    </section>
  );
}
