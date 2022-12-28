import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

import colors from "../../constants/colors";

const { width: screenWidth, height: screenHeight } =
  Dimensions.get("window").width;

const Card = ({ item }) => {
  return (
    <View style={styles.card_container}>
      <Image
        source={{
          uri: `https://robohash.org/${item.id}?size=300x300`,
        }}
        style={styles.image}
      />
      <Text style={{ textAlign: "center", paddingTop: 8 }}>{item.name}</Text>
      <Text style={{ textAlign: "center", paddingTop: 8 }}>{item.email}</Text>
      {/* {item.bio && <Text style={{ textAlign: "center" }}>{item.bio}</Text>} */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card_container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.card_bg,
    borderRadius: 4,
    marginTop: 10,
    marginRight: 10,
  },
  image: {
    resizeMode: "contain",
    height: 80,
    width: 80,
  },
});
