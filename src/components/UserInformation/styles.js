import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  information: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#464646",
  },
  querys: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#6a6a6a",
  },
});