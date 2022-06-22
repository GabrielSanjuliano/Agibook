import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAllLendings } from "../../helpers/getAllLendings";
import Icon from "react-native-vector-icons/FontAwesome5";
import PieChart from "react-native-pie-chart";

import { styles } from "./styles";
import { theme } from "../../theme";

export function Home() {
  const [lendings, setLendings] = useState([]);

  function showLendings() {}

  useEffect(() => {
    getAllLendings().then((res) => {
      setLendings(res.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {lendings.length > 0 ? (
        <View>
          <Text
            style={{
              color: theme.colors.brand,
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Organize seus empréstimos de forma simples e rapida!
          </Text>
          <Image
            style={{
              height: 200,
              width: 300,
              borderRadius: 15,
              marginVertical: 25,
            }}
            source={require("../../img/money.jpg")}
          />

          <TouchableOpacity onPress={showLendings} style={styles.button}>
            <Icon name="comments-dollar" color={theme.colors.white} size={25} />
            <Text style={styles.title}>Empréstimos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="comment-dollar" color={theme.colors.white} size={25} />
            <Text style={styles.title}>Recebidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon name="money-bill-wave" color={theme.colors.white} size={25} />
            <Text style={styles.title}>Lucros</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // lendings.map((lend) => {
        //   return (
        //     <View key={lend.id}>
        //       <Text>{lend.id}</Text>
        //     </View>
        //   );
        // })
        <View style={styles.noContent}>
          <Text style={styles.insideFont}>Nenhum empréstimo encontrado...</Text>
        </View>
      )}
    </View>
  );
}
