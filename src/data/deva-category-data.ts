
import type { TextSource } from '@/lib/types';

export interface MajorDeva {
  id: string; // Generated ID for potential future linking
  name: string;
  title: string;
  domain: string;
  symbolism: string;
  vehicle: string;
  weapon?: string;
  icon?: string; // Description of icon or a general keyword
  texts?: string[];
  association?: string;
  abode?: string;
  planet?: string;
  imageUrl: string; 
  imageAiHint: string; 
}

export interface DevaGroup {
  [key: string]: string; // e.g., Adityas: "description"
}

export interface DevaScripturalMention {
  text: TextSource | string;
  notes: string;
}

export interface DevaCategoryData {
  id: string;
  category: "Deva";
  description: string;
  origin_and_nature: {
    etymology: string;
    origin: string;
    opposite: string;
    loka: string;
  };
  core_roles: string[];
  major_devas: MajorDeva[];
  groups_and_classifications: DevaGroup;
  scriptural_mentions: DevaScripturalMention[];
  festivals: string[];
  symbolism: {
    represent: string[];
    worship_methods: string[];
  };
  external_links: {
    wikipedia: string;
    devas_rigveda: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

const generateDevaId = (name: string): string => name.toLowerCase().replace(/\s+/g, '-').replace(/\(|\)/g, '');

const devaImageMap: Record<string, string> = {
  "Indra": "https://i.pinimg.com/736x/33/27/28/33272885dd29d82ffcb1a3f4eea5594a.jpg",
  "Agni": "https://i.pinimg.com/736x/44/bc/b5/44bcb52a1ef3c6aef579fa26f2188626.jpg",
  "Varuna": "https://i.pinimg.com/736x/b1/3b/53/b13b53b884800244ed6a6d9d60f8c7c1.jpg",
  "Vayu": "https://i.pinimg.com/736x/78/91/1f/78911f2d05ccd668a2a3365ab07f699b.jpg",
  "Surya": "https://i.pinimg.com/736x/f3/b4/13/f3b41307196cb997fdeac78bbf4091d3.jpg",
  "Chandra": "https://i.pinimg.com/736x/a2/1a/8b/a21a8b75504f8f1bc7f9b7f1604869f6.jpg",
  "Kubera": "https://i.pinimg.com/736x/15/5b/57/155b57a473d9bcf73c61f420ea9ff795.jpg",
  "Yama": "https://i.pinimg.com/736x/aa/be/57/aabe579d80e311377dc14d67672f2feb.jpg",
  "Brihaspati": "https://i.pinimg.com/736x/c7/2b/74/c72b74ab25a323ed47fc37993f374154.jpg",
  "Ashvins": "https://i.pinimg.com/736x/b6/ed/2b/b6ed2b1055396e37b3c1973d15de925b.jpg",
  "Ganesha": "https://i.pinimg.com/736x/b8/42/30/b842300947243075f6e050061612e055.jpg",
  "Kartikeya": "https://i.pinimg.com/736x/71/0c/85/710c85026584b98121051f4deb4936f2.jpg"
};

const majorDevasInput: Omit<MajorDeva, 'id' | 'imageUrl' | 'imageAiHint'>[] = [
  {
    name: "Indra",
    title: "King of the Devas",
    domain: "Rain, thunderstorms, warfare",
    symbolism: "Strength, leadership, divine rulership",
    vehicle: "White elephant (Airavata)",
    weapon: "Vajra (thunderbolt)"
  },
  {
    name: "Agni",
    title: "God of Fire",
    domain: "Fire, purification, sacrifice",
    symbolism: "Messenger of gods (carrier of yajna offerings)",
    vehicle: "Ram",
    icon: "Two-headed with flames"
  },
  {
    name: "Varuna",
    title: "God of Waters and Cosmic Order",
    domain: "Oceans, law, moral order",
    symbolism: "Divine justice, cosmic surveillance",
    vehicle: "Makara (aquatic creature)"
  },
  {
    name: "Vayu",
    title: "God of Wind",
    domain: "Air, breath, life force (Prana)",
    symbolism: "Vitality, speed, strength",
    vehicle: "Antelope",
    association: "Father of Hanuman and Bhima"
  },
  {
    name: "Surya",
    title: "Sun God",
    domain: "Sunlight, vision, time, knowledge",
    symbolism: "Energy, consciousness, health",
    vehicle: "Chariot with 7 horses",
    texts: ["Aditya Hridayam", "Gayatri Mantra"]
  },
  {
    name: "Chandra",
    title: "Moon God",
    domain: "Mind, emotions, night, plants",
    symbolism: "Coolness, fertility, calmness",
    vehicle: "Chariot drawn by 10 white horses"
  },
  {
    name: "Kubera",
    title: "God of Wealth",
    domain: "Treasures, prosperity, guardian of the North",
    symbolism: "Divine abundance and guardianship",
    vehicle: "Man or boar",
    abode: "Alakapuri"
  },
  {
    name: "Yama",
    title: "God of Death",
    domain: "Afterlife, judgment, dharma",
    symbolism: "Justice, destiny",
    vehicle: "Buffalo",
    weapon: "Noose (Pasha)"
  },
  {
    name: "Brihaspati",
    title: "Guru of the Devas",
    domain: "Wisdom, devotion, divine counsel",
    symbolism: "Spiritual knowledge, discipline",
    planet: "Jupiter"
  },
  {
    name: "Ashvins",
    title: "Twin Healing Devas",
    domain: "Medicine, dawn, health",
    symbolism: "Cure, youth, renewal",
    vehicle: "Horse-drawn chariot"
  },
  {
    name: "Ganesha",
    title: "God of Beginnings, Wisdom, and Remover of Obstacles",
    domain: "Beginnings, wisdom, intellect, obstacles, arts, sciences",
    symbolism: "Wisdom, new beginnings, overcoming obstacles, good fortune",
    vehicle: "Mouse (Mushika)",
    weapon: "Axe (Parashu), Noose (Pasha), Goad (Ankusha)",
    texts: ["Ganesha Purana", "Puranas"],
    association: "Son of Shiva and Parvati"
  },
  {
    name: "Kartikeya",
    title: "God of War, Commander of the Devas",
    domain: "War, victory, courage, skill",
    symbolism: "Power, leadership, martial prowess, spiritual pursuit",
    vehicle: "Peacock (Mayura)",
    weapon: "Vel (Divine Spear)",
    texts: ["Skanda Purana", "Mahabharata", "Puranas"],
    association: "Son of Shiva and Parvati"
  }
];

export const DEVA_CATEGORY_DATA: DevaCategoryData = {
  id: "category_deva_01",
  category: "Deva",
  description: "Devas are celestial beings or gods in Sanātana Dharma responsible for maintaining cosmic order (Rta). They personify natural elements, moral virtues, and cosmic functions, and are often worshipped in Vedic and Puranic traditions.",
  imageUrl: "https://i.pinimg.com/736x/27/6f/13/276f138677e7bc200e88cb2f50c02091.jpg",
  imageAiHint: "celestial beings divine light",
  origin_and_nature: {
    etymology: "From Sanskrit 'div' meaning 'to shine' or 'to be radiant'.",
    origin: "Created by Brahma or emerged from Prakriti; belong to Svarga (heaven).",
    opposite: "Asuras (beings of ego, darkness, and imbalance)",
    loka: "Svargaloka (Indra's abode), governed by dharma and karma"
  },
  core_roles: [
    "Maintain cosmic balance and order (Rta)",
    "Personify elements like fire, water, wind, and sun",
    "Govern moral and natural laws",
    "Receive yajna (sacrifice) offerings from humans",
    "Act as intermediaries between humans and the Supreme"
  ],
  major_devas: majorDevasInput.map(deva => ({
    ...deva,
    id: generateDevaId(deva.name),
    imageUrl: devaImageMap[deva.name] || `https://picsum.photos/seed/${generateDevaId(deva.name)}/600/400`,
    imageAiHint: `${deva.title.toLowerCase().split(' ')[0]} god ${deva.domain.split(',')[0].toLowerCase()}`.trim(),
  })),
  groups_and_classifications: {
    "Adityas": "12 solar deities including Surya, Mitra, Varuna, Aryaman",
    "Vasus": "8 elemental deities including Agni, Vayu, Dyaus, Prithvi",
    "Rudras": "11 storm/wild gods, aspects of Shiva",
    "Maruts": "Wind/storm deities, companions of Indra",
    "Saptarishis": "Sometimes considered semi-divine"
  },
  scriptural_mentions: [
    {
      text: "Vedas",
      notes: "Earliest and primary hymns dedicated to Devas like Indra, Agni, Varuna"
    },
    {
      text: "Upanishads",
      notes: "Explain deeper symbolic meanings of Devas (e.g., Surya as the self)"
    },
    {
      text: "Mahabharata", // Assuming Bhagavad Gita is part of Mahabharata here
      notes: "Krishna describes Devas as forms of divine manifestations"
    },
    {
      text: "Puranas",
      notes: "Narrate stories, hierarchies, and battles of Devas (especially with Asuras)"
    }
  ],
  festivals: [
    "Makar Sankranti (Sun)",
    "Chhath Puja (Surya)",
    "Varuna Yajna",
    "Indra Puja (North-East India)",
    "Guru Purnima (Brihaspati)",
    "Ganesh Chaturthi (Ganesha)",
    "Skanda Shashti (Kartikeya)"
  ],
  symbolism: {
    represent: [
      "Natural elements and cosmic laws",
      "Divine principles (dharma, knowledge, power, wealth)",
      "Balance between material and spiritual realms"
    ],
    worship_methods: ["Yajnas", "Mantras", "Meditation", "Festivals"]
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Deva_(Hinduism)",
    devas_rigveda: "https://www.wisdomlib.org/hinduism/article/devas-in-the-veda"
  }
};
