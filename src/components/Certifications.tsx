import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Eye, X } from 'lucide-react';

const certifications = [
  {
    name: 'Databricks Certified Data Engineer Professional',
    authority: 'Databricks',
    period: '2026',
    badge: 'Professional',
    shield: '/shield_media_1787116995736.png',
    fullCert: '/cert_media_1787116995736.png',
    description: ['Validated advanced expertise in production data engineering, optimizing Spark processing performance, and setting up Delta Lake storage patterns.']
  },
  {
    name: 'Databricks Certified Machine Learning Professional',
    authority: 'Databricks',
    period: '2026',
    badge: 'Professional',
    shield: '/shield_media_1787116317165.png',
    fullCert: '/cert_media_1787116317165.png',
    description: ['Demonstrated proficiency in building production-scale machine learning workflows, managing MLflow registries, and operationalizing distributed models.']
  },
  {
    name: 'Databricks Certified Data Engineer Associate',
    authority: 'Databricks',
    period: '2026',
    badge: 'Associate',
    shield: '/shield_media_1787116317122.png',
    fullCert: '/cert_media_1787116317122.png',
    description: ['Validated core competencies in developing robust pipelines, schema management, and orchestrating batch/streaming workflows.']
  },
  {
    name: 'Databricks Certified Data Analyst Associate',
    authority: 'Databricks',
    period: '2026',
    badge: 'Associate',
    shield: '/shield_media_1787116317074.png',
    fullCert: '/cert_media_1787116317074.png',
    description: ['Demonstrated skills in performing SQL analytics, creating dashboards, and query optimization in the Databricks workspace.']
  },
  {
    name: 'Databricks Certified Machine Learning Associate',
    authority: 'Databricks',
    period: '2026',
    badge: 'Associate',
    shield: '/shield_media_1787116317155.png',
    fullCert: '/cert_media_1787116317155.png',
    description: ['Validated skills in exploratory analysis, feature selection, training baseline models, and model tracking.']
  },
  {
    name: 'Databricks Certified Generative AI Engineer Associate',
    authority: 'Databricks',
    period: '2026',
    badge: 'Associate',
    shield: '/shield_media_1787116317102.png',
    fullCert: '/cert_media_1787116317102.png',
    description: ['Demonstrated expertise in LLM fine-tuning concepts, context retrieval via RAG systems, and embedding pipelines.']
  }
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Official Databricks credentials validating my capabilities in data engineering, machine learning, and generative AI engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const isProfessional = cert.badge === 'Professional';
            const hasDocument = !!cert.fullCert;

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => hasDocument && setSelectedCert(cert.fullCert)}
                className={`glass-card p-6 border transition-all duration-300 flex flex-col justify-between relative group ${
                  hasDocument ? 'cursor-pointer hover:shadow-lg' : ''
                } ${
                  isProfessional
                    ? 'border-orange-500/30 hover:border-orange-500/50 bg-gradient-to-r from-orange-500/5 to-transparent'
                    : 'border-border/60 hover:border-primary/30'
                }`}
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {/* Cropped Badge Shield */}
                    {cert.shield ? (
                      <div className="w-12 h-16 shrink-0 relative flex items-center justify-center bg-background/40 p-1.5 rounded border border-border/40 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                        <img
                          src={cert.shield}
                          alt="Badge Shield"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-16 shrink-0 bg-primary/10 rounded flex items-center justify-center border border-primary/20 shadow-sm">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                        {cert.name}
                      </h3>
                      
                      {/* Sub-label and badge flex row */}
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs font-semibold text-muted-foreground">
                          {cert.authority} • {cert.period}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider border ${
                          isProfessional
                            ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                            : 'bg-primary/20 text-primary border-primary/30'
                        }`}>
                          {cert.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] bg-border/40 w-full my-3" />

                  <ul className="space-y-2">
                    {cert.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {hasDocument && (
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-3.5 h-3.5" /> Click to view official certificate
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Certificate Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative max-w-4xl w-full bg-secondary border border-border p-2 rounded-xl shadow-2xl cursor-default overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 hover:text-primary text-white rounded-full p-2.5 z-10 transition-all border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedCert}
                alt="Databricks Verified Certificate"
                className="w-full h-auto object-contain rounded-lg max-h-[80vh] shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
