// components/common/header.tsx
'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Typography from '@/components/ui/typography';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Menu as MenuIcon, X } from 'lucide-react';
import Image from 'next/image';

export function Header({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  const items = [
    { href: '/features', title: 'Features' },
    { href: '/pricing', title: 'Pricing' },
    { href: '/contact', title: 'Contact Us' },
  ];

  const getLogo = () => (
    <Link href="/" className="flex items-center">
      <Image src="/logo.svg" alt="Legacy AI Logo" width={40} height={40} />
      <Typography className="ml-2 text-xl font-bold text-indigo-600">Legacy AI</Typography>
    </Link>
  );

  const getAuthButtons = () => (
    <div className="flex gap-4 items-center">
      <Link href="/login">
        <Typography variant="p" className="text-gray-700 hover:text-indigo-600">
          Login
        </Typography>
      </Link>
      <Link href="/signup">
        <Button size="tiny" color="primary">
          Sign Up
        </Button>
      </Link>
    </div>
  );

  const getHeaderItems = () => (
    <>
      {items.map((item) => {
        const selected = pathname === item.href;
        return (
          <Link href={item.href} className="block" key={item.title}>
            <Typography variant="p" className={cn(selected ? 'text-indigo-600' : 'text-gray-700', 'hover:text-indigo-600')}>
              {item.title}
            </Typography>
          </Link>
        );
      })}
    </>
  );

  return (
    <header className={cn('flex items-center justify-between w-full px-6 py-4', className)}>
      {getLogo()}
      <nav className="hidden md:flex items-center gap-8">
        {getHeaderItems()}
      </nav>
      <div className="hidden md:flex">{getAuthButtons()}</div>
      <div className="md:hidden flex items-center">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="w-64">
            <DrawerHeader>
              <DrawerClose asChild>
                <Button variant="ghost" className="ml-auto">
                  <X />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <nav className="flex flex-col p-4 space-y-4">
              {getHeaderItems()}
              <div className="flex flex-col gap-2 mt-4">
                {getAuthButtons()}
              </div>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
