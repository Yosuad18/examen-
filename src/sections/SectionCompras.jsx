import { NavLink, Outlet } from 'react-router-dom';
import { useCarritoStore } from '../store/useCarritoStore.js';

export default function SectionCompra() {
    const distintos = useCarritoStore((state) => state.productos.length);
    return (
        <section className="seccion">
        <img
            alt="Portada de compras con un carrito de mercado"
            className="seccion__banner"
        />

        <div className="pestanas">
            <NavLink to="/compras" end className="pestanas__item">
            Carrito ({distintos})
            </NavLink>
            <NavLink to="/compras/resumen" className="pestanas__item">
            Resumen de compra
            </NavLink>
        </div>

        <div className="seccion__contenido">
            <Outlet />
        </div>
        </section>
    );
}
