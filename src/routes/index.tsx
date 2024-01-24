import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthGuard from "../components/molecules/Auth/AuthGuard";
import GuestGuard from "../components/molecules/Auth/GuestGuard";
// import LoginPage from "../pages/Login/LoginPage";
// import ProjectPage from "../pages/Projects/ProjectPage";
import { LoginPage, ProjectsPage, SignUpPage } from "./elements";

export const Router: React.FC = () => {
  return useRoutes([
    // Auth
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Navigate to="/login" replace />,
        },
        {
          path: "login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: "sign-up",
          element: (
            <GuestGuard>
              <SignUpPage />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: "/projects",
      element: (
        <AuthGuard>
          <ProjectsPage />
        </AuthGuard>
      ),
    },
    {
      path: "*",
      element: "Page Not Found",
    },
  ]);
};

export default Router;
