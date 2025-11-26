
import type { TextSource } from '@/lib/types';

export interface EkadashaRudraAvatar {
  id: string;
  name: string; // Will be avatar_name from input
  description: string;
  key_concepts: string[];
  texts: TextSource[];
  symbolism: string[];
  key_characteristics: string[];
  significance: string;
  imageUrl: string;
  imageAiHint: string;
}

export interface EkadashaRudraCategoryData {
  id: string;
  category: "Ekadasha Rudra"; // Fixed category name
  title: string; // Added title for display
  description: string;
  avatars: EkadashaRudraAvatar[];
  scriptural_references: TextSource[];
  worship_and_significance: string;
  external_links: {
    wikipedia_rudras: string;
    shiva_purana_ref: string;
  };
  imageUrl: string;
  imageAiHint: string;
}

const generateRudraId = (name: string): string => `rudra-${name.toLowerCase().replace(/\s+/g, '-')}`;

const ekadashaRudraImageMap: Record<string, string> = {
  "Sadashiva": "https://i.pinimg.com/736x/0f/09/a7/0f09a7b7d42c9b29d0ff6a5ef26584b0.jpg",
  "Ishana": "https://i.pinimg.com/736x/e3/4a/12/e34a1296b019423970c7fe22c462c41a.jpg",
  "Tatpurusha": "https://i.pinimg.com/736x/3d/2e/c7/3d2ec7f1825be24585278b1a79302020.jpg",
  "Aghora": "https://i.pinimg.com/736x/c1/52/9b/c1529bfc9521ae58e6e7c4e16f2220d3.jpg",
  "Vamadeva": "https://i.pinimg.com/736x/a3/18/c6/a318c60460d8ebd2c9a90b6cdb655d99.jpg",
  "Rudra": "https://i.pinimg.com/736x/e6/6d/e4/e66de4855550c6bf6c066e65a09f6b04.jpg",
  "Bhava": "https://i.pinimg.com/736x/fa/a8/ed/faa8ed8af83e5f14328502c7c597ccf7.jpg",
  "Pashupati": "https://i.pinimg.com/736x/07/84/06/0784068c8e36d00e6ab8b8da04b31992.jpg",
  "Mahadeva": "https://i.pinimg.com/736x/49/09/54/4909545d772a1edffc3a0b924abd9c36.jpg",
  "Shankara": "https://i.pinimg.com/736x/20/89/d6/2089d6067818dec6c924c70d9007567d.jpg"
};

// Data provided for "Shiva_Rudra_Avatars" - will be used for Ekadasha Rudra category
const rudraAvatarsInput = [
  {
    avatar_name: "Sadashiva",
    description: "Sadashiva represents the eternal, formless, and absolute aspect of Lord Shiva. This form is beyond creation, destruction, and time, representing pure consciousness and the ultimate reality.",
    key_concepts: ["Eternal", "Formless", "Absolute Consciousness"],
    texts: ["Shiva Purana", "Linga Purana"] as TextSource[],
    symbolism: [
      "The formless and timeless aspect of the universe",
      "The ultimate source of all beings"
    ],
    key_characteristics: ["Timeless", "Omnipresent", "Omniscient"],
    significance: "Represents the unmanifested aspect of Shiva, which transcends space and time. Sadashiva is the underlying essence of the universe."
  },
  {
    avatar_name: "Ishana",
    description: "Ishana represents the divine aspect of Shiva that governs the mind and spiritual knowledge. He is associated with teaching the secrets of the universe and is considered the lord of wisdom.",
    key_concepts: ["Wisdom", "Teaching", "Mind Control"],
    texts: ["Vishnu Purana", "Shiva Purana"] as TextSource[],
    symbolism: [
      "Control over the mind and spiritual wisdom",
      "The guru who imparts knowledge"
    ],
    key_characteristics: ["Knowledge", "Purity", "Spiritual Guidance"],
    significance: "Ishana signifies the role of Shiva as the teacher and guide, leading beings towards the realization of truth and self-awareness."
  },
  {
    avatar_name: "Tatpurusha",
    description: "Tatpurusha is the form of Shiva that represents the manifestation of the cosmos, symbolizing the supreme lord who is both immanent and transcendent. He is often associated with the direction of the North and the mind's highest potential.",
    key_concepts: ["Manifestation", "Supreme Lord", "North Direction"],
    texts: ["Vishnu Purana", "Shiva Purana"] as TextSource[],
    symbolism: [
      "The cosmic manifestation of Shiva",
      "The supreme being of creation and destruction"
    ],
    key_characteristics: ["Creator", "Transcendent", "Divine Immanence"],
    significance: "Tatpurusha embodies the divine essence that resides both within and beyond the cosmos, playing a crucial role in creation."
  },
  {
    avatar_name: "Aghora",
    description: "Aghora represents the fierce and destructive aspect of Lord Shiva, associated with transformation and the destruction of negative forces. Aghora is the embodiment of the power that dispels fear and ignorance.",
    key_concepts: ["Destruction", "Fearlessness", "Transformation"],
    texts: ["Shiva Purana", "Other"] as TextSource[], // Agama texts are 'Other'
    symbolism: [
      "Destruction of ignorance and ego",
      "Fearlessness in the face of darkness"
    ],
    key_characteristics: ["Fearless", "Fierce", "Transformative"],
    significance: "Aghora symbolizes the destruction of the negative aspects of existence, making way for spiritual rebirth and transcendence."
  },
  {
    avatar_name: "Vamadeva",
    description: "Vamadeva represents the peaceful and compassionate form of Shiva, often depicted as a gentle, nurturing aspect of the deity. He embodies the feminine and nurturing qualities of Shiva.",
    key_concepts: ["Peace", "Compassion", "Nurturing"],
    texts: ["Shiva Purana", "Vedas"] as TextSource[], // Rigveda is a Veda
    symbolism: [
      "The peaceful aspect of the universe",
      "Nurturing and protective force"
    ],
    key_characteristics: ["Compassionate", "Nurturing", "Balanced"],
    significance: "Vamadeva is the embodiment of Shiva’s soft and compassionate nature, bringing peace and balance to the world."
  },
  {
    avatar_name: "Rudra",
    description: "Rudra is the form of Shiva associated with the fierce and wrathful aspects of the deity. Rudra is the god of storms and the ultimate destroyer, who is invoked for the removal of suffering and obstacles.",
    key_concepts: ["Storms", "Wrath", "Destruction"],
    texts: ["Vedas", "Shiva Purana"] as TextSource[], // Rigveda is a Veda
    symbolism: [
      "The destructive force of nature",
      "Liberation through destruction"
    ],
    key_characteristics: ["Wrathful", "Destroyer", "Liberator"],
    significance: "Rudra is a primal force in the universe, who removes the negative forces that inhibit spiritual progress and cosmic harmony."
  },
  {
    avatar_name: "Bhava",
    description: "Bhava is the form of Shiva that represents creation, existence, and the essence of life itself. He is often seen as a mediator between the physical and the divine.",
    key_concepts: ["Creation", "Existence", "Life Force"],
    texts: ["Shiva Purana", "Mahabharata"] as TextSource[],
    symbolism: [
      "The essence of life and creation",
      "Divine existence"
    ],
    key_characteristics: ["Creative", "Vital", "Dynamic"],
    significance: "Bhava embodies the life force, making him integral to the creation of beings and the sustenance of the universe."
  },
  {
    avatar_name: "Pashupati",
    description: "Pashupati is the lord of all animals, representing the caretaker and protector of all creatures in the universe. He symbolizes the ultimate protector of beings from harm.",
    key_concepts: ["Protection", "Care", "Lord of Animals"],
    texts: ["Shiva Purana", "Mahabharata"] as TextSource[],
    symbolism: [
      "Protector of creatures",
      "Ruler of the animal kingdom"
    ],
    key_characteristics: ["Protector", "Compassionate", "Caretaker"],
    significance: "Pashupati signifies Shiva’s role as the protector and preserver of all living beings, especially animals."
  },
  {
    avatar_name: "Mahadeva",
    description: "Mahadeva is the supreme form of Shiva, often regarded as the greatest god. This form represents Shiva as the Lord of the Universe, transcending all aspects of existence.",
    key_concepts: ["Supreme Being", "Lord of the Universe", "Ultimate Reality"],
    texts: ["Vishnu Purana", "Shiva Purana"] as TextSource[],
    symbolism: [
      "The supreme being",
      "The transcendent god beyond all forms"
    ],
    key_characteristics: ["Omnipotent", "Supreme", "Infinite"],
    significance: "Mahadeva represents the ultimate reality and the greatest manifestation of Shiva’s divine nature, embodying the universe's beginning, middle, and end."
  },
  {
    avatar_name: "Shankara",
    description: "Shankara is the form of Shiva as the bestower of prosperity and auspiciousness. He is associated with peace, tranquility, and the removal of obstacles in life.",
    key_concepts: ["Auspiciousness", "Prosperity", "Peace"],
    texts: ["Shiva Purana", "Linga Purana"] as TextSource[],
    symbolism: [
      "Bringer of peace and auspiciousness",
      "The remover of obstacles"
    ],
    key_characteristics: ["Auspicious", "Peaceful", "Blessed"],
    significance: "Shankara is the embodiment of Shiva’s benevolent and peaceful nature, bestowing blessings and ensuring the well-being of all."
  }
];

const mappedRudras: EkadashaRudraAvatar[] = rudraAvatarsInput.map(rudra => ({
  id: generateRudraId(rudra.avatar_name),
  name: rudra.avatar_name,
  description: rudra.description,
  key_concepts: rudra.key_concepts,
  texts: rudra.texts,
  symbolism: rudra.symbolism,
  key_characteristics: rudra.key_characteristics,
  significance: rudra.significance,
  imageUrl: ekadashaRudraImageMap[rudra.avatar_name] || `https://picsum.photos/seed/${generateRudraId(rudra.avatar_name)}/600/400`,
  imageAiHint: `rudra shiva ${rudra.avatar_name.toLowerCase()}`
}));

export const EKADASHA_RUDRA_CATEGORY_DATA: EkadashaRudraCategoryData = {
  id: "category_ekadasha_rudra_01",
  category: "Ekadasha Rudra",
  title: "The Eleven Rudras - Manifestations of Shiva",
  description: "The Ekadasha Rudras are eleven powerful manifestations or aspects of Lord Shiva, representing His diverse cosmic functions, particularly related to transformation, destruction of negativity, and spiritual liberation. Their number and names can vary across different scriptures, but they collectively embody Shiva's fierce and benevolent energies.",
  imageUrl: "https://i.pinimg.com/736x/c3/72/f6/c372f6f987c150d72d73429c7b96aca1.jpg",
  imageAiHint: "shiva rudras fierce group",
  avatars: mappedRudras,
  scriptural_references: ["Puranas", "Mahabharata", "Vedas", "Other"],
  worship_and_significance: "Worship of the Ekadasha Rudras is performed for protection from calamities, removal of obstacles, spiritual upliftment, and for invoking Shiva's fierce grace to overcome adversities. Rudra Abhishekam and chanting of Sri Rudram are common practices.",
  external_links: {
    wikipedia_rudras: "https://en.wikipedia.org/wiki/Rudras",
    shiva_purana_ref: "https://www.wisdomlib.org/hinduism/book/shiva-purana-eng"
  }
};
