import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

import WeatherCard from "../../../components/WeatherCard";
import SearchBox from "../../../components/SearchBox";
import RiwayatList from "../../../components/RiwayatList";

export default function HalamanUtama() {
  const [kotaAktif, setKotaAktif] = useState("Pekalongan");
  const [riwayat, setRiwayat] = useState<string[]>([
    "Pekalongan",
  ]);

  useEffect(() => {
    console.log(
      "Kota aktif berubah menjadi:",
      kotaAktif
    );
  }, [kotaAktif]);

  function handleCari(kota: string) {
    setKotaAktif(kota);

    if (!riwayat.includes(kota)) {
      setRiwayat([...riwayat, kota]);
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
        gap: 16,
      }}
    >
      <SearchBox onCari={handleCari} />

      <WeatherCard
        kota={kotaAktif}
        suhu={29}
        tingkatAQI="BAIK"
      />

      <RiwayatList daftarKota={riwayat} />
    </SafeAreaView>
  );
}