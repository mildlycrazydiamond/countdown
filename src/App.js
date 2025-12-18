import { useState } from 'react';
import { Menu, X, Github, Code, Zap } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub Pages Ready",
      description: "Optimized for easy deployment to GitHub Pages"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "React + Tailwind",
      description: "Built with modern React and Tailwind CSS"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fully Responsive",
      description: "Works seamlessly on mobile, tablet, and desktop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Github className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">My React App</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded">Home</a>
              <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded">Features</a>
              <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded">About</a>
              <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Your React App
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            A modern, responsive starter template ready for GitHub Pages deployment. 
            Customize this to build your next great project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition shadow-lg border-2 border-indigo-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
            About This Template
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              This is a responsive React starter template designed for quick deployment to GitHub Pages. 
              It includes a modern navigation system, hero section, and feature showcase. 
              The template uses Tailwind CSS for styling and is fully responsive across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none resize-none"
                placeholder="Your message..."
              />
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                alert('Form submitted! In production, connect this to your backend.');
              }}
              className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            Built with React and Tailwind CSS • Deployed on GitHub Pages
          </p>
          <div className="mt-4">
            <a href="https://github.com" className="inline-flex items-center text-gray-400 hover:text-white transition">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}