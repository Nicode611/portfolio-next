import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../lib/fontawesome' 
import ReduxProviderWrapper from '../redux/ReduxProviderWrapper';

export const metadata = {
  title: 'Nicolas Guigay - Fullstack Developer',
  description: 'Portfolio de Nicolas Guigay, fullstack developper',
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