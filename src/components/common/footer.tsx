// components/common/footer.tsx
'use client';
import Link from 'next/link';
import Typography from '@/components/ui/typography';

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full py-8 bg-gray-800">
      <div className="w-full max-w-[1280px] px-6 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center mb-4 md:mb-0">
          <img src="/logo.svg" alt="Legacy AI Logo" className="h-8 mr-2" />
          <Typography className="text-white text-lg font-bold">Legacy AI</Typography>
        </Link>
        <div className="flex space-x-6">
          <Link href="/privacy-policy">
            <Typography className="text-gray-400 hover:text-white">Privacy Policy</Typography>
          </Link>
          <Link href="/terms-of-service">
            <Typography className="text-gray-400 hover:text-white">Terms of Service</Typography>
          </Link>
          <Link href="/contact">
            <Typography className="text-gray-400 hover:text-white">Contact Us</Typography>
          </Link>
        </div>
      </div>
    </footer>
  );
}
