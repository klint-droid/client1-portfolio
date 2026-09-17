import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconHome,
  IconTrendingUp,
  IconGlobe,
  IconBuilding,
  IconUsers,
  IconMail,
  IconCheckCircle,
  IconShieldCheck,
  IconFileText,
  IconDollarSign,
  IconSparkles,
} from './Icons';

export const TechMatrix: React.FC = () => {
  const { tools } = portfolioData;
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Complete Ecosystem' },
    { id: 'pms', label: 'Property PMS & OTAs' },
    { id: 'crm', label: 'CRMs & Automation' },
    { id: 'compliance', label: 'Compliance & Finance' },
    { id: 'productivity', label: 'Productivity & Media' },
    { id: 'ai', label: 'AI Acceleration' },
  ];

  const filteredTools =
    filter === 'all' ? tools : tools.filter((t) => t.category === filter);

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <IconHome size={20} />;
      case 'TrendingUp':
        return <IconTrendingUp size={20} />;
      case 'Globe':
        return <IconGlobe size={20} />;
      case 'Building':
        return <IconBuilding size={20} />;
      case 'Users':
        return <IconUsers size={20} />;
      case 'Mail':
        return <IconMail size={20} />;
      case 'ShieldCheck':
        return <IconShieldCheck size={20} />;
      case 'FileText':
        return <IconFileText size={20} />;
      case 'DollarSign':
        return <IconDollarSign size={20} />;
      case 'Sparkles':
        return <IconSparkles size={20} />;
      default:
        return <IconCheckCircle size={20} />;
    }
  };

  return (
    <section id="systems" className="section-padding" style={{ backgroundColor: 'var(--bg-canvas)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="sub-caption">Software & Platform Fluency</span>
          <h2>A Modern, Battle-Tested Operations Stack</h2>
          <p>
            No lengthy software ramp-up periods. I step directly into your existing PMS, CRM, and accounting portals with established muscle memory.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? 'var(--green-900)' : 'var(--bg-surface)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--green-900)' : '1px solid var(--border-subtle)',
                  boxShadow: isActive ? '0 4px 12px rgba(19, 56, 38, 0.15)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '1rem',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.2s ease',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--green-border)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--green-50)',
                  color: 'var(--green-900)',
                  border: '1px solid var(--green-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {getToolIcon(tool.iconName)}
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-heading)' }}>
                  {tool.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  {tool.proficiency}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Callout */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.75rem 2.25rem',
            borderRadius: '1.25rem',
            backgroundColor: 'var(--bg-warm-tint)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: 'var(--green-800)', marginBottom: '0.25rem' }}>
              Academic Foundation
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-heading)' }}>
              Bachelor of Science in Psychology
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              San Beda University (2016) • Applied to guest de-escalation, conflict resolution, and cross-cultural team management.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <span className="pill-badge green">English: Fluent</span>
            <span className="pill-badge neutral">Filipino: Native / Fluent</span>
          </div>
        </div>
      </div>
    </section>
  );
};
