import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function ModalTambahFavorit() {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        gap: 16,
      }}
    >
      <Text>
        Tambahkan kota ini ke daftar favorit?
      </Text>

      <Button
        title="Simpan"
        onPress={() => router.back()}
      />

      <Button
        title="Batal"
        onPress={() => router.back()}
      />
    </View>
  );
}