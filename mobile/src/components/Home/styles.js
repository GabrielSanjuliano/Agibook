import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    padding: 50,
  },
  button: {
    height: 60,
    flexDirection: "row",
    width: "100%",
    backgroundColor: theme.colors.brand,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 30,
  },
  title: {
    fontSize: 14,
    color: theme.colors.white,
    marginLeft: 20,
  },
  noContent: {
    height: 250,
    position: "relative",
    borderRadius: 15,
    marginTop: 200,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 2,
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.brand,
    padding: 20,
  },
  insideFont: { fontSize: 20, fontWeight: "bold", color: theme.colors.white },
});
