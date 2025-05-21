
import React, { useState, useEffect } from 'react';
import ProjectCard, { Project } from '@/components/ProjectCard';
import { sampleProjects } from '@/data/projects';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const categories = ["All", "Branding", "Social Media", "Photography", "TikTok Campaigns"];
  
  // Filter projects based on category
  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === "All") {
      setProjects(sampleProjects);
    } else {
      const filtered = sampleProjects.filter(project => project.category === category);
      setProjects(filtered);
    }
  };

  // Animation effect on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <header className="mb-12 text-center animate-on-scroll">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in digital design, social media strategy, and visual storytelling.
          </p>
        </header>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === category
                  ? 'bg-pink-light text-primary-foreground font-medium'
                  : 'bg-cream-light hover:bg-cream text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
