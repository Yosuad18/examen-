import './App.css'
import { Routes, Route } from 'react-router-dom';

export default function App() {
    return(
        <Routes>
      {/* Ruta padre: el Layout siempre se ve; su Outlet cambia */}
      <Route path="/" element={<Layout />}>
        {/* index = lo que se muestra en "/" exactamente */}
        <Route index element={<Inicio />} />

        {/* ---------- SECTION 1: CATÁLOGO ---------- */}
        <Route path="catalogo" element={<SectionCatalogo />}>
          <Route index element={<ProductosFetch />} />
          <Route path="axios" element={<ProductosAxios />} />
        </Route>

        {/* ---------- SECTION 2: COMPRAS ---------- */}
        <Route path="compras" element={<SectionCompras />}>
          <Route index element={<Carrito />} />
          <Route path="resumen" element={<Resumen />} />
        </Route>

      </Route>
    </Routes>
    )
}

