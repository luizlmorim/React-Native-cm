import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as Location from "expo-location";

const Inicio = ({ navigation }) => {
  const [emotion, setEmotion] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MindCalm</Text>
      <Button
        title="Próxima Tela"
        onPress={() => {
          navigation.navigate("Respiracao");
        }}
      />
      <View style={styles.content}>
        <Text style={styles.p}>Olá, como você está hoje?</Text>

        <View style={styles.emotions}>
          <TouchableOpacity onPress={() => setEmotion("raiva")}>
            <View style={styles.red}>
              <Image
                source={require("../assets/emocoes/raiva.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEmotion("triste")}>
            <View style={styles.blue}>
              <Image
                source={require("../assets/emocoes/triste.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEmotion("neutro")}>
            <View style={styles.green}>
              <Image
                source={require("../assets/emocoes/neutro.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEmotion("alegre")}>
            <View style={styles.yellow}>
              <Image
                source={require("../assets/emocoes/alegre.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {emotion === "raiva" && (
          <Text style={styles.pp}>
            A raiva é uma emoção intensa. Considere usar nosso Diário de Emoções
            para anotar o que está causando essa sensação.
          </Text>
        )}

        {emotion === "triste" && (
          <Text style={styles.pp}>
            Às vezes, colocar os sentimentos no papel pode ajudar a aliviar a
            tristeza. Use nosso Diário de Emoções para desabafar e refletir
            sobre o que está causando sua tristeza.
          </Text>
        )}

        {emotion === "neutro" && (
          <Text style={styles.pp}>
            Sentir-se neutro é completamente normal. Aproveite este momento para
            refletir sobre o seu dia e suas emoções.
          </Text>
        )}

        {emotion === "alegre" && (
          <Text style={styles.pp}>
            Que ótimo que você está se sentindo alegre! Continue aproveitando
            esse sentimento positivo e espalhando alegria ao seu redor.
          </Text>
        )}

        <View>
          <Text>Diário</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Respiracao");
            }}
          >
            <Text>Respiração</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#00f",
  },
  header: {
    fontSize: 28,
    textAlign: "center",
    color: "#fff",
    marginVertical: 15,
  },
  content: {
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: 15,
  },
  p: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 15,
  },
  emotions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  pp: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 100,
  },
});

export default Inicio;
