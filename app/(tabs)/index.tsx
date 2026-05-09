import { ScrollView, Text, View, TouchableOpacity, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

export default function HomeScreen() {
  const colors = useColors();

  const quickStartItems = [
    { icon: "book.fill", label: "Offline Testler", description: "Konulara göre ilerle", color: "success" },
    { icon: "play.fill", label: "Rastgele Test", description: "Hızlı başla", color: "blue" },
    { icon: "checkmark.circle.fill", label: "Doğru / Yanlış", description: "Kısa tekrar yap", color: "primary" },
  ];

  const libraryItems = [
    { icon: "note.text", label: "Konu Anlatımı", description: "Konu özetlerini ve içerikleri incele", color: "primary" },
    { icon: "bookmark.fill", label: "Favori Konularım", description: "Kaydettiğin konu anlatımlarına dön", color: "primary" },
    { icon: "heart.fill", label: "Favori Sorularım", description: "Kaydettiğin soruları çöz", color: "pink" },
    { icon: "info.circle.fill", label: "Yanlış Sorularım", description: "Eksiklerini tekrar gözden geçir", color: "warning" },
    { icon: "note.text", label: "Notlarım", description: "Kendi notlarını ekle ve tekrar et", color: "muted" },
    { icon: "trophy.fill", label: "Denemeler", description: "Tam kapsamlı sınavlarını çöz", color: "yellow" },
  ];

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-3 border-b border-border">
          <TouchableOpacity className="p-2 active:opacity-70">
            <IconSymbol name="menu" size={24} color={colors.foreground} />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-foreground">Ana Sayfa</Text>
          <View className="flex-row gap-2">
            <TouchableOpacity className="p-2 active:opacity-70">
              <IconSymbol name="questionmark.circle" size={24} color={colors.foreground} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 active:opacity-70 relative">
              <IconSymbol name="bell.fill" size={24} color={colors.foreground} />
              <View className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 py-4 gap-4">
          {/* Today's Goal Card */}
          <View className="bg-surface rounded-2xl p-4 border border-border">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center gap-2">
                <View className="w-10 h-10 rounded-lg bg-primary items-center justify-center">
                  <IconSymbol name="trophy.fill" size={20} color="white" />
                </View>
                <View>
                  <Text className="text-sm font-semibold text-primary">Bugünkü hedef</Text>
                  <Text className="text-xs text-muted">Başladığın, ritmi bozma.</Text>
                </View>
              </View>
              <Text className="text-lg font-bold text-warning">%20</Text>
            </View>

            <View className="mb-3">
              <Text className="text-2xl font-bold text-foreground">10/50</Text>
            </View>

            {/* Progress Bar */}
            <View className="bg-border rounded-full h-2 mb-4 overflow-hidden">
              <View className="bg-primary h-2 rounded-full" style={{ width: "20%" }} />
            </View>

            {/* Stats Row */}
            <View className="flex-row gap-4 mb-4 pb-4 border-b border-border">
              <View className="flex-row items-center gap-1">
                <IconSymbol name="checkmark.circle.fill" size={16} color={colors.success} />
                <Text className="text-xs text-muted">10 soru çözüldü</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <IconSymbol name="info.circle.fill" size={16} color={colors.warning} />
                <Text className="text-xs text-muted">Kalan 40 soru</Text>
              </View>
            </View>

            {/* Change Goal Button */}
            <TouchableOpacity className="bg-primary rounded-lg py-3 items-center active:opacity-80">
              <Text className="text-white font-semibold text-sm">Hedefi Değiştir</Text>
            </TouchableOpacity>
          </View>

          {/* Statistics Summary Card */}
          <View className="bg-success bg-opacity-10 border border-success rounded-2xl p-4">
            <View className="flex-row items-center gap-2 mb-2">
              <IconSymbol name="trophy.fill" size={20} color={colors.success} />
              <Text className="text-sm font-semibold text-success">Başarı İstatistikleri</Text>
            </View>
            <Text className="text-xs text-foreground leading-relaxed">
              38 yeni test, 523 yeni soru, 2366 yeni doğru/yanlış
            </Text>
          </View>

          {/* Quick Start Section */}
          <View>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-lg font-bold text-foreground">Hızlı Başla</Text>
              <Text className="text-xs text-muted">En sık kullanılan alanlar</Text>
            </View>
            <View className="gap-2">
              {quickStartItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  className="flex-row items-center justify-between bg-surface rounded-xl p-4 border border-border active:opacity-70"
                >
                  <View className="flex-row items-center gap-3 flex-1">
                    <View
                      className="w-12 h-12 rounded-lg items-center justify-center"
                      style={{ backgroundColor: colors[item.color as keyof typeof colors] + "20" }}
                    >
                      <IconSymbol
                        name={item.icon as any}
                        size={24}
                        color={colors[item.color as keyof typeof colors]}
                      />
                    </View>
                    <View className="flex-1">
                      <Text className="text-base font-semibold text-foreground">{item.label}</Text>
                      <Text className="text-xs text-muted">{item.description}</Text>
                    </View>
                  </View>
                  <IconSymbol name="chevron.right" size={20} color={colors.muted} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Library Section */}
          <View>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-lg font-bold text-foreground">Kütüphane</Text>
              <Text className="text-xs text-muted">İçerikler ve kayıtlı alanlar</Text>
            </View>
            <View className="gap-2">
              {libraryItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  className="flex-row items-center justify-between bg-surface rounded-xl p-4 border border-border active:opacity-70"
                >
                  <View className="flex-row items-center gap-3 flex-1">
                    <View
                      className="w-12 h-12 rounded-lg items-center justify-center"
                      style={{ backgroundColor: colors[item.color as keyof typeof colors] + "20" }}
                    >
                      <IconSymbol
                        name={item.icon as any}
                        size={24}
                        color={colors[item.color as keyof typeof colors]}
                      />
                    </View>
                    <View className="flex-1">
                      <Text className="text-base font-semibold text-foreground">{item.label}</Text>
                      <Text className="text-xs text-muted">{item.description}</Text>
                    </View>
                  </View>
                  <IconSymbol name="chevron.right" size={20} color={colors.muted} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Spacing for tab bar */}
          <View className="h-4" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
