import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken"); // or authToken
  const user=localStorage.getItem("user");
  //  If not logged in → go to sign-in
  if (!token||!user) {
    return <Navigate to="/sign-in" replace />;
  }

  //  If logged in → open page
  return children;
};

export default ProtectedRoute;