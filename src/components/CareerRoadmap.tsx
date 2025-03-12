
import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

const CareerRoadmap = () => {
  // This is a simple roadmap component - in a real app, this would be customized based on the user's results
  const roadmapSteps = [
    {
      title: "Foundation",
      duration: "3-6 months",
      completed: true,
      tasks: [
        { name: "Learn HTML, CSS & JavaScript fundamentals", completed: true },
        { name: "Build basic web projects", completed: true },
        { name: "Learn Git version control", completed: true },
      ]
    },
    {
      title: "Frontend Development",
      duration: "6-9 months",
      completed: false,
      current: true,
      tasks: [
        { name: "Master React.js", completed: true },
        { name: "Learn state management (Redux/Context)", completed: false },
        { name: "Build responsive UI with CSS frameworks", completed: true },
      ]
    },
    {
      title: "Backend Development",
      duration: "6-9 months",
      completed: false,
      tasks: [
        { name: "Learn Node.js fundamentals", completed: false },
        { name: "Build RESTful APIs", completed: false },
        { name: "Work with databases (SQL/NoSQL)", completed: false },
      ]
    },
    {
      title: "Full Stack Integration",
      duration: "3-6 months",
      completed: false,
      tasks: [
        { name: "Connect frontend and backend", completed: false },
        { name: "Implement authentication & authorization", completed: false },
        { name: "Deploy full stack applications", completed: false },
      ]
    },
    {
      title: "Specialized Skills",
      duration: "6-12 months",
      completed: false,
      tasks: [
        { name: "Learn cloud services (AWS/Azure/GCP)", completed: false },
        { name: "Implement CI/CD pipelines", completed: false },
        { name: "Master DevOps practices", completed: false },
      ]
    }
  ];

  return (
    <div className="px-4">
      <div className="relative">
        {roadmapSteps.map((step, index) => (
          <div key={index} className="mb-8 relative">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className={`
                  rounded-full p-1
                  ${step.completed ? 'bg-green-100 text-green-600' : step.current ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}
                `}>
                  {step.completed ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    <Circle className="h-6 w-6" />
                  )}
                </div>
                {index < roadmapSteps.length - 1 && (
                  <div className={`
                    w-0.5 h-full absolute left-3 ml-[1px] mt-8
                    ${step.completed ? 'bg-green-400' : 'bg-gray-200'}
                  `}></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-semibold text-lg
                    ${step.current ? 'text-blue-600' : ''}
                  `}>
                    {step.title}
                    {step.current && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Current Focus</span>}
                  </h3>
                  <span className="text-sm text-muted-foreground">{step.duration}</span>
                </div>
                <ul className="space-y-2">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center">
                      <CheckCircle2 className={`h-4 w-4 mr-2 ${task.completed ? 'text-green-500' : 'text-gray-300'}`} />
                      <span className={task.completed ? '' : 'text-muted-foreground'}>{task.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerRoadmap;
