
export interface WarriorEntry {
  id: string; // Added id for linking
  name: string;
  title: string;
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

export interface WarriorCategoryData {
  id: string;
  category: "Warrior";
  description: string;
  warriors: WarriorEntry[];
  imageUrl?: string;
  imageAiHint?: string;
}

const warriorImageMap: Record<string, string> = {
  "Parashurama": "https://i.pinimg.com/736x/5d/b8/13/5db813059e650795be8d0a3774a5297c.jpg",
  "Abhimanyu": "https://i.pinimg.com/736x/01/ab/af/01abaf94b7bcead945cc58ad7dd9a19d.jpg",
  "Bhima": "https://i.pinimg.com/736x/cc/cf/70/cccf7007381a9b41abb450ae239aa4ee.jpg",
  "Hanuman": "https://i.pinimg.com/736x/5f/1c/d1/5f1cd1bc773ddd42df08972b4ef17576.jpg",
  "Karna": "https://i.pinimg.com/736x/06/9c/ea/069cea1e2de068c56bacfe2a3f2917d2.jpg",
  "Indrajit (Meghnadha)": "https://i.pinimg.com/736x/bf/0b/07/bf0b07387fa6b159abd82f1352af580d.jpg",
  "Nila": "https://i.pinimg.com/736x/b6/44/36/b64436f904cffbece90539e4b24fd7c6.jpg",
  "Shatrughna": "https://i.pinimg.com/736x/e4/83/50/e483508722976c8a822094a98fabc177.jpg",
  "Kichaka": "https://i.pinimg.com/736x/fe/4d/fc/fe4dfc6fdfcde957fa111f00e2618818.jpg"
};


export const WARRIOR_CATEGORY_DATA: WarriorCategoryData = {
  id: "category_warrior_01",
  category: "Warrior",
  description: "Prominent warriors from Sanatan Dharma, spanning mythological and historical narratives, celebrated for their courage, skill in warfare, and commitment to righteousness.",
  imageUrl: "https://i.pinimg.com/736x/35/dd/5b/35dd5b7716b9744cd71ad981505e996d.jpg",
  imageAiHint: "battle scene ancient",
  warriors: [
    {
      id: "parashurama", // Matches ID in ALL_CHARACTERS
      name: "Parashurama",
      title: "Sixth Avatar of Vishnu",
      period: "Treta Yuga",
      description: "A Brahmin warrior-sage known for wielding an axe (parashu) and eradicating corrupt Kshatriyas to restore dharma. He is one of the Chiranjivis (immortals) and is prophesied to be the martial guru of Kalki, the final avatar of Vishnu.",
      notable_acts: [
        "Destroyed the Kshatriya class 21 times",
        "Reclaimed land from the sea to create the Konkan region"
      ],
      scriptures: ["Mahabharata", "Bhagavata Purana", "Skanda Purana"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Parashurama"
      },
      imageUrl: warriorImageMap["Parashurama"],
      imageAiHint: "sage warrior axe"
    },
    {
      id: "abhimanyu",
      name: "Abhimanyu",
      title: "Prince of the Pandavas",
      period: "Dvapara Yuga",
      description: "Son of Arjuna and Subhadra, Abhimanyu was a valiant young warrior who played a crucial role in the Kurukshetra War. He is renowned for his bravery in penetrating the Chakravyuha formation, where he fought valiantly before being overwhelmed.",
      notable_acts: [
        "Entered and fought within the Chakravyuha formation",
        "Defeated numerous Kaurava warriors before his demise"
      ],
      scriptures: ["Mahabharata"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Abhimanyu"
      },
      imageUrl: warriorImageMap["Abhimanyu"],
      imageAiHint: "young warrior chariot"
    },
    {
      id: "bhima",
      name: "Bhima",
      title: "Second Pandava Brother",
      period: "Dvapara Yuga",
      description: "Known for his immense strength and loyalty, Bhima was a formidable warrior in the Mahabharata. He played a pivotal role in the Kurukshetra War, defeating numerous adversaries and fulfilling his vow to slay Duryodhana.",
      notable_acts: [
        "Killed all 100 Kaurava brothers",
        "Defeated powerful warriors like Duryodhana and Jarasandha"
      ],
      scriptures: ["Mahabharata"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Bhima"
      },
      imageUrl: warriorImageMap["Bhima"],
      imageAiHint: "strong warrior mace"
    },
    {
      id: "hanuman", // Matches ID in ALL_CHARACTERS
      name: "Hanuman",
      title: "Devotee of Lord Rama",
      period: "Treta Yuga",
      description: "A Vanara (monkey) warrior and ardent devotee of Rama, Hanuman possessed immense strength, intelligence, and the ability to change form. He played a crucial role in the Ramayana, including the search for Sita and the battle against Ravana.",
      notable_acts: [
        "Leaped across the ocean to Lanka",
        "Burned down a portion of Lanka with his fiery tail",
        "Brought the Sanjeevani herb to revive Lakshmana"
      ],
      scriptures: ["Ramayana", "Hanuman Chalisa"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Hanuman"
      },
      imageUrl: warriorImageMap["Hanuman"],
      imageAiHint: "monkey warrior mace"
    },
    {
      id: "karna",
      name: "Karna",
      title: "King of Anga",
      period: "Dvapara Yuga",
      description: "Born to Kunti and the sun god Surya, Karna was a peerless archer and warrior. Despite facing societal challenges due to his upbringing, he remained loyal to Duryodhana and fought valiantly in the Kurukshetra War.",
      notable_acts: [
        "Mastered divine weapons under Parashurama",
        "Fought Arjuna in a climactic battle"
      ],
      scriptures: ["Mahabharata"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Karna"
      },
      imageUrl: warriorImageMap["Karna"],
      imageAiHint: "archer warrior armor"
    },
    {
      id: "indrajit",
      name: "Indrajit (Meghnadha)",
      title: "Son of Ravana",
      period: "Treta Yuga",
      description: "A formidable Rakshasa warrior, Indrajit was the son of Ravana. He was renowned for his mastery over celestial weapons and his ability to become invisible during battle.",
      notable_acts: [
        "Defeated Indra, earning the name 'Indrajit'",
        "Wounded Lakshmana and Hanuman in battle"
      ],
      scriptures: ["Ramayana"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Indrajit"
      },
      imageUrl: warriorImageMap["Indrajit (Meghnadha)"],
      imageAiHint: "demon warrior magic"
    },
    {
      id: "nila-vanara", // Specific ID to differentiate if needed
      name: "Nila",
      title: "Commander of Vanara Army",
      period: "Treta Yuga",
      description: "A Vanara chieftain and son of Agni, Nila was the commander-in-chief of the Vanara army under Sugriva. He played a significant role in the battle against Ravana's forces.",
      notable_acts: [
        "Led the Vanara army in the battle of Lanka",
        "Killed several Rakshasa warriors, including Nikumbha and Prahasta"
      ],
      scriptures: ["Ramayana"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Nila_(Ramayana)"
      },
      imageUrl: warriorImageMap["Nila"],
      imageAiHint: "monkey commander battle"
    },
    {
      id: "shatrughna",
      name: "Shatrughna",
      title: "Brother of Rama",
      period: "Treta Yuga",
      description: "The youngest brother of Rama, Shatrughna is known for his role in slaying the demon Lavanasura and establishing control over the city of Mathura.",
      notable_acts: [
        "Killed Lavanasura, a formidable demon",
        "Ruled over Mathura after its liberation"
      ],
      scriptures: ["Ramayana"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Shatrughna"
      },
      imageUrl: warriorImageMap["Shatrughna"],
      imageAiHint: "prince warrior divine"
    },
    {
      id: "kichaka",
      name: "Kichaka",
      title: "Commander of Matsya Kingdom",
      period: "Dvapara Yuga",
      description: "Kichaka was the powerful commander-in-chief of King Virata's army. He met his end at the hands of Bhima after attempting to molest Draupadi during the Pandavas' incognito exile.",
      notable_acts: [
        "Defeated King Susharman of Trigarta multiple times",
        "Was killed by Bhima for his misdeeds"
      ],
      scriptures: ["Mahabharata"],
      external_links: {
        "wikipedia": "https://en.wikipedia.org/wiki/Kichaka"
      },
      imageUrl: warriorImageMap["Kichaka"],
      imageAiHint: "commander warrior strong"
    }
  ]
};

