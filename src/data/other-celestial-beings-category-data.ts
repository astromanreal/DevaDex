
import type { TextSource } from '@/lib/types';

export interface CelestialBeingType {
  name: string;
  description: string;
  traits: string[];
  association?: string[];
}

export interface ScripturalMention {
  text: TextSource | string;
  reference: string;
}

export interface OtherCelestialBeingsCategoryData {
  id: string;
  category: "Other Celestial Being";
  description: string;
  origin_and_nature: {
    types: CelestialBeingType[];
  };
  spiritual_roles: {
    guardians_of: string[];
    functions: string[];
    association_with_deities: string[];
  };
  scriptural_mentions: ScripturalMention[];
  symbolism: {
    represent: string[];
  };
  cultural_influence: {
    art_and_architecture: string;
    literature: string;
    regional_variants: {
      [key: string]: string;
    };
  };
  external_links: {
    wikipedia: string;
    apsaras: string;
    vidyadhara: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

export const OTHER_CELESTIAL_BEINGS_CATEGORY_DATA: OtherCelestialBeingsCategoryData = {
  id: "category_other_celestial_01",
  category: "Other Celestial Being",
  description: "This category includes celestial and semi-divine beings in Sanātana Dharma who possess supernatural abilities and play important roles in cosmic functions, divine narratives, or spiritual evolution but are distinct from Devas, Asuras, Yakshas, Rakshasas, and Gandharvas.",
  imageUrl: "https://i.pinimg.com/736x/f2/7c/5e/f27c5e69204c95e8f43e4bec64b5f20d.jpg",
  imageAiHint: "celestial beings ethereal",
  origin_and_nature: {
    types: [
      {
        name: "Siddhas",
        description: "Enlightened beings who have achieved spiritual perfection and supernatural powers (siddhis) through deep tapas (austerities) or devotion.",
        traits: ["Eternal", "Floating in air", "Wisdom keepers"],
        association: ["Shiva", "Saptarishis", "Kailasa"]
      },
      {
        name: "Charanas",
        description: "Heavenly bards and guardians of divine lore. They praise the gods and guard divine mysteries.",
        traits: ["Singers", "Wanderers", "Preservers of Vedic tradition"],
        association: []
      },
      {
        name: "Vidyadharas",
        description: "Celestial beings skilled in magical arts and flight. Often depicted as beautiful and wise.",
        traits: ["Magical", "Flying", "Graceful"],
        association: ["Kailasa", "Himalayas"]
      },
      {
        name: "Apsaras",
        description: "Celestial nymphs known for beauty and dance, often residing in Indra’s court.",
        traits: ["Enchanting", "Dancers", "Spiritual testers"],
        association: ["Indra", "Svarga"]
      },
      {
        name: "Kinnaras",
        description: "Part-human, part-horse/bird beings who are celestial musicians and dancers.",
        traits: ["Mythical", "Musicians", "Graceful"],
        association: []
      },
      {
        name: "Mahoragas",
        description: "Serpent-like celestial beings associated with music and the underworld (Patala).",
        traits: ["Half-snake", "Underworld dwellers", "Musicians"],
        association: []
      },
      {
        name: "Sadhyas",
        description: "A group of minor deities who dwell in the heavens and perform spiritual duties.",
        traits: ["Spiritually advanced", "Assist Devas", "Reside in the higher lokas"],
        association: []
      }
    ]
  },
  spiritual_roles: {
    guardians_of: ["Knowledge", "Heavenly realms", "Mystical arts", "Sacred rituals"],
    functions: ["Singing Vedic hymns", "Protecting dharma", "Testing rishis and kings", "Bestowing boons or warnings"],
    association_with_deities: ["Indra", "Shiva", "Vishnu", "Brahma"]
  },
  scriptural_mentions: [
    {
      text: "Mahabharata",
      reference: "Mentions of Siddhas, Charanas, Vidyadharas, and Apsaras in celestial assemblies."
    },
    {
      text: "Ramayana",
      reference: "Apsaras and Siddhas are seen witnessing divine events and battles."
    },
    {
      text: "Puranas",
      reference: "Detailed classifications and roles of Sadhyas, Mahoragas, and Kinnaras in creation myths."
    }
  ],
  symbolism: {
    represent: [
      "Spiritual mastery (Siddhas)",
      "Harmony of music and divinity (Gandharvas, Apsaras, Kinnaras)",
      "Guardianship of mystical truths (Charanas, Vidyadharas)",
      "Testing the worth of humans and sages (Apsaras, Sadhyas)"
    ]
  },
  cultural_influence: {
    art_and_architecture: "Depictions of Apsaras, Kinnaras, and Vidyadharas in temple sculptures across India and Southeast Asia.",
    literature: "Poetic references in classical Sanskrit literature like Kalidasa’s works.",
    regional_variants: {
      "Buddhism": "Siddhas, Vidyadharas, and Kinnaras have adapted forms in Vajrayana texts.",
      "Jainism": "Mentions celestial musicians and siddhas with slightly different metaphysics."
    }
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Siddha_(Hinduism)",
    apsaras: "https://en.wikipedia.org/wiki/Apsara",
    vidyadhara: "https://www.wisdomlib.org/definition/vidyadhara"
  }
};
