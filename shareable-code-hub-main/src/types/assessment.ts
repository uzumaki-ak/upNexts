
import * as z from "zod";

// Define our form schemas
export const personalInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  education: z.string().min(1, "Please select your education level"),
  major: z.string().min(1, "Please enter your major/field of study")
});

export const skillsSchema = z.object({
  programmingExperience: z.string().min(1, "Please select your programming experience"),
  preferredLanguages: z.string().min(1, "Please enter your preferred programming languages"),
  projectExperience: z.string().min(1, "Please describe your project experience")
});

export const interestsSchema = z.object({
  careerInterests: z.string().min(1, "Please enter your career interests"),
  workPreference: z.string().min(1, "Please select your work preference"),
  learningStyle: z.string().min(1, "Please select your learning style")
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
export type SkillsFormData = z.infer<typeof skillsSchema>;
export type InterestsFormData = z.infer<typeof interestsSchema>;

export interface AssessmentFormData {
  personalInfo: PersonalInfoFormData;
  skills: SkillsFormData;
  interests: InterestsFormData;
}
