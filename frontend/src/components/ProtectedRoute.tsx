import {
  Navigate,
} from "react-router-dom";

function ProtectedRoute({

  children,

}: any) {

  const isAuth =
    localStorage.getItem(
      "isAuth"
    );

  if (!isAuth) {

    return <Navigate to="/login" />;

  }

  return children;

}

export default ProtectedRoute;