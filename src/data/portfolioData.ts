export interface Service {
  id: string;
  title: string;
  category: 'executive' | 'operations' | 'real-estate' | 'finance' | 'stra' | 'reservations';
  tagline: string;
  description: string;
  tools: string[];
  deliverables: string[];
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  role: string;
  type: string;
  summary: string;
  achievements: string[];
  toolsUsed: string[];
  highlightMetric: string;
}

export interface ToolItem {
  name: string;
  category: 'pms' | 'crm' | 'compliance' | 'productivity' | 'ai';
  proficiency: string;
  iconName: string;
}

export const portfolioData = {
  personal: {
    name: 'Lauren Joyce Tugadi',
    role: 'Executive Assistant & Operations Specialist',
    badge: 'Available for Australian (AEST / AEDT) & Global Property Teams',
    headline: 'Executive Assistant & Operations Specialist',
    subheadline: 'Administrative Support • Business Operations • Real Estate & Short-Term Rentals (STR)',
    bio:
      'Hi, I’m Lauren Joyce Tugadi. With 8+ years of experience supporting fast-paced businesses across Australia, Dubai, and the Philippines, I provide reliable executive, administrative, and operational support that keeps teams organised and moving. My experience spans real estate, short-term rentals, reservations, HR, and business administration, giving me a versatile administrative foundation and specialised expertise in high-volume property and short-term rental operations.',
    location: 'Biñan City, Laguna, Philippines',
    email: 'ljtugadi@gmail.com',
    phone: '+63 915 9777 653',
    linkedin: 'https://www.linkedin.com/in/lauren-tugadi',
    availability: 'Full-Time (40 hrs/wk) • Australian (AEST / AEDT) Hours',
    timezoneOffset: 'UTC+8 (Only 2 hrs behind Sydney/Melbourne AEST)',
    experienceYears: '8+',
    education: 'Bachelor of Science in Psychology, San Beda University (2016)',
  },

  metrics: [
    { label: 'Years Experience', value: '8+', caption: 'Supporting AU, UAE Property Firms' },
    { label: 'STR Properties Supported', value: '1,030+', caption: 'Holiday Homes & Rental Units' },
    { label: 'Guest Inquiries Daily', value: '40+', caption: 'Reservations/Sales & Customer Support' },
    { label: 'Weekly Invoices', value: '500+', caption: 'Finance & Administrative Support' },
    { label: 'Team Members Trained', value: '15+', caption: 'Reservations & Systems Onboarding' },
  ],

  services: [
    {
      id: 'executive-support',
      title: 'Executive & Administrative Support',
      category: 'executive',
      tagline: 'Streamlining Your Day-to-Day Priorities and Administration',
      description:
        'Providing reliable executive and administrative support that helps business owners and teams stay organised, responsive, and focused on higher-value priorities.',
      tools: ['Google Workspace', 'Microsoft Office', 'HubSpot', 'Slack', 'CRM Systems'],
      deliverables: [
        'Inbox and email management, follow-ups, and correspondence',
        'Calendar, scheduling, meeting, and appointment coordination',
        'Document preparation, data entry, and file management',
        'CRM updates, database maintenance, and information tracking',
        'Task coordination, reminders, and administrative follow-through',
        'SOP creation, process documentation, and team onboarding',
      ],
      badge: 'Executive Focus',
    },
    {
      id: 'operations-support',
      title: 'Operations & Business Support',
      category: 'operations',
      tagline: 'Coordinating the Moving Parts Behind Your Business',
      description:
        'Supporting day-to-day operations through coordination, process management, team support, and consistent follow-through across multiple priorities.',
      tools: ['Google Workspace', 'Microsoft Office', 'Slack', 'HubSpot', 'CRM Systems'],
      deliverables: [
        'Day-to-day operational and administrative coordination',
        'Cross-department communication and task follow-up',
        'Workflow and process documentation',
        'SOP development and process improvement',
        'Team onboarding, training, and system familiarisation',
        'Data tracking, reporting, and recurring operational tasks',
        'Coordination with internal teams, clients, and external providers',
      ],
      badge: 'Operations Core',
    },
    {
      id: 'real-estate-property',
      title: 'Real Estate & Property Administration',
      category: 'real-estate',
      tagline: 'Managing the Details Behind Property Operations',
      description:
        'Supporting real estate and short-term rental businesses with property administration, listing coordination, compliance documentation, and operational processes.',
      tools: [
        'Homhero',
        'Proprietary PMS',
        'PriceLabs',
        'Airbnb',
        'Booking.com',
        'Vrbo',
        'NSW STRA',
        'Trakheesi',
        'Ejari',
      ],
      deliverables: [
        'Short-term rental listing creation, updates, and multi-channel publishing',
        'Daily pricing and minimum-stay updates using PriceLabs',
        'NSW STRA registrations, renewals, and compliance tracking for 230+ properties',
        'Trakheesi advertising permits, Title Deed validation, and listing verification',
        'Ejari registration and processing of sales and rental documentation',
        'Turnover coordination and guest arrival readiness for 30+ properties',
      ],
      badge: 'Property Specialist',
    },
    {
      id: 'finance-backoffice',
      title: 'Financial Administration & Back-Office Support',
      category: 'finance',
      tagline: 'Handling the Details That Keep Finances and Administration on Track',
      description:
        'Supporting businesses with invoice processing, billing administration, vendor documentation, and recurring back-office tasks that require accuracy and attention to detail.',
      tools: ['Homhero', 'MYOB', 'ActiveCampaign', 'Google Sheets', 'Microsoft Office'],
      deliverables: [
        'Weekly processing and verification of 500+ third-party invoices',
        'Invoice matching, property assignment, and vendor documentation checks',
        'GST-related invoice review and creditor validation',
        'Monthly billing statements and owner invoices using MYOB',
        'Refund, payment, and finance-related administrative coordination',
        'Administrative support for recurring email marketing campaigns',
        'Spreadsheet maintenance, data tracking, and recurring reporting',
      ],
      badge: 'Zero Backlog',
    },
  ] as Service[],

  experience: [
    {
      id: 'phh-australia',
      company: 'Professional Holiday Homes',
      location: 'NSW, Australia',
      period: 'May 2024 - Present',
      role: 'Administrative Assistant (Holiday Home Operations)',
      type: 'Full-Time Remote',
      summary:
        'Key operational anchor overseeing STRA compliance, dynamic channel pricing, vendor billing, and listing onboarding across 230+ holiday homes along the NSW South Coast and regional hubs.',
      achievements: [
        'Oversees STRA registration and compliance requirements for 230+ properties, ensuring documentation and regulatory requirements are maintained and up to date.',
        'Manages daily pricing and availability for 230+ properties through PriceLabs, ensuring accurate rates and inventory are consistently synchronized across Airbnb, Booking.com, and VRBO.',
        'Processes 500+ third-party invoices weekly through Homhero, including uploading and verifying invoice details, assigning properties and creditors, validating amounts and GST.',
        'Handles the end-to-end onboarding of 5–10 properties monthly, including Homhero setup, listing creation, and OTA publishing.',
        'Coordinates daily turnover requirements for ~30 properties, communicating check-out and cleaning schedules to outsourced housekeeping teams.',
        'Creates and sends 10+ email marketing campaigns monthly using ActiveCampaign to promote available dates and drive direct bookings.',
        'Regularly generates invoices to property owners using MYOB.',
      ],
      toolsUsed: ['Homhero', 'PriceLabs', 'NSW STRA Portal', 'ActiveCampaign', 'MYOB', 'Airbnb', 'Booking.com', 'VRBO'],
      highlightMetric: '230+ Properties & 500+ Invoices/Week',
    },
    {
      id: 'deluxe-dubai',
      company: 'Deluxe Holiday Homes',
      location: 'Dubai, UAE',
      period: 'Feb 2018 - Sept 2026',
      role: 'Senior Reservations / Sales Agent & Team Trainer',
      type: 'Full-Time Remote',
      summary:
        'Frontline reservation management and operational leadership across Dubai’s largest premier holiday home portfolio exceeding 800 luxury apartments and villas.',
      achievements: [
        'Managed 50+ guest enquiries and reservations daily across an 800+ property portfolio, coordinating booking inquiries, pricing, and confirmations.',
        'Managed the main Reservations/Sales inbox, triaging 80+ emails daily, responding to inquiries, and routing to cross-functional departments.',
        'Maintained accurate guest records across HubSpot CRM and the company proprietary PMS for seamless interdepartmental alignment.',
        'Supervised a team of 8 Reservations/Sales Agents; trained and mentored 15+ agents on reservation SOPs, systems, and hospitality standards.',
        'Developed and implemented SOPs and training materials to standardize processes and accelerate new-hire onboarding efficiency.',
        'Handled escalated guest concerns, complex booking modifications, and payment refund requests in collaboration with Finance.',
        'Prepared daily KPI and scheduling reports to monitor team performance and ensure 24/7 guest coverage.',
      ],
      toolsUsed: ['HubSpot CRM', 'Proprietary PMS', 'Slack', 'Google Workspace', 'Zoom'],
      highlightMetric: '800+ Properties & 15+ Agents Mentored',
    },
    {
      id: 'westgate-dubai',
      company: 'West Gate Real Estate Broker',
      location: 'Dubai, UAE',
      period: 'Feb 2018 - Oct 2022',
      role: 'Administrative Secretary',
      type: 'Executive Support',
      summary:
        'Direct executive assistance to the General Manager and administration of Dubai real estate listings, licensing, contracts, and transactional conveyancing.',
      achievements: [
        'Managed end-to-end preparation and publication of property listings on MyCRM and Brokerpad with photographic and description audits.',
        'Coordinated Trakheesi permit applications with the Dubai Land Department, verifying Title Deeds, listing forms, and owner verification.',
        'Managed Ejari registration and lease agreement processing for residential and commercial leasing transactions.',
        'Processed and filed closed-deal documentation: tenancy contracts, agent-to-agent forms, invoices, receipts, and deposit cheques.',
        'Coordinated international executive travel itineraries, meeting schedules, visas, and GM correspondence.',
      ],
      toolsUsed: ['MyCRM', 'Brokerpad', 'Trakheesi', 'Ejari', 'Google Workspace'],
      highlightMetric: '100% Regulatory Compliance (Trakheesi/Ejari)',
    },
    {
      id: 'sterling-manila',
      company: 'Sterling Talent Solutions',
      location: 'Manila, Philippines',
      period: 'July 2017 - Jan 2018',
      role: 'Verifications Specialist',
      type: 'Background Screening Operations',
      summary:
        'Conducted rigorous employment, education, and credential verifications for North American clients with strict confidentiality standards.',
      achievements: [
        'Managed end-to-end background verification for 500+ Canadian candidates, validating credentials against regulatory standards.',
        'Cross-referenced candidate records with educational institutions, HR departments, and professional referees across North America.',
        'Maintained 99% data accuracy across 30–40 active verification cases per shift within tight SLA windows.',
      ],
      toolsUsed: ['Internal Screening PMS', 'Global Verification Databases', 'Telephone & Email Auditing'],
      highlightMetric: '99% Accuracy on 500+ Screenings',
    },
    {
      id: 'bonchon-manila',
      company: 'BonChon Chicken Philippines',
      location: 'Manila, Philippines',
      period: 'May 2016 - July 2017',
      role: 'HR Associate',
      type: 'Human Resources',
      summary:
        'Drafted labor policy frameworks, conducted orientations for 500+ employees, and managed compliance with Philippine labor standards.',
      achievements: [
        'Co-authored and launched the company Code of Discipline, drafting policies and delivering orientations to 500+ direct and agency staff.',
        'Supported Department of Labor and Employment (DOLE) statutory audits across store branches with zero compliance penalties.',
        'Facilitated biweekly new-hire onboarding programs, workplace standards, and dispute documentation.',
      ],
      toolsUsed: ['HRIS', 'Labor Standards Compliance', 'Microsoft Office'],
      highlightMetric: 'Trained 500+ Employees',
    },
  ] as ExperienceItem[],

  tools: [
    { name: 'Homhero', category: 'pms', proficiency: 'Advanced Power User', iconName: 'Home' },
    { name: 'PriceLabs', category: 'pms', proficiency: 'Dynamic Yield & Pricing', iconName: 'TrendingUp' },
    { name: 'Airbnb / VRBO / Booking', category: 'pms', proficiency: 'Channel Sync & OTAs', iconName: 'Globe' },
    { name: 'MyCRM & Brokerpad', category: 'pms', proficiency: 'Real Estate Listings', iconName: 'Building' },
    { name: 'HubSpot CRM', category: 'crm', proficiency: 'Pipeline & Guest Triage', iconName: 'Users' },
    { name: 'ActiveCampaign', category: 'crm', proficiency: 'Email Marketing & Drips', iconName: 'Mail' },
    { name: 'Process St', category: 'crm', proficiency: 'SOPs & Checklists', iconName: 'CheckSquare' },
    { name: 'NSW STRA Portal', category: 'compliance', proficiency: 'Australian STRA Standards', iconName: 'ShieldCheck' },
    { name: 'Trakheesi & Ejari', category: 'compliance', proficiency: 'Dubai Land Dept Compliance', iconName: 'FileText' },
    { name: 'MYOB', category: 'compliance', proficiency: 'Owner Invoicing & Billing', iconName: 'DollarSign' },
    { name: 'Google Workspace', category: 'productivity', proficiency: 'Sheets, Docs, Calendar, Drive', iconName: 'Cloud' },
    { name: 'Microsoft 365', category: 'productivity', proficiency: 'Excel, Word, Outlook', iconName: 'Layout' },
    { name: 'Slack & Trello', category: 'productivity', proficiency: 'Team Dispatch & Project Boards', iconName: 'MessageSquare' },
    { name: 'Canva & CapCut', category: 'productivity', proficiency: 'Property Marketing Assets', iconName: 'Image' },
    { name: 'ChatGPT & Claude', category: 'ai', proficiency: 'Listing Copy & Guest Scripting', iconName: 'Sparkles' },
  ] as ToolItem[],

  reliability: {
    title: 'Enterprise Remote Work Readiness',
    subtitle: 'Zero-Downtime Guarantee Built for Discerning Australian & International Principals',
    specs: [
      {
        title: 'Primary Internet',
        value: 'Globe Fiber 500 Mbps',
        sub: 'Ultra-low latency, ultra-fast download & upload speeds for large photo uploads and multi-channel synchronization.',
        badge: 'High Speed',
      },
      {
        title: 'Redundant Backup',
        value: 'Smart & GOMO 5G Hotspot',
        sub: 'Dual-carrier instant cellular failover in case of municipal fiber maintenance.',
        badge: 'Instant Failover',
      },
      {
        title: 'Power Continuity',
        value: 'Avidus UPS S110 (4-Hour Battery)',
        sub: 'Uninterruptible power backup keeping router, monitors, and workstation running without a minute of outage.',
        badge: 'Zero Outage',
      },
      {
        title: 'Hardware Workstation',
        value: 'Apple MacBook Air M3 + Dual Monitors',
        sub: 'High-performance multitasking setup with external dual screens for fast multi-tab CRM and calendar oversight.',
        badge: 'Modern Specs',
      },
      {
        title: 'Audio & Studio',
        value: 'Noise-Cancelling Headset + HD Cam',
        sub: 'Crystal-clear audio, zero background household noise, and a dedicated, professional home office backdrop.',
        badge: 'Client Ready',
      },
      {
        title: 'AEST Schedule',
        value: 'Flexible Across AU Timezones',
        sub: 'Immediate overlap with Sydney, Melbourne, Brisbane, and Dubai business hours for real-time collaboration.',
        badge: 'Timezone Aligned',
      },
    ],
  },

  faqs: [
    {
      q: 'How does your schedule align with Australian real estate businesses?',
      a: 'The Philippines (UTC+8) is only 2 hours behind Sydney / Melbourne (AEST/AEDT). I work during standard Australian business hours (e.g., 8:00 AM – 5:00 PM AEST) so your team and guests have real-time support without delay.',
    },
    {
      q: 'Can you work directly with our existing PMS and tech stack?',
      a: 'Yes! I have over 8 years of hands-on experience in Homhero, PriceLabs, HubSpot, ActiveCampaign, MYOB, and major OTA platforms (Airbnb, Booking.com, VRBO). I adapt swiftly to bespoke proprietary systems.',
    },
    {
      q: 'How do you handle invoice auditing and GST compliance?',
      a: 'At Professional Holiday Homes, I process over 500 invoices weekly in Homhero, verifying contractor charges, cross-referencing GST calculations, allocating costs to the exact property code, and preparing clean batches for MYOB payment.',
    },
    {
      q: 'What is your availability for new contracts?',
      a: 'I am available for full-time (40 hours/week) or dedicated retainer engagements with rapid onboarding within 2 to 5 business days.',
    },
  ],
};
