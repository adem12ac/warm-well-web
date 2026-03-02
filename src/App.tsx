import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leistungen from "./pages/Leistungen";
import Grosskunden from "./pages/Grosskunden";
import Privatkunden from "./pages/Privatkunden";
import Produkte from "./pages/Produkte";
import Projekte from "./pages/Projekte";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/grosskunden" element={<Grosskunden />} />
          <Route path="/privatkunden" element={<Privatkunden />} />
          <Route path="/produkte" element={<Produkte />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
