import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    padding: 50,
  },
  user: {
    color: theme.colors.brand,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    height: 45,
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
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    height: 50,
    padding: 16,
    marginBottom: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: theme.colors.brand,
    color: theme.colors.dark,
  },
});
