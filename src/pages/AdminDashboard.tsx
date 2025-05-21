
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import { useToast } from '@/hooks/use-toast';
import { sampleProjects } from '@/data/projects';
import { Project } from '@/components/ProjectCard';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>(sampleProjects);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/admin');
  };

  const handleDeleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
    toast({
      title: "Project deleted",
      description: "The project has been removed from your portfolio",
    });
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-cream-light/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="font-playfair text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio content</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => navigate('/admin/add-project')}>
              Add New Project
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="font-playfair text-xl font-semibold mb-6">Your Projects</h2>
          
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">You haven't added any projects yet.</p>
              <Button onClick={() => navigate('/admin/add-project')}>
                Add Your First Project
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left font-medium text-sm">Project</th>
                    <th className="py-3 text-left font-medium text-sm">Category</th>
                    <th className="py-3 text-left font-medium text-sm">Type</th>
                    <th className="py-3 text-left font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b border-gray-100">
                      <td className="py-4 pr-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded overflow-hidden mr-3">
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{project.title}</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {project.description.substring(0, 60)}...
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="px-2 py-1 bg-cream text-xs rounded-full">
                          {project.category}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        {project.isVideo ? 'Video' : 'Image'}
                      </td>
                      <td className="py-4">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => navigate(`/admin/edit-project/${project.id}`)}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteProject(project.id)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-playfair text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <p className="text-muted-foreground text-sm">Total Projects</p>
                <p className="font-playfair text-2xl font-semibold">{projects.length}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-muted-foreground text-sm">Categories</p>
                <p className="font-playfair text-2xl font-semibold">
                  {new Set(projects.map(p => p.category)).size}
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-muted-foreground text-sm">Images</p>
                <p className="font-playfair text-2xl font-semibold">
                  {projects.filter(p => !p.isVideo).length}
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-muted-foreground text-sm">Videos</p>
                <p className="font-playfair text-2xl font-semibold">
                  {projects.filter(p => p.isVideo).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-playfair text-xl font-semibold mb-4">Profile Management</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium">View Public Portfolio</p>
                  <p className="text-sm text-muted-foreground">See how visitors view your site</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => navigate('/')}>
                  Visit
                </Button>
              </div>
              <div className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium">Edit Profile</p>
                  <p className="text-sm text-muted-foreground">Update your bio, contact info and resume</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => navigate('/admin/edit-profile')}>
                  Edit
                </Button>
              </div>
              <div className="p-4 border rounded-lg flex justify-between items-center bg-pink-light/10">
                <div>
                  <p className="font-medium">Connect Storage</p>
                  <p className="text-sm text-muted-foreground">Link to Supabase/Firebase for media storage</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => alert('Storage integration coming soon')}>
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
