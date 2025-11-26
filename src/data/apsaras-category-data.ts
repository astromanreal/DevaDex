
import type { CharacterType, TextSource } from '@/lib/types';

export interface NotableApsara {
  id: string;
  name: string;
  sanskrit_name: string;
  epithet?: string; // e.g., Most beautiful
  associated_with: string[]; // Deities, Sages, Kings they interacted with
  skills: string[]; // Dance, Music, Seduction
  famous_stories: { title: string; summary: string }[];
  symbolism: string;
  imageUrl: string;
  imageAiHint: string;
  mantra?: string;
  associated_chakra?: string;
  qualities?: string[];
  vehicle?: string;
  associated_deity?: string;
}

export interface ApsarasCategoryData {
  id: string;
  category: "Apsaras";
  description: string;
  origin_and_nature: {
    mythological_origin: string;
    appearance_and_abilities: string;
    types_of_apsaras?: string; // Laukika (worldly) vs. Daivika (divine)
  };
  roles_and_functions: {
    celestial_entertainers: string;
    messengers_and_tempters: string;
    reward_for_heroes: string;
  };
  notable_apsaras: NotableApsara[];
  scriptural_mentions: {
    vedas: string;
    epics: string; // Ramayana, Mahabharata
    puranas: string;
    kavya: string; // Classical Sanskrit literature
  };
  symbolism_and_cultural_influence: {
    art_and_sculpture: string;
    dance_and_music: string;
    metaphorical_representation: string;
  };
  external_links: {
    wikipedia: string;
    wisdomlib: string;
  };
  imageUrl?: string;
  imageAiHint?: string;
}

const generateApsaraId = (name: string): string => `apsara-${name.toLowerCase().replace(/\s+/g, '-')}`;

const apsaraImageMap: Record<string, string> = {
  "Urvashi": "https://i.pinimg.com/736x/c3/49/b7/c349b7c70df5fa3c75a08fd06f601c1f.jpg",
  "Menaka": "https://i.pinimg.com/736x/19/84/5e/19845e79e0c7221354a1e11f19baa78e.jpg",
  "Rambha": "https://i.pinimg.com/736x/bc/d4/81/bcd4816fbfef610d896a40974f5d448f.jpg",
  "Tilottama": "https://i.pinimg.com/736x/19/71/56/197156f2198eaec0ca563e90167e2b9f.jpg",
  "Vishwachi": "https://i.pinimg.com/736x/67/df/86/67df86c98ef13ed9f8e366e7517ebfe8.jpg",
  "Pundarika": "https://i.pinimg.com/736x/af/ba/67/afba672aa7123bc4f568400610cc3df5.jpg",
  "Kubja": "https://i.pinimg.com/736x/9a/cd/a5/9acda5b9b728f0869005fac78017447a.jpg"
};


const inputApsarasData = [
  {
    "id": 1, // Original ID, will be replaced
    "name": "Urvashi",
    "sanskrit_name": "उर्वशी",
    "meaning": "The Most Beautiful One",
    "symbolism": "Beauty, Love, Grace",
    "associated_chakra": "Svadhisthana (Sacral Chakra)",
    "qualities": ["Beauty", "Dance", "Love"],
    "story": "Urvashi is one of the most famous apsaras in Hindu mythology, known for her unmatched beauty and graceful dance. She was created by Brahma and is associated with the gods and kings of the heavens. Her love story with the king Pururavas is legendary.",
    "mantra": "ॐ उर्वशी देवि नमः",
    "contribution": "Urvashi is famous for her divine dance and grace. She is also known for her role in various romantic and dramatic episodes in Hindu texts.",
    "vehicle": "None",
    "associated_deity": "Indra"
  },
  {
    "id": 2,
    "name": "Menaka",
    "sanskrit_name": "मेणका",
    "meaning": "The Heavenly Nymph",
    "symbolism": "Beauty, Charm, Enchantment",
    "associated_chakra": "Anahata (Heart Chakra)",
    "qualities": ["Beauty", "Enchantress", "Charm"],
    "story": "Menaka is another renowned apsara who was sent by Indra to distract the sage Vishwamitra from his deep meditation. She succeeded in her mission and bore Vishwamitra’s daughter, Shakuntala. She is known for her incredible beauty and charm.",
    "mantra": "ॐ मेणकायै नमः",
    "contribution": "She played a key role in the mythological narrative by disrupting Vishwamitra’s penance, leading to the birth of Shakuntala, whose story is central to the Mahabharata.",
    "vehicle": "None",
    "associated_deity": "Indra"
  },
  {
    "id": 3,
    "name": "Rambha", // Corrected from Ramba
    "sanskrit_name": "रम्भा", // Corrected Sanskrit name
    "meaning": "The One Who Is Peaceful", // Meaning might vary, this is one interpretation
    "symbolism": "Love, Serenity, Beauty",
    "associated_chakra": "Manipura (Solar Plexus Chakra)",
    "qualities": ["Beauty", "Peace", "Serenity"],
    "story": "Rambha is another apsara of beauty and grace, often associated with the Asuras. She is best known for her role in various myths where she uses her charm to sway even gods and sages.",
    "mantra": "ॐ रम्भायै नमः", // Corrected mantra
    "contribution": "Rambha contributed to the creation of many celestial stories through her charm and interactions with both gods and demons.",
    "vehicle": "None",
    "associated_deity": "Indra"
  },
  {
    "id": 4,
    "name": "Tilottama",
    "sanskrit_name": "तिलोत्तमा", // Corrected Sanskrit name
    "meaning": "The Best Among All / She Whose Every Particle is Exquisite",
    "symbolism": "Beauty, Artistry, Perfection",
    "associated_chakra": "Vishuddha (Throat Chakra)",
    "qualities": ["Beauty", "Art", "Perfection"],
    "story": "Tilottama was created by Vishvakarma, combining all that was best from everything, to cause discord between the invincible Asura brothers Sunda and Upasunda, leading to their mutual destruction.",
    "mantra": "ॐ तिलोत्तमायै नमः", // Corrected mantra
    "contribution": "Tilottama is famous for her perfect beauty and the perfection of her art, particularly dance and music.",
    "vehicle": "None",
    "associated_deity": "Indra"
  },
  {
    "id": 5,
    "name": "Vishwachi", // First instance
    "sanskrit_name": "विश्वाची",
    "meaning": "Universal, All-Pervading / The One with the Universal Voice",
    "symbolism": "Mystery, Artistry, Music, Harmony, Voice",
    "associated_chakra": "Ajna (Third Eye Chakra)",
    "qualities": ["Art", "Music", "Mystery", "Harmony", "Voice"],
    "story": "Vishwachi is known for her musical and artistic talents. She is one of the apsaras that often accompanies the gods during their celestial dances and celebrations. Her voice and melodies are considered powerful enough to enchant gods and mortals alike.",
    "mantra": "ॐ विश्वाच्यै नमः", // Corrected mantra to reflect feminine gender
    "contribution": "She is known for her contribution to celestial arts and music. Her voice and melodies are considered powerful enough to enchant gods and mortals alike.",
    "vehicle": "None",
    "associated_deity": "Indra"
  },
  {
    "id": 6,
    "name": "Pundarika",
    "sanskrit_name": "पुण्डरीका",
    "meaning": "The Lotus",
    "symbolism": "Purity, Grace, Rebirth",
    "associated_chakra": "Sahasrara (Crown Chakra)",
    "qualities": ["Purity", "Grace", "Rebirth"],
    "story": "Pundarika is known for her role in assisting Indra and other gods in various cosmic battles and celebrations. She is often depicted as a symbol of beauty and purity.",
    "mantra": "ॐ पुण्डरीकायै नमः",
    "contribution": "Her beauty and grace have been celebrated in various texts and stories.",
    "vehicle": "None",
    "associated_deity": "Indra"
  },
  {
    "id": 7,
    "name": "Kubja",
    "sanskrit_name": "कुब्जा",
    "meaning": "The Hunchbacked One",
    "symbolism": "Transformation, Beauty, Devotion",
    "associated_chakra": "Anahata (Heart Chakra)",
    "qualities": ["Devotion", "Transformation", "Beauty"],
    "story": "Kubja is a unique figure, originally depicted as a hunchbacked woman in Mathura. She was transformed by Krishna into a beautiful woman after she offered him sandalwood paste, symbolizing the power of divine grace and transformation.",
    "mantra": "ॐ कुब्जायै नमः",
    "contribution": "Kubja represents devotion and transformation. Her story is an embodiment of divine love and grace.",
    "vehicle": "None",
    "associated_deity": "Krishna"
  }
  // Removed the duplicate "Apsara Vishvachi" as "Vishwachi" is already listed.
];

const mappedApsaras: NotableApsara[] = inputApsarasData.map(ap => {
    const id = generateApsaraId(ap.name);
    const famous_stories = [];
    if (ap.story) {
        famous_stories.push({ title: `Legend of ${ap.name}`, summary: ap.story });
    }
    if (ap.name === "Urvashi" && ap.story.includes("Pururavas")) {
       famous_stories.push({ title: "Love story with King Pururavas", summary: "A famous tale of her love and eventual separation from the mortal king Pururavas." });
    }
    if (ap.name === "Menaka" && ap.story.includes("Vishwamitra")) {
       famous_stories.push({ title: "Distracting Vishwamitra", summary: "Successfully distracted Sage Vishwamitra from his intense austerities, leading to the birth of Shakuntala." });
    }
     if (ap.name === "Rambha" && ap.story.includes("Asuras")) { // Generalizing story based on input
       famous_stories.push({ title: "Celestial Charmer", summary: "Known for her beauty and charm, often involved in divine dramas and interactions with gods and sages." });
    }
    if (ap.name === "Tilottama" && ap.story.includes("Sunda and Upasunda")) {
       famous_stories.push({ title: "Creation to destroy Sunda and Upasunda", summary: "Created by Vishvakarma, combining all that was best from everything, to cause discord between the invincible Asura brothers Sunda and Upasunda, leading to their mutual destruction." });
    }


    return {
        id,
        name: ap.name,
        sanskrit_name: ap.sanskrit_name,
        epithet: ap.meaning,
        associated_with: ap.associated_deity ? [ap.associated_deity] : ["Indra's Court"], // Default if not specified
        skills: ap.qualities || ["Dance", "Music", "Beauty"], // Map qualities to skills
        famous_stories,
        symbolism: ap.symbolism,
        imageUrl: apsaraImageMap[ap.name] || `https://picsum.photos/seed/${id}/600/400`,
        imageAiHint: `${ap.name.toLowerCase()} apsara dance celestial`,
        mantra: ap.mantra,
        associated_chakra: ap.associated_chakra,
        qualities: ap.qualities,
        vehicle: ap.vehicle,
        associated_deity: ap.associated_deity
    };
});


export const APSARAS_CATEGORY_DATA: ApsarasCategoryData = {
  id: "category_apsaras_01",
  category: "Apsaras",
  description: "Apsaras are celestial nymphs in Hindu mythology, renowned for their ethereal beauty, grace, and skill in dance and music. They typically reside in Svarga (Indra's heaven) and serve as entertainers for the Devas. While often benevolent, they are sometimes sent by Indra to distract sages and kings from their austerities.",
  imageUrl: "https://i.pinimg.com/736x/81/62/8c/81628c0f0203e112cc35c7a099ae313e.jpg",
  imageAiHint: "celestial nymphs dance ethereal",
  origin_and_nature: {
    mythological_origin: "Born from the churning of the cosmic ocean (Samudra Manthan) or created by Brahma. Some are daughters of Kashyapa and Muni.",
    appearance_and_abilities: "Supremely beautiful, youthful, adorned with celestial garments and jewels. Capable of flight, changing forms, and bestowing boons or curses.",
    types_of_apsaras: "Often distinguished into Laukika (worldly, who marry mortals) and Daivika (divine, who serve gods)."
  },
  roles_and_functions: {
    celestial_entertainers: "Perform enchanting dances and music in the court of Indra and at divine celebrations.",
    messengers_and_tempters: "Sent by Indra to test the penance of sages or disrupt the power of kings. They can also act as messengers of gods.",
    reward_for_heroes: "Sometimes offered as companions or rewards to heroic warriors and righteous kings in Svarga."
  },
  notable_apsaras: mappedApsaras,
  scriptural_mentions: {
    vedas: "Mentioned in Rigveda and Atharvaveda, often associated with Gandharvas and water.",
    epics: "Numerous stories in Ramayana and Mahabharata involving Apsaras interacting with gods, sages, and heroes.",
    puranas: "Elaborate on their origins, types, and roles in various cosmic events and divine narratives.",
    kavya: "Frequent subjects in classical Sanskrit poetry and drama, celebrated for their beauty and charm."
  },
  symbolism_and_cultural_influence: {
    art_and_sculpture: "Widely depicted in temple carvings (e.g., Khajuraho, Konark) and classical Indian paintings, embodying grace and beauty.",
    dance_and_music: "Considered celestial patrons of classical Indian dance forms (like Bharatanatyam, Odissi) and music.",
    metaphorical_representation: "Represent beauty, desire, illusion (maya), and the transient nature of worldly pleasures."
  },
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Apsara",
    wisdomlib: "https://www.wisdomlib.org/definition/apsaras"
  }
};
