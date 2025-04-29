import type { Category } from "../definitions";

export const categories: Category[] = [
  {
    id: "televisions",
    name: "טלוויזיות",
    description:
      "מגוון טלוויזיות באיכויות שונות: OLED, QLED, LED ו-4K. מסכים בגדלים שונים ומותגים מובילים בשוק.",
    specialties: [
      {
        id: "screen_size",
        name: "גודל מסך",
        values: [
          "32 אינץ'",
          "43 אינץ'",
          "50 אינץ'",
          "55 אינץ'",
          "65 אינץ'",
          "75 אינץ'",
          "85 אינץ'",
        ],
      },
      {
        id: "resolution",
        name: "רזולוציה",
        values: ["HD", "Full HD", "4K Ultra HD", "8K"],
      },
      {
        id: "panel_type",
        name: "סוג פאנל",
        values: ["LED", "QLED", "OLED", "Mini-LED", "Micro-LED"],
      },
      {
        id: "hdmi_ports",
        name: "יציאות HDMI",
        values: ["2 יציאות", "3 יציאות", "4 יציאות", "5+ יציאות"],
      },
      {
        id: "smart_features",
        name: "יכולות טלוויזיה חכמה",
        values: ["Android TV", "Tizen", "webOS", "Roku", "אין"],
      },
      {
        id: "bluetooth",
        name: "בלוטות'",
        values: ["יש", "אין"],
      },
    ],
  },
  {
    id: "computers",
    name: "מחשבים",
    description:
      "מחשבים נייחים, מחשבים ניידים ומסכי מחשב. פתרונות למשרד, גיימינג ושימוש ביתי ממגוון מותגים מובילים.",
    specialties: [
      {
        id: "processor",
        name: "מעבד",
        values: [
          "Intel Core i3",
          "Intel Core i5",
          "Intel Core i7",
          "Intel Core i9",
          "AMD Ryzen 5",
          "AMD Ryzen 7",
          "AMD Ryzen 9",
          "Apple M1",
          "Apple M2",
          "Apple M3",
        ],
      },
      {
        id: "ram",
        name: "זיכרון",
        values: ["4GB", "8GB", "16GB", "32GB", "64GB"],
      },
      {
        id: "storage",
        name: "אחסון",
        values: [
          "128GB SSD",
          "256GB SSD",
          "512GB SSD",
          "1TB SSD",
          "2TB SSD",
          "כונן HDD",
        ],
      },
      {
        id: "graphics_card",
        name: "כרטיס מסך",
        values: [
          "NVIDIA GeForce RTX",
          "AMD Radeon",
          "Intel Iris",
          "Apple GPU",
          "משולב",
        ],
      },
      {
        id: "operating_system",
        name: "מערכת הפעלה",
        values: ["Windows 11", "Windows 10", "macOS", "Linux", "Chrome OS"],
      },
      {
        id: "connectivity_ports",
        name: "יציאות חיבור",
        values: [
          "USB-C",
          "USB 3.0",
          "HDMI",
          "DisplayPort",
          "Thunderbolt",
          "חריץ כרטיס SD",
        ],
      },
    ],
  },
  {
    id: "smartphones",
    name: "טלפונים חכמים",
    description:
      "סמארטפונים מתקדמים מכל המותגים המובילים. מכשירים חדשניים עם מצלמות איכותיות, סוללות חזקות ומעבדים מתקדמים.",
    specialties: [
      {
        id: "screen_size_phone",
        name: "גודל מסך",
        values: [
          "5.5 אינץ'",
          "6.1 אינץ'",
          "6.5 אינץ'",
          "6.7 אינץ'",
          "6.9 אינץ'",
        ],
      },
      {
        id: "camera",
        name: "מצלמה",
        values: [
          "12MP",
          "48MP",
          "64MP",
          "108MP",
          "200MP",
          "מערך מצלמות משולש",
          "מערך מצלמות כפול",
        ],
      },
      {
        id: "battery_capacity",
        name: "קיבולת סוללה",
        values: ["3000mAh", "4000mAh", "5000mAh", "6000mAh"],
      },
      {
        id: "storage_phone",
        name: "אחסון",
        values: ["64GB", "128GB", "256GB", "512GB", "1TB"],
      },
      {
        id: "processor_phone",
        name: "מעבד",
        values: [
          "Snapdragon",
          "MediaTek",
          "Apple A-series",
          "Exynos",
          "Google Tensor",
        ],
      },
      {
        id: "5g_support",
        name: "תמיכה ב-5G",
        values: ["כן", "לא"],
      },
    ],
  },
  {
    id: "audio",
    name: "מוצרי אודיו",
    description:
      "מערכות שמע, רמקולים, אוזניות ומגברים. מגוון פתרונות סאונד באיכות גבוהה לחוויית האזנה מושלמת.",
    specialties: [
      {
        id: "power_output",
        name: "הספק",
        values: ["10W", "20W", "50W", "100W", "200W+"],
      },
      {
        id: "connectivity_audio",
        name: "קישוריות",
        values: ["Bluetooth", "WiFi", "AUX", "USB", "HDMI", "אלחוטי", "חוטי"],
      },
      {
        id: "battery_life_audio",
        name: "חיי סוללה",
        values: [
          "עד 5 שעות",
          "עד 10 שעות",
          "עד 20 שעות",
          "עד 30 שעות",
          "חיבור לחשמל בלבד",
        ],
      },
      {
        id: "sound_quality",
        name: "איכות סאונד",
        values: ["Hi-Fi", "סטריאו", "סראונד", "Dolby Atmos", "DTS"],
      },
      {
        id: "noise_cancellation",
        name: "ביטול רעשים",
        values: ["אקטיבי (ANC)", "פסיבי", "היברידי", "אין"],
      },
      {
        id: "waterproof_rating_audio",
        name: "עמידות למים",
        values: ["IPX4", "IPX5", "IPX7", "IP68", "אין"],
      },
    ],
  },
  {
    id: "gadgets",
    name: "גאדג'טים",
    description:
      "מכשירים חכמים וחדשניים שמשדרגים את החיים. שעונים חכמים, צמידי כושר, מציאות מדומה ועוד.",
    specialties: [
      {
        id: "battery_life_gadget",
        name: "חיי סוללה",
        values: ["עד יום", "עד 3 ימים", "עד שבוע", "עד שבועיים", "מעל שבועיים"],
      },
      {
        id: "compatibility_gadget",
        name: "תאימות",
        values: ["Android", "iOS", "Windows", "תאימות עם כל המכשירים"],
      },
      {
        id: "sensors",
        name: "חיישנים",
        values: [
          "דופק",
          "GPS",
          "מד צעדים",
          "מד לחץ דם",
          "מד חמצן בדם",
          "מד שינה",
        ],
      },
      {
        id: "connectivity_gadget",
        name: "קישוריות",
        values: ["Bluetooth", "WiFi", "NFC", "4G/5G", "Zigbee"],
      },
      {
        id: "water_resistance",
        name: "עמידות למים",
        values: [
          "עמיד להתזות",
          "עמיד למים עד 30 מטר",
          "עמיד לשחייה",
          "לא עמיד למים",
        ],
      },
      {
        id: "special_features",
        name: "תכונות מיוחדות",
        values: [
          "מעקב כושר",
          "ניטור בריאות",
          "תמיכה בתשלומים",
          "שליטה בבית חכם",
          "מציאות רבודה",
          "מציאות מדומה",
        ],
      },
    ],
  },
  {
    id: "accessories",
    name: "אביזרים",
    description:
      "אביזרים משלימים למוצרי אלקטרוניקה: מטענים, כבלים, אוזניות, כיסויים, מגנים למסך ועוד מוצרים שימושיים.",
    specialties: [
      {
        id: "compatibility_accessory",
        name: "תאימות",
        values: [
          "iPhone",
          "Android",
          "מחשבי Windows",
          "מחשבי Mac",
          "כל המכשירים",
        ],
      },
      {
        id: "material",
        name: "חומר",
        values: ["פלסטיק", "מתכת", "עור", "סיליקון", "זכוכית מחוסמת", "בד"],
      },
      {
        id: "connection_type",
        name: "סוג חיבור",
        values: ["USB-C", "Lightning", "USB-A", "HDMI", "אלחוטי", "Bluetooth"],
      },
      {
        id: "warranty",
        name: "אחריות",
        values: ["שנה", "שנתיים", "3 שנים", "אחריות לכל החיים", "ללא אחריות"],
      },
      {
        id: "color_options",
        name: "אפשרויות צבע",
        values: ["שחור", "לבן", "אפור", "כחול", "אדום", "ורוד", "מגוון צבעים"],
      },
      {
        id: "durability",
        name: "עמידות",
        values: [
          "עמיד לנפילות",
          "עמיד לשריטות",
          "עמיד למים",
          "עמיד לחום",
          "עמיד לאבק",
        ],
      },
    ],
  },
];
