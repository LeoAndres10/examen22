import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Producto } from '../Modelos/Producto';
import { useContextProducto } from '../Provider/ProductoProvider';
import { cameraStyles as s, base } from "../Estilo/AccesoCamaraStyle";
import { useNavigation } from '@react-navigation/native';

export default function ListarProductos() {

   const {listaProducto,eliminarProducto,listarProductos} = useContextProducto()
     const navigation = useNavigation();
    useEffect(()=>{
        listarProductos();
    }, []);
    return (
        <View>
            <Text>Listado de Productos </Text>
            {
                listaProducto.length == 0 ? (
                    <Text>Informacion Cargando</Text>
                )
                    : (

                        <FlatList data={listaProducto}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) =>
                                <View>
                                    <Text>Nombre Producto: {item.nombre}</Text>
                                    <Text>Descripcion: {item.descripcion}</Text>
                                    <Text>Precio : {item.precio}</Text>
                                      <Text>Estado : {item.estado}</Text>
                                        <Text>Categoria : {item.categoria}</Text>
                                          <Text>URL : {item.url}</Text>
                                          <TouchableOpacity
                                        style={base.buttonOutline}
                                    onPress={() => navigation.navigate("AccesoCamara" as never)}
      >
                                    <Text style={base.buttonOutlineText}>Acceso a la camara</Text>

        
                                 </TouchableOpacity>
                                    <Button title="Eliminar Producto" onPress={(e)=>eliminarProducto(item.id)}></Button>
                                </View>

                            }
                        >

                        </FlatList>
                    )
            }
        </View>
    )
}