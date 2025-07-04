import type { z } from "zod";
import { axiosInstance } from "@/lib/axios";
import type { postDocSchema } from "@/lib/zod/schema";

export type DocResponse = {
  id: string;
  title: string;
  text: string;
};

export type DocCountResponse = {
  count: number;
};

export type PostDocRequest = z.infer<typeof postDocSchema>;

export const getDoc = async (id: string) =>
  axiosInstance.get<DocResponse>(`/docs/${id}`);

export const getDocs = async (page?: number) =>
  axiosInstance.get<DocResponse[]>(`/docs?page=${page ?? 1}`);

export const getDocCount = async () =>
  axiosInstance.get<DocCountResponse>("/docs/count");

export const postDoc = async (data: PostDocRequest) =>
  axiosInstance.post("/docs", data);
