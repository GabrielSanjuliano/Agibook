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
import { api } from "../../libs/api";
import { SafeAreaView } from "react-native-web";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { getAllClients } from "../../helpers/getAllClients";

export function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(false);
  const [number, setNumber] = useState(false);
  const [document, setDocument] = useState(false);
  const [address, setAddress] = useState(false);
  const [list, setList] = useState(false);
  const [form, setForm] = useState(true);
  const [clients, setClients] = useState([]);
  const [update, setUpdate] = useState(false);
  const [clientId, setClientId] = useState();

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
        getAllClients().then((res) => {
          setClients(res.data);
        });
        setList(true);
        setUpdate(false);
        setForm(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  async function updateClient() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await api
      .put(`/client`, {
        id: clientId,
        name,
        number,
        address,
        document,
      })
      .then((res) => {
        getAllClients().then((res) => {
          setClients(res.data);
        });
        setList(true);
        setUpdate(false);
        setForm(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  async function deleteClientById(id) {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await api
      .delete(`/client/${id}`)
      .then((res) => {
        getAllClients().then((res) => {
          setClients(res.data);
        });
        setList(true);
        setUpdate(false);
        setForm(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getAllClients().then((res) => {
      setClients(res.data);
    });
  }, [list]);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            disabled={isLoading}
            onPress={() => {
              setList(false);
              setForm(true);
            }}
            style={styles.tabButton}
          >
            <Text style={styles.title}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={isLoading}
            onPress={() => {
              setList(true);
              setForm(false);
            }}
            style={styles.tabButton}
          >
            <Text style={styles.title}>Lista</Text>
          </TouchableOpacity>
        </View>
        {update && !list && !form && (
          <View>
            <Text style={styles.user}>Editar cliente</Text>
            <View>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                value={name}
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
                value={number}
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
                value={document}
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
                value={address}
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
                onPress={updateClient}
                style={styles.button}
              >
                {isLoading ? (
                  <ActivityIndicator color={theme.colors.brand} />
                ) : (
                  <Text style={styles.title}>Editar</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
        {list && !form && (
          <View>
            <Text style={styles.user}>Lista de cliente</Text>
            {clients.map((client) => {
              return (
                <View style={styles.itemList} key={client.id}>
                  <View style={styles.itemListPart}>
                    <Text style={styles.itemListName}>Nome:</Text>
                    <Text>{client.name}</Text>
                  </View>
                  <View style={styles.itemListPart}>
                    <Text style={styles.itemListName}>Número:</Text>
                    <Text>{client.number}</Text>
                  </View>
                  <View style={styles.itemListPart}>
                    <Text style={styles.itemListName}>Endereço:</Text>
                    <Text>{client.address}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity
                      disabled={isLoading}
                      onPress={() => {
                        setClientId(client.id);
                        setName(client.name);
                        setNumber(client.number);
                        setDocument(client.document);
                        setAddress(client.address);
                        setList(false);
                        setForm(false);
                        setUpdate(true);
                      }}
                      style={styles.edit}
                    >
                      <Text style={styles.title}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={isLoading}
                      onPress={() => {
                        deleteClientById(client.id);
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
        {form && !list && (
          <View>
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
        )}
      </View>
    </ScrollView>
  );
}
