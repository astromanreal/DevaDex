
export interface KingEntry {
  id: string; // Added id for linking
  name: string;
  title: string;
  dynasty: string;
  period: string; 
  description: string;
  notable_acts: string[];
  scriptures?: string[]; 
  external_links: {
    wikipedia: string;
  };
  imageUrl: string;
  imageAiHint: string;
}

export interface KingCategoryData {
  id: string;
  category: "King";
  description: string;
  kings: KingEntry[];
  imageUrl?: string;
  imageAiHint?: string;
}

export const KING_CATEGORY_DATA: KingCategoryData = {
  id: "category_king_01",
  category: "King",
  description: "Prominent kings from Sanatan Dharma, spanning mythological and historical narratives, renowned for their valor, devotion, and contributions to dharma.",
  imageUrl: "https://i.pinimg.com/736x/a4/8d/86/a48d86749c0ad734f133caacd9f99720.jpg",
  imageAiHint: "royal court historical",
  kings: [
    {
      id: "mahabali",
      name: "Mahabali",
      title: "King of the Asuras",
      dynasty: "Daitya",
      period: "Treta Yuga",
      description: "A benevolent and generous king, Mahabali was renowned for his devotion and righteousness. He was granted immortality and is celebrated during the festival of Onam.",
      notable_acts: [
        "Performed the Ashvamedha Yajna",
        "Donated three paces of land to Vamana, leading to his descent to Sutala"
      ],
      scriptures: ["Vamana Purana", "Bhagavata Purana", "Mahabharata"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Mahabali"
      },
      imageUrl: "https://i.pinimg.com/736x/23/e8/e7/23e8e749fe4576b2fe7229d9365e395b.jpg",
      imageAiHint: "king benevolent ancient"
    },
    {
      id: "indradyumna",
      name: "Indradyumna",
      title: "King of Avanti",
      dynasty: "Suryavamsha",
      period: "Satya Yuga",
      description: "A devout king credited with establishing the Jagannath Temple in Puri. His devotion led to the manifestation of the deities Jagannath, Balabhadra, and Subhadra.",
      notable_acts: [
        "Constructed the Jagannath Temple",
        "Installed the deities as per divine instructions"
      ],
      scriptures: ["Skanda Purana", "Brahma Purana"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Indradyumna"
      },
      imageUrl: "https://i.pinimg.com/736x/23/b6/bf/23b6bfa49c096d91ebb52fb34d7f3cb3.jpg",
      imageAiHint: "king devout temple"
    },
    {
      id: "parikshit",
      name: "Parikshit",
      title: "King of Hastinapura",
      dynasty: "Kuru",
      period: "Dvapara Yuga",
      description: "Grandson of Arjuna, Parikshit was known for his wisdom and valor. His reign marked the beginning of Kali Yuga.",
      notable_acts: [
        "Held the Ashvamedha Yajna",
        "Cursed by a sage leading to his death by Takshaka"
      ],
      scriptures: ["Mahabharata", "Bhagavata Purana"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Parikshit"
      },
      imageUrl: "https://i.pinimg.com/736x/87/41/1f/87411f404c8f0540c3fd8bd0f61a1f30.jpg",
      imageAiHint: "king wise valorous"
    },
    {
      id: "vajradatta",
      name: "Vajradatta",
      title: "King of Pragjyotisha",
      dynasty: "Naraka",
      period: "Post-Mahabharata",
      description: "Son of Bhagadatta, Vajradatta attempted to avenge his father's defeat by challenging Arjuna during Yudhishthira's Ashvamedha Yajna.",
      notable_acts: [
        "Engaged in battle with Arjuna",
        "Defeated during the Ashvamedha campaign"
      ],
      scriptures: ["Mahabharata", "Kalika Purana"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Vajradatta"
      },
      imageUrl: "https://i.pinimg.com/736x/4c/64/80/4c64809e1dfbec457b43b880ce24b187.jpg",
      imageAiHint: "king warrior battle"
    },
    {
      id: "ashvapati",
      name: "Ashvapati",
      title: "King of Kekeya",
      dynasty: "Kekaya",
      period: "Treta Yuga",
      description: "Father of Kaikeyi, one of King Dasharatha's queens. Known for his wisdom and the unique boon of understanding animal speech.",
      notable_acts: [
        "Fathered Kaikeyi, mother of Bharata",
        "Possessed the ability to understand birds"
      ],
      scriptures: ["Ramayana"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Ashvapati"
      },
      imageUrl: "https://i.pinimg.com/736x/e7/70/b5/e770b5a6b18fb2838e0d63d88be7410b.jpg",
      imageAiHint: "king wise ancient"
    },
    {
      id: "chandragupta-maurya",
      name: "Chandragupta Maurya",
      title: "Emperor of the Maurya Dynasty",
      dynasty: "Maurya",
      period: "321–297 BCE",
      description: "Founder of the Maurya Empire, he unified most of the Indian subcontinent and established a centralized government.",
      notable_acts: [
        "Defeated the Nanda Dynasty",
        "Established a vast empire stretching across India"
      ],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Chandragupta_Maurya"
      },
      imageUrl: "https://i.pinimg.com/736x/0c/8f/23/0c8f23220acc3c6553af419b7793929d.jpg",
      imageAiHint: "emperor historical india"
    },
    {
      id: "samudragupta",
      name: "Samudragupta",
      title: "Emperor of the Gupta Dynasty",
      dynasty: "Gupta",
      period: "c. 335–375 CE",
      description: "Known as the 'Napoleon of India', he expanded the Gupta Empire through conquests and was a patron of arts and culture.",
      notable_acts: [
        "Conducted extensive military campaigns",
        "Promoted classical arts and literature"
      ],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Samudragupta"
      },
      imageUrl: "https://i.pinimg.com/736x/78/0a/51/780a51d1f90f3903230d60d7ba97c1ad.jpg",
      imageAiHint: "emperor gupta historical"
    },
    {
      id: "raja-raja-chola-i",
      name: "Raja Raja Chola I",
      title: "Emperor of the Chola Dynasty",
      dynasty: "Chola",
      period: "985–1014 CE",
      description: "A formidable ruler who expanded the Chola Empire and commissioned the Brihadeeswarar Temple.",
      notable_acts: [
        "Expanded the empire across South India and Sri Lanka",
        "Built the Brihadeeswarar Temple in Thanjavur"
      ],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Raja_Raja_Chola_I"
      },
      imageUrl: "https://i.pinimg.com/736x/bf/aa/f3/bfaaf3d26b6a75de57b628135bf423e1.jpg",
      imageAiHint: "emperor chola temple"
    },
    {
      id: "krishnadevaraya",
      name: "Krishnadevaraya",
      title: "Emperor of the Vijayanagara Empire",
      dynasty: "Tuluva",
      period: "1509–1529 CE",
      description: "A celebrated ruler known for his military prowess and patronage of arts and literature.",
      notable_acts: [
        "Defeated multiple rival kingdoms",
        "Supported Telugu and Sanskrit literature"
      ],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Krishnadevaraya"
      },
      imageUrl: "https://i.pinimg.com/736x/61/8c/f0/618cf01f18cfe45a3fb3145ec8b1b88b.jpg",
      imageAiHint: "emperor vijayanagara arts"
    },
    {
      id: "shivaji-maharaj",
      name: "Chhatrapati Shivaji Maharaj",
      title: "Founder of the Maratha Empire",
      dynasty: "Bhosale",
      period: "1630–1680 CE",
      description: "A visionary leader who established the Maratha Empire and challenged Mughal dominance.",
      notable_acts: [
        "Established a competent and progressive civil rule",
        "Promoted the use of Marathi and Sanskrit in administration"
      ],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Shivaji"
      },
      imageUrl: "https://i.pinimg.com/736x/93/e7/b8/93e7b8129c40ca5e2ff52da68aeafc7f.jpg",
      imageAiHint: "king maratha warrior"
    }
  ]
};
