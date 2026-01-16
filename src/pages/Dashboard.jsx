import SidebarPanel from "@/components/dashboard/SideBar/SidebarPanel";
import Header from "@/components/dashboard/Header/Header";
import DashboardHeader from "@/components/dashboard/Main/SubHeader/DashboardHeader";
import StatsCard from "@/components/dashboard/Main/SubMain/Left/StatsCard";
import ProjectStatusChart from "@/components/dashboard/Main/SubMain/Left/ProjectStatusChart";
import FeatureMenu from "@/components/dashboard/Main/SubMain/Right/FeatureMenu";
import { statsCards } from "@/data/dashboardData";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* SIDEBAR */}
      <SidebarPanel />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* CONTENT — NO INNER SCROLLBAR */}
        <main className="flex-1 px-8 pt-6">
          {/* HEADER */}
          <DashboardHeader />

          {/* STATS CARDS */}
          <div
            className="
              mt-6
              ml-8
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-x-3
              gap-y-9
            "
          >
            {statsCards.map((card) => (
              <StatsCard key={card.id} data={card} />
            ))}
          </div>

          {/* CHART SECTION */}
          <div className="mt-6 ml-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectStatusChart />
            <FeatureMenu />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
