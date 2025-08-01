"use client";
import { useState } from "react";

import { Login } from "@/components/molecules/login";

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    username: string;
    userId: string;
  } | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (username: string, password: string) => {
    setLoginLoading(true);
    setLoginError("");

    // 模拟登录验证
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        setIsLoggedIn(true);
        setCurrentUser({
          username: username,
          userId: "admin_001", // 示例用户ID
        });
        setLoginError("");
      } else {
        setLoginError("Invalid username or password");
      }
      setLoginLoading(false);
    }, 1000);
  };

  return (
    <Login onLogin={handleLogin} isLoading={loginLoading} error={loginError} />
  );
}
