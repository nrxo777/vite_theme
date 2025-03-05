import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBTN";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // ******* actual change in theme ******* \\

  let catchTheme = document.querySelector("html").classList;
  useEffect(() => {
    catchTheme.remove("light", "dark");
    catchTheme.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            <ThemeBtn />
            <div className="w-full max-w-sm mx-auto"></div>
            <Card />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
