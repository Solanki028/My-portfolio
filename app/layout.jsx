import './globals.css';
import GlobalMouseEffect from '@/components/GlobalMouseEffect';

export const metadata = {
  title: 'Portfolio - Software Developer',
  description: 'Modern portfolio website showcasing software development skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="cursor-none">
        <GlobalMouseEffect />
        {children}
      </body>
    </html>
  );
}