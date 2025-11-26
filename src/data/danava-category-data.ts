
import type { CharacterType, TextSource, Yuga } from '@/lib/types';

export interface NotableDanava {
  id: string; // Added for consistency, will be derived from name
  name: string;
  sanskritName?: string;
  type: CharacterType; // Should be 'Danava'
  traits: string[];
  deeds: string[];
  defeated_by?: string;
  symbolism: string;
  imageUrl: string;
  imageAiHint: string;
  yuga?: Yuga;
  isGood?: boolean; // To distinguish characters like Maya Danava
  epic?: TextSource; // Add epic if available per notable Danava
}

export interface DanavaCategoryData {
  id: string;
  category: "Danava";
  description: string;
  origin: {
    father: string;
    mother: string;
    siblings: string[];
    lore: string;
  };
  key_traits: string[];
  philosophical_symbolism: {
    dual_nature: string;
    spiritual_lessons: string;
  };
  notable_danavas: NotableDanava[];
  scriptural_references: TextSource[];
  associated_realms: {
    danava_kingdoms: string[];
    influence_zones: string[];
  };
  comparison: {
    danavas_vs_daityas: {
      note: string;
    };
    danavas_vs_devas: {
      devas: string;
      danavas: string;
    };
  };
  cultural_influence: {
    vedic_role: string;
    epic_impact: string;
    astrology: string;
  };
  external_links: {
    wikipedia: string;
    rigveda_reference: string;
    bhagavata_purana: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

const generateDanavaId = (name: string) => name.toLowerCase().replace(/\s+/g, '-').replace(/\(|\)/g, '');

export const DANAVA_CATEGORY_DATA: DanavaCategoryData = {
  id: "category_danava_01",
  category: "Danava",
  description: "Danavas are a race of powerful beings in Hindu mythology, born to the sage Kashyapa and his wife Danu. They are often associated with Asuras and frequently engage in battles with the Devas. While often cast as antagonists, some Danavas are wise and possess profound spiritual knowledge.",
  imageUrl: "https://i.pinimg.com/736x/c0/ed/45/c0ed45e3b9063b5cef47a43256e08d54.jpg",
  imageAiHint: "danava beings magic",
  origin: {
    father: "Kashyapa Rishi",
    mother: "Danu",
    siblings: ["Daityas (from Diti)", "Devas (step-siblings)", "Nagas", "Rakshasas"],
    lore: "Danavas are described in the Puranas and Vedic texts as ancient celestial beings who challenge the authority of the Devas but are essential in maintaining cosmic balance."
  },
  key_traits: ["Ambitious", "Magical", "Powerful", "Challengers of Devas", "Masters of Maya (illusion)"],
  philosophical_symbolism: {
    dual_nature: "Danavas represent the cosmic principle of necessary opposition, enabling growth and balance through conflict.",
    spiritual_lessons: "Arrogance leads to downfall, but knowledge and dharma can redeem."
  },
  notable_danavas: [
    {
      id: generateDanavaId("Viprachitti"),
      name: "Viprachitti",
      type: "Danava",
      traits: ["Wise", "Warrior", "Commander"],
      deeds: [
        "King of Danavas after Puloma",
        "Father of Rahu",
        "Led many wars against the Devas"
      ],
      symbolism: "Cosmic rivalry, strategic leadership",
      imageUrl: "https://i.pinimg.com/736x/4f/20/c5/4f20c5546d0409a772669225008adba9.jpg",
      imageAiHint: "danava king wise warrior",
      yuga: "All Yugas",
      epic: "Puranas"
    },
    {
      id: generateDanavaId("Puloman"),
      name: "Puloman",
      type: "Danava",
      traits: ["King", "First of the Danavas"],
      deeds: [
        "Father of Shachi (Indrani)",
        "Killed by Indra, who later married Shachi"
      ],
      defeated_by: "Indra",
      symbolism: "Conflict between Asura and Deva lineages",
      imageUrl: "https://i.pinimg.com/736x/82/cc/61/82cc61a14c8c83048d9677b953d56ad2.jpg",
      imageAiHint: "danava king ancient",
      yuga: "All Yugas",
      epic: "Puranas"
    },
    {
      id: generateDanavaId("Rahu"),
      name: "Rahu",
      type: "Danava",
      traits: ["Immortal head", "Cosmic eclipses", "Astrological influence"],
      deeds: [
        "Tried to drink Amrit (nectar of immortality)",
        "Beheaded by Mohini (Vishnu) but survived as head",
        "Causes solar and lunar eclipses"
      ],
      defeated_by: "Mohini (Vishnu)",
      symbolism: "Illusion, karma, consequences of deception",
      imageUrl: "https://i.pinimg.com/736x/2e/06/6f/2e066f3adadf09a5a199853b49e9992b.jpg",
      imageAiHint: "danava cosmic eclipse illusion",
      yuga: "All Yugas",
      epic: "Puranas"
    },
    {
      id: generateDanavaId("Ketu"),
      name: "Ketu",
      type: "Danava",
      traits: ["Body of Rahu", "Mystical force", "Spiritual detachment"],
      deeds: [
        "Represents spiritual evolution after Rahu's worldly desires",
        "Associated with comet and moksha in astrology"
      ],
      symbolism: "Detachment, mystical transformation",
      imageUrl: "https://i.pinimg.com/736x/5c/f4/74/5cf47479c32d7499c0119dc62e988aaf.jpg",
      imageAiHint: "danava mystical comet",
      yuga: "All Yugas",
      epic: "Puranas"
    },
    {
      id: generateDanavaId("Maya Danava"),
      name: "Maya Danava",
      type: "Danava",
      traits: ["Architect", "Magician", "Wise"],
      deeds: [
        "Built the Maya Sabha for the Pandavas",
        "Expert in illusions and engineering",
        "Father of Mandodari (Ravana's wife)"
      ],
      symbolism: "Mastery of illusion, art, and technology",
      imageUrl: "https://i.pinimg.com/736x/bc/b1/96/bcb196394231ef0323133b2ca5a317be.jpg",
      imageAiHint: "danava architect magic",
      yuga: "Dvapara Yuga",
      isGood: true, // Maya Danava is generally portrayed as a great artist/architect
      epic: "Mahabharata"
    },
    {
      id: generateDanavaId("Namuchi"),
      name: "Namuchi",
      type: "Danava",
      traits: ["Strong", "Boons of near immortality"],
      deeds: [
        "Could not be slain by anything wet or dry",
        "Killed by Indra using foam of water"
      ],
      defeated_by: "Indra",
      symbolism: "Limits of boons and clever fate",
      imageUrl: "https://i.pinimg.com/736x/2c/80/e6/2c80e69afb4618a8d7b8f1c4189200fb.jpg",
      imageAiHint: "danava strong immortal",
      yuga: "All Yugas",
      epic: "Vedas"
    }
  ],
  scriptural_references: [
    "Vedas", // Rigveda is a Veda
    "Mahabharata",
    "Puranas", // Covers Bhagavata, Vishnu, Devi Bhagavata Purana
    "Other" // Harivamsa
  ],
  associated_realms: {
    danava_kingdoms: ["Patala", "Talatal", "Danavapura"],
    influence_zones: ["Astral realms", "Tales of Maya and illusion"]
  },
  comparison: {
    danavas_vs_daityas: {
      note: "Danavas are children of Danu, often more mystical or illusion-oriented; Daityas come from Diti and are often more warlike and tyrannical."
    },
    danavas_vs_devas: {
      devas: "Light, order, dharma",
      danavas: "Challenge, darkness, ambition"
    }
  },
  cultural_influence: {
    vedic_role: "Appear in the Rigveda as primordial opponents of Indra",
    epic_impact: "Stories used to demonstrate divine triumph and complexity of dharma",
    astrology: "Rahu and Ketu play critical roles in Vedic astrology"
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Danava_(Hinduism)",
    rigveda_reference: "https://sacred-texts.com/hin/rigveda/index.htm",
    bhagavata_purana: "https://www.wisdomlib.org/hinduism/book/srimad-bhagavata-mahapurana"
  }
};
