import { axiosInstance } from "@/lib/axios";

export type GradeResponse = {
  id: string;
  name: string;
};

export const getGrades = async () =>
  axiosInstance.get<GradeResponse[]>("/grades");
