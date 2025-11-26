
export interface NotableDemon {
  id: string; // For linking to character page
  name: string;
  sanskritName?: string; // Optional Sanskrit name
  type: 'Asura' | 'Rakshasa' | 'Daitya' | 'Danava' | 'Pishacha';
  epic?: string; // Main text associated
  kingdom?: string;
  traits: string[];
  notable_deeds: string[];
  defeated_by: string;
  symbolism: string;
  imageUrl: string;
  imageAiHint: string;
  yuga?: string; // Yuga if applicable
}

export interface DemonCategoryData {
  id: string;
  category: "Demon";
  description: string;
  types: string[];
  notable_demons: NotableDemon[];
  symbolic_meaning: {
    asura: string; // General meaning for demon types
    defeat: string;
    spiritual_lesson: string;
  };
  scriptures_mentioning_demons: string[];
  imageUrl?: string;
  imageAiHint?: string;
}

export const DEMON_CATEGORY_DATA: DemonCategoryData = {
  id: "category_demon_01",
  category: "Demon",
  description: "In Sanātana Dharma, 'demons' encompass beings such as Asuras, Rakshasas, Daityas, and Danavas. Though portrayed as antagonists to Devas and Dharma, they often symbolize inner vices, challenges to cosmic order, and agents of divine intervention.",
  types: ["Asura", "Rakshasa", "Daitya", "Danava", "Pishacha"],
  imageUrl: "https://i.pinimg.com/736x/a8/8f/eb/a88febaa0b349123af5a0cf44ddf8ed3.jpg",
  imageAiHint: "demonic figures battle",
  notable_demons: [
    {
      id: "ravana",
      name: "Ravana",
      sanskritName: "रावण",
      type: "Rakshasa",
      epic: "Ramayana",
      kingdom: "Lanka",
      traits: ["Scholar", "Shiva devotee", "Proud", "Powerful", "Ten-headed"],
      notable_deeds: [
        "Abduction of Sita",
        "Great war with Lord Rama",
        "Authored Shiva Tandava Stotra"
      ],
      defeated_by: "Lord Rama",
      symbolism: "Ego, misuse of knowledge, and unchecked desire",
      imageUrl: "https://i.pinimg.com/736x/f7/a6/cd/f7a6cddb6d38479b92000dfc81394a8d.jpg",
      imageAiHint: "demon king lanka",
      yuga: "Treta Yuga"
    },
    {
      id: "hiranyakashipu",
      name: "Hiranyakashipu",
      sanskritName: "हिरण्यकशिपु",
      type: "Daitya",
      epic: "Bhagavata Purana",
      traits: ["Tyrant", "Powerful Asura king", "Father of Prahlada", "Received boon of near-invincibility"],
      notable_deeds: [
        "Declared himself God",
        "Persecuted his son Prahlada for worshipping Vishnu"
      ],
      defeated_by: "Narasimha (Vishnu Avatar)",
      symbolism: "Arrogance, oppression, disbelief, and persecution of devotion",
      imageUrl: "https://i.pinimg.com/736x/b0/db/cc/b0dbcc1ac007b7738b94e8eaa46ead60.jpg",
      imageAiHint: "demon king tyrant",
      yuga: "Satya Yuga"
    },
    {
      id: "hiranyaksha",
      name: "Hiranyaksha",
      sanskritName: "हिरण्याक्ष",
      type: "Daitya",
      epic: "Bhagavata Purana",
      traits: ["Mighty warrior", "Brother of Hiranyakashipu", "Caused chaos"],
      notable_deeds: [
        "Dragged the Earth into the cosmic ocean",
        "Challenged Varuna and battled Vishnu"
      ],
      defeated_by: "Varaha (Vishnu Avatar)",
      symbolism: "Adharma, cosmic imbalance, destruction",
      imageUrl: "https://i.pinimg.com/736x/a1/9d/c7/a19dc75bab8439cce0ff41f528e14197.jpg",
      imageAiHint: "demon warrior ocean",
      yuga: "Satya Yuga"
    },
    {
      id: "mahishasura",
      name: "Mahishasura",
      sanskritName: "महिषासुर",
      type: "Asura",
      epic: "Devi Mahatmya",
      traits: ["Buffalo demon", "Shapeshifter", "Extremely powerful", "Arrogant"],
      notable_deeds: [
        "Conquered the three worlds and usurped heaven from the Devas",
        "Defeated Devas in battle"
      ],
      defeated_by: "Goddess Durga",
      symbolism: "Brute force, ignorance, ego, and chaos",
      imageUrl: "https://i.pinimg.com/736x/18/66/55/1866554234648c1bf5e06907a503a974.jpg",
      imageAiHint: "buffalo demon powerful",
      yuga: "Various Yugas (appears in different Kalpas)"
    },
    {
      id: "shumbha",
      name: "Shumbha",
      sanskritName: "शुम्भ",
      type: "Asura",
      epic: "Devi Mahatmya",
      traits: ["Brother of Nishumbha", "Powerful Asura king", "Arrogant"],
      notable_deeds: [
        "Usurped the heavens with Nishumbha",
        "Attempted to capture Goddess Durga (as Kaushiki/Chandika)"
      ],
      defeated_by: "Goddess Durga",
      symbolism: "Ego and attachment (along with Nishumbha)",
      imageUrl: "https://i.pinimg.com/736x/4c/79/a1/4c79a1da22a5db0489d5d9b4de67bdf3.jpg",
      imageAiHint: "demon king warrior",
      yuga: "Various Yugas"
    },
    {
      id: "nishumbha",
      name: "Nishumbha",
      sanskritName: "निशुम्भ",
      type: "Asura",
      epic: "Devi Mahatmya",
      traits: ["Brother of Shumbha", "Powerful Asura warrior"],
      notable_deeds: [
        "Fought alongside Shumbha against Durga",
        "Challenged the goddesses fiercely"
      ],
      defeated_by: "Goddess Durga (Chamunda/Kali)",
      symbolism: "Duality of ego and delusion (along with Shumbha)",
      imageUrl: "https://i.pinimg.com/736x/ab/32/fe/ab32fe74b936e7ae72442fa310f5104f.jpg",
      imageAiHint: "demon warrior fierce",
      yuga: "Various Yugas"
    },
    {
      id: "bakasura",
      name: "Bakasura",
      sanskritName: "बकासुर",
      type: "Rakshasa",
      epic: "Mahabharata",
      traits: ["Man-eater", "Terrorized the village of Ekachakra"],
      notable_deeds: [
        "Demanded daily food tribute including a human",
        "Terrorized local populace"
      ],
      defeated_by: "Bhima",
      symbolism: "Gluttony, oppression by the powerful",
      imageUrl: "https://i.pinimg.com/736x/e0/ac/d7/e0acd73863e62de50bdb7952815cfe4d.jpg",
      imageAiHint: "demon man-eater giant",
      yuga: "Dvapara Yuga"
    },
    {
      id: "kumbhakarna",
      name: "Kumbhakarna",
      sanskritName: "कुम्भकर्ण",
      type: "Rakshasa",
      epic: "Ramayana",
      kingdom: "Lanka",
      traits: ["Giant", "Prodigious sleeper (6 months at a time)", "Extremely loyal to Ravana", "Immense strength"],
      notable_deeds: ["Fought valiantly in the Lanka war after being awakened", "Caused massive destruction in Rama's army"],
      defeated_by: "Lord Rama",
      symbolism: "Lethargy, tamasic nature, misplaced loyalty despite knowing dharma",
      imageUrl: "https://i.pinimg.com/736x/60/5d/cf/605dcf899a20e522e6638f1b2b131d16.jpg",
      imageAiHint: "giant demon sleeping",
      yuga: "Treta Yuga"
    },
    {
      id: "tarakasura",
      name: "Tarakasura",
      sanskritName: "तारकासुर",
      type: "Asura",
      epic: "Skanda Purana (Kumarasambhava)",
      traits: ["Extremely powerful", "Obtained boon of invincibility except from Shiva’s son"],
      notable_deeds: [
        "Terrorized the Devas and conquered the three worlds",
        "His tyranny led to the birth of Kartikeya"
      ],
      defeated_by: "Kartikeya (Murugan/Skanda)",
      symbolism: "Obstacles to divine purpose that require specific divine intervention",
      imageUrl: "https://i.pinimg.com/736x/7d/a3/6b/7da36bec2656f6a778d8389baaefc548.jpg",
      imageAiHint: "demon powerful invincible",
      yuga: "Various Yugas"
    },
    {
      id: "bhasmasura",
      name: "Bhasmasura",
      sanskritName: "भस्मासुर",
      type: "Asura",
      epic: "Puranas",
      traits: ["Devotee of Shiva (initially)", "Obtained boon to turn anyone to ash by touching their head", "Arrogant"],
      notable_deeds: [
        "Attempted to test his boon on Lord Shiva himself"
      ],
      defeated_by: "Vishnu (in the form of Mohini)",
      symbolism: "Misuse of boons, power corrupting, self-destruction due to arrogance",
      imageUrl: "https://i.pinimg.com/736x/aa/7f/13/aa7f1384d7d0387d1412b2a14169feb6.jpg",
      imageAiHint: "demon boon arrogant",
      yuga: "Various Yugas"
    },
    {
      id: "tripurasura", // Represents the three sons: Tarakaksha, Kamalaksha, Vidyunmali
      name: "Tripurasura",
      sanskritName: "त्रिपुरासुर",
      type: "Asura", // Collective term for three Asura brothers
      epic: "Shiva Purana, Mahabharata",
      traits: ["Three demon brothers", "Built three invincible flying cities (Tripura) of gold, silver, and iron"],
      notable_deeds: [
        "Conquered the universe with their invincible cities",
        "Oppressed Devas and Rishis"
      ],
      defeated_by: "Lord Shiva (as Tripurantaka)",
      symbolism: "Attachment to material realms (the three cities representing body, mind, and ego), collective adharma",
      imageUrl: "https://i.pinimg.com/736x/e7/3e/23/e73e231d01840cfb38f76961e39726cd.jpg",
      imageAiHint: "demon cities flying",
      yuga: "Various Yugas"
    }
  ],
  symbolic_meaning: {
    asura: "Symbol of ignorance, pride, ego, and challenges to divine order. Not always inherently evil, some Asuras are depicted as learned or devout but misguided by power.",
    defeat: "Represents the ultimate victory of dharma (righteousness) over adharma (unrighteousness) and cosmic balance restored by divine forces.",
    spiritual_lesson: "Demons often represent inner enemies—such as lust, greed, anger, pride, and delusion—that must be overcome through self-awareness, divine grace, and spiritual discipline."
  },
  scriptures_mentioning_demons: [
    "Rigveda",
    "Ramayana",
    "Mahabharata",
    "Puranas (Bhagavata, Vishnu, Markandeya, Shiva, Skanda, etc.)",
    "Devi Mahatmya"
  ]
};
