
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

interface JobMatchProps {
  jobMatch: {
    overallMatch: number;
    missingSkills: string[];
    strongMatches: string[];
    suggestionsBySection: Array<{
      section: string;
      suggestions: string;
    }>;
  };
}

const JobMatchAnalysis: React.FC<JobMatchProps> = ({ jobMatch }) => {
  const { overallMatch, missingSkills, strongMatches, suggestionsBySection } = jobMatch;
  
  const getMatchColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800";
    if (score >= 60) return "bg-amber-100 text-amber-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Job Match Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Overall Match:</h3>
            <Badge 
              variant="outline" 
              className={`text-sm px-3 py-1 ${getMatchColor(overallMatch)}`}
            >
              {overallMatch}% Match
            </Badge>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Skills Analysis:</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm text-muted-foreground flex items-center mb-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" /> Strong Matches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {strongMatches.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-green-50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-muted-foreground flex items-center mb-1">
                  <XCircle className="h-4 w-4 text-red-500 mr-1" /> Missing Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {missingSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-red-50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Tailoring Suggestions:</h3>
            <div className="space-y-4">
              {suggestionsBySection.map((item, index) => (
                <div key={index} className="bg-muted p-3 rounded-md">
                  <h4 className="font-medium text-sm mb-1">{item.section}</h4>
                  <p className="text-sm text-muted-foreground">{item.suggestions}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobMatchAnalysis;
