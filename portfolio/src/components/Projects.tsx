"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

const projects = [
    {
        title: "ARROWS Talent Intelligence Platform",
        category: "Data Engineering + AI + Recruitment Intelligence",
        description: "An AI-powered recruitment intelligence platform designed to process, structure, enrich, search, and match candidate data. It supports recruiters with automated ingestion, deduplication, and semantic search. This is my core professional project at MethodHub Software Limited.",
        tech: ["Python", "SQL", "PostgreSQL", "pgvector", "Azure OpenAI", "Databricks", "ChromaDB", "LangChain", "RAG", "People Data Labs"],
        github: "https://github.com/HR151103",
        external: "#",
        isFeatured: true
    },
    {
        title: "Databricks Data Engineering Pipeline",
        category: "Data Engineering",
        description: "A professional data engineering implementation focused on modern Databricks and Apache Spark workflows, highlighting large-scale lakehouse architectures, ingestion, schema governance, and Delta Lake.",
        tech: ["Databricks", "Apache Spark", "PySpark", "Spark SQL", "Delta Lake", "Data Validation"],
        github: "https://github.com/HR151103",
        external: "#",
        isFeatured: true
    },
    {
        title: "Spotify Data Engineering & Analytics",
        category: "Data Engineering & Analytics",
        description: "Performed data extraction, data cleaning, preprocessing, transformation, exploratory data analysis (EDA), SQL analysis, and developed Power BI dashboards for data-driven streaming insights.",
        tech: ["Python", "SQL", "Power BI", "Exploratory Data Analysis"],
        github: "https://github.com/HR151103",
        external: "#",
        isFeatured: false
    },
    {
        title: "Quantitative Analysis of Sweat Gland Activity",
        category: "ML & Image Processing",
        description: "Developed a machine learning classification pipeline. Applied feature extraction and image processing algorithms to identify dermatological disorder severity.",
        tech: ["Python", "MATLAB", "Image Processing", "Machine Learning"],
        github: "https://github.com/HR151103",
        external: "#",
        isFeatured: false
    },
    {
        title: "ICU Mortality Prediction",
        category: "Machine Learning",
        description: "Built predictive modeling workflows using Logistic Regression and Random Forest. Executed feature engineering, preprocessing, and model evaluation.",
        tech: ["Python", "Machine Learning", "Logistic Regression", "Random Forest", "Feature Engineering"],
        github: "https://github.com/HR151103",
        external: "#",
        isFeatured: false
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-gray-950 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 whitespace-nowrap">
                            <span className="text-teal-400 font-mono text-xl mr-2">03.</span> Some Things I&apos;ve Built
                        </h2>
                        <div className="h-[1px] bg-gray-700 w-full md:w-64"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`bg-gray-900 rounded-lg p-6 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 border ${
                                    project.isFeatured 
                                        ? "border-teal-500/40 shadow-lg shadow-teal-500/5 hover:border-teal-400" 
                                        : "border-gray-800 hover:border-teal-500/30"
                                }`}
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-2">
                                            <Folder className="w-10 h-10 text-teal-400" />
                                            {project.isFeatured && (
                                                <span className="flex items-center gap-1 text-[10px] text-teal-400 font-mono font-semibold uppercase tracking-wider bg-teal-950/50 px-2 py-0.5 rounded border border-teal-500/20">
                                                    <Star className="w-3 h-3 fill-teal-400" /> Featured
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-4">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.external && (
                                                <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-teal-400 transition-colors">
                                        <a href={project.external} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    </h3>
                                    {project.category && (
                                        <span className="text-xs text-teal-500/90 font-mono block mb-3">
                                            {project.category}
                                        </span>
                                    )}

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-mono text-gray-500 mt-auto">
                                    {project.tech.map((tech, techIndex) => (
                                        <li key={techIndex} className="bg-gray-950 px-2 py-0.5 rounded text-gray-400 border border-gray-800">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
