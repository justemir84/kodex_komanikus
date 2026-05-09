import { ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";

export default function StatisticsScreen() {
  return (
    <ScreenContainer className="p-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-4">
          {/* Header */}
          <View className="mb-4">
            <Text className="text-2xl font-bold text-foreground">İstatistikler</Text>
            <Text className="text-sm text-muted mt-1">Başarı oranınızı ve ilerlemenizi görün</Text>
          </View>

          {/* Stats Overview Cards */}
          <View className="gap-3">
            {/* Total Tests Card */}
            <View className="bg-surface rounded-xl p-4 border border-border">
              <Text className="text-sm text-muted mb-1">Toplam Testler</Text>
              <Text className="text-3xl font-bold text-primary">38</Text>
            </View>

            {/* Total Questions Card */}
            <View className="bg-surface rounded-xl p-4 border border-border">
              <Text className="text-sm text-muted mb-1">Toplam Sorular</Text>
              <Text className="text-3xl font-bold text-blue">523</Text>
            </View>

            {/* Correct Answers Card */}
            <View className="bg-surface rounded-xl p-4 border border-border">
              <Text className="text-sm text-muted mb-1">Doğru Cevaplar</Text>
              <Text className="text-3xl font-bold text-success">2366</Text>
            </View>

            {/* Success Rate Card */}
            <View className="bg-surface rounded-xl p-4 border border-border">
              <Text className="text-sm text-muted mb-1">Başarı Oranı</Text>
              <Text className="text-3xl font-bold text-warning">78%</Text>
            </View>
          </View>

          {/* Performance by Subject */}
          <View className="mt-6">
            <Text className="text-lg font-semibold text-foreground mb-3">Konulara Göre Başarı</Text>
            <View className="gap-2">
              {["Matematik", "Türkçe", "İngilizce", "Fen Bilgisi", "Sosyal Bilgiler"].map((subject, index) => (
                <View key={index} className="bg-surface rounded-lg p-3 border border-border">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-sm font-medium text-foreground">{subject}</Text>
                    <Text className="text-sm font-semibold text-primary">{75 + Math.random() * 20}%</Text>
                  </View>
                  <View className="bg-border rounded-full h-2 mt-2">
                    <View
                      className="bg-primary rounded-full h-2"
                      style={{ width: `${75 + Math.random() * 20}%` }}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Recent Activity */}
          <View className="mt-6 mb-6">
            <Text className="text-lg font-semibold text-foreground mb-3">Son Aktiviteler</Text>
            <View className="gap-2">
              {["Matematik Testi Tamamlandı", "5 Soru Çözüldü", "Türkçe Konusu Tamamlandı"].map((activity, index) => (
                <View key={index} className="bg-surface rounded-lg p-3 border border-border flex-row items-center">
                  <View className="w-2 h-2 rounded-full bg-primary mr-3" />
                  <Text className="text-sm text-foreground flex-1">{activity}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
