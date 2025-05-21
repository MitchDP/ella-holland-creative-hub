
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import AnimatedElement from '@/components/AnimatedElement';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <AnimatedElement animation="fade-in">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              
              <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Ella Holland" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-lg mb-4 leading-relaxed">
                    Ella Holland is a passionate and organized digital designer and content strategist based in Oregon. With international experience in Paris and Bali, and a background in Design & Innovation Management, she blends storytelling with digital branding to create impactful visuals.
                  </p>
                  <p className="text-lg mb-4 leading-relaxed">
                    She's grown a TikTok audience of over 180,000 followers and thrives at the intersection of creativity and connection. With a keen eye for trends and a unique understanding of audience engagement, Ella creates designs that resonate and content that converts.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade-in" delay={200}>
              <div className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold mb-4">Background</h2>
                <p className="mb-4">
                  I studied digital design at Oregon State University and Parsons Paris, where I developed my expertise in visual communication and brand strategy. My international experience has given me a global perspective on design trends and cultural nuances in visual storytelling.
                </p>
                <p>
                  Throughout my career, I've had the opportunity to work with diverse clients across industries, from small local businesses to international brands, helping them elevate their digital presence and connect with their audiences through compelling visual narratives.
                </p>
              </div>
            </AnimatedElement>
          </section>

          <section className="mb-16">
            <AnimatedElement animation="fade-in">
              <h2 className="font-playfair text-2xl font-semibold mb-6">Skills & Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-cream-light p-6 rounded-lg">
                  <h3 className="font-playfair text-xl mb-4">Design Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Adobe Creative Suite (Photoshop, Illustrator, InDesign)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Canva Pro
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Figma
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      CapCut
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Procreate
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cream-light p-6 rounded-lg">
                  <h3 className="font-playfair text-xl mb-4">Social Media</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      TikTok Content Creation & Strategy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Instagram Growth Strategy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Social Media Analytics
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Content Calendar Management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Community Engagement
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cream-light p-6 rounded-lg">
                  <h3 className="font-playfair text-xl mb-4">Brand Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Brand Strategy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Visual Identity Design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Brand Voice Development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Style Guide Creation
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cream-light p-6 rounded-lg">
                  <h3 className="font-playfair text-xl mb-4">Marketing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Digital Campaign Strategy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Event Marketing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      Google Analytics
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-dark rounded-full mr-2"></span>
                      TikTok Shop
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </section>

          <section className="mb-16">
            <AnimatedElement animation="fade-in">
              <h2 className="font-playfair text-2xl font-semibold mb-6">Experience</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-pink pl-6 py-2">
                  <h3 className="font-playfair text-xl mb-1">Alpha Chi Omega</h3>
                  <p className="text-sm text-muted-foreground mb-2">Event Designer & Social Media Manager | 2021 - Present</p>
                  <p>Led event design and social strategy, including digital invites, signage, and social promotional assets. Grew Instagram engagement by 45% through consistent branding and strategic content planning.</p>
                </div>
                
                <div className="border-l-4 border-pink pl-6 py-2">
                  <h3 className="font-playfair text-xl mb-1">Harrison's Bar & Grill</h3>
                  <p className="text-sm text-muted-foreground mb-2">Digital Content Creator | 2020 - 2021</p>
                  <p>Created engaging digital content for social media channels, redesigned menus and promotional materials, and managed the restaurant's online presence, resulting in a 30% increase in customer engagement.</p>
                </div>
                
                <div className="border-l-4 border-pink pl-6 py-2">
                  <h3 className="font-playfair text-xl mb-1">Freelance Digital Designer</h3>
                  <p className="text-sm text-muted-foreground mb-2">Self-Employed | 2019 - Present</p>
                  <p>Worked with various clients to create digital designs, brand assets, and social media content. Specialized in helping small businesses establish their online presence through cohesive visual identities and strategic social content.</p>
                </div>
              </div>
            </AnimatedElement>
          </section>

          <AnimatedElement animation="fade-in">
            <section>
              <div className="bg-pink-light/50 p-8 rounded-lg text-center">
                <h2 className="font-playfair text-2xl font-semibold mb-4">Ready to Work Together?</h2>
                <p className="mb-6 max-w-lg mx-auto">
                  I'm currently available for freelance projects and full-time opportunities in digital design and social media management.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button to="/contact" size="lg">
                    Contact Me
                  </Button>
                  <Button to="/files/ella-holland-resume.pdf" target="_blank" variant="secondary" size="lg">
                    Download Resume
                  </Button>
                </div>
              </div>
            </section>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default About;
