import React, { useState } from "react";
import { ChevronRight, Download, ExternalLink } from "lucide-react";

const EventCard = ({ event, index }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div
      className="relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:z-10 group"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      id={`event-${event?.event_name}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-violet-900 opacity-60 blur-lg"></div>

      {/* Glow effect border */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 shadow-lg shadow-violet-500/50 ring-2 ring-violet-400`}
      ></div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-violet-400 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-violet-400 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-violet-400 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-400 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"></div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col backdrop-blur-sm backdrop-filter">
        {/* Holographic badge */}
        <div className="absolute -right-2 -top-2 bg-gradient-to-r from-violet-500 to-purple-500 text-xs font-bold py-1 px-3 rounded-bl-lg rounded-tr-lg shadow-lg text-white transform rotate-12 h-1/10 w-1/5">
          {/* Event {index + 1} */}
        </div>

        {/* Title with glow effect */}
        <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-violet-300 animate-shimmer">
          {event.event_name}
        </h2>

        {/* Separator line with animation */}
        <div className="w-16 h-1 bg-gradient-to-r from-violet-400 to-purple-500 rounded mb-3 group-hover:w-full transition-all duration-500"></div>

        {/* Description with better contrast */}
        <p className="text-gray-200 mb-4 flex-grow">{event.description}</p>

        {/* Action buttons with enhanced style */}
        <div className="mt-auto space-y-3">
          <a
            href={event.brochure_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-2 rounded bg-black/50 hover:bg-black/70 border border-violet-500 hover:border-violet-300 transition-all group-hover:translate-y-0 translate-y-0 group-hover:shadow-md group-hover:shadow-violet-500/50"
          >
            <span className="flex items-center">
              <Download size={16} className="mr-2 text-violet-400" />
              <span className="text-white">Brochure</span>
            </span>
            <ChevronRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform text-violet-400"
            />
          </a>

          <a
            href={event.gform_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-4 py-2 rounded bg-violet-800/50 hover:bg-violet-700/70 border border-purple-500 hover:border-purple-300 transition-all group-hover:translate-y-0 translate-y-0 group-hover:shadow-md group-hover:shadow-purple-500/50"
          >
            <span className="flex items-center">
              <ExternalLink size={16} className="mr-2 text-purple-300" />
              <span className="text-white">Register</span>
            </span>
            <ChevronRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform text-purple-300"
            />
          </a>
        </div>

        {/* Animated pulse dots */}
        <div className="absolute bottom-4 right-4">
          <div className="w-2 h-2 rounded-full bg-violet-400 animate-ping opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
