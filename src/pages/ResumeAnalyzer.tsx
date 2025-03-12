import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileUp, 
  Search, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Link as LinkIcon
} from "lucide-react";
import ResumeScoreCard from "@/components/resume/ResumeScoreCard";
import ResumeImprovements from "@/components/resume/ResumeImprovements";
import JobMatchAnalysis from "@/components/resume/JobMatchAnalysis";

const ResumeAnalyzer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upload");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const analysisResults = {
    atsScore: 75,
    keywordMatch: 68,
    formatting: 90,
    readability: 82,
    improvements: [
      { 
        category: "Keywords", 
        status: "warning" as "warning", 
        description: "Missing key technical skills like Docker and Kubernetes mentioned in job description" 
      },
      { 
        category: "Action Verbs", 
        status: "warning" as "warning", 
        description: "Use more powerful action verbs to describe achievements" 
      },
      { 
        category: "Quantification", 
        status: "error" as "error", 
        description: "Add metrics and quantifiable results to demonstrate impact" 
      },
      { 
        category: "Formatting", 
        status: "success" as "success", 
        description: "Good use of bullet points and section headings" 
      },
      { 
        category: "Length", 
        status: "success" as "success", 
        description: "Appropriate resume length for experience level" 
      }
    ],
    jobMatch: {
      overallMatch: 72,
      missingSkills: ["Docker", "Kubernetes", "CI/CD Pipeline", "AWS"],
      strongMatches: ["React", "JavaScript", "TypeScript", "REST APIs"],
      suggestionsBySection: [
        {
          section: "Professional Summary",
          suggestions: "Highlight your experience with JavaScript frameworks and REST API development to better align with the job requirements. Mention your interest in cloud technologies."
        },
        {
          section: "Technical Skills",
          suggestions: "Add a section specifically for cloud technologies. Include any experience or coursework with AWS, Docker, or Kubernetes, even if limited."
        },
        {
          section: "Work Experience",
          suggestions: "Restructure your bullet points to emphasize projects that used React and TypeScript. Quantify your achievements with metrics whenever possible."
        }
      ]
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleAnalyzeResume = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  const handleAnalyzeWithJob = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  const handleFetchJobDescription = () => {
    if (!jobLink) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setJobDescription("We are looking for a Full Stack Developer with experience in React, TypeScript, and Node.js. The ideal candidate will have experience with AWS, Docker, and Kubernetes. Responsibilities include developing and maintaining web applications, collaborating with cross-functional teams, and implementing CI/CD pipelines.");
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3">Resume Analyzer</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Get AI-powered analysis of your resume and personalized suggestions to improve it
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="upload">Resume Upload</TabsTrigger>
          <TabsTrigger value="results" disabled={!analysisComplete}>Analysis Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileUp className="mr-2 h-5 w-5" />
                  Upload Resume
                </CardTitle>
                <CardDescription>
                  Upload your resume for AI analysis and optimization suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <FileUp className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-muted-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX, or TXT (max 5MB)
                      </p>
                    </label>
                  </div>
                  
                  {resumeFile && (
                    <div className="bg-primary/10 p-3 rounded-md flex items-center">
                      <FileCheck className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium">{resumeFile.name}</span>
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or paste resume text
                      </span>
                    </div>
                  </div>
                  
                  <Textarea
                    placeholder="Paste your resume text here..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    className="min-h-[200px]"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleAnalyzeResume}
                  disabled={(!resumeFile && !resumeText) || isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  Job Matching
                </CardTitle>
                <CardDescription>
                  Compare your resume against a job description for targeted improvements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job URL</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Paste LinkedIn or job board URL..."
                        value={jobLink}
                        onChange={(e) => setJobLink(e.target.value)}
                      />
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={handleFetchJobDescription}
                        disabled={!jobLink || isAnalyzing}
                      >
                        <LinkIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or paste job description
                      </span>
                    </div>
                  </div>
                  
                  <Textarea
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[200px]"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={handleAnalyzeWithJob}
                  disabled={(!resumeFile && !resumeText) || !jobDescription || isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Resume with Job Description"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="results">
          <div className="space-y-6">
            <ResumeScoreCard scores={analysisResults} />
            
            <div className="grid gap-6 md:grid-cols-2">
              <ResumeImprovements improvements={analysisResults.improvements} />
              {jobDescription && (
                <JobMatchAnalysis jobMatch={analysisResults.jobMatch} />
              )}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button onClick={() => setActiveTab("upload")} variant="outline" className="mr-4">
                Back to Upload
              </Button>
              <Button onClick={() => navigate("/results")}>
                View Career Recommendations
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeAnalyzer;
