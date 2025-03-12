
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import Chat from "./pages/Chat";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import ProjectRecommendations from "./pages/ProjectRecommendations";
import CoverLetterGenerator from "./pages/CoverLetterGenerator";
import GitHubAnalyzer from "./pages/GitHubAnalyzer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/results" element={<Results />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
            <Route path="/project-recommendations" element={<ProjectRecommendations />} />
            <Route path="/cover-letter-generator" element={<CoverLetterGenerator />} />
            <Route path="/github-analyzer" element={<GitHubAnalyzer />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
