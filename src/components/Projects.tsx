import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, Cpu, HelpCircle, Code } from 'lucide-react';

const categories = [
  '🎯 All Projects',
  '⚙️ Data Engineering',
  '🧠 ML & AI',
];

const projects = [
  {
    title: 'ARROWS Talent Intelligence Platform',
    category: 'Data Engineering + AI + Recruitment Intelligence',
    description: 'An AI-powered recruitment intelligence platform designed to process, structure, enrich, search, and match candidate data. It supports recruiters with automated ingestion, deduplication, and semantic search. This is my core professional project at MethodHub Software Limited.',
    contribution: 'Designed relational databases, PostgreSQL schemas, and core candidate entities. Developed Python data processing pipelines for text extraction, validation, candidate data enrichment (including People Data Labs integration), vector embeddings generation, candidate-JD semantic matching workflows, and analytics tables.',
    tags: ['Python', 'SQL', 'PostgreSQL', 'pgvector', 'Azure OpenAI', 'Databricks', 'ChromaDB', 'LangChain', 'Embeddings', 'RAG', 'People Data Labs'],
    categories: ['⚙️ Data Engineering', '🧠 ML & AI'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '', // Will render the interactive diagram instead of image!
    isFeatured: true
  },
  {
    title: 'Databricks Data Engineering Pipeline',
    category: 'Data Engineering',
    description: 'A professional data engineering implementation focused on modern Databricks and Apache Spark workflows, highlighting large-scale lakehouse architectures.',
    contribution: 'Orchestrated robust pipelines covering data ingestion, distributed processing, schema management, data validation, Delta Lake structures, and SQL analytics endpoints in a Databricks environment.',
    tags: ['Databricks', 'Apache Spark', 'PySpark', 'Spark SQL', 'Delta Lake', 'Data Validation', 'Distributed Compute'],
    categories: ['⚙️ Data Engineering'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-databricks-lakehouse.jpg',
    isFeatured: true
  },
  {
    title: 'Spotify Data Engineering & Analytics',
    category: 'Data Engineering & Analytics',
    description: 'An end-to-end data processing and analytics project on a Spotify streaming dataset to identify musical trends and build reporting layers.',
    contribution: 'Performed data extraction, data cleaning, preprocessing, transformation, exploratory data analysis (EDA), SQL analysis, and developed interactive Power BI dashboards for data-driven insights.',
    tags: ['Python', 'SQL', 'Power BI', 'Exploratory Data Analysis', 'Data Cleaning', 'Dashboards'],
    categories: ['⚙️ Data Engineering'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-spotify.jpg',
    isFeatured: false
  },
  {
    title: 'Quantitative Analysis of Sweat Gland Activity',
    category: 'ML & Image Processing',
    description: 'A scientific data and image processing project to support dermatological diagnosis by quantifying gland densities.',
    contribution: 'Developed a machine learning classification pipeline. Applied feature extraction and image processing algorithms to identify dermatological disorder severity.',
    tags: ['Python', 'MATLAB', 'Image Processing', 'Machine Learning', 'Feature Extraction', 'Classification'],
    categories: ['🧠 ML & AI'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-sweat-gland.jpg',
    isFeatured: false
  },
  {
    title: 'ICU Mortality Prediction',
    category: 'Machine Learning',
    description: 'Predictive modeling workflow to analyze and forecast mortality risks based on intensive care patient records.',
    contribution: 'Built predictive modeling workflows using Logistic Regression and Random Forest. Executed feature engineering, preprocessing, and model evaluation.',
    tags: ['Python', 'Machine Learning', 'Logistic Regression', 'Random Forest', 'Feature Engineering', 'Model Evaluation'],
    categories: ['🧠 ML & AI'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-icu-mortality.jpg',
    isFeatured: false
  }
];

const architectureStages = [
  { id: 'docs', step: '1', label: 'Resume Documents', detail: 'Ingestion of PDF/DOCX resume files from applicant uploads.' },
  { id: 'proc', step: '2', label: 'Document Ingestion', detail: 'Preprocessing, encoding normalization, and scheduling files for ingestion.' },
  { id: 'text', step: '3', label: 'Text Extraction', detail: 'Extracting clean, raw string segments using Python libraries.' },
  { id: 'parse', step: '4', label: 'AI Resume Parsing', detail: 'Extracting key attributes (skills, experience, education) via Azure OpenAI.' },
  { id: 'struct', step: '5', label: 'Structured Candidate Data', detail: 'Converting parsed values into structured JSON schema objects.' },
  { id: 'db', step: '6', label: 'PostgreSQL Data Model', detail: 'Storing structured attributes in normalized tables with primary/foreign keys.' },
  { id: 'val', step: '7', label: 'Validation & Deduplication', detail: 'Applying validation checks and deduplicating candidate records.' },
  { id: 'enrich', step: '8', label: 'Data Enrichment', detail: 'Integrating People Data Labs API to enrich candidate profiles.' },
  { id: 'vector', step: '9', label: 'Embeddings & pgvector', detail: 'Generating embeddings and storing them in vector-enabled storage.' },
  { id: 'search', step: '10', label: 'Semantic Search', detail: 'Enabling context-aware searches over candidates (beyond simple keywords).' },
  { id: 'match', step: '11', label: 'JD Matching', detail: 'Calculating similarity scores between job descriptions and candidate vectors.' },
  { id: 'ai', step: '12', label: 'Recruiter AI Assistant', detail: 'Answering recruiter questions and summarizing matching results.' },
  { id: 'analytics', step: '13', label: 'Analytics Dashboard', detail: 'Aggregating performance KPIs and recruiting cycle metrics.' }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');
  const [selectedStage, setSelectedStage] = useState(architectureStages[0]);

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my technical implementations across data engineering, big data pipelines, and AI systems.
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            if (project.isFeatured) {
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full bg-card rounded-2xl border border-primary/30 overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]"
                >
                  {/* Left: Project Details */}
                  <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border/50 bg-secondary/10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                          Featured Professional Project
                        </span>
                        <span className="text-sm text-muted-foreground">@ MethodHub</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl mb-3 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-4">
                        {project.category}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="bg-background/50 border border-border/60 p-5 rounded-xl mb-6">
                        <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-primary" /> My Core Contribution
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {project.contribution}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right: Diagram or Image */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-between bg-card relative min-h-[500px]">
                    {project.title === 'ARROWS Talent Intelligence Platform' ? (
                      <>
                        <div>
                          <h4 className="font-display font-bold text-lg mb-2 text-foreground flex items-center gap-2">
                            <span>📊</span> System Architecture
                          </h4>
                          <p className="text-xs text-muted-foreground mb-6">
                            Interactive data flow representation. Click a node to view details:
                          </p>

                          {/* Interactive Diagram Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-lg mx-auto">
                            {architectureStages.map((stage) => {
                              const isSelected = selectedStage.id === stage.id;
                              return (
                                <button
                                  key={stage.id}
                                  onClick={() => setSelectedStage(stage)}
                                  className={`flex items-center gap-2 p-2.5 rounded-lg border text-left transition-all duration-300 ${
                                    isSelected
                                      ? 'bg-primary/25 border-primary shadow-md shadow-primary/10'
                                      : 'bg-secondary/40 border-border/60 hover:border-primary/40 hover:bg-secondary/60'
                                  }`}
                                >
                                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                                  }`}>
                                    {stage.step}
                                  </div>
                                  <span className="text-[11px] font-medium leading-tight line-clamp-2 text-foreground">
                                    {stage.label}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Selected Stage Detail Panel */}
                        <div className="mt-8 bg-secondary/30 border border-primary/20 rounded-xl p-5 relative overflow-hidden backdrop-blur-sm">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
                          <div className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <h5 className="font-bold text-xs uppercase tracking-wider text-primary mb-1">
                                Step {selectedStage.step}: {selectedStage.label}
                              </h5>
                              <p className="text-xs text-muted-foreground leading-normal">
                                {selectedStage.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full relative overflow-hidden rounded-xl border border-border/50 bg-secondary flex items-center justify-center min-h-[400px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            }

            // Standard card rendering for secondary/other projects
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="inline-block w-full bg-card rounded-2xl overflow-hidden border border-border/80 group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-1/3 aspect-[16/10] lg:aspect-auto bg-secondary relative overflow-hidden shrink-0 border-b lg:border-b-0 lg:border-r border-border/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider block mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      {project.contribution && (
                        <p className="text-xs text-muted-foreground bg-secondary/30 border border-border/30 p-3 rounded-lg leading-relaxed mb-6">
                          <strong className="text-foreground">Scope:</strong> {project.contribution}
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-secondary/50 text-foreground font-medium border border-border/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
