import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    padding: 50,
  },
  scroll: {
    backgroundColor: theme.colors.light,
  },
  user: {
    color: theme.colors.brand,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    height: 45,
    width: "100%",
    backgroundColor: theme.colors.brand,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 60,
  },
  title: {
    fontSize: 14,
    color: theme.colors.white,
  },
  label: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
