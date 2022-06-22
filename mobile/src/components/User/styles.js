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
    marginVertical: 20,
  },
  tabButton: {
    height: 45,
    width: 80,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: theme.colors.brand,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
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
  itemList: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  delete: {
    right: -5,
    height: 35,
    width: 100,
    marginTop: 10,
    backgroundColor: theme.colors.red,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  edit: {
    right: -5,
    height: 35,
    width: 100,
    marginRight: 25,
    marginTop: 10,
    backgroundColor: theme.colors.dark,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  itemListPart: {
    marginBottom: 15,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.brand,
  },
  itemListName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  scroll: {
    backgroundColor: theme.colors.light,
  },
});
