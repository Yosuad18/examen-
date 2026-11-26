import { useNavigate } from 'react-router-dom'
import { useCarritoStore } from '../store/useCarritoStore'

export default function Carrito() {
  const navigate = useNavigate()
  const items = useCarritoStore((state) => state.items)
  const calcularTotal = useCarritoStore((state) => state.calcularTotal)
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto)
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito)
  const total = calcularTotal()

  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Carrito</h2>
        <p className="vacio">Tu carrito está vacío</p>
        <button className="btn btn-secundario btn-bloque" onClick={() => navigate('/')}>
          Ir al catálogo
        </button>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>Carrito</h2>
      {items.map((item) => (
        <div key={item.id} className="fila">
          <div>
            <p className="fila-nombre">{item.nombre}</p>
            <p className="fila-detalle">
              {item.cantidad} x ${item.precio.toLocaleString('es-CO')}
            </p>
          </div>
          <button
            className="btn btn-secundario"
            onClick={() => eliminarProducto(item.id)}
          >
            Quitar
          </button>
        </div>
      ))}

      <div className="total">
        <span>Total</span>
        <strong>${total.toLocaleString('es-CO')}</strong>
      </div>

      <button
        className="btn btn-secundario btn-bloque"
        onClick={vaciarCarrito}
      >
        Vaciar carrito
      </button>
    </section>
  )
}
