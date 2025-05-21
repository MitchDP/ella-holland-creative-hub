
import React, { useState } from 'react';
import { Instagram, Mail } from 'lucide-react';
import Button from '@/components/Button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              Interested in working together? Feel free to reach out for collaborations or just to say hello!
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="font-playfair text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  I'm currently available for freelance projects and full-time opportunities in digital design and social media.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:ella@example.com" 
                  className="flex items-center space-x-3 group"
                >
                  <div className="bg-pink-light/40 p-3 rounded-full group-hover:bg-pink-light transition-colors">
                    <Mail size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">ella@example.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-3 group"
                >
                  <div className="bg-pink-light/40 p-3 rounded-full group-hover:bg-pink-light transition-colors">
                    <Instagram size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-muted-foreground">@ellahollanddesign</p>
                  </div>
                </a>
                
                <a 
                  href="https://tiktok.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-3 group"
                >
                  <div className="bg-pink-light/40 p-3 rounded-full group-hover:bg-pink-light transition-colors">
                    <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.321 5.562a5.124 5.124 0 01-3.528-1.39v6.337c0 4.328-3.522 7.85-7.849 7.85a7.821 7.821 0 01-4.442-1.376 7.845 7.845 0 0012.291-6.474V6.543c.954.336 1.939.523 2.95.526V3.581c-1.624-.029-3.015-1.421-3.029-3.044h-2.78v15.53a3.453 3.453 0 01-3.454 3.454 3.453 3.453 0 01-3.454-3.454 3.453 3.453 0 013.454-3.454c.254 0 .498.03.736.076V8.520a7.782 7.782 0 00-.736-.037 7.85 7.85 0 00-7.85 7.85c0 4.327 3.522 7.85 7.85 7.85 4.327 0 7.849-3.523 7.849-7.85V9.612c1.02.93 2.363 1.5 3.837 1.5V7.625a5.135 5.135 0 01-2.896-.995" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">TikTok</p>
                    <p className="text-sm text-muted-foreground">@ellaholland</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a subject</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  ></textarea>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
