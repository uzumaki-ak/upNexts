
import React from "react";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
} from "@/components/ui/chart";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer 
} from "recharts";

const CareerPathsChart = () => {
  // Sample career growth data
  const careerData = [
    {
      name: "Entry",
      "Full Stack": 60000,
      "Data Science": 65000,
      "Cloud Architecture": 70000,
      "DevOps": 68000,
      "Cybersecurity": 72000,
    },
    {
      name: "Mid-Level",
      "Full Stack": 90000,
      "Data Science": 110000,
      "Cloud Architecture": 120000,
      "DevOps": 105000,
      "Cybersecurity": 115000,
    },
    {
      name: "Senior",
      "Full Stack": 130000,
      "Data Science": 150000,
      "Cloud Architecture": 170000,
      "DevOps": 145000,
      "Cybersecurity": 160000,
    },
    {
      name: "Lead",
      "Full Stack": 160000,
      "Data Science": 180000,
      "Cloud Architecture": 200000,
      "DevOps": 175000,
      "Cybersecurity": 190000,
    }
  ];

  const config = {
    "Full Stack": {
      label: "Full Stack Developer",
      theme: {
        light: "#3b82f6",
        dark: "#3b82f6",
      },
    },
    "Data Science": {
      label: "Data Scientist",
      theme: {
        light: "#10b981",
        dark: "#10b981",
      },
    },
    "Cloud Architecture": {
      label: "Cloud Architect",
      theme: {
        light: "#f59e0b",
        dark: "#f59e0b",
      },
    },
    "DevOps": {
      label: "DevOps Engineer",
      theme: {
        light: "#8b5cf6",
        dark: "#8b5cf6",
      },
    },
    "Cybersecurity": {
      label: "Cybersecurity Expert",
      theme: {
        light: "#ec4899",
        dark: "#ec4899",
      },
    },
  };

  return (
    <ChartContainer config={config}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={careerData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis 
            tickFormatter={(value) => `$${Math.floor(value / 1000)}k`}
            width={70}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent 
                formatter={(value) => `$${value.toLocaleString()}`}
                labelFormatter={(label) => `Career Stage: ${label}`}
              />
            }
          />
          <Area
            type="monotone"
            dataKey="Full Stack"
            stackId="1"
            stroke="var(--color-Full Stack)"
            fill="var(--color-Full Stack)"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="Data Science"
            stackId="2"
            stroke="var(--color-Data Science)"
            fill="var(--color-Data Science)"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="Cloud Architecture"
            stackId="3"
            stroke="var(--color-Cloud Architecture)"
            fill="var(--color-Cloud Architecture)"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="DevOps"
            stackId="4"
            stroke="var(--color-DevOps)"
            fill="var(--color-DevOps)"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="Cybersecurity"
            stackId="5"
            stroke="var(--color-Cybersecurity)"
            fill="var(--color-Cybersecurity)"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default CareerPathsChart;
