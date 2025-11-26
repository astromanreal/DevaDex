
import type { CharacterType, TextSource } from '@/lib/types';

export interface NotablePrajapati {
  id: string; // Character ID for linking
  name: string;
  sanskrit_name: string;
  role: string; 
  significance: string; 
  symbolism: string;
  associated_chakra?: string;
  qualities?: string[];
  story?: string;
  mantra?: string;
  contribution?: string;
  vehicle?: string;
  associated_deity?: string | string[]; 
  consorts?: string[]; 
  children?: string[]; 
  associated_texts?: TextSource[]; 
  imageUrl: string;
  imageAiHint: string;
}

export interface PrajapatiCategoryData {
  id: string;
  category: "Prajapati";
  description: string;
  origin_and_role: {
    mythological_origin: string;
    primary_function: string;
    number_of_prajapatis: string;
  };
  notable_prajapatis: NotablePrajapati[];
  scriptural_mentions: {
    vedas: string;
    puranas: string;
    brahmanas: string;
  };
  symbolism: {
    cosmic_creation: string;
    progenitors: string;
    sacrifice: string;
  };
  external_links: {
    wikipedia: string;
    wisdomlib: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

const generateCharacterId = (name: string): string => {
  let cleanName = name;
  if (name.startsWith("Maharishi ")) {
    cleanName = name.substring("Maharishi ".length);
  } else if (name.startsWith("Rishi ")) {
    cleanName = name.substring("Rishi ".length);
  }
  return cleanName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
};

const prajapatiImageMap: Record<string, string> = {
  "Brahma": "https://i.pinimg.com/736x/40/df/68/40df680cdc40371c01f725d6f845fc70.jpg",
  "Daksha": "https://i.pinimg.com/736x/06/e6/8f/06e68fe06b2ecd9ad1e960f3ca65b19c.jpg",
  "Kashyapa": "https://i.pinimg.com/736x/80/f8/75/80f875d53ede1d2d3c73dd933ff9d9ca.jpg",
  "Angiras": "https://i.pinimg.com/736x/c9/77/07/c97707984b9840e4f694ba951ec3591b.jpg",
  "Marichi": "https://i.pinimg.com/736x/e5/d3/6f/e5d36f05d6f3e91be3e1aca222add553.jpg",
  "Vishvakarman": "https://i.pinimg.com/736x/f1/59/0a/f1590a4d2fd7d252916c19aa250f1acc.jpg",
  "Swayambhuva Manu": "https://i.pinimg.com/736x/f3/cf/d2/f3cfd2dc0f749982ba3e0f7c1f01ba0c.jpg"
};

const prajapatiInputData = [
  {
    name: "Brahma",
    sanskrit_name: "ब्रह्मा",
    role: "The Creator God",
    significance: "Brahma is one of the Trimurti, responsible for the creation of the universe and all living beings. He is often depicted with four faces, symbolizing the four Vedas.",
    symbolism: "Creation, Knowledge, Cosmic Power",
    associated_chakra: "Sahasrara (Crown Chakra)",
    qualities: ["Creative", "Wise", "Knowledgeable"],
    story: "Born from a lotus that emerged from Vishnu's navel, Brahma created the cosmos, the Saptarishis, and the Prajapatis to populate the world. His consort is Saraswati, the goddess of knowledge.",
    mantra: "ॐ ब्रह्मदेवाय नमः",
    contribution: "Author of the four Vedas, creator of the universe.",
    vehicle: "Swan (Hamsa)",
    associated_deity: ["Vishnu", "Shiva", "Saraswati"]
  },
  {
    name: "Daksha",
    sanskrit_name: "दक्ष",
    role: "The Able Progenitor",
    significance: "Daksha is a son of Brahma and one of the primary Prajapatis. He is known for fathering numerous daughters who became the mothers of gods, demons, and other beings.",
    symbolism: "Procreation, Ritual Order, Divine Lineage",
    associated_chakra: "Anahata (Heart Chakra)",
    qualities: ["Skillful", "Authoritative", "Proud"],
    story: "His most famous story is the Daksha Yajna (sacrifice), where he insulted Lord Shiva, leading to the self-immolation of his daughter Sati and the destruction of the yajna by Veerabhadra.",
    mantra: "ॐ दक्षाय नमः",
    contribution: "Progenitor of many key figures in Hindu mythology, establishing lineages.",
    vehicle: "None",
    associated_deity: ["Shiva", "Sati"]
  },
  {
    name: "Kashyapa",
    sanskrit_name: "कश्यप",
    role: "Father of All Beings",
    significance: "Kashyapa is one of the Saptarishis and a revered Prajapati. He is the father of Devas, Asuras, Nagas, and humanity through his marriages to the daughters of Daksha.",
    symbolism: "Cosmic Fatherhood, Creation, Preservation",
    associated_chakra: "Manipura (Solar Plexus Chakra)",
    qualities: ["Nurturing", "Wise", "Balanced"],
    story: "Through his wife Aditi, he fathered the Adityas (Devas). Through Diti, he fathered the Daityas (Asuras). He is a central figure in the Puranic genealogies.",
    mantra: "ॐ कश्यपाय नमः",
    contribution: "Progenitor of almost all life forms, contributing to cosmic balance.",
    vehicle: "None",
    associated_deity: ["Aditi", "Diti", "Vishnu (as Vamana's father)"]
  },
  {
    name: "Angiras",
    sanskrit_name: "अंगिरा",
    role: "The Radiant Sage",
    significance: "Angiras is a Saptarishi and Prajapati who is associated with fire and light. He is credited with authoring many hymns in the Rigveda and is the ancestor of the Angirasa clan.",
    symbolism: "Knowledge, Light, Fire Worship",
    associated_chakra: "Vishuddha (Throat Chakra)",
    qualities: ["Wise", "Luminous", "Poetic"],
    story: "He is a mind-born son of Brahma and is considered a great teacher of divine knowledge. Brihaspati, the guru of the gods, is his son.",
    mantra: "ॐ अंगिरसे नमः",
    contribution: "Authored hymns in the Rigveda and Atharvaveda.",
    vehicle: "None",
    associated_deity: ["Agni", "Brihaspati"]
  },
  {
    name: "Marichi",
    sanskrit_name: "मारिचि",
    role: "The Ray of Light",
    significance: "Marichi is one of the mind-born sons of Brahma and a Saptarishi. He is a key figure in the lineage of the sun god, Surya.",
    symbolism: "Illumination, Insight, Cosmic Law",
    associated_chakra: "Ajna (Third Eye Chakra)",
    qualities: ["Lustrous", "Visionary", "Dharmic"],
    story: "Marichi is the father of Kashyapa and the grandfather of Surya (in some accounts), establishing a critical celestial lineage. He represents the principle of cosmic light and order.",
    mantra: "ॐ मरीचये नमः",
    contribution: "Established key lineages and upheld cosmic order.",
    vehicle: "None",
    associated_deity: ["Surya", "Brahma"]
  },
  {
    name: "Vishvakarman",
    sanskrit_name: "विश्वकर्मा",
    role: "The Divine Architect",
    significance: "Vishvakarman is the celestial architect who designed and built the magnificent cities, palaces, and weapons for the gods.",
    symbolism: "Creation, Craftsmanship, Divine Artistry",
    associated_chakra: "Svadhisthana (Sacral Chakra)",
    qualities: ["Creative", "Skillful", "Innovative"],
    story: "He crafted Indra's Vajra, the city of Dwarka for Krishna, and the Pushpaka Vimana for Kubera. He is worshipped by artisans and craftsmen.",
    mantra: "ॐ विश्वकर्मणे नमः",
    contribution: "Architect of divine structures and celestial weapons.",
    vehicle: "Elephant",
    associated_deity: ["Indra", "Kubera"]
  },
  {
    name: "Swayambhuva Manu",
    sanskrit_name: "स्वायम्भुव मनु",
    role: "The First Man",
    significance: "Swayambhuva Manu is the first of the fourteen Manus (progenitors of humanity). He, along with his wife Shatarupa, are the ancestors of the human race.",
    symbolism: "Progenitor of Humankind, Lawgiver, Civilization",
    associated_chakra: "Muladhara (Root Chakra)",
    qualities: ["Just", "Wise", "Pioneering"],
    story: "Born from Brahma, he was given the responsibility of populating the Earth. He is also the author of the Manusmriti, an ancient text on social conduct and law.",
    mantra: "ॐ स्वायम्भुवाय मनवे नमः",
    contribution: "Progenitor of humanity and author of the Manusmriti.",
    vehicle: "None",
    associated_deity: ["Brahma", "Vishnu (as Matsya Avatar)"]
  }
];

const notablePrajapatisMapped: NotablePrajapati[] = prajapatiInputData.map(p => {
  const characterId = generateCharacterId(p.name);
  return {
    id: characterId, 
    name: p.name,
    sanskrit_name: p.sanskrit_name,
    role: p.role,
    significance: p.significance,
    symbolism: p.symbolism,
    associated_chakra: p.associated_chakra,
    qualities: p.qualities,
    story: p.story,
    mantra: p.mantra,
    contribution: p.contribution,
    vehicle: p.vehicle,
    associated_deity: p.associated_deity,
    imageUrl: prajapatiImageMap[p.name] || `https://picsum.photos/seed/${characterId}/600/400`,
    imageAiHint: `prajapati ${characterId} creation`,
    associated_texts: ['Puranas', 'Vedas']
  };
});

export const PRAJAPATI_CATEGORY_DATA: PrajapatiCategoryData = {
  id: "category_prajapati_01",
  category: "Prajapati",
  description: "Prajapatis are ancient Hindu deities presiding over procreation and protection of life. Considered 'Lord of Creatures', they are mind-born sons of Brahma, tasked with populating the universe. Their numbers and names vary across different scriptures.",
  imageUrl: "https://i.pinimg.com/736x/63/8a/1d/638a1de623ed627a077dc8dc4acfe446.jpg",
  imageAiHint: "progenitors creation cosmic beings",
  origin_and_role: {
    mythological_origin: "Mind-born sons (Manasaputras) of Brahma, created to assist in the process of creation.",
    primary_function: "To populate the universe, establish social order, and oversee the welfare of creatures.",
    number_of_prajapatis: "The number varies, often listed as seven, ten, or sixteen, depending on the text (e.g., Rigveda, Shatapatha Brahmana, Puranas)."
  },
  notable_prajapatis: notablePrajapatisMapped,
  scriptural_mentions: {
    vedas: "Mentioned in Rigveda and other Vedic texts as divine creators and lords of beings.",
    puranas: "Detailed genealogies and stories of Prajapatis are found in various Puranas like Vishnu Purana, Bhagavata Purana, and Shiva Purana.",
    brahmanas: "Shatapatha Brahmana and Taittiriya Brahmana elaborate on their role in sacrifices and creation."
  },
  symbolism: {
    cosmic_creation: "Represent the forces and beings involved in the manifestation of the universe.",
    progenitors: "Symbolize the lineage and ancestry of all forms of life.",
    sacrifice: "Prajapati is often identified with yajna (sacrifice) itself, as the cosmic being whose dismemberment leads to creation."
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Prajapati",
    wisdomlib: "https://www.wisdomlib.org/definition/prajapati"
  }
};
