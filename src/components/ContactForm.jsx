import { useState } from 'react';
import Icon from './Icon';

const initial = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactForm({ dark = true, compact = false }) {
  const [values, setValues] = useState(initial);
  const [sent, setSent] = useState(false);

  const update = (field) => (event) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    setValues(initial);
  };

  return (
    <form
      className={`contact-form${dark ? ' contact-form--dark' : ''}${
        compact ? ' contact-form--compact' : ''
      }`}
      onSubmit={submit}
      data-reveal
    >
      {sent && (
        <div className="contact-form__success" role="status">
          <Icon name="circleCheck" />
          Thank you — your message is on its way. We&apos;ll reply within one
          business day.
        </div>
      )}
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="contact-name">Full name *</label>
          <input
            id="contact-name"
            type="text"
            value={values.name}
            onChange={update('name')}
            placeholder="Full name *"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email address *</label>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={update('email')}
            placeholder="Email address *"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-phone">Phone number *</label>
          <input
            id="contact-phone"
            type="tel"
            value={values.phone}
            onChange={update('phone')}
            placeholder="Phone number *"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-subject">How can we help? *</label>
          <div className="select-wrap">
            <select
              id="contact-subject"
              value={values.subject}
              onChange={update('subject')}
              required
            >
              <option value="">Choose a service</option>
              <option value="Business Strategy">Business Strategy</option>
              <option value="Customer Experience">Customer Experience</option>
              <option value="Sustainability and ESG">Sustainability and ESG</option>
              <option value="Training and Development">
                Training and Development
              </option>
              <option value="IT Support">IT Support &amp; Maintenance</option>
              <option value="Marketing Strategy">Marketing Strategy</option>
            </select>
            <Icon name="chevronDown" size={16} />
          </div>
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="contact-message">Message *</label>
          <textarea
            id="contact-message"
            rows={compact ? 4 : 5}
            value={values.message}
            onChange={update('message')}
            placeholder="Tell us about your project *"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn--primary">
        <span className="btn__text">Send Message</span>
        <span className="btn__icon">
          <Icon name="arrowRight" />
        </span>
      </button>
    </form>
  );
}
