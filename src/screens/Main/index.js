import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { UserInformation } from "../../components/UserInformation";
import { CardConsultation } from "../../components/CardConsultation";
import { BackgroundScreen } from "../../components/BackgroundScreen";
import soniaFoto from "../../assets/sonia.png";
import patients from "./patients";
import styles from "./styles";
import { CardConsultationShimmerEffect } from "../../components/CardConsultationShimmerEffect";

export default function Main({ navigation }) {
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(true)
    }, 3000)
  }, [])

  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <UserInformation
          name="Olá Sônia"
          details="Mais 4 consultas hoje"
          photo={soniaFoto}
        />

        <Text style={styles.text}>Hoje</Text>
        {time ?
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
          :
          <>
            <CardConsultationShimmerEffect />
            <CardConsultationShimmerEffect />
            <CardConsultationShimmerEffect />
          </>
        }
      </View>
    </BackgroundScreen>
  );
}