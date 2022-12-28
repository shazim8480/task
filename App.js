import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

// components //
import Card from "./components/Card";

// api
// import GET_USERS from "./api";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const url = `http://52.77.211.222:3000/users`;
      const response = await axios.get(url);
      setUsers(response.data);
    };
    fetchUser();
  }, []);
  console.log(users);

  // render card component

  const renderItem = ({ item }) => <Card item={item} />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
