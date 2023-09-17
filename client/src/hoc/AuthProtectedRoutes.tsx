import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const AuthProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const authContext = UserAuth();
  const router = useRouter();

  if (authContext && authContext.isAuth) {
    return children;
  } else {
    router.push("/login");
    return null;
  }
};

export default AuthProtectedRoutes;
