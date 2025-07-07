import { Outlet } from 'react-router-dom';

import Header from 'src/components/layout/Header/Header';
import Footer from 'src/components/layout/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />

      <main className="d-flex flex-column align-items-center justify-content-center h-100 pb-5 bg-white">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
