import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import { projectStatusData } from "@/data/dashboardData";

const ProjectStatusChart = () => {
  const [isDark, setIsDark] = useState(false);

  // Detect Tailwind dark mode
  useEffect(() => {
    const updateDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateDarkMode();

    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Card className="w-[530px] h-[361px] rounded-[10px] bg-white dark:bg-[#0F172A] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
      <CardHeader className="pt-[38px] pl-[23px]">
        <CardTitle className="text-[16px] font-semibold text-[#020617] dark:text-white">
          Project Status
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Chart */}
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectStatusData} barCategoryGap="45%">
              <Bar
                dataKey="value"
                barSize={36}
                radius={[6, 6, 0, 0]}
                background={{
                  fill: isDark ? "#1E293B" : "#F1F5F9",
                }}
                isAnimationActive={false}
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Labels & Values */}
        <div className="grid grid-cols-4 mt-6">
          {projectStatusData.map((item) => (
            <div key={item.name} className="text-center">
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                {item.name}
              </p>
              <p className="text-sm font-[14px] text-[#667084] dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectStatusChart;

