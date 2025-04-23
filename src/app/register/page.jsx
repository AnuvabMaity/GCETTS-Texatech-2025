"use client";
import React from "react";
import { useState } from "react";
import { ChevronRight, Download, ExternalLink } from "lucide-react";
import { events } from "@/utils/events";
import EventCard from "@/components/EventCard";

const RegisterPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="bg-[url('/images/BG.png')] h-auto w-full bg-fixed relative overflow-x-hidden">
      <div className="min-h-screen bg-transparent text-white p-8 pt-22 flex items-center justify-center">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 animate-pulse drop-shadow-[0_0_10px_rgba(255,0,255,0.7)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
              TexaTech
            </span>{" "}
            2025
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events?.map((event, index) => (
              <EventCard event={event} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
