
export type CharacterType =
  | 'Trimurti'
  | 'Deva'
  | 'Devi'
  | 'Avatar' // General Avatar category
  | 'Rishi'
  | 'Muni'
  | 'King'
  | 'Warrior'
  | 'Demon' 
  | 'Asura'
  | 'Rakshasa'
  | 'Daitya'
  | 'Danava'
  | 'Pishacha'
  | 'Yaksha'
  | 'Gandharva'
  | 'Naga'
  | 'Das Mahavidya'
  | 'Other Celestial Being'
  | 'Dashavatar' // Specific group of Vishnu avatars
  | 'Navdurga'
  | 'Ekadasha Rudra'
  | 'Saptarishi'
  | 'Prajapati'
  | 'Apsaras'
  | 'Mahadeva Avatars' // Specific group of Shiva avatars
  | 'Navagraha'; // Added Navagraha

export type Yuga = 'Satya Yuga' | 'Treta Yuga' | 'Dvapara Yuga' | 'Kali Yuga' | 'All Yugas';

export type TextSource =
  | 'Vedas'
  | 'Puranas'
  | 'Upanishads'
  | 'Ramayana'
  | 'Mahabharata'
  | 'Other'
  | 'Shiva Purana'
  | 'Skanda Purana'
  | 'Linga Purana'
  | 'Kalika Purana'
  | 'Devi Bhagavata Purana'
  | 'Jain Texts'
  | 'Markandeya Purana'
  | 'Bhagavata Purana'
  | 'Agni Purana'
  | 'Vishnu Purana'; // Added Vishnu Purana


export type CharacterNature = 'Good' | 'Evil' | 'Neutral' | 'Fierce';
export type CharacterGender = 'Male' | 'Female' | 'Other' | 'N/A' | 'Androgynous';

export interface Character {
  id: string;
  name: {
    sanskrit: string;
    english: string;
  };
  type: CharacterType;
  role: string; 
  significance: string;
  associatedTexts: TextSource[];
  lineage?: string;
  stories: { title: string; summary: string }[];
  symbolism?: string;
  teachings?: string[];
  relatedTemples?: { name: string; location: string }[];
  depictions?: { medium: string; description: string }[];
  quotes?: string[];
  imageUrl: string;
  imageAiHint: string;
  linkedCharacters?: { id: string; name: string; relationship: string }[];
  yuga?: Yuga;
  region?: string;
  gender?: CharacterGender;
  nature?: CharacterNature;
}

// Constants for filter options
export const YUGAS: ReadonlyArray<Yuga> = ['Satya Yuga', 'Treta Yuga', 'Dvapara Yuga', 'Kali Yuga', 'All Yugas'];

// Reordered CHARACTER_TYPES for importance on the category listing page
export const CHARACTER_TYPES: ReadonlyArray<CharacterType> = [
  'Trimurti',
  'Dashavatar',
  'Navdurga',
  'Das Mahavidya',
  'Mahadeva Avatars', 
  'Ekadasha Rudra',
  'Navagraha', // Added Navagraha
  'Avatar', // General Avatar category added
  'Saptarishi',
  'Prajapati',
  'Devi', 
  'Deva', 
  'Rishi', 
  'Muni',  
  'Apsaras', 
  'Gandharva',
  'Naga',
  'King',
  'Warrior',
  'Yaksha',
  'Asura', 
  'Daitya',
  'Danava',
  'Rakshasa',
  'Pishacha',
  'Demon', 
  'Other Celestial Being',
];

export const TEXT_SOURCES: ReadonlyArray<TextSource> = [
  'Vedas', 'Puranas', 'Upanishads', 'Ramayana', 'Mahabharata', 'Shiva Purana', 
  'Skanda Purana', 'Linga Purana', 'Kalika Purana', 'Devi Bhagavata Purana', 
  'Jain Texts', 'Markandeya Purana', 'Bhagavata Purana', 'Agni Purana', 
  'Vishnu Purana', 'Other', // Added Vishnu Purana here as well
];
export const CHARACTER_NATURES: ReadonlyArray<CharacterNature> = ['Good', 'Evil', 'Neutral', 'Fierce'];
export const CHARACTER_GENDERS: ReadonlyArray<CharacterGender> = ['Male', 'Female', 'Other', 'N/A', 'Androgynous'];
export const CHARACTER_ROLES: ReadonlyArray<string> = [
  'Creator', 'Preserver', 'Destroyer', 'Guide', 'Mentor', 'Warrior', 'King', 
  'Queen', 'Consort', 'Disciple', 'Opponent', 'Ally', 'Sage', 'Deity', 'Antagonist',
  'Shiva Avatar', 'Vishnu Avatar', 'Combined Avatar' // Added avatar specific roles
];
export const REGIONS: ReadonlyArray<string> = ['Ayodhya', 'Lanka', 'Hastinapura', 'Indraprastha', 'Mathura', 'Vrindavan', 'Kailash', 'Vaikuntha', 'Brahmaloka'];

// User Profile and Personalization Types
export interface UserActivity {
  id: string;
  timestamp: Date;
  type: 'category_interaction' | 'content_exploration' | 'timeline_exploration' | 'enrollment';
  details: string; 
  pointsEarned?: number;
}

export interface EnrolledCategory {
  id: CharacterType; 
  name: CharacterType;
  enrollmentDate: Date;
}

export type KoshaName = 'Annamaya' | 'Pranamaya' | 'Manomaya' | 'Vijnanamaya' | 'Anandamaya';
export interface KoshaProgress {
  Annamaya: number; 
  Pranamaya: number;
  Manomaya: number;
  Vijnanamaya: number;
  Anandamaya: number;
}

export interface UserProfile {
  id: string;
  email: string; 
  username: string;
  description: string;
  avatarUrl?: string; 
  level: number;
  points: number;
  pointsToNextLevel: number;
  enrolledCategories: EnrolledCategory[];
  activityLog: UserActivity[];
  koshaProgress: KoshaProgress;
  preferences?: {
    favoriteCharacterTypes?: CharacterType[];
  };
  createdAt: Date;
  lastLogin?: Date;
  isNewUser?: boolean; 
}

