'use client';
import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import Feature from './feature';
import { Mic, Activity, Search, FolderOpen, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900 text-white text-center">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center gap-6 py-24 px-6 sm:py-32 sm:px-8 md:py-48 md:px-32 overflow-hidden">
        {/* <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-50"
        /> */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
            Unlock Your Memories with <span className="text-indigo-500">AI-Powered Insights</span>
          </Typography>
          <Typography className="mt-4 text-base sm:text-lg md:text-2xl text-gray-200">
            Transcribe and transform your voice memos into organized, insightful, and searchable memories. Rediscover your story in a whole new way.
          </Typography>
          <Link href="#get-started">
            <Button
              size="lg"
              className="mt-8 bg-indigo-600 hover:bg-indigo-700 px-6 sm:px-8 md:px-10 text-sm sm:text-base text-white mx-auto"
              >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-32 bg-gray-800 text-center">
        <Typography className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Explore Our <span className="text-indigo-500">Cutting-Edge Features</span>
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 text-center mx-auto">
          <Feature
            icon={<Mic size={48} className="text-indigo-500 mx-auto mb-4" />}
            headline="Seamless Transcription"
            description="High-accuracy transcription for all your voice memos, making memories searchable and organized."
          />
          <Feature
            icon={<Activity size={48} className="text-indigo-500 mx-auto mb-4" />}
            headline="AI-Driven Insights"
            description="Extract key insights, including topics, actions, and sentiment, to enhance your memory experience."
          />
          <Feature
            icon={<Search size={48} className="text-indigo-500 mx-auto mb-4" />}
            headline="Powerful Semantic Search"
            description="Search across all your memos effortlessly with our advanced AI-powered semantic search."
          />
          <Feature
            icon={<Clock size={48} className="text-indigo-500 mx-auto mb-4" />}
            headline="Topic Timeline Builder"
            description="Automatically generate timelines of recurring topics to trace the chronology of your thoughts over time."
          />
          <Feature
            icon={<FolderOpen size={48} className="text-indigo-500 mx-auto mb-4" />}
            headline="Organized Memory Feed"
            description="A personalized feed of your most meaningful moments, displayed in a simple, accessible format."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative flex flex-col items-center justify-center text-center gap-6 py-16 sm:py-24 px-6 sm:px-8 md:px-32 bg-gray-900 overflow-hidden">
        {/* <Image
          src="/how-it-works-bg.jpg"
          alt="How It Works Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30"
        /> */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <Typography className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            How <span className="text-indigo-500">Legacy AI</span> Works
          </Typography>
          <Typography className="mt-4 text-base sm:text-lg md:text-2xl text-gray-200">
            Getting started with Legacy AI is simple. Upload your voice memos, and let our AI handle the rest—transcribing,
            analyzing, and organizing them into a dynamic, interactive feed.
          </Typography>
          <Link href="#get-started">
            <Button size="lg" className="mt-8 bg-indigo-600 hover:bg-indigo-700 px-6 sm:px-8 md:px-10 text-sm sm:text-base text-white mx-auto">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-32 bg-indigo-600 text-center">
        <Typography className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Transform Your Memories Today
        </Typography>
        <Typography className="mt-4 text-base sm:text-lg md:text-2xl text-white max-w-2xl mx-auto">
          Join a growing community of users turning voice notes into impactful, lasting memories. Don’t let your stories fade—start preserving them today.
        </Typography>
        <Link href="/signup">
          <Button size="lg" variant="default" className="mt-8 bg-white text-indigo-600 hover:bg-gray-200 px-6 sm:px-8 md:px-10 text-sm sm:text-base mx-auto">
            Get Started
          </Button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="flex flex-col items-center text-center py-12 px-6 sm:px-8 bg-gray-800">
        <Typography className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          © {new Date().getFullYear()} Legacy AI. All rights reserved.
        </Typography>
        <div className="flex space-x-6 mt-6">
          <Link href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  );
}
