
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {
  const { loading } = useSelector( state => state.ui );
  return loading
    ? <Navigate to="/" />
    : children
};