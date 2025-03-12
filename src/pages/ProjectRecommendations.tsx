
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const ProjectRecommendations = () => {
  const [skills, setSkills] = useState("");
  const [goals, setGoals] = useState("");
  const [experience, setExperience] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      const mockProjects = [
        {
          title: "E-commerce Platform",
          description: "Build a full-stack e-commerce platform with user authentication, product management, cart functionality, and payment processing.",
          skills: ["React", "Node.js", "MongoDB", "Stripe API"],
          difficulty: "Intermediate",
          timeline: "4-6 weeks"
        },
        {
          title: "Task Management Dashboard",
          description: "Create a Kanban-style task management application with drag-and-drop functionality, user assignments, and progress tracking.",
          skills: ["React", "TypeScript", "Redux", "Firebase"],
          difficulty: "Intermediate",
          timeline: "3-4 weeks"
        },
        {
          title: "AI Content Analyzer",
          description: "Develop a web application that analyzes content for SEO optimization, readability, and sentiment using AI APIs.",
          skills: ["JavaScript", "Python", "Natural Language Processing", "RESTful APIs"],
          difficulty: "Advanced",
          timeline: "5-7 weeks"
        }
      ];
      
      setProjects(mockProjects);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container max-w-5xl py-6">
      <h1 className="text-3xl font-bold mb-6">Project Recommendations</h1>
      <p className="text-muted-foreground mb-8">
        Get personalized project ideas based on your skills, experience, and career goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>
              Tell us about yourself so we can recommend relevant projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="skills" className="block text-sm font-medium mb-1">
                  Skills
                </label>
                <Textarea
                  id="skills"
                  placeholder="React, TypeScript, Node.js, etc."
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="min-h-20"
                />
              </div>
              <div>
                <label htmlFor="goals" className="block text-sm font-medium mb-1">
                  Career Goals
                </label>
                <Textarea
                  id="goals"
                  placeholder="What are your career aspirations?"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="min-h-20"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-1">
                  Experience Level
                </label>
                <Textarea
                  id="experience"
                  placeholder="Describe your past experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="min-h-20"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Get Recommendations"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recommended Projects</CardTitle>
            <CardDescription>
              Personalized project ideas to enhance your portfolio
            </CardDescription>
          </CardHeader>
          <CardContent>
            {projects.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Fill out your profile details and click "Get Recommendations" to see project ideas
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.skills.map((skill: string, i: number) => (
                          <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{project.description}</p>
                      <div className="flex justify-between mt-4 text-sm text-muted-foreground">
                        <span>Difficulty: {project.difficulty}</span>
                        <span>Timeline: {project.timeline}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectRecommendations;
