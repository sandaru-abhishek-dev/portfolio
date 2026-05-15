import {
  Brain, Code2, Globe, Database, Cpu, FlaskConical, Layers, Eye, Music, Leaf, 
  Fingerprint, Thermometer, Building2, Shield, Users, Lightbulb, Search, Target, 
  Compass, Award, BookOpen, Trophy, Zap, Star, Activity, Microscope, Terminal, 
  Train, Smartphone, Network, PenTool, Phone
} from 'lucide-react'

// ───── Navigation Links ─────
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

// ───── Hero Section ─────
export const heroData = {
  greeting: "Hi, I'm",
  name: 'Sandaru Abhishek',
  roles: [
    'BSc Applied Science Undergraduate',
    'Machine Learning Enthusiast',
    'Web Developer',
    'Physics & Math Enthusiast',
  ],
  description:
    'Motivated undergraduate with a strong foundation in physics, mathematics, and computer science. Passionate about machine learning, web development, and solving real-world problems.',
  techBadges: [
    'Python',
    'C/C++',
    'JavaScript',
    'TensorFlow',
    'Flask',
    'MySQL',
  ],
}

// ───── About Section ─────
export const aboutData = {
  bio: `I am a motivated BSc Applied Science undergraduate at Rajarata University of Sri Lanka, specializing in Physics, Mathematics, and Computer Science. I am proficient in Python, C/C++, JavaScript, and PHP, with hands-on experience in machine learning, deep learning, and web development. I have built AI models using TensorFlow and Transformers, and developed database-driven web applications using Flask and MySQL. I am actively involved in university leadership and extracurricular activities, seeking to apply my technical skills and analytical thinking in a professional or research environment.`,
  highlights: [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      text: 'Building predictive models using TensorFlow, Keras, and Transformer architectures like BERT.',
    },
    {
      icon: Code2,
      title: 'Web Development',
      text: 'Developing secure, database-driven applications using Flask, PHP, and MySQL.',
    },
    {
      icon: Microscope,
      title: 'Applied Sciences',
      text: 'Strong foundation in physics and math, experienced with lab instruments and statistical modeling.',
    },
    {
      icon: Users,
      title: 'Leadership & Community',
      text: 'Active committee member, editor for SOPA, and university band member.',
    },
  ],
  interests: [
    'Machine Learning',
    'Web Development',
    'Physics',
    'Mathematics',
    'Computer Science',
    'AI Research',
  ],
}

// ───── Skills Section ─────
export const skillsData = {
  technical: [
    { name: 'Python & C/C++', level: 90 },
    { name: 'JavaScript & PHP', level: 85 },
    { name: 'TensorFlow & Keras', level: 85 },
    { name: 'Flask & SQLAlchemy', level: 80 },
    { name: 'MySQL & Databases', level: 85 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'Git & GitLab', level: 80 },
    { name: 'MATLAB', level: 75 },
  ],
  research: [
    { name: 'Machine Learning', icon: Brain },
    { name: 'Deep Learning', icon: Layers },
    { name: 'Transformers (BERT)', icon: Globe },
    { name: 'Math Modeling', icon: Activity },
    { name: 'Web Development', icon: Code2 },
    { name: 'Data Structures', icon: Database },
    { name: 'OOP Concepts', icon: Terminal },
    { name: 'Signal Processing', icon: Network },
    { name: 'Operating Systems', icon: Cpu },
  ],
  soft: [
    { name: 'Leadership', icon: Award },
    { name: 'Collaboration', icon: Users },
    { name: 'Analytical Thinking', icon: Lightbulb },
    { name: 'Lab Instruments', icon: Microscope },
    { name: 'Problem Solving', icon: Search },
    { name: 'Initiative', icon: Zap },
  ],
}

// ───── Projects Section ─────
export const projectsData = [
  {
    id: 1,
    title: 'Sinhala Sentiment, Humor & Sarcasm Analysis',
    description:
      'Developed a Sinhala sentiment analysis model using Transformer models (BERT/RoBERTa) and SentencePiece tokenization. Implemented custom preprocessing pipelines to classify positive, negative, neutral, sarcastic, and humorous sentiments.',
    tags: ['BERT', 'RoBERTa', 'Python', 'NLP', 'Transformers'],
    icon: Brain,
    color: 'from-indigo-500 to-purple-600',
    github: 'https://github.com/sandaru-abhishek-dev/sentiment-analysis-and-sarcasm-identifying',
  },
  {
    id: 2,
    title: 'Corn Leaf Disease Detection',
    description:
      'Built and trained a CNN model using TensorFlow/Keras with image preprocessing, Dropout regularization, and Adam optimizer. Achieved 94.97% validation accuracy in classifying corn leaf diseases.',
    tags: ['CNN', 'TensorFlow', 'Keras', 'Computer Vision'],
    icon: Leaf,
    color: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/sandaru-abhishek-dev/corn-leaf-disease-identifying-model',
  },
  {
    id: 3,
    title: 'Anime Recommendation Website',
    description:
      'A dynamic web page for recommending anime series to users based on genres and popularity, featuring a modern responsive user interface.',
    tags: ['Web Development', 'Anime', 'HTML', 'CSS', 'JavaScript'],
    icon: Code2,
    color: 'from-pink-500 to-rose-600',
    github: 'https://github.com/sandaru-abhishek-dev/webpage',
  },
  {
    id: 4,
    title: 'Train Ticketing System',
    description:
      'Developed a Flask-based web application with SQLAlchemy/MySQL database integration and RESTful routes. Implemented secure authentication and Jinja2 front-end templates for full-featured ticket booking management.',
    tags: ['Flask', 'Python', 'MySQL', 'SQLAlchemy', 'Web Dev'],
    icon: Train,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 5,
    title: 'Modified Logistic Growth Model',
    description:
      'Mathematics research: Developed a modified logistic growth model to predict the impact of habitat loss on Asian elephant populations in Sri Lanka.',
    tags: ['Mathematics', 'Research', 'Modeling', 'MATLAB'],
    icon: Activity,
    color: 'from-orange-500 to-amber-600',
  },
]

// ───── Experience Timeline ─────
export const experienceData = [
  {
    year: '2020 — Present',
    title: 'Undergraduate Student',
    org: 'Rajarata University of Sri Lanka',
    description:
      'Pursuing a BSc in Applied Sciences. Building a strong foundation in physics, mathematics, and computer science while engaging in AI research.',
    icon: BookOpen,
  },
  {
    year: 'Ongoing',
    title: 'Committee Member',
    org: 'Association of Rajarata ICT (ARICT)',
    description:
      'Coordinating educational ICT programs and actively promoting technology awareness among university students.',
    icon: Users,
  },
  {
    year: 'Ongoing',
    title: 'Editor',
    org: 'Society of Physics and Astronomy (SOPA)',
    description:
      'Managing editorial content for publications and internal communications within the physics and astronomy society.',
    icon: PenTool,
  },
  {
    year: 'Ongoing',
    title: 'Band Member',
    org: 'Fastunes (Faculty Music Band)',
    description:
      'Performing at official university events and cultural functions, fostering collaboration and creative expression.',
    icon: Music,
  },
]

// ───── Education ─────
export const educationData = {
  university: 'Rajarata University of Sri Lanka',
  degree: 'Bachelor of Science in Applied Sciences',
  status: 'Expected Completion: Oct 2026',
  description:
    'Specialization: Physics, Mathematics, and Computer Science. Previous Education: G.C.E. Advanced Level (Physical Science Stream) at H/Ruhunu Vijayaba College, Beliatta (BCC Passes).',
}

// ───── Achievements ─────
export const achievementsData = [
  {
    title: "1st Place — Volleyball",
    description:
      "Secured 1st place in the Freshers' Tournament at Rajarata University of Sri Lanka.",
    icon: Trophy,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: '3rd Place — Weightlifting',
    description:
      "Achieved 3rd place in both the Freshers' Sports Meet and the Faculty Sports Meet.",
    icon: Target,
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Machine Learning Certification',
    description:
      'Hands-On Python Machine Learning with Real World Projects (Udemy, Jan 2026).',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Version Control & CI/CD',
    description:
      'Certifications in Git Version Control and GitLab CI/CD from LinkedIn Learning.',
    icon: Terminal,
    color: 'from-emerald-500 to-teal-500',
  },
]

// ───── Contact ─────
export const contactData = {
  location: 'Tangalle, Sri Lanka',
  email: 'sandaruabhishek32@gmail.com',
  phone: '+94 78 558 0211',
  github: 'https://github.com/sandaru-abhishek-dev',
  linkedin: 'https://www.linkedin.com/in/sandaru-abhishek-8698652a5/',
}
