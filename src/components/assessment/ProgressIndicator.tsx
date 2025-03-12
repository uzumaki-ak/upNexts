
import React from "react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps 
}) => {
  return (
    <div className="flex items-center mt-8">
      <div className="w-full bg-muted h-2 rounded-full">
        <div 
          className="bg-primary h-2 rounded-full transition-all" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <span className="ml-4 text-sm font-medium">Step {currentStep}/{totalSteps}</span>
    </div>
  );
};

export default ProgressIndicator;
