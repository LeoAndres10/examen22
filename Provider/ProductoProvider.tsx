import { View, Text, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Producto } from '../Modelos/Producto';
import { Plantilla } from '../Modelos/Plantilla';
import AgregarProducto from '../Pages/AgregarProducto';
import { ProductoContext } from '../ProductoContext/ProductoContext';

export default function ProviderAlumno({children}: Plantilla) {

  const [listaProducto,setListaProducto]=useState<Producto[]>([]);

async function agregarProducto(item: Producto){
       
        const respuesta= await fetch('http://192.168.0.7:5000/productos', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item)
        });

        const respuestaApi= await respuesta.json()

        if(respuestaApi){
            Alert.alert("ALumno agregado")
        }
        else{
            Alert.alert('Ocurrio un error')
        }
    }

    async function eliminarProducto(id: number){
       
        const respuesta= await fetch('http://192.168.0.7:5000/items/:id', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(id)
        });

        const respuestaApi= await respuesta.json()

        if(respuestaApi){
          setListaProducto((listaAnterior: any[]) => listaAnterior.filter(item => item.id !==id))
            Alert.alert("ALumno eliminado")
        }
        else{
            Alert.alert('Ocurrio un error')
        }
    }

    
        async function listarProductos() {
    
            const response = await fetch('http://192.168.0.7:5000/alumno', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            const listado = await response.json();
            setListaProducto(listado)
    
        }
    
        useEffect(() => {
            listarProductos()
        }, []);
    
        useEffect(() => {
          
        }, [listaProducto])
    

  return (
    
    <ProductoContext.Provider value={{agregarProducto,listaProducto,listarProductos,eliminarProducto}}>
      {children}
    </ProductoContext.Provider>
  )
}

export function useContextProducto(){
  return useContext(ProductoContext);
}