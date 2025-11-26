
import type { TextSource } from '@/lib/types';

export interface NagaNotableNaga {
  id: string; // Added id for linking
  name: string;
  meaning: string;
  role: string;
  associated_with: string | string[];
  attributes: string[];
  abode: string;
  symbolism: string;
  scriptures: string[];
  imageUrl?: string; // Optional image for consistency
  imageAiHint?: string; // Optional AI hint
}

export interface NagaCategoryData {
  id: string;
  category: string;
  type: string;
  origin: string;
  description: string;
  symbolism: {
    attributes: string[];
    elements: string[];
    spiritual_significance: string;
  };
  abode: string[];
  associated_deities: string[];
  festivals: string[];
  notable_nagas: NagaNotableNaga[];
  related_concepts: string[];
  external_links: {
    wikipedia: string;
    scripture_references: string[];
  };
  imageUrl?: string;
  imageAiHint?: string;
}

const nagaImageMap: Record<string, string> = {
  "Shesha (Ananta)": "https://i.pinimg.com/736x/eb/e0/8d/ebe08dba213c871e05b2e174fede3362.jpg",
  "Vasuki": "https://i.pinimg.com/736x/92/95/32/929532958af95eb96d1e2d58fc94663a.jpg",
  "Takshaka": "https://i.pinimg.com/736x/02/28/7f/02287fd6620e9a8f854b58699ece19b1.jpg",
  "Karkotaka": "https://i.pinimg.com/736x/ee/57/7a/ee577a0eef2507aba52795fb39520dc2.jpg",
  "Padma": "https://i.pinimg.com/736x/44/c6/ae/44c6ae2fb859c9a70821a1027a07d1ab.jpg",
  "Manasa Devi": "https://i.pinimg.com/736x/02/87/16/028716b5423da200c5230665c3286ca0.jpg"
};

const notableNagasInput: Omit<NagaNotableNaga, 'id' | 'imageUrl' | 'imageAiHint'>[] = [
  {
    name: "Shesha (Ananta)",
    meaning: "The Endless One",
    role: "King of all Nagas, supporter of the universe",
    associated_with: "Lord Vishnu (bed of Vishnu in the cosmic ocean)",
    attributes: ["Thousand-headed", "Immortal", "Calm and wise"],
    abode: "Patala",
    symbolism: "Eternity, cosmic order",
    scriptures: ["Mahabharata", "Bhagavata Purana", "Vishnu Purana"],
  },
  {
    name: "Vasuki",
    meaning: "The Radiant One",
    role: "King of the Nagas after Shesha, used as the churning rope during Samudra Manthan",
    associated_with: ["Lord Shiva (garland)", "Devas and Asuras"],
    attributes: ["Powerful", "Loyal", "Protective"],
    abode: "Patala",
    symbolism: "Cooperation of opposites, strength",
    scriptures: ["Mahabharata", "Bhagavata Purana", "Devi Bhagavata"],
  },
  {
    name: "Takshaka",
    meaning: "One who can make poisonous",
    role: "Naga king who killed King Parikshit",
    associated_with: "Mahabharata (Kuru dynasty)",
    attributes: ["Vengeful", "Proud", "Powerful"],
    abode: "Takshashila",
    symbolism: "Justice, vengeance",
    scriptures: ["Mahabharata"],
  },
  {
    name: "Karkotaka",
    meaning: "Twisting Serpent",
    role: "Friend of King Nala, helped him regain identity",
    attributes: ["Wise", "Helpful", "Magical"],
    abode: "Naga-loka",
    symbolism: "Transformation and rebirth",
    scriptures: ["Mahabharata", "Nala-Damayanti story"],
  },
  {
    name: "Padma",
    meaning: "Lotus",
    role: "One of the prominent Nagas",
    attributes: ["Peaceful", "Associated with wealth"],
    abode: "Patala",
    symbolism: "Spiritual abundance",
    scriptures: ["Puranas"],
  },
  {
    name: "Manasa Devi",
    meaning: "Mind-born serpent goddess",
    role: "Goddess of snakes, fertility, and prosperity",
    attributes: ["Protective", "Powerful", "Venerated in Bengal"],
    abode: "Earth and water",
    symbolism: "Feminine protection and natural order",
    scriptures: ["Manasa Mangal", "Padma Purana"],
  }
];

const generateNagaId = (name: string): string => name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');

export const NAGA_CATEGORY_DATA: NagaCategoryData = {
  id: "category_naga_01",
  category: "Naga",
  type: "Mythical Beings",
  origin: "Sanatan Dharma (Hinduism)",
  description: "Nagas are semi-divine serpent beings in Hinduism, often associated with water bodies, fertility, protection, and hidden wisdom. They appear in various scriptures including the Mahabharata, Puranas, and Buddhist and Jain texts. While some Nagas are benevolent protectors of treasures and sages, others are fierce and must be propitiated.",
  symbolism: {
    attributes: ["Serpent power", "Hidden wisdom", "Guardians of the underworld", "Immortality", "Kundalini energy"],
    elements: ["Water", "Earth"],
    spiritual_significance: "Nagas symbolize the dormant energy (Kundalini) at the base of the spine in yogic traditions."
  },
  abode: ["Naga-loka", "Patala-loka", "Rivers", "Sacred lakes"],
  associated_deities: ["Vishnu", "Shiva", "Varuna", "Manasa Devi"],
  festivals: ["Nag Panchami", "Ananta Chaturdashi"],
  notable_nagas: notableNagasInput.map(naga => {
    const id = generateNagaId(naga.name);
    return {
      ...naga,
      id,
      imageUrl: nagaImageMap[naga.name] || `https://picsum.photos/seed/${id}/600/400`,
      imageAiHint: `naga serpent ${naga.name.toLowerCase().split(' ')[0]}`
    };
  }),
  related_concepts: [
    "Kundalini Shakti",
    "Patala-loka (netherworld)",
    "Samudra Manthan (churning of ocean)",
    "Naga Dosha (astrological serpent affliction)",
    "Sarpasatra (snake sacrifice)"
  ],
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Nāga",
    scripture_references: [
      "https://www.wisdomlib.org/definition/naga",
      "https://www.sacred-texts.com/hin/index.htm"
    ]
  },
  imageUrl: "https://i.pinimg.com/736x/7b/29/f5/7b29f5d279268cf24aa3da83dee91896.jpg",
  imageAiHint: "serpent deities mystical naga",
};
