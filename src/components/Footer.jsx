import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Globe,
  CodeXml,
  Code,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-950 py-8 text-white font-sans relative overflow-hidden border-t-2 border-violet-500">
      {/* Neon glow effect */}
      <div className="absolute top-0 left-1/2 w-2/3 h-1 bg-violet-600 rounded-full blur-md opacity-80"></div>
      <div className="absolute -bottom-6 left-1/4 w-1/2 h-12 bg-violet-700 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
            Quantum AI Solutions
          </h3>
          <p className="text-gray-300 max-w-md">
            Pioneering the future of artificial intelligence with cutting-edge
            neural networks and machine learning algorithms that transform how
            we interact with technology.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 pt-2">
            <a
              href="#"
              className="hover:text-violet-400 transition-colors duration-300 group"
            >
              <Github className="group-hover:stroke-violet-400" size={20} />
            </a>
            <a
              href="#"
              className="hover:text-violet-400 transition-colors duration-300 group"
            >
              <Twitter className="group-hover:stroke-violet-400" size={20} />
            </a>
            <a
              href="#"
              className="hover:text-violet-400 transition-colors duration-300 group"
            >
              <Linkedin className="group-hover:stroke-violet-400" size={20} />
            </a>
          </div>

          <div className="flex gap-2">
            <Code /> Made by Team{" "}
            <span className="text-violet-400 font-bold">OverClock</span>{" "}
            <CodeXml />
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
            Connect With Us
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Globe className="text-violet-400" size={18} />
              <p className="text-gray-300">
                12, William Carey Road, Serampore, Hooghly
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-violet-400" size={18} />
              <p className="text-gray-300">entropy@gcetts.ac.in</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-4 pt-2">
            <p className="text-sm text-gray-400 mb-2">
              Stay updated with our latest innovations
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-sm rounded-l px-4 py-2 outline-none border-violet-500 border focus:border-violet-400 w-full max-w-xs"
              />
              <button className="bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-500 hover:to-violet-700 text-white px-4 py-2 rounded-r text-sm font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Quantum AI Solutions. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
