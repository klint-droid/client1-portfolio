import React, { useState, useEffect, useId } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconMail,
  IconPhone,
  IconCopy,
  IconCheckCircle,
  IconExternalLink,
  IconCalendar,
  IconDownload,
} from './Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillSubject?: string;
  prefillMessage?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefillSubject = '',
  prefillMessage = '',
}) => {
  const { personal } = portfolioData;
  const nameFieldId = useId();
  const emailFieldId = useId();
  const portfolioFieldId = useId();
  const messageFieldId = useId();

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolioSize: '10-50 properties',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillMessage) {
      setFormData((prev) => ({ ...prev, message: prefillMessage }));
    }
  }, [prefillMessage]);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open mailto link as fallback
    const subject = encodeURIComponent(
      prefillSubject || `Inquiry from ${formData.name || 'Property Principal'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPortfolio Size: ${formData.portfolioSize}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(12, 35, 23, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '1.75rem',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-medium)',
          padding: '2.5rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Contact Dialog"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-warm-tint)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span className="pill-badge green" style={{ marginBottom: '0.65rem' }}>
            <IconCalendar size={14} /> Quick Consultation
          </span>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
            Connect with Lauren Joyce Tugadi
          </h3>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
            Available for full-time or dedicated retainer operations across Australian & global property management teams.
          </p>
        </div>

        {/* Direct Contact Quick Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.85rem',
            marginBottom: '2rem',
            padding: '1rem',
            backgroundColor: 'var(--bg-warm-tint)',
            borderRadius: '1rem',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {/* Email */}
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Direct Email
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                {personal.email}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(personal.email, 'email')}
                title="Copy Email"
                style={{ color: 'var(--green-900)', cursor: 'pointer' }}
              >
                {copiedField === 'email' ? <IconCheckCircle size={15} /> : <IconCopy size={15} />}
              </button>
            </div>
            {copiedField === 'email' && (
              <span style={{ fontSize: '0.72rem', color: 'var(--green-800)', fontWeight: 600 }}>Copied!</span>
            )}
          </div>

          {/* Phone */}
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <IconPhone size={13} />
              <span>Phone / WhatsApp</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                {personal.phone}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(personal.phone, 'phone')}
                title="Copy Phone"
                style={{ color: 'var(--green-900)', cursor: 'pointer' }}
              >
                {copiedField === 'phone' ? <IconCheckCircle size={15} /> : <IconCopy size={15} />}
              </button>
            </div>
            {copiedField === 'phone' && (
              <span style={{ fontSize: '0.72rem', color: 'var(--green-800)', fontWeight: 600 }}>Copied!</span>
            )}
          </div>

          {/* LinkedIn */}
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Professional Network
            </div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--green-900)',
                marginTop: '0.2rem',
              }}
            >
              <span>LinkedIn Profile</span>
              <IconExternalLink size={13} />
            </a>
          </div>

          {/* Official Resume */}
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Official Resume
            </div>
            <a
              href="/Lauren_Joyce_Tugadi_Resume.pdf"
              download="Lauren_Joyce_Tugadi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--green-900)',
                marginTop: '0.2rem',
              }}
            >
              <span>Download PDF</span>
              <IconDownload size={13} />
            </a>
          </div>
        </div>

        {/* Submission Confirmation */}
        {submitted ? (
          <div
            style={{
              padding: '2rem',
              textAlign: 'center',
              backgroundColor: 'var(--green-50)',
              border: '1px solid var(--green-border)',
              borderRadius: '1rem',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--green-100)',
                color: 'var(--green-900)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
              }}
            >
              <IconCheckCircle size={26} />
            </div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
              Message Ready to Dispatch
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Your default email client has opened with your inquiry pre-filled. You can also reach out directly to{' '}
              <strong>{personal.email}</strong> or on WhatsApp at <strong>{personal.phone}</strong>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.88rem' }}
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-cols">
              <div>
                <label
                  htmlFor={nameFieldId}
                  style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}
                >
                  Your Name / Agency
                </label>
                <input
                  id={nameFieldId}
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins (Coast & Country Stays)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.9rem',
                    backgroundColor: 'var(--bg-canvas)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor={emailFieldId}
                  style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}
                >
                  Your Business Email
                </label>
                <input
                  id={emailFieldId}
                  type="email"
                  required
                  placeholder="sarah@example.com.au"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.9rem',
                    backgroundColor: 'var(--bg-canvas)',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor={portfolioFieldId}
                style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}
              >
                Portfolio Model & Scope
              </label>
              <select
                id={portfolioFieldId}
                value={formData.portfolioSize}
                onChange={(e) => setFormData({ ...formData, portfolioSize: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9rem',
                  backgroundColor: 'var(--bg-canvas)',
                  outline: 'none',
                }}
              >
                <option value="1-15 Boutique Holiday Homes">1-15 Boutique Holiday Homes / Short-Term Rentals</option>
                <option value="16-50 Active Listings (OTAs & STRA)">16-50 Active Listings (Homhero, PriceLabs, STRA)</option>
                <option value="50-150+ Enterprise Holiday Home Portfolio">50-150+ Enterprise Holiday Home Portfolio</option>
                <option value="Real Estate Sales & Property Management">Real Estate Sales & Property Management</option>
                <option value="Back-Office Invoicing & Vendor Auditing">Back-Office Invoicing & Vendor Auditing Focus</option>
              </select>
            </div>

            <div>
              <label
                htmlFor={messageFieldId}
                style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}
              >
                Project Context / Requirements
              </label>
              <textarea
                id={messageFieldId}
                rows={4}
                required
                placeholder="Tell Lauren about your current systems (Homhero, PriceLabs, etc.), your timezone requirements, and priority operational bottlenecks..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.9rem',
                  backgroundColor: 'var(--bg-canvas)',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: '0.9rem', width: '100%', fontSize: '0.95rem' }}
            >
              <IconMail size={18} />
              <span>Send Inquiry to Lauren</span>
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
