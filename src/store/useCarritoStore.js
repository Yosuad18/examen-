import { create } from 'zustand'
export const useCarritoStore=create((set, get)=>({
    productos: productosIniciales,
    items: [],
  setProductos: (nuevosproductos) => set({ productos: nuevosproductos }),

  agregarProducto: (producto) =>
    set((state) => {
      const exist = state.items.find((item) => item.id === producto.id)
      if (exist) {
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        }
      }
      return { items: [...state.items, { ...producto, cantidad: 1 }] }
    }),
}))