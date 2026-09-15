import type { Locale, SiteContent } from './types'

const REPO = 'https://github.com/xaris96/UniversityProjects/tree/main'

const urls = {
  smarket: `${REPO}/Smarket%20(JSP%20-%20JAVA)`,
  insurance: `${REPO}/Insurance-Management%20(Java)`,
  flask: `${REPO}/Flask-Projects%20(Python)`,
  jsp: `${REPO}/JSP-Registration-Exercises`,
  bigData: `${REPO}/Big-Data-Management`,
  llmBias: `${REPO}/Machine-Learning%20(Python)/age_gender_distortion`,
  choices13k: `${REPO}/Machine-Learning%20(Python)/choices13k`,
  doughnut: `${REPO}/Machine-Learning%20(Python)/doughnut`,
  clio: `${REPO}/Clio-Customer-Journey%20(Python)`,
  supermarket: `${REPO}/Supermarket%20data%20(Python)`,
  algorithms: `${REPO}/Algorithm-Assignments%20(Python)`,
  marsMission: 'https://github.com/xaris96/Mars-Mission',
  github: 'https://github.com/xaris96',
}

const en: SiteContent = {
  meta: {
    title: 'Charilaos Ntourakis — Software & Data Engineer',
    description:
      'Portfolio of Charilaos Ntourakis — software engineering, data engineering, and machine learning projects.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Charilaos Ntourakis',
    tagline: 'Software & Data Engineer',
    subtitle:
      'I build full-stack applications and data-driven systems end to end — REST APIs, ML pipelines, and containerised services shipped with automated tests and CI/CD.',
    ctaProjects: 'View Projects',
    ctaContact: 'Get in Touch',
    scrollHint: 'Scroll to explore',
  },
  about: {
    kicker: 'About',
    heading: 'Who I am',
    paragraphs: [
      "I'm a software and data engineer finishing a BSc in Management Science & Technology at AUEB, specialising in Software Engineering and Data Analytics — combined with a decade of operating and supervising mission-critical technical systems in the Hellenic Air Force.",
      "I'm comfortable across the full stack of a data product: writing Python and SQL to build REST APIs and data pipelines, engineering features and training machine learning models, and shipping containerised applications with automated tests and CI/CD.",
      "It's an unusual mix for an early-career engineer — solid engineering fundamentals plus a proven record of accountability, teamwork, and troubleshooting under pressure. I'm open to remote roles, and to on-site or hybrid positions around Heraklion, Crete.",
    ],
    stats: [
      { value: '10 yrs', label: 'Mission-critical operations' },
      { value: '10+', label: 'Software & data projects' },
      { value: 'AUEB', label: "'26 · Software Eng. & Data Analytics" },
    ],
  },
  skills: {
    kicker: 'Skills',
    heading: 'Toolbox',
    groups: [
      { title: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript / TypeScript', 'C# (in progress)'] },
      {
        title: 'Web & Backend',
        items: ['Flask', 'FastAPI', 'REST APIs', 'JSP · Servlets', 'ASP.NET Core (in progress)', 'React (in progress)'],
      },
      { title: 'Data Science & ML', items: ['Pandas · NumPy', 'Scikit-learn', 'XGBoost', 'Statsmodels · SciPy', 'Power BI'] },
      { title: 'Data Visualization', items: ['Matplotlib', 'Seaborn', 'Altair'] },
      { title: 'Databases & Big Data', items: ['MySQL · PostgreSQL · SQLite', 'MongoDB', 'Neo4j', 'Redis'] },
      { title: 'DevOps & Cloud', items: ['Docker', 'CI/CD (GitHub Actions)', 'pytest', 'Azure Event Hubs', 'Git · Linux'] },
    ],
  },
  projects: {
    kicker: 'Projects',
    heading: 'Selected Work',
    subheading:
      'A cross-section of academic and independent projects spanning full-stack engineering, big data, and machine learning.',
    viewCase: 'Read case study',
    backToProjects: 'Back to projects',
    highlightsLabel: 'Highlights',
    stackLabel: 'Stack',
    items: [
      {
        slug: 'mars-mission',
        category: 'Full-Stack & DevOps',
        title: 'Mars Mission — Containerised Flask REST API',
        summary:
          'A Flask REST API with a full CI/CD pipeline: Dockerised, tested with pytest, and auto-deployed via GitHub Actions on every push.',
        highlights: [
          'Flask REST API and web UI backed by SQLite, with full CRUD endpoints',
          'Dockerised with Nginx as a reverse proxy, orchestrated via Docker Compose',
          'GitHub Actions pipeline: pylint checks, an automated pytest suite (86% coverage), Docker image builds, and automatic push to Docker Hub on main',
          'Persistent SQLite storage with Docker volume mounting',
        ],
        narrative:
          'A CRUD REST API and web UI built to practice shipping software the way a real team would: every push is linted, tested, containerised, and pushed to Docker Hub automatically through a GitHub Actions pipeline. The stack runs Flask behind Nginx via Docker Compose, with a pytest suite covering 86% of the application code.',
        tech: ['Python', 'Flask', 'SQLite', 'Docker', 'Nginx', 'GitHub Actions', 'pytest'],
        links: [{ label: 'View on GitHub', href: urls.marsMission }],
        featured: 1,
      },
      {
        slug: 'big-data-management',
        category: 'Big Data & Cloud',
        title: 'Big Data Management — Four Systems, One Semester',
        summary:
          'Four independent big-data projects across Redis, MongoDB, Neo4j, and Azure — an events API, an e-commerce document store, a social graph, and a real-time streaming pipeline.',
        highlights: [
          'Redis: a FastAPI events platform using 7 different Redis structures (HASH, SET, ZSET, LIST, GEO) for check-ins, geo-search, live chat, and a background scheduler',
          'MongoDB: a multi-vendor marketplace ("ShopNest") with a justified embedding-vs-referencing schema, compound/text indexes, and multi-stage aggregation pipelines ($lookup, $bucket, CLV computation)',
          'Neo4j: a social graph of people, friendships, and hobbies queried in Cypher — mutual friends, shared interests, most popular hobby by city',
          'Azure: a live pipeline (Python generator → Event Hub → 5 Stream Analytics jobs → Blob Storage) using Tumbling, Hopping, and Sliding windows to detect burst/fraud-like ATM activity in real time',
        ],
        narrative:
          'Four self-contained systems built to cover the major paradigms in modern data management. A FastAPI + Redis events platform handles check-ins, private/public visibility, geo-search and live chat entirely with in-memory data structures. A MongoDB marketplace ("ShopNest") models vendors, products, customers and orders, with the embedding-vs-referencing tradeoff explicitly justified and exercised through aggregation pipelines like customer lifetime value and monthly revenue trends. A Neo4j graph models a small social network to query friendships and shared hobbies in Cypher. And a real-time pipeline streams simulated ATM transactions through Azure Event Hubs into five parallel Stream Analytics jobs — using tumbling, hopping, and sliding windows to flag high-value withdrawals and burst activity — landing the results in Blob Storage.',
        tech: ['Python', 'FastAPI', 'MongoDB', 'Neo4j', 'Redis', 'Azure Event Hubs', 'Azure Stream Analytics'],
        links: [{ label: 'View on GitHub', href: urls.bigData }],
        featured: 2,
      },
      {
        slug: 'choices13k',
        category: 'Machine Learning',
        title: 'Choices13k — Decision Rate Prediction',
        summary:
          'Predicting choice rates across 13,006 risky-decision problems, comparing four ML models with careful cross-validation and full explainability.',
        highlights: [
          '13,006 decision-under-uncertainty problems from the Choices13k dataset',
          'Feature engineering built on Prospect Theory subjective values and lottery risk ratios',
          'XGBoost, Random Forest, Extra Trees and an MLP compared with GroupKFold CV to prevent leakage across problems',
          'Reliability-based sample weighting, randomized hyperparameter search, and bagged out-of-fold ensembling',
          'Explainability via feature importance, permutation importance, and SHAP values',
        ],
        narrative:
          'A behavioral-economics prediction task: given 13,006 decision-making problems from the Choices13k dataset, predict how often people choose lottery B over lottery A. Feature engineering draws on Prospect Theory to build psychometric subjective-value features, and four model families (XGBoost, Random Forest, Extra Trees, MLP) are compared using GroupKFold cross-validation so that no decision problem leaks between folds — with SHAP values used to explain what actually drives the predictions.',
        tech: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP'],
        featured: 4,
        links: [{ label: 'View on GitHub', href: urls.choices13k }],
      },
      {
        slug: 'llm-bias-analysis',
        category: 'Machine Learning & AI Ethics',
        title: 'LLM Age & Gender Bias Analysis',
        summary:
          "A replication study probing occupational age/gender bias inside GPT-2 Large's vector space, and how that bias amplifies through Google Images search.",
        highlights: [
          'OLS regression and Type II ANOVA (sum coding) to model occupational bias as a function of age and gender',
          "Pearson correlation with Fisher-transformed 95% confidence intervals, Welch's and one-sample t-tests",
          "Treatment-vs-control experiment quantifying how image search results amplify the model's bias",
          'Interactive Altair visualizations plus Seaborn robustness heatmaps and residual diagnostics',
        ],
        narrative:
          "A statistical replication study investigating occupational bias by age and gender inside GPT-2 Large's embedding space. Beyond measuring the bias itself, the project runs a treatment-vs-control experiment to test whether that bias gets amplified when users interact with Google Images search — combining rigorous inferential statistics with interactive visual diagnostics.",
        tech: ['Python', 'Statsmodels', 'SciPy', 'Altair', 'Seaborn'],
        featured: 5,
        links: [{ label: 'View on GitHub', href: urls.llmBias }],
      },
      {
        slug: 'doughnut-economics',
        category: 'Data Visualization',
        title: 'Global Doughnut Economics & Planetary Boundaries',
        summary:
          "Custom interactive visualizations of global sustainability (2000–2022) built on Kate Raworth's Doughnut Economics framework.",
        highlights: [
          'Custom interactive doughnut plots in polar coordinates with dynamic color scaling (Matplotlib + ipympl)',
          'Contrasts the Social Foundation (human needs met) against the Ecological Ceiling (planetary boundaries overshot)',
          'Breaks down responsibility and shortfall by income group: Bottom-40, Middle-40, Top-20',
          'Seaborn trellis/facet bar charts and custom "sandwich" plots to show trends over time',
        ],
        narrative:
          "An analysis and visualization of global sustainable development from 2000 to 2022, built on Kate Raworth's Doughnut Economics framework — weighing how well basic human needs are met (the Social Foundation) against how far planetary boundaries are overshot (the Ecological Ceiling), and breaking the results down by income group. The centerpiece is a custom, fully interactive doughnut plot built from scratch in polar coordinates, rather than relying on an existing charting library's chart types.",
        tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        links: [{ label: 'View on GitHub', href: urls.doughnut }],
      },
      {
        slug: 'clio-customer-journey',
        category: 'Behavioral Analytics',
        title: 'Clio — Audio-Tour Customer Journey Analysis',
        summary:
          "Mapping how users move through an audio-tour app's content over a 4-month window, from session boundaries to active-vs-passive listening.",
        highlights: [
          'Custom sessionization: a new "journey" starts after 30+ minutes of inactivity',
          'Active vs. Passive classification based on "strong control" events (seek, skip, scrub) per story',
          'Completion-rate analysis (≥80% of the final story) to measure content consumption depth',
          'Strict (Android-only) vs. cross-platform proxy sequencing to study whether users follow the intended story order',
          'Association-rule mining (support, confidence, lift) over interaction events',
        ],
        narrative:
          'An analysis of four months of event-log data from Clio, an audio-tour app, aimed at mapping the customer journey end to end. Sessions are defined from scratch with a 30-minute inactivity threshold, users are classified as Active or Passive listeners based on how often they interact with playback controls, and completion is measured as reaching at least 80% of the final story. A cross-platform quirk in how iOS logs events led to a two-tier sequencing analysis — a strict Android-only version and a proxy version combining both platforms — and the project closes with association-rule mining to surface recurring interaction patterns.',
        tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
        links: [{ label: 'View on GitHub', href: urls.clio }],
      },
      {
        slug: 'supermarket-segmentation',
        category: 'Data Science',
        title: 'Supermarket Data — Customer & Basket Segmentation',
        summary:
          'A university group project mining real retail POS data to segment shopping baskets and customers, with RFM analysis, CLV, and market-basket rules.',
        highlights: [
          'University group project — owned data preprocessing, exploratory analysis, clustering, and visualization',
          'K-Means and hierarchical clustering to segment "shopping missions" and customer profiles',
          'Dimensionality reduction with PCA and UMAP ahead of clustering',
          'RFM (Recency, Frequency, Monetary) analysis and Customer Lifetime Value estimation',
          'Market Basket Analysis with the Apriori algorithm, plus NetworkX graphs of product co-purchase patterns',
        ],
        narrative:
          'A university group project mining purchasing patterns from real retail point-of-sale data. My role covered data preprocessing, exploratory analysis, clustering, and visualization: K-Means and hierarchical clustering (with PCA/UMAP for dimensionality reduction) segment both shopping baskets into distinct "missions" and customers into behavioral groups, complemented by RFM analysis and CLV estimation. Market Basket Analysis with the Apriori algorithm, visualized as NetworkX co-purchase graphs, surfaces which products tend to sell together.',
        tech: ['Python', 'Scikit-learn', 'UMAP', 'NetworkX'],
        links: [{ label: 'View on GitHub', href: urls.supermarket }],
        featured: 3,
      },
      {
        slug: 'smarket',
        category: 'Full-Stack Web Development',
        title: 'Smarket — Smart Shopping Price Comparison',
        summary:
          'A full-stack web app that builds a shopping basket and automatically finds which nearby supermarket offers the lowest total price.',
        highlights: [
          'Server-rendered JSP views backed by Servlets and a JDBC/MySQL data layer',
          'Basket-to-store price comparison logic across multiple simulated supermarkets',
          'User accounts, product catalog, and cart flows built from scratch',
        ],
        narrative:
          'Smarket is a price-comparison and smart-shopping platform: users build a personal product basket and the system calculates, in real time, which nearby supermarket would give them the lowest total price for that exact basket. It was built end-to-end — schema, server-side logic, and UI — as a classic three-tier JSP/Servlet/JDBC application.',
        tech: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL'],
        links: [{ label: 'View on GitHub', href: urls.smarket }],
      },
      {
        slug: 'web-apps-rest-apis',
        category: 'Web Development',
        title: 'Web Applications & REST APIs (Flask & JSP)',
        summary:
          'A series of Flask (Python) and JSP (Java) web apps covering user registration, session/login flows, and server-side form validation.',
        highlights: [
          'Parallel implementations of the same auth/session concepts in two stacks: Python/Flask and Java/JSP',
          'Registration, login, dashboard, and logout flows with server-side validation',
          'Hands-on comparison of request handling across two different web frameworks',
        ],
        narrative:
          'A coursework series built to master the fundamentals of server-side web development: user registration, login/logout, session management, and form validation — implemented twice, once in Flask (Python) and once in JSP/Servlets (Java), to compare how the same problem is solved across two different web stacks.',
        tech: ['Python', 'Flask', 'Java', 'JSP', 'Servlets'],
        links: [
          { label: 'Flask — View on GitHub', href: urls.flask },
          { label: 'JSP — View on GitHub', href: urls.jsp },
        ],
      },
      {
        slug: 'insurance-management',
        category: 'Software Engineering',
        title: 'Insurance Management System',
        summary:
          'A standalone OOP system for managing insurance contracts and customers, built entirely with in-memory data structures — no external database.',
        highlights: [
          'Clean object model separating Customer, Insurance, Life and Health policy types',
          'Custom in-memory data structures instead of a database layer',
          'Focus on OOP design: inheritance, encapsulation, and polymorphism',
        ],
        narrative:
          'A self-contained information system for managing insurance contracts and customers, designed with a strong emphasis on object-oriented principles. Policy types (Life, Health) are modeled through inheritance, and the whole system runs on custom in-memory data structures rather than an external database, keeping the focus squarely on software design.',
        tech: ['Java', 'OOP'],
        links: [{ label: 'View on GitHub', href: urls.insurance }],
      },
      {
        slug: 'algorithms',
        category: 'Algorithms & Graph Theory',
        title: 'Algorithm & Graph Theory Assignments',
        summary:
          'A set of algorithmic problems spanning combinatorial tiling, time-series burst detection, and influence maximization on random graphs.',
        highlights: [
          'Tromino tiling: a recursive divide-and-conquer solution for deficient boards',
          'Burst detection: identifying high-intensity intervals in event streams via a multi-state model',
          'Influence maximization on Erdős–Rényi random graphs for social-network-style spread modeling',
        ],
        narrative:
          'A set of independent algorithm-design assignments: a recursive divide-and-conquer solver for tromino tiling of deficient chessboards, a multi-state burst-detection model for finding high-intensity intervals in event streams, and an influence-maximization study on Erdős–Rényi random graphs — the same class of problem behind viral-spread and social-network modeling.',
        tech: ['Python', 'Algorithms', 'Graph Theory'],
        links: [{ label: 'View on GitHub', href: urls.algorithms }],
      },
    ],
  },
  experience: {
    kicker: 'Experience',
    heading: 'Experience',
    items: [
      {
        role: 'Technical Operations Supervisor',
        org: 'Hellenic Air Force',
        period: '2016 — 2026',
        bullets: [
          'Operated and maintained complex, mission-critical air-defence systems in a zero-error-tolerance environment, sustaining continuous operational readiness.',
          'Led and trained technical personnel, coordinating daily task allocation, shift planning, and on-the-job mentoring.',
          'Diagnosed and resolved system faults under time pressure, working cross-functionally with maintenance, logistics, and command units.',
          'Produced structured operational reporting used for decision-making, and handled sensitive information under strict security protocols.',
        ],
      },
    ],
  },
  education: {
    kicker: 'Education',
    heading: 'Education',
    items: [
      {
        degree: 'BSc in Management Science & Technology (DMST)',
        institution: 'Athens University of Economics and Business (AUEB)',
        period: '2022 — 2026',
        details: [
          'Specialisation: Software Engineering & Data Analytics',
          'Coursework: Databases & SQL, Algorithms & Data Structures, OOP, Machine Learning, Data Analysis & Statistics, Information Systems Architecture',
        ],
      },
      {
        degree: 'Hellenic Air Force NCO Academy (ΣΥΔ)',
        institution: 'Hellenic Air Force',
        period: '2014 — 2016',
        details: [],
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    heading: "Let's Connect",
    blurb:
      'Open to remote roles (Greece / EU) and on-site or hybrid positions around Heraklion, Crete — feel free to reach out.',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    locationLabel: 'Location',
    email: 'xarisntourakis@yahoo.gr',
    location: 'Heraklion, Crete, Greece',
    linkedin: 'https://www.linkedin.com/in/charilaos-ntourakis/',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React, TypeScript & Tailwind CSS',
  },
}

const gr: SiteContent = {
  meta: {
    title: 'Χαρίλαος Ντουράκης — Software & Data Engineer',
    description:
      'Portfolio του Χαρίλαου Ντουράκη — projects software engineering, data engineering και μηχανικής μάθησης.',
  },
  nav: {
    about: 'Προφίλ',
    skills: 'Δεξιότητες',
    projects: 'Projects',
    experience: 'Εμπειρία',
    education: 'Σπουδές',
    contact: 'Επικοινωνία',
  },
  hero: {
    greeting: 'Γεια, είμαι ο',
    name: 'Charilaos Ntourakis',
    tagline: 'Software & Data Engineer',
    subtitle:
      'Χτίζω full-stack εφαρμογές και data-driven συστήματα από άκρη σε άκρη — REST APIs, ML pipelines και containerized υπηρεσίες με automated tests και CI/CD.',
    ctaProjects: 'Δες τα Projects',
    ctaContact: 'Επικοινωνία',
    scrollHint: 'Κύλισε για να εξερευνήσεις',
  },
  about: {
    kicker: 'Προφίλ',
    heading: 'Ποιος είμαι',
    paragraphs: [
      'Είμαι software & data engineer, ολοκληρώνοντας το πτυχίο μου στη Διοικητική Επιστήμη και Τεχνολογία στο ΟΠΑ με ειδίκευση σε Software Engineering & Data Analytics — σε συνδυασμό με μια δεκαετία λειτουργίας και εποπτείας κρίσιμων τεχνικών συστημάτων στην Πολεμική Αεροπορία.',
      'Καλύπτω όλο το φάσμα ενός data product: γράφω Python και SQL για REST APIs και data pipelines, φτιάχνω features και εκπαιδεύω μοντέλα μηχανικής μάθησης, και «σερβίρω» containerized εφαρμογές με automated tests και CI/CD.',
      'Είναι ένας ασυνήθιστος συνδυασμός για έναν early-career engineer — στέρεα θεμέλια μηχανικής, μαζί με αποδεδειγμένη υπευθυνότητα, ομαδικότητα και επίλυση προβλημάτων υπό πίεση. Είμαι ανοιχτός σε remote ρόλους, καθώς και σε on-site ή hybrid θέσεις γύρω από το Ηράκλειο Κρήτης.',
    ],
    stats: [
      { value: '10 έτη', label: 'Κρίσιμες επιχειρησιακές λειτουργίες' },
      { value: '10+', label: 'Software & data projects' },
      { value: 'ΟΠΑ', label: "'26 · Software Eng. & Data Analytics" },
    ],
  },
  skills: {
    kicker: 'Δεξιότητες',
    heading: 'Εργαλειοθήκη',
    groups: [
      { title: 'Γλώσσες Προγραμματισμού', items: ['Python', 'Java', 'SQL', 'JavaScript / TypeScript', 'C# (σε εξέλιξη)'] },
      {
        title: 'Web & Backend',
        items: ['Flask', 'FastAPI', 'REST APIs', 'JSP · Servlets', 'ASP.NET Core (σε εξέλιξη)', 'React (σε εξέλιξη)'],
      },
      { title: 'Data Science & ML', items: ['Pandas · NumPy', 'Scikit-learn', 'XGBoost', 'Statsmodels · SciPy', 'Power BI'] },
      { title: 'Οπτικοποίηση Δεδομένων', items: ['Matplotlib', 'Seaborn', 'Altair'] },
      { title: 'Βάσεις Δεδομένων & Big Data', items: ['MySQL · PostgreSQL · SQLite', 'MongoDB', 'Neo4j', 'Redis'] },
      { title: 'DevOps & Cloud', items: ['Docker', 'CI/CD (GitHub Actions)', 'pytest', 'Azure Event Hubs', 'Git · Linux'] },
    ],
  },
  projects: {
    kicker: 'Projects',
    heading: 'Ενδεικτικά Projects',
    subheading:
      'Μια τομή από ακαδημαϊκά και ανεξάρτητα projects που καλύπτουν full-stack ανάπτυξη, big data και machine learning.',
    viewCase: 'Δες την ανάλυση',
    backToProjects: 'Πίσω στα projects',
    highlightsLabel: 'Highlights',
    stackLabel: 'Stack',
    items: [
      {
        slug: 'mars-mission',
        category: 'Full-Stack & DevOps',
        title: 'Mars Mission — Containerized Flask REST API',
        summary:
          'Ένα Flask REST API με πλήρες CI/CD pipeline: Dockerized, tested με pytest, και auto-deployed μέσω GitHub Actions σε κάθε push.',
        highlights: [
          'Flask REST API και web UI με SQLite, με πλήρη CRUD endpoints',
          'Dockerized με Nginx ως reverse proxy, orchestrated μέσω Docker Compose',
          'GitHub Actions pipeline: έλεγχοι pylint, αυτοματοποιημένο pytest suite (86% coverage), Docker image builds και αυτόματο push στο Docker Hub στο main',
          'Persistent SQLite storage με Docker volume mounting',
        ],
        narrative:
          'Ένα CRUD REST API και web UI φτιαγμένο για εξάσκηση στο πώς «σερβίρεται» λογισμικό όπως θα το έκανε μια πραγματική ομάδα: κάθε push περνάει από lint, tests, containerization και αυτόματο push στο Docker Hub μέσω ενός GitHub Actions pipeline. Το stack τρέχει Flask πίσω από Nginx μέσω Docker Compose, με ένα pytest suite που καλύπτει το 86% του κώδικα της εφαρμογής.',
        tech: ['Python', 'Flask', 'SQLite', 'Docker', 'Nginx', 'GitHub Actions', 'pytest'],
        links: [{ label: 'Προβολή στο GitHub', href: urls.marsMission }],
        featured: 1,
      },
      {
        slug: 'big-data-management',
        category: 'Big Data & Cloud',
        title: 'Big Data Management — Τέσσερα Συστήματα, Ένα Εξάμηνο',
        summary:
          'Τέσσερα ανεξάρτητα big-data projects σε Redis, MongoDB, Neo4j και Azure — ένα events API, ένα e-commerce document store, ένα social graph και ένα real-time streaming pipeline.',
        highlights: [
          'Redis: πλατφόρμα events σε FastAPI με 7 διαφορετικές δομές Redis (HASH, SET, ZSET, LIST, GEO) για check-in, γεωγραφική αναζήτηση, live chat και background scheduler',
          'MongoDB: marketplace πολλαπλών vendors ("ShopNest") με τεκμηριωμένη απόφαση embedding-vs-referencing, compound/text indexes και πολυσταδιακά aggregation pipelines ($lookup, $bucket, υπολογισμός CLV)',
          'Neo4j: κοινωνικό γράφημα ανθρώπων, φιλιών και χόμπι σε Cypher — κοινοί φίλοι, κοινά ενδιαφέροντα, πιο δημοφιλές χόμπι ανά πόλη',
          'Azure: live pipeline (Python generator → Event Hub → 5 Stream Analytics jobs → Blob Storage) με Tumbling, Hopping και Sliding windows για εντοπισμό ύποπτης/burst δραστηριότητας ATM σε πραγματικό χρόνο',
        ],
        narrative:
          'Τέσσερα αυτόνομα συστήματα χτισμένα για να καλύψουν τα βασικά paradigms στη σύγχρονη διαχείριση δεδομένων. Μια πλατφόρμα events σε FastAPI + Redis διαχειρίζεται check-ins, public/private ορατότητα, γεωαναζήτηση και live chat αποκλειστικά με δομές δεδομένων στη μνήμη. Ένα marketplace σε MongoDB ("ShopNest") μοντελοποιεί vendors, προϊόντα, πελάτες και παραγγελίες, με το δίλημμα embedding-vs-referencing ρητά τεκμηριωμένο και δοκιμασμένο μέσω aggregation pipelines όπως το customer lifetime value και οι μηνιαίες τάσεις εσόδων. Ένα γράφημα σε Neo4j μοντελοποιεί ένα μικρό κοινωνικό δίκτυο για ερωτήματα φιλιών και κοινών χόμπι σε Cypher. Και ένα real-time pipeline στέλνει προσομοιωμένες συναλλαγές ATM μέσω Azure Event Hubs σε πέντε παράλληλα Stream Analytics jobs — χρησιμοποιώντας tumbling, hopping και sliding windows για να εντοπίσει withdrawals υψηλής αξίας και burst δραστηριότητα — καταλήγοντας τα αποτελέσματα σε Blob Storage.',
        tech: ['Python', 'FastAPI', 'MongoDB', 'Neo4j', 'Redis', 'Azure Event Hubs', 'Azure Stream Analytics'],
        links: [{ label: 'Προβολή στο GitHub', href: urls.bigData }],
        featured: 2,
      },
      {
        slug: 'choices13k',
        category: 'Machine Learning',
        title: 'Choices13k — Πρόβλεψη Ποσοστού Επιλογής',
        summary:
          'Πρόβλεψη ποσοστού επιλογής σε 13.006 προβλήματα ριψοκίνδυνης απόφασης, συγκρίνοντας τέσσερα μοντέλα ΜΜ με προσεκτικό cross-validation και πλήρη ερμηνευσιμότητα.',
        highlights: [
          '13.006 προβλήματα λήψης απόφασης υπό αβεβαιότητα από το dataset Choices13k',
          'Feature engineering βασισμένο σε subjective values της Prospect Theory και risk ratios λοταριών',
          'Σύγκριση XGBoost, Random Forest, Extra Trees και MLP με GroupKFold CV για αποφυγή data leakage μεταξύ προβλημάτων',
          'Sample weighting βάσει αξιοπιστίας, randomized hyperparameter search και bagged out-of-fold ensembling',
          'Ερμηνευσιμότητα μέσω feature importance, permutation importance και SHAP values',
        ],
        narrative:
          'Ένα πρόβλημα πρόβλεψης από τη συμπεριφορική οικονομική: δοθέντων 13.006 προβλημάτων λήψης απόφασης από το dataset Choices13k, πρόβλεψε πόσο συχνά οι άνθρωποι επιλέγουν τη λοταρία B έναντι της A. Το feature engineering αντλεί από την Prospect Theory για να χτίσει ψυχομετρικά χαρακτηριστικά υποκειμενικής αξίας, και τέσσερις οικογένειες μοντέλων (XGBoost, Random Forest, Extra Trees, MLP) συγκρίνονται με GroupKFold cross-validation ώστε να μη διαρρέει κανένα πρόβλημα ανάμεσα στα folds — με SHAP values να εξηγούν τι πραγματικά οδηγεί τις προβλέψεις.',
        tech: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP'],
        featured: 4,
        links: [{ label: 'Προβολή στο GitHub', href: urls.choices13k }],
      },
      {
        slug: 'llm-bias-analysis',
        category: 'Machine Learning & AI Ethics',
        title: 'Ανάλυση Μεροληψίας Ηλικίας & Φύλου σε LLM',
        summary:
          'Μελέτη αναπαραγωγής που διερευνά την επαγγελματική μεροληψία ηλικίας/φύλου στον διανυσματικό χώρο του GPT-2 Large, και πώς αυτή ενισχύεται μέσω Google Images.',
        highlights: [
          'OLS regression και Type II ANOVA (sum coding) για μοντελοποίηση της επαγγελματικής μεροληψίας ως συνάρτηση ηλικίας και φύλου',
          "Pearson correlation με Fisher-transformed 95% confidence intervals, Welch's και one-sample t-tests",
          'Πείραμα Treatment-vs-control που ποσοτικοποιεί πώς τα αποτελέσματα αναζήτησης εικόνων ενισχύουν τη μεροληψία του μοντέλου',
          'Διαδραστικές οπτικοποιήσεις σε Altair, robustness heatmaps και residual diagnostics σε Seaborn',
        ],
        narrative:
          'Μια στατιστική μελέτη αναπαραγωγής που διερευνά την επαγγελματική μεροληψία ως προς την ηλικία και το φύλο μέσα στον embedding χώρο του GPT-2 Large. Πέρα από τη μέτρηση της ίδιας της μεροληψίας, το project τρέχει ένα πείραμα treatment-vs-control για να ελέγξει αν αυτή ενισχύεται όταν οι χρήστες αλληλεπιδρούν με την αναζήτηση Google Images — συνδυάζοντας αυστηρή επαγωγική στατιστική με διαδραστικά οπτικά diagnostics.',
        tech: ['Python', 'Statsmodels', 'SciPy', 'Altair', 'Seaborn'],
        featured: 5,
        links: [{ label: 'Προβολή στο GitHub', href: urls.llmBias }],
      },
      {
        slug: 'doughnut-economics',
        category: 'Data Visualization',
        title: 'Doughnut Economics & Πλανητικά Όρια',
        summary:
          'Custom διαδραστικές οπτικοποιήσεις της παγκόσμιας βιωσιμότητας (2000–2022) πάνω στο πλαίσιο Doughnut Economics της Kate Raworth.',
        highlights: [
          'Custom διαδραστικά doughnut plots σε πολικές συντεταγμένες με δυναμικό χρωματικό scaling (Matplotlib + ipympl)',
          'Αντιπαραβάλλει το Social Foundation (κάλυψη βασικών αναγκών) με το Ecological Ceiling (υπέρβαση πλανητικών ορίων)',
          'Ανάλυση ευθύνης και στέρησης ανά εισοδηματική ομάδα: Bottom-40, Middle-40, Top-20',
          'Seaborn trellis/facet bar charts και custom "sandwich" plots για τάσεις στον χρόνο',
        ],
        narrative:
          'Μια ανάλυση και οπτικοποίηση της παγκόσμιας βιώσιμης ανάπτυξης από το 2000 έως το 2022, χτισμένη πάνω στο πλαίσιο Doughnut Economics της Kate Raworth — ζυγίζοντας πόσο καλά καλύπτονται οι βασικές ανθρώπινες ανάγκες (Social Foundation) απέναντι στο πόσο ξεπερνιούνται τα πλανητικά όρια (Ecological Ceiling), ανά εισοδηματική ομάδα. Το κεντρικό στοιχείο είναι ένα custom, πλήρως διαδραστικό doughnut plot χτισμένο from scratch σε πολικές συντεταγμένες, αντί να βασίζεται σε έτοιμους τύπους γραφημάτων μιας βιβλιοθήκης.',
        tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        links: [{ label: 'Προβολή στο GitHub', href: urls.doughnut }],
      },
      {
        slug: 'clio-customer-journey',
        category: 'Behavioral Analytics',
        title: 'Clio — Ανάλυση Διαδρομής Χρήστη σε Εφαρμογή Ξεναγήσεων',
        summary:
          'Χαρτογράφηση του πώς κινούνται οι χρήστες μέσα σε μια εφαρμογή ακουστικών ξεναγήσεων για 4 μήνες, από τα όρια sessions μέχρι το active-vs-passive listening.',
        highlights: [
          'Custom sessionization: νέο "journey" ξεκινά μετά από 30+ λεπτά αδράνειας',
          'Ταξινόμηση Active vs. Passive βάσει "strong control" events (seek, skip, scrub) ανά story',
          'Ανάλυση ποσοστού ολοκλήρωσης (≥80% του τελευταίου story) για μέτρηση βάθους κατανάλωσης περιεχομένου',
          'Strict (μόνο Android) vs. cross-platform proxy ανάλυση αλληλουχίας για το αν οι χρήστες ακολουθούν την προβλεπόμενη σειρά',
          'Εξόρυξη κανόνων συσχέτισης (support, confidence, lift) πάνω σε events αλληλεπίδρασης',
        ],
        narrative:
          'Μια ανάλυση τεσσάρων μηνών event-log δεδομένων από το Clio, μια εφαρμογή ακουστικών ξεναγήσεων, με στόχο τη χαρτογράφηση της διαδρομής του χρήστη από άκρη σε άκρη. Τα sessions ορίζονται from scratch με όριο αδράνειας 30 λεπτών, οι χρήστες ταξινομούνται ως Active ή Passive listeners βάσει του πόσο συχνά αλληλεπιδρούν με τα controls αναπαραγωγής, και η ολοκλήρωση μετριέται ως άκουσμα τουλάχιστον του 80% του τελευταίου story. Μια ιδιαιτερότητα στο πώς το iOS καταγράφει events οδήγησε σε ανάλυση αλληλουχίας δύο επιπέδων — μια strict μόνο-Android εκδοχή και μια proxy εκδοχή που συνδυάζει και τις δύο πλατφόρμες — και το project κλείνει με εξόρυξη κανόνων συσχέτισης για την ανάδειξη επαναλαμβανόμενων μοτίβων αλληλεπίδρασης.',
        tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
        links: [{ label: 'Προβολή στο GitHub', href: urls.clio }],
      },
      {
        slug: 'supermarket-segmentation',
        category: 'Data Science',
        title: 'Supermarket Data — Τμηματοποίηση Πελατών & Καλαθιού',
        summary:
          'Ομαδική πανεπιστημιακή εργασία εξόρυξης πραγματικών δεδομένων λιανικής POS για τμηματοποίηση καλαθιών και πελατών, με ανάλυση RFM, CLV και κανόνες market-basket.',
        highlights: [
          'Ομαδική πανεπιστημιακή εργασία — ανέλαβα το data preprocessing, την exploratory analysis, το clustering και την οπτικοποίηση',
          'K-Means και hierarchical clustering για τμηματοποίηση "shopping missions" και προφίλ πελατών',
          'Μείωση διαστάσεων με PCA και UMAP πριν το clustering',
          'Ανάλυση RFM (Recency, Frequency, Monetary) και εκτίμηση Customer Lifetime Value',
          'Market Basket Analysis με τον αλγόριθμο Apriori, και γραφήματα NetworkX για μοτίβα συναγοράς προϊόντων',
        ],
        narrative:
          'Μια ομαδική πανεπιστημιακή εργασία που εξορύσσει αγοραστικά μοτίβα από πραγματικά δεδομένα πωλήσεων POS. Ο δικός μου ρόλος κάλυψε το data preprocessing, την exploratory analysis, το clustering και την οπτικοποίηση: K-Means και hierarchical clustering (με PCA/UMAP για μείωση διαστάσεων) τμηματοποιούν τόσο τα καλάθια αγορών σε ξεχωριστές "αποστολές" όσο και τους πελάτες σε ομάδες συμπεριφοράς, συμπληρωμένα με ανάλυση RFM και εκτίμηση CLV. Το Market Basket Analysis με τον αλγόριθμο Apriori, οπτικοποιημένο ως γραφήματα συναγοράς σε NetworkX, αναδεικνύει ποια προϊόντα τείνουν να πωλούνται μαζί.',
        tech: ['Python', 'Scikit-learn', 'UMAP', 'NetworkX'],
        links: [{ label: 'Προβολή στο GitHub', href: urls.supermarket }],
        featured: 3,
      },
      {
        slug: 'smarket',
        category: 'Full-Stack Web Development',
        title: 'Smarket — Σύγκριση Τιμών Έξυπνων Αγορών',
        summary:
          'Full-stack web εφαρμογή όπου ο χρήστης φτιάχνει καλάθι αγορών και το σύστημα βρίσκει αυτόματα ποιο κοντινό σούπερ μάρκετ έχει τη χαμηλότερη συνολική τιμή.',
        highlights: [
          'Server-rendered JSP views με Servlets και data layer σε JDBC/MySQL',
          'Λογική σύγκρισης καλαθιού-προς-κατάστημα ανάμεσα σε πολλαπλά simulated σούπερ μάρκετ',
          'Λογαριασμοί χρηστών, κατάλογος προϊόντων και ροή καλαθιού, χτισμένα from scratch',
        ],
        narrative:
          'Το Smarket είναι μια πλατφόρμα σύγκρισης τιμών: ο χρήστης φτιάχνει το προσωπικό του καλάθι προϊόντων και το σύστημα υπολογίζει σε πραγματικό χρόνο ποιο κοντινό σούπερ μάρκετ προσφέρει τη χαμηλότερη συνολική τιμή για ακριβώς αυτό το καλάθι. Αναπτύχθηκε end-to-end — schema, server-side λογική και UI — ως μια κλασική three-tier JSP/Servlet/JDBC εφαρμογή.',
        tech: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL'],
        links: [{ label: 'Προβολή στο GitHub', href: urls.smarket }],
      },
      {
        slug: 'web-apps-rest-apis',
        category: 'Web Development',
        title: 'Web Εφαρμογές & REST APIs (Flask & JSP)',
        summary:
          'Σειρά web εφαρμογών σε Flask (Python) και JSP (Java) για εγγραφή χρηστών, ροές login/session και server-side επικύρωση φορμών.',
        highlights: [
          'Παράλληλες υλοποιήσεις των ίδιων εννοιών auth/session σε δύο stacks: Python/Flask και Java/JSP',
          'Ροές εγγραφής, login, dashboard και logout με server-side validation',
          'Πρακτική σύγκριση διαχείρισης requests ανάμεσα σε δύο διαφορετικά web frameworks',
        ],
        narrative:
          'Μια σειρά ασκήσεων χτισμένη για να εμπεδωθούν τα θεμέλια της server-side web ανάπτυξης: εγγραφή χρηστών, login/logout, διαχείριση session και επικύρωση φορμών — υλοποιημένα δύο φορές, μία σε Flask (Python) και μία σε JSP/Servlets (Java), ώστε να συγκριθεί πώς λύνεται το ίδιο πρόβλημα σε δύο διαφορετικά web stacks.',
        tech: ['Python', 'Flask', 'Java', 'JSP', 'Servlets'],
        links: [
          { label: 'Flask — GitHub', href: urls.flask },
          { label: 'JSP — GitHub', href: urls.jsp },
        ],
      },
      {
        slug: 'insurance-management',
        category: 'Software Engineering',
        title: 'Σύστημα Διαχείρισης Ασφαλιστικών Συμβολαίων',
        summary:
          'Αυτόνομο OOP σύστημα διαχείρισης ασφαλιστικών συμβολαίων και πελατών, χτισμένο εξολοκλήρου με δομές δεδομένων στη μνήμη — χωρίς εξωτερική βάση.',
        highlights: [
          'Καθαρό object model που διαχωρίζει Customer, Insurance, Life και Health τύπους συμβολαίων',
          'Custom δομές δεδομένων στη μνήμη αντί για επίπεδο βάσης δεδομένων',
          'Έμφαση σε OOP σχεδίαση: κληρονομικότητα, encapsulation, πολυμορφισμός',
        ],
        narrative:
          'Ένα αυτόνομο πληροφοριακό σύστημα διαχείρισης ασφαλιστικών συμβολαίων και πελατών, σχεδιασμένο με έμφαση στις αντικειμενοστρεφείς αρχές. Οι τύποι συμβολαίων (Life, Health) μοντελοποιούνται μέσω κληρονομικότητας, και όλο το σύστημα λειτουργεί πάνω σε custom δομές δεδομένων στη μνήμη αντί για εξωτερική βάση, κρατώντας την εστίαση καθαρά στη σχεδίαση λογισμικού.',
        tech: ['Java', 'OOP'],
        links: [{ label: 'Προβολή στο GitHub', href: urls.insurance }],
      },
      {
        slug: 'algorithms',
        category: 'Algorithms & Graph Theory',
        title: 'Ασκήσεις Αλγορίθμων & Θεωρίας Γράφων',
        summary:
          'Ένα σύνολο αλγοριθμικών προβλημάτων που καλύπτει combinatorial tiling, ανίχνευση bursts σε χρονοσειρές και influence maximization σε τυχαία γραφήματα.',
        highlights: [
          'Tromino tiling: αναδρομική λύση divide-and-conquer για ελλειμματικές σκακιέρες',
          'Burst detection: εντοπισμός διαστημάτων υψηλής έντασης σε ροές events μέσω multi-state μοντέλου',
          'Influence maximization σε τυχαία γραφήματα Erdős–Rényi για μοντελοποίηση διάδοσης τύπου κοινωνικού δικτύου',
        ],
        narrative:
          'Ένα σύνολο ανεξάρτητων ασκήσεων σχεδίασης αλγορίθμων: μια αναδρομική divide-and-conquer λύση για tromino tiling ελλειμματικών σκακιερών, ένα multi-state μοντέλο burst-detection για εντοπισμό διαστημάτων υψηλής έντασης σε ροές events, και μια μελέτη influence-maximization σε τυχαία γραφήματα Erdős–Rényi — την ίδια κατηγορία προβλήματος πίσω από τη μοντελοποίηση viral διάδοσης και κοινωνικών δικτύων.',
        tech: ['Python', 'Algorithms', 'Graph Theory'],
        links: [{ label: 'Προβολή στο GitHub', href: urls.algorithms }],
      },
    ],
  },
  experience: {
    kicker: 'Εμπειρία',
    heading: 'Εμπειρία',
    items: [
      {
        role: 'Technical Operations Supervisor',
        org: 'Πολεμική Αεροπορία',
        period: '2016 — 2026',
        bullets: [
          'Λειτουργία και συντήρηση σύνθετων, κρίσιμων συστημάτων αεράμυνας σε περιβάλλον μηδενικής ανοχής σε σφάλμα, διατηρώντας συνεχή επιχειρησιακή ετοιμότητα.',
          'Καθοδήγηση και εκπαίδευση τεχνικού προσωπικού, συντονισμός καθημερινής ανάθεσης εργασιών, προγραμματισμού βαρδιών και on-the-job mentoring.',
          'Διάγνωση και επίλυση βλαβών συστημάτων υπό πίεση χρόνου, σε συνεργασία με τμήματα συντήρησης, logistics και διοίκησης.',
          'Σύνταξη δομημένων επιχειρησιακών αναφορών για λήψη αποφάσεων, και διαχείριση ευαίσθητων πληροφοριών υπό αυστηρά πρωτόκολλα ασφαλείας.',
        ],
      },
    ],
  },
  education: {
    kicker: 'Σπουδές',
    heading: 'Σπουδές',
    items: [
      {
        degree: 'Πτυχίο Διοικητικής Επιστήμης και Τεχνολογίας (ΔΕΤ)',
        institution: 'Οικονομικό Πανεπιστήμιο Αθηνών (ΟΠΑ)',
        period: '2022 — 2026',
        details: [
          'Ειδίκευση: Software Engineering & Data Analytics',
          'Μαθήματα: Βάσεις Δεδομένων & SQL, Αλγόριθμοι & Δομές Δεδομένων, OOP, Μηχανική Μάθηση, Ανάλυση Δεδομένων & Στατιστική, Αρχιτεκτονική Πληροφοριακών Συστημάτων',
        ],
      },
      {
        degree: 'Σχολή Υπαξιωματικών Πολεμικής Αεροπορίας (ΣΥΔ)',
        institution: 'Πολεμική Αεροπορία',
        period: '2014 — 2016',
        details: [],
      },
    ],
  },
  contact: {
    kicker: 'Επικοινωνία',
    heading: 'Επικοινωνία',
    blurb:
      'Ανοιχτός σε remote ρόλους (Ελλάδα / ΕΕ) και σε on-site ή hybrid θέσεις γύρω από το Ηράκλειο Κρήτης — μη διστάσεις να επικοινωνήσεις.',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    locationLabel: 'Τοποθεσία',
    email: 'xarisntourakis@yahoo.gr',
    location: 'Ηράκλειο, Κρήτη',
    linkedin: 'https://www.linkedin.com/in/charilaos-ntourakis/',
  },
  footer: {
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
    builtWith: 'Φτιαγμένο με React, TypeScript & Tailwind CSS',
  },
}

export const content: Record<Locale, SiteContent> = { en, gr }

export const socials = {
  github: urls.github,
}
