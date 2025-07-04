import type { z } from "zod";
import { axiosInstance } from "@/lib/axios";
import type { profileSchema } from "@/lib/zod/schema";

export type PostProfileRequest = z.infer<typeof profileSchema>;

export const postProfile = async (data: PostProfileRequest) =>
  axiosInstance.post("/users/me/profile", data);
