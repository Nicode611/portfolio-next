import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../lib/fontawesome' 
import ReduxProviderWrapper from '../redux/ReduxProviderWrapper';

export const metadata = {
  title: 'Nicolas Guigay - UI/UX Designer & Developer',
  description: 'Portfolio de Nicolas Guigay, designer UI/UX et développeur basé aux Pays-Bas',
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