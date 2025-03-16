import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router";
import { loginAPI, registerApi } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      setIsReady(true);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email: string, username: string, password: string) => {
    try {
      var res = await registerApi(email, username, password);
      if (res) {
        localStorage.setItem("token", res?.data.token);
        const userObj = {
          username: res?.data.username,
          email: res?.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res?.data.token!);
        setUser(userObj!);
        toast.success("Login success");
        navigate("/search");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.warning("Server error occured");
    }
  };

  const loginUser = async (username: string, password: string) => {
    try {
      var res = await loginAPI(username, password);
      if (res) {
        localStorage.setItem("token", res.data.token);
        const userObj = {
          username: res.data.username,
          email: res.data.email,
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res.data.token!);
        setUser(userObj!);
        toast.success("Login Success!");
        navigate("/search");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (e) {
      toast.error("Server error occured");
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        registerUser: registerUser,
        loginUser: loginUser,
        logout: logout,
        isLoggedIn: isLoggedIn,
      }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
