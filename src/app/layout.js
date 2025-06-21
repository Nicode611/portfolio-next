import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../lib/fontawesome' 
import ReduxProviderWrapper from '../redux/ReduxProviderWrapper';

export const metadata = {
  title: 'Nicolas Guigay - Développeur Fullstack | Portfolio',
  description: 'Portfolio de Nicolas Guigay, développeur fullstack spécialisé en React, Next.js, PHP et Node.js. Découvrez mes projets web et applications mobiles.',
  keywords: 'développeur fullstack, React, Next.js, PHP, Node.js, portfolio, développeur web, Nicolas Guigay',
  authors: [{ name: 'Nicolas Guigay' }],
  creator: 'Nicolas Guigay',
  publisher: 'Nicolas Guigay',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nicolas-guigay.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nicolas Guigay - Développeur Fullstack | Portfolio',
    description: 'Portfolio de Nicolas Guigay, développeur fullstack spécialisé en React, Next.js, PHP et Node.js. Découvrez mes projets web et applications mobiles.',
    url: 'https://www.nicolas-guigay.com',
    siteName: 'Portfolio Nicolas Guigay',
    images: [
      {
        url: '/images/profile-picture.webp',
        width: 1200,
        height: 630,
        alt: 'Nicolas Guigay - Développeur Fullstack',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolas Guigay - Développeur Fullstack | Portfolio',
    description: 'Portfolio de Nicolas Guigay, développeur fullstack spécialisé en React, Next.js, PHP et Node.js.',
    images: ['/images/profile-picture.webp'],
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
};

export default function RootLayout({ children }) {
  return (
      <html lang="fr" suppressHydrationWarning>
          <body className='overflow-x-hidden'>
              <ReduxProviderWrapper>
                  <Header />
                  <main>{children}</main>
              </ReduxProviderWrapper>
          </body>
      </html>
  );
}