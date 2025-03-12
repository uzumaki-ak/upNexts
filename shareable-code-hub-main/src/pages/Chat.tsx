
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { SendHorizontal, Bot, User } from "lucide-react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm your AI Career Advisor. How can I help with your career questions today? You can ask me about tech careers, skills to learn, or job market insights."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock response generator - in a real app, this would call your AI API
  const generateResponse = async (userMessage: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simple response logic - in a real app, responses would come from your AI service
    let response = "";
    
    if (userMessage.toLowerCase().includes("full stack")) {
      response = "Full Stack Development is a great career path! It involves both frontend (UI/UX) and backend (server, database) skills. Key technologies include JavaScript, React, Node.js, and databases like MongoDB or PostgreSQL. The average salary is around $105,000, with strong job growth expected over the next decade.";
    } else if (userMessage.toLowerCase().includes("data sci")) {
      response = "Data Science combines statistics, programming, and domain expertise to extract insights from data. You'll need skills in Python, R, SQL, machine learning, and data visualization. This field has a high demand with an average salary of $122,000, and opportunities across various industries.";
    } else if (userMessage.toLowerCase().includes("cloud")) {
      response = "Cloud Computing is a rapidly growing field. As a Cloud Architect or Engineer, you'll design and manage cloud infrastructure using AWS, Azure, or Google Cloud. Skills in infrastructure as code, networking, and security are valuable. The average salary is around $135,000 with excellent growth prospects.";
    } else if (userMessage.toLowerCase().includes("skill") || userMessage.toLowerCase().includes("learn")) {
      response = "For tech careers in 2023, these skills are in high demand: 1) Cloud computing (AWS/Azure/GCP), 2) Full-stack development (JavaScript frameworks), 3) Data science & ML, 4) DevOps & CI/CD, 5) Cybersecurity. I recommend focusing on one path initially and building projects to demonstrate your skills to potential employers.";
    } else {
      response = "Thanks for your question! To provide more specific guidance, I'd need to know more about your interests, current skills, and career goals. Feel free to ask about specific tech roles, required skills, or career transition strategies, and I'll provide detailed information.";
    }
    
    setIsLoading(false);
    return response;
  };

  const handleSend = async () => {
    if (input.trim() === "") return;
    
    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Generate and add AI response
    const response = await generateResponse(input);
    setMessages(prev => [...prev, { role: "assistant", content: response }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="container mx-auto h-screen max-w-4xl flex flex-col py-8 px-4">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Career AI Advisor</h1>
        <p className="text-muted-foreground">
          Ask questions about careers, skills, or job market trends
        </p>
      </div>
      
      <Card className="flex-1 flex flex-col overflow-hidden mb-4">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex items-start ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <Avatar className="mr-2 bg-primary/10">
                  <Bot className="text-primary h-5 w-5" />
                </Avatar>
              )}
              
              <div 
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  message.role === "user" 
                  ? "bg-primary text-primary-foreground ml-2" 
                  : "bg-muted"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
              
              {message.role === "user" && (
                <Avatar className="ml-2 bg-secondary/10">
                  <User className="text-secondary h-5 w-5" />
                </Avatar>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start justify-start">
              <Avatar className="mr-2 bg-primary/10">
                <Bot className="text-primary h-5 w-5" />
              </Avatar>
              <div className="bg-muted rounded-lg px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "600ms" }}></div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="flex space-x-2">
        <Input
          placeholder="Type your career question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          className="flex-1"
        />
        <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
          <SendHorizontal className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </div>
  );
};

export default Chat;
