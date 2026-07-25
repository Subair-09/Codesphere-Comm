import { Program, Course, SkillPath, Testimonial, Mentor, CommunityStat, FAQItem } from '../types';

export const INITIAL_STATS: CommunityStat[] = [
  {
    id: 'stat-1',
    label: 'Community Members',
    value: '1,000+',
    subtext: 'Active learners, students & devs',
    icon: 'Users'
  },
  {
    id: 'stat-2',
    label: 'Technology Programs',
    value: '20+',
    subtext: 'Hands-on learning paths & bootcamps',
    icon: 'BookOpen'
  },
  {
    id: 'stat-3',
    label: 'Mentors & Volunteers',
    value: '50+',
    subtext: 'Experienced industry leaders guiding members',
    icon: 'HeartHandshake'
  },
  {
    id: 'stat-4',
    label: 'Community Projects',
    value: '10+',
    subtext: 'Real-world software built collaboratively',
    icon: 'Code2'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'prog-1',
    title: 'Volunteer Tech Program',
    description: 'Gain practical experience by contributing to meaningful technology projects and community initiatives.',
    icon: 'HandHeart',
    category: 'volunteer',
    highlights: [
      'Work on open-source & non-profit software projects',
      'Receive mentor guidance & peer code reviews',
      'Build a verified GitHub portfolio of real-world work'
    ],
    fullDetails: 'The CodeSphere Volunteer Tech Program connects aspiring developers, designers, and project managers with real open-source and social-impact projects. You work in cross-functional agile teams under expert tech leads.',
    targetAudience: 'Students, bootcamp grads, and self-taught developers seeking practical experience.'
  },
  {
    id: 'prog-2',
    title: 'Technology Training',
    description: 'Learn in-demand technology skills through practical, hands-on training programs led by tech leads.',
    icon: 'GraduationCap',
    category: 'training',
    highlights: [
      'Interactive cohort-based live learning sessions',
      'Hands-on coding labs & weekly project assignments',
      'Personalized feedback from teaching assistants'
    ],
    fullDetails: 'Our intensive, cohort-based training programs cover Full-Stack Development, Data Engineering, Cloud Infrastructure, and AI Engineering. Designed to bridge the gap between theory and industry demand.',
    targetAudience: 'Beginners and early-stage professionals aiming to master modern tech stacks.'
  },
  {
    id: 'prog-3',
    title: 'Mentorship Program',
    description: 'Connect with experienced professionals who can guide your learning and career journey.',
    icon: 'UserCheck',
    category: 'mentorship',
    highlights: [
      '1-on-1 monthly strategic career check-ins',
      'Resume optimization & mock technical interviews',
      'Portfolio review and technical growth roadmap'
    ],
    fullDetails: 'Get paired with senior engineers, cloud architects, data scientists, and product designers working at top regional and global technology firms.',
    targetAudience: 'Mentees looking for personalized career direction and technical guidance.'
  },
  {
    id: 'prog-4',
    title: 'Certification Program',
    description: 'Prepare for industry-recognized certifications and validate your technology skills with confidence.',
    icon: 'Award',
    category: 'certification',
    highlights: [
      'Structured exam prep paths (AWS, Azure, Google Cloud, Meta)',
      'Practice mock exams & study group sessions',
      'Voucher discounts & certification study roadmaps'
    ],
    fullDetails: 'Empowering members to pass global certification exams through curated study cohorts, simulated exam practice, and peer study rooms.',
    targetAudience: 'Professionals seeking formal validation for Cloud, DevOps, AI, and Cybersecurity credentials.'
  },
  {
    id: 'prog-5',
    title: 'Community Projects',
    description: 'Collaborate with other tech enthusiasts to build real-world projects and solve meaningful problems.',
    icon: 'Rocket',
    category: 'projects',
    highlights: [
      'Hackathons & monthly community build sprints',
      'Interdisciplinary team structure (UI/UX + Dev + PM)',
      'Project showcase to industry hiring managers'
    ],
    fullDetails: 'Team up with fellow community members to solve local and regional challenges. Turn ideas into working prototypes and full-stack deployed applications.',
    targetAudience: 'Tech enthusiasts eager to practice teamwork, Git workflows, and product design.'
  },
  {
    id: 'prog-6',
    title: 'Career Development',
    description: 'Develop the technical and professional skills needed to grow and succeed in the technology industry.',
    icon: 'Briefcase',
    category: 'career',
    highlights: [
      'LinkedIn & GitHub profile optimization workshops',
      'Soft skills, communication, and tech interview prep',
      'Direct referrals to hiring partners & internships'
    ],
    fullDetails: 'Comprehensive career readiness training that equips you with soft skills, interview presence, compensation negotiation, and networking techniques.',
    targetAudience: 'Job seekers, career switchers, and young grads transitioning into tech roles.'
  }
];

export const SKILL_PATHS: SkillPath[] = [
  {
    id: 'skill-data',
    name: 'Data Analytics',
    description: 'Transform raw data into strategic business insights using SQL, Python, Power BI, and Tableau.',
    icon: 'BarChart3',
    category: 'Data',
    demand: 'High Growth',
    keyTopics: ['SQL & Relational DBs', 'Python Data Wrangling', 'Power BI / Tableau Visualization', 'Data Storytelling']
  },
  {
    id: 'skill-cloud',
    name: 'Cloud Computing',
    description: 'Architect, deploy, and manage scalable cloud services across AWS, Microsoft Azure, and GCP.',
    icon: 'Cloud',
    category: 'Infrastructure',
    demand: 'Very High',
    keyTopics: ['AWS & Azure Core Services', 'IAM & Security', 'Docker & Kubernetes', 'Cloud Cost Optimization']
  },
  {
    id: 'skill-ai',
    name: 'Artificial Intelligence',
    description: 'Build modern AI applications utilizing Large Language Models, prompt engineering, and GenAI APIs.',
    icon: 'Sparkles',
    category: 'AI & ML',
    demand: 'Top Trending',
    keyTopics: ['GenAI & Gemini API', 'Prompt Engineering', 'LangChain / LlamaIndex', 'Machine Learning Basics']
  },
  {
    id: 'skill-fullstack',
    name: 'Full-Stack Software Engineering',
    description: 'Master complete web app production using React, TypeScript, Node.js, Express, and PostgreSQL.',
    icon: 'Code',
    category: 'Software',
    demand: 'Universal',
    keyTopics: ['React & Next.js', 'Node.js & Express REST APIs', 'TypeScript & State Management', 'CI/CD & Deployment']
  },
  {
    id: 'skill-frontend',
    name: 'Frontend Development',
    description: 'Craft responsive, pixel-perfect, accessible user interfaces with modern React, HTML5, and Tailwind CSS.',
    icon: 'Layout',
    category: 'Software',
    demand: 'High',
    keyTopics: ['Modern UI/UX Patterns', 'React Hooks & State', 'Tailwind CSS / Motion', 'Web Accessibility (WCAG)']
  },
  {
    id: 'skill-backend',
    name: 'Backend Development',
    description: 'Design robust server architectures, REST/GraphQL APIs, microservices, and database schemas.',
    icon: 'Server',
    category: 'Software',
    demand: 'High',
    keyTopics: ['Node.js / Python FastApi', 'SQL & NoSQL Databases', 'API Security & OAuth', 'System Architecture']
  },
  {
    id: 'skill-devops',
    name: 'DevOps & Cloud Engineering',
    description: 'Automate build pipelines, infrastructure as code, container orchestration, and server monitoring.',
    icon: 'Cpu',
    category: 'Infrastructure',
    demand: 'Very High',
    keyTopics: ['Terraform & Ansible', 'GitHub Actions CI/CD', 'Docker & Kubernetes', 'Monitoring (Prometheus/Grafana)']
  },
  {
    id: 'skill-cyber',
    name: 'Cybersecurity',
    description: 'Protect applications, network infrastructure, and cloud environments from cyber threats and breaches.',
    icon: 'ShieldCheck',
    category: 'Security',
    demand: 'Critical',
    keyTopics: ['Network & Web Security', 'Ethical Hacking Basics', 'OWASP Top 10 Mitigation', 'Identity & Compliance']
  },
  {
    id: 'skill-uiux',
    name: 'UI/UX & Graphics Design',
    description: 'Design intuitive digital experiences, wireframes, visual prototypes, and brand style guides in Figma.',
    icon: 'Palette',
    category: 'Design',
    demand: 'High',
    keyTopics: ['Figma Prototyping', 'User Research & Journey Mapping', 'Design Systems', 'Micro-interactions']
  },
  {
    id: 'skill-datascience',
    name: 'Data Science',
    description: 'Apply statistical analysis, predictive modeling, machine learning, and exploratory data mining.',
    icon: 'LineChart',
    category: 'Data',
    demand: 'High',
    keyTopics: ['Python (Pandas, Scikit-learn)', 'Statistical Modeling', 'Machine Learning Algorithms', 'Feature Engineering']
  },
  {
    id: 'skill-mktg',
    name: 'Digital Marketing',
    description: 'Leverage SEO, content strategy, growth analytics, and social campaigns to drive product adoption.',
    icon: 'Megaphone',
    category: 'Business',
    demand: 'Steady',
    keyTopics: ['Search Engine Optimization (SEO)', 'Growth Hacking', 'Google Analytics 4', 'Content Strategy']
  },
  {
    id: 'skill-product',
    name: 'Product Management',
    description: 'Bridge technology and business goals by defining product vision, user stories, and agile sprints.',
    icon: 'Kanban',
    category: 'Business',
    demand: 'High',
    keyTopics: ['Agile & Scrum Methodologies', 'Product Roadmap Planning', 'User Story Writing', 'KPIs & Metrics']
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'AI & Full-Stack Software Engineering',
    category: 'Software',
    description: 'Master full-stack web development with React, Node.js, and integrate server-side Gemini AI features into real applications.',
    duration: '12 Weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    studentsCount: 340,
    featured: true,
    syllabus: [
      { week: 'Week 1-3', topic: 'Modern JavaScript, React & TypeScript Fundamentals', details: 'Mastering ES6+, React Hooks, State Management, and TypeScript typing.' },
      { week: 'Week 4-6', topic: 'Node.js, Express & Database Architecture', details: 'Building REST APIs, Express middleware, PostgreSQL, and authentication.' },
      { week: 'Week 7-9', topic: 'Integrating Gemini AI & LLM Capabilities', details: 'Prompt engineering, @google/genai SDK, structured output, and AI agent routes.' },
      { week: 'Week 10-12', topic: 'Capstone Project & Cloud Deployment', details: 'Full-stack deployment to Cloud Run, CI/CD pipelines, and portfolio preparation.' }
    ]
  },
  {
    id: 'course-2',
    title: 'Data Analytics & Business Intelligence',
    category: 'Data & AI',
    description: 'Learn to extract, clean, analyze, and visualize data using SQL, Python (Pandas/Seaborn), and interactive Power BI dashboards.',
    duration: '8 Weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    studentsCount: 420,
    featured: true,
    syllabus: [
      { week: 'Week 1-2', topic: 'Data Fundamentals & SQL Querying', details: 'Mastering SELECT, JOINs, aggregations, and window functions.' },
      { week: 'Week 3-4', topic: 'Python for Data Analysis', details: 'Pandas dataframes, data cleaning, and statistical EDA.' },
      { week: 'Week 5-6', topic: 'Data Visualization with Power BI', details: 'Designing interactive business dashboards, DAX measures, and charts.' },
      { week: 'Week 7-8', topic: 'Real-world Analytics Project', details: 'End-to-end business case presentation and portfolio building.' }
    ]
  },
  {
    id: 'course-3',
    title: 'Cloud Computing & AWS Architecture',
    category: 'Cloud',
    description: 'Understand cloud fundamentals, EC2, S3, RDS, Lambda, serverless computing, and prepare for AWS Certified Solutions Architect.',
    duration: '10 Weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    studentsCount: 290,
    featured: true,
    syllabus: [
      { week: 'Week 1-2', topic: 'Cloud Fundamentals & AWS Global Infrastructure', details: 'VPC, Subnets, IAM security, and cloud computing principles.' },
      { week: 'Week 3-5', topic: 'Core Compute & Storage (EC2, S3, RDS)', details: 'Virtual machines, block storage, object storage, and relational databases.' },
      { week: 'Week 6-8', topic: 'Serverless & Automation (Lambda, DynamoDB)', details: 'Building event-driven applications with AWS Lambda and DynamoDB.' },
      { week: 'Week 9-10', topic: 'AWS Certification Exam Prep & Practice Labs', details: 'Exam strategy, practice questions, and hands-on architectural labs.' }
    ]
  },
  {
    id: 'course-4',
    title: 'Microsoft Azure Cloud Engineering',
    category: 'Cloud',
    description: 'Master Azure infrastructure, Virtual Machines, Azure App Service, Cosmos DB, and prepare for Azure AZ-104 & AZ-900 exams.',
    duration: '10 Weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    studentsCount: 210,
    featured: true,
    syllabus: [
      { week: 'Week 1-3', topic: 'Azure Subscriptions, Resources & IAM', details: 'Managing Azure Active Directory, RBAC, and Resource Groups.' },
      { week: 'Week 4-6', topic: 'Azure Networking & Compute Solutions', details: 'Configuring Virtual Networks, Load Balancers, and App Services.' },
      { week: 'Week 7-8', topic: 'Data Storage & Security in Azure', details: 'Azure Blob storage, Azure SQL, Key Vaults, and Network Security Groups.' },
      { week: 'Week 9-10', topic: 'AZ-104 Administrator Prep & Practice Exams', details: 'Hands-on Azure portal exercises and certification exam drill.' }
    ]
  },
  {
    id: 'course-5',
    title: 'AWS Cloud Engineering Bootcamp',
    category: 'Cloud',
    description: 'Deep dive into AWS DevOps, Infrastructure as Code using Terraform, container orchestration with EKS, and CI/CD pipelines.',
    duration: '12 Weeks',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    studentsCount: 180,
    featured: true,
    syllabus: [
      { week: 'Week 1-3', topic: 'Infrastructure as Code with Terraform', details: 'Writing declarative cloud code, modules, state management.' },
      { week: 'Week 4-6', topic: 'Docker Containers & Kubernetes (EKS)', details: 'Containerizing applications, deployment manifests, and ingress rules.' },
      { week: 'Week 7-9', topic: 'AWS CodePipeline & GitHub Actions CI/CD', details: 'Automating testing, security scans, and continuous deployment.' },
      { week: 'Week 10-12', topic: 'Site Reliability & Monitoring', details: 'CloudWatch, Prometheus, Grafana, and fault-tolerant architecture.' }
    ]
  },
  {
    id: 'course-6',
    title: 'Artificial Intelligence & Machine Learning Fundamentals',
    category: 'Data & AI',
    description: 'Learn the principles of ML algorithms, neural networks, computer vision, NLP, and practical AI implementation with Python.',
    duration: '10 Weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    studentsCount: 310,
    featured: true,
    syllabus: [
      { week: 'Week 1-3', topic: 'Python ML Stack & Supervised Learning', details: 'NumPy, Scikit-Learn, Linear/Logistic Regression, Decision Trees.' },
      { week: 'Week 4-6', topic: 'Unsupervised Learning & Deep Learning Intro', details: 'Clustering, K-Means, Neural Networks with PyTorch.' },
      { week: 'Week 7-8', topic: 'Natural Language Processing & LLMs', details: 'Text tokenization, Embeddings, Transformer architecture, and Fine-tuning concepts.' },
      { week: 'Week 9-10', topic: 'Deploying AI Models as Web Microservices', details: 'Packaging models into FastApi & Docker for web production.' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Amina Bello',
    role: 'Full-Stack Developer',
    companyOrSchool: 'CodeSphere Community Alumna',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    content: 'CodeSphere Community gave me the opportunity to learn practical skills, connect with like-minded people, and gain the confidence to pursue my career in tech. The mentorship program was a game changer for my resume.',
    programUsed: 'AI & Full-Stack Engineering Track',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Emmanuel Okafor',
    role: 'Cloud Associate Engineer',
    companyOrSchool: 'Community Volunteer & Alumnus',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    content: 'Through CodeSphere’s AWS Certification prep cohort and hands-on volunteer tech projects, I went from zero cloud knowledge to passing my AWS Solutions Architect exam on the first attempt!',
    programUsed: 'AWS Cloud Engineering & Certification',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Chidimma Nnamdi',
    role: 'Junior Data Analyst',
    companyOrSchool: 'Tech Career Switcher',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    content: 'Working on real community data projects alongside mentors helped me build a portfolio that actually impressed employers. I secured my first job within 3 months of joining!',
    programUsed: 'Data Analytics & Mentorship',
    rating: 5
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Dr. Kwame Mensah',
    role: 'Senior Cloud Architect',
    company: 'Global Tech Solutions',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    skills: ['AWS', 'Azure', 'Kubernetes', 'DevOps'],
    bio: '12+ years of enterprise cloud experience. Passionate about empowering the next generation of cloud engineers in Africa.',
    available: true
  },
  {
    id: 'mentor-2',
    name: 'Sarah Adebayo',
    role: 'Lead AI Engineer',
    company: 'Innovate AI Labs',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    skills: ['Python', 'Generative AI', 'TensorFlow', 'React'],
    bio: 'Specialist in GenAI applications and full-stack software. Active speaker and mentor in community tech cohorts.',
    available: true
  },
  {
    id: 'mentor-3',
    name: 'Tunde Bakare',
    role: 'Principal Software Engineer',
    company: 'Fintech Hub',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
    skills: ['Node.js', 'TypeScript', 'System Design', 'PostgreSQL'],
    bio: 'Built systems scaling to millions of daily transactions. Enjoys guiding developers through backend logic & architecture.',
    available: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is CodeSphere Community and who can join?',
    answer: 'CodeSphere Community is an inclusive technology community dedicated to students, young professionals, career switchers, and tech enthusiasts. Anyone eager to learn technology, gain practical project experience, and connect with mentors can join for free.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How does the Volunteer Tech Program work?',
    answer: 'Our Volunteer Tech Program matches members with real open-source and social impact technology projects. You work alongside experienced tech leads, build real products, practice agile collaboration, and create verified portfolio work.',
    category: 'Programs'
  },
  {
    id: 'faq-3',
    question: 'Are CodeSphere training courses and mentorship programs free?',
    answer: 'Our core community membership, volunteer initiatives, and community build sprints are 100% free. Select specialized bootcamps and certification track cohorts offer subsidized pricing with full scholarship options for eligible students.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'How do I get matched with a mentor?',
    answer: 'Once you register as a community member, you can fill out the Mentorship Match form detailing your goals, skill track, and schedule. Matches are made monthly based on your target technology area.',
    category: 'Mentorship'
  },
  {
    id: 'faq-5',
    question: 'Does CodeSphere issue official tech certifications?',
    answer: 'CodeSphere provides structured preparation courses, mock exams, and community study cohorts for internationally recognized certifications (like AWS, Azure, Google Cloud, Meta). Upon completion of our cohorts, members receive a CodeSphere Verification Certificate.',
    category: 'Certifications'
  }
];

export const PARTNERS = [
  { name: 'Technology Partners', label: 'Cloud & Infrastructure', icon: 'Cpu' },
  { name: 'Community Partners', label: 'Developer Groups', icon: 'Users' },
  { name: 'Training Partners', label: 'Skill Academies', icon: 'GraduationCap' },
  { name: 'Industry Partners', label: 'Tech Enterprises', icon: 'Building2' },
  { name: 'Certification Partners', label: 'Exam Labs', icon: 'BadgeCheck' }
];
