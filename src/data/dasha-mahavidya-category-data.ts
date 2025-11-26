
import type { TextSource } from '@/lib/types';

export interface DashaMahavidyaGoddessEntry {
  id: string; // Character ID for linking
  name: string;
  sanskritName?: string;
  meaning: string;
  role: string; // Mapped from "aspect"
  significance: string; // Mapped from "symbolism" in original goddess entry
  depiction: string; // Mapped from "iconography"
  mantra: string;
  consort?: string;
  imageUrl: string;
  imageAiHint: string;
}

export interface DashaMahavidyaCategoryDataType {
  id: string;
  name: string; // Category name, e.g., "Dasha Mahavidya"
  type: string; // e.g., "Divine Wisdom Goddesses"
  origin: string;
  meaning: string;
  total_goddesses: number;
  description: string;
  philosophy: {
    introduction: string; // Added introduction to philosophy
    core_concepts: string[];
    spiritual_goal: string;
  };
  goddesses_overview: DashaMahavidyaGoddessEntry[]; // Array of individual goddesses
  rituals_and_worship: string;
  symbolism_in_art: string;
  significance_today: string;
  external_links: {
    wikipedia: string;
    wisdomlib_mahavidya: string;
  };
  imageUrl?: string; // Main category image
  imageAiHint?: string; // AI hint for main category image
}

const generateMahavidyaCharacterId = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[()']/g, '');
};

const dashaMahavidyaGoddessesInput = [
    {
      name: "Kali",
      meaning: "The Black One, Time",
      aspect: "Time, Death, Transformation",
      appearance: "Dark-skinned, fierce, with a garland of skulls, tongue out, and weapons in hand.",
      symbolism: "Destruction of ego and ignorance; ultimate reality beyond time.",
      iconography: "Stands on Shiva, wearing a garland of severed heads.",
      mantra: "ॐ क्रीं कालिकायै नमः",
      consort: "Shiva (lying beneath her feet)",
      imageUrl: "https://i.pinimg.com/736x/fb/cc/d8/fbccd871f595cd132555353036d953f2.jpg",
      imageAiHint: "goddess kali fierce dark"
    },
    {
      name: "Tara",
      meaning: "Savior, Star",
      aspect: "Compassion, Guidance, Protection",
      appearance: "Blue-skinned, standing in a dancing posture, with a sword and lotus.",
      symbolism: "Saves devotees from dangers and leads to liberation.",
      iconography: "Often shown crossing the ocean of samsara.",
      mantra: "ॐ ह्रीं तारे नमः",
      consort: "Akshobhya Buddha / Shiva",
      imageUrl: "https://i.pinimg.com/736x/d3/b0/14/d3b014f28d96aa423173100276efd97a.jpg",
      imageAiHint: "goddess tara blue savior"
    },
    {
      name: "Tripura Sundari (Shodashi)",
      meaning: "The Beautiful One of the Three Worlds",
      aspect: "Beauty, Bliss, Supreme Consciousness",
      appearance: "Young, radiant, seated on a lotus on Shiva's chest.",
      symbolism: "The ultimate union of Shiva and Shakti; the central deity of Sri Vidya tradition.",
      iconography: "Holds noose, goad, sugarcane bow, and flower arrows.",
      mantra: "ॐ श्रीं ह्रीं क्लीं सौः",
      consort: "Kameshvara (form of Shiva)",
      imageUrl: "https://i.pinimg.com/736x/44/95/c3/4495c32a1f58c739e2ff704895e7665e.jpg",
      imageAiHint: "goddess tripura sundari beauty"
    },
    {
      name: "Bhuvaneshwari",
      meaning: "Queen of the Universe",
      aspect: "Cosmic Space and Manifestation",
      appearance: "Golden-complexioned, with a calm and motherly demeanor.",
      symbolism: "Mother of the universe; creation and nurturing force.",
      iconography: "Seated on a throne, with crescent moon on forehead.",
      mantra: "ॐ ह्रीं नमः",
      consort: "Shiva",
      imageUrl: "https://i.pinimg.com/736x/20/5e/6f/205e6f28648b0638658f8271efcffa09.jpg",
      imageAiHint: "goddess bhuvaneshwari cosmic mother"
    },
    {
      name: "Bhairavi",
      meaning: "Terrifying One",
      aspect: "Discipline, Ascetic Power, Fierce Wisdom",
      appearance: "Red-complexioned, blazing eyes, adorned with skulls.",
      symbolism: "The force that compels transformation through suffering or tapas.",
      iconography: "Often shown in cremation grounds, seated on a lotus or corpse.",
      mantra: "ॐ भैरव्यै नमः",
      consort: "Bhairava (form of Shiva)",
      imageUrl: "https://i.pinimg.com/736x/51/c8/ac/51c8ac36ccb37a54df42aa2546bda452.jpg",
      imageAiHint: "goddess bhairavi fierce red"
    },
    {
      name: "Chhinnamasta",
      meaning: "She Who Cuts Her Own Head",
      aspect: "Self-sacrifice, Transformation, Life-force",
      appearance: "Decapitated, drinking her own blood, flanked by attendants.",
      symbolism: "Transcendence of dualities; life-death cycle and ego sacrifice.",
      iconography: "Three blood streams, one to herself and two to companions.",
      mantra: "ॐ ह्रीं चिन्नमस्तायै नमः",
      consort: "None explicitly, symbolic union of self",
      imageUrl: "https://i.pinimg.com/736x/77/c6/cc/77c6cce5180f47c44c52eaf58cbb1618.jpg",
      imageAiHint: "goddess chhinnamasta self sacrifice"
    },
    {
      name: "Dhumavati",
      meaning: "The Smoky One",
      aspect: "Void, Inauspiciousness, Hidden Wisdom",
      appearance: "Old, widowed, unattractive, riding a chariot with a crow emblem.",
      symbolism: "Emptiness, detachment, spiritual transcendence of worldly illusions.",
      iconography: "Carries a winnowing basket; symbol of renunciation.",
      mantra: "ॐ धूं धूं धूमावत्यै नमः",
      consort: "None (widowed aspect of Shakti)",
      imageUrl: "https://i.pinimg.com/736x/41/07/74/4107740563d0cf99cf69de3296dcd079.jpg",
      imageAiHint: "goddess dhumavati void smoky"
    },
    {
      name: "Bagalamukhi",
      meaning: "She Who Paralyzes Enemies",
      aspect: "Stillness, Power to Stop and Control",
      appearance: "Golden, wearing yellow, stopping an enemy's tongue.",
      symbolism: "Mastery over speech, mind, and adversaries.",
      iconography: "Pulls out the tongue of a demon while raising a cudgel.",
      mantra: "ॐ ह्लीं बगलामुख्यै नमः",
      consort: "Shiva (symbolic)",
      imageUrl: "https://i.pinimg.com/736x/ed/eb/2c/edeb2c909339fcdb85be19060917ce95.jpg",
      imageAiHint: "goddess bagalamukhi golden power"
    },
    {
      name: "Matangi",
      meaning: "Tantric Saraswati",
      aspect: "Speech, Music, Knowledge",
      appearance: "Emerald green, holding a veena, seated on a throne.",
      symbolism: "Divine speech, mystical arts, inner knowledge. Her acceptance of 'leftover' or 'polluted' offerings signifies that divine wisdom is accessible to all, regardless of social status or perceived purity.",
      iconography: "Similar to Saraswati but associated with the outcaste or boundary condition.",
      mantra: "ॐ ह्रीं ऐं क्लीं मतंग्यै नमः",
      consort: "None specified, associated with outcaste wisdom",
      imageUrl: "https://i.pinimg.com/736x/ec/cf/05/eccf053a239a492141dd9bc64500842c.jpg",
      imageAiHint: "goddess matangi green veena"
    },
    {
      name: "Kamala",
      meaning: "Lotus Goddess",
      aspect: "Wealth, Prosperity, Fortune",
      appearance: "Golden, seated on a lotus, flanked by elephants.",
      symbolism: "Embodiment of Lakshmi in her tantric form; material and spiritual abundance.",
      iconography: "Four arms holding lotus, granting boons, and blessings.",
      mantra: "ॐ श्रीं क्लीं कमलायै नमः",
      consort: "Vishnu",
      imageUrl: "https://i.pinimg.com/736x/bf/6a/26/bf6a26942d2c8cebac3ccb06cfec08b9.jpg",
      imageAiHint: "goddess kamala lotus wealth"
    }
];

const mappedGoddesses: DashaMahavidyaGoddessEntry[] = dashaMahavidyaGoddessesInput.map(g => ({
    id: generateMahavidyaCharacterId(g.name),
    name: g.name,
    sanskritName: g.name, // Assuming sanskrit name is same as name if not provided specifically
    meaning: g.meaning,
    role: g.aspect,
    significance: g.symbolism,
    depiction: g.iconography,
    mantra: g.mantra,
    consort: g.consort,
    imageUrl: g.imageUrl,
    imageAiHint: g.imageAiHint
}));

export const DASHA_MAHAVIDYA_CATEGORY_DATA: DashaMahavidyaCategoryDataType = {
  id: "dasha_mahavidya_01",
  name: "Dasha Mahavidya",
  type: "Divine Wisdom Goddesses",
  origin: "Tantric Shaktism, India",
  meaning: "Ten Great Wisdom Goddesses",
  total_goddesses: 10,
  description: "The Dasha Mahavidyas are ten powerful aspects of the Divine Mother (Adi Parashakti) in the Hindu tantric tradition. Each Mahavidya represents a facet of cosmic power and wisdom, from terrifying to benevolent forms, symbolizing spiritual evolution, liberation, and universal truth.",
  philosophy: {
    introduction: "The Dasha Mahavidyas represent diverse aspects of the singular Divine Feminine power. Their worship guides seekers through various stages of consciousness, from mundane existence to ultimate liberation.",
    core_concepts: [
      "Non-duality (Advaita)",
      "Divine Feminine Power (Shakti)",
      "Liberation (Moksha) through Wisdom",
      "Tantric worship and mystical transformation"
    ],
    spiritual_goal: "To understand the many forms of truth and reality, transcending dualities and attachments."
  },
  goddesses_overview: mappedGoddesses,
  rituals_and_worship: "Worship involves specific mantras, yantras, and rituals for each goddess, often seeking specific boons or spiritual insights.",
  symbolism_in_art: "Iconography is rich and complex, depicting fierce and benign forms with specific weapons, vehicles, and symbolic attributes.",
  significance_today: "Mahavidyas remain significant in Tantric practices and Shakta traditions, representing profound spiritual wisdom and empowerment.",
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Mahavidya",
    wisdomlib_mahavidya: "https://www.wisdomlib.org/definition/mahavidya"
  },
  imageUrl: "https://i.pinimg.com/736x/bd/38/e0/bd38e0d176616de2b990f7c110d350b3.jpg", 
  imageAiHint: "ten wisdom goddesses divine"
};
