import { useEffect, useRef } from "react";
import "./App.css";
import CounterAndTheme from "./components/CounterAndTheme";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main>
      <div className="empty-div">
        <span>Heyo! Wassup?</span>
      </div>
      <div ref={ref}>
        <ThemeProvider>
          <CounterAndTheme />
        </ThemeProvider>
      </div>
    </main>
  );
}

export default App;
