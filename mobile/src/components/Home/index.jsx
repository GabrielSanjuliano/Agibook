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
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { api } from "../../libs/api";
import NumericInput from "react-native-numeric-input";
import CurrencyInput from "react-native-currency-input";

export function Home() {
  const [lendings, setLendings] = useState([]);
  const [editedLendings, setEditedLendings] = useState([]);
  const [clients, setClients] = useState([]);
  const [lendingShow, setLendingShow] = useState(false);
  const [lendingId, setLendingId] = useState();
  const [value, setValue] = useState();
  const [fee, setFee] = useState();
  const [parcels, setParcels] = useState();
  const [updateShow, setUpdateShow] = useState(false);
  const [clientName, setClientName] = useState();
  const [clientId, setClientId] = useState();

  async function updateLending() {
    await api
      .put(`/lending`, {
        id: lendingId,
        client_id: clientId,
        lending_value: value,
        fee,
        parcels,
      })
      .then(() => {
        getAllLendings().then((res) => {
          setLendings(res.data);
        });
        setUpdateShow(false);
        setLendingShow(true);
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

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        {lendings.length > 0 && !lendingShow && !updateShow && (
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
        {updateShow && !lendingShow && (
          <View>
            <TouchableOpacity
              onPress={() => {
                setUpdateShow(false);
                setLendingShow(true);
              }}
              style={styles.back}
            >
              <Icon name="angle-left" color={theme.colors.white} size={25} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: theme.colors.brand,
              }}
            >
              {clientName}
            </Text>
            <View style={{ marginVertical: 15 }}>
              <Text style={styles.label}>
                Empréstimo{"  "}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: theme.colors.brand,
                  }}
                >
                  {value}R$
                </Text>
              </Text>
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
            <View style={{ marginVertical: 15 }}>
              <Text style={styles.label}>
                Parcelas{"  "}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: theme.colors.brand,
                  }}
                >
                  {parcels}
                </Text>
              </Text>
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
            <View style={{ marginVertical: 15 }}>
              <Text style={styles.label}>
                Juros{"  "}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: theme.colors.brand,
                  }}
                >
                  {fee}%
                </Text>
              </Text>
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
            <TouchableOpacity onPress={updateLending} style={styles.button}>
              <Text style={styles.title}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
        {lendingShow && !updateShow && (
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
                    <TouchableOpacity
                      onPress={() => {
                        setLendingId(lend.id);
                        setClientName(lend.client.name);
                        setClientId(lend.client.id);
                        setValue(lend.lending_value);
                        setFee(lend.fee);
                        setParcels(lend.parcels);
                        setUpdateShow(true);
                        setLendingShow(false);
                      }}
                      style={styles.edit}
                    >
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
