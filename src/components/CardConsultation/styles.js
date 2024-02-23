import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 170,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginVertical: 10,
  },
  peopleArea: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
  },
  photo: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
  consultationArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  querys: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#A3A3A3",
    marginLeft: 10,
  },
  informationSchedule: {
    height: 100,
    width: "100%",
    padding: 15,
  },
  text: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#464646",
  },
  buttonsArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  button: {
    width: "48%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#464646",
  },
  buttonLocation: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#4894FF",
    alignItems: "center",
    justifyContent: "center",
  }
});