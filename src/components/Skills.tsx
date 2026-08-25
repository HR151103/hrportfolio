import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'PySpark', 'Scala', 'MATLAB'],
  },
  {
    title: 'Data Engineering',
    skills: [
      'Data Modeling',
      'Database Design',
      'ETL / ELT',
      'Data Pipelines',
      'Data Transformation',
      'Data Validation',
      'Data Quality',
      'Data Integration',
      'Data Warehousing',
    ],
  },
  {
    title: 'Big Data',
    skills: [
      'Apache Spark',
      'PySpark',
      'Spark SQL',
      'Hadoop',
      'Hive',
      'Distributed Computing',
      'Amazon EMR',
    ],
  },
  {
    title: 'Databricks',
    skills: [
      'Databricks',
      'Delta Lake',
      'Spark Declarative Pipelines',
      'Lakeflow Jobs',
      'SQL Analytics',
    ],
  },
  {
    title: 'Cloud Platforms',
    skills: [
      'Microsoft Azure',
      'Azure Storage',
      'Azure Data Factory',
      'Azure Databricks',
      'AWS',
      'Amazon S3',
      'Amazon EMR',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'PostgreSQL + pgvector', 'MySQL', 'SQL Server'],
  },
  {
    title: 'Analytics',
    skills: [
      'Power BI',
      'Excel',
      'Exploratory Data Analysis',
      'Data Cleaning',
      'Data Visualization',
      'Statistical Analysis',
    ],
  },
  {
    title: 'AI / Data Applications',
    skills: [
      'Azure OpenAI',
      'RAG',
      'Embeddings',
      'Semantic Search',
      'Candidate Matching',
      'Data Enrichment',
      'ChromaDB',
      'LangChain',
    ],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and concepts I utilize in professional environments, data modeling, big data systems, and AI-enabled data workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
              className="glass-card p-6 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-base mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.05 + skillIndex * 0.02 }}
                    className="skill-badge text-xs"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
