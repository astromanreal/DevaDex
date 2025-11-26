
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, TrendingUp } from 'lucide-react';

interface UserLevelDisplayProps {
  level: number;
  points: number;
  pointsToNextLevel: number;
}

export function UserLevelDisplay({ level, points, pointsToNextLevel }: UserLevelDisplayProps) {
  const progressPercentage = pointsToNextLevel > 0 ? Math.min((points / pointsToNextLevel) * 100, 100) : 0;

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Award className="mr-2 h-5 w-5 text-primary" />
          Your Progress
        </CardTitle>
        <CardDescription className="text-xs">
          Keep exploring to level up and unlock new insights!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">Level {level}</span>
          <span className="text-sm text-muted-foreground">
            {points.toLocaleString()} / {pointsToNextLevel.toLocaleString()} XP
          </span>
        </div>
        <Progress value={progressPercentage} aria-label={`${progressPercentage.toFixed(0)}% to next level`} />
        <div className="flex items-center text-xs text-muted-foreground">
          <TrendingUp className="mr-1.5 h-3.5 w-3.5" />
          {pointsToNextLevel - points > 0 
            ? `${(pointsToNextLevel - points).toLocaleString()} XP to next level`
            : "Max level reached or next level criteria pending!"}
        </div>
      </CardContent>
    </Card>
  );
}
