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
import SelectList from "react-native-dropdown-select-list";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

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
        client_id: selectedClient,
        lending_value: value,
        fee,
        parcels,
      })
      .then((res) => {
        getAllClients().then((res) => {
          setClients(
            res.data.map((client) => {
              return { key: client.id, value: client.name };
            })
          );
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getAllClients().then((res) => {
      setClients(
        res.data.map((client) => {
          return { key: client.id, value: client.name };
        })
      );
    });
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.user}>Fazer empréstimo</Text>
        <View>
          <Text style={styles.label}>Clientes</Text>
          <SelectList setSelected={setSelectedClient} data={clients} />
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
    </ScrollView>
  );
}
