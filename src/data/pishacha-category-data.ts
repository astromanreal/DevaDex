
import type { TextSource } from '@/lib/types';

export interface NotableMention {
  scripture: TextSource | string; // Allow string for specific tantras etc.
  reference: string;
}

export interface PishachaCategoryData {
  id: string;
  category: "Pishacha";
  description: string;
  origin: {
    mythic_origin: string;
    etymology: string;
    realm: string;
  };
  nature_and_traits: {
    alignment: string;
    attributes: string[];
    powers: string[];
    control: string;
  };
  symbolism_and_function: {
    symbolism: string;
    spiritual_lesson: string;
  };
  notable_mentions: NotableMention[];
  associated_deities_and_protection: {
    deities_invoked: string[];
    protective_mantras: string[];
  };
  behavior_and_habitat: {
    preferred_places: string[];
    behavior: string;
  };
  cultural_influence: {
    folk_traditions: string;
    regional_variants: string[];
  };
  comparative_mythology: {
    similar_beings: {
      [key: string]: string; // e.g., Vetala: "Description"
    };
  };
  external_links: {
    wikipedia: string;
    garuda_purana: string;
    kali_tantra: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

export const PISHACHA_CATEGORY_DATA: PishachaCategoryData = {
  id: "category_pishacha_01",
  category: "Pishacha",
  description: "Pishachas are flesh-eating, ghostly spirits in Hindu mythology. They are often associated with darkness, graveyards, and the perversion of the mind. Though typically malevolent, they can also be controlled or appeased through mantras and rituals.",
  imageUrl: "https://i.pinimg.com/736x/3a/10/e9/3a10e9fbb9ac5a42265bb39f36ff8f87.jpg",
  imageAiHint: "ghostly spirits dark forest",
  origin: {
    mythic_origin: "Some texts describe Pishachas as born from the mind of Brahma or from the darkness of the cosmos. Others say they emerged from the Asuras or Rakshasas.",
    etymology: "Derived from Sanskrit roots 'pish' (to devour) and 'acha' (to eat).",
    realm: "Primarily dwell in cremation grounds, forests, abandoned places, and battlefields."
  },
  nature_and_traits: {
    alignment: "Malevolent or neutral depending on appeasement",
    attributes: ["Invisible to the naked eye", "Shape-shifters", "Feed on flesh and energy", "Possess human minds"],
    powers: ["Inducing delusion", "Night wandering", "Possession", "Feeding on prana (life force)"],
    control: "They can be exorcised or appeased with Tantric rituals, mantras, and yajnas (sacrificial rites)."
  },
  symbolism_and_function: {
    symbolism: "Pishachas represent uncontrolled desires, fear of death, and psychic disturbances.",
    spiritual_lesson: "They are a reminder of the importance of purity, control over the mind, and protection through dharma and mantra."
  },
  notable_mentions: [
    {
      scripture: "Mahabharata",
      reference: "Pishachas are mentioned as part of battlefield spirits and are associated with night and darkness."
    },
    {
      scripture: "Other", // Manu Smriti is a Dharmashastra, categorised as 'Other' in TextSource
      reference: "Manu Smriti states that improper funeral rites can lead the deceased to become Pishachas."
    },
    {
      scripture: "Puranas", // Garuda Purana is a Purana
      reference: "Garuda Purana details the journey of the soul after death and the role of Pishachas in the netherworld."
    },
    {
      scripture: "Other", // Kali Tantra is not a mainstream epic/purana
      reference: "Kali Tantra includes rituals and mantras to control or ward off Pishachas."
    }
  ],
  associated_deities_and_protection: {
    deities_invoked: ["Kali", "Shiva", "Narasimha", "Bhairava", "Durga"],
    protective_mantras: [
      "Kavachas (armor prayers)",
      "Narasimha Mantra",
      "Bhairava Ashtakam",
      "Pishacha-nashak mantra from Atharva Veda"
    ]
  },
  behavior_and_habitat: {
    preferred_places: ["Cremation grounds", "Haunted ruins", "Deserted villages", "Battlefields"],
    behavior: "Attack at night, possess weak minds, create illusions, and disturb sadhakas (spiritual seekers)."
  },
  cultural_influence: {
    folk_traditions: "Pishachas are present in rural ghost stories and exorcism practices.",
    regional_variants: [
      "Similar to Vetalas in some traditions",
      "Considered akin to Bhutas (ghosts), but more dangerous"
    ]
  },
  comparative_mythology: {
    similar_beings: {
      "Vetala": "Undead spirit who inhabits corpses, more intelligent than Pishacha.",
      "Rakshasa": "Flesh-eating demon, more physical and warlike.",
      "Bhuta": "General term for spirits of the dead; Pishachas are more feared."
    }
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Pishacha",
    garuda_purana: "https://www.wisdomlib.org/hinduism/book/garuda-purana",
    kali_tantra: "https://sanskritdocuments.org/doc_tantra/kalitantra.html"
  }
};
