// app/index.tsx (This is your Home screen)
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleNavigateToCardPage = () => {
    router.push("/cards" as any);
  };
  const handleNavigateToSignUpPage = () => {
    router.push("/signup" as any);
  };

  return (
    <View style={styles.container}>
      {/* 🔥 Navbar-like Header */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={handleNavigateToCardPage}>
          <Text style={styles.navItem}>CardPage</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={handleNavigateToSignUpPage}>
          <Text style={styles.navItem}>SignUp Page</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 Home content */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Home Screen </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 60,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  navItem: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
