import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Award, Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'MethodHub Software Limited',
    isProgression: true,
    logo: '',
    roles: [
      {
        title: 'Data Engineer — Full-time',
        period: 'Jul 20, 2026 – Present',
        description: 'Currently contributing to the ARROWS Talent Intelligence Platform across data modeling, database architecture, data processing, data integration and AI/data workflows. Stepped into full responsibility for design and database schemas.',
        achievements: [
          'Designed and developed recruitment data models, modeling core entities including Candidate, Client, Job Description, Candidate Document, Skill, Candidate Skill Mapping and Candidate-JD Mapping.',
          'Worked on relational database architecture and PostgreSQL schema design, applying primary keys, foreign keys, relationships, normalization and data integrity concepts.',
          'Worked on resume ingestion, document processing, text extraction, and structured candidate data generation workflows.',
          'Developed Python and SQL-based data processing workflows, implementing candidate/resume deduplication and data validation.',
          'Worked on candidate data enrichment, integrating external services like People Data Labs.',
          'Prepared structured candidate data for semantic search, candidate matching, and analytics workflows.',
          'Worked with PostgreSQL and vector-enabled storage, utilizing Azure services and AI technologies.',
          'Built practical expertise in Databricks, Apache Spark, PySpark, Spark SQL and Delta Lake.'
        ],
        technologies: [
          'Python', 'SQL', 'PostgreSQL', 'pgvector', 'Azure', 'Databricks', 'Apache Spark', 'PySpark', 'Spark SQL', 'Delta Lake'
        ]
      },
      {
        title: 'Data Practice Intern',
        period: 'Nov 2025 – Jul 19, 2026',
        description: 'Worked as part of the MethodHub Data Practice team and contributed to the ARROWS Talent Intelligence Platform while developing practical experience across data modeling, database design, data processing and AI/data engineering.',
        achievements: [
          'Contributed to recruitment data modeling and database schema design using PostgreSQL and relational data structures.',
          'Supported candidate and recruitment data processing, transformation, and validation workflows with Python and SQL.',
          'Contributed to resume processing, candidate data structuring, and candidate/resume deduplication workflows.',
          'Supported candidate data enrichment workflows and explored Azure OpenAI, Generative AI, and LLM-based applications.',
          'Worked with Databricks and gained practical understanding of distributed computing concepts.',
          'Collaborated with team members across data, AI, backend and application workflows.'
        ],
        technologies: [
          'Python', 'SQL', 'PostgreSQL', 'Azure OpenAI', 'Generative AI', 'Databricks', 'Data Modeling'
        ]
      }
    ]
  },
  {
    title: 'Data Analyst Intern',
    company: 'Infotact Solutions',
    period: 'Oct 2025 – Dec 2025',
    description: 'Performed data cleaning, preprocessing, and data transformation using Python and SQL.',
    achievements: [
      'Developed interactive Power BI and Excel dashboards to track key performance indicators and visualize business insights.',
      'Automated reporting processes and supported data-driven decision-making with automated insights.'
    ],
    technologies: [
      'SQL', 'Excel', 'Python', 'Power BI', 'Data Visualization', 'Data Cleaning'
    ],
  },
  {
    title: 'Data Analytics Intern',
    company: 'TATA Group',
    period: 'Dec 2024',
    description: 'Built a logistic regression machine learning model to predict business risk and improve decision accuracy.',
    achievements: [
      'Performed data preprocessing, feature selection, and model evaluation.',
      'Developed analytical dashboards to visualize model metrics and risk insights.'
    ],
    technologies: [
      'Machine Learning', 'Logistic Regression', 'Dashboards', 'Data Analysis', 'Data Preprocessing'
    ],
  }
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From data modeling and scalable pipelines to cloud engines and AI integration, here is my career progression.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Timeline Spine */}
          <div className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);

              if (exp.isProgression) {
                return (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-20 md:pl-28"
                  >
                    {/* Pulsing Timeline Node */}
                    <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />

                    {/* Connector Line */}
                    <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />

                    <motion.div
                      className={`glass-card overflow-hidden transition-all duration-300 border border-primary/20 hover:border-primary/40 ${
                        isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                      }`}
                      whileHover={{ scale: 1.002 }}
                      layout
                    >
                      <div className="p-6 md:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-border/40 pb-4">
                          <div>
                            <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                              {exp.company}
                            </h4>
                            <p className="text-sm text-primary font-semibold flex items-center gap-1.5">
                              <Award className="w-4 h-4" /> Internal Career Promotion & Progression
                            </p>
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            1 Continuous Journey
                          </span>
                        </div>

                        {/* Sub-timeline for Career Roles */}
                        <div className="relative pl-6 border-l-2 border-primary/20 space-y-10 py-2">
                          {exp.roles.map((role, rIndex) => (
                            <div key={role.title} className="relative">
                              {/* Sub-node */}
                              <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 bg-background ${
                                rIndex === 0 ? 'border-primary' : 'border-muted-foreground'
                              }`} />

                              <div className="mb-2">
                                <h5 className="text-lg font-bold text-foreground">
                                  {role.title}
                                </h5>
                                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mt-0.5">
                                  <Calendar className="w-3.5 h-3.5" /> {role.period}
                                </div>
                              </div>

                              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                                {role.description}
                              </p>

                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  className="space-y-4 mt-2 border-t border-border/20 pt-4"
                                >
                                  <div>
                                    <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
                                      <span>⚡</span> Responsibilities & Work
                                    </p>
                                    <ul className="space-y-1.5">
                                      {role.achievements.map((ach, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                                          <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                                          <span>{ach}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <p className="text-xs font-semibold text-foreground mb-2">
                                      💻 Technologies & Concepts:
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {role.technologies.map(tech => (
                                        <span key={tech} className="px-2.5 py-0.5 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50">
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => toggleCard(index)}
                          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group mt-6"
                        >
                          {isExpanded ? 'Show Less Details' : 'View Core Achievements & Technologies'}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }

              // Normal Card Rendering for other experiences
              return (
                <motion.div
                  key={exp.title + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />

                  {/* Connector Line */}
                  <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />

                  <motion.div
                    className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${
                      isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                    }`}
                    whileHover={{ scale: 1.002 }}
                    layout
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight">
                            {exp.title}
                          </h3>
                          <h4 className="text-base font-semibold text-primary">
                            {exp.company}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground mt-1">
                            📅 {exp.period}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                        {exp.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        {isExpanded ? 'Show Less Details' : 'Key Achievements & Skills'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 space-y-4 border-t border-border/50 mt-2">
                            <div className="pt-4">
                              <h5 className="flex items-center gap-2 text-xs font-semibold text-foreground mb-2">
                                <span>⚡</span> Key Achievements
                              </h5>
                              <ul className="space-y-1.5">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                                    <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="flex items-center gap-2 text-xs font-semibold text-foreground mb-2">
                                💻 Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2.5 py-0.5 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
