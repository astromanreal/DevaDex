
'use client';

import type { UserActivity } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { History, Activity, CalendarDays, Zap } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ActivityLogDisplayProps {
  activities: UserActivity[];
}

export function ActivityLogDisplay({ activities }: ActivityLogDisplayProps) {
  
  const getActivityIcon = (type: UserActivity['type']) => {
    switch(type) {
      case 'category_interaction': return <Activity className="h-4 w-4 text-blue-500" />;
      case 'content_exploration': return <History className="h-4 w-4 text-green-500" />;
      case 'timeline_exploration': return <CalendarDays className="h-4 w-4 text-purple-500" />;
      case 'enrollment': return <Zap className="h-4 w-4 text-yellow-500" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center"><History className="mr-2 h-5 w-5 text-primary"/> Recent Activity</CardTitle>
        <CardDescription className="text-xs">Your interactions and progress on The Deva Archives.</CardDescription>
      </CardHeader>
      <CardContent>
        {activities.length > 0 ? (
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              {activities.map(activity => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg bg-background hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium">{activity.details}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                      <span>{formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}</span>
                      {activity.pointsEarned && activity.pointsEarned > 0 && (
                        <Badge variant="secondary" className="text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-800/50">
                          +{activity.pointsEarned} XP
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-6">No recent activity to display.</p>
        )}
      </CardContent>
    </Card>
  );
}
