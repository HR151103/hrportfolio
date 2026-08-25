import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Cpu, Layers, ShieldCheck, Server, GitMerge } from 'lucide-react';

const pillars = [
  {
    icon: Database,
    title: 'Data Modeling & DB Design',
    desc: 'Designing normalized relational schemas and candidate document structures. Applying keys, relationships, constraints, and optimization concepts.',
    items: ['PostgreSQL & MySQL', 'Normalisation & Schemas', 'Entity Relationships', 'Constraint Systems'],
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20'
  },
  {
    icon: Server,
    title: 'ETL / ELT Pipelines',
    desc: 'Developing robust, automated ingestion and transformation pipelines. Integrating internal & external API endpoints and cloud storage.',
    items: ['Python & PySpark', 'Azure Data Factory', 'Data Integration', 'API Ingestion (e.g. PDL)'],
    color: 'from-teal-500/10 to-emerald-500/10 border-teal-500/20'
  },
  {
    icon: Cpu,
    title: 'Big Data & Distributed Compute',
    desc: 'Building high-performance computation workflows over terabyte-scale distributed systems.',
    items: ['Apache Spark / PySpark', 'Databricks Lakehouse', 'Spark SQL Engine', 'Delta Lake Management'],
    color: 'from-orange-500/10 to-amber-500/10 border-orange-500/20'
  },
  {
    icon: ShieldCheck,
    title: 'Data Quality & Validation',
    desc: 'Implementing automated data validation, quality control schemas, and deduplication logic at ingestion.',
    items: ['Data Validation rules', 'Deduplication Workflows', 'Structured Parsing', 'Schema Enforcement'],
    color: 'from-indigo-500/10 to-purple-500/10 border-indigo-500/20'
  },
  {
    icon: Layers,
    title: 'Data Warehousing',
    desc: 'Structuring raw data into clean business-ready analytical assets (Bronze -> Silver -> Gold layers).',
    items: ['Delta Lake tables', 'Lakehouse Architecture', 'Aggregated Analytics Datasets', 'SQL Analytics endpoints'],
    color: 'from-pink-500/10 to-rose-500/10 border-pink-500/20'
  },
  {
    icon: GitMerge,
    title: 'Distributed Processing',
    desc: 'Orchestrating batch and streaming workflows, managing partition keys, and optimizing distributed shuffle operations.',
    items: ['Distributed execution', 'Lakeflow Jobs orchestration', 'Declarative Pipelines', 'Partitioning strategies'],
    color: 'from-violet-500/10 to-fuchsia-500/10 border-violet-500/20'
  }
];

export const DataEngineering = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="data-engineering" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Data <span className="gradient-text">Engineering</span> Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging modern architectures and high-performance computation to build robust, scalable, and trusted data foundations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`glass-card p-6 border bg-gradient-to-br ${pillar.color} hover:scale-[1.01] hover:border-primary/30 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              <div>
                <div className="h-[1px] bg-border/40 w-full mb-4" />
                <div className="flex flex-wrap gap-1.5">
                  {pillar.items.map(item => (
                    <span
                      key={item}
                      className="px-2 py-0.5 text-[10px] sm:text-xs rounded bg-background/60 text-muted-foreground border border-border/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
