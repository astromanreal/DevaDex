
'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface EditProfileFormProps {
  currentUsername: string;
  currentDescription: string;
  onSave: () => void; // Callback to close modal or refresh
}

export function EditProfileForm({ currentUsername, currentDescription, onSave }: EditProfileFormProps) {
  const [username, setUsername] = useState(currentUsername);
  const [description, setDescription] = useState(currentDescription);
  const [isLoading, setIsLoading] = useState(false);
  const { updateProfile } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateProfile(username, description);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      onSave(); // Call the onSave callback
    } catch (error) {
      console.error("Failed to update profile", error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          maxLength={50}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description (max 150 characters)</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          maxLength={150}
          placeholder="Tell us a bit about your journey or interests..."
        />
         <p className="text-xs text-muted-foreground text-right">{description.length}/150</p>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </form>
  );
}
