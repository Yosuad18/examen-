import { useNavigate } from 'react-router-dom';

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio">
      <h2 className="inicio__titulo text-rose-500">Bienvenido a MercaCauca</h2>
      <p className="inicio__texto border-gray-600">
        Explora productos de ecomerce en la ciudad de popayan
      </p>

      <div className="inicio__tarjetas">
        <article className="tarjeta-inicio p-6">
          <img src="../assets/hero.png"alt="Vista previa del catálogo" />
          <h3>Catálogo</h3>
          <p className='p-6'>Productos con fetch (FakeStoreAPI) y con Axios (DummyJSON).</p>
          <button
            type="button"
            className="btn btn--primario p-6"
            onClick={() => navigate('/catalogo')}
          >
            Ver catálogo
          </button>
        </article>

        {/* Tarjeta de la Section 2 */}
        <article className="tarjeta-inicio p-6">
          <img src= "../assets/react.sgv"alt="Vista previa de compras" />
          <h3>Mis compras</h3>
          <p>Carrito global con Zustand: agregar, sumar, restar y eliminar.</p>
          <button
            type="button"
            className="btn btn--secundario p-6"
            onClick={() => navigate('/compras')}
          >
            Ir a compras
          </button>
        </article>
      </div>
    </div>
  );
}


