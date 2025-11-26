
import type { CharacterType, TextSource, Yuga } from '@/lib/types';

export interface NotableAsura {
  id: string;
  name: string;
  sanskritName?: string;
  type: CharacterType; // All notable asuras here will be type 'Asura' by convention from this file
  epic?: string;
  kingdom?: string;
  traits: string[];
  notable_deeds: string[];
  defeated_by: string;
  symbolism: string;
  imageUrl: string;
  imageAiHint: string;
  yuga?: Yuga;
}

export interface AsuraCategoryData {
  id: string;
  category: "Asura";
  description: string;
  types_subtitle: string; // Renamed from "types" in JSON to avoid conflict with CharacterType
  types_list: string[]; // Actual list of subtypes
  notable_asuras: NotableAsura[];
  symbolic_meaning: {
    asura: string;
    spiritual_lesson: string;
  };
  scriptures_mentioning_asuras: TextSource[];
  imageUrl?: string;
  imageAiHint?: string;
}

export const ASURA_CATEGORY_DATA: AsuraCategoryData = {
  id: "category_asura_01",
  category: "Asura",
  description: "Asuras are often depicted as powerful beings opposed to the Devas (gods) in Hindu mythology. They embody the forces of chaos, ignorance, and adharma (unrighteousness). Despite their antagonistic nature, Asuras also contribute to the cosmic balance by challenging divine order and prompting the manifestation of divine avatars.",
  types_subtitle: "Asura subtypes include Daitya, Danava, Rakshasa, Pishacha, etc.", // Clarification text
  types_list: ["Daitya", "Danava", "Rakshasa", "Asura (general term)", "Pishacha"],
  imageUrl: "https://i.pinimg.com/736x/7c/c1/58/7cc1580d4296ec008d7b4c15b6f54992.jpg",
  imageAiHint: "asura beings powerful",
  notable_asuras: [
    {
      id: "hiranyakashipu",
      name: "Hiranyakashipu",
      sanskritName: "हिरण्यकशिपु",
      type: "Asura", // Explicitly Asura, though Daitya is a subtype
      epic: "Bhagavata Purana",
      traits: ["Tyrant", "Atheist", "Arrogant", "Powerful"],
      notable_deeds: [
        "Declared himself as the supreme god",
        "Opposed Vishnu and all worship of the Devas",
        "Imprisoned his son Prahlada for his devotion to Vishnu"
      ],
      defeated_by: "Narasimha (Vishnu's Avatar)",
      symbolism: "Arrogance, disbelief, tyranny, abuse of power",
      imageUrl: "https://i.pinimg.com/736x/b0/db/cc/b0dbcc1ac007b7738b94e8eaa46ead60.jpg",
      imageAiHint: "asura king tyrant",
      yuga: "Satya Yuga"
    },
    {
      id: "hiranyaksha",
      name: "Hiranyaksha",
      sanskritName: "हिरण्याक्ष",
      type: "Asura", // Explicitly Asura, though Daitya is a subtype
      epic: "Bhagavata Purana",
      traits: ["Mighty", "Destructive", "Warrior"],
      notable_deeds: [
        "Pulled the Earth into the cosmic ocean",
        "Battled Vishnu, who incarnated as Varaha"
      ],
      defeated_by: "Varaha (Vishnu's Avatar)",
      symbolism: "Delusion, materialism, and chaos",
      imageUrl: "https://i.pinimg.com/736x/20/f9/e3/20f9e321f5f4779b2713a828c22ac3d9.jpg",
      imageAiHint: "asura warrior earth",
      yuga: "Satya Yuga"
    },
    {
      id: "ravana",
      name: "Ravana",
      sanskritName: "रावण",
      type: "Asura", // Explicitly Asura, though Rakshasa is a subtype often associated
      epic: "Ramayana",
      kingdom: "Lanka",
      traits: ["Scholar", "Shiva devotee", "Proud", "Powerful", "Ten-headed"],
      notable_deeds: [
        "Abduction of Sita",
        "Great war with Lord Rama",
        "Authored Shiva Tandava Stotra"
      ],
      defeated_by: "Lord Rama",
      symbolism: "Ego, pride, misuse of knowledge, and desire",
      imageUrl: "https://i.pinimg.com/736x/f7/a6/cd/f7a6cddb6d38479b92000dfc81394a8d.jpg",
      imageAiHint: "asura king ten heads",
      yuga: "Treta Yuga"
    },
    {
      id: "mahishasura",
      name: "Mahishasura",
      sanskritName: "महिषासुर",
      type: "Asura",
      epic: "Devi Mahatmya",
      traits: ["Buffalo demon", "Shapeshifter", "Proud", "Powerful"],
      notable_deeds: [
        "Usurped heaven and defeated the Devas",
        "Battled Durga"
      ],
      defeated_by: "Durga (Goddess)",
      symbolism: "Ego, ignorance, and chaos",
      imageUrl: "https://i.pinimg.com/736x/b8/2a/0a/b82a0a5eb8231944e46dc647f29a9c1b.jpg",
      imageAiHint: "buffalo asura powerful",
      yuga: "All Yugas" // Appears in various Kalpas
    },
    {
      id: "shumbha",
      name: "Shumbha",
      sanskritName: "शुम्भ",
      type: "Asura",
      epic: "Devi Mahatmya",
      traits: ["Brother of Nishumbha", "Tyrant", "Opponent of Devi", "Powerful"],
      notable_deeds: [
        "Usurped the heavens with Nishumbha",
        "Attempted to capture Goddess Durga (as Kaushiki/Chandika)"
      ],
      defeated_by: "Goddess Durga",
      symbolism: "Ego and attachment (along with Nishumbha)",
      imageUrl: "https://i.pinimg.com/736x/33/7b/30/337b30d280f4e7a10ec61e2bce701463.jpg",
      imageAiHint: "asura king battle",
      yuga: "All Yugas"
    },
    {
      id: "nishumbha",
      name: "Nishumbha",
      sanskritName: "निशुम्भ",
      type: "Asura",
      epic: "Devi Mahatmya",
      traits: ["Brother of Shumbha", "Powerful warrior", "Opponent of Devi"],
      notable_deeds: [
        "Fought alongside Shumbha against Durga",
        "Challenged the goddesses fiercely"
      ],
      defeated_by: "Goddess Durga (Chamunda/Kali)",
      symbolism: "Duality of ego and delusion (along with Shumbha)",
      imageUrl: "https://i.pinimg.com/736x/12/49/ea/1249ea44d5f542cce73c5e6945a84b1f.jpg",
      imageAiHint: "asura warrior fierce",
      yuga: "All Yugas"
    },
    {
      id: "bhasmasura",
      name: "Bhasmasura",
      sanskritName: "भस्मासुर",
      type: "Asura",
      epic: "Puranas",
      traits: ["Greedy", "Arrogant", "Received a boon from Shiva", "Powerful"],
      notable_deeds: [
        "Attempted to destroy Lord Shiva using his own boon"
      ],
      defeated_by: "Vishnu (as Mohini)",
      symbolism: "Misuse of boons and self-destruction",
      imageUrl: "https://i.pinimg.com/736x/3b/3a/08/3b3a0816f23ca73d8ec935c5c191e957.jpg",
      imageAiHint: "asura boon ash",
      yuga: "All Yugas"
    },
    {
      id: "vritra",
      name: "Vritra",
      sanskritName: "वृत्र",
      type: "Asura",
      epic: "Rigveda",
      traits: ["Serpent demon", "Opponent of Indra", "Symbol of drought", "Powerful"],
      notable_deeds: [
        "Imprisoned the waters and caused a drought"
      ],
      defeated_by: "Indra",
      symbolism: "Obstruction, ignorance, and illusion",
      imageUrl: "https://i.pinimg.com/736x/6e/64/7f/6e647f3b424fbcc9292e9fafaa4380a8.jpg",
      imageAiHint: "serpent asura drought",
      yuga: "All Yugas" // Vedic context often seen as timeless
    },
    {
      id: "tarakasura",
      name: "Tarakasura",
      sanskritName: "तारकासुर",
      type: "Asura",
      epic: "Skanda Purana",
      traits: ["Powerful", "Invincible except by Shiva's son", "Tyrannical"],
      notable_deeds: [
        "Defeated Devas and held them captive",
        "His defeat was prophesied to be by Kartikeya (Murugan)"
      ],
      defeated_by: "Kartikeya (Murugan)",
      symbolism: "Obstacles to divine purpose, disruption of cosmic order",
      imageUrl: "https://i.pinimg.com/736x/35/9e/a7/359ea7ade2d97fb61f8eb48dc7c2847c.jpg",
      imageAiHint: "asura tyranny invincible",
      yuga: "All Yugas"
    },
    {
      id: "kumbhakarna",
      name: "Kumbhakarna",
      sanskritName: "कुम्भकर्ण",
      type: "Asura", // Explicitly Asura, though Rakshasa is a subtype often associated
      epic: "Ramayana",
      traits: ["Giant", "Loyal to Ravana", "Sleeper", "Immense strength"],
      notable_deeds: [
        "Fought in the battle against Rama",
        "Known for his massive size and appetite"
      ],
      defeated_by: "Rama",
      symbolism: "Lethargy, misplaced loyalty, excessive desires",
      imageUrl: "https://i.pinimg.com/736x/82/b9/8e/82b98e5def54987b6e383d769000235e.jpg",
      imageAiHint: "giant asura sleeping",
      yuga: "Treta Yuga"
    },
    {
      id: "tripurasura",
      name: "Tripurasura", // Collective name for Tarakaksha, Kamalaksha, Vidyunmali
      sanskritName: "त्रिपुरासुर",
      type: "Asura",
      epic: "Shiva Purana",
      traits: ["Created three flying cities", "Powerful", "Invincible"],
      notable_deeds: [
        "Defeated the Devas and ruled over the universe with their three flying cities",
        "Destroyed by Lord Shiva (Tripurantaka)"
      ],
      defeated_by: "Shiva (Tripurantaka)",
      symbolism: "Attachment to material realms and pride, the three cities representing the gross, subtle, and causal bodies or states of consciousness",
      imageUrl: "https://i.pinimg.com/736x/be/56/fe/be56fe8162554f8b81dc8bb02b85cddc.jpg",
      imageAiHint: "asura cities flying fire",
      yuga: "All Yugas"
    }
  ],
  symbolic_meaning: {
    asura: "Asuras embody ignorance, ego, desires, and the forces of chaos in contrast to the Devas who represent wisdom, truth, and cosmic order.",
    spiritual_lesson: "The battles between Asuras and Devas are allegories for the internal struggle against vices such as pride, anger, greed, and ignorance. Divine avatars often incarnate to restore dharma and guide humanity."
  },
  scriptures_mentioning_asuras: [
    "Vedas", // Rigveda is a Veda
    "Ramayana",
    "Mahabharata",
    "Puranas", // Bhagavata Purana, Shiva Purana, Skanda Purana are Puranas
    "Other" // Devi Mahatmya
  ]
};

