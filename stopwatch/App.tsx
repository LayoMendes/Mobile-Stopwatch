import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { useRef, useState } from "react";

export default function App() {
  const openLink = (url: string) => Linking.openURL(url);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  const handleScroll = (e: any) => {
    const scrollY = e.nativeEvent.contentOffset.y;

    if (scrollY > 20 && !visible) {
      setVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }

    if (scrollY <= 20 && visible) {
      setVisible(false);
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <LinearGradient
      colors={["#888888", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* o primeiro card, o da foto */}
        <View style={styles.card}>

          {/* minha foto com sombra */}
          <View style={styles.imageShadow}>
            <Image
              source={{
                uri: "https://media.licdn.com/dms/image/v2/D4D03AQGjZN3q0lM1Zw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727812091007?e=1766016000&v=beta&t=vsQwISHsXPDka-9hFV0k5HRk5Lmtwq5WLk0Gg95U2tc",
              }}
              style={styles.profileImage}
            />
          </View>

          <Text style={styles.name}>Layo Mendes</Text>

          <Text style={styles.subtitle}>
            Desenvolvedor Frontend & Mobile | React Native, TypeScript | Python, HTML, CSS
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver Projetos</Text>
          </TouchableOpacity>
        </View>

        {/* minhas redes sociais */}
        <View style={styles.socialCardsContainer}>
          <TouchableOpacity
            style={[styles.socialCard, { backgroundColor: "#25D366" }]}
            onPress={() => openLink("https://wa.me/3499755319")}
          >
            <Entypo name="chat" size={28} color="#fff" />
            <View style={styles.socialTextContainer}>
              <Text style={styles.socialTitle}>WhatsApp</Text>
              <Text style={styles.socialDescription}>
                Entre em contato comigo diretamente via WhatsApp.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialCard, { backgroundColor: "#0077B5" }]}
            onPress={() => openLink("https://www.linkedin.com/in/layo-mendes-0319a6263/")}
          >
            <Entypo name="linkedin" size={28} color="#fff" />
            <View style={styles.socialTextContainer}>
              <Text style={styles.socialTitle}>LinkedIn</Text>
              <Text style={styles.socialDescription}>
                Conecte-se comigo no LinkedIn para networking profissional.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialCard, { backgroundColor: "#333" }]}
            onPress={() => openLink("https://github.com/LayoMendes")}
          >
            <FontAwesome name="github" size={28} color="#fff" />
            <View style={styles.socialTextContainer}>
              <Text style={styles.socialTitle}>GitHub</Text>
              <Text style={styles.socialDescription}>
                Confira meus projetos e contribuições no GitHub.
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* o footer qnd rola*/}
        <Animated.View style={[styles.footer, { opacity: fadeAnim }]}>
          <Text style={styles.footerText}>Developed by Layo</Text>
        </Animated.View>

      </ScrollView>

      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 90,
    paddingBottom: 60,
  },

  card: {
    width: "85%",
    backgroundColor: "#111",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 12,
    marginBottom: 40,
  },

  imageShadow: {
    width: 130,
    height: 130,
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#6b8eff",
    shadowOpacity: 0.9,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    elevation: 18,
    marginBottom: 18,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#6b8eff",
  },

  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#6b8eff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    shadowColor: "#6b8eff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  socialCardsContainer: {
    width: "85%",
    alignItems: "center",
  },

  socialCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    width: "100%",
  },

  socialTextContainer: {
    marginLeft: 15,
    flex: 1,
  },

  socialTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },

  socialDescription: {
    color: "#e0e0e0",
    fontSize: 14,
  },

  footer: {
    marginTop: 50,
    paddingVertical: 20,
  },

  footerText: {
    color: "#fff",
    fontSize: 16,
    opacity: 0.8,
  },
});
