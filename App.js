import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./components/InicioComponent";
import Respiracao from "./components/RespiracaoComponent";
import Diario from "./components/DiarioComponent";

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  /*
  const [denuncias, setDenuncias] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState(null);

  useEffect(() => {
    fetchDenuncias();
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão de localização negada');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocal({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const fetchDenuncias = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/registros');
      const data = await response.json();
      setDenuncias(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addDenuncia = async () => {
    if (!titulo || !descricao || !local) {
      Alert.alert('Erro', 'Preencha todos os campos e aguarde a localização ser obtida');
      return;
    }

    const denuncia = { titulo, descricao, local };

    try {
      const response = await fetch('http://127.0.0.1:3000/registros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(denuncia),
      });
      if (response.ok) {
        fetchDenuncias();
        setTitulo('');
        setDescricao('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteDenuncia = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/registros/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchDenuncias();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.titulo}</Text>
      <Text>{item.descricao}</Text>
      <Text>Local: {item.local.latitude}, {item.local.longitude}</Text>
      <Button title="Excluir" onPress={() => deleteDenuncia(item._id)} />
    </View>
  );
*/
  /*Contéudo das telas*/
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen name="inicio" component={Inicio}></Stack.Screen>
        <Stack.Screen name="Respiracao" component={Respiracao}></Stack.Screen>
        <Stack.Screen name="Diario" component={Diario}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default App;
