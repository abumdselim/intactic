import { useState, useEffect } from 'react';
import Image from 'next/image';
import { heroSlides } from '../../data/contentData';
import styles from './HeroSection.module.css';

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
    <section className={styles['hero-section']} id="hero">
      {/* Background mesh gradients */}
      <div className={styles['hero-bg-glow-1']} aria-hidden="true" />
      <div className={styles['hero-bg-glow-2']} aria-hidden="true" />

      <div className={styles['hero-slides-track']} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {heroSlides.map((slide, idx) => (
          <div key={idx} className={`${styles['hero-slide-full']} ${currentSlide === idx ? styles.active : ''}`}>
            <div className={styles['hero-slide-inner']}>
              <div className={styles['hero-text-col']}>
                <span className={styles['hero-badge']}>
                  <i className={slide.badge.icon}></i> {slide.badge.text}
                </span>
                <p className={styles['hero-sub']}>{slide.tag}</p>
                <h1 className={styles['hero-h1']}>
                  Build <span className="gradient-text">{slide.titleHighlight}</span> {slide.title.replace(slide.titleHighlight, '')}
                </h1>
                <p className={styles['hero-desc']}>{slide.desc}</p>
                <div className={styles['hero-cta-row']}>
                  <a href={slide.cta1.href} className={styles['btn-hero-primary']}>{slide.cta1.label} <i className="fa-solid fa-arrow-right-long"></i></a>
                  <a href="#services" className={styles['btn-hero-secondary']}>Explore Services <i className="fa-solid fa-angle-down"></i></a>
                </div>
              </div>
              
              <div className={styles['hero-img-col']}>
                <div className={styles['hero-visual-grid']}>
                  {/* Overlapping 3D Image Card 1 */}
                  <div className={`${styles['hero-card-stacked']} ${styles['hero-card-img-1']}`}>
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
                  <div className={`${styles['hero-card-stacked']} ${styles['hero-card-img-2']}`}>
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
                  <div className={`${styles['hero-card-stacked']} ${styles['hero-card-stat-1']}`}>
                    <span className={styles['hero-grid-stat-num']}>{slide.stats[0].num}</span>
                    <span className={styles['hero-grid-stat-lbl']}>{slide.stats[0].label}</span>
                  </div>
                  
                  {/* Stat Card 2 (Dark/Brand Glow) */}
                  <div className={`${styles['hero-card-stacked']} ${styles['hero-card-stat-2']}`}>
                    <span className={styles['hero-grid-stat-num']}>{slide.stats[1].num}</span>
                    <span className={styles['hero-grid-stat-lbl']}>{slide.stats[1].label}</span>
                  </div>

                  {/* Decorative Floating Tech Badges */}
                  <div className={`${styles['hero-floating-badge']} ${styles['badge-float-1']}`}>
                    <i className="fa-solid fa-brain"></i> AI & ML
                  </div>
                  <div className={`${styles['hero-floating-badge']} ${styles['badge-float-2']}`}>
                    <i className="fa-brands fa-aws"></i> Cloud Native
                  </div>
                  <div className={`${styles['hero-floating-badge']} ${styles['badge-float-3']}`}>
                    <i className="fa-solid fa-shield-halved"></i> ISO 27001
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className={`${styles['hero-arrow']} ${styles['hero-arrow-left']}`} onClick={handlePrevSlide} aria-label="Previous">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className={`${styles['hero-arrow']} ${styles['hero-arrow-right']}`} onClick={handleNextSlide} aria-label="Next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className={styles['hero-dots']}>
        {heroSlides.map((_, idx) => (
          <button key={idx} className={`${styles['hero-dot']} ${currentSlide === idx ? styles.active : ''}`} onClick={() => setCurrentSlide(idx)} aria-label={`Slide ${idx + 1}`}></button>
        ))}
      </div>

    </section>
  );
}

