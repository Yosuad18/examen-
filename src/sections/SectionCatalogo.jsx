import { NavLink, Outlet } from 'react-router-dom';

export default function SectionCatalogo() {
  return (
    <section className="seccion">
      <div className="pestanas">
        <NavLink to="/catalogo" end className="pestanas__item">
          Cargados con fetch
        </NavLink>
        <NavLink to="/catalogo/axios" className="pestanas__item">
          Cargados con Axios
        </NavLink>
      </div>
      <div className="seccion__contenido">
        <Outlet />
      </div>
    </section>
  );
}