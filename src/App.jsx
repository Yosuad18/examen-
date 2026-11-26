import './App.css'
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio.jsx';
import ProductosFetch from './pages/ProductosFetch.jsx';
import ProductosAxios from './pages/ProductosAxios.jsx';
import Carrito from './pages/Carrito.jsx';
import Resumen from './pages/Resumen.jsx';
import Layout from './layout/Layout.jsx';
import SectionCatalogo from './sections/SectionCatalogo.jsx';
import SectionCompras from './sections/SectionCompras.jsx';
import NoEncontrado from './pages/NoEncontrado.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />

        <Route path="catalogo" element={<SectionCatalogo />}>
          <Route index element={<ProductosFetch />} />
          <Route path="axios" element={<ProductosAxios />} />
        </Route>

        <Route path="compras" element={<SectionCompras />}>
          <Route index element={<Carrito />} />
          <Route path="resumen" element={<Resumen />} />
        </Route>
      </Route>

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

