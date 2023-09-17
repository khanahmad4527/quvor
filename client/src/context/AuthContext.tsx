import { useContext, createContext, useEffect, useState } from "react";
import { userDataInterface } from "@/utils/types";
import instance from "@/utils/axiosInstance";

interface AuthContextType {
  login: (email: string, password: string) => Promise<any>;
  signup: (userData: userDataInterface) => Promise<any>;
  logout: () => void;
  validateToken: () => Promise<any>;
  isAuth: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const token = localStorage.getItem("quvorUserToken");
  const [isAuth, setIsAuth] = useState<boolean>(token ? true : false);

  const signup = async (userData: userDataInterface) => {
    try {
      const response = await instance.post(`/user/auth/register`, userData);

      return response;
    } catch (error: any) {
      return error.response;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await instance.post(`/user/auth/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        setIsAuth(true);
      }
      return response;
    } catch (error: any) {
      return error.response;
    }
  };

  const validateToken = async () => {
    try {
      const response = await instance.get(`/validate-token`);
      return response;
    } catch (error: any) {
      return error.response;
    }
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("quvorUserToken");
  };

  useEffect(() => {
    const token = localStorage.getItem("quvorUserToken");
    if (token) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{ login, signup, logout, validateToken, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
