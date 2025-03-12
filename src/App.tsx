
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Strategy from "./pages/Strategy";
import Resources from "./pages/Resources";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

const queryClient = new QueryClient();

const App = () => {
  // Check if the current route is an auth page
  const isAuthPage = (pathname: string) => {
    return ['/signin', '/signup', '/forgot-password'].includes(pathname);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {({ location }) => (
            <div className="min-h-screen">
              {!isAuthPage(location.pathname) && <Navbar />}
              <main className={!isAuthPage(location.pathname) ? "pt-16" : ""}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/strategy" element={<Strategy />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
