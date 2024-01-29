import { Navigate } from "react-router-dom";
// store
import { useSelector } from "../../../redux/store";
// routes
import { PATH_AUTH } from "../../../routes/paths";
// ----------------------------------------------------------------------

export default function GuestGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useSelector((state) => state.persist);
  if (user.IsLoggedIn) {
    return <Navigate to={PATH_AUTH.products} />;
  }

  return <>{children}</>;
}
