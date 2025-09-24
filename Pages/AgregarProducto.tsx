import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { Producto } from '../Modelos/Producto'
import { useContextProducto } from '../Provider/ProductoProvider'

export default function AgregarProducto() {

    const {agregarProducto} = useContextProducto();
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState<number>(0)
    const [estado, setEstado] = useState('')
    const [categoria, setCategoria] = useState('')
    const [url, setUrl] = useState('')

     function agregarProductos() {
         let producto:Producto={
            id:0,
            nombre:nombre,
            descripcion: descripcion,
            precio:precio,
            estado:estado,
            categoria:categoria,
            url:url
        }

        agregarProducto(producto)
    }
    return (
        <View>
            <Text>Agregar Productos</Text>

            <TextInput placeholder='Nombre Producto'
                value={nombre}
                onChangeText={setNombre}
            ></TextInput>

            <TextInput placeholder='Descripcion'
                value={descripcion}
                onChangeText={setDescripcion}
            ></TextInput>

            <TextInput placeholder='Precio'
                value={precio.toString()}
                onChangeText={()=>setPrecio}
            ></TextInput>

            <TextInput placeholder='Estado'
                value={estado}
                onChangeText={setEstado}
            ></TextInput>

            <TextInput placeholder='Categoria'
                value={categoria}
                onChangeText={()=>setCategoria}
            ></TextInput>

             <TextInput placeholder='URL'
                value={url}
                onChangeText={()=>setUrl}
            ></TextInput>


            <Button title='Agregar Producto' onPress={agregarProductos}></Button>
        </View>
    )
}