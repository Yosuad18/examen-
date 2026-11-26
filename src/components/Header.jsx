import { useNavigate } from "react-router-dom";
import { useCarritoStore } from "../store/useCarritoStore";

export default function Header(){
    const navigate = useNavigate()
    const items = useCarritoStore((state)=>state.items)
    const totalUnidades = items.reduce((suma, item)=>suma+item.cantidad, 0)

    return(
        <header>
            <h1>Mi tienda</h1>
            <span>Productos en {totalUnidades}</span>
            <button className="btn-primario" onClick={() => navigate('/carrito')}>
                Ver compras({totalUnidades})
            </button>
        </header>
    )
}