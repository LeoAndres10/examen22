import { createContext } from "react";

import { Producto } from "../Modelos/Producto";

export const ProductoContext=createContext({
    listaProducto: [] as Producto[],
    listarProductos:()=>{},
    agregarProducto:(item: Producto)=>{},
 
    eliminarProducto:(id: number)=>{}


})