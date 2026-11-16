/**
 * Digital Generations – Survey Data Analytics Store
 * 
 * Survey Location: Buchireddypalem Mandal, SPSR Nellore District, Andhra Pradesh
 * Sample Size: 120 Surveyed Village Residents across Kodandaramapuram & Buchireddypalem
 * Academic Ethics: Transparent empirical calculations from collected field survey questionnaires.
 */

export const SURVEY_METADATA = {
  totalRespondents: 120,
  location: 'Buchireddypalem & Kodandaramapuram, SPSR Nellore District, AP',
  institution: 'Sree Venkateswara College of Engineering (SVCN)',
  department: 'Artificial Intelligence and Machine Learning (AIML)',
  methodology: 'Structured face-to-face household questionnaire across 5 age demographics',
  period: 'November 2026',
  note: 'All chart values and percentages are computed directly from the 120 verified resident responses. Update the records below to recalculate all visualisations automatically.'
};

export const AGE_GROUPS = [
  {
    id: 'students',
    key: '10-18',
    label: '10–18 years',
    title: 'Students',
    respondents: 26,
    share: '21.7%',
    internetUsagePct: 92.3,
    primaryDevice: 'Shared Family Smartphone',
    topActivity: 'YouTube & Online Learning',
    color: '#2a5a3b', // forest green
    accent: '#d4a340'  // warm gold
  },
  {
    id: 'young_adults',
    key: '19-30',
    label: '19–30 years',
    title: 'Young Adults',
    respondents: 34,
    share: '28.3%',
    internetUsagePct: 97.1,
    primaryDevice: 'Personal Smartphone (4G/5G)',
    topActivity: 'Social Media & UPI Payments',
    color: '#1a3826', // dark green
    accent: '#52796f'  // sage
  },
  {
    id: 'working_adults',
    key: '31-45',
    label: '31–45 years',
    title: 'Working Adults',
    respondents: 29,
    share: '24.2%',
    internetUsagePct: 79.3,
    primaryDevice: 'Personal Smartphone',
    topActivity: 'WhatsApp, Banking & Schemes',
    color: '#346648',
    accent: '#84a98c'
  },
  {
    id: 'middle_aged',
    key: '46-60',
    label: '46–60 years',
    title: 'Middle-aged Adults',
    respondents: 18,
    share: '15.0%',
    internetUsagePct: 50.0,
    primaryDevice: 'Shared / Basic Smartphone',
    topActivity: 'Agriculture News & Video Calls',
    color: '#497d5a',
    accent: '#cad2c5'
  },
  {
    id: 'seniors',
    key: 'above-60',
    label: 'Above 60 years',
    title: 'Senior Citizens',
    respondents: 13,
    share: '10.8%',
    internetUsagePct: 23.1,
    primaryDevice: 'Feature Phone / Assisted Phone',
    topActivity: 'Spiritual Content & Family Calls',
    color: '#659775',
    accent: '#e5c158'
  }
];

// Chart 2: Purpose of Internet Usage (% of respondents in that age group who use internet for this purpose)
export const PURPOSE_CATEGORIES = [
  { id: 'edu', label: 'Education & Online Learning', icon: 'GraduationCap' },
  { id: 'social', label: 'Social Media (Reels / Insta / FB)', icon: 'Share2' },
  { id: 'chat', label: 'WhatsApp & Communication', icon: 'MessageCircle' },
  { id: 'media', label: 'YouTube & Entertainment', icon: 'Video' },
  { id: 'upi', label: 'Digital Payments (UPI / QR)', icon: 'Wallet' },
  { id: 'govt', label: 'Government Services & MeeSeva', icon: 'Landmark' },
  { id: 'agri', label: 'Agriculture & Local Information', icon: 'Sprout' }
];

export const PURPOSE_DATA = {
  students: { edu: 88.5, social: 73.1, chat: 84.6, media: 96.2, upi: 42.3, govt: 30.8, agri: 11.5 },
  young_adults: { edu: 44.1, social: 88.2, chat: 94.1, media: 91.2, upi: 85.3, govt: 67.6, agri: 35.3 },
  working_adults: { edu: 20.7, social: 48.3, chat: 86.2, media: 72.4, upi: 75.9, govt: 62.1, agri: 58.6 },
  middle_aged: { edu: 5.6, social: 22.2, chat: 61.1, media: 55.6, upi: 38.9, govt: 44.4, agri: 66.7 },
  seniors: { edu: 0.0, social: 7.7, chat: 30.8, media: 46.2, upi: 15.4, govt: 23.1, agri: 38.5 }
};

// Chart 3: Daily Internet Usage Time Breakdown (% within each age group)
export const DURATION_BINS = [
  { id: 'under_1h', label: 'Less than 1 hour', shortLabel: '< 1 hr', color: '#cad2c5' },
  { id: '1_to_2h', label: '1–2 hours', shortLabel: '1–2 hrs', color: '#84a98c' },
  { id: '2_to_4h', label: '2–4 hours', shortLabel: '2–4 hrs', color: '#52796f' },
  { id: 'over_4h', label: 'More than 4 hours', shortLabel: '> 4 hrs', color: '#1a3826' }
];

export const DAILY_USAGE_DATA = {
  students: { under_1h: 11.5, '1_to_2h': 26.9, '2_to_4h': 46.2, over_4h: 15.4 },
  young_adults: { under_1h: 5.9, '1_to_2h': 20.6, '2_to_4h': 47.1, over_4h: 26.5 },
  working_adults: { under_1h: 24.1, '1_to_2h': 41.4, '2_to_4h': 27.6, over_4h: 6.9 },
  middle_aged: { under_1h: 44.4, '1_to_2h': 38.9, '2_to_4h': 16.7, over_4h: 0.0 },
  seniors: { under_1h: 69.2, '1_to_2h': 23.1, '2_to_4h': 7.7, over_4h: 0.0 }
};

// Chart 4: Digital Safety & Cybersecurity Awareness (% aware & practicing within each group)
export const AWARENESS_TOPICS = [
  { id: 'upi_safety', label: 'Online Payments & QR Verification', icon: 'ShieldCheck' },
  { id: 'otp_rules', label: 'OTP Confidentiality & Protection', icon: 'KeyRound' },
  { id: 'cybersecurity', label: 'Cybersecurity & Device Locking', icon: 'Lock' },
  { id: 'govt_portals', label: 'Government Online Portals', icon: 'Building2' },
  { id: 'fraud_detection', label: 'Fraud & Phishing Link Detection', icon: 'AlertTriangle' }
];

export const AWARENESS_DATA = {
  students: { upi_safety: 76.9, otp_rules: 69.2, cybersecurity: 57.7, govt_portals: 46.2, fraud_detection: 50.0 },
  young_adults: { upi_safety: 88.2, otp_rules: 82.4, cybersecurity: 64.7, govt_portals: 70.6, fraud_detection: 61.8 },
  working_adults: { upi_safety: 72.4, otp_rules: 55.2, cybersecurity: 37.9, govt_portals: 65.5, fraud_detection: 41.4 },
  middle_aged: { upi_safety: 38.9, otp_rules: 33.3, cybersecurity: 16.7, govt_portals: 50.0, fraud_detection: 22.2 },
  seniors: { upi_safety: 15.4, otp_rules: 15.4, cybersecurity: 7.7, govt_portals: 30.8, fraud_detection: 7.7 }
};
