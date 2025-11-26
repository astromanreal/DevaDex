
import type { UserProfile, KoshaName, CharacterType, EnrolledCategory, UserActivity } from '@/lib/types';

export const MOCK_USER_ID = 'mockuser123';

export let mockUser: UserProfile = {
  id: MOCK_USER_ID,
  email: 'user@example.com', // Default login email
  username: 'SanatanSeeker',
  description: 'Exploring the depths of Hindu mythology and philosophy.',
  avatarUrl: `https://picsum.photos/seed/${MOCK_USER_ID}/200/200`,
  level: 5,
  points: 1250,
  pointsToNextLevel: 2000,
  enrolledCategories: [
    { id: 'Deva', name: 'Deva', enrollmentDate: new Date(Date.now() - 86400000 * 5) }, // 5 days ago
    { id: 'Rishi', name: 'Rishi', enrollmentDate: new Date(Date.now() - 86400000 * 2) }, // 2 days ago
  ],
  activityLog: [
    { id: 'act1', timestamp: new Date(Date.now() - 86400000 * 1), type: 'category_interaction', details: 'Viewed category: Deva', pointsEarned: 10 },
    { id: 'act2', timestamp: new Date(Date.now() - 3600000 * 5), type: 'content_exploration', details: 'Read about Lord Rama for 20 mins', pointsEarned: 25 },
    { id: 'act3', timestamp: new Date(Date.now() - 3600000 * 2), type: 'timeline_exploration', details: 'Explored Treta Yuga on timeline', pointsEarned: 15 },
    { id: 'act4', timestamp: new Date(Date.now() - 86400000 * 2), type: 'enrollment', details: 'Enrolled in Rishi category', pointsEarned: 5 },
  ],
  koshaProgress: {
    Annamaya: 70,    // Physical sheath - e.g., reading about physical forms, rituals
    Pranamaya: 50,   // Energy sheath - e.g., mantras, pranayama related content (if any)
    Manomaya: 60,    // Mental sheath - e.g., stories, emotional aspects
    Vijnanamaya: 75, // Wisdom sheath - e.g., philosophical content, teachings
    Anandamaya: 40,  // Bliss sheath - e.g., devotional content, states of being
  },
  preferences: {
    favoriteCharacterTypes: ['Deva', 'Avatar'],
  },
  createdAt: new Date(Date.now() - 86400000 * 10), // 10 days ago
  lastLogin: new Date(),
  isNewUser: false, // Changed to false, onboarding skipped
};

// Functions to modify the mockUser (simulating backend updates)
// These functions will modify the global mockUser. AuthContext will manage its own state and persistence.
export const updateMockUserUsernameAndDescription = (username: string, description: string): void => {
  mockUser = {
    ...mockUser,
    username,
    description,
  };
};

export const addMockUserEnrolledCategory = (categoryType: CharacterType): void => {
  if (!mockUser.enrolledCategories.some(ec => ec.id === categoryType)) {
    const newEnrollment: EnrolledCategory = {
      id: categoryType,
      name: categoryType,
      enrollmentDate: new Date(),
    };
    const newActivity: UserActivity = {
        id: `act${mockUser.activityLog.length + 1}`,
        timestamp: new Date(),
        type: 'enrollment',
        details: `Enrolled in ${categoryType} category`,
        pointsEarned: 5,
    }
    mockUser = {
      ...mockUser,
      enrolledCategories: [...mockUser.enrolledCategories, newEnrollment],
      activityLog: [newActivity, ...mockUser.activityLog],
      points: mockUser.points + (newActivity.pointsEarned || 0),
    };
  }
};

export const removeMockUserEnrolledCategory = (categoryType: CharacterType): void => {
  mockUser = {
    ...mockUser,
    enrolledCategories: mockUser.enrolledCategories.filter(ec => ec.id !== categoryType),
  };
};

export const addMockUserActivity = (type: UserActivity['type'], details: string, points: number): void => {
    const newActivity: UserActivity = {
        id: `act${mockUser.activityLog.length + 1}`,
        timestamp: new Date(),
        type,
        details,
        pointsEarned: points,
    };
    mockUser = {
        ...mockUser,
        activityLog: [newActivity, ...mockUser.activityLog],
        points: mockUser.points + points,
    };
    // Basic leveling up logic
    if (mockUser.points >= mockUser.pointsToNextLevel) {
        mockUser.level += 1;
        mockUser.points -= mockUser.pointsToNextLevel;
        mockUser.pointsToNextLevel = Math.floor(mockUser.pointsToNextLevel * 1.5); // Increase points for next level
    }
}

export const KOSHA_NAMES: KoshaName[] = ['Annamaya', 'Pranamaya', 'Manomaya', 'Vijnanamaya', 'Anandamaya'];
export const KOSHA_COLORS: Record<KoshaName, string> = {
  Annamaya: 'hsl(var(--chart-1))',   // Earthy tone
  Pranamaya: 'hsl(var(--chart-2))',  // Energetic tone
  Manomaya: 'hsl(var(--chart-3))',   // Mind/Emotional tone
  Vijnanamaya: 'hsl(var(--chart-4))',// Wisdom/Intellect tone
  Anandamaya: 'hsl(var(--chart-5))', // Blissful/Spiritual tone
};

export const KOSHA_DESCRIPTIONS: Record<KoshaName, string> = {
  Annamaya: "Physical Sheath: Relates to the physical body and senses. Progress by learning about forms, rituals, and iconography.",
  Pranamaya: "Energy Sheath: Governs vital life force (prana). Progress by exploring mantras, breath, and energetic aspects of deities.",
  Manomaya: "Mental Sheath: Comprises thoughts, emotions, and mind. Progress by engaging with stories, emotional narratives, and mental disciplines.",
  Vijnanamaya: "Wisdom Sheath: Associated with intellect, discrimination, and higher knowledge. Progress by studying philosophy, teachings, and symbolism.",
  Anandamaya: "Bliss Sheath: The most subtle layer, representing pure bliss and connection to the Self. Progress through devotion, meditation, and understanding ultimate truths."
};

// Function to reset mockUser state to its initial default values (useful for logout)
export const getDefaultMockUser = (): UserProfile => ({
  id: MOCK_USER_ID,
  email: 'user@example.com',
  username: 'SanatanSeeker',
  description: 'Exploring the depths of Hindu mythology and philosophy.',
  avatarUrl: `https://picsum.photos/seed/${MOCK_USER_ID}/200/200`,
  level: 5,
  points: 1250,
  pointsToNextLevel: 2000,
  enrolledCategories: [
    { id: 'Deva', name: 'Deva', enrollmentDate: new Date(Date.now() - 86400000 * 5) },
    { id: 'Rishi', name: 'Rishi', enrollmentDate: new Date(Date.now() - 86400000 * 2) },
  ],
  activityLog: [
    { id: 'act1', timestamp: new Date(Date.now() - 86400000 * 1), type: 'category_interaction', details: 'Viewed category: Deva', pointsEarned: 10 },
    { id: 'act2', timestamp: new Date(Date.now() - 3600000 * 5), type: 'content_exploration', details: 'Read about Lord Rama for 20 mins', pointsEarned: 25 },
    { id: 'act3', timestamp: new Date(Date.now() - 3600000 * 2), type: 'timeline_exploration', details: 'Explored Treta Yuga on timeline', pointsEarned: 15 },
    { id: 'act4', timestamp: new Date(Date.now() - 86400000 * 2), type: 'enrollment', details: 'Enrolled in Rishi category', pointsEarned: 5 },
  ],
  koshaProgress: {
    Annamaya: 70, Pranamaya: 50, Manomaya: 60, Vijnanamaya: 75, Anandamaya: 40,
  },
  preferences: {
    favoriteCharacterTypes: ['Deva', 'Avatar'],
  },
  createdAt: new Date(Date.now() - 86400000 * 10),
  lastLogin: new Date(),
  isNewUser: false,
});
