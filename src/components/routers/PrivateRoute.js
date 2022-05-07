
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const { loading } = useSelector( state => state.ui );
  return loading
    ? children
    : <Navigate to="/auth/login" />
};
