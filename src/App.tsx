import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@/components/theme/ThemeProvider";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}
