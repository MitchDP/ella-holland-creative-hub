
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import { sampleProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import AnimatedElement from '@/components/AnimatedElement';

const Index = () => {
  // Featured projects (show first 3)
  const featuredProjects = sampleProjects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <AnimatedElement className="flex-1 order-2 md:order-1" animation="slide-up">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Designer <span className="text-pink-dark">&</span><br />
              Social Media Strategist
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I blend storytelling with digital branding to create impactful visuals that connect with audiences and drive engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/projects" size="lg">
                View My Work
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </AnimatedElement>
          <AnimatedElement className="flex-1 order-1 md:order-2" animation="fade-in" delay={300}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden mx-auto border-4 border-pink-light shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ella Holland" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-6 md:px-12 bg-cream-light">
        <div className="container mx-auto">
          <AnimatedElement className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">About Ella</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Ella Holland is a passionate and organized digital designer and content strategist based in Oregon. With international experience in Paris and Bali, and a background in Design & Innovation Management, she blends storytelling with digital branding to create impactful visuals. She thrives at the intersection of creativity and connection.
            </p>
            <Button to="/about">Learn More About Me</Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <AnimatedElement as="h2" className="font-playfair text-3xl font-semibold">
              Featured Projects
            </AnimatedElement>
            <AnimatedElement as="div">
              <a href="/projects" className="group flex items-center text-sm font-medium hover:text-pink-dark transition-colors">
                View All 
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedElement 
                key={project.id} 
                animation="slide-up" 
                delay={index * 150}
              >
                <ProjectCard project={project} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 md:px-12 bg-pink-light/50">
        <AnimatedElement className="container mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Looking for a digital designer or social media strategist for your next project?
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Contact Me
            </Button>
            <Button to="/files/ella-holland-resume.pdf" target="_blank" variant="secondary" size="lg">
              Download Resume
            </Button>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
};

export default Index;
