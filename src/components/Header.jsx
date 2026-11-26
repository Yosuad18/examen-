import { useNavigate } from "react-router-dom";
import { useCarritoStore } from "../store/useCarritoStore";

export default function Header(){
    const navigate = useNavigate()
    const items = useCarritoStore((state)=>state.items)
    const totalUnidades = items.reduce((suma, item)=>suma+item.cantidad, 0)

    return(
        <header>
            <h1 className="text-red-700 text-6xl">Mi tienda MercaCauca</h1>
            <span className="text-green-700">Productos en {totalUnidades}</span>
            <button className=" bg-white shadow-sm  " onClick={() => navigate('/carrito')}>
                Ver compras({totalUnidades})
            </button>
        </header>
    )
}