
'use client';

import type { EnrolledCategory, CharacterType } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookMarked, PlusCircle, Trash2, ListChecks } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CHARACTER_TYPES } from '@/lib/types';


interface EnrolledCategoriesDisplayProps {
  enrolledCategories: EnrolledCategory[];
}

export function EnrolledCategoriesDisplay({ enrolledCategories }: EnrolledCategoriesDisplayProps) {
  const { enrollInCategory, unenrollFromCategory } = useAuth();
  const { toast } = useToast();
  const [selectedCategoriesToEnroll, setSelectedCategoriesToEnroll] = useState<CharacterType[]>([]);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const handleEnroll = async () => {
    if (selectedCategoriesToEnroll.length === 0) {
      toast({ title: "No categories selected", description: "Please select at least one category to enroll.", variant: "destructive" });
      return;
    }
    try {
      for (const category of selectedCategoriesToEnroll) {
        await enrollInCategory(category);
      }
      toast({ title: "Successfully Enrolled", description: `You've enrolled in ${selectedCategoriesToEnroll.length} new categories.` });
      setSelectedCategoriesToEnroll([]);
      setIsManageModalOpen(false);
    } catch (error) {
      toast({ title: "Enrollment Failed", description: "Could not enroll in categories. Please try again.", variant: "destructive" });
    }
  };

  const handleUnenroll = async (categoryId: CharacterType) => {
    try {
      await unenrollFromCategory(categoryId);
      toast({ title: "Unenrolled", description: `Successfully unenrolled from ${categoryId}.` });
    } catch (error) {
      toast({ title: "Unenrollment Failed", description: "Could not unenroll. Please try again.", variant: "destructive" });
    }
  };
  
  const handleCheckboxChange = (category: CharacterType, checked: boolean | 'indeterminate') => {
    if (typeof checked === 'boolean') {
      setSelectedCategoriesToEnroll(prev => 
        checked ? [...prev, category] : prev.filter(c => c !== category)
      );
    }
  };

  const availableToEnroll = CHARACTER_TYPES.filter(ct => !enrolledCategories.some(ec => ec.id === ct));


  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl flex items-center"><ListChecks className="mr-2 h-5 w-5 text-primary"/> Enrolled Categories</CardTitle>
          <CardDescription className="text-xs">Topics you are actively exploring.</CardDescription>
        </div>
        <Dialog open={isManageModalOpen} onOpenChange={setIsManageModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <PlusCircle className="mr-2 h-4 w-4" /> Manage
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle>Manage Enrolled Categories</DialogTitle>
              <DialogDescription>
                Select categories to add to your profile. You can unenroll directly from your profile list.
              </DialogDescription>
            </DialogHeader>
            {availableToEnroll.length > 0 ? (
              <ScrollArea className="max-h-[300px] my-4 pr-4">
                <div className="space-y-3">
                  {availableToEnroll.map(category => (
                    <div key={category} className="flex items-center space-x-2 p-2 border rounded-md hover:bg-muted/50">
                      <Checkbox 
                        id={`enroll-${category}`} 
                        checked={selectedCategoriesToEnroll.includes(category)}
                        onCheckedChange={(checked) => handleCheckboxChange(category, checked)}
                      />
                      <Label htmlFor={`enroll-${category}`} className="font-normal cursor-pointer flex-grow">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <p className="text-sm text-muted-foreground my-4 text-center">You are enrolled in all available categories!</p>
            )}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>
              <Button onClick={handleEnroll} disabled={selectedCategoriesToEnroll.length === 0}>
                Enroll in Selected ({selectedCategoriesToEnroll.length})
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {enrolledCategories.length > 0 ? (
          <div className="space-y-3">
            {enrolledCategories.map(category => (
              <div key={category.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                <div className="flex items-center">
                  <BookMarked className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Enrolled: {new Date(category.enrollmentDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10 h-8 w-8" onClick={() => handleUnenroll(category.id)}>
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Unenroll from {category.name}</span>
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">
            You are not enrolled in any categories yet. Click &quot;Manage&quot; to add some!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
