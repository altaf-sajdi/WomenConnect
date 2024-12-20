import React from 'react';
import { Users, BookOpen, Briefcase, Calendar } from 'lucide-react';

const features = [
  {
    name: 'Professional Networking',
    description: 'Connect with like-minded professionals and build meaningful relationships.',
    icon: Users,
  },
  {
    name: 'Mentorship Program',
    description: 'Find mentors who can guide you through your career journey.',
    icon: BookOpen,
  },
  {
    name: 'Job Opportunities',
    description: 'Discover inclusive workplaces and opportunities aligned with your goals.',
    icon: Briefcase,
  },
  {
    name: 'Events & Workshops',
    description: 'Participate in exclusive events and skill-building workshops.',
    icon: Calendar,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            WomenConnect provides all the tools and resources you need to advance your career
            and build meaningful professional relationships.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}