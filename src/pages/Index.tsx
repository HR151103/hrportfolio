import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { DataEngineering } from '@/components/DataEngineering';
import { AIData } from '@/components/AIData';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Index = () => {

  useEffect(() => {
    document.title = 'HRITHIK A.R | Data Engineer';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Data Engineer specializing in Python, SQL, Databricks, Apache Spark, PostgreSQL, cloud data platforms and AI-powered data applications.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <DataEngineering />
        <AIData />
        <Experience />
        <Projects />
        <Education />

        <Certifications />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
