import { Outlet } from "react-router-dom";

import Header from 'layout/Header/Header'
import Footer from 'layout/Footer/Footer.jsx';

export default function App() {

  return (
    <>
      <Header />

      <main className="app-main__outlet-container">
        <Outlet />
      </main>

      <Footer />
    </>
  )
};