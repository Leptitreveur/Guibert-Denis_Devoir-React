import { Outlet } from 'react-router-dom';

import Header from 'src/components/layout/Header/Header';
import Footer from 'src/components/layout/Footer/Footer';

/**
 * Composant principal de l'application
 *
 * @returns {JSX.Element} Structure principale de l'application
 */
export default function App() {
  return (
    <>
      <Header />

      <main className="d-flex flex-column align-items-center justify-content-center w-100 h-100 bg-white pb-3 pb-md-4">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
