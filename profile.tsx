import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Profile() {
  const router = useRouter();
  const { email } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}><Text style={{color: '#fff'}}>User</Text></View>
        <Text style={styles.headerTitle}>User Profile</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Email Address:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backBtnText}>← Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  profileHeader: { alignItems: "center", marginTop: 50, marginBottom: 30 },
  avatarPlaceholder: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#999", justifyContent: "center", alignItems: "center", marginBottom: 10 },
  headerTitle: { fontSize: 24, fontWeight: "bold" },
  infoBox: { backgroundColor: "#f9f9f9", padding: 20, borderRadius: 15, marginBottom: 30 },
  label: { color: "#888", fontSize: 12 },
  value: { fontSize: 18, fontWeight: "500", marginTop: 5 },
  backBtn: { alignSelf: "center" },
  backBtnText: { color: "#007AFF", fontWeight: "600" }
});