
import type { TextSource } from '@/lib/types';

export interface NotableYakshaFigure {
  name: string;
  role: string;
  scriptures: (TextSource | string)[]; // scriptures where mentioned
  imageUrl: string; 
  imageAiHint: string; 
  description?: string; // A brief description if available
}

export interface YakshaCategoryData {
  id: string;
  category: "Yaksha";
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
    control_or_worship: string;
  };
  symbolism_and_function: {
    symbolism: string;
    spiritual_lesson: string;
  };
  notable_figures: NotableYakshaFigure[];
  notable_mentions: { 
    scripture: TextSource | string;
    reference: string;
  }[];
  associated_deities_and_protection: {
    deity_leader: string;
    other_associations: string[];
  };
  behavior_and_habitat: {
    preferred_places: string[];
    behavior: string;
  };
  cultural_influence: {
    art_and_architecture: string;
    folk_beliefs: string;
    regional_variants: string[];
  };
  comparative_mythology: {
    similar_beings: {
      [key: string]: string;
    };
  };
  external_links: {
    wikipedia: string;
    yaksha_prashna: string;
    kubera_info: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

export const YAKSHA_CATEGORY_DATA: YakshaCategoryData = {
  id: "category_yaksha_01",
  category: "Yaksha",
  description: "Yakshas are nature spirits, guardians of treasures hidden in the earth and tree roots. They are usually benevolent but can also be mischievous or malevolent depending on the context. Yakshas are closely associated with Kubera, the god of wealth.",
  imageUrl: "https://i.pinimg.com/736x/6f/fa/51/6ffa5138d17fbcf780e0da9b3656a434.jpg",
  imageAiHint: "nature spirits guardians treasure",
  origin: {
    mythic_origin: "Yakshas are said to have originated from the mind of Brahma or as attendants of Kubera, the lord of riches. They are among the ancient beings like Gandharvas and Apsaras.",
    etymology: "The Sanskrit word 'Yaksha' means 'a celestial being' or 'a nature spirit'.",
    realm: "Primarily inhabit forests, caves, mountains (especially Kailasa and Himalayas), and regions beneath the earth."
  },
  nature_and_traits: {
    alignment: "Mostly neutral or benevolent; can become malevolent if disturbed or disrespected.",
    attributes: ["Guardians of nature and treasures", "Associated with fertility and abundance", "Invisible or shape-shifting powers"],
    powers: ["Controlling natural elements", "Illusions", "Wealth protection", "Granting boons or curses"],
    control_or_worship: "Often propitiated in rural rituals, early Buddhist art, and through Kubera worship."
  },
  symbolism_and_function: {
    symbolism: "They symbolize the unseen forces of nature, the mystery of hidden wealth, and the duality of benevolence and wrath in nature spirits.",
    spiritual_lesson: "Yakshas represent the importance of living in harmony with nature and respecting the unseen forces of the world."
  },
  notable_figures: [
    {
      name: "Kubera",
      role: "King of the Yakshas and the god of wealth. Guardian of the North.",
      scriptures: ["Ramayana", "Mahabharata", "Puranas"],
      imageUrl: "https://i.pinimg.com/736x/15/5b/57/155b57a473d9bcf73c61f420ea9ff795.jpg",
      imageAiHint: "yaksha king wealth"
    },
    {
      name: "Sthunakarna",
      role: "A benevolent Yaksha who helped Shikhandi in the Mahabharata by transforming her into a man.",
      scriptures: ["Mahabharata"],
      imageUrl: "https://i.pinimg.com/736x/5d/59/ec/5d59ecfe7f148035ab4cee40aec3c9b2.jpg",
      imageAiHint: "yaksha benevolent spirit"
    },
    {
      name: "Yaksha of the Lake (Yaksha Prashna)",
      role: "A mysterious Yaksha who questioned Yudhishthira in a dharmic test of wisdom.",
      scriptures: ["Mahabharata"],
      imageUrl: "https://i.pinimg.com/736x/8e/a6/51/8ea65100743bcdfdaaf8aabd06d6f1c2.jpg",
      imageAiHint: "yaksha lake wisdom test"
    }
  ],
  notable_mentions: [
    {
      scripture: "Mahabharata",
      reference: "Yaksha Prashna episode where Yudhishthira is tested on dharma by a Yaksha."
    },
    {
      scripture: "Ramayana",
      reference: "Mentions Kubera as the ruler of the Yakshas and his residence in Lanka before Ravana."
    },
    {
      scripture: "Puranas",
      reference: "Various roles of Yakshas as protectors of treasures and sacred spaces."
    },
    {
      scripture: "Other", // Jataka Tales (Buddhist)
      reference: "Portray Yakshas in both helpful and fearsome roles."
    }
  ],
  associated_deities_and_protection: {
    deity_leader: "Kubera",
    other_associations: ["Shiva (as protector of sacred spaces)", "Vishnu (as protector of dharma)"]
  },
  behavior_and_habitat: {
    preferred_places: ["Forests", "Mountains", "Caves", "Sacred groves", "Hidden subterranean cities (e.g., Alaka)"],
    behavior: "Guard nature and treasures, test or bless spiritual aspirants, and protect dharmic locations."
  },
  cultural_influence: {
    art_and_architecture: "Yaksha and Yakshini statues are prominent in ancient Indian and Buddhist art (e.g., Mathura, Sanchi).",
    folk_beliefs: "Still revered in rural and tribal India as tree or forest spirits.",
    regional_variants: [
      "Tibetan Buddhist traditions also revere Yakshas as guardian spirits.",
      "In Jainism, Yakshas are protectors of Tirthankaras."
    ]
  },
  comparative_mythology: {
    similar_beings: {
      "Gandharva": "Celestial musicians; more artistic, while Yakshas are guardians.",
      "Rakshasa": "Generally malevolent, in contrast to the more neutral Yakshas.",
      "Deva": "Yakshas are semi-divine; Devas are higher celestial beings."
    }
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Yaksha",
    yaksha_prashna: "https://www.wisdomlib.org/hinduism/essay/yaksha-prashna",
    kubera_info: "https://www.wisdomlib.org/hinduism/book/the-skanda-purana/d/doc626099.html"
  }
};
