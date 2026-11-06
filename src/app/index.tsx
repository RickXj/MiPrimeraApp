import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [mensaje, setMensaje] = useState('¡Estoy aprendiendo React Native!');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mi primera aplicación</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>
      <Pressable
        style={styles.boton}
        onPress={() => setMensaje('¡Mi primer botón funciona!')}
      >
        <Text style={styles.textoBoton}>Tócame </Text>
      </Pressable>
      <Pressable
        style={[styles.boton, styles.botonReiniciar]}
        onPress={() => setMensaje('¡Estoy aprendiendo React Native!')}>
        <Text style={styles.textoBoton}>Vera descuido 🥵🔥 </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eef4ff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173b75',
    marginBottom: 18,
  },
  mensaje: {
    fontSize: 17,
    marginBottom: 22,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 12, // Añadido para que los botones no se peguen
  },
  botonReiniciar: {
    backgroundColor: '#ef4444', // Color rojo para el botón de reinicio
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
