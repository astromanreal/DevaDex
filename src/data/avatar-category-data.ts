
import type { TextSource } from '@/lib/types';

export interface AvatarEntry {
  id: string;
  name: string;
  type: "Shiva Avatar" | "Vishnu Avatar" | "Combined Avatar"; // Specific type of avatar
  parentDeity: string;
  purpose: string;
  scriptures: TextSource[];
  symbols: string[];
  description: string;
  imageUrl: string;
  imageAiHint: string;
}

export interface AvatarCategoryData {
  id: string;
  category: "Avatar"; // Fixed category name
  description: string;
  avatars: AvatarEntry[];
  imageUrl?: string;
  imageAiHint?: string;
}

const generateAvatarId = (name: string): string => `avatar-${name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`;

// New data provided by the user
const avatarInputData = [
  {
    name: "Hayagriva",
    type: "Partial Avatar", // Original type from user data
    purpose: "Restoration of Vedic knowledge",
    description: "Hayagriva, the horse-headed incarnation of Vishnu, appeared to retrieve the Vedas stolen by demons Madhu and Kaitabha. Symbolizing divine wisdom and knowledge, Hayagriva is revered especially by students and scholars.",
    iconography: "A human body with a horse head, holding Vedas, conch, discus, and a rosary",
    associated_texts: ["Devi Bhagavata Purana", "Mahabharata", "Panchatantra"] as string[],
    worshipped_for: ["Wisdom", "Memory", "Knowledge"],
    mantra: "ॐ श्री हयग्रीवाय नमः",
    status: "Still revered as a timeless form"
  },
  {
    name: "Mohini",
    type: "Avatar (Female Form)",
    purpose: "Deceiving demons during Samudra Manthan",
    description: "Mohini is the enchanting female form of Vishnu, who appeared to distribute Amrit (nectar of immortality) to the gods, deceiving the demons. She is also known for bewitching Lord Shiva in certain legends.",
    iconography: "A celestial woman of divine beauty, holding a pot of nectar",
    associated_texts: ["Bhagavata Purana", "Vishnu Purana", "Mahabharata"] as string[],
    worshipped_for: ["Divine illusion", "Balance of cosmic order"],
    mantra: "ॐ नमो मोहिन्यै नमः",
    status: "Occasional form for divine purpose"
  },
  {
    name: "Dattatreya",
    type: "Combined Avatar (Trimurti Form)",
    purpose: "Embodiment of Brahma, Vishnu, and Shiva",
    description: "Dattatreya is a unique incarnation combining the essence of Brahma, Vishnu, and Shiva. Revered as a guru of yoga and spirituality, he taught the path of detachment and self-realization.",
    iconography: "Three-headed deity with six arms, often accompanied by a cow and four dogs (Vedas)",
    associated_texts: ["Avadhuta Gita", "Tripura Rahasya", "Bhagavata Purana"] as string[],
    worshipped_for: ["Spiritual wisdom", "Liberation"],
    mantra: "ॐ दत्तात्रेयाय नमः",
    status: "Active spiritual force in many traditions"
  },
  {
    name: "Narada",
    type: "Partial Avatar (Sage)",
    purpose: "Spiritual guidance, spreading devotion",
    description: "Narada is a divine sage and messenger of the gods, known for spreading the name of the Lord through devotion, music, and stories. Considered a form of Vishnu with the mission of divine leela and bhakti propagation.",
    iconography: "Divine sage with a veena, wearing simple attire, always chanting 'Narayana'",
    associated_texts: ["Narada Bhakti Sutra", "Mahabharata", "Bhagavata Purana"] as string[],
    worshipped_for: ["Bhakti", "Music", "Wisdom"],
    mantra: "नारायण नारायण",
    status: "Chiranjivi (immortal sage)"
  },
  {
    name: "Rishabha Deva",
    type: "Avatar (Yogic/Spiritual Incarnation)",
    purpose: "Establishing renunciation and self-discipline",
    description: "Rishabha was an ancient king and yogi, considered an incarnation of Vishnu who preached asceticism and spiritual discipline. Revered also in Jain tradition as the first Tirthankara.",
    iconography: "Naked ascetic in meditative posture",
    associated_texts: ["Bhagavata Purana", "Jain Texts"] as string[],
    worshipped_for: ["Renunciation", "Discipline", "Detachment"],
    mantra: "ॐ ऋषभाय नमः",
    status: "Respected in both Vaishnav and Jain traditions"
  },
  {
    name: "Yajna",
    type: "Avatar (Sacrificial Form)",
    purpose: "Restoring sacrificial duties and dharma",
    description: "Yajna is a Vedic avatar who presided over sacrifices during the Swayambhuva Manvantara. He restored order when dharma declined during that era.",
    iconography: "Divine being with sacrificial fire attributes",
    associated_texts: ["Bhagavata Purana", "Vishnu Purana"] as string[],
    worshipped_for: ["Yajna-related rituals", "Balance of dharma"],
    mantra: "ॐ यज्ञाय नमः",
    status: "Symbolic of sacrificial principles"
  },
  {
    name: "Hamsa",
    type: "Spiritual Avatar",
    purpose: "Teaching Brahma the path to liberation",
    description: "Hamsa, the swan incarnation of Vishnu, appeared to answer deep metaphysical questions of Brahma, representing pure knowledge and discrimination (viveka).",
    iconography: "Swan or radiant sage with swan features",
    associated_texts: ["Bhagavata Purana"] as string[],
    worshipped_for: ["Spiritual insight", "Viveka (discrimination)"],
    mantra: "ॐ हंसाय नमः",
    status: "Symbolic and spiritual avatar"
  },
  {
    name: "Kapila",
    type: "Sage Avatar",
    purpose: "Teaching Sankhya Philosophy",
    description: "Kapila Muni is regarded as a divine incarnation of Vishnu who expounded the philosophy of Sankhya, one of the six classical schools of Hindu philosophy focusing on dualism and analytical knowledge.",
    iconography: "Ascetic sage in meditation posture with fire or sun imagery",
    associated_texts: ["Bhagavata Purana", "Sankhya Sutras"] as string[],
    worshipped_for: ["Philosophical knowledge", "Detachment"],
    mantra: "ॐ कपिलाय नमः",
    status: "Revered in philosophical and yogic circles"
  }
];

const validTextSources: ReadonlyArray<TextSource> = [
  'Vedas', 'Puranas', 'Upanishads', 'Ramayana', 'Mahabharata', 'Other',
  'Shiva Purana', 'Skanda Purana', 'Linga Purana', 'Kalika Purana',
  'Devi Bhagavata Purana', 'Jain Texts', 'Markandeya Purana',
  'Bhagavata Purana', 'Agni Purana', 'Vishnu Purana'
];

const mapScriptures = (texts: string[]): TextSource[] => {
  return texts.map(text => {
    if (validTextSources.includes(text as TextSource)) {
      return text as TextSource;
    }
    if (text === "Panchatantra" || text === "Avadhuta Gita" || text === "Tripura Rahasya" || text === "Narada Bhakti Sutra" || text === "Jain Agamas" || text === "Sankhya Sutras") {
      return "Other";
    }
    return "Other";
  }).filter((value, index, self) => self.indexOf(value) === index) as TextSource[];
};

const avatarImageMap: Record<string, string> = {
  "Veerabhadra": "https://example.com/veerabhadra.jpg", // Placeholder, replace with actual if available
  "Bhairava": "https://example.com/bhairava.jpg", // Placeholder
  "Ardhanarishvara": "https://example.com/ardhanarishvara.jpg", // Placeholder
  "Nataraja": "https://example.com/nataraja.jpg", // Placeholder
  "Harihara": "https://example.com/harihara.jpg", // Placeholder
  "Hayagriva": "https://i.pinimg.com/736x/2b/0f/27/2b0f279de67254da7372e3ae46f76f4c.jpg",
  "Mohini": "https://i.pinimg.com/736x/1d/b4/a3/1db4a31d37674585af0b19c70294da53.jpg",
  "Dattatreya": "https://i.pinimg.com/736x/2b/51/f6/2b51f60e256ccdf444a3cef0d0c491e4.jpg",
  "Narada": "https://i.pinimg.com/736x/96/ef/d6/96efd64c5fb48054dd299a4f24b26a9b.jpg",
  "Rishabha Deva": "https://i.pinimg.com/736x/f2/97/ca/f297ca07e79806581d1b9ac3fe15e56d.jpg",
  "Yajna": "https://i.pinimg.com/736x/4f/b3/56/4fb35672982062ca7e434562f57f4e47.jpg",
  "Hamsa": "https://i.pinimg.com/736x/3d/b0/42/3db042fe41cb7f62a16d3a22e13b879f.jpg",
  "Kapila": "https://i.pinimg.com/736x/07/88/3f/07883fb8d5511cf80e37b67794670de1.jpg"
};


const mappedAvatars: AvatarEntry[] = avatarInputData.map(avatar => {
  let mappedType: AvatarEntry['type'] = "Vishnu Avatar";
  let parentDeity: string = "Vishnu";

  if (avatar.name === "Dattatreya") {
    mappedType = "Combined Avatar";
    parentDeity = "Trimurti";
  } else if (avatar.type.includes("Shiva")) {
    mappedType = "Shiva Avatar";
    parentDeity = "Shiva";
  }


  return {
    id: generateAvatarId(avatar.name),
    name: avatar.name,
    type: mappedType,
    parentDeity: parentDeity,
    purpose: avatar.purpose,
    scriptures: mapScriptures(avatar.associated_texts),
    symbols: avatar.worshipped_for,
    description: `${avatar.description} Iconography: ${avatar.iconography}. Status: ${avatar.status}. Mantra: ${avatar.mantra}`,
    imageUrl: avatarImageMap[avatar.name] || `https://picsum.photos/seed/${generateAvatarId(avatar.name)}/600/400`,
    imageAiHint: `${parentDeity.toLowerCase()} avatar ${avatar.name.toLowerCase()}`.trim(),
  };
});

export const AVATAR_CATEGORY_DATA: AvatarCategoryData = {
  id: "category_avatar_general_01",
  category: "Avatar",
  description: "Avatars are incarnations of deities, particularly Vishnu and Shiva, who descend to Earth to restore Dharma, protect the virtuous, and guide humanity. This category explores various avatars beyond the well-known Dashavataras or specific Shiva manifestations.",
  avatars: mappedAvatars,
  imageUrl: "https://i.pinimg.com/736x/27/1c/a8/271ca8217ecb74454c017730ed2e8e0d.jpg",
  imageAiHint: "divine incarnation deity avatar"
};
