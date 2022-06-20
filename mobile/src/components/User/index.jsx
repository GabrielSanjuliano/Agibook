import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { theme } from "../../theme";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";
import { api } from "../../libs/api";

export function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(false);
  const [number, setNumber] = useState(false);
  const [document, setDocument] = useState(false);
  const [address, setAddress] = useState(false);

  async function saveClient() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await api
      .post("/client", {
        name,
        number,
        address,
        document,
      })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.user}>Cadastro de cliente</Text>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          onChangeText={setName}
          autoCorrect={false}
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor={theme.colors.dark}
        />
      </View>
      <View>
        <Text style={styles.label}>Número</Text>
        <TextInput
          onChangeText={setNumber}
          autoCorrect={false}
          style={styles.input}
          placeholder="Número"
          placeholderTextColor={theme.colors.dark}
        />
      </View>
      <View>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          onChangeText={setDocument}
          autoCorrect={false}
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor={theme.colors.dark}
        />
      </View>
      <View>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          onChangeText={setAddress}
          autoCorrect={false}
          style={styles.input}
          placeholder="Endereço"
          placeholderTextColor={theme.colors.dark}
        />
      </View>
      {/* Button */}
      <View>
        <BouncyCheckbox
          size={25}
          fillColor={theme.colors.brand}
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: theme.colors.brand }}
          text="Vivo"

          // onPress={(isChecked: boolean) => {}}
        />
        <TouchableOpacity
          disabled={isLoading}
          onPress={saveClient}
          style={styles.button}
        >
          {isLoading ? (
            <ActivityIndicator color={theme.colors.brand} />
          ) : (
            <Text style={styles.title}>Salvar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
