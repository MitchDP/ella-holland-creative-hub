
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import EditProfile from "./pages/EditProfile";

const queryClient = new QueryClient();

// Layout component to ensure consistent header/footer on all non-admin pages
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/add-project" element={<AddProject />} />
            <Route path="/admin/edit-project/:id" element={<EditProject />} />
            <Route path="/admin/edit-profile" element={<EditProfile />} />
            
            {/* Catch-all Route */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
