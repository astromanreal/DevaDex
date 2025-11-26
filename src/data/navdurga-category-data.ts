
import type { CharacterType, TextSource, Yuga } from '@/lib/types';

export interface NavdurgaForm {
  id: string; // Changed from number to string for consistency
  name: string;
  sanskrit_name: string;
  meaning: string;
  day: string;
  symbolism: string;
  mantra: string;
  vehicle: string;
  weapons: string[];
  color: string;
  depiction: string;
  associated_chakra: string;
  qualities: string[];
  story: string;
  associated_forms: string[];
  imageUrl: string;
  imageAiHint: string;
}

export interface NavdurgaCategoryData {
  id: string;
  category: "Navdurga";
  description: string;
  meaning: string;
  introduction: string;
  worship_significance: string;
  goddesses: NavdurgaForm[];
  scriptural_references: TextSource[];
  external_links: {
    wikipedia: string;
    devi_mahatmya: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

const navdurgaImageMap: Record<string, string> = {
  "Shailaputri": "https://i.pinimg.com/736x/f9/56/ff/f956ff22c0d63ad9c589b3ffdeef8a7c.jpg",
  "Brahmacharini": "https://i.pinimg.com/736x/b0/f4/6c/b0f46c5dd8a82dbd0756f0dae4282853.jpg",
  "Chandraghanta": "https://i.pinimg.com/736x/dd/cb/f3/ddcbf3c5cfcc8dda6dc7a3f0e3fc7e7b.jpg",
  "Kushmanda": "https://i.pinimg.com/736x/a0/d7/df/a0d7df464e176a3e1d1520dbf52c3c6f.jpg",
  "Skandamata": "https://i.pinimg.com/736x/05/a4/9a/05a49a4f57261f581c5f5fc0bf4841fe.jpg",
  "Katyayani": "https://i.pinimg.com/736x/70/7f/d9/707fd9fb2a1e91bfb500d7d620bca325.jpg",
  "Kalaratri": "https://i.pinimg.com/736x/ff/ce/cb/ffcecbca76401a70a3335a0abf022213.jpg",
  "Mahagauri": "https://i.pinimg.com/736x/52/71/40/52714074970018aad5c35e73db5b193e.jpg",
  "Siddhidatri": "https://i.pinimg.com/736x/d9/e2/b7/d9e2b7bdd3fa794b7865d88e2e174470.jpg"
};


const navdurgaRawData: Omit<NavdurgaForm, 'id' | 'imageUrl' | 'imageAiHint'>[] = [
  {
    name: "Shailaputri",
    sanskrit_name: "शैलपुत्री",
    meaning: "Daughter of the Mountain",
    day: "Pratipada (1st Day)",
    symbolism: "Purity and devotion. Embodiment of the power of Brahma, Vishnu and Shiva.",
    mantra: "ॐ देवी शैलपुत्र्यै नमः (Om Devi Shailaputryai Namah)",
    vehicle: "Bull (Nandi)",
    weapons: ["Trident", "Lotus"],
    color: "Grey / Red",
    depiction: "Seated on a bull, holding a trident in her right hand and a lotus in her left, crescent moon on forehead.",
    associated_chakra: "Muladhara (Root Chakra)",
    qualities: ["Calmness", "Strength", "Groundedness", "Determination"],
    story: "After self-immolation as Sati, Goddess Parvati took birth as the daughter of Himalaya, the king of mountains. In this form, she is known as Shailaputri.",
    associated_forms: ["Sati", "Parvati", "Hemavati"]
  },
  {
    name: "Brahmacharini",
    sanskrit_name: "ब्रह्मचारिणी",
    meaning: "One who practices austerity / Devotion",
    day: "Dwitiya (2nd Day)",
    symbolism: "Penance, spiritual wisdom, and celibacy.",
    mantra: "ॐ देवी ब्रह्मचारिण्यै नमः (Om Devi Brahmacharinyai Namah)",
    vehicle: "None (walks barefoot)",
    weapons: ["Japa mala (rosary)", "Kamandalu (water pot)"],
    color: "White / Orange",
    depiction: "Calm and serene, dressed in white, holding a rosary in her right hand and a water pot in her left. She walks barefoot.",
    associated_chakra: "Swadhisthana (Sacral Chakra)",
    qualities: ["Devotion", "Discipline", "Asceticism", "Knowledge"],
    story: "In her previous birth as Parvati, daughter of Himalaya, she performed severe penance (tapasya) for thousands of years to win Lord Shiva as her husband.",
    associated_forms: ["Sati", "Parvati", "Uma"]
  },
  {
    name: "Chandraghanta",
    sanskrit_name: "चंद्रघंटा",
    meaning: "One with a moon-shaped bell / Supreme bliss and knowledge",
    day: "Tritiya (3rd Day)",
    symbolism: "Courage, protection, and peace.",
    mantra: "ॐ देवी चंद्रघण्टायै नमः (Om Devi Chandraghantayai Namah)",
    vehicle: "Tiger or Lion",
    weapons: ["Trident", "Mace", "Sword", "Bow", "Arrow", "Lotus", "Bell", "Kamandalu"],
    color: "Orange / Gold",
    depiction: "Golden-hued with ten arms, holding various weapons and a bell-shaped crescent moon on her forehead. She is ready for battle.",
    associated_chakra: "Manipura (Solar Plexus Chakra)",
    qualities: ["Bravery", "Compassion", "Alertness", "Destroyer of evil"],
    story: "This is the married form of Parvati. After her marriage to Shiva, she adorned her forehead with a half-moon shaped like a ghanta (bell), thus named Chandraghanta. She is known to destroy demons and protect her devotees.",
    associated_forms: ["Parvati"]
  },
  {
    name: "Kushmanda",
    sanskrit_name: "कूष्मांडा",
    meaning: "The cosmic egg creator / Source of Universe",
    day: "Chaturthi (4th Day)",
    symbolism: "Creator of the Universe, source of all energy.",
    mantra: "ॐ देवी कूष्माण्डायै नमः (Om Devi Kushmandayai Namah)",
    vehicle: "Lioness or Tiger",
    weapons: ["Discus", "Mace", "Bow", "Arrow", "Lotus", "Amrit Kalash (nectar pot)", "Rosary", "Kamandalu"],
    color: "Green / Red",
    depiction: "Radiant like the sun, with eight arms, holding weapons and divine objects. She is believed to have created the universe with her divine smile.",
    associated_chakra: "Anahata (Heart Chakra)",
    qualities: ["Vitality", "Joy", "Light", "Creative power"],
    story: "It is believed that when the universe was non-existent and darkness prevailed, Goddess Kushmanda created the 'cosmic egg' (Brahmanda) with her mere smile, bringing light and life.",
    associated_forms: ["Adi Shakti"]
  },
  {
    name: "Skandamata",
    sanskrit_name: "स्कन्दमाता",
    meaning: "Mother of Skanda (Kartikeya)",
    day: "Panchami (5th Day)",
    symbolism: "Nurturing motherhood, compassion, and strength.",
    mantra: "ॐ देवी स्कन्दमातायै नमः (Om Devi Skandamatayai Namah)",
    vehicle: "Lion",
    weapons: ["Lotus (in two hands)", "Infant Skanda (held in lap)"],
    color: "Royal Blue / Yellow",
    depiction: "Four-armed, holding her son Skanda (Lord Kartikeya) in her lap, and lotuses in two hands. She is seated on a lion.",
    associated_chakra: "Vishuddha (Throat Chakra)",
    qualities: ["Compassion", "Maternal love", "Grace", "Purity"],
    story: "As the mother of Lord Skanda (Kartikeya), the commander of the divine army, she represents the strength of a mother who nurtures and protects her children.",
    associated_forms: ["Parvati"]
  },
  {
    name: "Katyayani",
    sanskrit_name: "कात्यायनी",
    meaning: "Daughter of Sage Katyayana / Fierce Form",
    day: "Shashti (6th Day)",
    symbolism: "Warrior goddess, slayer of Mahishasura, fulfills desires.",
    mantra: "ॐ देवी कात्यायन्यै नमः (Om Devi Katyayanyai Namah)",
    vehicle: "Lion",
    weapons: ["Sword", "Trident", "Lotus", "Shield"],
    color: "Red / Orange",
    depiction: "Fierce and divine, with four arms, holding a sword and lotus, while other hands are in Varada (boon-giving) and Abhaya (fear-dispelling) mudras. She rides a lion.",
    associated_chakra: "Ajna (Third Eye Chakra)",
    qualities: ["Courage", "Justice", "Determination", "Destroyer of negativity"],
    story: "Born to Sage Katyayana as a result of his intense austerities to have Parvati as his daughter. She is a fierce form of Durga who ultimately slew the demon Mahishasura.",
    associated_forms: ["Durga", "Mahishasuramardini"]
  },
  {
    name: "Kalaratri",
    sanskrit_name: "कालरात्रि",
    meaning: "The dark night of destruction / Night of Time",
    day: "Saptami (7th Day)",
    symbolism: "Fierce protector, destroyer of darkness and ignorance.",
    mantra: "ॐ देवी कालरात्र्यै नमः (Om Devi Kalaratryai Namah)",
    vehicle: "Donkey",
    weapons: ["Scimitar (or sword)", "Vajra (thunderbolt or iron weapon)"],
    color: "Dark Blue / Black",
    depiction: "Dark complexioned with disheveled hair, three eyes, and flames emanating from her breath. She is depicted riding a donkey and carries a scimitar and a vajra.",
    associated_chakra: "Sahasrara (Crown Chakra) - related to dissolution of negativity",
    qualities: ["Fearlessness", "Power", "Transformation", "Destroyer of evil forces"],
    story: "One of the most ferocious forms of Goddess Durga, Kalaratri destroys all forms of negativity, ghosts, evil spirits, and sins. She provides protection and liberation.",
    associated_forms: ["Kali", "Chamunda"]
  },
  {
    name: "Mahagauri",
    sanskrit_name: "महागौरी",
    meaning: "The Great White One / Extremely Fair",
    day: "Ashtami (8th Day)",
    symbolism: "Purity, peace, and absolution of sins.",
    mantra: "ॐ देवी महागौर्यै नमः (Om Devi Mahagauryai Namah)",
    vehicle: "Bull",
    weapons: ["Trident", "Damaru (drum)"],
    color: "Pink / White",
    depiction: "Extremely fair complexioned, serene goddess in white attire, riding a bull. She has four arms, holding a trident and damaru, with Varada and Abhaya mudras.",
    associated_chakra: "Sahasrara (Crown Chakra) - representing purity and enlightenment",
    qualities: ["Calmness", "Purity", "Hope", "Benevolence"],
    story: "After years of severe penance which made her skin dark (as Kalaratri or Parvati in penance), Lord Shiva bathed her with water from the Ganga, restoring her radiant white complexion. Thus, she became Mahagauri.",
    associated_forms: ["Parvati", "Annapurna"]
  },
  {
    name: "Siddhidatri",
    sanskrit_name: "सिद्धिदात्री",
    meaning: "Giver of Siddhis (Spiritual Powers) / Giver of Perfection",
    day: "Navami (9th Day)",
    symbolism: "Spiritual knowledge, divine perfection, and attainment of supernatural powers.",
    mantra: "ॐ देवी सिद्धिदात्र्यै नमः (Om Devi Siddhidatryai Namah)",
    vehicle: "Lion (sometimes depicted seated on a lotus)",
    weapons: ["Discus (Chakra)", "Mace (Gada)", "Conch (Shankha)", "Lotus (Padma)"],
    color: "Purple / Sky Blue",
    depiction: "Four-armed deity, often seated on a lotus, holding a discus, mace, conch, and lotus. She radiates divine grace and is surrounded by Siddhas, Gandharvas, Yakshas, Devas, and Asuras who worship her.",
    associated_chakra: "Sahasrara (Crown Chakra) - representing full spiritual realization",
    qualities: ["Perfection", "Wisdom", "Mysticism", "Granting all siddhis"],
    story: "She is the granter of all types of siddhis (supernatural powers) and is worshipped by all beings seeking perfection. Lord Shiva attained all siddhis by her grace and is also known as Ardhanarishvara due to her being one half of his form.",
    associated_forms: ["Adi Shakti", "Saraswati", "Lakshmi", "Parvati"]
  }
];

const generateNavdurgaId = (name: string): string => `navdurga-${name.toLowerCase().replace(/\s+/g, '-')}`;

export const NAVDURGA_CATEGORY_DATA: NavdurgaCategoryData = {
  id: "category_navdurga_01",
  category: "Navdurga",
  description: "Navdurga refers to the nine manifestations of Goddess Durga, worshipped with great devotion during the festival of Navaratri. Each form represents a distinct aspect of the Divine Mother's power, wisdom, and grace, guiding devotees through various stages of spiritual evolution.",
  meaning: "Nine Forms of Durga",
  introduction: "The worship of Navdurga is a significant tradition within Shaktism, celebrating the feminine divine in her myriad expressions. Each goddess is invoked on a specific day of Navaratri, bestowing unique blessings upon her devotees.",
  worship_significance: "Devotees worship Navdurga to seek protection, prosperity, knowledge, and liberation. The sequence of worship is believed to correspond to the spiritual journey of an individual, from overcoming basic instincts to attaining supreme wisdom and perfection.",
  goddesses: navdurgaRawData.map((form) => {
    const id = generateNavdurgaId(form.name);
    return {
      ...form,
      id: id,
      imageUrl: navdurgaImageMap[form.name] || `https://picsum.photos/seed/${id}/600/400`,
      imageAiHint: `${form.name.toLowerCase()} goddess ${form.vehicle.toLowerCase().split(' ')[0] || ''}`.trim(),
    };
  }),
  scriptural_references: ["Devi Mahatmya", "Puranas", "Other"],
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Navadurga",
    devi_mahatmya: "https://www.wisdomlib.org/hinduism/book/devi-mahatmyam"
  },
  imageUrl: "https://i.pinimg.com/736x/85/f8/d8/85f8d8e9945438a3bcb36d043c8947b1.jpg",
  imageAiHint: "nine goddesses divine group navratri"
};
