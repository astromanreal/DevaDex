
import type { TextSource } from '@/lib/types';

export interface MahadevaAvatar {
  id: string; // Character ID for linking
  name: string;
  description: string;
  symbolism: string;
  depiction: string;
  associated_legends: { title: string; summary: string }[];
  imageUrl: string;
  imageAiHint: string;
}

export interface MahadevaAvatarsCategoryData {
  id: string;
  category: "Mahadeva Avatars";
  title: string;
  description: string;
  avatars: MahadevaAvatar[];
  scriptural_references: TextSource[];
  worship_and_significance: string;
  external_links: {
    wikipedia_shiva: string;
    shiva_purana_ref: string;
  };
  imageUrl: string;
  imageAiHint: string;
}

const generateMahadevaAvatarId = (name: string): string => `mahadeva-${name.toLowerCase().replace(/\s+/g, '-')}`;

const mahadevaAvatarsInput = [
    {
      "id": 1, // Original ID, will be replaced
      "name": "Bhairava",
      "description": "Bhairava is one of the most fearsome forms of Lord Shiva, representing destruction, protection, and time. He is often depicted as a fierce deity, with a fearful expression and holding various weapons.",
      "symbolism": "Bhairava symbolizes the destruction of evil, the ultimate protector, and time’s unstoppable power. He is also associated with the annihilation of ignorance and the transcendence of fear.",
      "depiction": "Bhairava is depicted as a dark-skinned deity, often shown with a sword or trident, and sometimes with a dog as his mount.",
      "associated_legends": [
        { "title": "Destruction of Brahma’s Fifth Head", "summary": "Bhairava's creation was linked to the destruction of Brahma’s fifth head after Brahma exhibited arrogance." },
        { "title": "Guardian of Sacred Places", "summary": "Bhairava is known for his role as the guardian of the sacred places of pilgrimage." }
      ],
      "imageUrl": "https://i.pinimg.com/736x/39/cf/1e/39cf1ed4594548a5bcdce3cf8ceed66b.jpg"
    },
    {
      "id": 2,
      "name": "Pashupatinath",
      "description": "Pashupatinath is the lord of all living beings (Pashus). He is the supreme ruler of all the animals and creatures, embodying the lord of the universe.",
      "symbolism": "Pashupatinath signifies the ruler of all beings, the embodiment of the divine essence of creation, and a protector of all living entities.",
      "depiction": "He is depicted as a serene, meditative figure with a third eye, often in a posture of deep contemplation and with a symbolic crown and crescent moon.",
      "associated_legends": [
        { "title": "Granting Immortality", "summary": "Pashupatinath is said to have granted immortality to Lord Vishnu and other gods in certain stories." },
        { "title": "Guardian of Animals", "summary": "In some legends, Pashupatinath is said to have been the guardian of animals and forests, helping to restore balance in the natural world." }
      ],
      "imageUrl": "https://i.pinimg.com/736x/07/84/06/0784068c8e36d00e6ab8b8da04b31992.jpg"
    },
    {
      "id": 3,
      "name": "Rudra",
      "description": "Rudra is one of the earliest forms of Shiva in the Vedic texts, representing both the ferocious and peaceful aspects of Shiva. He is a god of storms, the hunt, and a healer.",
      "symbolism": "Rudra embodies the destructive force of nature but also the capacity for healing and renewal. He is associated with the wild, untamed forces of the universe.",
      "depiction": "Rudra is often shown as a dark, untamed figure, with matted hair and an angry expression, holding a bow and arrows.",
      "associated_legends": [
        { "title": "Creator of Natural Forces", "summary": "Rudra is believed to be the god who created the natural forces of the storm and wild animals." },
        { "title": "Healer of Devotees", "summary": "In some traditions, Rudra is known as the god who helps heal the diseases and pains of his devotees." }
      ],
      "imageUrl": "https://i.pinimg.com/736x/1b/ce/8b/1bce8b2a5bc1e48086f5b429bac26a96.jpg"
    },
    {
      "id": 4,
      "name": "Neelkanth",
      "description": "Neelkanth (the Blue-throated one) is an avatar of Shiva who consumed the poison that emerged from the churning of the ocean (Samudra Manthan), saving the universe from its harmful effects.",
      "symbolism": "Neelkanth represents self-sacrifice, the willingness to endure hardship for the welfare of others, and the power to absorb all negative forces.",
      "depiction": "Neelkanth is depicted with a blue throat, having consumed the poison, while holding the trident and surrounded by serpents.",
      "associated_legends": [
        { "title": "Samudra Manthan Poison", "summary": "The most popular story of Neelkanth comes from the Samudra Manthan, where Shiva drank the poison to protect the world from its destructive effects." },
        { "title": "Symbol of Blue Throat", "summary": "His blue throat symbolizes the consuming of poison for the benefit of all." }
      ],
      "imageUrl": "https://i.pinimg.com/736x/a3/d7/af/a3d7afdc01b2990708967af276fb3f89.jpg"
    },
    {
      "id": 5,
      "name": "Ardhanarishvara",
      "description": "Ardhanarishvara is a composite form of Lord Shiva and his consort Parvati, symbolizing the unity and inseparability of male and female principles.",
      "symbolism": "This form symbolizes the balance and fusion of the masculine and feminine aspects of existence, as well as the harmony between Shiva and Shakti.",
      "depiction": "Ardhanarishvara is depicted as half-male and half-female, with one side representing Shiva and the other Parvati.",
      "associated_legends": [
        { "title": "Unity of Masculine and Feminine", "summary": "The form was created to show the essential unity between the divine masculine and feminine forces." },
        { "title": "Balance of Creation and Destruction", "summary": "This form is also a symbolic representation of the balance between creation and destruction." }
      ],
      "imageUrl": "https://i.pinimg.com/736x/83/60/d3/8360d3496688a6fffeb1c50713f548fc.jpg"
    },
    {
      "id": 6,
      "name": "Tripurari",
      "description": "Tripurari is the form of Shiva that destroyed the three cities (Tripura), which were built by the demon king Tarakasura. The destruction of these cities symbolizes the victory of good over evil.",
      "symbolism": "Tripurari symbolizes the destruction of evil forces and the restoration of cosmic order, representing Shiva as the destroyer of ignorance and obstacles.",
      "depiction": "Tripurari is depicted wielding a bow, shooting a single arrow that destroys the three cities of the demon king.",
      "associated_legends": [
        { "title": "Destruction of Three Cities", "summary": "The story of Tripurari involves the demon king Tarakasura, who created three cities in the sky. Shiva, using his divine bow, destroyed the cities and defeated the demon." }
      ],
      "imageUrl": "https://i.pinimg.com/736x/3d/2e/c7/3d2ec7f1825be24585278b1a79302020.jpg"
    },
    {
      "id": 7,
      "name": "Mahadeva",
      "description": "Mahadeva is the supreme form of Shiva, representing him as the universal godhead and the source of all creation, preservation, and destruction. He is the embodiment of both the ascetic and the householder.",
      "symbolism": "Mahadeva symbolizes the ultimate reality, the embodiment of both creation and destruction, peace and fury, the path of asceticism, and the path of worldly responsibilities.",
      "depiction": "Mahadeva is typically depicted as a meditative figure, with long matted hair, a crescent moon on his head, a third eye, and his trident. He is often shown with his consort Parvati and his children, Ganesha and Kartikeya.",
      "associated_legends": [
        { "title": "Supreme Godhead", "summary": "Mahadeva is the ultimate source and destination of the cosmos, embodying all divine aspects."}
      ],
      "imageUrl": "https://i.pinimg.com/736x/b8/ae/ac/b8aeac0505fb2e0fb6cdc75303fc03ed.jpg"
    }
];

const mappedAvatars: MahadevaAvatar[] = mahadevaAvatarsInput.map(avatar => ({
  id: generateMahadevaAvatarId(avatar.name),
  name: avatar.name,
  description: avatar.description,
  symbolism: avatar.symbolism,
  depiction: avatar.depiction,
  associated_legends: avatar.associated_legends.map(legend => ({ title: legend.title, summary: legend.summary })),
  imageUrl: avatar.imageUrl || `https://picsum.photos/seed/${generateMahadevaAvatarId(avatar.name)}/600/400`, // Use provided URL or fallback
  imageAiHint: `shiva avatar ${avatar.name.toLowerCase()}`
}));

export const MAHADEVA_AVATARS_CATEGORY_DATA: MahadevaAvatarsCategoryData = {
  id: "category_mahadeva_avatars_01",
  category: "Mahadeva Avatars",
  title: "Major Avatars & Forms of Mahadeva (Shiva)",
  description: "Lord Shiva, also known as Mahadeva (The Great God), manifests in numerous forms and avatars to perform cosmic duties, destroy evil, and bestow grace upon devotees. These manifestations highlight his diverse aspects, from the fierce destroyer to the compassionate ascetic.",
  imageUrl: "https://i.pinimg.com/736x/c1/52/9b/c1529bfc9521ae58e6e7c4e16f2220d3.jpg",
  imageAiHint: "shiva avatars divine forms",
  avatars: mappedAvatars,
  scriptural_references: ["Puranas", "Mahabharata", "Ramayana", "Vedas", "Other"], // General references
  worship_and_significance: "Worship of Shiva's various forms is central to Shaivism. Each form carries specific symbolism and is invoked for different purposes, such as protection (Bhairava), spiritual wisdom (Dakshinamurthy - not listed but related), or cosmic balance (Ardhanarishvara).",
  external_links: {
    wikipedia_shiva: "https://en.wikipedia.org/wiki/Shiva",
    shiva_purana_ref: "https://www.wisdomlib.org/hinduism/book/shiva-purana-eng"
  }
};

    