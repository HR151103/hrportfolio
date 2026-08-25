import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Trophy, Zap, Server, Database } from 'lucide-react';

const highlights = [
  {
    icon: Server,
    title: 'Data Pipelines',
    description: 'Developing scalable ETL/ELT workflows using Python, PySpark, Databricks, and cloud data platforms.',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'Designing normalized relational PostgreSQL schemas, candidate data structures, and optimizing storage.',
  },
  {
    icon: Brain,
    title: 'AI + Data Integrations',
    description: 'Building foundations for Generative AI applications, RAG, vector embeddings, and semantic search.',
  },
  {
    icon: Zap,
    title: 'Data Processing',
    description: 'Developing robust workflows for text extraction, candidate deduplication, and data enrichment.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting data-driven solutions & intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-foreground font-medium">Data Engineer</span> currently working full-time at <span className="text-foreground font-medium">MethodHub Software Limited</span>, contributing to the core data infrastructure and AI capabilities of the <strong>ARROWS Talent Intelligence Platform</strong>.
              </p>
              <p>
                My work centers on <strong>data modeling, database architecture, and PostgreSQL schema design</strong>. I model core talent entities and establish relationships, keys, normalization, and constraints to ensure data integrity. I build Python and SQL pipelines for resume ingestion, document processing, text extraction, deduplication, and Candidate/Job Description data validation.
              </p>
              <p>
                I also work closely with AI technologies, building integrations with <strong>Azure OpenAI, vector search (embeddings), semantic search, ChromaDB</strong>, and candidate enrichment APIs like <strong>People Data Labs</strong>. I am building strong practical expertise in modern analytics engines including <strong>Databricks, Apache Spark, PySpark, Spark SQL, Delta Lake</strong>, and cloud data platforms to deliver scalable data solutions.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
