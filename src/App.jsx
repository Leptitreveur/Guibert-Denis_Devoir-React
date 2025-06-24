import { Outlet } from 'react-router-dom';

import Header from 'src/components/layout/Header/Header';
import Footer from 'src/components/layout/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />

      <main className="app-main__outlet-container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
