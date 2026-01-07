import api from "@/lib/axios";

export type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export const registerUser = async (data: RegisterData) => {
  const response = await api.post("/api/user/register", data);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const loginUser = async (data: LoginData) => {
  const response = await api.post("/api/user/login", data);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
