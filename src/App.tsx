import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";



function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
  );
}

export default App;
