import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import imagemBiscoitoFechado from './assets/biscoito-fechado.png';
import imagemBiscoitoAberto from './assets/biscoito-aberto.png';
export default function App() {

  const [quebrarBiscoito, setQuebrarBiscoito] = useState(false) 
  const [mensagem, setMensagem] = useState('') 

  const frases = [
    "O Corinthians: acredite, a vitória está ao alcance de todos.",
    "São Paulo FC: a união é a chave do sucesso, vá em frente!",
    "Palmeiras: com determinação, você alcançará seus objetivos.",
    "Flamengo: o fogo da paixão levará você à glória.",
    "Grêmio: confie na tradição, ela guiará seu caminho.",
    "Internacional: a perseverança é o segredo da conquista.",
    "Cruzeiro: siga sua estrela, ela iluminará seu destino.",
    "Vasco da Gama: navegue com coragem, o sucesso o espera.",
    "Atlético Mineiro: a força da massa o levará longe.",
    "Botafogo: a estrela solitária brilha sobre seus sonhos.",
    "Fluminense: juntos, somos imparáveis, acredite!",
    "Santos FC: a paixão pelo jogo é sua maior arma.",
    "Athletico Paranaense: a garra é o que nos faz vencer.",
    "Bahia: com fé e dedicação, tudo é possível.",
    "Sport Recife: a determinação supera qualquer desafio.",
    "Fortaleza: a coragem te levará ao topo, siga em frente.",
    "Goiás: a perseverança é a chave para o sucesso duradouro.",
    "Ceará: a união do time é a força que você precisa.",
    "Coritiba: confie em si mesmo, você é capaz de grandes feitos.",
    "Vitória: o esforço leva à vitória, nunca desista!",
  ];
  
  function mostrarMensagem() {
    setQuebrarBiscoito(true)
    const indiceAleatorio = parseInt(Math.random() * frases.length)
    setMensagem(frases[indiceAleatorio])
  }

  return (
    <View style={styles.container}>
          <Image
            style={styles.image}
            source={quebrarBiscoito ? imagemBiscoitoAberto : imagemBiscoitoFechado}
          />

          <Text style={styles.texto}>
            {
              quebrarBiscoito ? mensagem : ''
            }
          </Text>

          <TouchableOpacity 
              style={styles.botao}
              onPress={mostrarMensagem} 
              disabled={quebrarBiscoito}
              >
            <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => setQuebrarBiscoito(false)}>
            <Text style={styles.textoBotao}>Reiniciar Biscoito</Text>
          </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 400,
    height: 300,
    marginBottom: 60,
    
  },

  botao: {
    backgroundColor: "black",
    borderRadius: 100,
    paddingTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 180,
    marginBottom: 20
  },

  textoBotao: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    color : "red" 
  },

  texto: {
    fontSize: 20,
    color: 'red',
    marginBottom: 50,
    fontWeight: 'bold',
    backgroundColor: 'white',
    paddingRight: 20,
    paddingLeft: 20
  }
});
