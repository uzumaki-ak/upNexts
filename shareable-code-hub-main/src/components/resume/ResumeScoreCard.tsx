
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ScoreCategory {
  name: string;
  value: number;
  color: string;
}

interface ResumeScoreCardProps {
  scores: {
    atsScore: number;
    keywordMatch: number;
    formatting: number;
    readability: number;
  };
}

const ResumeScoreCard: React.FC<ResumeScoreCardProps> = ({ scores }) => {
  const { atsScore, keywordMatch, formatting, readability } = scores;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#10b981"; // green
    if (score >= 60) return "#f59e0b"; // amber
    return "#ef4444"; // red
  };

  const categories: ScoreCategory[] = [
    { name: "Keyword Match", value: keywordMatch, color: getScoreColor(keywordMatch) },
    { name: "Formatting", value: formatting, color: getScoreColor(formatting) },
    { name: "Readability", value: readability, color: getScoreColor(readability) }
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-48 h-48 mb-6 md:mb-0 md:mr-8">
            <CircularProgressbarWithChildren
              value={atsScore}
              strokeWidth={10}
              styles={buildStyles({
                strokeLinecap: "round",
                pathColor: getScoreColor(atsScore),
                trailColor: "#e5e7eb"
              })}
            >
              <div className="text-center">
                <div className="text-4xl font-bold">{atsScore}%</div>
                <div className="text-sm text-muted-foreground">ATS Score</div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Resume Analysis</h2>
            <p className="text-muted-foreground mb-6">
              Your resume has been analyzed by our AI. The overall ATS (Applicant Tracking System) score 
              indicates how well your resume would perform in automated screening systems used by employers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div key={category.name} className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">{category.name}</div>
                  <div className="flex items-center">
                    <div 
                      className="h-2 flex-1 rounded-full bg-gray-200 mr-2"
                    >
                      <div 
                        className="h-2 rounded-full"
                        style={{ 
                          width: `${category.value}%`,
                          backgroundColor: category.color
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium">{category.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeScoreCard;
