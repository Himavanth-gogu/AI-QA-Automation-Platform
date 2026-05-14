import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import AnalyticsPage from "./pages/Analytics";
import Assistant from "./pages/Assistant";
import Executions from "./pages/Executions";
import Integrations from "./pages/Integrations";
import SettingsPage from "./pages/Settings";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* PROTECTED */}

        <Route
          path="/"
          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }
        />

        <Route
          path="/reports"
          element={

            <ProtectedRoute>

              <Reports />

            </ProtectedRoute>

          }
        />

        <Route
          path="/analytics"
          element={

            <ProtectedRoute>

              <AnalyticsPage />

            </ProtectedRoute>

          }
        />

        <Route
          path="/assistant"
          element={

            <ProtectedRoute>

              <Assistant />

            </ProtectedRoute>

          }
        />

        <Route
          path="/executions"
          element={

            <ProtectedRoute>

              <Executions />

            </ProtectedRoute>

          }
        />

        <Route
          path="/integrations"
          element={

            <ProtectedRoute>

              <Integrations />

            </ProtectedRoute>

          }
        />

        <Route
          path="/settings"
          element={

            <ProtectedRoute>

              <SettingsPage />

            </ProtectedRoute>

          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;