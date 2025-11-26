
'use client';

import type { UserProfile, CharacterType, EnrolledCategory, UserActivity } from '@/lib/types';
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { mockUser as defaultMockUser, MOCK_USER_ID, getDefaultMockUser } from '@/data/userData';
import { useRouter } from 'next/navigation';

const PERSISTED_USER_KEY = 'persistedMockUser';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  logout: () => void;
  updateProfile: (username: string, description: string) => Promise<void>;
  enrollInCategory: (category: CharacterType) => Promise<void>;
  unenrollFromCategory: (categoryId: CharacterType) => Promise<void>;
  // completeOnboarding can be removed or made a no-op if isNewUser is always false
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate checking auth status on mount
    const storedUserJson = localStorage.getItem(PERSISTED_USER_KEY);
    if (storedUserJson) {
      try {
        const parsedUser = JSON.parse(storedUserJson) as UserProfile;
        // Ensure it's our mock user and not some other stale data
        if (parsedUser.id === MOCK_USER_ID) {
          setUser({...parsedUser, isNewUser: false, lastLogin: new Date() }); // Ensure isNewUser is false and update lastLogin
        } else {
          // If it's not the mock user, or some old data, initialize with default.
          setUser({...getDefaultMockUser(), isNewUser: false, lastLogin: new Date() });
          localStorage.setItem(PERSISTED_USER_KEY, JSON.stringify(getDefaultMockUser()));
        }
      } catch (e) {
        console.error("Failed to parse stored user, initializing with default.", e);
        setUser({...getDefaultMockUser(), isNewUser: false, lastLogin: new Date() });
        localStorage.setItem(PERSISTED_USER_KEY, JSON.stringify(getDefaultMockUser()));
      }
    } else {
      // No persisted user, initialize with default mock user
      const initialUser = {...getDefaultMockUser(), isNewUser: false, lastLogin: new Date() };
      setUser(initialUser);
      localStorage.setItem(PERSISTED_USER_KEY, JSON.stringify(initialUser));
    }
    setIsLoading(false);
  }, []);


  const logout = useCallback(() => {
    const freshMockUser = {...getDefaultMockUser(), isNewUser: false, lastLogin: new Date() };
    setUser(freshMockUser);
    localStorage.setItem(PERSISTED_USER_KEY, JSON.stringify(freshMockUser)); // Persist the reset state
    router.push('/');
  }, [router]);

  const updateProfile = async (username: string, description: string) => {
    setUser(currentUser => {
      if (!currentUser) return null;
      const updatedUser = { ...currentUser, username, description, lastLogin: new Date() };
      localStorage.setItem(PERSISTED_USER_KEY, JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const enrollInCategory = async (categoryType: CharacterType) => {
    setUser(currentUser => {
      if (!currentUser || currentUser.enrolledCategories.some(ec => ec.id === categoryType)) return currentUser;
      
      const newEnrollment: EnrolledCategory = {
        id: categoryType,
        name: categoryType,
        enrollmentDate: new Date(),
      };
      const newActivity: UserActivity = {
          id: `act${currentUser.activityLog.length + 1}`,
          timestamp: new Date(),
          type: 'enrollment',
          details: `Enrolled in ${categoryType} category`,
          pointsEarned: 5,
      }
      const updatedUser = {
        ...currentUser,
        enrolledCategories: [...currentUser.enrolledCategories, newEnrollment],
        activityLog: [newActivity, ...currentUser.activityLog],
        points: currentUser.points + (newActivity.pointsEarned || 0),
        lastLogin: new Date()
      };
      localStorage.setItem(PERSISTED_USER_KEY, JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const unenrollFromCategory = async (categoryId: CharacterType) => {
    setUser(currentUser => {
      if (!currentUser) return null;
      const updatedUser = {
        ...currentUser,
        enrolledCategories: currentUser.enrolledCategories.filter(ec => ec.id !== categoryId),
        lastLogin: new Date()
      };
      localStorage.setItem(PERSISTED_USER_KEY, JSON.stringify(updatedUser));
      return updatedUser;
    });
  };
  
  return (
    <AuthContext.Provider value={{ user, isLoading, logout, updateProfile, enrollInCategory, unenrollFromCategory }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
