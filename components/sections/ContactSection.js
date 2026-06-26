import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', budget: 25000, nda: true });
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
    setFormData({ name: '', email: '', company: '', message: '', budget: 25000, nda: true });
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="section-container">
          <div className="contact-layout">
            <div className="contact-info">
              <span className="section-pretitle">Start Your Project</span>
              <h2 className="section-title">Let’s Build Something<br />Extraordinary.</h2>
              <p className="contact-desc">Ready to scale your engineering output? Schedule a free discovery call or send us your project details. We typically respond within 4 hours.</p>
              
              <div className="contact-methods">
                <div className="method-card">
                  <i className="fa-solid fa-envelope"></i>
                  <div>
                    <h5>Email Us</h5>
                    <a href="mailto:sales@intactic.com">sales@intactic.com</a>
                  </div>
                </div>
                <div className="method-card">
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <h5>Call Us</h5>
                    <a href="tel:+8801908852332">+8801908852332</a>
                  </div>
                </div>
                <div className="method-card">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h5>Headquarters</h5>
                    <span>House-36, Road-04, Block-C, Banani, Dhaka-1213</span>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h5>Connect with us:</h5>
                <div className="social-icons-row">
                  <a href="https://linkedin.com/company/intactic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="https://twitter.com/intactic" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href="https://facebook.com/intactic" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              <div className="form-card">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleFormSubmit} noValidate>
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="form-name">Full Name *</label>
                      <input type="text" id="form-name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} className={formErrors.name ? 'error' : ''} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="form-email">Work Email *</label>
                      <input type="email" id="form-email" placeholder="john@company.com" value={formData.email} onChange={handleInputChange} className={formErrors.email ? 'error' : ''} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-company">Company Name</label>
                    <input type="text" id="form-company" placeholder="Acme Corp" value={formData.company} onChange={handleInputChange} />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="form-budget">Estimated Budget (USD): ${formData.budget.toLocaleString()}</label>
                    <input type="range" id="form-budget" min="5000" max="250000" step="5000" value={formData.budget} onChange={handleInputChange} className="budget-slider" />
                    <div className="slider-labels">
                      <span>$5k</span>
                      <span>$250k+</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-message">Project Details *</label>
                    <textarea id="form-message" rows="4" placeholder="Tell us about your goals, timeline, and tech requirements..." value={formData.message} onChange={handleInputChange} className={formErrors.message ? 'error' : ''}></textarea>
                  </div>

                  <div className="form-checkbox">
                    <input type="checkbox" id="form-nda" checked={formData.nda} onChange={handleInputChange} />
                    <label htmlFor="form-nda">I require a Non-Disclosure Agreement (NDA) before sharing details.</label>
                  </div>

                  <button type="submit" className="btn-submit-form">
                    Submit Inquiry <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="success-modal-overlay" onClick={closeSuccessModal}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon"><i className="fa-solid fa-circle-check"></i></div>
            <h3>Message Received!</h3>
            <p>Thank you for reaching out. An Intactic Innovations representative will contact you within the next 4 hours.</p>
            <button className="btn-hero-primary" onClick={closeSuccessModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
