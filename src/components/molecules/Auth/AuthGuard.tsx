import React from "react";
import { Navigate } from "react-router-dom";
// store
import { useSelector } from "../../../redux/store";
// paths const
import { PATH_AUTH } from "../../../routes/paths";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useSelector((state) => state.persist);
  if (!user.IsLoggedIn) {
    return <Navigate to={PATH_AUTH.login} />;
  }

  return <>{children}</>;
}
