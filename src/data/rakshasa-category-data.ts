
import type { CharacterType, TextSource, Yuga } from '@/lib/types';

export interface NotableRakshasa {
  id: string;
  name: string;
  sanskritName?: string;
  type: CharacterType; // Should be 'Rakshasa' or a specific subtype from this file's context
  epic?: string;
  kingdom?: string;
  traits: string[];
  notable_deeds: string[];
  defeated_by?: string; // Optional, as not all Rakshasas are defeated by a single entity
  symbolism: string;
  imageUrl: string;
  imageAiHint: string;
  yuga?: Yuga;
  isGood?: boolean;
}

export interface RakshasaCategoryData {
  id: string;
  category: "Rakshasa";
  description: string;
  origin: string;
  types_subtitle: string; // Using types_subtitle to match pattern of other category files for 'types' text
  types_list: string[]; // Actual list of subtypes or general types
  notable_rakshasas: NotableRakshasa[];
  philosophical_symbolism: {
    rakshasa: string;
    spiritual_lesson: string;
  };
  associated_scriptures: TextSource[];
  relation_to_asuras: string;
  imageUrl?: string;
  imageAiHint?: string;
}

function generateIdFromName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/\(|\)/g, '');
}

export const RAKSHASA_CATEGORY_DATA: RakshasaCategoryData = {
  id: "category_rakshasa_01",
  category: "Rakshasa",
  description: "Rakshasas are a class of beings in Hindu mythology known for their strength, magical powers, and often malevolent behavior. While many Rakshasas are portrayed as antagonists in epic tales, some are noble or transformed through devotion and wisdom. They represent primal forces, illusion, and obstacles on the path of dharma.",
  origin: "Rakshasas are said to be descendants of Pulastya Rishi and are often associated with night, illusion (maya), and demonic qualities.",
  types_subtitle: "Rakshasa types include male Rakshasa, Rakshasi (female Rakshasa), man-eaters, sorcerers, and warriors.",
  types_list: ["Male Rakshasa", "Rakshasi", "Man-eater", "Sorcerer", "Warrior"],
  imageUrl: "https://i.pinimg.com/736x/12/f4/e6/12f4e6e03937d71859d285cb4e8c48af.jpg",
  imageAiHint: "rakshasa beings fierce",
  notable_rakshasas: [
    {
      id: "ravana", // Matches existing character ID
      name: "Ravana",
      sanskritName: "रावण",
      type: "Rakshasa",
      epic: "Ramayana",
      kingdom: "Lanka",
      traits: ["Mighty", "Scholar", "Devotee of Shiva", "Arrogant", "Ten-headed"],
      notable_deeds: [
        "Abducted Sita, leading to the war with Rama",
        "Composed the Shiva Tandava Stotra",
        "Had ten heads and vast knowledge of the Vedas"
      ],
      defeated_by: "Rama",
      symbolism: "Ego, unchecked desire, pride despite knowledge",
      imageUrl: "https://i.pinimg.com/736x/fe/c8/e5/fec8e52572514c509e9871017874f3a3.jpg",
      imageAiHint: "rakshasa king ten heads",
      yuga: "Treta Yuga"
    },
    {
      id: "kumbhakarna", // Matches existing character ID
      name: "Kumbhakarna",
      sanskritName: "कुम्भकर्ण",
      type: "Rakshasa",
      epic: "Ramayana",
      traits: ["Giant", "Sleepy", "Loyal", "Prodigious Eater"],
      notable_deeds: [
        "Slept for six months continuously due to a boon/curse",
        "Fought valiantly for Ravana, causing immense destruction before being slain",
        "Advised Ravana to seek peace but fought out of loyalty"
      ],
      defeated_by: "Rama",
      symbolism: "Lethargy (Tamas), blind loyalty, power without clarity",
      imageUrl: "https://i.pinimg.com/736x/74/ec/f0/74ecf04fead8b31206860cd9f7692670.jpg",
      imageAiHint: "rakshasa giant sleepy",
      yuga: "Treta Yuga"
    },
    {
      id: generateIdFromName("Shurpanakha"),
      name: "Shurpanakha",
      sanskritName: "शूर्पणखा",
      type: "Rakshasa", // Rakshasi is a female Rakshasa
      epic: "Ramayana",
      traits: ["Rakshasi", "Envious", "Deceptive", "Vengeful"],
      notable_deeds: [
        "Tried to seduce Rama and attacked Sita out of jealousy",
        "Her mutilation by Lakshmana directly instigated Ravana's abduction of Sita"
      ],
      symbolism: "Uncontrolled desire, lust, and the catastrophic consequences of vengefulness",
      imageUrl: "https://i.pinimg.com/736x/4f/74/fc/4f74fc1cc99e21b6e241ba3f758f3b56.jpg",
      imageAiHint: "rakshasi envious deceptive",
      yuga: "Treta Yuga"
    },
    {
      id: generateIdFromName("Vibhishana"),
      name: "Vibhishana",
      sanskritName: "विभीषण",
      type: "Rakshasa",
      epic: "Ramayana",
      traits: ["Noble", "Righteous", "Dharmic", "Wise", "Devotee of Rama", "Chiranjeevi (Immortal)"],
      notable_deeds: [
        "Consistently advised Ravana to return Sita and follow the path of Dharma",
        "Abandoned Lanka and joined Rama's side when his counsel was rejected",
        "Provided crucial intelligence about Lanka's army, secrets, and Ravana's weaknesses",
        "Crowned as the King of Lanka by Rama after Ravana's defeat"
      ],
      symbolism: "Represents that righteousness (dharma) is not determined by birth but by actions. He symbolizes hope, the victory of good over evil, and the power of unwavering devotion.",
      imageUrl: "https://i.pinimg.com/736x/3a/82/00/3a82005b8dc1c58b7a633f4c8b0fe6e0.jpg",
      imageAiHint: "rakshasa noble righteous",
      yuga: "Treta Yuga",
      isGood: true
    },
    {
      id: generateIdFromName("Maricha"),
      name: "Maricha",
      sanskritName: "मारीच",
      type: "Rakshasa",
      epic: "Ramayana",
      traits: ["Sorcerer", "Shape-shifter", "Initially an antagonist to sages"],
      notable_deeds: [
        "Attacked Vishvamitra's yajna and was thrown miles away by Rama's arrow",
        "Forcibly disguised himself as a golden deer to lure Rama away, enabling Sita's abduction",
        "Warned Ravana against confronting Rama but was forced to comply"
      ],
      defeated_by: "Rama",
      symbolism: "Illusion (Maya), trickery, and the deceptive allure of material desire",
      imageUrl: "https://i.pinimg.com/736x/7d/3a/dc/7d3adcf4a9f89a8d08bac0c2ddf840c6.jpg",
      imageAiHint: "rakshasa sorcerer deer",
      yuga: "Treta Yuga"
    },
    {
      id: generateIdFromName("Tataka"),
      name: "Tataka",
      sanskritName: "ताड़का",
      type: "Rakshasa", // Rakshasi
      epic: "Ramayana",
      traits: ["Fierce Yakshini cursed to be a Rakshasi", "Man-eater", "Immense strength"],
      notable_deeds: [
        "Terrorized the sages in the forest near the Ganges",
        "Was slain by a young Rama at the behest of sage Vishvamitra"
      ],
      defeated_by: "Rama",
      symbolism: "Violence, chaos, and the disruption of sacred rituals",
      imageUrl: "https://i.pinimg.com/736x/36/f0/15/36f0158e851fd1d1a622aa0e567e36f6.jpg",
      imageAiHint: "rakshasi fierce forest",
      yuga: "Treta Yuga"
    },
    {
      id: "indrajit", // Matches existing character ID
      name: "Indrajit (Meghnad)",
      sanskritName: "इन्द्रजित्",
      type: "Rakshasa",
      epic: "Ramayana",
      traits: ["Powerful warrior", "Master of celestial weapons", "Magician", "Son of Ravana"],
      notable_deeds: [
        "Defeated Indra and earned the name 'Indrajit' (Conqueror of Indra)",
        "Master of illusions, becoming invisible in battle",
        "Wounded both Rama and Lakshmana with powerful celestial weapons like the Nagapasha"
      ],
      defeated_by: "Lakshmana",
      symbolism: "Power gained through boons and illusion, arrogance in one's strength",
      imageUrl: "https://i.pinimg.com/736x/bf/0b/07/bf0b07387fa6b159abd82f1352af580d.jpg",
      imageAiHint: "rakshasa warrior magic",
      yuga: "Treta Yuga"
    },
    {
      id: generateIdFromName("Khara and Dushana"),
      name: "Khara and Dushana",
      sanskritName: "खर-दूषण",
      type: "Rakshasa",
      epic: "Ramayana",
      traits: ["Cruel", "Warrior Rakshasas", "Brothers", "Commanders of Ravana's army"],
      notable_deeds: [
        "Ruled the Dandaka Forest on behalf of Ravana",
        "Attacked Rama in Panchavati with an army of 14,000 Rakshasas after Shurpanakha's appeal",
        "Both were defeated and killed by Rama single-handedly"
      ],
      defeated_by: "Rama",
      symbolism: "Overwhelming brute force, arrogance, and the swift justice delivered by Dharma",
      imageUrl: "https://i.pinimg.com/736x/76/84/91/76849173011b418bb1398d7583692e61.jpg",
      imageAiHint: "rakshasa warriors cruel",
      yuga: "Treta Yuga"
    }
  ],
  philosophical_symbolism: {
    rakshasa: "Rakshasas symbolize the darker aspects of the mind such as lust, greed, anger, and illusion. Some, like Vibhishana, transcend these qualities through devotion and righteousness.",
    spiritual_lesson: "True character is revealed not by birth but by choices. Even Rakshasas can become divine by adhering to dharma, as shown by Vibhishana."
  },
  associated_scriptures: [
    "Ramayana",
    "Mahabharata",
    "Puranas", // Generic Puranas
    "Other" // for regional folklore and kavyas
  ],
  relation_to_asuras: "Rakshasas are sometimes considered a subgroup of Asuras but are generally more associated with earthly disturbances, forests, and interaction with human realms."
};
