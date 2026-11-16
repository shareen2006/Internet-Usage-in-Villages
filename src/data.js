// All content lives here. Values marked null show PENDING. Edit only confirmed details.

export const LOCATION = {
  locality: 'Kodandaramapuram',
  mandal: 'Buchireddypalem',
  district: 'SPSR Nellore District',
  state: 'Andhra Pradesh',
  country: 'India',
  mapQuery: 'Kodandaramapuram, Buchireddypalem, SPSR Nellore District, Andhra Pradesh, India',
};

export const COLLEGE = {
  name: 'Sree Venkateswara College of Engineering',
  shortName: 'SVCN',
  department: 'Artificial Intelligence and Machine Learning (AIML)',
  address: 'Golden Nagar, North Rajupalem, NH-5 Bypass Road, SPSR Nellore District, Nellore, Andhra Pradesh – 524316',
  year: '2026–2027',
};

export const GUIDE = { name: 'Mr. B. Rajasekhar Reddy', qualification: 'M.Tech (Ph.D)' };

export const TEAM = [
  { name: 'Shaik Shareen', reg: '24JNA33153', photo: '/images/team/shaik-shareen.webp' },
  { name: 'Venumbaka Pranathi', reg: '24JNA33170', photo: '/images/team/venumbaka-pranathi.webp' },
  { name: 'Shaik Sameera', reg: '24JNA33150', photo: '/images/team/shaik-sameera.webp' },
  { name: 'Vayugundla Nikitha', reg: '24JNA33168', photo: '/images/team/vayugundla-nikitha.webp' },
  { name: 'Theppala Taarakeswari', reg: '24JNA33160', photo: '/images/team/theppala-taarakeswari.webp' },
];

export const NAV = [
  ['home', 'Home'], ['about', 'About'], ['objectives', 'Objectives'], ['survey', 'Survey'],
  ['analytics', 'Analytics'], ['activities', 'Activities'], ['learn', 'Learn'], ['gallery', 'Field Gallery'],
  ['team', 'Team'], ['conclusion', 'Conclusion'],
];

export const OBJECTIVES = [
  { icon: 'BookOpen', title: 'Improve digital literacy', text: 'Build everyday skills with smartphones and apps.' },
  { icon: 'Eye', title: 'Create awareness', text: 'Explain what the internet can and cannot do for families.' },
  { icon: 'MessageCircle', title: 'Teach online communication', text: 'Use calls, messages and video calls with confidence.' },
  { icon: 'Wallet', title: 'Promote digital payments', text: 'Pay and receive money through UPI, safely.' },
  { icon: 'Landmark', title: 'Explain government online services', text: 'Find official portals and track applications.' },
  { icon: 'ShieldCheck', title: 'Spread cybersecurity awareness', text: 'Recognise scams, fake links and OTP fraud.' },
];

export const ACTIVITIES = [
  { id: 'basic', icon: 'Globe', te: 'ప్రాథమిక ఇంటర్నెట్ వినియోగం', en: { title: 'Basic internet usage', desc: 'Opening a browser, searching for information and using Wi-Fi or mobile data.', example: 'Searching for a scheme name and opening its official website.' } },
  { id: 'education', icon: 'GraduationCap', te: 'ఆన్‌లైన్ విద్య', en: { title: 'Online education', desc: 'Learning videos and online classes for school, college and skill courses.', example: 'Watching a free tutorial on basic English or maths.' } },
  { id: 'upi', icon: 'Wallet', te: 'డిజిటల్ చెల్లింపులు (UPI)', en: { title: 'Digital payments (UPI)', desc: 'Sending and receiving money through UPI, checking details before approving.', example: 'Paying a shop by scanning its QR code and checking the name first.' } },
  { id: 'govt', icon: 'Landmark', te: 'ప్రభుత్వ ఆన్‌లైన్ సేవలు', en: { title: 'Government online services', desc: 'Applying for certificates, checking application status and storing documents.', example: 'Saving a certificate in DigiLocker.' } },
  { id: 'cyber', icon: 'ShieldCheck', te: 'సైబర్ భద్రతా అవగాహన', en: { title: 'Cybersecurity awareness', desc: 'Recognising fake links, OTP scams and weak passwords.', example: 'Never sharing an OTP, even with a caller who says they are from a bank.' } },
  { id: 'phone', icon: 'Smartphone', te: 'స్మార్ట్‌ఫోన్ వినియోగం', en: { title: 'Smartphone usage', desc: 'Using calls, messages, the camera and settings with confidence.', example: 'Making text larger in display settings.' } },
];

export const TUTORIALS = [
  { id: 'upi', en: { title: 'Send money with UPI', steps: ['Open your UPI app and tap “Pay” or “Send”.', 'Check the name shown and the amount.', 'Enter your UPI PIN only to send money. Never enter it to receive money.'] },
    te: { title: 'UPI ద్వారా డబ్బు పంపడం', steps: ['మీ UPI యాప్‌ను తెరిచి “Pay” లేదా “Send” నొక్కండి.', 'చూపించిన పేరు, మొత్తం సరిచూసుకోండి.', 'డబ్బు పంపేటప్పుడు మాత్రమే UPI PIN ఇవ్వండి. డబ్బు అందుకోవడానికి ఎప్పుడూ ఇవ్వకండి.'] } },
  { id: 'certificate', en: { title: 'Check a government application', steps: ['Open the official portal. Check the address ends in .gov.in.', 'Enter your application number.', 'Read the status and save the page.'] },
    te: { title: 'ప్రభుత్వ దరఖాస్తు స్థితి తనిఖీ', steps: ['అధికారిక పోర్టల్ తెరవండి. చిరునామా .gov.in తో ముగుస్తుందో చూడండి.', 'మీ దరఖాస్తు సంఖ్య నమోదు చేయండి.', 'స్థితిని చదివి పేజీని సేవ్ చేయండి.'] } },
  { id: 'scam', en: { title: 'Spot a scam message', steps: ['Do not click links that demand urgent action.', 'Call the number on your bank statement to check.', 'Report at cybercrime.gov.in or call 1930.'] },
    te: { title: 'మోసపూరిత సందేశాన్ని గుర్తించడం', steps: ['తొందరపెట్టే లింకులపై క్లిక్ చేయకండి.', 'బ్యాంకు స్టేట్‌మెంట్‌లోని నంబరుకు ఫోన్ చేసి నిర్ధారించుకోండి.', 'cybercrime.gov.in లో ఫిర్యాదు చేయండి లేదా 1930 కు ఫోన్ చేయండి.'] } },
];

// Survey statistics. Leave null until real survey results are entered; the charts fill in automatically.
export const SURVEY_STATS = [
  { label: 'Households with a smartphone', value: null },
  { label: 'Residents who use the internet weekly', value: null },
  { label: 'Residents who have used UPI', value: null },
  { label: 'Residents who use government online services', value: null },
];

export const GALLERY_CATEGORIES = [
  ['all', 'All Photos'],
  ['community', 'Community Interaction'],
  ['survey', 'Survey Collection'],
  ['awareness', 'Awareness Programmes'],
  ['village', 'Village Environment'],
];

// Fieldwork photographs taken during the Community Service Project
export const GALLERY = [
  { id: 'f01', category: 'community', title: 'Student and resident reviewing digital awareness material', location: 'Buchireddypalem, AP', file: '/images/gallery/f01.jpg', tag: 'Household visit', objectPosition: 'center 12%' },
  { id: 'f02', category: 'community', title: 'Student team discussing digital services outdoors', location: 'Buchireddypalem, AP', file: '/images/gallery/f02.jpg', tag: 'Group discussion', objectPosition: 'center 15%' },
  { id: 'f03', category: 'community', title: 'Digital awareness session at local market', location: 'Buchireddypalem Market', file: '/images/gallery/f03.jpg', tag: 'Market outreach', objectPosition: 'center 12%' },
  { id: 'f04', category: 'survey', title: 'Reviewing digital survey questions with resident', location: 'Buchireddypalem, AP', file: '/images/gallery/f04.jpg', tag: 'Field survey', objectPosition: 'center 4%' },
  { id: 'f05', category: 'survey', title: 'Recording survey data during door-to-door interview', location: 'Buchireddypalem, AP', file: '/images/gallery/f05.jpg', tag: 'Survey collection', objectPosition: 'center 15%' },
  { id: 'f14', category: 'survey', title: 'Survey interaction in village agricultural area', location: 'Buchireddypalem, AP', file: '/images/gallery/f14.jpg', tag: 'Farming area', objectPosition: 'center 25%' },
  { id: 'f07', category: 'community', title: 'Field conversation on smartphone and internet utility', location: 'Buchireddypalem, AP', file: '/images/gallery/f07.jpg', tag: 'Street interaction', objectPosition: 'center 6%' },
  { id: 'f08', category: 'survey', title: 'Joint survey review and verification inside village home', location: 'Buchireddypalem, AP', file: '/images/gallery/f08.jpg', tag: 'Data gathering', objectPosition: 'center 20%' },
  { id: 'f09', category: 'community', title: 'Assisting senior citizen with digital phone guidance', location: 'Buchireddypalem, AP', file: '/images/gallery/f09.jpg', tag: 'Senior guidance', objectPosition: 'center 4%' },
  { id: 'f10', category: 'survey', title: 'Documenting resident feedback on village connectivity', location: 'Buchireddypalem, AP', file: '/images/gallery/f10.jpg', tag: 'Questionnaire', objectPosition: 'center 18%' },
  { id: 'f11', category: 'awareness', title: 'Demonstrating educational booklet & cybersecurity habits', location: 'Buchireddypalem, AP', file: '/images/gallery/f11.jpg', tag: 'Safety awareness', objectPosition: 'center 0%' },
  { id: 'f12', category: 'awareness', title: 'Interactive reading session on online security outdoors', location: 'Buchireddypalem, AP', file: '/images/gallery/f12.jpg', tag: 'Outdoor session', objectPosition: 'center 0%' },
  { id: 'f13', category: 'awareness', title: 'Student team presenting Community Service Project poster', location: 'Buchireddypalem, AP', file: '/images/gallery/f13.jpg', tag: 'Project presentation', objectPosition: 'center 4%' },
  { id: 'f06', category: 'community', title: 'Explaining mobile services and digital safety tips', location: 'Buchireddypalem, AP', file: '/images/gallery/f06.jpg', tag: 'Digital literacy', objectPosition: 'center 12%' },
  { id: 'f15', category: 'village', title: 'Fieldwork interaction outside traditional rural home', location: 'Buchireddypalem, AP', file: '/images/gallery/f15.jpg', tag: 'Village life', objectPosition: 'center 20%' },
];

export const QUIZ = [
  { category: 'Online fraud prevention', question: 'A caller from "your bank" asks for the CVV to stop a suspicious transaction. What should you do?',
    options: ['Share the CVV to stop it', 'Hang up and call the number on your card or statement', 'Share only the last four digits', 'Reply by email with the card details'], answer: 1,
    explanation: 'Banks never ask for your CVV or PIN on a call. Call the number printed on your card or statement.' },
  { category: 'OTP safety', question: 'Someone asks you to read out an OTP "to verify your account". What is right?',
    options: ['Share it if they know your name', 'Share it if they say they are from your bank', 'Never share an OTP with anyone', 'Share it if they promise to cancel a transaction'], answer: 2,
    explanation: 'An OTP proves you are the account holder. Anyone asking for it is trying to take over your account.' },
  { category: 'Password safety', question: 'Which password is strongest?',
    options: ['Your name and birth year', '123456', 'A long passphrase of unrelated words with numbers and symbols', 'The same password on every account'], answer: 2,
    explanation: 'Long passphrases are hard to guess, and different passwords stop one leak opening every account.' },
  { category: 'Phishing links', question: 'An email says your account will be suspended in 24 hours and asks you to click a link to verify. What do you do?',
    options: ['Click and follow the steps', 'Reply with your account details', 'Forward it to friends to check', 'Do not click; open the official app or type the website yourself'], answer: 3,
    explanation: 'Deadlines and threats are a common phishing tactic. Using the official app or website avoids fake pages.' },
  { category: 'Suspicious messages', question: 'A message offers free mobile data if you install an app from a link. What is safest?',
    options: ['Install it, the offer is free', 'Install apps only from the official app store', 'Install it from a link in a group chat', 'Turn off updates so it keeps working'], answer: 1,
    explanation: 'Apps shared through links can steal passwords and messages. Official stores review apps first.' },
  { category: 'UPI safety', question: 'Someone says you must enter your UPI PIN to receive a refund. What is correct?',
    options: ['Enter the PIN to receive money', 'Enter it if the amount is small', 'Refuse; you never need your UPI PIN to receive money', 'Share it with the sender’s bank'], answer: 2,
    explanation: 'The UPI PIN is used to send money, not to receive it. Anyone asking for it to pay you is trying to take money.' },
  { category: 'UPI payments', question: 'What should you check before approving a UPI payment?',
    options: ['Only the amount', 'Nothing, if you know the person', 'The colour of the screen', 'The payee name and UPI ID shown before you approve'], answer: 3,
    explanation: 'Scammers use similar names. Checking the payee name confirms you are paying the right person.' },
  { category: 'Safe browsing', question: 'You want to log in to your bank online. Which approach is safest?',
    options: ['Trust any site with a logo', 'Type the bank’s address yourself and check the spelling', 'Save passwords in an unknown browser extension', 'Log in through any link a message sends you'], answer: 1,
    explanation: 'Fake sites copy real ones. A padlock alone does not prove a site is genuine, so check the address.' },
  { category: 'Social media privacy', question: 'Which social media setting protects you best?',
    options: ['A public profile with your phone number visible', 'Accepting friend requests from anyone', 'A private account that limits who sees your posts and contact details', 'Sharing your live location with everyone'], answer: 2,
    explanation: 'Private settings limit the personal details scammers use to make their messages seem real.' },
  { category: 'Cybersecurity awareness', question: 'Why should you keep your phone and apps updated?',
    options: ['Updates slow the phone, so avoid them', 'Updates are only for games', 'Updates fix known security weaknesses', 'Updates delete unused photos'], answer: 2,
    explanation: 'Updates often fix weaknesses attackers already know about. Automatic updates are a simple protection.' },
];


