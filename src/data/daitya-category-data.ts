
import type { CharacterType, TextSource, Yuga } from '@/lib/types';

export interface NotableDaitya {
  id: string;
  name: string;
  sanskritName?: string;
  type: CharacterType; // Should be 'Daitya'
  epic?: string;
  traits: string[];
  deeds: string[];
  defeated_by?: string;
  symbolism: string;
  imageUrl: string;
  imageAiHint: string;
  yuga?: Yuga;
  isGood?: boolean; // To distinguish Prahlada and Bali
}

export interface DaityaCategoryData {
  id: string;
  category: "Daitya";
  description: string;
  origin: {
    father: string;
    mother: string;
    siblings: string[];
    lore: string;
  };
  key_traits: string[];
  philosophical_symbolism: {
    duality: string;
    spiritual_lesson: string;
  };
  notable_daityas: NotableDaitya[];
  scriptural_references: TextSource[];
  associated_realms: {
    daitya_kingdoms: string[];
    ruling_dynasties: string[];
  };
  comparison: {
    daityas_vs_devas: {
      devas: string;
      daityas: string;
    };
    daityas_vs_danavas: {
      note: string;
    };
  };
  cultural_influence: {
    festivals: string[];
    temples: string[];
  };
  external_links: {
    wikipedia: string;
    bhagavatam_reference: string;
    vishnu_purana_reference: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

export const DAITYA_CATEGORY_DATA: DaityaCategoryData = {
  id: "category_daitya_01",
  category: "Daitya",
  description: "Daityas are a powerful race of beings in Hindu mythology born to the sage Kashyapa and Diti. They are often portrayed as strong and ambitious opponents of the Devas (gods), engaging in cosmic battles over control of the universe. While many Daityas oppose dharma, some show great wisdom and devotion.",
  imageUrl: "https://i.pinimg.com/736x/e8/4a/f9/e84af98cc8990c764b3de74e20b7670d.jpg",
  imageAiHint: "powerful beings cosmic battle",
  origin: {
    father: "Kashyapa Rishi",
    mother: "Diti",
    siblings: ["Danavas", "Devas (step-siblings)", "Rakshasas (related lineage)"],
    lore: "Daityas are often considered Asuras and were born to challenge the dominance of the Devas. Their stories are deeply embedded in Puranic and Itihasic literature."
  },
  key_traits: ["Powerful", "Ambitious", "Magically adept", "Occasionally noble", "Cosmic rebels"],
  philosophical_symbolism: {
    duality: "Daityas symbolize the duality in the universe — the opposition that fuels cosmic balance.",
    spiritual_lesson: "Ego, pride, and misuse of power lead to downfall, but devotion can redeem even the mightiest."
  },
  notable_daityas: [
    {
      id: "hiranyakashipu", // Matches existing ID
      name: "Hiranyakashipu",
      sanskritName: "हिरण्यकशिपु",
      type: "Daitya",
      epic: "Bhagavata Purana",
      traits: ["Tyrant", "Egoistic", "Devoted to power"],
      deeds: [
        "Gained boon from Brahma to avoid death",
        "Persecuted his son Prahlada for being a devotee of Vishnu"
      ],
      defeated_by: "Narasimha (Vishnu's avatar)",
      symbolism: "Ego and false immortality",
      imageUrl: "https://i.pinimg.com/736x/ed/a0/50/eda050fb0cf8ccde69b232143d8b6165.jpg",
      imageAiHint: "daitya king tyrant",
      yuga: "Satya Yuga"
    },
    {
      id: "hiranyaksha", // Matches existing ID
      name: "Hiranyaksha",
      sanskritName: "हिरण्याक्ष",
      type: "Daitya",
      epic: "Bhagavata Purana",
      traits: ["Warrior", "Strong", "Devastating"],
      deeds: [
        "Stole the Earth and submerged it in the cosmic ocean",
        "Fought Vishnu in the Varaha avatar"
      ],
      defeated_by: "Varaha (Boar Avatar of Vishnu)",
      symbolism: "Chaos, elemental destruction",
      imageUrl: "https://i.pinimg.com/736x/3f/d3/39/3fd33995d79ec92cdebd7b5184b1e4df.jpg",
      imageAiHint: "daitya warrior earth ocean",
      yuga: "Satya Yuga"
    },
    {
      id: "mahabali", // Matches existing ID
      name: "Mahabali (Bali)",
      sanskritName: "महाबलि",
      type: "Daitya",
      epic: "Puranas",
      traits: ["Charitable", "Righteous", "Devoted"],
      deeds: [
        "Performed Ashwamedha Yajna to become ruler of all worlds",
        "Humbled by Vamana (Vishnu’s dwarf avatar)",
        "Sent to rule Sutala Loka (underworld) with divine blessings"
      ],
      defeated_by: "Vamana (Vishnu's avatar)",
      symbolism: "Ego humbled by divine grace, merit through charity",
      imageUrl: "https://i.pinimg.com/736x/8e/a5/0c/8ea50cf8987a60208a2bbed6aaf29821.jpg",
      imageAiHint: "daitya king charitable",
      yuga: "Treta Yuga",
      isGood: true,
    },
    {
      id: "andhaka-daitya", // Unique ID for this context
      name: "Andhaka",
      sanskritName: "अन्धक",
      type: "Daitya",
      epic: "Shiva Purana",
      traits: ["Blind", "Ignorant", "Desire-driven"],
      deeds: [
        "Desired Parvati and tried to abduct her",
        "Fought Shiva and was slain"
      ],
      defeated_by: "Shiva",
      symbolism: "Blind desire and ignorance of divine truth",
      imageUrl: "https://i.pinimg.com/736x/40/49/dc/4049dccd0689845f1cef3f1c0093bdd3.jpg",
      imageAiHint: "daitya blind desire",
      yuga: "All Yugas"
    },
    {
      id: "taraka-daitya", // Using 'tarakasura' id as they are likely the same character (Taraka Asura)
      name: "Taraka",
      sanskritName: "तारकासुर", // Assuming Tarakasura
      type: "Daitya", // Classified as Daitya here, Asura elsewhere
      epic: "Skanda Purana",
      traits: ["Powerful", "Boons from Brahma"],
      deeds: [
        "Terrorized Devas",
        "Could only be slain by Shiva’s son"
      ],
      defeated_by: "Kartikeya (Skanda)",
      symbolism: "Adharma, egoistic power",
      imageUrl: "https://i.pinimg.com/736x/a9/f4/16/a9f41683f6af41d3e74b258a8025f12a.jpg",
      imageAiHint: "daitya powerful boon",
      yuga: "All Yugas"
    }
  ],
  scriptural_references: [
    "Bhagavata Purana",
    "Vishnu Purana",
    "Shiva Purana",
    "Mahabharata",
    "Ramayana", // Indirect mentions
    "Other" // Smritis, regional Itihasas
  ],
  associated_realms: {
    daitya_kingdoms: ["Patala", "Hiranyapura", "Sutala"],
    ruling_dynasties: ["Hiranyaksha dynasty", "Bali's lineage"]
  },
  comparison: {
    daityas_vs_devas: {
      devas: "Upholders of cosmic order, divine law, light",
      daityas: "Challengers of order, agents of ego and power, often opposed to the Devas"
    },
    daityas_vs_danavas: {
      note: "Though often used interchangeably, Danavas are born from Danu (sister of Diti), while Daityas are from Diti."
    }
  },
  cultural_influence: {
    festivals: ["Onam (celebrates Mahabali’s yearly return to Earth)"],
    temples: ["Many Vishnu temples recall Narasimha's slaying of Hiranyakashipu"]
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Daitya",
    bhagavatam_reference: "https://vedabase.io/en/library/sb/7/",
    vishnu_purana_reference: "https://www.wisdomlib.org/hinduism/book/the-vishnu-purana"
  }
};
