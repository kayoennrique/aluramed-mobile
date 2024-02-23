import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#464646",
  },
  details: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "600",
    color: "#6a6a6a",
    marginTop: 10,
    marginBottom: 10,
  },
  imageMap: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    height: 60,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: '#4894FF',
    marginVertical: 10,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonText: {
    fontWeight: "700",
    fontFamily: "Roboto",
    fontSize: 16,
    color: '#FFFFFF',
  },
  detailsMedia: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  media: {
    width: 150,
    height: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: "#4894FF",
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#000000",
  },
});