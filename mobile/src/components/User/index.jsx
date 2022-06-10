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

export function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(false);
  const [number, setNumber] = useState(false);
  const [document, setDocument] = useState(false);
  const [adress, setAdress] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput
          onChangeText={setName}
          autoCorrect={false}
          style={styles.input}
          placeholder="Type the client name"
          placeholderTextColor={theme.colors.dark}
        />
      </View>
      <View>
        <Text style={styles.label}>Number</Text>
        <TextInput
          onChangeText={setNumber}
          autoCorrect={false}
          style={styles.input}
          placeholder="Type the client number"
          placeholderTextColor={theme.colors.dark}
        />
      </View>
      <View>
        <Text style={styles.label}>Document</Text>
        <TextInput
          onChangeText={setDocument}
          autoCorrect={false}
          style={styles.input}
          placeholder="Type the client document"
          placeholderTextColor={theme.colors.dark}
        />
      </View>
      <View>
        <Text style={styles.label}>Adress</Text>
        <TextInput
          onChangeText={setAdress}
          autoCorrect={false}
          style={styles.input}
          placeholder="Type the client adress"
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
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          text="Alive"

          // onPress={(isChecked: boolean) => {}}
        />
        <TouchableOpacity style={styles.button}>
          {isLoading ? (
            <ActivityIndicator color={theme.colors.brand} />
          ) : (
            <Text style={styles.title}>Save</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
