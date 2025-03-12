
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SkillsFormData, skillsSchema } from "@/types/assessment";
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage 
} from "@/components/ui/form";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

interface SkillsStepProps {
  initialData: SkillsFormData;
  onSubmit: (data: SkillsFormData) => void;
  onBack: () => void;
}

const SkillsStep: React.FC<SkillsStepProps> = ({ initialData, onSubmit, onBack }) => {
  const form = useForm<SkillsFormData>({
    resolver: zodResolver(skillsSchema),
    defaultValues: initialData
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills & Experience</CardTitle>
        <CardDescription>Tell us about your technical background</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="programmingExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Programming Experience</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                      <SelectItem value="expert">Expert (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="preferredLanguages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Programming Languages</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., Python, JavaScript, Java" {...field} />
                  </FormControl>
                  <FormDescription>List languages you know or are interested in learning</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="projectExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Experience</FormLabel>
                  <FormControl>
                    <Input placeholder="Describe your key projects or experiences" {...field} />
                  </FormControl>
                  <FormDescription>Briefly describe your most notable project(s)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={onBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SkillsStep;
