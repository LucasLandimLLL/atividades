import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [numero, setNumero] = useState("00:00:00");
  const [botao, setBotao] = useState("Iniciar");
  const [historico, setHistorico] = useState([]);

  function iniciar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotao("Continuar");
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);

        setNumero(format);
      }, 1000);

      setBotao("Parar");
    }
  }

  function zerar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotao("Iniciar");
    }

    if (numero !== "00:00:00") {
      setHistorico([numero, ...historico]);
    }

    setNumero("00:00:00");
    ss = 0;
    mm = 0;
    hh = 0;
  }

  function limparHistorico() {
    setHistorico([]);
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/image/crono.png")} />
      <Text style={styles.timer}>{numero}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btnButton} onPress={iniciar}>
          <Text style={styles.btnText}>{botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnButton, timer !== null && styles.disabledButton]}
          onPress={zerar}
          disabled={timer !== null}
        >
          <Text style={styles.btnText}>Zerar</Text>
        </TouchableOpacity>
      </View>
      {historico.length > 0 && (
        <TouchableOpacity onPress={limparHistorico} style={styles.limparHistoricoButton}>
          <Text style={styles.limparHistoricoText}>Limpar Histórico</Text>
        </TouchableOpacity>
      )}
      {historico.length > 0 && (
        <View style={styles.areaHistorico}>
          <Text style={styles.historicoTitle}>Últimos tempos:</Text>
          {historico.map((tempo, index) => (
            <Text key={index} style={styles.historicoItem}>
              {tempo}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800000",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    marginTop: -160,
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    height: 40,
  },
  btnButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    margin: 17,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 3,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  areaHistorico: {
    marginTop: 20,
    alignItems: "center",
  },
  historicoTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  historicoItem: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
    fontWeight: "bold",
  },
  limparHistoricoButton: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 20,
    marginTop: 30,  
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  limparHistoricoText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,
  },
});
