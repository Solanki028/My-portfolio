import './globals.css';
import GlobalMouseEffect from '@/components/GlobalMouseEffect';

export const metadata = {
  title: 'Priyanshu Solanki - Full Stack Developer',
  description: 'Modern portfolio website showcasing software development skills, AI engineering, and innovative web solutions. Explore my projects and get in touch.',
  keywords: ['Full Stack Developer', 'AI Engineer', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Priyanshu Solanki'],
  authors: [{ name: 'Priyanshu Solanki' }],
  creator: 'Priyanshu Solanki',
  publisher: 'Priyanshu Solanki',
  openGraph: {
    title: 'Priyanshu Solanki - Full Stack Developer',
    description: 'Modern portfolio website showcasing software development skills, AI engineering, and innovative web solutions.',
    url: 'https://priyanshuxfolio.netlify.app/',
    siteName: 'Priyanshu Solanki Portfolio',
    images: [
      {
        url: 'https://priyanshuxfolio.netlify.app/images/me pic.png',
        width: 1200,
        height: 630,
        alt: 'Priyanshu Solanki - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Solanki - Full Stack Developer',
    description: 'Modern portfolio website showcasing software development skills, AI engineering, and innovative web solutions.',
    images: ['https://priyanshuxfolio.netlify.app/images/me pic.png'],
    creator: '@your-twitter-handle', // Replace with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add if you have Google Search Console verification
  },
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