/* eslint-disable react/display-name */
import React, { Suspense, lazy, ElementType } from "react";

const Loadable =
  (Component: ElementType) => (props: React.ComponentProps<"div">) => {
    return (
      <Suspense fallback={"Loading"}>
        <Component {...props} />
      </Suspense>
    );
  };

// AUTH
export const LoginPage = Loadable(
  lazy(() => import("../pages/Login/LoginPage"))
);
export const SignUpPage = Loadable(
  lazy(() => import("../pages/SignUp/SignUpPage"))
);
export const ProductsPage = Loadable(
  lazy(() => import("../pages/Products/ProductPage"))
);
