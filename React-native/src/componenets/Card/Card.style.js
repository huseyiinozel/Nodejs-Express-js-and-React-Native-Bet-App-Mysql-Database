import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  matchContainer: {
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  blueBox: {
    backgroundColor: "#d3d3d3",
    borderRadius: 4,
    padding: 4,
  },
  codeBox: {
    backgroundColor: "lavender",
    borderRadius: 30,
    padding: 4,
  },
  codeBox2: {
    backgroundColor: "mistyrose",
    borderRadius: 30,
    padding: 4,
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  matchText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#000",
  },
});
