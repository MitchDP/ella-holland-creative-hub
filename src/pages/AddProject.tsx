
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';
import { useToast } from '@/hooks/use-toast';
import { Project } from '@/components/ProjectCard';
import { sampleProjects } from '@/data/projects';

const AddProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    isVideo: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const categories = ["Branding", "Social Media", "Photography", "TikTok Campaigns"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        
        // Create preview URL for image
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
        
        // Here in a real app, you'd upload to storage and get a URL
        // For now, we'll just use the preview URL
        setFormData((prev) => ({
          ...prev,
          imageUrl: objectUrl,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.description || !formData.category || !formData.imageUrl) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to add project
    setTimeout(() => {
      // In a real app, you'd add the project via API
      // For now, we'll just show a success message
      toast({
        title: "Project added",
        description: "Your project has been added successfully",
      });
      setIsSubmitting(false);
      navigate('/admin/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-cream-light/50">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="flex items-center text-sm mb-8 hover:text-pink-dark transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </button>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h1 className="font-playfair text-2xl font-bold mb-6">Add New Project</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-light"
                  placeholder="Enter project title"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-light"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-light resize-none"
                placeholder="Enter project description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isVideo"
                  name="isVideo"
                  checked={formData.isVideo}
                  onChange={handleChange}
                  className="w-4 h-4 text-pink-dark focus:ring-pink-light"
                />
                <label htmlFor="isVideo">This is a video project</label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {formData.isVideo ? "Video File or Embed URL *" : "Project Image *"}
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    accept={formData.isVideo ? "video/*" : "image/*"}
                    className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-pink-light file:text-pink-dark hover:file:bg-pink"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    {formData.isVideo 
                      ? "Upload a video file (MP4, WebM) or paste an embed URL below" 
                      : "Upload an image file (JPG, PNG)"
                    }
                  </p>
                  
                  {formData.isVideo && (
                    <input
                      type="text"
                      id="videoUrl"
                      name="imageUrl"  // Using imageUrl for both video and image
                      value={formData.imageUrl}
                      onChange={handleChange}
                      placeholder="Or paste video embed URL (YouTube, Vimeo, etc.)"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-light mt-3"
                    />
                  )}
                </div>
                
                <div className="flex items-center justify-center border rounded-md p-2 h-40">
                  {previewUrl ? (
                    formData.isVideo ? (
                      <video
                        src={previewUrl}
                        controls
                        className="max-h-full max-w-full"
                      />
                    ) : (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-h-full max-w-full object-contain"
                      />
                    )
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {formData.isVideo ? "Video preview" : "Image preview"}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/admin/dashboard')}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding Project..." : "Add Project"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
