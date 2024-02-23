import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { UserInformation } from "../../components/UserInformation";
import { CardConsultation } from "../../components/CardConsultation";
import { BackgroundScreen } from "../../components/BackgroundScreen";
import soniaFoto from "../../assets/sonia.png";
import patients from "./patients";
import styles from "./styles";

export default function Main({ navigation }) {

  return (
    <BackgroundScreen>
    <View style={styles.container}>
      <UserInformation 
        name="Olá Sônia"
        details="Mais 4 consultas hoje"
        photo={soniaFoto}
      />

      <Text style={styles.text}>Hoje</Text>

      <FlatList
        data={patients}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate("Detalhes", item)}>
          <CardConsultation {...item} />
        </TouchableOpacity>
        }
        showsVerticalScrollIndicator={false}
      />
    </View> 
    </BackgroundScreen>
  );
}