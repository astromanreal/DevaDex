
'use client';

import type { UserProfile } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EditProfileForm } from './EditProfileForm';
import { EnrolledCategoriesDisplay } from './EnrolledCategoriesDisplay';
import { ActivityLogDisplay } from './ActivityLogDisplay';
import { UserLevelDisplay } from './UserLevelDisplay';
import { KoshaProgressWheelDisplay } from './KoshaProgressWheelDisplay';
import { PersonalizedRecommendations } from './PersonalizedRecommendations';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface UserProfileDisplayProps {
  user: UserProfile;
}

export function UserProfileDisplay({ user }: UserProfileDisplayProps) {
  const { logout } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="container mx-auto max-w-5xl py-8 px-4 space-y-8">
      {/* Profile Header */}
      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary/50 shadow-lg">
              <AvatarImage src={user.avatarUrl || `https://picsum.photos/seed/${user.id}/200`} alt={user.username} />
              <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">{user.username}</CardTitle>
              <CardDescription className="text-md md:text-lg text-muted-foreground mt-1">{user.description || "No description yet."}</CardDescription>
              <p className="text-xs text-muted-foreground mt-2">Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="md:ml-auto flex flex-col md:items-end gap-2 mt-4 md:mt-0">
               <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full md:w-auto">
                    <Settings className="mr-2 h-4 w-4" /> Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <EditProfileForm currentUsername={user.username} currentDescription={user.description} onSave={() => setIsEditModalOpen(false)} />
                </DialogContent>
              </Dialog>
              <Button variant="ghost" size="sm" onClick={logout} className="text-destructive hover:bg-destructive/10 hover:text-destructive w-full md:w-auto">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column / Main Column on smaller screens */}
        <div className="lg:col-span-2 space-y-6">
          <UserLevelDisplay level={user.level} points={user.points} pointsToNextLevel={user.pointsToNextLevel} />
          <KoshaProgressWheelDisplay koshaProgress={user.koshaProgress} />
          <ActivityLogDisplay activities={user.activityLog} />
        </div>

        {/* Right Column / Sidebar */}
        <div className="space-y-6">
          <EnrolledCategoriesDisplay enrolledCategories={user.enrolledCategories} />
          <PersonalizedRecommendations preferences={user.preferences} />
           <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center"><ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Advanced Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                As you level up, you will unlock advanced character details, in-depth spiritual practices, and enhanced journey tracking. Keep exploring!
              </p>
              {/* Placeholder for future unlocked features */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
