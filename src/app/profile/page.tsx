
'use client';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { UserProfileDisplay } from '@/components/profile/UserProfileDisplay';
import { Loader2 } from 'lucide-react';

// Metadata should ideally be in a server component or layout for this route if dynamic title is needed.
// For client components, document.title can be set in useEffect.

export default function ProfilePage() {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    document.title = user ? `${user.username}'s Profile | The Deva Archives` : 'Profile | The Deva Archives';
  }, [user]);

  // No longer need to redirect if !user or user.isNewUser, as AuthContext handles this.
  // User will always be the mockUser (potentially with persisted changes).
  // isNewUser will be false.

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }
  
  // Onboarding redirection is removed. If user.isNewUser was true, 
  // it would be handled by AuthContext's initialization or specific logic if retained.
  // For this request, we assume onboarding is skipped and isNewUser is false.

  return <UserProfileDisplay user={user} />;
}
