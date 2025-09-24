import { StyleSheet } from "react-native";
import { base } from "./BaseStyle";

export const cameraStyles = StyleSheet.create({
  rowSpace: { flexDirection: "row", gap: 12, justifyContent: "center", marginBottom: 16 },
  preview: {
    width: "100%",
    height: 280,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    backgroundColor: "#f3f3f3",
  },
});
export { base };
