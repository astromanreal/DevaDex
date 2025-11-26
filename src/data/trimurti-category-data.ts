
import type { TextSource } from '@/lib/types';

export interface TrimurtiMemberAttribute {
  vehicle: string;
  consort: string;
  abode: string;
  number_of_heads?: number;
  avatars?: string[];
  forms?: string[];
  symbolism: string[];
  temples?: string[];
  icons?: string[];
  mantra?: string;
}

export interface TrimurtiMember {
  id: string; // Added ID for linking
  name: string;
  role: string;
  attributes: TrimurtiMemberAttribute;
  scriptures: TextSource[];
  imageUrl: string; // Added for display
  imageAiHint: string; // Added for display
  description: string;
  legends: { title: string; summary: string }[];
}

export interface TrimurtiOriginConcept {
  etymology: string;
  cosmic_roles: {
    creation: string;
    preservation: string;
    destruction: string;
  };
  symbolism: string;
  unity_principle: string;
}

export interface TrimurtiPhilosophicalContext {
  advaita_view: string;
  dvaita_view: string;
  shakta_view: string;
}

export interface TrimurtiAssociatedConcepts {
  Tridevi: string[];
  Trimurti_temple_examples: string[];
}

export interface TrimurtiSymbolismAndImpact {
  cosmic_cycle: string;
  cultural_influence: string;
}

export interface TrimurtiCategoryData {
  id: string;
  category: "Trimurti";
  description: string;
  origin_and_concept: TrimurtiOriginConcept;
  members: TrimurtiMember[];
  philosophical_context: TrimurtiPhilosophicalContext;
  associated_concepts: TrimurtiAssociatedConcepts;
  symbolism_and_impact: TrimurtiSymbolismAndImpact;
  external_links: {
    wikipedia: string;
    sacred_texts: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

export const TRIMURTI_CATEGORY_DATA: TrimurtiCategoryData = {
  id: "category_trimurti_01",
  category: "Trimurti",
  description: "The Trimurti is the sacred triad in Sanātana Dharma symbolizing the three fundamental cosmic functions: creation, preservation, and destruction. It comprises Brahma the Creator, Vishnu the Preserver, and Shiva the Destroyer.",
  imageUrl: "https://i.pinimg.com/736x/10/7f/02/107f02c4d9b1cdce3bb114e9cf2e63bc.jpg",
  imageAiHint: "trimurti brahma vishnu shiva",
  origin_and_concept: {
    etymology: "Sanskrit 'Tri' (three) + 'Murti' (form) = 'Three Forms'",
    cosmic_roles: {
      creation: "Brahma - brings the universe into existence",
      preservation: "Vishnu - sustains and protects creation",
      destruction: "Shiva - dissolves the universe for renewal"
    },
    symbolism: "Trimurti represents the cyclical nature of the universe — birth, life, and death (rebirth)",
    unity_principle: "They are seen as different aspects or manifestations of the Supreme Brahman"
  },
  members: [
    {
      id: "brahma",
      name: "Brahma",
      role: "The Creator",
      description: "Brahma is the cosmic creator who brings forth the universe and all life forms. As the source of wisdom and the Vedas, he symbolizes the creative power of the absolute reality (Brahman). Though a primary deity, his active worship is less common, signifying that the act of creation is complete, and focus shifts to preservation and spiritual liberation.",
      attributes: {
        vehicle: "Swan (Hamsa), symbolizing discernment and purity.",
        consort: "Saraswati (Goddess of Knowledge)",
        abode: "Brahmaloka (Satyaloka), the highest heaven.",
        number_of_heads: 4,
        symbolism: ["The Four Vedas (from his four heads)", "Intellect and Cosmic Mind", "The passage of time (four Yugas)", "Creation and knowledge"],
        temples: ["Brahma Temple in Pushkar, Rajasthan", "Brahmapureeswarar Temple, Tamil Nadu"],
        icons: ["Lotus flower (spontaneous birth)", "Vedas (scriptures)", "Kamandalu (water pot of creation)", "Akshamala (rosary for time)"],
        mantra: "Om Brahmane Namah"
      },
      scriptures: ["Puranas", "Vedas", "Upanishads", "Brahmanas"],
      legends: [
          { title: "Birth from Vishnu's Navel", summary: "In Vaishnava traditions, Brahma is born from a lotus flower that emerges from the navel of Vishnu at the dawn of creation, signifying that creation arises from the cosmic preserver." },
          { title: "The Fifth Head", summary: "Brahma originally had five heads. He lost one in a conflict with Shiva (as Bhairava), a story that symbolizes the overcoming of ego and the establishment of Shiva's supreme authority over creation." },
          { title: "Curse of Infrequent Worship", summary: "Brahma was cursed by sages like Bhrigu or Shiva (depending on the text) to be less worshipped on Earth, often cited as a reason for his few dedicated temples." }
      ],
      imageUrl: "https://i.pinimg.com/736x/e1/5a/95/e15a95784c4f324451e8baecbfdd4282.jpg", 
      imageAiHint: "brahma four faces swan" 
    },
    {
      id: "vishnu",
      name: "Vishnu",
      role: "The Preserver",
      description: "Vishnu is the preserver and protector of the universe, embodying the principles of dharma, mercy, and goodness. He descends to Earth in various avatars (incarnations) to restore cosmic order whenever it is threatened by evil and chaos.",
      attributes: {
        vehicle: "Garuda (divine eagle), representing speed and martial prowess.",
        consort: "Lakshmi (Goddess of Wealth and Prosperity)",
        abode: "Vaikuntha, the celestial realm of eternal bliss.",
        avatars: [
          "Dashavatara: Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, Kalki."
        ],
        symbolism: ["Compassion and Preservation", "Upholder of Dharma", "Cosmic Order", "Divine Grace"],
        icons: ["Sudarshana Chakra (discus of the mind)", "Kaumodaki (mace of primal energy)", "Panchajanya (conch of cosmic sound)", "Padma (lotus of purity and creation)"],
        mantra: "Om Namo Bhagavate Vasudevaya"
      },
      scriptures: ["Mahabharata", "Puranas", "Ramayana", "Vedas", "Upanishads"],
      legends: [
          { title: "Sheshashayana", summary: "Vishnu rests on the cosmic serpent Ananta Shesha in the primordial ocean (Kshira Sagara) during the periods between cosmic cycles, dreaming the next universe into existence." },
          { title: "Gajendra Moksha", summary: "He descended to Earth to save his devotee Gajendra, the elephant king, from a crocodile's grasp, symbolizing that divine grace and liberation are available to any sincere devotee, regardless of their form." },
          { title: "Samudra Manthan (Churning of the Ocean)", summary: "Vishnu played a multifaceted role: as Kurma (the tortoise) he provided the foundation for the churning, and as Mohini he tricked the Asuras to ensure the Devas received the nectar of immortality." }
      ],
      imageUrl: "https://i.pinimg.com/736x/5b/eb/b7/5bebb7eba704877f1bd9581e41db265b.jpg", 
      imageAiHint: "vishnu blue skin chakra" 
    },
    {
      id: "shiva",
      name: "Shiva",
      role: "The Destroyer / Transformer",
      description: "Shiva is the supreme ascetic, representing the power of destruction for the purpose of regeneration and spiritual transformation. He is the lord of meditation, yoga, and time, and is worshipped as the ultimate reality (Para Brahman) in Shaivism.",
      attributes: {
        vehicle: "Nandi (bull), symbolizing righteousness and strength.",
        consort: "Parvati (Shakti)",
        abode: "Mount Kailash, the spiritual center of the cosmos.",
        forms: [
          "Mahadeva (Great God)", "Rudra (The Howler)", "Nataraja (Lord of Dance)", "Bhairava (The Terrible)", "Ardhanarishvara (Half-Woman Lord)"
        ],
        symbolism: ["Asceticism and Renunciation", "Meditation and Transcendence", "Cosmic Dance of Destruction and Creation", "Liberation (Moksha)"],
        icons: ["Trishula (trident of creation, preservation, destruction)", "Damaru (drum of cosmic rhythm)", "Third eye (wisdom and destruction of ego)", "Crescent Moon (control over time)", "Serpent Vasuki (control over fear and death)"],
        mantra: "Om Namah Shivaya"
      },
      scriptures: ["Puranas", "Upanishads", "Vedas", "Other"],
      legends: [
          { title: "Tandava Dance", summary: "Shiva performs the cosmic dance of creation and destruction (Ananda Tandava and Rudra Tandava), symbolizing the eternal rhythm and cyclical nature of the universe." },
          { title: "Drinking Halahala Poison", summary: "During the churning of the ocean (Samudra Manthan), Shiva consumed the deadly Halahala poison to save the universe. Parvati held his throat, turning it blue (Neelakantha) and preventing the poison from spreading." },
          { title: "Descent of the Ganga", summary: "To soften the powerful descent of the river Ganga from the heavens, Shiva caught her in his matted locks, allowing her to flow gently to Earth, symbolizing his role as a mitigator of cosmic forces." }
      ],
      imageUrl: "https://i.pinimg.com/736x/6e/ae/06/6eae061cd6587e7306a84f670ea892c4.jpg", 
      imageAiHint: "shiva meditation trishula"
    }
  ],
  philosophical_context: {
    advaita_view: "Trimurti are seen as manifestations of the one Nirguna Brahman (formless Absolute)",
    dvaita_view: "Each deity has distinct individuality and supremacy depending on sect",
    shakta_view: "Trimurti arise from Adi Shakti (Divine Mother), who is the ultimate source of their powers."
  },
  associated_concepts: {
    Tridevi: [
      "Saraswati (knowledge - consort of Brahma)",
      "Lakshmi (wealth - consort of Vishnu)",
      "Parvati/Durga (power - consort of Shiva)"
    ],
    Trimurti_temple_examples: [
      "Elephanta Caves (Mumbai) - famous Trimurti sculpture",
      "Prambanan Temple (Indonesia)",
      "Thrimurthy Temple, Mettupalayam, India"
    ]
  },
  symbolism_and_impact: {
    cosmic_cycle: "Birth (Brahma), Life (Vishnu), Death (Shiva) — representing time and transformation",
    cultural_influence: "Temple art, mythology, literature, and festivals often revolve around one or more members of the Trimurti"
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Trimurti",
    sacred_texts: "https://www.sacred-texts.com/hin/index.htm"
  }
};
