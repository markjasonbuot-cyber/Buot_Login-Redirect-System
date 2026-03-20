import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Dashboard() {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.userEmail}>User: {email}</Text>
      </View>

      <TouchableOpacity style={styles.navButton} onPress={() => router.push({ pathname: "/profile", params: { email } })}>
        <Text style={styles.navText}>View My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => router.replace("/")}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center" },
  card: { backgroundColor: "#e3f2fd", padding: 25, borderRadius: 20, marginBottom: 20, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "#1976d2" },
  userEmail: { fontSize: 14, color: "#555", marginTop: 5 },
  navButton: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 10 },
  navText: { color: "#fff", fontWeight: "600" },
  logoutBtn: { padding: 15, alignItems: "center" },
  logoutText: { color: "red", fontWeight: "bold" }
});