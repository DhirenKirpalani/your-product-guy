export const FADE_IN_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const SLIDE_UP_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const STAGGER_ITEM = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const HOVER_SCALE = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.3 },
};

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "About", href: "#about" },
];

export const PAIN_POINTS = [
  {
    title: "Slow Replies Lose Leads",
    description: "Customers expect instant responses. Manual replies waste opportunities.",
  },
  {
    title: "Missed Follow-Ups Reduce Sales",
    description: "Lost leads from forgotten follow-ups and disorganized communication.",
  },
  {
    title: "Manual Admin Wastes Time",
    description: "Hours spent on repetitive tasks instead of growing your business.",
  },
  {
    title: "Disorganized Bookings",
    description: "Double bookings, no-shows, and manual confirmation chaos.",
  },
  {
    title: "Repetitive Support Drains Resources",
    description: "Same questions answered repeatedly by overworked staff.",
  },
  {
    title: "Inconsistent Content Operations",
    description: "Sporadic posting, no workflow, missed engagement opportunities.",
  },
];

export const SERVICES = [
  {
    title: "WhatsApp AI Auto-Reply",
    description: "Reply instantly to customer inquiries 24/7.",
    outcome: "Never miss a customer message again.",
  },
  {
    title: "AI Customer Service",
    description: "Automate repetitive support conversations.",
    outcome: "Reduce support workload by 70%.",
  },
  {
    title: "AI Sales Follow-Up",
    description: "Recover lost leads automatically.",
    outcome: "Convert more prospects with timely follow-ups.",
  },
  {
    title: "AI Appointment Booking",
    description: "Reduce missed appointments and automate reminders.",
    outcome: "Eliminate double bookings and no-shows.",
  },
  {
    title: "AI Invoice Generation",
    description: "Automate invoices and payment reminders.",
    outcome: "Get paid faster with automated workflows.",
  },
  {
    title: "AI Social Media Generation",
    description: "Generate captions, hooks, and content workflows.",
    outcome: "Consistent, strategic content at scale.",
  },
];

export const INDUSTRIES = [
  "Beauty Clinics",
  "Salons",
  "Property Agents",
  "Dental Clinics",
  "Car Workshops",
  "Travel Agencies",
  "Ecommerce Sellers",
];

export const RESULTS = [
  { metric: "70%", label: "Faster Response Time" },
  { metric: "50%", label: "Reduced Manual Work" },
  { metric: "3x", label: "More Leads Captured" },
  { metric: "90%", label: "Automation Rate" },
  { metric: "24/7", label: "Operational Coverage" },
  { metric: "40%", label: "Revenue Growth" },
];
