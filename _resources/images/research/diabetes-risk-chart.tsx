import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DiabetesRiskChart = () => {
  const data = [
    {
      quartile: "Q4 (Widest)\n0.91-1.22",
      incidence: 2.4,
      odds: 1.0,
      color: "#93c5fd"
    },
    {
      quartile: "Q3\n0.85-0.90",
      incidence: 3.1,
      odds: 1.27,
      color: "#60a5fa"
    },
    {
      quartile: "Q2\n0.80-0.84", 
      incidence: 4.0,
      odds: 1.61,
      color: "#3b82f6"
    },
    {
      quartile: "Q1 (Narrowest)\n0.57-0.79",
      incidence: 5.2,
      odds: 2.09,
      color: "#2563eb"
    }
  ];

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Retinal Arteriolar Narrowing Predicts Diabetes Risk</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-sm text-gray-600">
          Based on ARIC Study of 7,993 participants followed for 3.5 years
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" 
                   label={{ value: 'Diabetes Incidence (%)', position: 'bottom', offset: 0 }}
            />
            <YAxis dataKey="quartile" type="category" width={100} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Bar 
              dataKey="incidence" 
              fill="#2563eb"
              label={{ position: 'right', formatter: (value) => `${value}%` }}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-sm space-y-2">
          <p>Key Findings:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Participants with the narrowest retinal arterioles (Q1) had 2.09x higher odds of developing diabetes compared to those with the widest arterioles (Q4)</li>
            <li>This association remained significant after adjusting for traditional risk factors</li>
            <li>The relationship was seen even in people without family history of diabetes or other risk factors</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiabetesRiskChart;