export const cvTemplate = `
Nidhal Labidi
San Francisco, CA | 555-555-555 | jerrycoder@gmail.com | https://github.com/jerrycoder

Full-Stack Development | Software Engineering | Web Development | UI Design

SUMMARY:
Full-stack developer with expertise in web application development, requirements gathering, and system analysis. Adept at partnering with business units to improve efficiency, develop new product ideas, and maintain coding standards. Strong experience in Agile development and technical troubleshooting.

KEY SKILLS:
• Systems Development
• Software Implementation
• Computer Engineering
• User Experience Design
• Agile Methodologies
• Code Maintenance
• Technical Troubleshooting
• Debugging & Research

PROFESSIONAL EXPERIENCE:

Web Developer | Books Unlimited, San Francisco, CA | 01/2023 – Present
• Led software development lifecycle for book review platform using React, TypeScript and JavaScript
• Implemented CI/CD pipeline to automate testing and deployment processes
• Collaborated with UI designers to establish mobile design best practices
• Technology: React, TypeScript, JavaScript, AWS Lambda, Node.js, MongoDB

Mobile Developer | Tech Innovations, San Francisco, CA | 06/2022 – 12/2022
• Developed customer-facing application for legal forms and payments using Kotlin
• Improved crash-free rate by 30% through comprehensive unit and UI testing
• Technology: Kotlin, Java, MongoDB, Dagger 2, Retrofit, RxJava

Freelance Web Developer | Remote | 01/2022 – 06/2022
• Built Mobile Event Verification (MEV) technology for customer engagement tracking
• Collaborated with stakeholders to define product requirements
• Technology: React, JavaScript, SQL, Express

TECHNICAL SKILLS:
Languages: JavaScript, TypeScript, Java, Kotlin
Databases: SQL, MongoDB, Firestore
Tools: IntelliJ, VS Code, Android Studio, AWS, GitHub, React-Native
`;

export const coverLetterTemplate = `
[Your Name]
[Your Address]
[City, Postal Code]
[Email Address]
[Phone Number]
[Date]

[Hiring Manager Name]
[Company Name]
[Company Address]
[City, Postal Code]

Dear [Mr./Ms./Mx. Last Name],

I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [Platform]. With my extensive experience in [relevant skill 1] and [relevant skill 2], I am confident in my ability to contribute effectively to your team.

During my tenure at [Previous Company], I successfully [mention key achievement]. My expertise in [specific technology or methodology] aligns perfectly with the requirements outlined in your job description.

I am particularly drawn to [Company Name] because of [specific reason related to company's mission or projects]. I admire your work in [specific project or achievement] and believe my skills in [relevant skill] could help further your objectives.

I have attached my CV for your review and welcome the opportunity to discuss how my qualifications can benefit [Company Name]. Thank you for considering my application.

Sincerely,
[Your Name]
`;

export const motivationLetterTemplate = `
[Your Name]
[Your Address]
[City, Postal Code]
[Email Address]
[Phone Number]
[Date]

Admissions Committee
[University Name]
[University Address]
[City, Postal Code]

Dear Admissions Committee,

I am writing to express my enthusiastic interest in the [Program Name] at [University Name], starting in [Semester, Year]. As a passionate [your field] with a strong academic background in [relevant area], I am convinced that your program is the ideal next step in my educational journey.

My academic achievements include [mention key accomplishment or project]. I have developed strong skills in [skill 1] and [skill 2] through my coursework at [Current/Past University] and practical experience during [internship/project].

What particularly attracts me to [University Name] is [specific program feature, faculty member, or research opportunity]. I am especially interested in [specific aspect of the program] and believe it will provide me with the necessary foundation to achieve my career goals in [your career aspiration].

I am confident that my academic background, dedication to [field], and [personal quality] make me an excellent candidate for your program. Thank you for considering my application.

Sincerely,
[Your Name]
`;

export const tiers: Tier[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: "€10",
    features: [
      "Access to Document Templates page",
      "Download multiple visa application templates",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    price: "€20",
    features: [
      "Everything in Bronze +",
      "Access to the page Embassy Information Hub",
      "This includes: Embassy/consulate details, Appointment booking tips and Processing times & contact info",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: "€30",
    features: [
      "Everything in Bronze +",
      "Access to the page Consultation Booking",
      "This includes: 1-on-1 consultation booking and Personal visa expert sessions",
    ],
  },
];

export type Tier = {
  id: "bronze" | "silver" | "gold";
  name: "Bronze" | "Silver" | "Gold";
  price: "€10" | "€20" | "€30";
  features: string[];
};

export const getSubscriptionPrice = (tierId: string) => {
  switch (tierId) {
    case "bronze":
      return 10;
    case "silver":
      return 20;
    case "gold":
      return 30;
    default:
      return 0;
  }
};

export const supportTeam = [
  {
    id: 1,
    name: "Dr. Anna Müller",
    role: "Visa Consultation Specialist",
    email: "anna.mueller@visasupport.de",
    phone: "+49 89 12345678",
    availability: "Mon, Wed, Fri: 9:00 AM - 3:00 PM CET",
    bio: "10+ years experience with family reunification visas. Fluent in English, German and Arabic.",
  },
  {
    id: 2,
    name: "Thomas Wagner",
    role: "Student Visa Expert",
    email: "thomas.wagner@visasupport.de",
    phone: "+49 30 98765432",
    availability: "Tue, Thu: 1:00 PM - 7:00 PM CET",
    bio: "Specialized in student visas and academic residency permits. Former international student advisor.",
  },
  {
    id: 3,
    name: "Sophie Becker",
    role: "Work Visa Coordinator",
    email: "sophie.becker@visasupport.de",
    phone: "+49 40 24681357",
    availability: "Mon-Fri: 10:00 AM - 4:00 PM CET",
    bio: "Focuses on EU Blue Cards and skilled worker visas. Helps with job seeker visa conversions.",
  },
  {
    id: 4,
    name: "Marko Schmidt",
    role: "Emergency Visa Support",
    email: "marko.schmidt@visasupport.de",
    phone: "+49 69 13579246",
    availability: "24/7 for urgent cases",
    bio: "Handles visa extensions, appeals, and emergency cases. Available outside regular hours.",
  },
];

export const embassies = [
  {
    id: 1,
    city: "Berlin",
    type: "Main Embassy",
    address: "Pariser Platz 4, 10117 Berlin, Germany",
    phone: "+49 30 12345678",
    email: "visa-berlin@deutschland.de",
    hours: "Mon-Fri: 8:30 AM - 12:30 PM",
  },
  {
    id: 2,
    city: "Munich",
    type: "Consulate General",
    address: "Königinstraße 5, 80539 München, Germany",
    phone: "+49 89 98765432",
    email: "consulate-munich@deutschland.de",
    hours: "Mon, Wed, Fri: 9:00 AM - 12:00 PM",
  },
  {
    id: 3,
    city: "Frankfurt",
    type: "Consulate General",
    address: "Gutleutstraße 84, 60329 Frankfurt am Main, Germany",
    phone: "+49 69 24681357",
    email: "consulate-frankfurt@deutschland.de",
    hours: "Tue, Thu: 10:00 AM - 1:00 PM",
  },
  {
    id: 4,
    city: "Hamburg",
    type: "Consulate",
    address: "Alsterufer 27/28, 20354 Hamburg, Germany",
    phone: "+49 40 13579246",
    email: "consulate-hamburg@deutschland.de",
    hours: "Mon, Wed: 9:30 AM - 12:30 PM",
  },
];

export const bookingTips = [
  {
    id: 1,
    title: "Book Early",
    description:
      "Appointment slots fill up quickly, especially during peak seasons (May-August). Book at least 3 months before your planned travel date.",
    icon: "📅",
  },
  {
    id: 2,
    title: "Prepare Documents",
    description:
      "Have all required documents scanned and ready before starting the online application to avoid delays.",
    icon: "📄",
  },
  {
    id: 3,
    title: "Check Requirements",
    description:
      "Visit the official website for your specific visa type to ensure you meet all current requirements.",
    icon: "✅",
  },
  {
    id: 4,
    title: "Be Punctual",
    description:
      "Arrive 15 minutes before your appointment. Late arrivals may not be accommodated.",
    icon: "⏱️",
  },
  {
    id: 5,
    title: "Reschedule Wisely",
    description:
      "If you need to reschedule, do so at least 72 hours before your appointment to avoid penalties.",
    icon: "🔄",
  },
  {
    id: 6,
    title: "Payment Ready",
    description:
      "Bring exact change in EUR for visa fees. Credit cards may not be accepted at all locations.",
    icon: "💶",
  },
];
