import { axiosInstance } from "@/lib/axios";
import type { profileSchema } from "@/lib/zod";
import type { z } from "zod";

export type PostProfileRequest = z.infer<typeof profileSchema>;

export const postProfile = async (data: PostProfileRequest) =>
	axiosInstance.post("/users/profile", data);
