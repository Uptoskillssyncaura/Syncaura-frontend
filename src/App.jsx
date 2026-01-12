import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Meetings from "./pages/Meetings";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Topbar from "./components/userdashboard/Topbar/Topbar";
import Header from "./components/Meeting/Header/Header";
import MobileSidebar from "./components/MobileSidebar";
import Sidebar from "./components/userdashboard/Sidebar/Sidebar";
import Complaints from "./pages/Complaints";
import AttendanceLeave from "./pages/AttendanceLeave";
import Notice from "./pages/Notice";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/normal-dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            
            {/* User dashboard */}
            <Route
              path="/user-dashboard"
              element={
                <MainLayout TopbarComponent={Topbar} SideBar={Sidebar}>
                  <UserDashboard />
                </MainLayout>
              }
            />
            <Route
              path="/projects"
              element={
                <MainLayout TopbarComponent={Header} SideBar={MobileSidebar}>
                  <Projects />
                </MainLayout>
              }
            />
            {/* Add other routes similarly */}
            
            {/* Catch all */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
