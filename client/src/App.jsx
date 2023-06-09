import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./scenes/dashboard/index";
import Layout from "./scenes/layout/index";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
