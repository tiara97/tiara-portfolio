"use client";

import { useEffect, useState } from "react";
import { Code } from "lucide-react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete?.();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-300 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Simple animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-primary/20 animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-primary/40 animate-ping animation-delay-4000"></div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Simple animated logo */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center animate-pulse">
            <Code
              className="h-8 w-8 text-white animate-spin"
              style={{ animationDuration: "2s" }}
            />
          </div>
          {/* Simple rotating ring */}
          <div className="absolute inset-0 w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>

        {/* Simple text */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-primary">Hi there!</h2>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>

        {/* Simple progress bar */}
        <div className="w-48 mx-auto">
          <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
