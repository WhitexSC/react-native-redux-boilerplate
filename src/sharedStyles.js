import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  flexRow: {
    flexDirection: "row"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  screenBackground: {
    flex: 1,
    backgroundColor: "#f5f5f4"
  },
  button: {
    fontFamily: "Lato-Regular",
    fontSize: 13,
    fontWeight: "normal",
    color: "rgba(255, 255, 255, 0.7)",
    margin:13
  },
});

export default styles;
