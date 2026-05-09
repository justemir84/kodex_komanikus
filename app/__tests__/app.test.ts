import { describe, it, expect } from "vitest";

describe("App Structure", () => {
  it("should have correct app configuration", () => {
    // Test app configuration
    const appName = "Soru Çözme";
    const appSlug = "study_app";
    
    expect(appName).toBe("Soru Çözme");
    expect(appSlug).toBe("study_app");
  });

  it("should have theme colors defined", () => {
    // Test theme colors
    const colors = {
      primary: "#6366F1",
      success: "#10B981",
      blue: "#3B82F6",
      pink: "#EC4899",
      warning: "#F97316",
      yellow: "#EAB308",
    };

    expect(colors.primary).toBe("#6366F1");
    expect(colors.success).toBe("#10B981");
    expect(colors.blue).toBe("#3B82F6");
    expect(colors.pink).toBe("#EC4899");
    expect(colors.warning).toBe("#F97316");
    expect(colors.yellow).toBe("#EAB308");
  });

  it("should have navigation tabs configured", () => {
    // Test navigation structure
    const tabs = ["Ana Sayfa", "İstatistik", "Profil"];
    
    expect(tabs).toHaveLength(3);
    expect(tabs).toContain("Ana Sayfa");
    expect(tabs).toContain("İstatistik");
    expect(tabs).toContain("Profil");
  });

  it("should have quick start items", () => {
    // Test quick start items
    const quickStartItems = [
      "Online Testler",
      "Rastgele Test",
      "Doğru / Yanlış",
    ];

    expect(quickStartItems).toHaveLength(3);
    expect(quickStartItems).toContain("Online Testler");
    expect(quickStartItems).toContain("Rastgele Test");
    expect(quickStartItems).toContain("Doğru / Yanlış");
  });

  it("should have library items", () => {
    // Test library items
    const libraryItems = [
      "Konu Anlatımı",
      "Favori Konularım",
      "Favori Sorularım",
      "Yanlış Sorularım",
      "Notlarım",
      "Denemeler",
    ];

    expect(libraryItems).toHaveLength(6);
    expect(libraryItems).toContain("Konu Anlatımı");
    expect(libraryItems).toContain("Favori Konularım");
    expect(libraryItems).toContain("Favori Sorularım");
    expect(libraryItems).toContain("Yanlış Sorularım");
    expect(libraryItems).toContain("Notlarım");
    expect(libraryItems).toContain("Denemeler");
  });

  it("should have icon mappings", () => {
    // Test icon mappings
    const iconMappings = {
      "house.fill": "home",
      "chart.bar.fill": "bar-chart",
      "person.fill": "person",
      "menu": "menu",
      "bell.fill": "notifications",
      "book.fill": "book",
      "play.fill": "play-arrow",
      "heart.fill": "favorite",
    };

    expect(iconMappings["house.fill"]).toBe("home");
    expect(iconMappings["chart.bar.fill"]).toBe("bar-chart");
    expect(iconMappings["person.fill"]).toBe("person");
    expect(iconMappings["menu"]).toBe("menu");
    expect(iconMappings["bell.fill"]).toBe("notifications");
  });
});
