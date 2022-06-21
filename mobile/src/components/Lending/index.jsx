import React, { useEffect, useState } from "react";
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
import NumericInput from "react-native-numeric-input";
import CurrencyInput from "react-native-currency-input";
import RNPickerSelect from "react-native-picker-select";
import { getAllClients } from "../../helpers/getAllClients";
import { api } from "../../libs/api";

export function Lending() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState(0);
  const [clients, setClients] = useState([]);
  const [fee, setFee] = useState();
  const [parcels, setParcels] = useState();
  const [selectedClient, setSelectedClient] = useState({});

  async function saveLending() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await api
      .post("/lending", {
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

  useEffect(() => {
    getAllClients(setClients);
    console.log("1º - ", clients);
  }, []);

  useEffect(() => {
    console.log("1º - ", clients);
    console.log("2º - ", value);
    console.log("3º - ", fee);
    console.log("4º - ", parcels);
  }, [value, fee, parcels]);

  return (
    <View style={styles.container}>
      <Text style={styles.user}>Fazer empréstimo</Text>
      <View>
        <Text style={styles.label}>Clientes</Text>
        <RNPickerSelect
          style={{ backgroundColor: theme.colors.brand }}
          placeholder={{
            label: "Selecione um cliente",
            value: null,
          }}
          onValueChange={(value) => console.log(value)}
          items={clients}
        />
      </View>
      <View>
        <Text style={styles.label}>Empréstimo</Text>
        <CurrencyInput
          value={value}
          onChangeValue={setValue}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          style={{
            backgroundColor: theme.colors.white,
            paddingVertical: 10,
            paddingHorizontal: 20,
            fontSize: 20,
            borderRadius: 15,
          }}
          // onChangeText={(formattedValue) => {
          //   console.log(formattedValue); // $2,310.46
          // }}
        />
      </View>
      <View>
        <Text style={styles.label}>Parcelas</Text>
        <NumericInput
          onChange={(value) => setParcels(value)}
          iconSize={25}
          step={1}
          valueType="real"
          rounded
          textColor="#555"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor={theme.colors.brand}
          leftButtonBackgroundColor={theme.colors.brand}
        />
      </View>
      <View>
        <Text style={styles.label}>Juros</Text>
        <NumericInput
          onChange={(value) => setFee(value)}
          iconSize={25}
          step={1}
          valueType="real"
          rounded
          textColor="#555"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor={theme.colors.brand}
          leftButtonBackgroundColor={theme.colors.brand}
        />
      </View>
      <TouchableOpacity onPress={saveLending} style={styles.button}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.brand} />
        ) : (
          <Text style={styles.title}>Salvar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
