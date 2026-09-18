import React, { useState, useId } from 'react';
import {
  IconClock,
  IconUsers,
  IconArrowRight,
  IconSparkles,
} from './Icons';

interface WorkloadCalculatorProps {
  onCustomInquiry: (details: string) => void;
}

export const WorkloadCalculator: React.FC<WorkloadCalculatorProps> = ({ onCustomInquiry }) => {
  // Configurable input states with requested defaults
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(21.5);
  const [localRate, setLocalRate] = useState<number>(35);
  const [vaRate, setVaRate] = useState<number>(15);

  const peopleSliderId = useId();
  const hoursSliderId = useId();
  const daysSliderId = useId();
  const localRateId = useId();
  const vaRateId = useId();

  // Core calculations
  const totalMonthlyHours = Math.round(peopleCount * hoursPerDay * daysPerMonth);
  const weeklyHours = Math.round((peopleCount * hoursPerDay * daysPerMonth) / 4.3);
  const dailyTotalHours = peopleCount * hoursPerDay;

  const validLocalRate = Math.max(0, localRate || 0);
  const validVaRate = Math.max(0, vaRate || 0);

  const localCost = Math.round(totalMonthlyHours * validLocalRate);
  const vaCost = Math.round(totalMonthlyHours * validVaRate);
  const costDifference = localCost - vaCost;

  const formatAUD = (val: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleInquire = () => {
    const summary = `Administrative Capacity Analysis: ${peopleCount} people @ ${hoursPerDay} hrs/day (${totalMonthlyHours} hrs/month). Comparing estimated local staff cost (${formatAUD(localCost)}/mo @ A$${validLocalRate}/hr) with VA support (${formatAUD(vaCost)}/mo @ A$${validVaRate}/hr). Potential difference: ${formatAUD(costDifference)}/mo.`;
    onCustomInquiry(summary);
  };

  return (
    <section id="calculator" className="section-padding" style={{ backgroundColor: 'var(--bg-warm-tint)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-caption">Administrative Capacity & Cost Estimator</span>
          <h2>The Cost of Doing It Yourself</h2>
          <p>
            Evaluate how much internal capacity your business spends on day-to-day administrative tasks, and compare the estimated cost of handling those hours internally versus partnering with an experienced Virtual Assistant.
          </p>
        </div>

        <div
          style={{
            maxWidth: '1060px',
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
              alignItems: 'stretch',
            }}
            className="calculator-grid"
          >
            {/* Controls Side */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--green-900)', marginBottom: '0.35rem' }}>
                    Input Your Team Parameters
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Customize each variable to reflect your current administrative structure.
                  </div>
                </div>

                {/* 1. Number of People Handling Admin */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.65rem' }}>
                    <label
                      htmlFor={peopleSliderId}
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: 'var(--text-heading)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                      }}
                    >
                      <IconUsers size={16} /> People Handling Admin
                    </label>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        color: 'var(--green-900)',
                      }}
                    >
                      {peopleCount} {peopleCount === 1 ? 'Person' : 'People'}
                    </span>
                  </div>

                  <input
                    id={peopleSliderId}
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={peopleCount}
                    onChange={(e) => setPeopleCount(parseInt(e.target.value, 10))}
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '5px',
                      accentColor: 'var(--green-800)',
                      cursor: 'pointer',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-tertiary)', marginTop: '0.35rem' }}>
                    <span>1 Solo / Founder</span>
                    <span>2 People (Example)</span>
                    <span>6+ Team Members</span>
                  </div>
                </div>

                {/* 2. Admin Hours Per Person Per Day */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.65rem' }}>
                    <label
                      htmlFor={hoursSliderId}
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: 'var(--text-heading)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                      }}
                    >
                      <IconClock size={16} /> Admin Hours / Person / Day
                    </label>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        color: 'var(--green-900)',
                      }}
                    >
                      {hoursPerDay} {hoursPerDay === 1 ? 'hr' : 'hrs'} / day
                    </span>
                  </div>

                  <input
                    id={hoursSliderId}
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '5px',
                      accentColor: 'var(--green-800)',
                      cursor: 'pointer',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-tertiary)', marginTop: '0.35rem' }}>
                    <span>1 hr (Part-Time Triage)</span>
                    <span>8 hrs (Full Dedicated)</span>
                    <span>10 hrs</span>
                  </div>
                </div>

                {/* 3. Working Days Per Month */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.65rem' }}>
                    <label
                      htmlFor={daysSliderId}
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: 'var(--text-heading)',
                      }}
                    >
                      Working Days / Month
                    </label>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        color: 'var(--green-900)',
                      }}
                    >
                      {daysPerMonth} days
                    </span>
                  </div>

                  <input
                    id={daysSliderId}
                    type="range"
                    min="16"
                    max="26"
                    step="0.5"
                    value={daysPerMonth}
                    onChange={(e) => setDaysPerMonth(parseFloat(e.target.value))}
                    style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '5px',
                      accentColor: 'var(--green-800)',
                      cursor: 'pointer',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-tertiary)', marginTop: '0.35rem' }}>
                    <span>16 Days</span>
                    <span>21.5 Days (Standard AU Month)</span>
                    <span>26 Days</span>
                  </div>
                </div>

                {/* 4 & 5. Rates Row (Editable Inputs) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                    gap: '1.25rem',
                    padding: '1.25rem',
                    backgroundColor: 'var(--bg-warm-tint)',
                    borderRadius: '1rem',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {/* Local Rate */}
                  <div>
                    <label
                      htmlFor={localRateId}
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--text-heading)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Estimated Local Rate
                    </label>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <span
                        style={{
                          position: 'absolute',
                          left: '0.85rem',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        A$
                      </span>
                      <input
                        id={localRateId}
                        type="number"
                        min="15"
                        max="150"
                        step="1"
                        value={localRate}
                        onChange={(e) => setLocalRate(parseFloat(e.target.value) || 0)}
                        style={{
                          width: '100%',
                          padding: '0.65rem 2.2rem 0.65rem 2.3rem',
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          borderRadius: '8px',
                          border: '1px solid var(--border-medium)',
                          backgroundColor: '#ffffff',
                          color: 'var(--text-heading)',
                          outline: 'none',
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          right: '0.75rem',
                          fontSize: '0.78rem',
                          color: 'var(--text-tertiary)',
                          fontWeight: 600,
                        }}
                      >
                        /hr
                      </span>
                    </div>
                    <div style={{ fontSize: '0.71rem', color: 'var(--text-tertiary)', marginTop: '0.35rem', lineHeight: 1.3 }}>
                      Illustrative example (local employee or internal overhead)
                    </div>
                  </div>

                  {/* VA Support Rate */}
                  <div>
                    <label
                      htmlFor={vaRateId}
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--green-900)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      Estimated VA Rate
                    </label>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <span
                        style={{
                          position: 'absolute',
                          left: '0.85rem',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          color: 'var(--green-800)',
                        }}
                      >
                        A$
                      </span>
                      <input
                        id={vaRateId}
                        type="number"
                        min="8"
                        max="80"
                        step="1"
                        value={vaRate}
                        onChange={(e) => setVaRate(parseFloat(e.target.value) || 0)}
                        style={{
                          width: '100%',
                          padding: '0.65rem 2.2rem 0.65rem 2.3rem',
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          borderRadius: '8px',
                          border: '2px solid var(--green-600)',
                          backgroundColor: '#ffffff',
                          color: 'var(--green-950)',
                          outline: 'none',
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          right: '0.75rem',
                          fontSize: '0.78rem',
                          color: 'var(--green-800)',
                          fontWeight: 600,
                        }}
                      >
                        /hr
                      </span>
                    </div>
                    <div style={{ fontSize: '0.71rem', color: 'var(--text-tertiary)', marginTop: '0.35rem', lineHeight: 1.3 }}>
                      Customizable hourly rate for dedicated specialist support
                    </div>
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
                padding: '2.5rem',
              }}
            >
              <div>
                {/* Badge & Positioning Statement */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span className="pill-badge gold" style={{ fontSize: '0.75rem' }}>
                    <IconSparkles size={13} /> Internal Capacity & Cost Analysis
                  </span>
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--gold-400)', fontWeight: 600, marginBottom: '1.25rem', lineHeight: 1.45 }}>
                  Get experienced administrative, executive, and operational support without the overhead of hiring locally.
                </div>

                {/* Primary Metric: Administrative Hours Involved */}
                <div
                  style={{
                    padding: '1.25rem 1.4rem',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                    Administrative Hours Involved
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.8rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.1,
                      marginTop: '0.3rem',
                    }}
                  >
                    {totalMonthlyHours.toLocaleString()}{' '}
                    <span style={{ fontSize: '1.15rem', fontWeight: 400, color: 'var(--gold-400)' }}>
                      hours / month
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)', marginTop: '0.45rem' }}>
                    Equivalent to ~{weeklyHours} hrs/wk across your team (~{dailyTotalHours} hrs daily)
                  </div>
                </div>

                {/* Financial Comparison Panel */}
                <div
                  style={{
                    borderRadius: '14px',
                    backgroundColor: 'rgba(0, 0, 0, 0.22)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '1.25rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Local Staff Cost */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-on-dark-muted)' }}>
                        Estimated Cost Using Local Staff
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                        At A${validLocalRate}/hr illustrative rate
                      </div>
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                      {formatAUD(localCost)}
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)', fontWeight: 400 }}>/mo</span>
                    </div>
                  </div>

                  {/* VA Support Cost */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--gold-400)', fontWeight: 600 }}>
                        Estimated Cost With VA Support
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                        At A${validVaRate}/hr dedicated specialist rate
                      </div>
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                      {formatAUD(vaCost)}
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)', fontWeight: 400 }}>/mo</span>
                    </div>
                  </div>

                  {/* Potential Cost Difference */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(74, 222, 128, 0.12)',
                      border: '1px solid rgba(74, 222, 128, 0.25)',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4ade80' }}>
                        Potential Cost Difference
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                        Estimated difference in monthly labour spend
                      </div>
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#4ade80' }}>
                      {costDifference >= 0 ? formatAUD(costDifference) : `-${formatAUD(Math.abs(costDifference))}`}
                      <span style={{ fontSize: '0.72rem', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)' }}>/mo</span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div
                  style={{
                    fontSize: '0.71rem',
                    color: 'rgba(255, 255, 255, 0.55)',
                    lineHeight: 1.45,
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                  }}
                >
                  “Illustrative comparison only. Actual costs vary depending on employment arrangements, responsibilities, experience, hours, and applicable Australian employment costs.”
                </div>
              </div>

              {/* Call-to-Action Section */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '1.25rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.85rem',
                    textAlign: 'center',
                  }}
                >
                  What could your team do with that time back?
                </div>

                <button
                  type="button"
                  onClick={handleInquire}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--gold-500)',
                    color: 'var(--green-950)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    padding: '0.95rem 1.25rem',
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.55rem',
                    transition: 'background-color 0.2s, transform 0.2s',
                    boxShadow: '0 4px 18px rgba(197, 155, 83, 0.4)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--gold-400)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--gold-500)')}
                >
                  <span>Let’s Talk About Your Support Needs</span>
                  <IconArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 920px) {
          .calculator-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
};
