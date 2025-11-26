
export interface MuniEntry {
  id: string;
  name: string;
  titles: string[];
  parents: string[] | string;
  spouse?: string | string[];
  children?: string[];
  period: string;
  description: string;
  notable_acts: string[];
  scriptures: string[];
  external_links: {
    wikipedia: string;
  };
  birth_place?: string;
  death_place?: string;
  philosophy?: string;
  imageUrl: string;
  imageAiHint: string;
}

export interface MuniCategoryData {
  id: string;
  category: "Muni";
  description: string;
  munis: MuniEntry[];
  imageUrl?: string;
  imageAiHint?: string;
}

const muniImageMap: Record<string, string> = {
  "Vasishtha": "https://i.pinimg.com/736x/9b/4f/72/9b4f7218211185b030c4f9feb9e5239e.jpg",
  "Vishvamitra": "https://i.pinimg.com/736x/12/59/d9/1259d9d20d0ff5c1af5e17c09ec017f7.jpg",
  "Bharadvaja": "https://i.pinimg.com/736x/ad/a5/76/ada576783addd2ea7ef6f86fde246a36.jpg",
  "Vamadeva": "https://i.pinimg.com/736x/31/93/b2/3193b289da2d773036b4a13685102a3a.jpg",
  "Devala": "https://i.pinimg.com/736x/7f/94/f9/7f94f9cb28687fee98b3c87d80439eef.jpg",
  "Yamunacharya": "https://i.pinimg.com/736x/9c/3c/a1/9c3ca108dadd65fa9be1b45a71c3c5ed.jpg", 
};


const munisInputData = [
    {
      id: "vasishtha-muni",
      name: "Vasishtha",
      titles: ["Brahmarishi", "Saptarishi"],
      parents: ["Brahma", "Mitra-Varuna and Urvashi"],
      spouse: "Arundhati",
      children: ["Shakti", "Citraketu", "Surocis", "Virajas", "Mitra", "Ulbana", "Vasubhrdyana", "Dyumat", "Asmaka"],
      period: "Vedic Period",
      description: "One of the most revered Vedic rishis, Vasishtha is credited with authoring Mandala 7 of the Rigveda. He served as the royal priest to King Sudās and was a proponent of harmony between different philosophical ideologies.",
      notable_acts: [
        "Authored Mandala 7 of the Rigveda",
        "Served as the royal priest to King Sudās",
        "Engaged in philosophical debates with Vishvamitra"
      ],
      scriptures: ["Rigveda", "Yoga Vasishtha", "Vasishtha Samhita"],
      external_links: {
        wikipedia: "https://en.wikipedia.org/wiki/Vasishtha"
      },
      imageAiHint: "sage vedic scholar"
    },
    {
      id: "vishvamitra-muni",
      name: "Vishvamitra",
      titles: ["Brahmarishi", "Rajarshi", "Saptarishi"],
      parents: ["Gādhi"],
      children: ["Madhuchhanda", "Ashtaka", "Shunahshepa", "Sushruta", "Shakuntala"],
      period: "Vedic Period",
      description: "Originally a king named Kaushika, Vishvamitra renounced his throne to become a sage. He is credited with composing most of Mandala 3 of the Rigveda, including the Gayatri Mantra.",
      notable_acts: [
        "Composed the Gayatri Mantra",
        "Guided Rama and Lakshmana in the Ramayana",
        "Achieved the status of Brahmarishi after intense penance"
      ],
      scriptures: ["Rigveda", "Ramayana"],
      external_links: {
        wikipedia: "https://en.wikipedia.org/wiki/Vishvamitra"
      },
      imageAiHint: "sage king meditation"
    },
    {
      id: "bharadvaja-muni",
      name: "Bharadvaja",
      titles: ["Brahmarishi", "Saptarishi"],
      parents: ["Brihaspati"],
      spouse: "Sushila",
      children: ["Garga", "Drona", "Ilavida"],
      period: "Vedic Period",
      description: "A revered Vedic sage, Bharadvaja was a scholar, economist, grammarian, and physician. He authored Mandala 6 of the Rigveda and is mentioned in various Hindu texts.",
      notable_acts: [
        "Authored Mandala 6 of the Rigveda",
        "Fathered Dronacharya, the guru of Pandavas and Kauravas",
        "Contributed to ancient Indian medical knowledge"
      ],
      scriptures: ["Rigveda", "Mahabharata"],
      external_links: {
        wikipedia: "https://en.wikipedia.org/wiki/Bharadvaja"
      },
      imageAiHint: "sage scholar physician"
    },
    {
      id: "vamadeva-muni",
      name: "Vamadeva",
      titles: ["Rishi"],
      parents: ["Gotama"],
      period: "Vedic Period",
      description: "Vamadeva is credited as the author of Mandala 4 of the Rigveda. He is mentioned in the Upanishads and is known for his spiritual insights.",
      notable_acts: [
        "Authored Mandala 4 of the Rigveda",
        "Engaged in philosophical discussions in the Upanishads"
      ],
      scriptures: ["Rigveda", "Brihadaranyaka Upanishad", "Aitareya Upanishad"],
      external_links: {
        wikipedia: "https://en.wikipedia.org/wiki/Vamadeva"
      },
      imageAiHint: "sage spiritual insight"
    },
    {
      id: "devala-muni",
      name: "Devala",
      titles: ["Rishi"],
      parents: ["Pratyusha (one of the Vasus) or Kashyapa"], 
      period: "Ancient Period",
      description: "Devala is acknowledged as a great authority like Narada and Vyasa. He is mentioned by Arjuna in the Bhagavad Gita and is considered the progenitor of the Devanga community.",
      notable_acts: [
        "Mentioned in the Bhagavad Gita by Arjuna",
        "Progenitor of the Devanga community",
        "Introduced weaving to the world (Devanga tradition)"
      ],
      scriptures: ["Bhagavad Gita", "Devanga Purana", "Mahabharata"],
      external_links: {
        wikipedia: "https://en.wikipedia.org/wiki/Devala"
      },
      imageAiHint: "sage authority ancient"
    },
    {
      id: "yamunacharya-muni",
      name: "Yamunacharya",
      titles: ["Acharya"],
      parents: ["Ishvara Bhatta and Ranganayaki"], 
      birth_place: "Kattumannarkoil, Tamil Nadu, India",
      death_place: "Srirangam",
      philosophy: "Vishistadvaita",
      period: "10th century CE",
      description: "Yamunacharya, also known as Alavandar, was a Vishistadvaita philosopher and the preceptor of Ramanuja. He played a significant role in the Sri Vaishnava tradition.",
      notable_acts: [
        "Defeated royal priest Akkiyalvan in debate as a teenager",
        "Composed Chatushloki and Stotra Ratna",
        "Mentored Ramanuja in Vishistadvaita philosophy"
      ],
      scriptures: ["Chatushloki", "Stotra Ratna", "Siddhitraya"],
      external_links: {
        wikipedia: "https://en.wikipedia.org/wiki/Yamunacharya"
      },
      imageAiHint: "philosopher acharya scholar"
    }
  ];

const mappedMunis: MuniEntry[] = munisInputData.map(muni => ({
  ...muni,
  imageUrl: muniImageMap[muni.name] || `https://picsum.photos/seed/${muni.id}/600/400`,
}));

export const MUNI_CATEGORY_DATA: MuniCategoryData = {
  id: "category_muni_01",
  category: "Muni",
  description: "Prominent sages (Munis) in Sanātana Dharma, revered for their spiritual insights, contributions to Vedic literature, and roles in Hindu epics.",
  imageUrl: "https://i.pinimg.com/736x/1c/b0/7d/1cb07d049855a1e593560b18b6ba9e57.jpg",
  imageAiHint: "sages meditation group",
  munis: mappedMunis
};
