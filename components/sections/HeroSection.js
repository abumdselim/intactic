import { useState, useEffect, useCallback } from 'react';
import { heroSlides, trustLogos } from '../../data/contentData';
import styles from './HeroSection.module.css';

const marqueeLogos = [...trustLogos, ...trustLogos];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slidesCount = heroSlides.length;

  const goToSlide = useCallback((idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(idx);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const handlePrevSlide = () => goToSlide((currentSlide - 1 + slidesCount) % slidesCount);
  const handleNextSlide = () => goToSlide((currentSlide + 1) % slidesCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 6000);
    return () => clearInterval(interval);
  }, [slidesCount]);

  return (
    <>
      <section className={styles.heroSection} id="hero" aria-label="Hero">
        <div className={styles.heroBgGlow1} aria-hidden="true" />
        <div className={styles.heroBgGlow2} aria-hidden="true" />

        <div className={styles.heroSlidesContainer}>
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`${styles.heroSlide} ${currentSlide === idx ? styles.active : ''}`}
              aria-hidden={currentSlide !== idx}
            >
              <div className={styles.heroSlideInner}>

                {/* ── LEFT: Text Column ── */}
                <div className={styles.heroTextCol}>
                  <span className={styles.heroBadge} style={{ borderColor: slide.accent + '44', color: slide.accent, background: slide.accent + '12' }}>
                    <i className={slide.badge.icon} aria-hidden="true" />
                    {slide.badge.text}
                  </span>

                  <p className={styles.heroTag}>{slide.tag}</p>

                  <h1 className={styles.heroH1}>
                    {slide.preTitle}{' '}
                    <span className="gradient-text">{slide.highlightWord}</span>{' '}
                    {slide.postTitle}
                  </h1>

                  <p className={styles.heroDesc}>{slide.desc}</p>

                  <div className={styles.heroCtaRow}>
                    <a href={slide.cta1.href} className={styles.btnPrimary}>
                      {slide.cta1.label}
                      <i className="fa-solid fa-arrow-right-long" aria-hidden="true" />
                    </a>
                    <a href="#services" className={styles.btnSecondary}>
                      Explore Services
                      <i className="fa-solid fa-angle-down" aria-hidden="true" />
                    </a>
                  </div>

                  <div className={styles.heroStatsRow}>
                    {slide.stats.map((stat, si) => (
                      <div key={si} className={styles.heroStatItem}>
                        <span className={styles.heroStatNum} style={{ color: si === 0 ? slide.accent : undefined }}>{stat.num}</span>
                        <span className={styles.heroStatLbl}>{stat.label}</span>
                      </div>
                    ))}
                    <div className={styles.heroStatDivider} />
                    <div className={styles.heroStatItem}>
                      <span className={styles.heroStatNum}>12+</span>
                      <span className={styles.heroStatLbl}>Years Active</span>
                    </div>
                  </div>
                </div>

                {/* ── RIGHT: Visual Column ── */}
                <div className={styles.heroImgCol} aria-hidden="true">
                  <div className={styles.heroVisualWrap}>

                    {/* Decorative grid lines bg */}
                    <div className={styles.gridBg} />

                    {/* Main large image card */}
                    <div className={styles.mainImgCard} style={{ '--slide-accent': slide.accent }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.img1}
                        alt=""
                        className={styles.mainImg}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      {/* Gradient scrim at bottom */}
                      <div className={styles.mainImgScrim} style={{ background: `linear-gradient(to top, ${slide.accent}CC 0%, transparent 60%)` }} />

                      {/* Stat pill on image — top left */}
                      <div className={styles.imgBadgePill}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#22C55E' }} />
                        <span>Live & Deployed</span>
                      </div>
                    </div>

                    {/* Secondary image — bottom right, smaller */}
                    <div className={styles.secondaryImgCard}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.img2}
                        alt=""
                        className={styles.secondaryImg}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className={styles.secondaryImgOverlay} style={{ background: `linear-gradient(135deg, ${slide.accent}44 0%, transparent 70%)` }} />
                    </div>

                    {/* Glassmorphic stat card — top right */}
                    <div className={styles.glassStatCard}>
                      <div className={styles.glassStatIcon} style={{ background: slide.accent + '18', color: slide.accent }}>
                        <i className="fa-solid fa-chart-line" />
                      </div>
                      <span className={styles.glassStatNum} style={{ color: slide.accent }}>{slide.stats[0].num}</span>
                      <span className={styles.glassStatLbl}>{slide.stats[0].label}</span>
                    </div>

                    {/* Dark metric card — bottom left */}
                    <div className={styles.darkMetricCard}>
                      <div className={styles.darkMetricTop}>
                        <i className="fa-solid fa-star" style={{ color: '#FBAF32', fontSize: '0.8rem' }} />
                        <i className="fa-solid fa-star" style={{ color: '#FBAF32', fontSize: '0.8rem' }} />
                        <i className="fa-solid fa-star" style={{ color: '#FBAF32', fontSize: '0.8rem' }} />
                        <i className="fa-solid fa-star" style={{ color: '#FBAF32', fontSize: '0.8rem' }} />
                        <i className="fa-solid fa-star" style={{ color: '#FBAF32', fontSize: '0.8rem' }} />
                      </div>
                      <span className={styles.darkMetricNum}>{slide.stats[1].num}</span>
                      <span className={styles.darkMetricLbl}>{slide.stats[1].label}</span>
                    </div>

                    {/* Floating tech stack dot pills */}
                    <div className={`${styles.techPill} ${styles.techPill1}`}>
                      <i className="fa-brands fa-react" style={{ color: '#61DAFB' }} />
                      <span>React</span>
                    </div>
                    <div className={`${styles.techPill} ${styles.techPill2}`}>
                      <i className="fa-brands fa-node-js" style={{ color: '#68A063' }} />
                      <span>Node.js</span>
                    </div>
                    <div className={`${styles.techPill} ${styles.techPill3}`}>
                      <i className="fa-brands fa-python" style={{ color: '#3776AB' }} />
                      <span>AI / ML</span>
                    </div>

                    {/* Animated accent ring */}
                    <div className={styles.accentRing} style={{ borderColor: slide.accent + '22' }} />
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* Arrows */}
          <button className={`${styles.heroArrow} ${styles.heroArrowLeft}`} onClick={handlePrevSlide} aria-label="Previous slide">
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
          <button className={`${styles.heroArrow} ${styles.heroArrowRight}`} onClick={handleNextSlide} aria-label="Next slide">
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>

          {/* Dots */}
          <div className={styles.heroDots} role="tablist" aria-label="Slide indicators">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={currentSlide === idx}
                aria-label={`Go to slide ${idx + 1}`}
                className={`${styles.heroDot} ${currentSlide === idx ? styles.activeDot : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>

        {/* ── Trust Bar ── */}
        <div className={styles.trustBar} aria-label="Trusted by">
          <p className={styles.trustBarLabel}>Trusted by teams building products at</p>
          <div className={styles.marqueeContainer} aria-hidden="true">
            <div className={styles.marqueeTrack}>
              {marqueeLogos.map((logo, i) => (
                <div key={i} className={styles.trustLogoPill}>
                  <i className={logo.icon} />
                  <span>{logo.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave bridge */}
      <div className={styles.heroWaveBridge} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </>
  );
}
