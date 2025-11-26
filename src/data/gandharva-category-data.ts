
export interface NotableGandharva {
  id: string; // Added id for linking
  name: string;
  role: string;
  associated_with: string;
  attributes: string[];
  scriptures: string[];
  symbolism: string;
  story?: string;
  imageUrl?: string; // Optional image
  imageAiHint?: string; // Optional AI hint
}

export interface GandharvaCategoryData {
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
  roles_and_functions: string[];
  notable_gandharvas: NotableGandharva[];
  related_beings: string[];
  related_concepts: string[];
  philosophy: {
    core_concepts: string[];
    aesthetic_ideal: string;
  };
  influence: {
    cultural: string;
    literary: string;
    spiritual: string;
  };
  external_links: {
    wikipedia: string;
    scripture_references: string[];
  };
  imageUrl?: string;
  imageAiHint?: string;
}

export const GANDHARVA_CATEGORY_DATA: GandharvaCategoryData = {
  id: "category_gandharva_01",
  category: "Gandharva",
  type: "Celestial Beings",
  origin: "Sanatan Dharma (Hinduism)",
  description: "Gandharvas are celestial musicians and singers in Hindu mythology. They inhabit the heavenly realms and serve in the courts of gods, particularly Indra. Known for their mastery in music, art, and dance, Gandharvas are considered guardians of Soma and divine knowledge. They are also intermediaries between gods and humans in some contexts.",
  symbolism: {
    attributes: ["Music", "Poetry", "Aesthetic knowledge", "Heavenly joy"],
    elements: ["Air", "Ether"],
    spiritual_significance: "Gandharvas symbolize higher pleasures of the mind, harmony, and devotion through artistic expression."
  },
  abode: ["Svarga (Heaven)", "Gandharva-loka"],
  associated_deities: ["Indra", "Saraswati", "Kubera"],
  festivals: ["Saraswati Puja (for music and arts)", "Ashada Ekadashi (music observances)"],
  roles_and_functions: [
    "Celestial musicians in Indra's court",
    "Messengers between gods and humans",
    "Custodians of Soma, the elixir of immortality",
    "Teachers of music and divine arts",
    "Guardians of sacred knowledge and lore"
  ],
  notable_gandharvas: [
    {
      id: "chitraratha",
      name: "Chitraratha",
      role: "Chief of the Gandharvas",
      associated_with: "Friend of Arjuna, teacher of divine music",
      attributes: ["Handsome", "Skilled in music and war", "Celestial charioteer"],
      scriptures: ["Mahabharata", "Vishnu Purana"],
      symbolism: "Harmony between valor and art",
      imageUrl: "https://i.pinimg.com/736x/ec/aa/3b/ecaa3bb2036fa9a68a538a0de023a9aa.jpg",
      imageAiHint: "gandharva chief musician"
    },
    {
      id: "tumburu",
      name: "Tumburu",
      role: "Gandharva musician par excellence",
      associated_with: "Sage Narada, Lord Shiva",
      attributes: ["Sage-like", "Deeply spiritual", "Divine singer"],
      scriptures: ["Padma Purana", "Bhagavata Purana"],
      symbolism: "Divine music, devotion through sound",
      imageUrl: "https://i.pinimg.com/736x/e0/33/79/e0337921a119f730fb3ddfcb922e0058.jpg",
      imageAiHint: "gandharva musician divine"
    },
    {
      id: "visvavasu",
      name: "Visvavasu",
      role: "One of the oldest Gandharvas",
      associated_with: "Narrator in some Upanishadic stories",
      attributes: ["Wise", "Celestial knowledge keeper"],
      scriptures: ["Chandogya Upanishad", "Mahabharata"],
      symbolism: "Celestial knowledge",
      imageUrl: "https://i.pinimg.com/736x/66/c3/96/66c3967b3befb6465fb322b6a9ba5b75.jpg",
      imageAiHint: "gandharva wise elder"
    },
    {
      id: "huhu",
      name: "Huhu",
      role: "Gandharva cursed to be a crocodile",
      story: "Freed from the curse by sage Rishi Gauthama (or in other versions, by a king)",
      associated_with: "Curse and Redemption stories",
      attributes: ["Transformed", "Redeemed"],
      scriptures: ["Puranas", "Mahabharata"],
      symbolism: "Cycle of karma and redemption",
      imageUrl: "https://i.pinimg.com/736x/9e/e6/67/9ee6671144a603cd144948f861f6470d.jpg",
      imageAiHint: "gandharva transformed being"
    }
  ],
  related_beings: ["Apsaras (celestial dancers)", "Yakshas", "Kinnaras"],
  related_concepts: [
    "Gandharva Veda (branch of Vedic knowledge on music and sound)",
    "Gandharva marriage (a form of love marriage described in Dharmashastras)",
    "Svarga-loka (heavenly plane)",
    "Soma (divine nectar guarded by Gandharvas)"
  ],
  philosophy: {
    core_concepts: [
      "Art as divine expression",
      "Harmony of senses and spirituality",
      "Role of music in elevating consciousness",
      "Intermediate states between mortal and divine"
    ],
    aesthetic_ideal: "Satyam-Shivam-Sundaram (Truth-Goodness-Beauty)"
  },
  influence: {
    cultural: "Inspired classical Indian music, dance, and mythology-based arts",
    literary: "Prominent in Sanskrit dramas, poetry, and temple lore",
    spiritual: "Referenced in yogic and Upanishadic paths of sound (Nada Yoga)"
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Gandharva",
    scripture_references: [
      "https://www.wisdomlib.org/definition/gandharva",
      "https://www.sacred-texts.com/hin/index.htm"
    ]
  },
  imageUrl: "https://i.pinimg.com/736x/a6/43/e5/a643e56c8eb395b537b4df8310a5b334.jpg",
  imageAiHint: "celestial musicians angel",
};
