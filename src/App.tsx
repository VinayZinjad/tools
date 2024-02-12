import "./App.css";
import Header from "./components/header";
import JiraBranchNameGenerator from "./components/jira-branch-name-generator";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Toaster />
        <JiraBranchNameGenerator />
      </ThemeProvider>
    </>
  );
}

export default App;
