
import React, { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CoverLetterGenerator = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [activeTab, setActiveTab] = useState("manual");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockCoverLetter = `Dear Hiring Manager,

I am writing to express my interest in the Software Developer position at Acme Corporation. With my background in web development and expertise in React and TypeScript, I believe I would be a valuable addition to your team.

The job description mentions a need for someone who can build scalable front-end applications, which aligns perfectly with my experience developing responsive web interfaces at my previous role. I have successfully implemented state management solutions using Redux and have experience with API integration.

Your company's focus on innovative solutions for the finance industry particularly interests me, as I have a passion for creating user-friendly applications that solve complex problems. I am excited about the opportunity to contribute to your team's success and help build the next generation of financial tools.

I am particularly impressed by Acme Corporation's commitment to professional development and collaborative work environment. These values resonate with me, as I thrive in settings where continuous learning and teamwork are emphasized.

Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experiences align with your needs.

Sincerely,
[Your Name]`;
      
      setCoverLetter(mockCoverLetter);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container max-w-5xl py-6">
      <h1 className="text-3xl font-bold mb-6">Cover Letter Generator</h1>
      <p className="text-muted-foreground mb-8">
        Generate tailored cover letters based on job descriptions and your resume
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Job Information</CardTitle>
              <CardDescription>
                Provide details about the job you're applying for
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs 
                defaultValue="manual" 
                value={activeTab} 
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="manual">Enter Manually</TabsTrigger>
                  <TabsTrigger value="url">From URL</TabsTrigger>
                </TabsList>
                <TabsContent value="manual" className="mt-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="job-description" className="block text-sm font-medium mb-1">
                        Job Description
                      </label>
                      <Textarea
                        id="job-description"
                        placeholder="Paste the job description here..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className="min-h-[150px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium mb-1">
                        Your Resume
                      </label>
                      <Textarea
                        id="resume"
                        placeholder="Paste your resume text here..."
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isLoading || !jobDescription || !resumeText}
                    >
                      {isLoading ? "Generating..." : "Generate Cover Letter"}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="url" className="mt-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="job-url" className="block text-sm font-medium mb-1">
                        Job Posting URL
                      </label>
                      <Input
                        id="job-url"
                        placeholder="https://example.com/job-posting"
                        value={jobUrl}
                        onChange={(e) => setJobUrl(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        We'll extract the job details automatically
                      </p>
                    </div>
                    <div>
                      <label htmlFor="resume-url" className="block text-sm font-medium mb-1">
                        Your Resume
                      </label>
                      <Textarea
                        id="resume-url"
                        placeholder="Paste your resume text here..."
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isLoading || !jobUrl || !resumeText}
                    >
                      {isLoading ? "Generating..." : "Generate Cover Letter"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Generated Cover Letter</CardTitle>
              <CardDescription>
                Your custom cover letter will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              {coverLetter ? (
                <div className="bg-muted/40 p-4 rounded-md whitespace-pre-line">
                  {coverLetter}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    Fill out the job information and click "Generate Cover Letter"
                  </p>
                </div>
              )}
            </CardContent>
            {coverLetter && (
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">
                  Copy to Clipboard
                </Button>
                <Button>
                  Download as PDF
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterGenerator;
