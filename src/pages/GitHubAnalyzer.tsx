
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

type RepoAnalysis = {
  name: string;
  commits: number;
  stars: number;
  forks: number;
  languages: { [key: string]: number };
  quality: {
    score: number;
    readmeQuality: number;
    codeComments: number;
    testCoverage: number;
  };
  suggestions: string[];
};

const GitHubAnalyzer = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  const [repoAnalysis, setRepoAnalysis] = useState<RepoAnalysis[]>([]);
  const [activeTab, setActiveTab] = useState<string>("profile");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock profile data
      const mockProfile = {
        username: username,
        name: "John Doe",
        avatar: "https://via.placeholder.com/150",
        bio: "Frontend Developer | React | TypeScript | Open Source Enthusiast",
        followers: 128,
        following: 87,
        joinedDate: "2019-05-23",
        publicRepos: 32,
        topLanguages: [
          { name: "JavaScript", percentage: 45 },
          { name: "TypeScript", percentage: 30 },
          { name: "HTML", percentage: 15 },
          { name: "CSS", percentage: 10 }
        ],
        activityStats: {
          totalCommits: 758,
          contributionStreaks: {
            current: 12,
            longest: 67
          },
          averageCommitsPerWeek: 14.2
        }
      };
      
      // Mock repo analysis
      const mockRepoAnalysis: RepoAnalysis[] = [
        {
          name: "react-dashboard",
          commits: 83,
          stars: 27,
          forks: 12,
          languages: { 
            TypeScript: 65, 
            CSS: 25, 
            HTML: 10 
          },
          quality: {
            score: 8.2,
            readmeQuality: 9,
            codeComments: 7,
            testCoverage: 8.5
          },
          suggestions: [
            "Add more inline documentation to complex functions",
            "Consider implementing CI/CD pipeline",
            "Improve test coverage for utility functions"
          ]
        },
        {
          name: "node-api-starter",
          commits: 42,
          stars: 18,
          forks: 8,
          languages: { 
            JavaScript: 80, 
            JSON: 15, 
            Markdown: 5 
          },
          quality: {
            score: 7.5,
            readmeQuality: 8,
            codeComments: 6,
            testCoverage: 7
          },
          suggestions: [
            "Migrate to TypeScript for better type safety",
            "Add more comprehensive error handling",
            "Include examples in documentation"
          ]
        }
      ];
      
      setProfileData(mockProfile);
      setRepoAnalysis(mockRepoAnalysis);
      setIsLoading(false);
    }, 2000);
  };

  const renderLanguageBar = (languages: { [key: string]: number }) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      HTML: "bg-orange-500",
      CSS: "bg-purple-500",
      JSON: "bg-gray-500",
      Markdown: "bg-green-500"
    };
    
    return (
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
        {Object.entries(languages).map(([lang, percentage], i) => (
          <div 
            key={i} 
            className={`${colors[lang] || "bg-gray-400"}`} 
            style={{ width: `${percentage}%` }}
            title={`${lang}: ${percentage}%`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container max-w-5xl py-6">
      <h1 className="text-3xl font-bold mb-6">GitHub Profile Analyzer</h1>
      <p className="text-muted-foreground mb-8">
        Analyze your GitHub profile and repositories to get insights and improvement suggestions
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Enter GitHub Username</CardTitle>
          <CardDescription>
            We'll analyze your public repositories and contribution patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <Input
              placeholder="GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !username}>
              {isLoading ? "Analyzing..." : "Analyze Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {profileData && (
        <>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile Overview</TabsTrigger>
              <TabsTrigger value="repositories">Repository Analysis</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img src={profileData.avatar} alt={profileData.name} className="w-full h-full object-cover" />
                    </div>
                    <CardTitle>{profileData.name}</CardTitle>
                    <CardDescription className="text-center">
                      @{profileData.username}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="mb-4">{profileData.bio}</p>
                    <div className="grid grid-cols-2 gap-4 text-center mb-6">
                      <div>
                        <p className="text-2xl font-bold">{profileData.followers}</p>
                        <p className="text-muted-foreground text-sm">Followers</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{profileData.following}</p>
                        <p className="text-muted-foreground text-sm">Following</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">
                        Joined: {new Date(profileData.joinedDate).toLocaleDateString()}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Public Repos: {profileData.publicRepos}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Activity Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Language Distribution</h3>
                        <div className="space-y-2">
                          {profileData.topLanguages.map((lang: any, i: number) => (
                            <div key={i}>
                              <div className="flex justify-between text-sm mb-1">
                                <span>{lang.name}</span>
                                <span>{lang.percentage}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: `${lang.percentage}%` }} 
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-muted/40 p-4 rounded-md text-center">
                          <p className="text-3xl font-bold">{profileData.activityStats.totalCommits}</p>
                          <p className="text-sm text-muted-foreground">Total Commits</p>
                        </div>
                        <div className="bg-muted/40 p-4 rounded-md text-center">
                          <p className="text-3xl font-bold">{profileData.activityStats.contributionStreaks.longest}</p>
                          <p className="text-sm text-muted-foreground">Longest Streak</p>
                        </div>
                        <div className="bg-muted/40 p-4 rounded-md text-center">
                          <p className="text-3xl font-bold">{profileData.activityStats.averageCommitsPerWeek}</p>
                          <p className="text-sm text-muted-foreground">Avg. Weekly Commits</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="repositories" className="mt-6">
              <div className="space-y-6">
                {repoAnalysis.map((repo, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{repo.name}</CardTitle>
                          <CardDescription className="mt-1">
                            {repo.commits} commits • {repo.stars} stars • {repo.forks} forks
                          </CardDescription>
                        </div>
                        <div className="bg-primary/10 text-primary text-xl font-bold px-3 py-1 rounded">
                          {repo.quality.score.toFixed(1)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Languages</p>
                          {renderLanguageBar(repo.languages)}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {Object.entries(repo.languages).map(([lang, percentage], i) => (
                              <span key={i} className="text-xs text-muted-foreground">
                                {lang}: {percentage}%
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">README Quality</p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{ width: `${repo.quality.readmeQuality * 10}%` }} 
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Code Comments</p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${repo.quality.codeComments * 10}%` }} 
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Test Coverage</p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-purple-500 h-2 rounded-full" 
                                style={{ width: `${repo.quality.testCoverage * 10}%` }} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recommendations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Improvement Suggestions</CardTitle>
                  <CardDescription>
                    Based on the analysis of your repositories, here are some recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {repoAnalysis.map((repo, index) => (
                      <div key={index} className="pb-6 border-b last:border-0">
                        <h3 className="text-lg font-medium mb-3">{repo.name}</h3>
                        <ul className="space-y-2">
                          {repo.suggestions.map((suggestion, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    
                    <div className="pt-4">
                      <h3 className="text-lg font-medium mb-3">General Recommendations</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Consider contributing to open source projects to diversify your portfolio</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Add more comprehensive README files with installation and usage instructions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Implement and maintain consistent code style across repositories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Increase test coverage, especially for critical business logic</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default GitHubAnalyzer;
