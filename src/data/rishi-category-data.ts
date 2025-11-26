
export interface RishiEntry {
  id: string; 
  name: string;
  titles: string[];
  spouse?: string | string[];
  children?: string[];
  contributions: string[];
  associations: string[];
  scriptures: string[];
  notable: string;
  former_identity?: string;
  philosophy?: string;
  father?: string; 
  imageUrl: string; 
  imageAiHint: string; 
}

export interface RishiCategoryData {
  id: string;
  category: "Rishi";
  description: string;
  rishis: RishiEntry[];
  imageUrl?: string;
  imageAiHint?: string;
}

const rishiImageMap: Record<string, string> = {
  "Atri": "https://i.pinimg.com/736x/e6/0a/3b/e60a3b2e708dfd45c55a993b217da3bb.jpg",
  "Bhrigu": "https://i.pinimg.com/736x/67/e0/d2/67e0d226cb06dd55871d0b562df3f623.jpg",
  "Vashishtha": "https://i.pinimg.com/736x/7e/19/6c/7e196cbac38347cbe137bbd425c15476.jpg",
  "Vishvamitra": "https://i.pinimg.com/736x/60/1d/37/601d37d40b289da44c5fe4c2f0601012.jpg",
  "Angiras": "https://i.pinimg.com/736x/7a/96/c0/7a96c0efadfb7d385d02c011b314709e.jpg",
  "Jamadagni": "https://i.pinimg.com/736x/be/42/71/be427187f21813fb0fb596556a8590f8.jpg",
  "Markandeya": "https://i.pinimg.com/736x/40/04/95/4004951dec70e0ecc6e1959ea3c2462a.jpg",
  "Kapila": "https://i.pinimg.com/736x/9b/4f/72/9b4f7218211185b030c4f9feb9e5239e.jpg",
  "Parashara": "https://i.pinimg.com/736x/8d/dc/2e/8ddc2e8e55260acb4e83dd525a748d40.jpg",
  "Shuka": "https://i.pinimg.com/736x/9d/3e/d9/9d3ed9ba60e4d48ec54bcb84baa58e0f.jpg"
};

const rishisInputData: Omit<RishiEntry, 'id' | 'imageUrl' | 'imageAiHint'>[] = [
    {
      name: "Atri",
      titles: ["Saptarishi", "Maharishi"],
      spouse: "Anusuya",
      children: ["Dattatreya", "Durvasa", "Chandra (in some accounts)"],
      contributions: ["Hymns in Rigveda", "Founding of the Atri Gotra"],
      associations: ["Saptarishi", "Rigveda", "Anasuya as embodiment of chastity"],
      scriptures: ["Rigveda", "Puranas", "Ramayana"],
      notable: "Father of the divine sage Dattatreya and Durvasa."
    },
    {
      name: "Bhrigu",
      titles: ["Maharishi", "Saptarishi"],
      spouse: "Khyati",
      children: ["Shukracharya", "Bhargavi"],
      contributions: ["Bhrigu Samhita", "Philosophy on karma and rebirth"],
      associations: ["Guru of the Asuras", "Bhargava lineage"],
      scriptures: ["Rigveda", "Bhrigu Samhita", "Puranas"],
      notable: "Author of early texts on astrology and progenitor of Bhargavas."
    },
    {
      name: "Vashishtha",
      titles: ["Brahmarishi", "Saptarishi"],
      spouse: "Arundhati",
      children: ["Shakti Maharishi (father of Parashara)"],
      contributions: ["Yoga Vashishtha", "Rigveda hymns"],
      associations: ["Advisor to King Dasaratha", "Mentor to Rama"],
      scriptures: ["Rigveda", "Ramayana", "Yoga Vashishtha"],
      notable: "Represents peaceful spiritual wisdom and is regarded as a great teacher."
    },
    {
      name: "Vishvamitra",
      titles: ["Brahmarishi"],
      former_identity: "King Kaushika",
      contributions: ["Gayatri Mantra", "Guidance of Rama in Ramayana"],
      associations: ["Rigveda composer", "Bhagiratha's ancestor"],
      scriptures: ["Rigveda", "Ramayana"],
      notable: "Attained Brahmarishi status through intense austerity."
    },
    {
      name: "Angiras",
      titles: ["Saptarishi"],
      spouse: "Surupa",
      children: ["Utathya", "Brihaspati", "Samvartana"],
      contributions: ["Hymns in Rigveda"],
      associations: ["Fire rituals", "Guru of gods"],
      scriptures: ["Rigveda", "Atharvaveda"],
      notable: "Considered one of the first teachers of divine knowledge."
    },
    {
      name: "Jamadagni",
      titles: ["Rishi"],
      spouse: "Renuka",
      children: ["Parashurama (6th Avatar of Vishnu)"],
      contributions: ["Atharva Veda verses", "Legends on dharma"],
      associations: ["Bhargava lineage"],
      scriptures: ["Puranas", "Ramayana"],
      notable: "Known for intense tapasya and spiritual powers."
    },
    {
      name: "Markandeya",
      titles: ["Rishi"],
      contributions: ["Markandeya Purana", "Narratives of Devi and cosmic time"],
      associations: ["Blessed by Shiva", "Immortality"],
      scriptures: ["Markandeya Purana", "Mahabharata"],
      notable: "Witnessed the Pralaya (cosmic dissolution)."
    },
    {
      name: "Kapila",
      titles: ["Sage"],
      philosophy: "Samkhya",
      contributions: ["Founder of Samkhya philosophy"],
      associations: ["Teacher of metaphysics", "Kapila Gita"],
      scriptures: ["Bhagavata Purana", "Samkhya texts"],
      notable: "Philosopher who explained the dualism of Purusha and Prakriti."
    },
    {
      name: "Parashara",
      titles: ["Muni"], 
      father: "Shakti Maharishi (Son of Vashishtha)", 
      children: ["Vyasa"],
      contributions: ["Parashara Smriti", "Vishnu Purana"],
      associations: ["Astrology", "Vedic Law"],
      scriptures: ["Vishnu Purana", "Brihat Parashara Hora Shastra"],
      notable: "Father of Vyasa, compiler of Mahabharata."
    },
    {
      name: "Shuka",
      titles: ["Paramahamsa"],
      father: "Vyasa",
      contributions: ["Narration of Bhagavata Purana"],
      associations: ["Detachment", "Renunciation"],
      scriptures: ["Bhagavata Purana"],
      notable: "Narrated the Purana to King Parikshit before his death."
    }
  ];

const mappedRishis: RishiEntry[] = rishisInputData.map(rishi => {
    const id = rishi.name.toLowerCase().replace(/\s+/g, '-').replace(/[()']/g, '');
    return {
        ...rishi,
        id: id,
        imageUrl: rishiImageMap[rishi.name] || `https://picsum.photos/seed/${id}/300/200`,
        imageAiHint: `sage ${rishi.name.toLowerCase()} wisdom`
    };
});


export const RISHI_CATEGORY_DATA: RishiCategoryData = {
  id: "category_rishi_01",
  category: "Rishi",
  description: "Rishis are seers or sages in Sanātana Dharma who received and transmitted the sacred Vedic knowledge. They are often credited with composing hymns, founding lineages, and guiding kings and deities through spiritual wisdom.",
  imageUrl: "https://i.pinimg.com/736x/00/b9/9c/00b99c826ef482114a25f03a3e6bd3e8.jpg",
  imageAiHint: "sages meditation ancient group",
  rishis: mappedRishis
};
