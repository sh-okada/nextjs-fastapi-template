import { axiosInstance } from "@/lib/axios";

export type DepartmentResponse = {
  id: number;
  name: string;
};

export const getDepartments = async () =>
  axiosInstance.get<DepartmentResponse[]>("/departments");
