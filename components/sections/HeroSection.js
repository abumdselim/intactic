import { useState, useEffect, useCallback } from 'react';
import { heroSlides, trustLogos } from '../../data/contentData';
import styles from './HeroSection.module.css';

// Duplicate trust logos for seamless marquee loop
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
        {/* Background ambient glows */}
        <div className={styles.heroBgGlow1} aria-hidden="true" />
        <div className={styles.heroBgGlow2} aria-hidden="true" />

        {/* Slides Container */}
        <div className={styles.heroSlidesContainer}>
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`${styles.heroSlide} ${currentSlide === idx ? styles.active : ''}`}
              aria-hidden={currentSlide !== idx}
            >
              <div className={styles.heroSlideInner}>
                {/* ── Left: Text Column ── */}
                <div className={styles.heroTextCol}>
                  <span className={styles.heroBadge}>
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

                  {/* Slide stats row */}
                  <div className={styles.heroStatsRow}>
                    {slide.stats.map((stat, si) => (
                      <div key={si} className={styles.heroStatItem}>
                        <span className={styles.heroStatNum}>{stat.num}</span>
                        <span className={styles.heroStatLbl}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Right: Visual Column ── */}
                <div className={styles.heroImgCol} aria-hidden="true">
                  <div className={styles.heroVisualWrap}>

                    {/* Main dashboard card */}
                    <div className={styles.visualCard}>
                      {/* Top browser bar */}
                      <div className={styles.vcBrowserBar}>
                        <div className={styles.vcDots}>
                          <span className={styles.vcDot} style={{ background: '#FF5F57' }} />
                          <span className={styles.vcDot} style={{ background: '#FFBD2E' }} />
                          <span className={styles.vcDot} style={{ background: '#28CA41' }} />
                        </div>
                        <div className={styles.vcUrlBar}>intactic.com/dashboard</div>
                      </div>

                      {/* Dashboard body */}
                      <div className={styles.vcBody}>
                        {/* Metrics row */}
                        <div className={styles.vcMetricsRow}>
                          {slide.stats.map((s, i) => (
                            <div key={i} className={styles.vcMetric}>
                              <span className={styles.vcMetricNum}>{s.num}</span>
                              <span className={styles.vcMetricLbl}>{s.label}</span>
                            </div>
                          ))}
                          <div className={styles.vcMetric}>
                            <span className={styles.vcMetricNum}>12+</span>
                            <span className={styles.vcMetricLbl}>Yrs Experience</span>
                          </div>
                        </div>

                        {/* Animated bar chart */}
                        <div className={styles.vcChart}>
                          {[65, 80, 55, 90, 70, 95, 60].map((h, i) => (
                            <div key={i} className={styles.vcBar} style={{ '--bar-h': h + '%', '--bar-delay': (i * 0.08) + 's' }} />
                          ))}
                        </div>

                        {/* Activity feed */}
                        <div className={styles.vcFeed}>
                          <div className={`${styles.vcFeedItem} ${styles.vcFeedItemBlue}`}>
                            <i className="fa-solid fa-circle-check" />
                            <span>Product shipped — on schedule</span>
                          </div>
                          <div className={`${styles.vcFeedItem} ${styles.vcFeedItemGreen}`}>
                            <i className="fa-solid fa-bolt" />
                            <span>Build pipeline successful</span>
                          </div>
                          <div className={`${styles.vcFeedItem} ${styles.vcFeedItemAmber}`}>
                            <i className="fa-solid fa-users" />
                            <span>New client onboarded</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating stack pills */}
                    <div className={`${styles.stackPill} ${styles.stackPill1}`}>
                      <i className="fa-brands fa-react" />
                      <span>React</span>
                    </div>
                    <div className={`${styles.stackPill} ${styles.stackPill2}`}>
                      <i className="fa-brands fa-node-js" />
                      <span>Node.js</span>
                    </div>
                    <div className={`${styles.stackPill} ${styles.stackPill3}`}>
                      <i className="fa-brands fa-python" />
                      <span>Python / AI</span>
                    </div>

                    {/* Pulse ring */}
                    <div className={styles.pulseRing} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Prev / Next Arrows */}
          <button
            className={`${styles.heroArrow} ${styles.heroArrowLeft}`}
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            className={`${styles.heroArrow} ${styles.heroArrowRight}`}
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>

          {/* Slide indicator dots */}
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

        {/* ── Trust / Client Logo Bar ── */}
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

      {/* ── Hero → Capabilities wave bridge ── */}
      <div className={styles.heroWaveBridge} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </>
  );
}
