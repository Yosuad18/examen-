import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="contenido">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

