import { View, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

import WeatherCard from "../../../components/WeatherCard";

export default function HalamanDetail() {
  const { kota } = useLocalSearchParams<{ kota: string }>();

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        gap: 16,
      }}
    >
      <WeatherCard
        kota={kota}
        suhu={29}
        tingkatAQI="BAIK"
      />

      <Button
        title="Tambah ke Favorit"
        onPress={() =>
          router.push({
            pathname: "/tambah-favorit",
            params: { kota },
          })
        }
      />
    </View>
  );
}