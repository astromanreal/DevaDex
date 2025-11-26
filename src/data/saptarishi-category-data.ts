
import type { CharacterType, TextSource, Yuga } from '@/lib/types';

export interface SaptarishiEntry {
  id: string;
  name: string;
  sanskrit_name: string;
  meaning: string;
  symbolism: string;
  associated_chakra: string;
  qualities: string[];
  story: string;
  mantra: string;
  contribution: string;
  vehicle: string;
  associated_deity: string;
  imageUrl: string;
  imageAiHint: string;
  titles?: string[];
  spouse?: string;
  children?: string[];
  lineage?: string;
  epic?: TextSource[];
}

export interface SaptarishiCategoryData {
  id: string;
  category: "Saptarishi";
  description: string;
  rishis: SaptarishiEntry[];
  imageUrl?: string;
  imageAiHint?: string;
  introduction: string;
  scriptural_references: TextSource[];
  external_links: {
    wikipedia: string;
    vedic_texts: string;
  };
}

const saptarishiImageMap: Record<string, string> = {
  "Atri": "https://i.pinimg.com/736x/93/c3/44/93c3442f5fb1cb8c44830b8e60aa7c5d.jpg",
  "Bharadwaja": "https://i.pinimg.com/736x/87/78/6c/87786cffbcd36243d7809ef527467254.jpg",
  "Gautama": "https://i.pinimg.com/736x/e3/40/b0/e340b0ee643d5983752bc19fb98ec21d.jpg",
  "Vasistha": "https://i.pinimg.com/736x/ff/99/cf/ff99cfe60c698b09a59b3020ebc2d7a7.jpg",
  "Jamadagni": "https://i.pinimg.com/736x/be/42/71/be427187f21813fb0fb596556a8590f8.jpg",
  "Kashyapa": "https://i.pinimg.com/736x/66/1a/32/661a321eec169a3881c19252513349f0.jpg",
  "Vishwamitra": "https://i.pinimg.com/736x/7e/19/6c/7e196cbac38347cbe137bbd425c15476.jpg"
};

const saptarishiInputData = [
  {
    name: "Atri",
    sanskrit_name: "अत्रि",
    meaning: "One who devours or consumes",
    symbolism: "Transcendence of the three gunas (Sattva, Rajas, Tamas), spiritual knowledge, penance",
    associated_chakra: "Ajna (Third Eye Chakra)",
    qualities: ["Wisdom", "Knowledge", "Self-control", "Devotion"],
    story: "Atri Rishi is a revered Vedic sage, credited with composing many hymns in the Rigveda. His wife, Anasuya, was an embodiment of chastity. Together, their intense penance led to the birth of their sons Dattatreya, Durvasa, and Chandra, who were partial incarnations of the Trimurti.",
    mantra: "ॐ अत्रि ऋषये नमः",
    contribution: "Authored the fifth Mandala of the Rigveda, contributed significantly to Ayurvedic and astronomical knowledge.",
    vehicle: "None",
    associated_deity: "Trimurti (Brahma, Vishnu, Shiva)",
    spouse: "Anasuya",
    children: ["Dattatreya", "Durvasa", "Chandra"]
  },
  {
    name: "Bharadwaja",
    sanskrit_name: "भारद्वाज",
    meaning: "One who brings nourishment or wealth",
    symbolism: "Teaching, wisdom, learning, medicine",
    associated_chakra: "Vishuddha (Throat Chakra)",
    qualities: ["Knowledge", "Teaching", "Purity", "Discipline"],
    story: "Bharadwaja was a great economist, physician, and scholar. He is the father of Dronacharya, the teacher of the Pandavas and Kauravas. He received Vedic knowledge directly from Indra through his deep meditation and austerities.",
    mantra: "ॐ भारद्वाजाय नमः",
    contribution: "Authored the sixth Mandala of the Rigveda, and is credited with works on Ayurveda and grammar.",
    vehicle: "None",
    associated_deity: "Brahma, Indra",
    spouse: "Susheela",
    children: ["Dronacharya", "Garga"]
  },
  {
    name: "Gautama",
    sanskrit_name: "गौतम",
    meaning: "Dispeller of darkness",
    symbolism: "Righteousness, justice, logic",
    associated_chakra: "Muladhara (Root Chakra)",
    qualities: ["Righteousness", "Purity", "Justice", "Intellect"],
    story: "Gautama Maharishi is one of the earliest Saptarishis. He is known for his role in the Ramayana, where his wife Ahalya was cursed and later redeemed by Lord Rama. He is also the author of the Gautama Dharma Sutra.",
    mantra: "ॐ गौतमाय नमः",
    contribution: "Composed the Gautama Dharma Sutra, one of the earliest law books, and founded the Nyaya school of philosophy.",
    vehicle: "None",
    associated_deity: "Agni",
    spouse: "Ahalya",
    children: ["Shatananda"]
  },
  {
    name: "Vasistha",
    sanskrit_name: "वशिष्ठ",
    meaning: "Most excellent, best",
    symbolism: "Wisdom, governance, divine law",
    associated_chakra: "Sahasrara (Crown Chakra)",
    qualities: ["Wisdom", "Grace", "Teaching", "Patience"],
    story: "Vasistha was the Rajguru (royal preceptor) of the Ikshvaku dynasty, including King Dasharatha and Lord Rama. He is the author of the Yoga Vasistha, a profound spiritual text, and had a famous rivalry with sage Vishwamitra over the divine cow Kamadhenu.",
    mantra: "ॐ वशिष्ठाय नमः",
    contribution: "Authored the seventh Mandala of the Rigveda and the Yoga Vasistha. A central figure in the Ramayana.",
    vehicle: "None",
    associated_deity: "Saraswati, Varuna",
    spouse: "Arundhati",
    children: ["Shakti Maharishi"]
  },
  {
    name: "Jamadagni",
    sanskrit_name: "जमदग्नि",
    meaning: "Consuming fire",
    symbolism: "Righteous anger, austerity, power",
    associated_chakra: "Manipura (Solar Plexus Chakra)",
    qualities: ["Austerity", "Power", "Righteousness", "Discipline"],
    story: "Jamadagni was a descendant of Bhrigu Rishi and the father of Parashurama, the sixth avatar of Vishnu. He possessed the divine wish-fulfilling cow Kamadhenu, which led to a fatal conflict with King Kartavirya Arjuna.",
    mantra: "ॐ जमदग्नये नमः",
    contribution: "Known for his mastery over divine weapons and his unwavering commitment to dharma.",
    vehicle: "None",
    associated_deity: "Shiva",
    spouse: "Renuka",
    children: ["Parashurama"]
  },
  {
    name: "Kashyapa",
    sanskrit_name: "कश्यप",
    meaning: "Tortoise",
    symbolism: "Creation, knowledge, progenitor of life",
    associated_chakra: "Svadhisthana (Sacral Chakra)",
    qualities: ["Creation", "Understanding", "Balance", "Nurturing"],
    story: "Kashyapa is a pivotal figure in cosmology, considered the father of Devas, Asuras, Nagas, and all of humanity through his marriages to the daughters of Daksha Prajapati. He represents the cosmic progenitor.",
    mantra: "ॐ कश्यपाय नमः",
    contribution: "Credited with authoring parts of the Atharvaveda and the Kashyapa Samhita in Ayurveda.",
    vehicle: "None",
    associated_deity: "Vishnu (as Kurma Avatar), Brahma",
    spouse: "Aditi, Diti, Danu and many others",
    children: ["Devas", "Asuras", "Nagas", "Vamana", "Garuda"]
  },
  {
    name: "Vishwamitra",
    sanskrit_name: "विश्वामित्र",
    meaning: "Friend of the Universe",
    symbolism: "Power of tapasya (austerity), knowledge, determination",
    associated_chakra: "Ajna (Third Eye Chakra)",
    qualities: ["Discipline", "Wisdom", "Power", "Perseverance"],
    story: "Born a king named Kaushika, Vishwamitra performed intense austerities to attain the status of Brahmarishi. He is credited with revealing the Gayatri Mantra and was the guru of Rama and Lakshmana, teaching them the use of divine weapons.",
    mantra: "ॐ विश्वामित्राय नमः",
    contribution: "Authored the third Mandala of the Rigveda, including the sacred Gayatri Mantra.",
    vehicle: "None",

    associated_deity: "Brahma, Gayatri Devi",
    spouse: "Menaka (briefly)",
    children: ["Shakuntala", "Sushruta"]
  }
];


const generateSaptarishiId = (name: string): string => `saptarishi-${name.toLowerCase().replace(/\s+/g, '-')}`;

export const SAPTARISHI_CATEGORY_DATA: SaptarishiCategoryData = {
  id: "category_saptarishi_01",
  category: "Saptarishi",
  description: "The Saptarishis (Seven Great Sages) are revered seers in Hindu tradition, considered mind-born sons of Brahma and patriarchs of various Gotra lineages. They are instrumental in upholding Dharma and guiding humanity through cosmic cycles.",
  introduction: "The Saptarishis are celebrated for their profound wisdom, austere penances, and contributions to Vedic scriptures. Their names and roles vary slightly across different Puranas and epochs, but their collective significance as pillars of cosmic order and divine knowledge remains constant.",
  rishis: saptarishiInputData.map(rishi => ({
    ...rishi,
    id: generateSaptarishiId(rishi.name), 
    imageUrl: saptarishiImageMap[rishi.name] || `https://picsum.photos/seed/${generateSaptarishiId(rishi.name)}/600/400`,
    imageAiHint: `sage ${rishi.name.toLowerCase()} wisdom`,
    titles: ["Saptarishi", "Maharishi"],
    lineage: "Manasaputra (Mind-born son of Brahma)",
    epic: ["Vedas", "Puranas"]
  })),
  scriptural_references: ["Vedas", "Puranas", "Upanishads", "Mahabharata", "Ramayana"],
  external_links: {
    wikipedia: "https://en.wikipedia.org/wiki/Saptarishi",
    vedic_texts: "https://www.sacred-texts.com/hin/vedas/"
  },
  imageUrl: "https://i.pinimg.com/736x/0d/09/95/0d0995293b43cf053664bb0e2accaff6.jpg",
  imageAiHint: "seven sages stars constellation"
};
