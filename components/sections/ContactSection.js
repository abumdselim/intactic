import { useState } from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', nda: false });
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldName = id.replace('form-', '');
    setFormData((prev) => ({ ...prev, [fieldName]: type === 'checkbox' ? checked : value }));
    setFormErrors((prev) => ({ ...prev, [fieldName]: false }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errors.email = true;
    if (!formData.message.trim()) errors.message = true;
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setShowSuccess(true);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
    setFormData({ name: '', email: '', company: '', message: '', nda: false });
  };

  return (
    <section className={styles['contact-section']} id="contact">
      <div className={styles['contact-bg-shapes']}>
        <div className={styles['contact-shape-1']}></div>
        <div className={styles['contact-shape-2']}></div>
      </div>
      <div className={`section-container ${styles['contact-container']}`}>
        <div className={styles['contact-info']}>
          <span className="section-pretitle">Start Your Journey</span>
          <h2>Ready to Scale<br />Your Team?</h2>
          <p>Tell us about your project requirements, technology stacks, or resource needs. An engineering lead will coordinate a review feedback document within 24 hours.</p>

          <div className={styles['contact-social-row']}>
            {[
              { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/company/intactic' },
              { icon: 'fa-brands fa-facebook', href: 'https://www.facebook.com/intactic' },
              { icon: 'fa-brands fa-twitter', href: 'https://twitter.com/intactic' },
              { icon: 'fa-brands fa-youtube', href: 'https://www.youtube.com/@intactic' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={styles['contact-social-btn']}>
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className={styles['contact-form-wrapper']}>
          <form id="lead-form" className={styles['lead-form']} onSubmit={handleFormSubmit} noValidate>
            <div className={styles['form-row']}>
              <div className={`${styles['form-group']} ${formErrors.name ? styles['invalid'] : ''}`}>
                <label htmlFor="form-name">Name *</label>
                <input type="text" id="form-name" required placeholder="John Doe" value={formData.name} onChange={handleInputChange} />
                <span className={styles['error-msg']}>Please enter your name</span>
              </div>
              <div className={`${styles['form-group']} ${formErrors.email ? styles['invalid'] : ''}`}>
                <label htmlFor="form-email">Work Email *</label>
                <input type="email" id="form-email" required placeholder="john@company.com" value={formData.email} onChange={handleInputChange} />
                <span className={styles['error-msg']}>Please enter a valid email</span>
              </div>
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="form-company">Organization</label>
              <input type="text" id="form-company" placeholder="e.g. Enterprise Ltd" value={formData.company} onChange={handleInputChange} />
            </div>
            <div className={`${styles['form-group']} ${formErrors.message ? styles['invalid'] : ''}`}>
              <label htmlFor="form-message">Project Description *</label>
              <textarea id="form-message" required placeholder="Outline your project scope, timeline, and required tech stacks..." value={formData.message} onChange={handleInputChange}></textarea>
              <span className={styles['error-msg']}>Please describe your project</span>
            </div>

            <div className={styles['nda-toggle-group']}>
              <label className={styles['toggle-switch']}>
                <input type="checkbox" id="form-nda" checked={formData.nda} onChange={handleInputChange} />
                <span className={styles['toggle-slider']}></span>
              </label>
              <span className={styles['toggle-label']}>We require a Mutual NDA prior to project sharing</span>
            </div>
            <button type="submit" className={styles['submit-btn']}>
              <span>Submit Project Inquiry</span> <i className="fa-solid fa-paper-plane"></i>
            </button>
            {showSuccess && (
              <div className={`${styles['form-success-overlay']} ${styles['active']}`} id="form-success-msg">
                <div className={styles['success-content']}>
                  <i className="fa-solid fa-circle-check"></i>
                  <h3>Thank you!</h3>
                  <p>Your project details have been successfully received. We will respond within 24 hours.</p>
                  <button type="button" className="btn btn-primary" id="success-close" onClick={closeSuccessModal}>Done</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

