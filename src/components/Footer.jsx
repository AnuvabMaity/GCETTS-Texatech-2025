import React from "react";
import {
  Facebook,
  Instagram,
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

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
            Government College of Engineering and Textile Technology, Serampore
          </h3>
          <p className="text-gray-300 max-w-md text-justify">
            To be a Centre of Excellence in Technical Education through academic
            excellence, thereby catering to the needs of the industry and
            society and fostering industry ready professional minds and
            entrepreneurial attitude.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/gcettsstudentsunion2k18"
              className="hover:text-violet-400 transition-colors duration-300 group"
              target="_blank"
            >
              <Facebook className="group-hover:stroke-violet-400" size={20} />
            </a>
            <a
              href="https://www.instagram.com/texavision_2k25_official/?igsh=YzljYTk1ODg3Zg%3D%3D"
              className="hover:text-violet-400 transition-colors duration-300 group"
              target="_blank"
            >
              <Instagram className="group-hover:stroke-violet-400" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/school/government-college-of-engineering-and-textile-technology-srerampore/"
              className="hover:text-violet-400 transition-colors duration-300 group"
              target="_blank"
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
                <a
                  href="https://maps.app.goo.gl/y1whVsJKJJQxJMnv7"
                  target="_blank"
                >
                  12, William Carey Road, Serampore, Hooghly
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-violet-400" size={18} />
              <p className="text-gray-300">
                <a
                  href="mailto:gcettsstudentsunion2025@gmail.com"
                >
                  gcettsstudentsunion2025@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div className="mt-4 pt-2">
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
          </div>*/}
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} GCETTS-Texatech. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
