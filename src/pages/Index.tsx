
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Compass, BookOpen, Briefcase, MessageSquare, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CareerPathsChart from "@/components/CareerPathsChart";

export default function Index() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Compass className="h-6 w-6 text-primary" />,
      title: "AI-Powered Career Guidance",
      description: "Get personalized career recommendations based on your skills, interests, and market trends."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Interactive Learning Roadmaps",
      description: "Follow step-by-step learning paths customized to your career goals."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Job Market Insights",
      description: "Access real-time data on job demand, salary ranges, and required skills."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "AI Career Counseling",
      description: "Chat with our AI career advisor for immediate guidance and answers."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Skill Assessment",
      description: "Evaluate your current skills and identify areas for improvement."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="grid gap-6 md:grid-cols-2 lg:gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Discover Your Perfect Tech Career Path
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            AI-powered career guidance for undergraduate tech students. Explore personalized career paths, skills insights, and job market trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" onClick={() => navigate("/assessment")}>
              Start Assessment
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/chat")}>
              Ask Career AI
              <MessageSquare className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <CareerPathsChart />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-muted/50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI-powered platform guides you through a simple process to discover your ideal career path
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">1</div>
            <h3 className="text-xl font-medium mb-2">Complete Assessment</h3>
            <p className="text-muted-foreground">Take our comprehensive skill and interest assessment</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">2</div>
            <h3 className="text-xl font-medium mb-2">Get Recommendations</h3>
            <p className="text-muted-foreground">Receive AI-generated career paths and skill roadmaps</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mb-4">3</div>
            <h3 className="text-xl font-medium mb-2">Take Action</h3>
            <p className="text-muted-foreground">Follow personalized guidance to achieve your career goals</p>
          </div>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Path?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Take the first step toward your ideal tech career with personalized AI guidance
        </p>
        <Button size="lg" onClick={() => navigate("/assessment")}>
          Start Your Career Journey
        </Button>
      </section>
    </div>
  );
}
