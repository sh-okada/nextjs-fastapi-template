import { axiosInstance } from "@/lib/axios";
import type { signUpSchema } from "@/lib/zod";
import type { z } from "zod";

export type SignUpRequest = z.infer<typeof signUpSchema>;

export const signup = async (data: SignUpRequest) =>
  axiosInstance.post("/auth/signup", data);
