"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-4 bg-gray-950 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 whitespace-nowrap">
                            <span className="text-teal-400 font-mono text-xl mr-2">01.</span> About Me
                        </h2>
                        <div className="h-[1px] bg-gray-700 w-full md:w-64"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
                            <p>
                                Hello! My name is Hrithik and I enjoy building scalable data systems and intelligent data-driven applications. My interest in data engineering started when I realized the power of transforming raw document streams and schemas into clean, trusted data structures that drive artificial intelligence and search.
                            </p>
                            <p>
                                Today, I am working full-time as a <span className="text-teal-400">Data Engineer</span> at <span className="text-teal-400">MethodHub Software Limited</span>, contributing to the core database design, PostgreSQL architecture, candidate enrichment, and AI search workflows of the <strong>ARROWS Talent Intelligence Platform</strong>.
                            </p>
                            <p>
                                I also develop applications using modern data stacks including <span className="text-teal-400">Databricks</span>, <span className="text-teal-400">Apache Spark</span>, <span className="text-teal-400">PySpark</span>, <span className="text-teal-400">PostgreSQL + pgvector</span>, and <span className="text-teal-400">Azure OpenAI</span>.
                            </p>
                        </div>

                        <div className="relative group max-w-xs mx-auto md:mx-0">
                            <div className="relative z-10 w-full aspect-square border-2 border-teal-400 rounded bg-gray-900/50 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                                <img 
                                    src="/hrithik-profile.jpg" 
                                    alt="Hrithik A.R." 
                                    className="w-full h-full object-cover transition-all duration-500" 
                                />
                            </div>
                            <div className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 -z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
