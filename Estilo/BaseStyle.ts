import { StyleSheet } from "react-native";
export const base = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff", padding: 24 },
  centered: { justifyContent: "center" }, // úsalo junto a screen si quieres centrar vertical

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b6b6b",
    marginBottom: 24,
    textAlign: "center",
  },

  formGroup: { marginBottom: 16 },
  label: { marginBottom: 6, fontWeight: "600", fontSize: 14, color: "#111" },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#111",
    backgroundColor: "#fff",
  },

  buttonPrimary: {
    height: 48,
    backgroundColor: "#111",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  buttonPrimaryText: { color: "#fff", fontWeight: "600", fontSize: 15 },

  buttonOutline: {
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#111",
  },
  buttonOutlineText: { color: "#111", fontWeight: "600", fontSize: 15 },

  link: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 14,
    color: "#111",
    textDecorationLine: "underline",
  },

  // utilidades comunes
  row: { flexDirection: "row", alignItems: "center" },
  muted: { color: "#6b6b6b", textAlign: "center" },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 16,
  },
  cardTitle: { fontSize: 16, fontWeight: "600", color: "#111", marginBottom: 6 },
  cardText: { color: "#6b6b6b" },
});
