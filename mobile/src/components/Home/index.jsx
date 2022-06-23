import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { getAllLendings } from "../../helpers/getAllLendings";
import Icon from "react-native-vector-icons/FontAwesome5";
import PieChart from "react-native-pie-chart";

import { styles } from "./styles";
import { theme } from "../../theme";
import { getAllClients } from "../../helpers/getAllClients";
import { ScrollView } from "react-native-gesture-handler";
import { api } from "../../libs/api";

export function Home() {
  const [lendings, setLendings] = useState([]);
  const [editedLendings, setEditedLendings] = useState([]);
  const [clients, setClients] = useState([]);
  const [lendingShow, setLendingShow] = useState(false);
  const [lendingId, setLendingId] = useState();
  const [value, setValue] = useState();
  const [fee, setFee] = useState();
  const [parcels, setParcels] = useState();

  async function updateLending() {
    await api
      .put(`/lending`, {
        id: lendingId,
        lending_value: value,
        fee,
        parcles,
      })
      .then(() => {
        getAllLendings().then((res) => {
          setLendings(res.data);
        });
      });
  }

  async function deleteLendingById(id) {
    await api.delete(`/lending/${id}`).then(() => {
      getAllLendings().then((res) => {
        setLendings(res.data);
      });
    });
  }

  useEffect(() => {
    getAllLendings().then((res) => {
      setLendings(res.data);
    });
    getAllClients().then((res) => {
      setClients(res.data);
    });
  }, []);

  useEffect(() => {
    getAllLendings().then((res) => {
      setLendings(res.data);
    });
    getAllClients().then((res) => {
      setClients(res.data);
    });
    setEditedLendings(
      lendings.map((lending) => ({
        ...lending,
        client: clients.find((client) => client.id === lending.client_id),
      }))
    );
  }, [lendingShow, lendings]);

  // console.log("1º - ", clients);
  // console.log("2º - ", lendings);
  // console.log(lendingShow);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {lendings.length > 0 && !lendingShow && (
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

            <TouchableOpacity
              onPress={() => {
                setLendingShow(true);
              }}
              style={styles.button}
            >
              <Icon
                name="comments-dollar"
                color={theme.colors.white}
                size={25}
              />
              <Text style={styles.title}>Empréstimos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Icon
                name="comment-dollar"
                color={theme.colors.white}
                size={25}
              />
              <Text style={styles.title}>Recebidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Icon
                name="money-bill-wave"
                color={theme.colors.white}
                size={25}
              />
              <Text style={styles.title}>Lucros</Text>
            </TouchableOpacity>
          </View>
        )}
        {lendingShow && (
          <View>
            <TouchableOpacity
              onPress={() => {
                setLendingShow(false);
              }}
              style={styles.back}
            >
              <Icon name="angle-left" color={theme.colors.white} size={25} />
            </TouchableOpacity>
            {editedLendings.map((lend) => {
              return (
                <View style={styles.itemList} key={lend.id}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: theme.colors.brand,
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 20,
                      height: 30,
                    }}
                  >
                    <Text
                      style={{
                        color: theme.colors.white,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Cliente
                    </Text>
                    <Text
                      style={{
                        color: theme.colors.white,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {lend.client.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      marginVertical: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        marginBottom: 2,
                      }}
                    >
                      Número
                    </Text>
                    <Text> {lend.client.number}</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        marginBottom: 2,
                        marginTop: 10,
                      }}
                    >
                      Endereço
                    </Text>
                    <Text> {lend.client.address}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        color: theme.colors.brand,
                      }}
                    >
                      {lend.lending_value} R$
                    </Text>
                    <View>
                      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Juros
                      </Text>
                      <Text>{lend.fee}%</Text>
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Parcelas
                      </Text>
                      <Text>{lend.parcels}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <TouchableOpacity onPress={() => {}} style={styles.edit}>
                      <Text style={styles.title}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        deleteLendingById(lend.id);
                      }}
                      style={styles.delete}
                    >
                      <Text style={styles.title}>Excluir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
