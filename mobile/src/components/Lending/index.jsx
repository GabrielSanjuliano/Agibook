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

export function Lending() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState(2310.458);

  return (
    <View style={styles.container}>
      <View>
        <Text>How much money you want to lend?</Text>
        <CurrencyInput
          value={value}
          onChangeValue={setValue}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
          onChangeText={(formattedValue) => {
            console.log(formattedValue); // $2,310.46
          }}
        />
      </View>
      <View>
        <Text>How many parcels do you want?</Text>
        <NumericInput type="up-down" onChange={(value) => console.log(value)} />
      </View>
      <View>
        <Text>How much is the fee?</Text>
        <NumericInput type="up-down" onChange={(value) => console.log(value)} />
      </View>
      <TouchableOpacity style={styles.button}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.brand} />
        ) : (
          <Text style={styles.title}>Save</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
