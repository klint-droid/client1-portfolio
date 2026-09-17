import React, { useState, useId } from 'react';
import {
  IconTrendingUp,
  IconCalendar,
  IconDollarSign,
  IconUsers,
  IconCheckCircle,
  IconArrowRight,
  IconSparkles,
} from './Icons';

interface WorkloadCalculatorProps {
  onCustomInquiry: (details: string) => void;
}

export const WorkloadCalculator: React.FC<WorkloadCalculatorProps> = ({ onCustomInquiry }) => {
  const [propertyCount, setPropertyCount] = useState<number>(45);
  const [portfolioType, setPortfolioType] = useState<'holiday-homes' | 'real-estate'>('holiday-homes');
  const propertySliderId = useId();

  // Dynamic calculations based on Lauren's real metrics from resume
  const hoursSavedWeekly = Math.min(
    40,
    Math.round(portfolioType === 'holiday-homes' ? propertyCount * 0.45 + 8 : propertyCount * 0.35 + 6)
  );

  const monthlyInvoices = Math.round(
    portfolioType === 'holiday-homes' ? propertyCount * 4.2 : propertyCount * 2.5
  );

  const monthlyTurnovers = Math.round(
    portfolioType === 'holiday-homes' ? propertyCount * 3.8 : propertyCount * 1.2
  );

  const monthlyGuestInquiries = Math.round(
    portfolioType === 'holiday-homes' ? propertyCount * 12 : propertyCount * 6
  );

  const handleInquire = () => {
    const summary = `Portfolio of ${propertyCount} properties (${portfolioType === 'holiday-homes' ? 'Holiday Homes / STRA' : 'Real Estate Agency'}). Estimated workload: ~${hoursSavedWeekly} hrs/wk.`;
    onCustomInquiry(summary);
  };

  return (
    <section id="calculator" className="section-padding" style={{ backgroundColor: 'var(--bg-warm-tint)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="sub-caption">Operational ROI Estimator</span>
          <h2>Calculate Your Back-Office Time Reclaimed</h2>
          <p>
            Estimate how much operational bandwidth, OTA sync time, and invoicing headache Lauren can take off your leadership team each month.
          </p>
        </div>

        <div
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '1.75rem',
            border: '1px solid var(--border-medium)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-lg)',
          }}
          className="calculator-container"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="calculator-grid"
          >
            {/* Controls Side */}
            <div>
              <div style={{ marginBottom: '1.75rem' }}>
                <label
                  htmlFor={propertySliderId}
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Portfolio Model
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => setPortfolioType('holiday-homes')}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      backgroundColor: portfolioType === 'holiday-homes' ? 'var(--green-900)' : 'var(--bg-warm-tint)',
                      color: portfolioType === 'holiday-homes' ? '#ffffff' : 'var(--text-primary)',
                      border: portfolioType === 'holiday-homes' ? '1px solid var(--green-900)' : '1px solid var(--border-subtle)',
                    }}
                  >
                    Holiday Homes / STRA
                  </button>
                  <button
                    type="button"
                    onClick={() => setPortfolioType('real-estate')}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      backgroundColor: portfolioType === 'real-estate' ? 'var(--green-900)' : 'var(--bg-warm-tint)',
                      color: portfolioType === 'real-estate' ? '#ffffff' : 'var(--text-primary)',
                      border: portfolioType === 'real-estate' ? '1px solid var(--green-900)' : '1px solid var(--border-subtle)',
                    }}
                  >
                    Real Estate Brokerage
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <label
                    htmlFor={propertySliderId}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                    }}
                  >
                    Active Portfolio Size:
                  </label>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'var(--green-900)',
                    }}
                  >
                    {propertyCount} {propertyCount === 1 ? 'Property' : 'Properties'}
                  </span>
                </div>

                <input
                  id={propertySliderId}
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={propertyCount}
                  onChange={(e) => setPropertyCount(parseInt(e.target.value, 10))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '5px',
                    accentColor: 'var(--green-800)',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.4rem' }}>
                  <span>5 Boutique Units</span>
                  <span>100 Units</span>
                  <span>250+ Enterprise Scale</span>
                </div>
              </div>

              {/* Scope Checklist Included */}
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                  Immediate Operational Coverage
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--green-700)' }}><IconCheckCircle size={15} /></span>
                    PriceLabs dynamic multi-channel rate pushes
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--green-700)' }}><IconCheckCircle size={15} /></span>
                    Homhero invoice validation & GST allocation
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--green-700)' }}><IconCheckCircle size={15} /></span>
                    Daily cleaning schedule coordination & turnarounds
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--green-700)' }}><IconCheckCircle size={15} /></span>
                    Regulatory audits (NSW STRA / Trakheesi / Ejari)
                  </div>
                </div>
              </div>
            </div>

            {/* Results Side (Green Luxury Card) */}
            <div
              className="green-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <span className="pill-badge gold" style={{ fontSize: '0.75rem' }}>
                    <IconSparkles size={13} /> Estimated Capacity
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-on-dark-muted)' }}>
                    Based on 8+ Yrs Actual Data
                  </span>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-on-dark-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Bandwidth Reclaimed Weekly
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '3.2rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.1,
                      marginTop: '0.2rem',
                    }}
                  >
                    ~{hoursSavedWeekly} <span style={{ fontSize: '1.35rem', fontWeight: 400, color: 'var(--gold-400)' }}>Hours / Week</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-on-dark-muted)', marginTop: '0.5rem' }}>
                    Time your leadership team redirects toward property acquisitions, landlord relationships, and growth.
                  </p>
                </div>

                {/* Monthly Volume Metric Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-400)', fontSize: '0.8rem' }}>
                      <IconDollarSign size={15} /> Monthly Invoices
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                      {monthlyInvoices}+
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>
                      Homhero & MYOB Audited
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-400)', fontSize: '0.8rem' }}>
                      <IconCalendar size={15} /> Monthly Turnovers
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                      {monthlyTurnovers}+
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>
                      Housekeeper Dispatches
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-400)', fontSize: '0.8rem' }}>
                      <IconUsers size={15} /> Guest Inquiries
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                      {monthlyGuestInquiries}+
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>
                      Triaged & Answered
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-400)', fontSize: '0.8rem' }}>
                      <IconTrendingUp size={15} /> Rate Adjustments
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                      Daily Sync
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>
                      PriceLabs & OTAs
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleInquire}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--gold-500)',
                  color: 'var(--green-950)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.9rem',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.2s, transform 0.2s',
                  boxShadow: '0 4px 15px rgba(197, 155, 83, 0.35)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--gold-400)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--gold-500)')}
              >
                <span>Discuss {propertyCount}-Property Management Scope</span>
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .calculator-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
};
