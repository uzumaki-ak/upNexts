
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { AssessmentFormData } from "@/types/assessment";
import PersonalInfoStep from "@/components/assessment/PersonalInfoStep";
import SkillsStep from "@/components/assessment/SkillsStep";
import InterestsStep from "@/components/assessment/InterestsStep";
import CompletionDialog from "@/components/assessment/CompletionDialog";
import ProgressIndicator from "@/components/assessment/ProgressIndicator";

const Assessment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<AssessmentFormData>({
    personalInfo: {
      name: "",
      email: "",
      education: "",
      major: ""
    },
    skills: {
      programmingExperience: "",
      preferredLanguages: "",
      projectExperience: ""
    },
    interests: {
      careerInterests: "",
      workPreference: "",
      learningStyle: ""
    }
  });

  const handlePersonalInfoSubmit = (data: AssessmentFormData["personalInfo"]) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        name: data.name,
        email: data.email,
        education: data.education,
        major: data.major
      }
    }));
    setStep(2);
  };

  const handleSkillsSubmit = (data: AssessmentFormData["skills"]) => {
    setFormData(prev => ({
      ...prev,
      skills: {
        programmingExperience: data.programmingExperience,
        preferredLanguages: data.preferredLanguages,
        projectExperience: data.projectExperience
      }
    }));
    setStep(3);
  };

  const handleInterestsSubmit = (data: AssessmentFormData["interests"]) => {
    setFormData(prev => ({
      ...prev,
      interests: {
        careerInterests: data.careerInterests,
        workPreference: data.workPreference,
        learningStyle: data.learningStyle
      }
    }));
    setIsDialogOpen(true);
  };

  const handleComplete = () => {
    // Here you would typically send the data to your backend
    console.log("Assessment data:", formData);
    
    toast({
      title: "Assessment Completed!",
      description: "Your career recommendations are ready.",
    });
    
    // Navigate to results page
    navigate("/results");
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Career Assessment</h1>
        <p className="text-muted-foreground">
          Complete this assessment to receive personalized career recommendations
        </p>
        
        <ProgressIndicator currentStep={step} totalSteps={3} />
      </div>

      {step === 1 && (
        <PersonalInfoStep 
          initialData={formData.personalInfo}
          onSubmit={handlePersonalInfoSubmit}
        />
      )}

      {step === 2 && (
        <SkillsStep 
          initialData={formData.skills}
          onSubmit={handleSkillsSubmit}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <InterestsStep 
          initialData={formData.interests}
          onSubmit={handleInterestsSubmit}
          onBack={() => setStep(2)}
        />
      )}

      <CompletionDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default Assessment;
