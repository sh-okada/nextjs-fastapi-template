import { axiosInstance } from "@/lib/axios";

export type DocResponse = {
  id: string;
  title: string;
  text: string;
};

export type DocCountResponse = {
  count: number;
};

export const getDoc = async (id: string) =>
  axiosInstance.get<DocResponse>(`/docs/${id}`);

export const getDocs = async (page?: number) =>
  axiosInstance.get<DocResponse[]>(`/docs?page=${page ?? 1}`);

export const getDocCount = async () =>
  axiosInstance.get<DocCountResponse>("/docs/count");
