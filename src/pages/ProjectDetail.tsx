
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';
import { sampleProjects } from '@/data/projects';
import { Project } from '@/components/ProjectCard';
import AnimatedElement from '@/components/AnimatedElement';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      const foundProject = sampleProjects.find(p => p.id === id);
      if (foundProject) {
        setProject(foundProject);
      }
      // Scroll to top when project changes
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 lg:px-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-2xl mb-4">Project Not Found</h1>
          <p className="mb-6 text-muted-foreground">The project you're looking for doesn't exist or has been removed.</p>
          <Button to="/projects">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = sampleProjects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-sm mb-8 hover:text-pink-dark transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <AnimatedElement animation="fade-in" className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="inline-block px-3 py-1 bg-cream text-secondary-foreground text-sm rounded-full mb-4">
              {project.category}
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          </header>

          <div className="mb-10">
            {project.isVideo ? (
              <div className="aspect-video w-full bg-black rounded-lg flex items-center justify-center text-white">
                <p>Video Embed Placeholder</p>
              </div>
            ) : (
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            )}
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-lg mb-6">
              {project.description}
            </p>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">Project Overview</h2>
            <p className="mb-4">
              This project was created to showcase the intersection of brand identity and digital engagement. 
              The goal was to create a visual language that speaks to the target audience while maintaining the core brand values.
            </p>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">Process & Approach</h2>
            <p className="mb-4">
              Beginning with research and mood boarding, I developed several concepts before refining the final direction. 
              Working closely with stakeholders ensured the design met all objectives while pushing creative boundaries.
            </p>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">Results</h2>
            <p>
              The project received positive feedback and achieved its goals of increasing engagement and brand recognition. 
              The design elements have since been incorporated into the broader brand guidelines.
            </p>
          </div>
        </AnimatedElement>

        {relatedProjects.length > 0 && (
          <AnimatedElement animation="fade-in" delay={300} className="mt-16">
            <h2 className="font-playfair text-2xl font-semibold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related, index) => (
                <AnimatedElement key={related.id} animation="slide-up" delay={index * 150}>
                  <Link
                    to={`/projects/${related.id}`}
                    className="group block"
                  >
                    <div 
                      className="aspect-[4/3] w-full bg-cover bg-center rounded-lg overflow-hidden project-card-hover"
                      style={{ backgroundImage: `url(${related.imageUrl})` }}
                    >
                      <div className="bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full flex items-end p-4">
                        <div>
                          <h3 className="text-white font-playfair font-medium">{related.title}</h3>
                          <p className="text-white/80 text-sm">{related.category}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
