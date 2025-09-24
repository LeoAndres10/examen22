import React, { useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { cameraStyles as s, base } from "../Estilo/AccesoCamaraStyle";

export default function AccesoCamara() {
  const [uri, setUri] = useState<string | null>(null);

  const abrirGaleria = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) setUri(result.assets[0].uri);
    } catch {
      Alert.alert("Error", "No se pudo abrir la galería.");
    }
  };

  const abrirCamara = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permiso requerido", "Activa el permiso de cámara.");
        return;
      }
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) setUri(result.assets[0].uri);
    } catch {
      Alert.alert("Error", "No se pudo abrir la cámara.");
    }
  };

  return (
    <View style={base.screen}>
      <Text style={base.title}>Sube una foto</Text>

      <View style={s.rowSpace}>
        <TouchableOpacity style={base.buttonPrimary} onPress={abrirGaleria}>
          <Text style={base.buttonPrimaryText}>Abrir galería</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.buttonOutline} onPress={abrirCamara}>
          <Text style={base.buttonOutlineText}>Abrir cámara</Text>
        </TouchableOpacity>
      </View>

      {uri ? <Image source={{ uri }} style={s.preview} /> : <Text style={base.muted}>Sin imagen seleccionada</Text>}
    </View>
  );
}
