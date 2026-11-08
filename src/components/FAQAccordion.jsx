import { useState } from 'react';
import Icon from './Icon';

export default function FAQAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            className={`accordion__item${isOpen ? ' is-open' : ''}`}
            key={item.q}
            data-reveal
          >
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="accordion__icon">
                <Icon name={isOpen ? 'close' : 'plus'} size={18} />
              </span>
            </button>
            <div className="accordion__panel" aria-hidden={!isOpen}>
              <div className="accordion__panel-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
