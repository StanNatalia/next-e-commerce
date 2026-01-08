"use client";

import { useAuth } from "@/context/AuthContext";
import { loginUser, registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

const LoginPage = () => {
  const [mode, setMode] = useState<MODE>(MODE.LOGIN);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (mode === MODE.REGISTER) {
        const data = await registerUser({ name: username, email, password });
        setIsLoggedIn(true);
        router.push("/");
        toast.success("Registration was successfully!");
      }

      if (mode === MODE.LOGIN) {
        const data = await loginUser({ email, password });
        setIsLoggedIn(true);
        router.push("/");
        toast.success("You are logged into your account!");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
      toast.error("Something went wrong...Try again");
    } finally {
      setIsLoading(false);
    }
  };

  const formTitle = mode === MODE.LOGIN ? "Log in" : "Register";
  const buttonTitle = mode === MODE.LOGIN ? "Log in" : "Register";

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form
        className="flex flex-col gap-8 w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold text-center">{formTitle}</h1>

        {mode === MODE.REGISTER && (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              placeholder="John"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="ring-1 ring-gray-300 rounded-md p-2"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ring-1 ring-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ring-1 ring-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        {mode === MODE.LOGIN ? (
          <p
            className="text-sm underline cursor-pointer text-center"
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Don't"} have an account?
          </p>
        ) : (
          <p
            className="text-sm underline cursor-pointer text-center"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Already have an account?
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
