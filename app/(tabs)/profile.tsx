import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import { useThemeContext } from "@/lib/theme-provider";

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function SectionHeader({
  icon,
  iconBg,
  title,
  subtitle,
}: {
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
}) {
  const colors = useColors();
  return (
    <View className="flex-row items-center gap-3 pb-3 mb-1 border-b border-border">
      <View
        className="w-10 h-10 rounded-xl items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <IconSymbol name={icon as any} size={20} color="white" />
      </View>
      <View className="flex-1">
        <Text className="text-base font-bold text-foreground">{title}</Text>
        <Text className="text-xs text-muted">{subtitle}</Text>
      </View>
    </View>
  );
}

function ToggleRow({
  icon,
  iconBg,
  title,
  subtitle,
  value,
  onValueChange,
  warning,
  bottomBorder = true,
}: {
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
  warning?: string;
  bottomBorder?: boolean;
}) {
  const colors = useColors();
  return (
    <View>
      <View
        className={`flex-row items-center justify-between py-3 ${bottomBorder ? "border-b border-border" : ""}`}
      >
        <View className="flex-row items-center gap-3 flex-1 mr-3">
          <View
            className="w-9 h-9 rounded-xl items-center justify-center"
            style={{ backgroundColor: iconBg + "28" }}
          >
            <IconSymbol name={icon as any} size={18} color={iconBg} />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-foreground">{title}</Text>
            <Text className="text-xs text-muted leading-tight">{subtitle}</Text>
            {warning ? (
              <Text className="text-xs mt-0.5" style={{ color: colors.orange }}>
                {warning}
              </Text>
            ) : null}
          </View>
        </View>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor="#FFFFFF"
        />
      </View>
    </View>
  );
}

function DropdownRow({
  icon,
  iconBg,
  title,
  subtitle,
  value,
  bottomBorder = true,
}: {
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
  value: string;
  bottomBorder?: boolean;
}) {
  const colors = useColors();
  return (
    <View
      className={`flex-row items-center justify-between py-3 ${bottomBorder ? "border-b border-border" : ""}`}
    >
      <View className="flex-row items-center gap-3 flex-1 mr-3">
        <View
          className="w-9 h-9 rounded-xl items-center justify-center"
          style={{ backgroundColor: iconBg + "28" }}
        >
          <IconSymbol name={icon as any} size={18} color={iconBg} />
        </View>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-foreground">{title}</Text>
          <Text className="text-xs text-muted">{subtitle}</Text>
        </View>
      </View>
      <View
        className="flex-row items-center gap-1 px-3 py-1.5 rounded-lg"
        style={{ backgroundColor: colors.border }}
      >
        <Text className="text-sm font-semibold text-foreground">{value}</Text>
        <Text className="text-xs text-muted">▾</Text>
      </View>
    </View>
  );
}

function ArrowRow({
  icon,
  iconBg,
  title,
  subtitle,
  note,
  bottomBorder = true,
}: {
  icon: string;
  iconBg: string;
  title: string;
  subtitle?: string;
  note?: string;
  bottomBorder?: boolean;
}) {
  const colors = useColors();
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between py-3 active:opacity-70 ${bottomBorder ? "border-b border-border" : ""}`}
    >
      <View className="flex-row items-center gap-3 flex-1 mr-3">
        <View
          className="w-9 h-9 rounded-xl items-center justify-center"
          style={{ backgroundColor: iconBg + "28" }}
        >
          <IconSymbol name={icon as any} size={18} color={iconBg} />
        </View>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-foreground">{title}</Text>
          {subtitle ? <Text className="text-xs text-muted leading-tight">{subtitle}</Text> : null}
          {note ? (
            <Text className="text-xs mt-0.5" style={{ color: colors.primary }}>
              {note}
            </Text>
          ) : null}
        </View>
      </View>
      <IconSymbol name="chevron.right" size={18} color={colors.muted} />
    </TouchableOpacity>
  );
}

// ─────────────────────────────────────────────
// Main Screen
// ─────────────────────────────────────────────

export default function ProfileScreen() {
  const colors = useColors();
  const { colorScheme, setColorScheme } = useThemeContext();
  const isDark = colorScheme === "dark";

  // Test Deneyimi
  const [suruluTest, setSuruluTest] = useState(true);
  const [soruHaritasi, setSoruHaritasi] = useState(false);
  const [konfetiEfekti, setKonfetiEfekti] = useState(true);
  const [yanlisTitresim, setYanlisTitresim] = useState(true);

  // Kişiselleştirme
  const [konuSoruKaristir, setKonuSoruKaristir] = useState(true);
  const [konuSikKaristir, setKonuSikKaristir] = useState(true);
  const [denemeSoruKaristir, setDenemeSoruKaristir] = useState(false);
  const [denemeSikKaristir, setDenemeSikKaristir] = useState(false);
  const [cevapSesleri, setCevapSesleri] = useState(true);

  // Seslendirme
  const [seslendirmeAcik, setSeslendirmeAcik] = useState(true);

  return (
    <ScreenContainer className="p-0">
      {/* ── Header ── */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-border">
        <TouchableOpacity className="p-2 active:opacity-70">
          <IconSymbol name="menu" size={24} color={colors.foreground} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Profil</Text>
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

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <View className="px-4 py-4 gap-4">

          {/* ── AYARLAR ── */}
          <View className="bg-surface rounded-2xl px-4 pt-4 pb-2 border border-border">
            <SectionHeader
              icon="wrench.fill"
              iconBg={colors.primary}
              title="Ayarlar"
              subtitle="Uygulamanı kendine göre düzenle"
            />

            {/* Görünüm */}
            <ArrowRow
              icon="eye.fill"
              iconBg={colors.primary}
              title="Görünüm"
              subtitle="Tema ve yazı seçenekleri"
            />

            {/* Gece Modu – Dark mode toggle */}
            <View className="flex-row items-center justify-between py-3 border-b border-border">
              <View className="flex-row items-center gap-3 flex-1 mr-3">
                <View
                  className="w-9 h-9 rounded-xl items-center justify-center"
                  style={{ backgroundColor: "#1E293B28" }}
                >
                  <IconSymbol
                    name={isDark ? "moon.fill" : "sun.max.fill"}
                    size={18}
                    color={isDark ? "#818CF8" : "#F59E0B"}
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-semibold text-foreground">Gece Modu</Text>
                  <Text className="text-xs text-muted">Karanlık temayı aç veya kapat</Text>
                </View>
              </View>
              <Switch
                value={isDark}
                onValueChange={(v) => setColorScheme(v ? "dark" : "light")}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor="#FFFFFF"
              />
            </View>

            {/* Yazı Boyutu */}
            <View className="flex-row items-center justify-between py-3">
              <View className="flex-row items-center gap-3 flex-1 mr-3">
                <View
                  className="w-9 h-9 rounded-xl items-center justify-center"
                  style={{ backgroundColor: colors.blue + "28" }}
                >
                  <IconSymbol name="text.alignleft" size={18} color={colors.blue} />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-semibold text-foreground">Yazı Boyutu</Text>
                  <Text className="text-xs text-muted">Okuma görünümünü ayarla</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-xs text-muted font-semibold">A</Text>
                <View
                  className="px-2 py-1 rounded-md"
                  style={{ backgroundColor: colors.primary + "20" }}
                >
                  <Text className="text-xs font-bold" style={{ color: colors.primary }}>
                    Normal
                  </Text>
                </View>
                <Text className="text-base text-muted font-bold">A</Text>
              </View>
            </View>
          </View>

          {/* ── TEST DENEYİMİ ── */}
          <View className="bg-surface rounded-2xl px-4 pt-4 pb-2 border border-border">
            <SectionHeader
              icon="bolt.fill"
              iconBg={colors.warning}
              title="Test Deneyimi"
              subtitle="Sınav sırasında kullanılacak ayarlar"
            />
            <ToggleRow
              icon="timer.fill"
              iconBg={colors.warning}
              title="Süreli Test"
              subtitle="Her soru için süre uygula"
              value={suruluTest}
              onValueChange={setSuruluTest}
            />
            <DropdownRow
              icon="clock.fill"
              iconBg={colors.blue}
              title="Soru Süresi"
              subtitle="Her soru için zaman limiti"
              value="30 sn"
            />
            <ToggleRow
              icon="map.fill"
              iconBg={colors.success}
              title="Soru Haritası"
              subtitle="Alt navigasyonu göster"
              value={soruHaritasi}
              onValueChange={setSoruHaritasi}
            />
            <ToggleRow
              icon="party.popper.fill"
              iconBg={colors.pink}
              title="Konfeti Efekti"
              subtitle="Başarılı anlarda kutlama göster"
              value={konfetiEfekti}
              onValueChange={setKonfetiEfekti}
            />
            <ToggleRow
              icon="vibration.fill"
              iconBg={colors.orange}
              title="Yanlışta Titreşim"
              subtitle="Yanlış cevapta titreşim ver"
              value={yanlisTitresim}
              onValueChange={setYanlisTitresim}
              bottomBorder={false}
            />
          </View>

          {/* ── KİŞİSELLEŞTİRME ── */}
          <View className="bg-surface rounded-2xl px-4 pt-4 pb-2 border border-border">
            <SectionHeader
              icon="shuffle.fill"
              iconBg={colors.primary}
              title="Kişiselleştirme"
              subtitle="Soru sırası, şık düzeni ve günlük hedefler"
            />
            <ToggleRow
              icon="shuffle.fill"
              iconBg={colors.primary}
              title="Konu Testlerinde Soruları Karıştır"
              subtitle="Konu testlerinde soru sırası rastgele olsun"
              value={konuSoruKaristir}
              onValueChange={setKonuSoruKaristir}
            />
            <ToggleRow
              icon="arrow.triangle.2.circlepath.fill"
              iconBg={colors.blue}
              title="Konu Testlerinde Şıkları Karıştır"
              subtitle="Konu testlerinde cevap seçeneklerini rastgele sırala"
              value={konuSikKaristir}
              onValueChange={setKonuSikKaristir}
            />
            <ToggleRow
              icon="shuffle.fill"
              iconBg={colors.muted}
              title="Denemelerde Soruları Karıştır"
              subtitle="Deneme çökerken soru sırası rastgele olsun"
              value={denemeSoruKaristir}
              onValueChange={setDenemeSoruKaristir}
              warning="Gerçek sınav deneyimi için kapalı önerilir"
            />
            <ToggleRow
              icon="arrow.triangle.2.circlepath.fill"
              iconBg={colors.muted}
              title="Denemelerde Şıkları Karıştır"
              subtitle="Denemelerde cevap seçeneklerini rastgele sırala"
              value={denemeSikKaristir}
              onValueChange={setDenemeSikKaristir}
              warning="Gerçek sınav deneyimi için kapalı önerilir"
            />
            <ToggleRow
              icon="speaker.fill"
              iconBg={colors.success}
              title="Cevap Sesleri"
              subtitle="Doğru ve yanlış cevaplarda kısa ses çal"
              value={cevapSesleri}
              onValueChange={setCevapSesleri}
            />
            <DropdownRow
              icon="trophy.fill"
              iconBg={colors.yellow}
              title="Günlük Hedef"
              subtitle="Her gün çözmek istediğin soru sayısı"
              value="50 Soru"
              bottomBorder={false}
            />

            {/* Seslendirme sub-section */}
            <View className="mt-4 mb-2">
              <View
                className="h-px w-full mb-4"
                style={{ backgroundColor: colors.border }}
              />
              <Text className="text-sm font-bold text-foreground">Seslendirme</Text>
              <Text className="text-xs text-muted">Konu anlatımı ve test sesini kullan</Text>
            </View>
            <ToggleRow
              icon="speaker.wave.3.fill"
              iconBg={colors.primary}
              title="Seslendirme Açık"
              subtitle="Konu anlatımı ve test sesini kullan"
              value={seslendirmeAcik}
              onValueChange={setSeslendirmeAcik}
            />
            <DropdownRow
              icon="globe"
              iconBg={colors.primary}
              title="Ses Seçimi"
              subtitle="Cihazında yüklü olan seslerden birini seç"
              value="Türkçe Türkiy..."
            />
            <DropdownRow
              icon="speedometer"
              iconBg={colors.orange}
              title="Okuma Hızı"
              subtitle="Sesli okumanın hızını ayarla"
              value="Normal"
              bottomBorder={false}
            />

            {/* Audio test buttons */}
            <TouchableOpacity
              className="flex-row items-center justify-center gap-2 rounded-xl py-3 mt-4 active:opacity-80"
              style={{ backgroundColor: colors.primary }}
            >
              <IconSymbol name="play.fill" size={16} color="#FFFFFF" />
              <Text className="text-white font-bold text-sm tracking-wide">SESİ TEST ET</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center py-3 active:opacity-60">
              <Text className="text-sm font-semibold" style={{ color: colors.muted }}>
                DURDUR
              </Text>
            </TouchableOpacity>
          </View>

          {/* ── İÇERİK GÜNCELLEME ── */}
          <View className="bg-surface rounded-2xl px-4 pt-4 pb-2 border border-border">
            <SectionHeader
              icon="cloud.fill"
              iconBg={colors.primary}
              title="İçerik Güncelleme"
              subtitle="Yeni test, konu, mülakat ve içerikleri kontrol et"
            />
            <ArrowRow
              icon="arrow.down.circle.fill"
              iconBg={colors.primary}
              title="Yeni İçerikleri Kontrol Et"
              subtitle="Yeni eklenen test, soru, konu, mülakat ve içerikleri kontrol eder"
              note="Son kontrol: 06.05.2026 20:52"
            />
            <ArrowRow
              icon="arrow.clockwise"
              iconBg={colors.orange}
              title="Tüm İçerikleri Yeniden Yükle"
              subtitle="Eğer içerikler varsa tüm verileri baştan yükler"
              note="Son kontrol: 05.05.2026 22:52"
              bottomBorder={false}
            />
          </View>

          <View className="h-4" />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
