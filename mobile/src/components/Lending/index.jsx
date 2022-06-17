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

export function Lending() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState(0);

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
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
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
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
      </View>
      <View>
        <Text style={styles.label}>Parcelas</Text>
        <NumericInput
          onChange={(value) => console.log(value)}
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
          onChange={(value) => console.log(value)}
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
      <TouchableOpacity style={styles.button}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.brand} />
        ) : (
          <Text style={styles.title}>Salvar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
