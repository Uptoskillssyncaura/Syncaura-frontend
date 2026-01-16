import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Folder,
  MessageSquare,
  ClipboardList,
  Clock
} from "lucide-react";

const iconMap = {
  folder: Folder,
  message: MessageSquare,
  task: ClipboardList,
  clock: Clock,
};

const colorMap = {
  due: { iconBg: "bg-[#776FEB]/10", iconColor: "text-[#776FEB]", subtitle: "text-[#776FEB]" },
  chat: { iconBg: "bg-[#059669]/10", iconColor: "text-[#059669]", subtitle: "text-[#059669]" },
  priority: { iconBg: "bg-[#EA5B14]/10", iconColor: "text-[#EA5B14]", subtitle: "text-[#EA5B14]" },
  approval: { iconBg: "bg-[#A133ED]/10", iconColor: "text-[#A133ED]", subtitle: "text-[#A133ED]" },
};

const StatsCard = ({ data }) => {
  const Icon = iconMap[data.iconType];
  const colors = colorMap[data.variant];

  return (
    <Card
      className={cn(
        "w-[250px] h-[187px] rounded-[9px]",
        "bg-white dark:bg-[#0F172A]",
        "border border-black/5 dark:border-white/10",
        "shadow-[0px_4px_4px_4px_rgba(0,0,0,0.25)]"
      )}
    >
      <CardContent className="h-full px-[20px] py-[22px] flex justify-between">
        <div className="flex flex-col">
          <p className="font-poppins text-[12px] mt-3 font-medium text-[#94A3B8]">
            {data.title}
          </p>
          <p className="mt-[15px] font-poppins font-semibold text-[24px] text-[#020617] dark:text-[#F1F5F9]">
            {data.value}
          </p>
          <p className={cn("mt-[29px] font-poppins font-semibold text-[13px]", colors.subtitle)}>
            {data.subtitle}
          </p>
        </div>
        <div className={cn("h-[48px] w-[48px] rounded-[12px] flex items-center justify-center", colors.iconBg)}>
          <Icon className={cn("h-[22px] w-[22px]", colors.iconColor)} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;


