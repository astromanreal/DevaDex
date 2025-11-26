
import type { CharacterType, TextSource, Yuga } from '@/lib/types';

export interface DashavatarIconography {
  color: string;
  features: string;
  posture: string;
}

export interface DashavatarEntry {
  id: string;
  name: string;
  sanskrit_name: string;
  meaning: string;
  avatar_order: string;
  yuga: Yuga;
  type: string; 
  form: string;
  symbolism: string;
  associated_texts: TextSource[];
  role: string;
  key_story: string;
  weapon: string | null;
  associated_deity: string;
  consort: string | null;
  adversaries: string[];
  philosophical_insight: string;
  artifacts: string[];
  region_associated: string[];
  depiction: string;
  temples: string[];
  alternate_versions: string[];
  iconography: DashavatarIconography;
  imageUrl: string;
  imageAiHint: string;
}

export interface DashavatarCategoryData {
  id: string;
  category: "Dashavatar";
  description: string;
  meaning: string;
  philosophy: {
    core_concept: string;
    purpose: string;
  };
  avatars: DashavatarEntry[];
  scriptural_references: TextSource[];
  symbolism: string;
  worship_and_festivals: string[];
  external_links: {
    wikipedia: string;
    puranic_references: string;
  };
  imageUrl: string;
  imageAiHint: string;
}

const generateId = (name: string): string => name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');

const avatarImageMap: Record<string, string> = {
  "Matsya": "https://i.pinimg.com/736x/4a/72/9a/4a729ad75d1f0b16c9d543df5f592ee2.jpg",
  "Kurma": "https://i.pinimg.com/736x/83/60/50/83605098689d6e62e53885687c8b958a.jpg",
  "Varaha": "https://i.pinimg.com/736x/75/e6/98/75e698f8456ed3f72fcd3e2c04b07915.jpg",
  "Narasimha": "https://i.pinimg.com/736x/ba/19/59/ba1959084adc192732476ff1e726bd77.jpg",
  "Vamana": "https://i.pinimg.com/736x/10/c1/cf/10c1cf24f5cbdb9277686265d5990f74.jpg",
  "Parashurama": "https://i.pinimg.com/736x/01/20/54/0120541f22227d6851a88a6ac838ff9e.jpg",
  "Rama": "https://i.pinimg.com/736x/6c/d3/ce/6cd3ce2e82893b36974f9c2915968977.jpg",
  "Krishna": "https://i.pinimg.com/736x/71/3d/98/713d987c956dc97f8ce245e6d3f3f270.jpg",
  "Buddha": "https://i.pinimg.com/736x/2f/2f/5a/2f2f5a421122582d6f251feb49cba9be.jpg",
  "Kalki": "https://i.pinimg.com/736x/9f/6c/f6/9f6cf61d16cdba9a23b168dd74b0995f.jpg"
};

const dashavatarJsonData = {
  "dashavatara": [
    { "id": 1, "name_en": "Matsya", "name_sanskrit": "मत्स्य", "order": 1, "yuga_association": "Satya Yuga", "role_summary": "The fish incarnation who rescues Manu and the Vedas from a great flood.", "primary_texts": ["Bhagavata Purana", "Matsya Purana", "Padma Purana"], "symbolism": ["salvation from deluge", "preservation of sacred knowledge (the Vedas)"], "iconography": "Human torso above, fish below, sometimes shown carrying Manu or a sankha (conch) / book.", "common_legends": "Saves Manu by guiding his boat through the pralaya (flood); later reveals that the little fish is Viṣṇu grown large." },
    { "id": 2, "name_en": "Kurma", "name_sanskrit": "कूर्म", "order": 2, "yuga_association": "Satya Yuga", "role_summary": "The tortoise incarnation who supports the churning of the cosmic ocean (Samudra-manthana).", "primary_texts": ["Bhagavata Purana", "Mahabharata", "Vishnu Purana", "Agni Purana"], "symbolism": ["cosmic stability", "supporting the world / axis mundi"], "iconography": "Half-tortoise, often shown supporting Mount Mandara used in Samudra-manthana.", "common_legends": "Supports the mountain used by gods and demons to churn the ocean to obtain amṛta (nectar of immortality)." },
    { "id": 3, "name_en": "Varaha", "name_sanskrit": "वराह", "order": 3, "yuga_association": "Satya Yuga", "role_summary": "The boar incarnation who rescues the Earth (Prithvi/Bhudevi) from the demon Hiranyaksha.", "primary_texts": ["Bhagavata Purana", "Varaha Purana", "Mahabharata", "Vishnu Purana"], "symbolism": ["restoration of cosmic order", "earth’s rescue and stabilization"], "iconography": "Boar-headed being, lifting the Earth or standing on a demon; often carries gada (mace).", "common_legends": "Defeats Hiranyaksha who had hidden the Earth in primordial waters; recovers Bhudevi." },
    { "id": 4, "name_en": "Narasimha", "name_sanskrit": "नरसिंह", "order": 4, "yuga_association": "Satya Yuga", "role_summary": "The man-lion form who destroys the oppressive king Hiranyakashipu to protect his devotee Prahlada.", "primary_texts": ["Bhagavata Purana", "Vishnu Purana", "Mahabharata"], "symbolism": ["divine fury against adharma", "divine protection of the devotee"], "iconography": "Man-lion depicted tearing demon apart or emerging from pillar.", "common_legends": "Appears from a pillar, kills Hiranyakashipu at twilight on the threshold, demonstrating divine ingenuity to circumvent boons." },
    { "id": 5, "name_en": "Vamana", "name_sanskrit": "वामन", "order": 5, "yuga_association": "Treta Yuga", "role_summary": "The dwarf Brahmin who reclaims the cosmos from the demon-king Bali in three strides.", "primary_texts": ["Bhagavata Purana", "Mahabharata", "Vishnu Purana"], "symbolism": ["humility concealing supreme power", "restoration of cosmic order"], "iconography": "Dwarf Brahmin initially, then cosmic Trivikrama (gigantic universal form), often with umbrella and kamandalu (water pot).", "common_legends": "Asked Bali for three paces of land, then expanded to cover earth, heavens and the cosmos." },
    { "id": 6, "name_en": "Parashurama", "name_sanskrit": "परशुराम", "order": 6, "yuga_association": "Treta Yuga", "role_summary": "The axe-wielding warrior-sage who destroys corrupt kshatriya rulers.", "primary_texts": ["Bhagavata Purana", "Mahabharata", "Vishnu Purana", "Ramayana"], "symbolism": ["purifying violence to remove tyranny", "dual identity: ascetic and warrior"], "iconography": "Brahmin sage with axe (parashu), sometimes depicted with matted hair and ascetic garb but holding weapons.", "common_legends": "Kills corrupt warrior clans 21 times; interacts with Rama and Bhishma." },
    { "id": 7, "name_en": "Rama", "name_sanskrit": "राम", "order": 7, "yuga_association": "Treta Yuga", "role_summary": "The ideal king, husband, and dharma-upholder — central hero of the Rāmāyaṇa.", "primary_texts": ["Ramayana", "Bhagavata Purana", "Vishnu Purana"], "symbolism": ["dharma and ideal human conduct", "kingly authority and moral exemplarity"], "iconography": "Royal prince with bow (kodanda), often with Sita, Lakshmana and Hanuman; blue-skinned.", "common_legends": "Exile, Sīta’s abduction by Rāvaṇa, war in Laṅkā, and Rāma’s return and coronation." },
    { "id": 8, "name_en": "Krishna", "name_sanskrit": "कृष्ण", "order": 8, "yuga_association": "Dvapara Yuga", "role_summary": "Divine cowherd, statesman, charioteer and speaker of the Bhagavad Gītā.", "primary_texts": ["Mahabharata (Bhagavad Gita)", "Bhagavata Purana", "Harivamsa", "Vishnu Purana"], "symbolism": ["divine play (līla)", "love (prema) and devotion (bhakti)"], "iconography": "Young cowherd boy with flute (bānsuri), or royal form with discus (cakra); blue/black complexion.", "common_legends": "Childhood in Vrindavan, role in Mahābhārata as Arjuna’s charioteer and teacher." },
    { "id": 9, "name_en": "Buddha", "name_sanskrit": "बुद्ध", "order": 9, "yuga_association": "Kali Yuga", "role_summary": "Incarnation who taught a path that diverted beings from Vedic ritual.", "primary_texts": ["Puranas (Padma Purana, Garuda Purana)"], "symbolism": ["compassion and renunciation", "syncretism between Hinduism and Buddhism"], "iconography": "Mendicant figure in meditative posture.", "common_legends": "Puranic texts depict Buddha-avatar as appearing to mislead asuras or to lead people away from Vedic sacrifices." },
    { "id": 10, "name_en": "Kalki", "name_sanskrit": "कल्कि", "order": 10, "yuga_association": "Kali Yuga (future)", "role_summary": "The future warrior avatar who will appear at the end of Kali Yuga on a white horse.", "primary_texts": ["Bhagavata Purana", "Vishnu Purana", "Kalki Purana"], "symbolism": ["cosmic renewal and cyclical time", "end-of-age deliverance"], "iconography": "Rider on a white horse with sword, radiantly armed.", "common_legends": "Prophecies describe Kalki born to a brahmana family, ending corruption at the end of Kali Yuga." }
  ]
};

const mapJsonToDashavatarEntry = (item: any): Omit<DashavatarEntry, 'id' | 'imageUrl' | 'imageAiHint'> => {
  const meanings: Record<string, string> = {
      "Matsya": "The Fish", "Kurma": "The Tortoise", "Varaha": "The Boar", "Narasimha": "The Man-Lion",
      "Vamana": "The Dwarf Brahmin", "Parashurama": "Rama with the Axe", "Rama": "The Virtuous King",
      "Krishna": "The Dark One / All-Attractive", "Buddha": "The Enlightened One", "Kalki": "The Destroyer of Foulness"
  };
  
  return {
    name: item.name_en,
    sanskrit_name: item.name_sanskrit,
    meaning: meanings[item.name_en] || "Divine Incarnation",
    avatar_order: `${item.order}${['st', 'nd', 'rd'][item.order - 1] || 'th'}`,
    yuga: item.yuga_association.split(' ')[0] + " Yuga" as Yuga,
    type: "Full Avatar", // Simplified for now, can be enriched further
    form: item.iconography.split(',')[0],
    symbolism: item.symbolism.join(', '),
    associated_texts: item.primary_texts.map((t:string) => t.split(' ')[0] as TextSource),
    role: item.role_summary,
    key_story: item.common_legends,
    weapon: null, // This can be enriched from iconography text
    associated_deity: "Vishnu",
    consort: null, // Can be enriched
    adversaries: [], // Can be enriched
    philosophical_insight: `Represents ${item.symbolism.join(', ')}.`,
    artifacts: [], // Can be enriched
    region_associated: [], // Can be enriched
    depiction: item.iconography,
    temples: [], // Can be enriched
    alternate_versions: [], // Can be enriched
    iconography: {
      color: "Varies",
      features: item.iconography,
      posture: "Varies"
    },
  };
};

export const DASHAVATAR_CATEGORY_DATA: DashavatarCategoryData = {
  id: "category_dashavatar_01",
  category: "Dashavatar",
  description: "The Dashavataras are the ten primary incarnations of Lord Vishnu, the preserver god in the Hindu Trimurti. These avatars descend to Earth to restore Dharma (cosmic order) and eradicate evil forces, guiding humanity through different epochs (Yugas).",
  meaning: "Ten Avatars of Vishnu",
  philosophy: {
    core_concept: "Divine intervention to uphold righteousness and guide evolution.",
    purpose: "To re-establish Dharma, protect the virtuous, destroy the wicked, and reveal divine truths in forms accessible to humanity across different ages."
  },
  avatars: dashavatarJsonData.dashavatara.map((avatar) => {
    const mappedAvatar = mapJsonToDashavatarEntry(avatar);
    return {
      ...mappedAvatar,
      id: generateId(mappedAvatar.name),
      imageUrl: avatarImageMap[mappedAvatar.name] || `https://picsum.photos/seed/${generateId(mappedAvatar.name)}/600/400`,
      imageAiHint: `${mappedAvatar.form.toLowerCase()} ${mappedAvatar.meaning.toLowerCase().split(' ')[1] || ''}`.trim(),
    };
  }),
  scriptural_references: ["Puranas", "Mahabharata", "Ramayana", "Other"],
  symbolism: "Each avatar represents a stage in the evolution of life or consciousness and addresses specific cosmic crises or moral lessons relevant to their Yuga.",
  worship_and_festivals: ["Rama Navami (Rama)", "Krishna Janmashtami (Krishna)", "Narasimha Jayanti (Narasimha)", "Vamana Jayanti (Vamana)", "Matsya Jayanti (Matsya)"],
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Dashavatara",
    puranic_references: "https://www.wisdomlib.org/definition/dashavatara"
  },
  imageUrl: "https://i.pinimg.com/736x/cd/b7/e5/cdb7e5b3448d5a218d6c0bf507a3088a.jpg",
  imageAiHint: "vishnu avatars group divine"
};
