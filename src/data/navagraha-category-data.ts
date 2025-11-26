
import type { TextSource } from '@/lib/types';

export interface NavagrahaEntry {
  name: string; // Sanskrit name
  englishName: string;
  type: "Star" | "Planet" | "Shadow Planet";
  rulingDeity: string;
  direction: string;
  day: string;
  color: string;
  element: string;
  metal: string;
  gemstone: string;
  zodiacSigns: string[];
  mantra: string;
  nature: "Benefic" | "Malefic";
  description: string;
  associatedDeities: string[];
  vehicle: string;
  iconography: string;
  imageUrl?: string; 
  imageAiHint?: string; 
}

export interface NavagrahaCategoryData {
  id: string;
  category: "Navagraha";
  description: string;
  navagrahas: NavagrahaEntry[];
  imageUrl?: string;
  imageAiHint?: string;
  scriptural_references?: TextSource[]; 
  symbolism?: string; 
  worship_and_festivals?: string[]; 
  external_links?: { 
    wikipedia: string;
    vedic_astrology_texts?: string;
  };
}

const navagrahaImageMap: Record<string, string> = {
  "Surya": "https://i.pinimg.com/736x/0b/b7/0e/0bb70eda1320833c688529ea279832f7.jpg",
  "Chandra": "https://i.pinimg.com/736x/a2/1a/8b/a21a8b75504f8f1bc7f9b7f1604869f6.jpg",
  "Mangala": "https://i.pinimg.com/736x/ea/8d/d1/ea8dd193da09534a33fb985627952f4f.jpg",
  "Budha": "https://i.pinimg.com/736x/e8/c5/c0/e8c5c058c8ff7be93c01ae7b847b7335.jpg",
  "Brihaspati": "https://i.pinimg.com/736x/f9/50/5f/f9505fef754a2830ffd3cfdff6f8e140.jpg",
  "Shukra": "https://i.pinimg.com/736x/b4/88/b9/b488b9882046c9aa9a4b6e99a3255311.jpg",
  "Shani": "https://i.pinimg.com/736x/a2/d2/d1/a2d2d1a4108739b4d3b0ee652990da05.jpg",
  "Rahu": "https://i.pinimg.com/736x/d8/81/0f/d8810fcb066b0e3dfa28c4db77d735bd.jpg",
  "Ketu": "https://i.pinimg.com/736x/b4/b5/89/b4b58912ca06b01985557ee64c0dbfdb.jpg"
};


export const NAVAGRAHA_CATEGORY_DATA: NavagrahaCategoryData = {
  id: "category_navagraha_01",
  category: "Navagraha",
  description: "The Navagrahas are the nine celestial bodies or 'grahas' that influence life on Earth according to Hindu astrology. Each graha has a specific role and is associated with a deity, day, color, and gemstone. Their worship is believed to mitigate negative influences and enhance positive ones.",
  imageUrl: "https://i.pinimg.com/736x/f0/c8/9e/f0c89e31a98cddadab2a9a2cbbc0d091.jpg",
  imageAiHint: "celestial planets astrology nine",
  navagrahas: [
    {
      name: "Surya",
      englishName: "Sun",
      type: "Star",
      rulingDeity: "Surya Deva",
      direction: "East",
      day: "Sunday",
      color: "Red",
      element: "Fire",
      metal: "Gold",
      gemstone: "Ruby",
      zodiacSigns: ["Leo"],
      mantra: "Om Suryaya Namah",
      nature: "Benefic",
      description: "Surya is the chief of the Navagraha and represents the soul, authority, power, vitality, and health. Surya is considered a visible Deva and is worshipped daily in Hindu traditions.",
      associatedDeities: ["Agni", "Ravi"],
      vehicle: "Seven Horses",
      iconography: "A radiant deity with two or four arms, holding lotuses, riding a chariot drawn by seven horses.",
      imageUrl: navagrahaImageMap["Surya"],
      imageAiHint: "sun god chariot"
    },
    {
      name: "Chandra",
      englishName: "Moon",
      type: "Planet",
      rulingDeity: "Chandra Deva",
      direction: "North-West",
      day: "Monday",
      color: "White",
      element: "Water",
      metal: "Silver",
      gemstone: "Pearl",
      zodiacSigns: ["Cancer"],
      mantra: "Om Chandraya Namah",
      nature: "Benefic",
      description: "Chandra governs the mind, emotions, beauty, and nourishment. The Moon is associated with femininity, intuition, and motherhood in Vedic astrology.",
      associatedDeities: ["Soma"],
      vehicle: "Chariot drawn by 10 white horses or an antelope",
      iconography: "A calm-faced deity with two arms, often shown holding a lotus or a conch, riding a chariot.",
      imageUrl: navagrahaImageMap["Chandra"],
      imageAiHint: "moon god serene"
    },
    {
      name: "Mangala",
      englishName: "Mars",
      type: "Planet",
      rulingDeity: "Mangala",
      direction: "South",
      day: "Tuesday",
      color: "Red",
      element: "Fire",
      metal: "Copper",
      gemstone: "Red Coral",
      zodiacSigns: ["Aries", "Scorpio"],
      mantra: "Om Mangalaya Namah",
      nature: "Malefic",
      description: "Mangala is the god of war, aggression, energy, courage, and strength. It rules over property, siblings, and ambition.",
      associatedDeities: ["Kartikeya"],
      vehicle: "Ram",
      iconography: "A fierce red-complexioned deity holding weapons like mace or spear.",
      imageUrl: navagrahaImageMap["Mangala"],
      imageAiHint: "mars god warrior"
    },
    {
      name: "Budha",
      englishName: "Mercury",
      type: "Planet",
      rulingDeity: "Budha",
      direction: "North",
      day: "Wednesday",
      color: "Green",
      element: "Earth",
      metal: "Bronze",
      gemstone: "Emerald",
      zodiacSigns: ["Gemini", "Virgo"],
      mantra: "Om Budhaya Namah",
      nature: "Benefic",
      description: "Budha governs communication, intellect, logic, and learning. It symbolizes wisdom, trade, and analytical skills.",
      associatedDeities: ["Vishnu"],
      vehicle: "Lion",
      iconography: "A green-hued deity holding a sword, shield, and a mace, often riding a lion or chariot.",
      imageUrl: navagrahaImageMap["Budha"],
      imageAiHint: "mercury god intellect"
    },
    {
      name: "Brihaspati",
      englishName: "Jupiter",
      type: "Planet",
      rulingDeity: "Brihaspati",
      direction: "North-East",
      day: "Thursday",
      color: "Yellow",
      element: "Ether",
      metal: "Gold",
      gemstone: "Yellow Sapphire",
      zodiacSigns: ["Sagittarius", "Pisces"],
      mantra: "Om Brihaspataye Namah",
      nature: "Benefic",
      description: "Brihaspati is the teacher of the gods and symbolizes knowledge, spirituality, wealth, children, and good fortune.",
      associatedDeities: ["Guru", "Devaguru"],
      vehicle: "Elephant or chariot",
      iconography: "A yellow-robed sage-like figure holding scriptures or a rosary.",
      imageUrl: navagrahaImageMap["Brihaspati"],
      imageAiHint: "jupiter god guru"
    },
    {
      name: "Shukra",
      englishName: "Venus",
      type: "Planet",
      rulingDeity: "Shukra",
      direction: "South-East",
      day: "Friday",
      color: "White",
      element: "Water",
      metal: "Silver",
      gemstone: "Diamond",
      zodiacSigns: ["Taurus", "Libra"],
      mantra: "Om Shukraya Namah",
      nature: "Benefic",
      description: "Shukra is the teacher of the demons and symbolizes love, beauty, luxury, art, relationships, and wealth.",
      associatedDeities: ["Lakshmi"],
      vehicle: "Horse or crocodile",
      iconography: "A fair-complexioned sage holding a staff and beads, often depicted in a meditative pose.",
      imageUrl: navagrahaImageMap["Shukra"],
      imageAiHint: "venus god love beauty"
    },
    {
      name: "Shani",
      englishName: "Saturn",
      type: "Planet",
      rulingDeity: "Shani",
      direction: "West",
      day: "Saturday",
      color: "Black or Dark Blue",
      element: "Air",
      metal: "Iron",
      gemstone: "Blue Sapphire",
      zodiacSigns: ["Capricorn", "Aquarius"],
      mantra: "Om Shanicharaya Namah",
      nature: "Malefic",
      description: "Shani is the god of karma, justice, delay, discipline, and hardship. He tests one’s patience and determines long-term consequences.",
      associatedDeities: ["Kali", "Yama"],
      vehicle: "Crow or vulture",
      iconography: "A dark figure with a stern expression, often holding a bow, sword, or trident.",
      imageUrl: navagrahaImageMap["Shani"],
      imageAiHint: "saturn god justice"
    },
    {
      name: "Rahu",
      englishName: "North Lunar Node",
      type: "Shadow Planet",
      rulingDeity: "Rahu",
      direction: "South-West",
      day: "Saturday (shared)",
      color: "Blue",
      element: "Air",
      metal: "Lead",
      gemstone: "Hessonite (Gomed)",
      zodiacSigns: ["Aquarius (traditional association)"],
      mantra: "Om Rahave Namah",
      nature: "Malefic",
      description: "Rahu is the head of the celestial serpent and represents illusion, obsession, confusion, and material desires. It influences foreign travels and sudden events.",
      associatedDeities: ["Durga", "Kali"],
      vehicle: "Lion or chariot",
      iconography: "A serpent-headed figure or shadowy form riding a chariot.",
      imageUrl: navagrahaImageMap["Rahu"],
      imageAiHint: "rahu node illusion"
    },
    {
      name: "Ketu",
      englishName: "South Lunar Node",
      type: "Shadow Planet",
      rulingDeity: "Ketu",
      direction: "North-West",
      day: "Tuesday (shared)",
      color: "Grey or Smoky",
      element: "Fire",
      metal: "Zircon",
      gemstone: "Cat's Eye",
      zodiacSigns: ["Scorpio (traditional association)"],
      mantra: "Om Ketave Namah",
      nature: "Malefic",
      description: "Ketu is the tail of the celestial serpent and signifies detachment, spirituality, liberation, and moksha. It often leads toward introspection and mysticism.",
      associatedDeities: ["Ganesha", "Matsya"],
      vehicle: "Vulture or chariot",
      iconography: "A headless figure with a flag, symbolizing spiritual detachment.",
      imageUrl: navagrahaImageMap["Ketu"],
      imageAiHint: "ketu node detachment"
    }
  ],
  scriptural_references: ["Puranas", "Other"], // "Jyotisha Shastras" would be 'Other'
  symbolism: "The Navagrahas represent cosmic influences that shape human destiny and character. Their worship is integral to Hindu rituals for peace and well-being.",
  worship_and_festivals: ["Specific planetary days (e.g., Shani Trayodashi)", "Navagraha Homam/Puja"],
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Navagraha",
    vedic_astrology_texts: "https://www.wisdomlib.org/hinduism/jyotisha"
  }
};

