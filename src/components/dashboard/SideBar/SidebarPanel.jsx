import { useLocation, Link } from "react-router-dom";
import { navigationItems } from "@/data/dashboardData";

const SidebarPanel = () => {
  const location = useLocation();

  return (
    <aside
      className="
        w-[293.13px]
        min-h-screen
        flex flex-col
        bg-white dark:bg-[#0F172A]
        shadow-[0_4px_4px_rgba(0,0,0,0.5)]
      "
    >
      {/* LOGO */}
      <div className="flex items-center h-[50px] pl-[28.51px] pt-[6px] gap-[10px] shrink-0">
        <div
          className="
            w-[37.64px] h-[39px]
            rounded-[5px]
            bg-[#2563EB]
            shadow-[0_2px_4px_#3B82F6]
            flex items-center justify-center
          "
        >
          <span className="font-poppins font-bold text-[18px] text-white">
            N
          </span>
        </div>

        <span className="font-poppins font-semibold text-[20px] text-slate-900 dark:text-[#F1F5F9]">
          NEXUS
        </span>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 overflow-y-auto mt-6 px-3 pb-6">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`
                    group
                    flex items-center gap-3
                    px-4 py-3
                    rounded-lg
                    transition-colors
                    ${
                      isActive
                        ? "bg-slate-100 dark:bg-[#1E293B]"
                        : "hover:bg-slate-100 dark:hover:bg-[#1E293B]"
                    }
                  `}
                >
                  {/* ICON — FIGMA MATCHED */}
                  <Icon
                    size={23}
                    strokeWidth={2.5}
                    className={`
                      shrink-0
                      ${
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-[#64748B] dark:text-[#94A3B8] group-hover:text-slate-900 dark:group-hover:text-white"
                      }
                    `}
                  />

                  {/* LABEL */}
                  <span
                    className={`
                      text-sm font-medium
                      ${
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-[#64748B] dark:text-[#CBD5E1]"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarPanel;
