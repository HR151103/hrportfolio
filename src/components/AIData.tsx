import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Brain, Search, Database, ArrowRight } from 'lucide-react';

const aiCapabilities = [
  {
    icon: Brain,
    title: 'LLM & Generative AI Ingestion',
    desc: 'Structuring unstructured textual document streams into structured schemas optimized for LLM prompting and context injection.',
    techs: ['Azure OpenAI', 'LLM applications', 'Text Extraction']
  },
  {
    icon: Search,
    title: 'Semantic Search & Matching',
    desc: 'Creating semantic candidate matching and vector space queries to support recruiter searches beyond simple keyword matches.',
    techs: ['Semantic Search', 'Candidate Matching', 'Cosine Similarity']
  },
  {
    icon: Database,
    title: 'Vector Databases & Embeddings',
    desc: 'Computing text embeddings and storing them in specialized databases to enable fast, scalable similarity lookups.',
    techs: ['PostgreSQL + pgvector', 'ChromaDB', 'Embeddings']
  },
  {
    icon: Sparkles,
    title: 'RAG & Orchestration',
    desc: 'Building Retrieval-Augmented Generation workflows to enrich models with current corporate database schemas and context.',
    techs: ['RAG architecture', 'LangChain', 'Data Enrichment']
  }
];

export const AIData = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ai-data" className="py-24 relative bg-secondary/10 overflow-hidden" ref={ref}>
      {/* Background Neon Spot */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            AI + <span className="gradient-text">Data Engineering</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridges the gap between raw data stores and intelligent agent workflows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Statement Left Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-card p-8 md:p-10 border border-primary/20 flex flex-col justify-between bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden"
          >
            {/* Visual background lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-primary font-display font-semibold text-sm uppercase tracking-wider block mb-4">
                Core Philosophy
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-6">
                "Building reliable data foundations for intelligent AI applications."
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Artificial Intelligence is only as good as the underlying data feeds. I focus on developing clean, structured pipelines, database architectures, and integrations that enable LLMs, vector search, and RAG systems to operate with high accuracy and low latency.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              AI Infrastructure Support <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Capabilities Right Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {aiCapabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 border border-border/40 hover:border-primary/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <cap.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-base mb-2 text-foreground">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {cap.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {cap.techs.map(t => (
                    <span key={t} className="px-2 py-0.5 text-[9px] rounded-full bg-secondary/80 text-foreground/80 border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
