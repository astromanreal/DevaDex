
import type { TextSource } from '@/lib/types';

export interface MajorForm {
  id?: string; // For linking to character page if available
  name: string;
  epithet: string;
  role: string;
  symbolism: string;
  iconography: string;
  forms?: string[]; // For Parvati
  worship?: string; // For Tripura Sundari
  imageUrl?: string; 
  imageAiHint?: string;
}

export interface DeviAvatarAndForm {
  id?: string; // For linking to character page if available
  name: string;
  role: string;
  story?: string;
  symbolism?: string;
  location?: string;
  imageUrl?: string;
  imageAiHint?: string;
}

export interface DeviScripturalSource {
  text: string; 
  description: string;
}

export interface DeviCategoryData {
  id: string; 
  category: "Devi";
  description: string;
  origin_and_cosmic_role: {
    supreme_form: string;
    philosophy: string;
    aspects: string[];
  };
  major_forms: MajorForm[];
  ten_mahavidyas: string[];
  avatars_and_forms: DeviAvatarAndForm[];
  scriptural_sources: DeviScripturalSource[];
  festivals: string[];
  symbolism_and_power: {
    core_ideas: string[];
  };
  external_links: {
    wikipedia: string;
    devibhagavatam: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

// Helper function to generate IDs from names for linking
const generateDeviId = (name: string): string => name.toLowerCase().replace(/\s+/g, '-').replace(/\(|\)/g, '');

export const DEVI_CATEGORY_DATA: DeviCategoryData = {
  id: "category_devi_01",
  category: "Devi",
  description: "Devi represents the Divine Feminine in Sanātana Dharma. She manifests in various forms—benign, fierce, motherly, and cosmic—symbolizing creation, preservation, and destruction.",
  imageUrl: "https://i.pinimg.com/736x/4e/6b/33/4e6b33b4983c6eb94de52d43a2a77228.jpg",
  imageAiHint: "divine feminine goddess cosmic",
  origin_and_cosmic_role: {
    supreme_form: "Adi Shakti",
    philosophy: "Shaktism regards Devi as the ultimate reality—Para Brahman in feminine form.",
    aspects: ["Creation", "Preservation", "Destruction", "Illusion (Maya)", "Liberation (Moksha)"]
  },
  major_forms: [
    {
      id: "durga", // Matched with existing character ID
      name: "Durga",
      epithet: "The Invincible One",
      role: "Warrior goddess who slays demons like Mahishasura",
      symbolism: "Power, protection, righteousness",
      iconography: "Riding a lion or tiger, armed with weapons from the gods",
      imageUrl: "https://i.pinimg.com/736x/e8/81/c4/e881c42a9fa3c51241df3c631f296d3d.jpg",
      imageAiHint: "goddess durga lion"
    },
    {
      id: "lakshmi", 
      name: "Lakshmi",
      epithet: "Goddess of Wealth",
      role: "Consort of Vishnu, brings prosperity and abundance",
      symbolism: "Wealth, fortune, spiritual purity",
      iconography: "Seated on a lotus, coins flowing from her palm",
      imageUrl: "https://i.pinimg.com/736x/fd/2b/cb/fd2bcbbdc0a22c84590cee754237c9dc.jpg",
      imageAiHint: "goddess lakshmi lotus gold"
    },
    {
      id: "saraswati", // Match existing character ID
      name: "Saraswati",
      epithet: "Goddess of Knowledge",
      role: "Embodiment of learning, music, and wisdom",
      symbolism: "Clarity, speech, creativity",
      iconography: "Holds veena, book, and rosary; rides a swan",
      imageUrl: "https://i.pinimg.com/736x/04/e6/76/04e6763e3eb403facc436af89b4f78de.jpg",
      imageAiHint: "goddess saraswati veena"
    },
    {
      id: "parvati", 
      name: "Parvati",
      epithet: "Mother of the Universe",
      role: "Consort of Shiva; divine mother",
      symbolism: "Love, devotion, fertility",
      forms: ["Annapurna", "Gauri", "Kali", "Durga"],
      iconography: "Gentle form seated with Shiva, or fierce as Kali",
      imageUrl: "https://i.pinimg.com/736x/96/ec/e0/96ece030d5ef9e4f025e80eee5e40efa.jpg",
      imageAiHint: "goddess parvati shiva"
    },
    {
      id: "kali", // Match existing character ID
      name: "Kali",
      epithet: "The Time Goddess",
      role: "Fierce destroyer of evil; liberator of souls",
      symbolism: "Death, time, liberation",
      iconography: "Dark-skinned, with garland of skulls, standing over Shiva",
      imageUrl: "https://i.pinimg.com/736x/1a/b4/91/1ab4916a8acaa4c9cd8470b711fc239d.jpg",
      imageAiHint: "goddess kali fierce dark"
    },
    {
      id: "tripurasundari", // Match existing character ID
      name: "Tripura Sundari",
      epithet: "Beauty of the Three Worlds",
      role: "Supreme aspect in Shakta tradition",
      symbolism: "Ultimate consciousness, balance of power and grace",
      worship: "Central figure in Sri Vidya and Tantra",
      iconography: "Holds noose, goad, sugarcane bow, and flower arrows.",
      imageUrl: "https://i.pinimg.com/736x/00/72/d0/0072d0b8a3ce5a22f8c393bcfdf805a5.jpg",
      imageAiHint: "goddess tripura sundari beauty"
    }
  ],
  ten_mahavidyas: [
    "Kali", "Tara", "Tripura Sundari", "Bhuvaneshwari", "Chhinnamasta",
    "Bhairavi", "Dhumavati", "Bagalamukhi", "Matangi", "Kamala"
  ],
  avatars_and_forms: [
    {
      id: generateDeviId("Sati"),
      name: "Sati",
      role: "First incarnation of Shakti, wife of Shiva",
      story: "Immolated herself after insult to Shiva by her father Daksha",
      imageUrl: "https://i.pinimg.com/736x/9a/aa/20/9aaa209a95031ac62725a14e39fadd20.jpg", 
      imageAiHint: "goddess sati shiva"
    },
    {
      id: generateDeviId("Radha"),
      name: "Radha",
      role: "Supreme love and energy of Krishna",
      symbolism: "Devotion and divine union",
      imageUrl: "https://i.pinimg.com/736x/16/f9/96/16f996174ec236d7a6f95a14f6b99b7a.jpg", 
      imageAiHint: "goddess radha krishna"
    },
    {
      id: generateDeviId("Meenakshi"),
      name: "Meenakshi",
      location: "Madurai",
      role: "Warrior queen goddess form of Parvati",
      imageUrl: "https://i.pinimg.com/736x/84/2b/76/842b76fe7a4d730371881b094ec8f0c0.jpg", 
      imageAiHint: "goddess meenakshi warrior"
    },
    {
      id: generateDeviId("Kamakhya"),
      name: "Kamakhya",
      location: "Assam",
      symbolism: "Fertility, Tantric wisdom",
      imageUrl: "https://i.pinimg.com/736x/cd/aa/ab/cdaaab03f3882565f71a2ca53920f97c.jpg", 
      imageAiHint: "goddess kamakhya tantric"
    }
  ],
  scriptural_sources: [
    {
      text: "Devi Mahatmyam (Durga Saptashati)",
      description: "Core Shakta scripture narrating her battles and divine glory"
    },
    {
      text: "Lalita Sahasranama",
      description: "1000 names of the goddess Lalita Tripura Sundari"
    },
    {
      text: "Devi Bhagavata Purana",
      description: "Text exclusively dedicated to various manifestations of Devi"
    }
  ],
  festivals: [
    "Navaratri", "Durga Puja", "Lakshmi Puja", "Saraswati Puja", "Kali Puja", "Vasant Panchami"
  ],
  symbolism_and_power: {
    core_ideas: [
      "Shakti is the active, dynamic principle of divine existence",
      "Devi is both compassionate mother and fierce protector",
      "She is the internal Kundalini energy in yogic systems"
    ]
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Devi",
    devibhagavatam: "https://www.wisdomlib.org/hinduism/book/devi-bhagavata-purana"
  }
};
