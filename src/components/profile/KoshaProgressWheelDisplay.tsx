
'use client';

import type { KoshaProgress, KoshaName } from '@/lib/types';
import { KOSHA_NAMES, KOSHA_COLORS, KOSHA_DESCRIPTIONS } from '@/data/userData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Layers } from 'lucide-react'; // Using Layers as a general icon for "Sheaths"

interface KoshaProgressWheelDisplayProps {
  koshaProgress: KoshaProgress;
}

const RADIUS = 60;
const STROKE_WIDTH = 12;
const NORMALIZED_RADIUS = RADIUS - STROKE_WIDTH / 2;
const CIRCUMFERENCE = NORMALIZED_RADIUS * 2 * Math.PI;

export function KoshaProgressWheelDisplay({ koshaProgress }: KoshaProgressWheelDisplayProps) {
  const totalKoshas = KOSHA_NAMES.length;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center"><Layers className="mr-2 h-5 w-5 text-primary"/>Kosha Journey</CardTitle>
        <CardDescription className="text-xs">Your progress across the five sheaths of being (Pancha Kosha).</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
            <svg height="100%" width="100%" viewBox={`0 0 ${RADIUS * 2} ${RADIUS * 2}`}>
              {KOSHA_NAMES.map((koshaName, index) => {
                const progress = koshaProgress[koshaName] || 0;
                const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;
                // Distribute segments around the circle
                const segmentRotation = (360 / totalKoshas) * index - 90; // -90 to start from top
                const segmentRadius = NORMALIZED_RADIUS - (STROKE_WIDTH + 2) * index; // Stagger radii for visibility
                const segmentCircumference = segmentRadius * 2 * Math.PI;
                const segmentOffset = segmentCircumference - (progress / 100) * segmentCircumference;


                if (segmentRadius <= 0) return null; // Avoid negative radius

                return (
                  <TooltipProvider key={koshaName} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <circle
                          stroke={KOSHA_COLORS[koshaName]}
                          fill="transparent"
                          strokeWidth={STROKE_WIDTH}
                          strokeDasharray={segmentCircumference + ' ' + segmentCircumference}
                          style={{ strokeDashoffset: segmentOffset, transition: 'stroke-dashoffset 0.35s' }}
                          r={segmentRadius}
                          cx={RADIUS}
                          cy={RADIUS}
                          transform={`rotate(${segmentRotation} ${RADIUS} ${RADIUS})`}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="font-semibold">{koshaName}: {progress}%</p>
                        <p className="text-xs max-w-xs">{KOSHA_DESCRIPTIONS[koshaName]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
               <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="text-xl font-bold fill-primary">
                Koshas
              </text>
            </svg>
          </div>
          <div className="flex-grow space-y-3">
            {KOSHA_NAMES.map(koshaName => (
              <div key={koshaName} className="flex items-center">
                <div style={{ backgroundColor: KOSHA_COLORS[koshaName] }} className="w-3 h-3 rounded-full mr-2 flex-shrink-0"></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{koshaName}</span>
                    <span className="text-sm text-primary font-semibold">{koshaProgress[koshaName] || 0}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 mt-0.5">
                    <div
                      style={{ width: `${koshaProgress[koshaName] || 0}%`, backgroundColor: KOSHA_COLORS[koshaName] }}
                      className="h-1.5 rounded-full transition-all duration-300"
                    ></div>
                  </div>
                   <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{KOSHA_DESCRIPTIONS[koshaName]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
