
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

interface Improvement {
  category: string;
  status: "success" | "warning" | "error";
  description: string;
}

interface ResumeImprovementsProps {
  improvements: Improvement[];
}

const ResumeImprovements: React.FC<ResumeImprovementsProps> = ({ improvements }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-50 border-green-200";
      case "warning":
        return "bg-amber-50 border-amber-200";
      case "error":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Suggested Improvements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {improvements.map((improvement, index) => (
            <div 
              key={index} 
              className={`p-4 border rounded-md ${getStatusColor(improvement.status)}`}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  {getStatusIcon(improvement.status)}
                </div>
                <div>
                  <h4 className="font-medium mb-1">{improvement.category}</h4>
                  <p className="text-sm text-muted-foreground">{improvement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeImprovements;
