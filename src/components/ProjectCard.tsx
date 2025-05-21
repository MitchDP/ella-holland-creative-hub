
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isVideo?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block overflow-hidden rounded-lg project-card-hover relative group"
    >
      <div 
        className="aspect-[4/3] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      >
        {project.isVideo && (
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 text-xs rounded-full">
            Video
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-white font-playfair text-lg">{project.title}</h3>
            <p className="text-white/80 text-sm mt-1 line-clamp-2">{project.description}</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-white/30 backdrop-blur-sm rounded-full text-white">
              {project.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
