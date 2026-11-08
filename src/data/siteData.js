export const company = {
  name: 'Bexon',
  tagline: 'Corporate Business & Consulting',
  phone: '+1 (009) 544-7818',
  phoneHref: 'tel:10095447818',
  email: 'info@bexon.com',
  supportEmail: 'support@bexon.com',
  address: '993 Renner Burg, West Rond, MT 94251-030, USA',
  founded: 2011,
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'X', href: 'https://x.com/', icon: 'x' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  ],
};

export const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Pages',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Team', to: '/team' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export const services = [
  {
    slug: 'business-strategy-development',
    title: 'Business Strategy Development',
    short: 'Business Strategy',
    icon: 'strategy',
    image: '/images/service/service-1.webp',
    summary:
      'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop a customised roadmap that turns ambition into measurable growth.',
    description:
      'Great strategy is more than a document — it is a shared direction. We immerse ourselves in your market, your numbers and your people, then build a pragmatic plan that leadership teams can actually execute. From positioning and portfolio choices to operating models and growth bets, every recommendation is grounded in evidence and designed for momentum.',
    features: [
      'Market, competitor and customer research',
      'Growth thesis and portfolio prioritisation',
      'Operating model and org design',
      'Three-year strategic roadmap and KPIs',
    ],
    deliverables: ['Strategy diagnostic', 'Growth roadmap', 'Board-ready business case', 'Quarterly review cadence'],
    price: 'From $4,800',
    timeline: '4–8 weeks',
  },
  {
    slug: 'customer-experience-solutions',
    title: 'Customer Experience Solutions',
    short: 'Customer Experience',
    icon: 'experience',
    image: '/images/service/service-5.webp',
    summary:
      'Developing personalised customer journeys that increase satisfaction and loyalty, while creating the operational discipline to keep every touchpoint consistent.',
    description:
      'Customers judge you at every interaction. We map the real journey end to end, identify the moments that create or destroy value, and redesign them with your teams. The result is a simpler, more human experience that lifts retention, advocacy and lifetime value.',
    features: [
      'Journey mapping and service blueprinting',
      'Voice-of-customer research programmes',
      'CX measurement and KPI frameworks',
      'Frontline enablement and coaching',
    ],
    deliverables: ['Journey atlas', 'Priority fix backlog', 'CX scorecard', 'Enablement toolkit'],
    price: 'From $3,900',
    timeline: '3–6 weeks',
  },
  {
    slug: 'sustainability-esg-consulting',
    title: 'Sustainability and ESG Consulting',
    short: 'Sustainability & ESG',
    icon: 'sustainability',
    image: '/images/service/service-6.webp',
    summary:
      'Tailored strategies that drive long-term value and build trust with stakeholders, investors and the communities you serve.',
    description:
      'Sustainability is now a board-level performance agenda. We help you move beyond compliance to a credible, commercially sound ESG programme — one that reduces risk, opens new markets and is easy to explain to investors and customers alike.',
    features: [
      'Materiality assessment and ESG baseline',
      'Decarbonisation and net-zero planning',
      'Supplier and value-chain standards',
      'Reporting aligned to recognised frameworks',
    ],
    deliverables: ['Materiality matrix', 'ESG roadmap', 'Disclosure pack', 'Governance model'],
    price: 'From $5,200',
    timeline: '6–10 weeks',
  },
  {
    slug: 'training-development-programs',
    title: 'Training and Development Programs',
    short: 'Training & Development',
    icon: 'training',
    image: '/images/service/service-7.webp',
    summary:
      'Programmes designed to empower employees with the skills, knowledge and confidence they need to lead change from the inside.',
    description:
      'Capability is the multiplier on every strategy. We co-design practical learning journeys with your leaders and subject experts, blending live workshops, coaching and on-the-job application so new behaviours stick long after the programme ends.',
    features: [
      'Capability diagnostic and skills map',
      'Leadership and manager academies',
      'Blended learning journey design',
      'Impact measurement and certification',
    ],
    deliverables: ['Skills heatmap', 'Curriculum blueprint', 'Facilitator guides', 'Impact dashboard'],
    price: 'From $3,400',
    timeline: '4–12 weeks',
  },
  {
    slug: 'it-support-maintenance',
    title: 'IT Support & Maintenance',
    short: 'IT Support',
    icon: 'technology',
    image: '/images/service/service-3.webp',
    summary:
      'Reliable, secure technology operations that keep your teams productive and your business resilient around the clock.',
    description:
      'Technology should be invisible when it works and decisive when it matters. We provide proactive monitoring, responsive support and a pragmatic modernisation roadmap, so your systems are stable today and ready for tomorrow.',
    features: [
      '24/7 monitoring and helpdesk',
      'Cloud, network and endpoint management',
      'Security hygiene and backup assurance',
      'Modernisation and automation roadmap',
    ],
    deliverables: ['Service catalogue', 'SLA framework', 'Security review', 'Improvement backlog'],
    price: 'From $1,200/mo',
    timeline: 'Ongoing',
  },
  {
    slug: 'marketing-strategy-campaigns',
    title: 'Marketing Strategy & Campaigns',
    short: 'Marketing Strategy',
    icon: 'marketing',
    image: '/images/service/service-4.webp',
    summary:
      'Sharp positioning, distinctive creative and measurable campaigns that connect your brand to the people who matter.',
    description:
      'From brand narrative to demand generation, we build marketing systems that compound. We clarify who you are for, what you stand for and how to reach them — then run integrated campaigns with clear measurement and honest optimisation.',
    features: [
      'Brand positioning and messaging',
      'Audience segmentation and media planning',
      'Integrated campaign design',
      'Analytics, attribution and optimisation',
    ],
    deliverables: ['Brand platform', 'Campaign playbook', 'Media plan', 'Measurement framework'],
    price: 'From $4,100',
    timeline: '5–9 weeks',
  },
];

export const projects = [
  {
    slug: 'event-management-platform',
    title: 'Event Management Platform',
    category: 'Connect',
    image: '/images/project/project-1.webp',
    client: 'Northstar Events',
    year: '2025',
    duration: '16 weeks',
    services: ['Product strategy', 'Experience design', 'Platform build'],
    summary:
      'A unified platform for planning, promoting and running world-class events — bringing registration, content and live operations into one calm workspace.',
    description:
      'Northstar was running a portfolio of flagship conferences on a patchwork of spreadsheets and disconnected tools. We defined a focused product strategy, designed an end-to-end event operating system, and delivered a platform that cut planning time by 42% while raising attendee satisfaction scores to an all-time high.',
    results: [
      { value: '42%', label: 'less planning time' },
      { value: '4.9/5', label: 'attendee satisfaction' },
      { value: '3x', label: 'faster check-in' },
    ],
    gallery: [
      '/images/project/project-1.webp',
      '/images/project/project-gallery-1.webp',
      '/images/project/project-gallery-2.webp',
    ],
  },
  {
    slug: 'digital-marketing-campaign',
    title: 'Digital Marketing Campaign',
    category: 'Empower',
    image: '/images/project/project-2.webp',
    client: 'Aurelia Group',
    year: '2025',
    duration: '12 weeks',
    services: ['Brand positioning', 'Campaign strategy', 'Performance media'],
    summary:
      'A full-funnel campaign that reframed a legacy financial brand for a new generation of customers and delivered record-qualified demand.',
    description:
      'Aurelia had strong products but a tired narrative. We rebuilt the brand story around real customer outcomes, launched a multi-channel campaign, and created a measurement model that connected creative to revenue. Qualified pipeline grew 2.6x within two quarters.',
    results: [
      { value: '2.6x', label: 'qualified pipeline' },
      { value: '-31%', label: 'cost per lead' },
      { value: '18M', label: 'campaign reach' },
    ],
    gallery: [
      '/images/project/project-2.webp',
      '/images/project/project-gallery-2.webp',
      '/images/project/project-gallery-3.webp',
    ],
  },
  {
    slug: 'interactive-learning-platform',
    title: 'Interactive Learning Platform',
    category: 'Support',
    image: '/images/project/project-3.webp',
    client: 'Brightpath Education',
    year: '2024',
    duration: '20 weeks',
    services: ['Learning design', 'UX research', 'Engineering'],
    summary:
      'An adaptive learning experience that meets every learner where they are — with personalised paths, live coaching and measurable progress.',
    description:
      'Brightpath wanted to scale its high-touch coaching model without losing the human connection. We designed an adaptive platform that blends guided lessons, practice and live support, then validated it with learners across three regions. Course completion increased by 58%.',
    results: [
      { value: '58%', label: 'higher completion' },
      { value: '12k', label: 'active learners' },
      { value: '4.8/5', label: 'learner rating' },
    ],
    gallery: [
      '/images/project/project-3.webp',
      '/images/project/project-gallery-3.webp',
      '/images/project/project-gallery-1.webp',
    ],
  },
  {
    slug: 'environmental-impact-dashboard',
    title: 'Environmental Impact Dashboard',
    category: 'Business',
    image: '/images/project/project-4.webp',
    client: 'Terra Industries',
    year: '2024',
    duration: '14 weeks',
    services: ['ESG strategy', 'Data engineering', 'Visualisation'],
    summary:
      'A live sustainability dashboard that turns complex emissions and supply-chain data into decisions leaders can trust.',
    description:
      'Terra needed one version of the truth for its environmental performance. We defined the metrics that mattered, built a reliable data pipeline across 14 sites, and designed an executive dashboard that made progress visible to every team. Reporting time dropped by 70%.',
    results: [
      { value: '70%', label: 'faster reporting' },
      { value: '14', label: 'sites connected' },
      { value: '100%', label: 'data coverage' },
    ],
    gallery: [
      '/images/project/project-4.webp',
      '/images/project/project-gallery-1.webp',
      '/images/project/project-gallery-2.webp',
    ],
  },
  {
    slug: 'global-retail-expansion',
    title: 'Global Retail Expansion',
    category: 'Connect',
    image: '/images/project/project-6.webp',
    client: 'Lumen Retail',
    year: '2024',
    duration: '24 weeks',
    services: ['Market entry', 'Operating model', 'Store experience'],
    summary:
      'A market-entry playbook and store experience that took a beloved regional retailer into four new countries in eighteen months.',
    description:
      'Lumen had a strong home market and a big ambition. We assessed priority markets, built a repeatable launch playbook, and redesigned the store experience for local relevance. Four markets opened on time and ahead of first-year targets.',
    results: [
      { value: '4', label: 'new markets' },
      { value: '112%', label: 'of year-one target' },
      { value: '18mo', label: 'to launch' },
    ],
    gallery: [
      '/images/project/project-6.webp',
      '/images/project/project-gallery-2.webp',
      '/images/project/project-gallery-3.webp',
    ],
  },
  {
    slug: 'fintech-mobile-experience',
    title: 'Fintech Mobile Experience',
    category: 'Empower',
    image: '/images/project/project-7.webp',
    client: 'Kite Financial',
    year: '2023',
    duration: '18 weeks',
    services: ['Product discovery', 'Mobile UX', 'Design system'],
    summary:
      'A mobile-first banking experience that made complex money moments feel simple, human and immediate.',
    description:
      'Kite wanted to win younger customers without alienating its loyal base. We researched both, identified the five money moments that mattered most, and rebuilt the mobile journey around them. App store rating climbed from 3.2 to 4.7.',
    results: [
      { value: '4.7', label: 'app store rating' },
      { value: '+46%', label: 'monthly active users' },
      { value: '-38%', label: 'support tickets' },
    ],
    gallery: [
      '/images/project/project-7.webp',
      '/images/project/project-gallery-3.webp',
      '/images/project/project-gallery-1.webp',
    ],
  },
  {
    slug: 'sustainable-supply-chain',
    title: 'Sustainable Supply Chain',
    category: 'Support',
    image: '/images/project/project-8.webp',
    client: 'Verdant Foods',
    year: '2023',
    duration: '22 weeks',
    services: ['Supply chain strategy', 'Supplier engagement', 'Traceability'],
    summary:
      'A traceable, lower-carbon supply chain that protected quality, reduced risk and gave customers the transparency they asked for.',
    description:
      'Verdant sources from hundreds of small farms. We mapped the network, set clear social and environmental standards, and introduced traceability at key nodes. Carbon intensity fell 24% without compromising margin or supply security.',
    results: [
      { value: '-24%', label: 'carbon intensity' },
      { value: '280+', label: 'suppliers engaged' },
      { value: '98%', label: 'traceability' },
    ],
    gallery: [
      '/images/project/project-8.webp',
      '/images/project/project-gallery-1.webp',
      '/images/project/project-gallery-2.webp',
    ],
  },
  {
    slug: 'brand-identity-system',
    title: 'Brand Identity System',
    category: 'Business',
    image: '/images/project/project-9.webp',
    client: 'Halcyon Partners',
    year: '2023',
    duration: '10 weeks',
    services: ['Brand strategy', 'Identity design', 'Design system'],
    summary:
      'A confident new identity and flexible design system for a professional services firm entering its next chapter.',
    description:
      'Halcyon had outgrown its founder-led brand. We clarified its purpose, created a distinctive visual and verbal identity, and delivered a design system the internal team could run with. The new brand launched across 12 markets in a single quarter.',
    results: [
      { value: '12', label: 'markets launched' },
      { value: '+34%', label: 'brand recall' },
      { value: '1', label: 'unified system' },
    ],
    gallery: [
      '/images/project/project-9.webp',
      '/images/project/project-gallery-2.webp',
      '/images/project/project-gallery-3.webp',
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner.",
    name: 'Guy Hawkins',
    role: 'Co. Founder, Northstar',
    image: '/images/testimonial/client-1.webp',
  },
  {
    quote:
      'The results we have seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted partner.',
    name: 'Ralph Edwards',
    role: 'Co. Founder, Aurelia',
    image: '/images/testimonial/client-2.webp',
  },
  {
    quote:
      'We have been working with Bexon for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They have become a key contributor to our growth and success.',
    name: 'Devon Lane',
    role: 'Co. Founder, Brightpath',
    image: '/images/testimonial/client-3.webp',
  },
];

export const blogs = [
  {
    slug: 'innovative-solutions-for-every-business-success',
    title: 'Innovative Solutions for Every Business Success',
    category: 'Business',
    author: 'Ellinien Loma',
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    image: '/images/blog/blog-1.webp',
    excerpt:
      'Innovation is not a lightning strike. It is a discipline of listening, testing and improving. Here is how great teams make it repeatable.',
    body: [
      'Every organisation says it wants to innovate. Far fewer are willing to change the habits that made them successful in the first place. The gap between intent and practice is where most transformation programmes quietly stall.',
      'The teams that break through tend to do three things well. They create space for honest customer insight, they make small bets quickly, and they protect the people doing the work from the gravity of business as usual.',
      'Start with a narrow problem that matters. Give a small, cross-functional team permission to solve it end to end. Measure outcomes, not activity. Share what you learn — including what failed — with the wider business. Repeat.',
      'Innovation becomes culture when it becomes routine. Not a hackathon once a year, but a steady rhythm of curiosity, evidence and action that compounds over time.',
    ],
  },
  {
    slug: 'harnessing-digital-transformation',
    title: 'Harnessing Digital Transformation: A Roadmap to Future-Proof Your Business',
    category: 'Technology',
    author: 'Ellinien Loma',
    date: 'Feb 24, 2026',
    readTime: '8 min read',
    image: '/images/blog/blog-2.webp',
    excerpt:
      'Digital transformation fails when it is treated as a technology project. The organisations that get it right start with the work, not the tools.',
    body: [
      'The phrase “digital transformation” has become so broad that it risks meaning nothing at all. Strip away the jargon and the real question is simple: how do we deliver more value to customers with less friction?',
      'Technology is an enabler, not the strategy. Before selecting platforms, map the journeys that create the most value and the handoffs where they break. Most of the opportunity sits in process and decision rights, not in software.',
      'A credible roadmap sequences change in small, valuable increments. It names the owners, the measures and the guardrails. It also makes clear what you will stop doing — because capacity is the scarcest resource in any transformation.',
      'Future-proofing is not about predicting every technology shift. It is about building an organisation that can respond quickly, learn openly and keep its customers at the centre.',
    ],
  },
  {
    slug: 'mastering-change-management',
    title: 'Mastering Change Management: Lessons for Businesses',
    category: 'Leadership',
    author: 'Ellinien Loma',
    date: 'Feb 18, 2026',
    readTime: '5 min read',
    image: '/images/blog/blog-3.webp',
    excerpt:
      'People do not resist change — they resist being changed. Six practical lessons from a decade of transformation work.',
    body: [
      'Change programmes rarely fail because the plan was wrong. They fail because the people expected to deliver the change were not part of shaping it, were not equipped for it, or did not understand why it mattered.',
      'Lesson one: be honest about the starting point. Lesson two: involve the people closest to the work. Lesson three: make the case in their language, not yours. Lesson four: equip managers to lead the conversation. Lesson five: celebrate early evidence of progress. Lesson six: stay visible long after the launch event.',
      'Transformation is a human sport. The operating model, the technology and the incentives all matter, but none of them move without trust.',
      'The most effective change leaders we work with are relentlessly clear, genuinely curious and comfortable being challenged. They treat resistance as information, not disloyalty.',
    ],
  },
  {
    slug: 'building-resilient-teams',
    title: 'Building Resilient Teams in Uncertain Times',
    category: 'People',
    author: 'Marcus Reed',
    date: 'Feb 12, 2026',
    readTime: '7 min read',
    image: '/images/blog/blog-9.webp',
    excerpt:
      'Resilience is not endurance. It is the ability to adapt with purpose. How to build teams that get stronger under pressure.',
    body: [
      'For years, resilience was framed as individual grit: work harder, bounce back, keep going. That definition is incomplete and, at scale, unsustainable. Team resilience is a system property, shaped by clarity, psychological safety and the quality of the relationships inside the group.',
      'Clear purpose is the anchor. When priorities shift, teams need to understand what has not changed. Leaders can help by naming the non-negotiables and giving people explicit permission to stop lower-value work.',
      'Safety is the accelerant. Teams that can surface bad news early make better decisions. That requires leaders to respond to problems with curiosity rather than blame — especially when the pressure is highest.',
      'Finally, recovery matters. Sustainable performance depends on deliberate pauses, honest workload conversations and the confidence that rest is part of the job, not a reward for finishing it.',
    ],
  },
  {
    slug: 'the-new-rules-of-customer-loyalty',
    title: 'The New Rules of Customer Loyalty',
    category: 'Strategy',
    author: 'Priya Nair',
    date: 'Feb 06, 2026',
    readTime: '6 min read',
    image: '/images/blog/blog-10.webp',
    excerpt:
      'Loyalty programmes are easy to copy. Loyalty itself is earned in the moments that matter. What customers actually want in 2026.',
    body: [
      'Customers are not loyal to points. They are loyal to the feeling that a company understands them and makes their life easier. The most valuable loyalty strategies are therefore built on relevance rather than rewards.',
      'That starts with memory. Does the organisation remember what a customer told it last time? Does a handoff between teams force the customer to repeat themselves? Every repetition is a small withdrawal from the trust account.',
      'The second rule is consistency. A brilliant experience in one channel is undone by a frustrating one in another. Customers experience the sum of your operations, not your marketing promise.',
      'Finally, give customers control. Clear preferences, honest communication and easy exits build more trust than any retention gimmick. Loyalty is a choice we earn the right to receive again and again.',
    ],
  },
  {
    slug: 'sustainability-as-a-growth-strategy',
    title: 'Sustainability as a Growth Strategy',
    category: 'Sustainability',
    author: 'Sofia Alvarez',
    date: 'Jan 29, 2026',
    readTime: '9 min read',
    image: '/images/blog/blog-video.webp',
    excerpt:
      'The climate transition is not only a risk to manage. For the bold, it is the largest product and market opportunity of the decade.',
    body: [
      'Too many sustainability programmes are framed as cost. The conversation focuses on reporting, compliance and what must be given up. That framing misses the point — and the upside.',
      'Customers, employees and investors are increasingly choosing companies whose actions match their values. That creates room to differentiate on durability, transparency and total cost of ownership, not just price.',
      'The transition also rewards operational innovation. Circular models, lower-carbon logistics and smarter energy use frequently pay back faster than the business case assumes, especially when risk and brand value are included.',
      'The organisations that lead will be those that treat sustainability as a portfolio of growth bets, governed with the same rigour as any other strategic investment. The goal is not to be perfect. It is to be credible and to keep moving.',
    ],
  },
];

export const team = [
  { name: 'Esther Howard', role: 'Co-Founder & CEO', image: '/images/team/team-1.webp', bio: 'Sets the vision and keeps Bexon focused on the outcomes that matter most to clients.' },
  { name: 'Marcus Reed', role: 'Managing Partner', image: '/images/team/team-2.webp', bio: 'Leads large-scale transformation programmes across finance and professional services.' },
  { name: 'Sofia Alvarez', role: 'Head of Sustainability', image: '/images/team/team-3.webp', bio: 'Turns ESG ambition into credible, commercial plans that stand up to scrutiny.' },
  { name: 'Guy Hawkins', role: 'Strategy Director', image: '/images/team/team-4.webp', bio: 'Helps leadership teams find the choices that create durable competitive advantage.' },
  { name: 'Priya Nair', role: 'Customer Experience Lead', image: '/images/team/team-5.webp', bio: 'Designs journeys that feel effortless and earn loyalty one moment at a time.' },
  { name: 'Ralph Edwards', role: 'Technology Partner', image: '/images/team/team-6.webp', bio: 'Builds reliable platforms and pragmatic roadmaps for complex organisations.' },
  { name: 'Devon Lane', role: 'People & Culture Lead', image: '/images/team/team-7.webp', bio: 'Develops leaders and teams so change sticks long after the project ends.' },
  { name: 'Amelia Brooks', role: 'Marketing Director', image: '/images/team/team-8.webp', bio: 'Connects brand, insight and demand in campaigns that compound.' },
];

export const pricing = [
  {
    name: 'Starter',
    tagline: 'For focused teams validating a new direction.',
    monthly: 49,
    annual: 39,
    popular: false,
    features: [
      'Strategy diagnostic session',
      'Access to our insight library',
      'Monthly advisory call',
      'Email support within 48 hours',
      'One active project workspace',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For scaling businesses building repeatable momentum.',
    monthly: 99,
    annual: 79,
    popular: true,
    features: [
      'Everything in Starter',
      'Dedicated engagement lead',
      'Weekly working sessions',
      'Custom research and analysis',
      'Up to five active projects',
      'Priority support within 8 hours',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For complex organisations driving organisation-wide change.',
    monthly: 199,
    annual: 159,
    popular: false,
    features: [
      'Everything in Growth',
      'Cross-functional delivery squad',
      'Board and investor support',
      'Unlimited project workspaces',
      'On-site workshops and coaching',
      'Dedicated 4-hour response SLA',
    ],
  },
];

export const faqs = [
  {
    q: 'What services does Bexon offer to clients?',
    a: 'We partner across strategy, customer experience, sustainability, training, technology and marketing. Most engagements combine several of these to solve a single business challenge end to end, rather than selling isolated deliverables.',
  },
  {
    q: 'How do I get started with Bexon?',
    a: 'Reach out through the contact form or call us. We will schedule a 30-minute discovery conversation to understand your context and goals. If we are a good fit, we will propose a short diagnostic and a clear scope.',
  },
  {
    q: 'How do you ensure the success of a project?',
    a: 'Every engagement has a named lead, measurable outcomes and a shared governance rhythm. We work in short cycles, show progress early, and make sure your team can sustain the change after we leave.',
  },
  {
    q: 'How long will it take to complete my project?',
    a: 'Most focused projects run between four and twelve weeks. Larger transformation programmes are sequenced into phases so you see value early. We agree the timeline together before any work begins.',
  },
  {
    q: 'Can I track the progress of my project?',
    a: 'Yes. You get a live project workspace with milestones, decisions and deliverables, plus a weekly summary and regular working sessions. There are no surprises at the end.',
  },
  {
    q: 'Do you work with organisations outside the United States?',
    a: 'Absolutely. We work with clients across North America, Europe and Latin America, with regional teams in the US, Germany and Brazil. Engagements are delivered remotely or on site as needed.',
  },
];

export const values = [
  {
    icon: 'innovative',
    title: 'Innovative Solutions',
    text: 'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a changing marketplace.',
  },
  {
    icon: 'award',
    title: 'Award-Winning Expertise',
    text: 'Recognised by industry leaders, our team has a proven record of delivering excellence across complex, high-stakes projects.',
  },
  {
    icon: 'support',
    title: 'Dedicated Support',
    text: 'Our team is always available to address your concerns, providing quick and effective solutions that keep your business moving.',
  },
];

export const stats = [
  { value: 93, suffix: '%', label: 'Projects Completed' },
  { value: 20, suffix: 'M', label: 'Reach Worldwide' },
  { value: 8.5, suffix: 'X', label: 'Faster Growth', decimals: 1 },
  { value: 100, suffix: '+', label: 'Awards Archived' },
];

export const clients = [
  '/images/brands/brand-1.webp',
  '/images/brands/brand-2.webp',
  '/images/brands/brand-3.webp',
  '/images/brands/brand-4.webp',
  '/images/brands/brand-5.webp',
  '/images/brands/brand-6.webp',
];

export const offices = [
  {
    city: 'Head Office',
    address: '993 Renner Burg, West Rond, MT 94251-030, USA',
    phone: '+1 (009) 544-7818',
    email: 'support@bexon.com',
    position: { top: '30%', left: '22%' },
  },
  {
    city: 'Regional Office',
    address: 'Hessisch Lichtenau 37235, Kassel, Germany',
    phone: '+1 (009) 880-1810',
    email: 'support@bexon.com',
    position: { top: '24%', left: '52%' },
  },
  {
    city: 'Regional Office',
    address: '32 Altamira, State of Pará, Brazil',
    phone: '+1 (009) 544-7818',
    email: 'support@bexon.com',
    position: { top: '62%', left: '35%' },
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    text: 'We listen deeply, review the evidence and agree what success will look like. No assumptions, no boilerplate.',
  },
  {
    number: '02',
    title: 'Design',
    text: 'We shape the strategy, experience and operating model together with your team, testing options as we go.',
  },
  {
    number: '03',
    title: 'Deliver',
    text: 'We work in short cycles with clear owners, shipping value early and adjusting as the picture becomes clearer.',
  },
  {
    number: '04',
    title: 'Embed',
    text: 'We transfer capability, document the system and stay close until the change is genuinely part of how you work.',
  },
];

export const categoryFilters = ['All', 'Connect', 'Empower', 'Support', 'Business'];
