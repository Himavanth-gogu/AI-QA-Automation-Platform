import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

  const isAuth =
    localStorage.getItem("auth");

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={
            isAuth
              ? <Dashboard />
              : <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;