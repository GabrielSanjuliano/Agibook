import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    padding: 50,
  },
  button: {
    height: 45,
    width: 150,
    backgroundColor: theme.colors.brand,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    color: theme.colors.white,
  },
    titleText: {
    fontSize: 20,
    color: theme.colors.dark,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 50,
    padding: 12,
    marginBottom: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: theme.colors.brand,
    color: theme.colors.dark,
  },
});
