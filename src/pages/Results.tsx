import React from "react";
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
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  Code, 
  Briefcase, 
  ExternalLink,
  MessageSquare
} from "lucide-react";
import CareerRoadmap from "@/components/CareerRoadmap";

const Results = () => {
  const navigate = useNavigate();

  const recommendations = {
    topCareerPaths: [
      {
        title: "Full Stack Developer",
        match: 94,
        description: "Build complete web applications working on both frontend and backend.",
        keySkills: ["JavaScript", "React", "Node.js", "Databases", "Cloud Services"],
        avgSalary: "$105,000",
        growthRate: "19%"
      },
      {
        title: "Data Scientist",
        match: 85,
        description: "Analyze complex data to help organizations make better decisions.",
        keySkills: ["Python", "Statistics", "Machine Learning", "Data Visualization", "SQL"],
        avgSalary: "$122,000",
        growthRate: "22%"
      },
      {
        title: "Cloud Solutions Architect",
        match: 80,
        description: "Design and implement cloud-based solutions for organizations.",
        keySkills: ["AWS/Azure/GCP", "Infrastructure as Code", "Networking", "Security", "Containerization"],
        avgSalary: "$135,000",
        growthRate: "15%"
      }
    ],
    skillGaps: [
      { skill: "Backend Development", proficiency: "Intermediate", recommendation: "Take a Node.js or Django course" },
      { skill: "Cloud Services", proficiency: "Beginner", recommendation: "Complete AWS Certified Developer certification" },
      { skill: "CI/CD Pipeline", proficiency: "Beginner", recommendation: "Learn GitHub Actions and Jenkins" },
      { skill: "System Design", proficiency: "Beginner", recommendation: "Take a system design course" },
      { skill: "Docker & Kubernetes", proficiency: "Novice", recommendation: "Complete Docker & Kubernetes bootcamp" },
      { skill: "AI/ML Fundamentals", proficiency: "Novice", recommendation: "Start with AI/ML basics course" }
    ],
    learningResources: [
      { name: "Full Stack Web Development Bootcamp", provider: "Udemy", type: "Course", link: "#" },
      { name: "Build a REST API with Node.js", provider: "freeCodeCamp", type: "Tutorial", link: "#" },
      { name: "AWS Certified Developer - Associate", provider: "A Cloud Guru", type: "Certification", link: "#" },
      { name: "System Design Interview Course", provider: "Educative", type: "Course", link: "#" },
      { name: "Docker & Kubernetes: The Complete Guide", provider: "Udemy", type: "Course", link: "#" }
    ]
  };

  const handleViewCareerPath = (careerTitle) => {
    console.log(`Viewing career path for: ${careerTitle}`);
    navigate(`/chat?topic=${encodeURIComponent(`Tell me more about becoming a ${careerTitle}`)}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3">Your Career Recommendations</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Based on your skills, interests, and market trends, we've identified the following career paths for you
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {recommendations.topCareerPaths.map((career, index) => (
          <Card key={index} className={index === 0 ? "border-primary border-2" : ""}>
            {index === 0 && (
              <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                Top Match
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{career.title}</CardTitle>
                <Badge variant="outline" className="ml-2 bg-primary/10">
                  {career.match}% Match
                </Badge>
              </div>
              <CardDescription>{career.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {career.keySkills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Avg. Salary</p>
                  <p className="font-medium">{career.avgSalary}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Growth Rate</p>
                  <p className="font-medium text-green-600">{career.growthRate}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={index === 0 ? "default" : "outline"}
                onClick={() => handleViewCareerPath(career.title)}
              >
                View Career Path
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Your Career Roadmap</h2>
        <div className="bg-card border rounded-lg p-4 md:p-6 shadow-sm">
          <CareerRoadmap />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Code className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Skill Development Recommendations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Skill</TableHead>
                  <TableHead>Current Level</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recommendations.skillGaps.map((skill, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{skill.skill}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{skill.proficiency}</Badge>
                    </TableCell>
                    <TableCell>{skill.recommendation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              <CardTitle>Recommended Learning Resources</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.learningResources.map((resource, index) => (
                <div key={index} className="flex items-start p-3 border rounded-md">
                  <div className="mr-3 mt-1">
                    {resource.type === "Course" && <BookOpen className="h-4 w-4 text-blue-500" />}
                    {resource.type === "Tutorial" && <Code className="h-4 w-4 text-green-500" />}
                    {resource.type === "Certification" && <GraduationCap className="h-4 w-4 text-purple-500" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{resource.name}</h4>
                    <p className="text-sm text-muted-foreground">{resource.provider} • {resource.type}</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Open link</span>
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 md:mb-12">
        <Button onClick={() => navigate("/chat")}>
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat with Career AI
        </Button>
        <Button variant="outline" onClick={() => navigate("/assessment")}>
          Retake Assessment
        </Button>
        <Button variant="outline" onClick={() => navigate("/resume-analyzer")}>
          Resume Analysis
        </Button>
      </div>
    </div>
  );
};

export default Results;
