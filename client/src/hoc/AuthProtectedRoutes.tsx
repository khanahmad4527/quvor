import { useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const AuthProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const authContext = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authContext?.isAuth) {
      router.push("/login");
    }
  }, [authContext?.isAuth, router]);

  return authContext?.isAuth ? children : null;
};

export default AuthProtectedRoutes;
