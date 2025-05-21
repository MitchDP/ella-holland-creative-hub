
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';
import { useToast } from '@/hooks/use-toast';

interface ProfileFormData {
  bio: string;
  email: string;
  tiktok: string;
  instagram: string;
}

const EditProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState<ProfileFormData>({
    bio: "Ella Holland is a passionate and organized digital designer and content strategist based in Oregon. With international experience in Paris and Bali, and a background in Design & Innovation Management, she blends storytelling with digital branding to create impactful visuals. She's grown a TikTok audience of over 180,000 followers and thrives at the intersection of creativity and connection.",
    email: "ella@example.com",
    tiktok: "@ellaholland",
    instagram: "@ellahollanddesigns",
  });

  const [profileImage, setProfileImage] = useState<string>("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (name === 'resume') {
        setResumeFile(files[0]);
      } else if (name === 'coverLetter') {
        setCoverLetterFile(files[0]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.bio || !formData.email) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully",
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
          <h1 className="font-playfair text-2xl font-bold mb-6">Edit Profile</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <label className="block text-sm font-medium mb-2">
                  Profile Image
                </label>
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-pink-light">
                    <img 
                      src={profileImage}
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-pink-light file:text-pink-dark hover:file:bg-pink"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="mb-6">
                  <label htmlFor="bio" className="block text-sm font-medium mb-2">
                    About Me / Bio *
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-light"
                    placeholder="Write about yourself..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-light"
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-light"
                />
              </div>

              <div>
                <label htmlFor="tiktok" className="block text-sm font-medium mb-2">
                  TikTok Handle
                </label>
                <input
                  type="text"
                  id="tiktok"
                  name="tiktok"
                  value={formData.tiktok}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-light"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
              <div>
                <h3 className="text-lg font-medium mb-4">Resume</h3>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-pink-light file:text-pink-dark hover:file:bg-pink mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  {resumeFile ? `Selected: ${resumeFile.name}` : "Upload your resume (PDF recommended)"}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Cover Letter</h3>
                <input
                  type="file"
                  name="coverLetter"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-pink-light file:text-pink-dark hover:file:bg-pink mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  {coverLetterFile ? `Selected: ${coverLetterFile.name}` : "Upload your cover letter (PDF recommended)"}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/admin/dashboard')}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving Changes..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
