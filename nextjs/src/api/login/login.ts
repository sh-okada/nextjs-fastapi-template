import { axiosInstance } from "@/lib/axios";
import type { loginSchema } from "@/lib/zod/schema";
import type { z } from "zod";

export type LoginResponse = {
  userId: string;
  username: string;
  accessToken: string;
};

export type LoginRequest = z.infer<typeof loginSchema>;

export const login = async (data: LoginRequest) =>
  axiosInstance.post<LoginResponse>("/auth/login", new URLSearchParams(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
