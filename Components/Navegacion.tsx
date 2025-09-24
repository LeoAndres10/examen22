import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import AgregarProducto from '../Pages/AgregarProducto';
import ListarProductos from '../Pages/ListarProductos';

export default function Navegacion() {

    const tab= createBottomTabNavigator();
  return (
    
    <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name='AgregarProducto' component={AgregarProducto}></tab.Screen>
            <tab.Screen name='DetalleProducto' component={ListarProductos}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
   
  )
}